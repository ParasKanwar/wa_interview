import { Container, Divider, Grid, Typography } from "@material-ui/core";
import { ArrowForward, ArrowForwardOutlined } from "@material-ui/icons";
import styles from "./hero3.module.css";
import React from "react";
import useBreakPoints from "../../hooks/useBreakPoints";
import hero_1_styles from "./hero1.module.css";
const Hero3 = () => {
  const deviceType = useBreakPoints();

  return (
    <div
      style={{
        position: "relative",
        marginTop: 40,
        minHeight: deviceType === "mobile" ? 2000 : 2000,
      }}
    >
      <div
        style={{
          background: "purple",
          position: "absolute",
          clipPath: "polygon(100% 0, 100% 100%, 0 97%, 0 3%)",
          width: "100%",
          height: "100%",
          paddingTop: deviceType === "mobile" ? "30%" : "10%",
          paddingBottom: deviceType === "mobile" ? "30%" : "10%",
          backgroundImage: `linear-gradient(180deg,rgba(255, 255, 255, 0.05) 0,rgba(0, 0, 0, 0.18) 100%)`,
        }}
      ></div>
      <div
        className={styles.no_scroll}
        style={{
          background: "#24125e",
          position: "absolute",
          clipPath: "polygon(100% 2%, 100% 100%, 0 95%, 0 3%)",
          width: "100%",
          height: "100%",
          color: "white",
          overflow: "auto",
          paddingTop: deviceType === "mobile" ? "30%" : "10%",
          paddingBottom: deviceType === "mobile" ? "30%" : "10%",
          backgroundImage: `linear-gradient(180deg,rgba(255,255,255,0.14) 0,rgba(0, 0, 0, 0.18) 100%)`,
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h3" style={{ fontFamily: "poppins" }}>
                Works With Your<br></br> Revenue Management Stack
              </Typography>
              <Typography
                variant="body1"
                style={{
                  fontFamily: "poppins",
                  fontWeight: "normal",
                  marginTop: 20,
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              >
                Managing sales, payments, customer experience or your books: if
                it affects your revenue cycle, Chargebee works with it.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <img
                alt="donno whats it's about...."
                src="https://webstatic.chargebee.com/assets/web/351/images/home/lemon/revenue-management.svg"
                style={{ width: "100%", marginTop: 20 }}
              ></img>
            </Grid>
            {showOffData.map((data, i) => {
              return <ShowOff key={i} data={data}></ShowOff>;
            })}
            <Grid item xs={12} style={{ marginTop: 100 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  variant="h6"
                  style={{ fontFamily: "poppins", margin: 20 }}
                >
                  Talk to us today about
                  <br />
                  your revenue workflow
                </Typography>
                <button
                  className={hero_1_styles.schedule_a_demo}
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
                      style={{ transition: "0.25s all" }}
                      className={styles.arrow}
                    ></ArrowForwardOutlined>
                  </div>
                </button>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Divider
                style={{
                  width: "100%",
                  background: "rgba(255,255,255,0.2)",
                  marginTop: 20,
                  marginBottom: 20,
                }}
              ></Divider>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

const ShowOff = ({ data }: { data: any }) => {
  return (
    <Grid item md={6} xs={12} style={{ marginTop: 100 }}>
      <code style={{ color: "orangered" }}>{data.code}</code>
      <br />
      <Typography
        variant="h5"
        style={{
          marginTop: 30,
          fontFamily: "poppins",
          marginBottom: 10,
        }}
      >
        {data.title}
      </Typography>

      <img
        alt="donno about this as well.."
        style={{ width: "90%", marginBottom: 20, marginTop: 20 }}
        src={data.image}
      ></img>

      <Typography
        variant="body2"
        style={{
          fontFamily: "poppins",
          color: "rgba(255, 255, 255, 0.7)",
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        {data.description}
      </Typography>
      <div className={styles.learn_more_inverted}>
        <div>Learn More</div>
        <ArrowForward
          fontSize="small"
          style={{ transition: "0.25s all" }}
          className={styles.arrow_learn_more}
        ></ArrowForward>
      </div>
    </Grid>
  );
};

const showOffData = [
  {
    code: "Quote-to-Cash Automation",
    title: "Powers Sales and Marketing CRM",
    description:
      "Handle quotes, approvals, acceptance, and collections seamlessly from within the CRM",
    image:
      "https://webstatic.chargebee.com/assets/web/351/images/home/lemon/crm-logos.png",
  },
  {
    code: "Offer More Payment Methods",
    title: "25+ Payment Gateways",
    description:
      "Accept payments across a wide array of gateways, geographies, and currencies.",
    image:
      "https://webstatic.chargebee.com/assets/web/351/images/home/lemon/pg-logos.png",
  },
  {
    code: "Streamline Finance Operations",
    title: "Syncs with Accounting Software",
    description:
      "Reconcile books in seconds, handle compliance, and recognize revenue painlessly.",
    image:
      "https://webstatic.chargebee.com/assets/web/351/images/home/lemon/acc-logos.png",
  },
];

export default Hero3;
