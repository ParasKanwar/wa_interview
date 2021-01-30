import { Button, Container, Fade, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import CustomizedTabs from "../customTab/customTabBar";
import useBreakPoints from "../../hooks/useBreakPoints";
const Hero4 = () => {
  const [to_show_index, set_to_show_index] = useState(0);
  return (
    <Container maxWidth="md">
      <Grid container style={{ marginTop: 200, width: "100%" }}>
        <Grid item xs={12} container justify="center" alignItems="center">
          <CustomizedTabs
            value={to_show_index}
            onChange={(event, value) => {
              set_to_show_index(value);
            }}
          />
        </Grid>
        <Grid item xs={12} style={{ zIndex: 100, marginBottom: 100 }}>
          <ComputerCard {...cardData[to_show_index]}></ComputerCard>
        </Grid>
      </Grid>
    </Container>
  );
};

const cardData: CardProps[] = [
  {
    color: "rgba(102, 51, 153, 1)",
    text1: "Achieved",
    text2: "20x",
    text3: "ROI with Chargebee",
    person: "Nathan Field",
    person_category: "Marketing",
    description:
      "“Chargebee has all the concepts of metered billing, flat and tiered pricing. If we decided to change the way we want to bill or the price structure, it would be accounted for, excuse the pun.”",
    image:
      "https://webstatic.chargebee.com/assets/web/351/images/case-study/drawboard/logo.svg",
  },
  {
    color: "rgba(4, 147, 114, 1)",
    text1: "Saved",
    text2: "105 hrs",
    text3: "in manual accounting.",
    description:
      "“Our finance and accounting teams now save up to 105 hours of manual accounting every month. We now have more time to do financial analysis and make strategic business decisions.”",
    person: "Ayush Patel",
    person_category: "Finance",
    image:
      "https://webstatic.chargebee.com/assets/web/351/images/customers/logos/fishburners.png",
  },
  {
    color: "rgba(44, 130, 201, 1)",
    text1: "Grew MPR By",
    text2: "15%",
    text3: "and Globally From Europe.",
    description:
      "“As a European company selling in Europe but also outside of Europe, it was critical for us to be able to have two currencies - euros and dollars. VAT was another aspect we really wanted to be automated. This was a gamechanger with Chargebee.”",
    person: "Valentin Huang",
    person_category: "Co-founder",
    image:
      "https://webstatic.chargebee.com/assets/web/351/images/case-study/harvestr/logo.png",
  },
];

interface CardProps {
  text1?: string;
  text2?: string;
  text3?: string;
  color?: string;
  description?: string;
  person?: string;
  person_category?: string;
  image?: string;
}

const ComputerCard = (props: CardProps) => {
  return (
    <div
      style={{
        color: "white",
        width: "100%",
        minHeight: "300px",
        borderRadius: "12px",
        background: "white",
        boxShadow: "0px 0px 20px rgba(0,0,0,0.2)",
      }}
    >
      <Grid container item xs={12} style={{ width: "100%", height: "100%" }}>
        <Grid
          container
          item
          xs={12}
          md={5}
          style={{
            background: props.color,
            padding: 20,
            transition: "1s all",
            backgroundImage: `linear-gradient(180deg,rgba(255, 255, 255, 0.18) 0,rgba(0, 0, 0, 0.25) 100%)`,
            height: "100%",
            borderRadius: 10,
          }}
        >
          <Fade in={true}>
            <div>
              <Typography
                style={{ fontWeight: "bold", fontFamily: "poppins" }}
                variant="body1"
              >
                {props.text1 || "saved"}
              </Typography>
              <br />
              <Typography variant="h2" style={{ fontFamily: "poppins" }}>
                {props.text2 || "15%"}
              </Typography>
              <br />
              <Typography variant="h4" style={{ fontFamily: "poppins" }}>
                {props.text3 || "in manual accounting."}
              </Typography>
              <br />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{ width: "50%", height: "3px", background: "white" }}
                ></div>
                <Button
                  style={{
                    color: "white",
                    fontFamily: "poppins",
                    margin: 10,
                    border: "1px solid white",
                    borderRadius: "5px",
                  }}
                >
                  Read Story
                </Button>
              </div>
            </div>
          </Fade>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={7}
          style={{ padding: 20, overflow: "hidden" }}
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography
              variant="h6"
              style={{ color: "black", fontFamily: "poppins" }}
            >
              {props.description ||
                `“Chargebee has all the concepts of metered billing, flat and tiered pricing. If we decided to change the way we want to bill or the price structure, it would be accounted for, excuse the pun.”`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              style={{
                color: "black",
                fontFamily: "poppins",
                fontWeight: "bold",
              }}
            >
              {props.person || `Nathan Field`}
              <br></br>
              <span style={{ fontWeight: "normal", fontSize: 17 }}>
                {props.person_category || "Marketing"}
              </span>
            </Typography>
          </Grid>
          <Grid item xs={12} container justify="flex-end">
            <img
              alt={props.person_category}
              style={{ width: "200px" }}
              src={
                props.image ||
                "https://webstatic.chargebee.com/assets/web/351/images/case-study/drawboard/logo.svg"
              }
            ></img>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero4;
