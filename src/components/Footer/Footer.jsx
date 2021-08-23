import React from "react";

let footerContainer = {
  position: "relative",
  zIndex: 999,
  fontSize: 0,
  background: `url(${"https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/textureftrsdkfjhsdiughsiugh.jpg"}) 0 0 no-repeat`,
  backgroundSize: "cover",
  margin: "0 auto",
  textAlign: "center",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "8vh",
};
let footerWrap = {
  textAlign: "center",
};
let copyrightWrapper = {
  textTransform: "lowercase",
  color: "#E999B6",
  letterSpacing: 0,
  lineHeight: 1.3,
  fontSize: "0.9vw",
  fontFamily: "'Gothic A1', sans-serif",
  fontWeight: 400,
  fontStyle: "normal",
  maxWidth: "40vw",
  margin: "0 auto",
  padding: "1.3vw 0",
};
let mailContainer = {
  zIndex: 4,
  position: "relative",
  fontSize: 0,
  background: `url(${"https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/bk-21.jpg"}) 0 0 no-repeat`,
  margin: "auto 0",
  textAlign: "center",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "18vh",
};
const Footer = () => {
  return (
    <>
      <div style={mailContainer}></div>
      <div style={footerContainer}>
        <div style={footerWrap}>
          <div style={copyrightWrapper}>
            <span>© 2021 copyright fbr and tøp</span>
            <br />
            <span>
              terms of use | privacy policy | ad choices | cookies policy | do
              not sell my personal information
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
