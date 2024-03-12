import React from "react";
import Card from "../Cards/Card.jsx";

const Home = () => {
  return (
    <>
      <div id="parent" style={{ position: "relative" }}>
        <div
          id="child1"
          style={{
            position: "absolute",
            top: "100px",
            marginLeft: "10px",
            width: "100%",
            padding: "0px 50px",
          }}
        >
          <hr
            style={{
              color: "#feca03",
              backgroundColor: "#feca03",
              height: 1,
              width: "100%",
            }}
          />
          <h3
            style={{
              marginLeft: "100px",
              fontWeight: "400",
              fontSize: "large",
            }}
          >
            Most Popular Host
          </h3>
          <hr
            style={{
              color: "#feca03",
              backgroundColor: "#feca03",
              height: 1,
              width: "100%",
            }}
          />
        </div>

        <div
          id="card"
          style={{ position: "relative", top: "300px", padding: "0 100px" }}
        >
          <Card />
        </div>

        <div
          id="child2"
          style={{
            position: "absolute",
            top: "500px",
            width: "100%",
            padding: "0px 50px",
          }}
        >
          <hr
            style={{
              color: "#feca03",
              backgroundColor: "#feca03",
              height: 1,
              width: "100%",
            }}
          />
          <h3
            style={{
              marginLeft: "100px",
              fontWeight: "400",
              fontSize: "large",
            }}
          >
            Low Cost Price
          </h3>
          <hr
            style={{
              color: "#feca03",
              backgroundColor: "#feca03",
              height: 1,
              width: "100%",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
