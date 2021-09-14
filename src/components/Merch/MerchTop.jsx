import { ADMIN, JSON_API_PRODUCTS } from "../../helpers/consts";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

import {
  CardActionArea,
  Container,
  IconButton,
  Card,
  CardMedia,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../.././contexts/AuthContextProvider";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    alignSelf: "center",
    maxWidth: 350,
    backgroundColor: "transparent",
    border: "none !important",
    boxShadow: "none",
    textAlign: "center",
    margin: "1.5vw",
    "& .appear-item": {
      backgroundColor: "white",
      paddingTop: "20px",
      height: "25vw",
      width: "25vw",
      opacity: 0.6,
      transform: "translateY(-20px)",
      transition: "0.4s",
      top: "0",
      left: "0",
      fontSize: "20px",
      color: "black",
      position: "absolute",
      visibility: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    "&:hover .appear-item": {
      transform: "translateY(0)",
      visibility: "visible",
    },
  },
  media: {
    height: "25vw",
    width: "25vw",
  },
  topContainer: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "transparent",
  },
}));

const MerchTop = () => {
  const classes = useStyles();
  const {
    user: { email },
  } = useAuth();
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    let arrCount = [];
    const { data } = await axios(`${JSON_API_PRODUCTS}`);
    data.forEach((elem) => {
      if (elem?.likes?.length > 0) {
        arrCount.push(elem);
      }
    });
    setProducts(arrCount.sort((a, b) => b.likes.length - a.likes.length));
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <span
        style={{ fontSize: "7vw", display: "flex", justifyContent: "center" }}
      >
        POPULAR
      </span>
      <div className={classes.topContainer}>
        {/* Popular */}
        {products.slice(0, 3).map((item) => (
          <Card className={classes.root}>
            <CardActionArea>
              <NavLink to={`/merchDetails/${item.id}`}>
                <div className={classes.figure}>
                  <CardMedia component="img" image={item.img} />
                  <div className="appear-item">
                    <span>{item.title}</span>

                    <span> {item.price}$</span>
                    <IconButton>
                      {/* <ThumbUpAltIcon /> */}
                      <img
                        style={{ width: "30px", margin: "2px" }}
                        src="https://image.flaticon.com/icons/png/512/686/686325.png"
                        alt=""
                      />
                      {/* <span>Rating:</span> */}

                      {item.likes.length}
                    </IconButton>
                  </div>
                </div>
              </NavLink>
            </CardActionArea>
            <CardActions>
              <Container>
                {/* <IconButton>
                  
                  <img
                    style={{ width: "30px", margin: "2px" }}
                    src="https://image.flaticon.com/icons/png/512/686/686325.png"
                    alt=""
                  />
              

                  {item.likes.length}
                </IconButton> */}
              </Container>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  );
};

export default MerchTop;
