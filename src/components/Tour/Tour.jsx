import { Button } from "@material-ui/core";
import React from "react";

const Tour = () => {
  let tourContainer = {
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh",
    backgroundImage: `url(${"https://cdna.artstation.com/p/assets/images/images/036/457/414/large/nik-tucek-twenty-one-pilots-scaled-and-icy-nik-tucek.jpg?1617730748"})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  let tourBtnA = {
    display: "block",
    // maxWidth: "11.875vw",
    background: "#EC87B2",
    margin: "0 auto",
    height: "5.104vw",
    lineHeight: "5.104vw",
    textAlign: "center",
    fontSize: "1.302vw",
    letterSpacing: "0.25px",
    boxSizing: "border-box",
    color: "#FFFFFF",
    marginTop: "1.56vw",
    fontFamily: "'Aclonica', sans-serif",
    fontHeight: "normal",
    fontStyle: "normal",
    border: "none",
  };

  return (
    <>
      <div style={tourContainer}>
        <a
          href="https://www.ticketmaster.com/twenty-one-pilots-milwaukee-wisconsin-09-04-2021/event/07005AD5DFD223EE?irgwc=1&clickid=yYY19DS9fxyLRwNxiAS6PRWLUkBWL%3AwSg2JqUM0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate"
          target="_blank"
        >
          <Button
            style={tourBtnA}
            // style={tourBtnA}
          >
            BUY TICKETS
          </Button>
        </a>
      </div>
    </>
  );
};

export default Tour;
