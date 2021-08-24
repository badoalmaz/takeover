import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useProducts } from "../../contexts/ProductContext";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import MerchComments from "./MerchComments";

const useStyles = makeStyles((theme) => ({
  back: {
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop: "4.4rem",
    backgroundImage: `url(${"https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/merchbgsoifjosirfjoisgvouggoejirgsoiengofina.jpg"})`,
  },
  root: {
    flexGrow: 1,
    width: "100%",
  },
  paper: {
    marginTop: "4.4rem",
    // backgroundColor: "rgba(255, 255, 255, .4)",
    backgroundColor: "transparent",
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "80%",
    color: "white",
    fontFamily: '"Merienda"',
    boxShadow: "none !important",
    border: "none !important",
  },
  detailsInfo: {
    marginTop: "12vh",
  },
  img: {
    marginTop: "4rem",
    margin: "auto",
    display: "block",
    height: "35vw",
    width: "35vw",
  },
  main_container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  detailsFont: {
    fontFamily: '"Merienda"',
  },
}));

const MerchDetails = () => {
  const { id } = useParams();
  const { getProductDetails, productDetails } = useProducts();
  const classes = useStyles();

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  return (
    <div className={classes.back}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid className={classes.main_container} container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="MERCH"
                  src={productDetails.img}
                />
              </ButtonBase>
            </Grid>

            <div style={{ display: "block", textAlign: "center" }}>
              <div>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs className={classes.detailsInfo}>
                      <Typography
                        variant="h3"
                        component="h2"
                        className={classes.detailsFont}
                      >
                        {productDetails.title}
                      </Typography>
                      <br />
                      <Typography
                        variant="h5"
                        component="h2"
                        className={classes.detailsFont}
                      >
                        ALBUM: {productDetails.type}
                      </Typography>
                      <br />
                      <Typography variant="h6" component="h2">
                        {productDetails.description}
                      </Typography>
                      <br />
                      <Typography variant="h3" component="h2">
                        {productDetails.price}$
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
          <div style={{ marginTop: "35vh" }}>
            <MerchComments />
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default MerchDetails;
