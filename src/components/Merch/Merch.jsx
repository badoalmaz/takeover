import { Container, Grid, makeStyles } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";
import { getCurrentPage } from "../../helpers/functions";
import Footer from "../Footer/Footer";
import MerchBar from "./MerchBar";
import MerchCard from "./MerchCard";

const useStyles = makeStyles((theme) => ({
  merchContainer: {
    // backgroundImage: `url(${"https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/textureftrsdkfjhsdiughsiugh.jpg"})`,
    backgroundSize: "cover",
  },
  merchPicture: {
    maxHeight: "20vh",
  },
  merchContent: {
    // marginLeft: "4vw",
    // marginRight: "4vw",
    display: "flex",
    justifyContent: "space-around",
  },

  catalogueBar: {
    width: "100%",
  },

  pagination: {
    margin: "20px auto",
  },
}));
const Merch = () => {
  const classes = useStyles();
  const { productsData, getProductsData, pages } = useProducts();
  const [page, setPage] = useState(getCurrentPage());
  const history = useHistory();
  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    // console.log(page);
  }, [page]);

  const handlePage = (e, page) => {
    const search = new URLSearchParams(window.location.search);
    search.set("_page", page);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProductsData();
    setPage(page);
  };
  useEffect(() => {
    console.log(productsData);
  }, [productsData]);
  return (
    <>
      <MerchBar />
      <div className={classes.merchContainer}>
        <Grid className={classes.merchContent} container spacing={6}>
          {productsData ? (
            productsData.map((item) => (
              // <Grid item>
              <MerchCard item={item} key={item.id} />
              // </Grid>
            ))
          ) : (
            <>
              <h1>...loading</h1>
            </>
          )}
        </Grid>
      </div>

      <div style={{ alignSelf: "center", margin: "20px auto" }}>
        <Pagination
          style={{
            display: "flex",
            alignSelf: "center",
            margin: "20px auto",
            justifyContent: "center",
          }}
          count={pages}
          color="secondary"
          page={+page}
          onChange={handlePage}
        />
      </div>
      <Footer />
    </>
  );
};

export default Merch;
