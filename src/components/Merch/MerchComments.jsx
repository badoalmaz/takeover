import { makeStyles, TextField, Button, Fade } from "@material-ui/core";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { CircularProgress, IconButton } from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";
import { useState } from "react";
// import { useAuth } from "../../contexts/AuthContext";
import SendIcon from "@material-ui/icons/Send";
import SaveIcon from "@material-ui/icons/Save";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useAuth } from "../../contexts/AuthContextProvider";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     flexGrow: 1,
  //   },
  paper: {
    //   padding: theme.spacing(2),
    //   margin: "auto",
    //   maxWidth: "100%",
    //   maxHeight: "100%",
    //   height: "100vh",
    //   position: "relative",
    // color: theme.palette.common.white,
    //   marginBottom: theme.spacing(4),
    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    //   backgroundPosition: "top",
    //   marginBottom: theme.spacing(0),
    width: "100%",
  },
  //   image: {
  //     width: 200,
  //     height: "100%",
  //   },
  //   img: {
  //     margin: "auto",
  //     display: "block",
  //     maxHeight: "50vh",
  //   },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper_modal: {
    backgroundColor: theme.palette.background.paper,
    // backgroundColor: "black",
    color: "white",
    border: "2px solid #000",
    boxShadow: theme.shadows[1],
    padding: theme.spacing(2, 4, 3),
  },
  input: {
    // color: "#e8c271",
    // borderRightColor: "#FFF",
    fontSize: "22 px",
  },
  input__label: {
    // color: "#f2e49d",
    // borderRightColor: "#FFF",
  },
}));

