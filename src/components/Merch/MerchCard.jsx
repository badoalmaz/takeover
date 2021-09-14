import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ReceiptIcon from "@material-ui/icons/Receipt";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Container, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";
import { useAuth } from "../../contexts/AuthContextProvider";
import { ADMIN } from "../../helpers/consts";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import axios from "axios";
import { useState } from "react";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import { JSON_API_PRODUCTS } from "../../helpers/consts";
import TextsmsIcon from "@material-ui/icons/Textsms";

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
      opacity: 0.8,
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
}));

const MerchCard = ({ item }) => {
  const classes = useStyles();
  const [likeCount, setLikeCount] = useState(item?.likes?.length);
  const [like, setLike] = useState(false);
  const {
    user: { email },
  } = useAuth();
  const {
    deleteProduct,
    history,
    addProductToCart,
    cart,
    favs,
    checkProductInCart,
    addProductToFavs,
    checkProductInFavs,
  } = useProducts();

  const addUserLike = async (email, id) => {
    const { data } = await axios(`${JSON_API_PRODUCTS}/${id}`);
    let emailToFind = data.likes.filter((user) => user === email);
    if (emailToFind.length == 0) {
      data.likes.push(email);
    } else {
      data.likes = data.likes.filter((item) => item !== email);
    }
    await axios.patch(`${JSON_API_PRODUCTS}/${id}`, data);
    setLikeCount(data.likes.length);
    checkUserLike(email, id);
  };

  const checkUserLike = async (email, id) => {
    const { data } = await axios(`${JSON_API_PRODUCTS}/${id}`);
    console.log(data);
    let found = data.likes.filter((user) => email === user);
    console.log(found);
    return found.length > 0 ? setLike(true) : setLike(false);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {/* <NavLink to={`/merchDetails/${item.id}`}>
          </NavLink> */}
        <div className={classes.figure}>
          <CardMedia component="img" image={item.img} />
          <div className="appear-item">
            <Link
              style={{ color: "secondary" }}
              to={`/merchDetails/${item.id}`}
            >
              <span> ...</span>
            </Link>
            <span>{item.title}</span>

            <span> {item.price}$</span>

            {/* </div>
          </div>
        </NavLink>
      </CardActionArea> */}
            <CardActions>
              <Container>
                {email === ADMIN ? (
                  <>
                    <Button
                      onClick={() => history.push(`/edit/${item.id}`)}
                      className={classes.button}
                    >
                      <ReceiptIcon />
                    </Button>
                    <Button
                      className={classes.button}
                      onClick={() => deleteProduct(item.id)}
                      // style={{
                      //   backgroundColor: "rgba(1, 1, 1, .5",
                      //   borderRadius: "10px",
                      //   color: "white",
                      //   borderColor: "#eebb4f",
                      //   fontFamily: '"Merienda"',
                      //   margin: "8px",
                      //   height: "6vh",
                      // }}
                    >
                      <DeleteOutlineIcon />
                    </Button>
                  </>
                ) : (
                  <>
                    <IconButton
                      color={checkProductInCart(item.id) ? "secondary" : ""}
                      onClick={() => addProductToCart(item)}
                      aria-label="add to cart"
                    >
                      <AddShoppingCartIcon />
                    </IconButton>

                    <IconButton
                      color={checkProductInFavs(item.id) ? "secondary" : ""}
                      onClick={() => addProductToFavs(item)}
                      aria-label="add to favs"
                    >
                      <StarBorderIcon />
                    </IconButton>
                    <IconButton
                      color={like ? "secondary" : ""}
                      onClick={() => addUserLike(email, item.id)}
                    >
                      <ThumbUpAltIcon />
                      {likeCount}
                    </IconButton>
                  </>
                )}
              </Container>
            </CardActions>
          </div>
        </div>
        {/* </NavLink> */}
      </CardActionArea>
    </Card>
  );
};

export default MerchCard;
