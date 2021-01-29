import React from "react";
import useBreakPoints from "../hooks/useBreakPoints";
import Navbar from "../components/navbar/navbar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
const Home = () => {
  const deviceType = useBreakPoints();
  return (
    <main>
      <Navbar></Navbar>
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            container
            justify="center"
            alignItems="center"
            style={{
              minHeight: "50vh",
            }}
          >
            <div
              style={{
                color: "#500AD2",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                fontSize: deviceType === "computer" ? "40px" : "36px",
                fontFamily: "poppins",
                fontWeight: "bold",
              }}
            >
              <span>Subscription Billing & Revenue Operations</span>
              <span
                style={{
                  color: "black",
                  fontSize: deviceType === "computer" ? "40px" : "36px",
                }}
              >
                for Fast-growth B2B SaaS
              </span>
              <span
                style={{
                  color: "black",
                  marginTop: 40,
                  maxWidth: 400,
                  fontWeight: 400,
                  fontSize: deviceType === "mobile" ? 14 : 16,
                }}
              >
                Get the operational sophistication to achieve, sustain, and
                scale recurring revenue.
              </span>
            </div>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Home;
