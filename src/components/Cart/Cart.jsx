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
    // width: "100vw",
    // height: "100%",
    // backgroundImage: `url(${"https://i.pinimg.com/originals/f0/a9/0c/f0a90c2bc63dfa352e39c28dfff16d1f.jpg"})`,
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    marginTop: "4.4rem",

    // alignSelf: "center",
  },
  textStyle: {
    display: "flex",
    justifyContent: "center",
    // alignSelf: "center",
    // width: "200px",
    margin: "0 auto",
    textAlign: "center",
    fontSize: "1.2vw",
    fontFamily: '"Merienda"',
    color: "white",
  },
  //   tableResponsive: {
  //     // width: "85vw",
  //     // position: "relative",
  //     // overflowX: "auto",
  //   },
  table: {
    maxWidth: "100%",
    borderRadius: "20px",
    // backgroundColor: "rgba(255, 255, 255, .4)",
    display: "flex",
    justifyContent: "space-between",
    // margin: "3vw",
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

const Cart = () => {
  const classes = useStyles();
  const [count, setCount] = useState([]);
  const { cart, getCart, changeProductCount, deleteCartProducts } =
    useProducts();

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    setCount();
  }, [cart]);
  console.log(cart);

  const handleCountChange = (count, id) => {
    if (count <= 0 || count >= 1000) {
      count = 1;
      changeProductCount(count, id);
    } else {
      changeProductCount(count, id);
    }
  };

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };
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
            {cart?.products?.length > 0 &&
              cart.products.map((product) => (
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
                      </td>

                      <td
                        className={classes.textStyle}
                        style={{
                          display: "flex",
                          //   justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        <input
                          className={classes.number}
                          type="number"
                          value={product.count}
                          onChange={(e) =>
                            handleCountChange(e.target.value, product.item.id)
                          }
                        />
                        <td className={classes.textStyle}>
                          PRICE: {+product.subPrice} $
                        </td>
                        <Button
                          onClick={() => deleteCartProducts(product.item.id)}
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
        <Link to="/payform">
          <Button className={classes.button} onClick={cartCleaner}>
            BUY NOW FOR {cart.totalPrice}$
          </Button>
        </Link>
      </div>
      {/* <h3 className={classes.textStyle} variant="h5">
        Total: {cart.totalPrice}$
      </h3> */}
    </div>
  );
};

export default Cart;
