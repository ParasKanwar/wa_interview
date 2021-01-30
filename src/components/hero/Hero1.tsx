import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import useBreakPoints from "../../hooks/useBreakPoints";
import styles from "./hero1.module.css";
import { ArrowForwardOutlined } from "@material-ui/icons";
const Hero1 = () => {
  const deviceType = useBreakPoints();
  return (
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
                marginBottom: 20,
              }}
            >
              Get the operational sophistication to achieve, sustain, and scale
              recurring revenue.
            </span>
          </div>
        </Grid>
        <Grid container xs={12} item justify="center" alignItems="center">
          <button
            className={styles.schedule_a_demo}
            style={{
              marginTop: deviceType === "mobile" ? 10 : 0,
              marginRight: deviceType === "mobile" ? 0 : 10,
              marginBottom: deviceType === "mobile" ? 10 : 0,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Schedule a Demo
              <ArrowForwardOutlined
                className={styles.arrow}
              ></ArrowForwardOutlined>
            </div>
          </button>
          <button className={styles.sign_up}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>Sign up for free</div>

              <ArrowForwardOutlined
                className={styles.arrow}
              ></ArrowForwardOutlined>
            </div>
          </button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero1;
