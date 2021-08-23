import React from "react";

const Tour = () => {
  let tourContainer = {
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh",
    backgroundImage: `url(${"https://cdna.artstation.com/p/assets/images/images/036/457/414/large/nik-tucek-twenty-one-pilots-scaled-and-icy-nik-tucek.jpg?1617730748"})`,
  };

  let homepageBg = {
    width: "100%",
    height: "auto",
    display: "block",
    border: 0,
    margin: "0",
    outline: "0",
    padding: "0",
    verticalAlign: "baseline",
    color: "#000",
  };
  let gradient = {
    position: "absolute",
    bottom: "-10%",
    zIndex: "0",
    width: "100%",
    height: "auto",
  };
  return (
    <>
      <div style={tourContainer}></div>
    </>
  );
};

export default Tour;
