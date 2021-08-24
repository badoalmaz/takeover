import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

import { useProducts } from "../../contexts/ProductContext";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
// import { useAuth } from "../../contexts/AuthContext";
import { ADMIN } from "../../helpers/consts";
import { useAuth } from "../../contexts/AuthContextProvider";

const MerchBar = () => {
  const { history, getProductsData, cart, favs } = useProducts();
  const [type, setType] = useState(getType());
  const {
    user: { email },
  } = useAuth();

  function getType() {
    const search = new URLSearchParams(history.location.search);
    return search.get("type");
  }

  function getPrice() {
    const search = new URLSearchParams(history.location.search);
    return search.get("price_lte");
  }

  const handleChangeType = (e) => {
    if (e.target.value == "all") {
      const search = new URLSearchParams(history.location.search);
      search.delete("type");
      history.push(`${history.location.pathname}?${search.toString()}}`);
      getProductsData();
      setType(e.target.value);
      return;
    }
    const search = new URLSearchParams(history.location.search);
    search.set("type", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProductsData();
    setType(e.target.value);
  };

  const handleValue = (e) => {
    const search = new URLSearchParams(history.location.search);
    search.set("q", e.target.value);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProductsData();
  };

  return (
    <div>
      <Navbar
        expand="lg"
        style={{
          //   backgroundColor: "#EC87B2",
          marginTop: "4.5vw",
        }}
      >
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{
              maxHeight: "100px",
              fontSize: 20,
              fontFamily: '"Merienda"',
              display: "grid",
              gridAutoColumns: "3fr 1fr",
            }}
            // navbarScroll
          >
            {/* <NavDropdown
              title="Categories"
              id="navbarScrollingDropdown"
              style={{
                backgroundColor: " rgba(255,255,255,0.5)",
                borderRadius: "30px",
              }}
              value={type}
              onChange={handleChangeType}
            > */}
            <RadioGroup
              value={type}
              onChange={handleChangeType}
              style={{
                gridAutoColumns: "repeat(4, 1fr",
                display: "block",
              }}
            >
              <FormControlLabel
                style={{
                  backgroundColor: "#707070",
                  color: "white",
                  width: "18vw",
                  height: "4.5vw",
                }}
                value="VESSEL"
                control={<Radio />}
                label="VESSEL"
              />
              <FormControlLabel
                style={{
                  backgroundColor: "#f04937",
                  color: "white",
                  width: "18vw",
                  height: "4.5vw",
                }}
                value="BLURRYFACE"
                control={<Radio />}
                label="BLURRYFACE"
              />
              <FormControlLabel
                style={{
                  // backgroundColor: "#595b3c",
                  backgroundColor: "rgb(234, 225,110)",
                  color: "white",
                  width: "18vw",
                  height: "4.5vw",
                }}
                value="TRENCH"
                control={<Radio />}
                label="TRENCH"
              />

              <FormControlLabel
                style={{
                  backgroundColor: "#79cadd",
                  color: "white",
                  width: "18vw",
                  height: "4.5vw",
                }}
                value="SCALED AND ICY"
                control={<Radio />}
                label="SCALED AND ICY"
              />
            </RadioGroup>
            {/* </NavDropdown> */}
          </Nav>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              color="secondary"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => handleValue(e)}
              style={{
                backgroundColor: "rgba(255,255,255,0.5)",
                borderRadius: "20px",
                width: "15vw",
              }}
            />
          </Form>
          {/* </Navbar.Collapse> */}

          {email === ADMIN ? null : (
            <>
              {email ? (
                <>
                  <Link to="/cart">
                    <Button variant="contained" bg="secondary">
                      <h4
                        style={{
                          color: "grey",
                          fontSize: "14px",
                          // backgroundColor: "black",
                        }}
                      >
                        {cart?.products ? cart.products.length : 0}
                      </h4>
                      <img
                        src="https://image.flaticon.com/icons/png/512/679/679903.png"
                        alt=""
                        style={{ height: "50px" }}
                      />
                    </Button>
                  </Link>
                  <Link to="/favorites">
                    <Button variant="contained" bg="secondary">
                      <h4
                        style={{
                          color: "grey",
                          fontSize: "14px",
                          // backgroundColor: "black",
                        }}
                      >
                        {favs?.products ? favs.products.length : 0}
                      </h4>
                      <img
                        src="https://image.flaticon.com/icons/png/512/4372/4372873.png"
                        alt=""
                        style={{ height: "50px" }}
                      />
                    </Button>
                  </Link>
                </>
              ) : null}
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MerchBar;
