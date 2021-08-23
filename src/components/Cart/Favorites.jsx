import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import { useEffect } from "react";
import { Button } from "@material-ui/core";
import { useState } from "react";
// import { useProducts } from "../../contexts/ProductContext";
import DeleteIcon from "@material-ui/icons/Delete";
import { useProducts } from "../../contexts/ProductContext";

const useStyles = makeStyles({
  tableMain: {
    backgroundImage: `url(${"https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/merchbgsoifjosirfjoisgvouggoejirgsoiengofina.jpg"})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop: "4.4rem",
  },
  textStyle: {
    display: "flex",
    margin: "0 auto",
    textAlign: "center",
    fontSize: "1.2vw",
    fontFamily: '"Merienda"',
    color: "white",
  },

  table: {
    maxWidth: "100%",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "space-between",
    minWidth: "50%",
  },
  cartItems: {
    display: "flex",
    margin: "3vw",
  },

  tableCellImg: {
    width: "22vw",
  },
  number: {
    width: "50px",
    height: "40px",
    backgroundColor: "rgba(255, 255, 255, .4)",
    borderRadius: "10px",
    textAlign: "center",
    fontFamily: '"Merienda"',
    border: "none",
    margin: "0 1vw",
  },
  button: {
    fontSize: "35px",
    cursor: "pointer",
    color: "white",
    width: "40vw",
    borderRadius: "30px",
    border: "3px solid white",
    margin: "50px",
  },
});

const Favorites = () => {
  const classes = useStyles();
  const [count, setCount] = useState([]);
  const { favs, getFavs, changeFavsCount, deleteFavsProducts } = useProducts();

  useEffect(() => {
    getFavs();
  }, [favs]);

  useEffect(() => {
    setCount();
  }, [favs]);
  console.log(favs);

  //   const handleCountChange = (count, id) => {
  //     if (count <= 0 || count >= 1000) {
  //       count = 1;
  //       changeFavsCount(count, id);
  //     } else {
  //       changeFavsCount(count, id);
  //     }
  //   };

  return (
    <div className={classes.tableMain}>
      <div className={classes.tableResponsive}>
        <table className={classes.table}>
          <tbody
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignContent: "center",
              justifyContent: "space-between",
            }}
          >
            {favs?.products?.length > 0 &&
              favs.products.map((product) => (
                <tr key={product.item.id}>
                  <td className={classes.cartItems}>
                    <div>
                      <img
                        className={classes.tableCellImg}
                        src={product.item.img}
                        alt={product.item.title}
                      />
                      <td className={classes.textStyle}>
                        {product.item.title} {+product.item.price} ${" "}
                        <Button
                          onClick={() => deleteFavsProducts(product.item.id)}
                        >
                          <DeleteIcon />
                        </Button>
                      </td>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <Link to="/payform">
          <Button className={classes.button}>
            BUY NOW FOR {favs.totalPrice}$
          </Button>
        </Link> */}
      </div>
      {/* <h3 className={classes.textStyle} variant="h5">
        Total: {cart.totalPrice}$
      </h3> */}
    </div>
  );
};

export default Favorites;
