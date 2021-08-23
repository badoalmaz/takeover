import { makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Container, Paper, TextField } from "@material-ui/core";
import { useProducts } from "../../contexts/ProductContext";

import { Button } from "@material-ui/core";
import { handleInp } from "../../helpers/functions";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(5),
    maxWidth: 1000,
    height: "700px",
    backgroundImage: `url(${"https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/bk-21.jpg"})`,
    // backgroundColor: "rgba(255, 255, 255, .4)",
    // fontSize: "90px",
    fontFamily: '"Merienda"',
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "60px",
  },
  title: {
    textAlign: "center",
    color: "#EC87B2",
    marginTop: "3rem",
    marginLeft: "auto",
  },
  container: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    color: "black",
    size: "5rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "35rem",
    margin: "2rem",
  },
  textfield: {
    marginTop: "2rem",
    color: "white",
  },

  addProductParalax: {
    backgroundImage: `url(${"https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/merchbgsoifjosirfjoisgvouggoejirgsoiengofina.jpg"})`,
    minHeight: "800px",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  saveIcon: {
    width: "40px",
    height: "40px",
  },
  iconsContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "10px auto",
    // alignSelf: "center",
  },
}));

const EditProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    type: "",
    image: "",
    description: "",
    price: 0,
  });
  const classes = useStyles();
  const { getProductDetails, productDetails, history, saveEditedProduct } =
    useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  return (
    <div className={classes.addProductParalax}>
      <Paper elevation={3} className={classes.paper}>
        <h1 className={classes.title}>EDIT MERCH</h1>
        <Container className={classes.container}>
          {/* <img
            className={classes.addImage}
            src={
              product.image
                ? product.image
                : "https://i.pinimg.com/originals/2e/26/27/2e26273f9467493f1e5045f2856daeef.png"
            }
          /> */}

          <form className={classes.form} noValidate autoComplete="off">
            <TextField
              name="title"
              value={product.title}
              variant="outlined"
              label="Title"
              onChange={(e) => handleInp(e, product, setProduct)}
              className={classes.textfield}
              color="secondary"
            />
            <TextField
              name="type"
              value={product.type}
              variant="outlined"
              label="Type"
              onChange={(e) => handleInp(e, product, setProduct)}
              onChange={handleInp}
              className={classes.textfield}
              color="secondary"
            />
            <TextField
              name="img"
              value={product.img}
              variant="outlined"
              label="Image URL"
              onChange={(e) => handleInp(e, product, setProduct)}
              className={classes.textfield}
              color="secondary"
            />
            <TextField
              name="price"
              value={product.price}
              variant="outlined"
              label="Price"
              onChange={(e) => handleInp(e, product, setProduct)}
              className={classes.textfield}
              color="secondary"
            />
            <TextField
              name="description"
              value={product.description}
              variant="outlined"
              label="Description"
              onChange={(e) => handleInp(e, product, setProduct)}
              className={classes.textfield}
              color="secondary"
            />
            <Container className={classes.iconsContainer}>
              <Link to="/merch">
                <Button onClick={() => saveEditedProduct(product.id, product)}>
                  <img
                    className={classes.saveIcon}
                    src="https://image.flaticon.com/icons/png/512/4787/4787588.png"
                    alt=""
                  />
                </Button>
              </Link>

              <Link to="/merch">
                <Button onClick={() => history.push("/merch")}>
                  {/* <CloseIcon /> */}
                  <img
                    className={classes.saveIcon}
                    src="https://image.flaticon.com/icons/png/512/2570/2570147.png"
                    alt=""
                  />
                </Button>
              </Link>
            </Container>
          </form>
        </Container>
      </Paper>
    </div>
  );
};

export default EditProductPage;