const MerchComments = () => {
  const { getProductDetails, productDetails, history, saveEditedProduct } =
    useProducts();
  const { user } = useAuth();
  const { id } = useParams();
  useEffect(() => {
    getProductDetails(id);
  }, [id]);
  const [product, setProduct] = useState(productDetails);
  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);
  const classes = useStyles();
  const [comment, setComment] = useState({});
  const handleInput = (e) => {
    if (productDetails) {
      let d = new Date(Date.now());
      d.toString();
      setComment({
        email: user.email,
        comment: e.target.value,
        date: new Date().toLocaleString(),
      });
      console.log(comment);
    }
  };
  const sendComment = async (e, id, productos) => {
    e.preventDefault();
    if (
      e.target.parentNode?.firstChild.lastChild.firstChild &&
      e.target.parentNode.firstChild.lastChild.firstChild.value.trim()
    ) {
      e.target.parentNode.firstChild.lastChild.firstChild.value = "";
      let newComment = [...productos.comments];
      newComment.push(comment);
      let productWithComment = {
        ...productos,
        comments: newComment,
      };
      const data = await saveEditedProduct(id, productWithComment);
      setProduct(productWithComment);
    }
  };
  const deleteComment = async (index, id, productos) => {
    let deletedComment = [...productos.comments];
    const del = deletedComment.splice(index, 1);
    let productWithoutComment = {
      ...productos,
      comments: deletedComment,
    };
    const data = await saveEditedProduct(id, productWithoutComment);
    setProduct(productWithoutComment);
  };
  const editComment = async (index, id, productos) => {
    handleClose();
    let editedComment = [...productos.comments];
    console.log(index);
    const del = editedComment.splice(index, 1, comment);
    let productWithEditedComment = {
      ...productos,
      comments: editedComment,
    };
    const data = await saveEditedProduct(id, productWithEditedComment);
    setProduct(productWithEditedComment);
  };
  const whoIsAuthor = (commentixx) => {
    if (user && commentixx.email === user.email) {
      return true;
    } else {
      return false;
    }
  };
  const marginOfComment = (commentixx) => {
    if (whoIsAuthor(commentixx)) {
      return {
        marginLeft: "100px",
        maxWidth: "350px",
      };
    } else {
      return {
        maxWidth: "350px",
      };
    }
  };
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {productDetails ? (
        <Paper
          style={{ backgroundColor: "transparent" }}
          className={classes.paper}
        >
          <Paper
            style={{
              backgroundColor: "#00000000",
              color: "white",
              //   maxWidth: "500px",
              alignSelf: "center",
              width: "100%",
            }}
            spacing={2}
          >
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  {product?.comments ? (
                    product.comments.map((commentix, index) => (
                      <div style={marginOfComment(commentix)}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            // justifyContent: "flex-start",
                            // width: "100%",
                          }}
                        >
                          <p style={{ color: "white", fontSize: "28px" }}>
                            {commentix.email}
                          </p>
                          <p
                            style={{
                              fontSize: "12px",
                              color: "white",
                              marginLeft: "10px",
                            }}
                          >
                            {commentix.date}
                          </p>
                        </div>
                        <div>
                          <p
                            style={{
                              color: "black",
                              marginBottom: "2px",
                              fontSize: "24px",
                            }}
                          >
                            {commentix.comment}
                          </p>
                        </div>
                        {whoIsAuthor(commentix) ? (
                          <button
                            onClick={() =>
                              deleteComment(index, product.id, product)
                            }
                            style={{
                              transform: "scale(0.7)",
                              //   color: "#f7a15f",
                              //   backgroundColor: "#3d2740",
                              borderRadius: "5px",
                            }}
                          >
                            <DeleteIcon />
                          </button>
                        ) : (
                          <></>
                        )}
                        {whoIsAuthor(commentix) ? (
                          <button
                            type="button"
                            onClick={() => handleOpen()}
                            style={{
                              transform: "scale(0.7)",
                              //   color: "#f7a15f",
                              //   backgroundColor: "#3d2740",
                              //   borderRadius: "5px",
                            }}
                          >
                            <EditIcon />
                          </button>
                        ) : (
                          <></>
                        )}
                        <Modal
                          aria-labelledby="spring-modal-title"
                          aria-describedby="spring-modal-description"
                          className={classes.modal}
                          open={open}
                          onClose={handleClose}
                          closeAfterTransition
                          BackdropComponent={Backdrop}
                          BackdropProps={{
                            timeout: 500,
                          }}
                        >
                          <Fade in={open}>
                            <div className={classes.paper_modal}>
                              <TextField
                                variant="outlined"
                                label="Edit Comment"
                                color="secondary"
                                style={{ width: "450px" }}
                                onChange={(e) => handleInput(e)}
                              />
                              <Button
                                type="submit  "
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                                onClick={(e) =>
                                  editComment(index, product.id, product)
                                }
                              >
                                <SaveIcon
                                  color="secondary"
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    // color: "white",
                                  }}
                                />
                              </Button>
                            </div>
                          </Fade>
                        </Modal>
                      </div>
                    ))
                  ) : (
                    <></>
                  )}
                  <form style={{ margin: "3vw 8vw 0 7vw" }}>
                    <TextField
                      variant="outlined"
                      label="Comment"
                      color="secondary"
                      style={{ width: "90%" }}
                      onChange={(e) => handleInput(e)}
                      InputLabelProps={{ className: classes.input__label }}
                      inputProps={{ className: classes.input }}
                    />
                    <Button
                      type="submit  "
                      edge="end"
                      aria-label="account of current user"
                      aria-haspopup="true"
                      color="inherit"
                      onClick={(e) => sendComment(e, product.id, product)}
                    >
                      <SendIcon color="white" />
                    </Button>
                  </form>

                  {/* <Typography variant="h4">{productDetails.price}$</Typography> */}
                </Grid>
                <Grid item>
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={() => history.push("/merch")}
                  >
                    back
                    {/* <RestoreIcon
                      style={{
                        border: "2px solid rgba(52, 52, 52, 0.5)",
                        borderRadius: "50%",
                      }}
                      color="white"
                    /> */}
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Paper>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default MerchComments;
