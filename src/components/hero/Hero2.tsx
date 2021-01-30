import React from "react";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import styles from "./hero2.module.css";
import useBreakPoints from "../../hooks/useBreakPoints";
import { ArrowForward, CheckOutlined } from "@material-ui/icons";
import { green } from "@material-ui/core/colors";
const Hero2 = () => {
  const deviceType = useBreakPoints();
  return (
    <Container>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12} style={{ textAlign: "center", margin: 30 }}>
          <span
            style={{
              color: "black",
              maxWidth: 400,
              fontWeight: 400,
              fontSize: deviceType === "mobile" ? 16 : 18,
            }}
          >
            Thousands of Scaling SaaS Businesses Love Us
          </span>
        </Grid>
        <Grid item xs={12} container justify="center" alignItems="center">
          <div className={styles.base_scroll_div_hero2}>
            <div className={styles.scroll_container_div}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
                return (
                  <div key={i} style={{ margin: 20 }}>
                    hello + {i}
                  </div>
                );
              })}
            </div>
          </div>
        </Grid>

        {featuresData.map(({ code, description, image, menu, title }, i) => {
          return (
            <Features
              index={i}
              code={code}
              description={description}
              image={image}
              menu={menu}
              title={title}
            />
          );
        })}
      </Grid>
    </Container>
  );
};

const Features = ({
  code,
  title,
  description,
  image,
  menu,
  index,
}: {
  code: string;
  title: string;
  description: string;
  image: string;
  menu: string[];
  index: number;
}) => {
  const deviceType = useBreakPoints();
  return (
    <Grid
      item
      xs={12}
      container
      style={{ marginTop: deviceType === "mobile" ? 50 : 100 }}
    >
      {index % 2 !== 0 || deviceType === "mobile" ? (
        <Grid item xs={12} sm={6} container justify="flex-start">
          <img alt="donno" style={{ width: "100%" }} src={image}></img>
        </Grid>
      ) : (
        ""
      )}
      <Grid item xs={12} sm={6} container>
        <Grid xs={12}>
          <code style={{ color: "#500ad2", marginTop: 10 }}>{code}</code>
        </Grid>
        <Grid xs={12}>
          <div
            style={{
              fontWeight: "bold",
              marginTop: 20,
              fontSize: 24,
              fontFamily: "poppins",
            }}
          >
            {title}
          </div>
        </Grid>
        <Grid item xs={12}>
          <div
            style={{
              fontSize: 20,
              fontFamily: "poppins",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            {description}
          </div>
        </Grid>
        <Grid item xs={12}>
          <div
            style={{
              fontSize: 20,
              fontFamily: "poppins",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            {description}
          </div>
        </Grid>
        <Grid xs={12} container item>
          {menu.map((name) => {
            return (
              <Grid item xs={6}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingTop: 10,
                    paddingBottom: 10,
                  }}
                >
                  <CheckOutlined
                    style={{ marginRight: 4, color: green[500] }}
                  ></CheckOutlined>
                  <div
                    style={{
                      fontFamily: "poppins",
                      fontWeight: "bold",
                      color: "grey",
                    }}
                  >
                    {name}
                  </div>
                </div>
              </Grid>
            );
          })}
          <div className={styles.learnMore}>
            Learn More
            <ArrowForward
              fontSize="small"
              className={styles.arrow_learn_more}
            ></ArrowForward>
          </div>
        </Grid>
      </Grid>
      {!(index % 2 !== 0 || deviceType === "mobile") ? (
        <Grid item xs={12} sm={6} container>
          <img alt="donno" style={{ width: "100%" }} src={image}></img>
        </Grid>
      ) : (
        ""
      )}
    </Grid>
  );
};

const featuresData = [
  {
    title: "Automate Recurring Billing",
    code: "No more spreadsheet errors",
    image:
      "https://webstatic.chargebee.com/assets/web/351/images/home/lemon/recurring-billing-graphic.svg",
    description:
      "Scale your SaaS through 480+ recurring billing scenarios that automate who you bill, when, and how. No humans, no spreadsheets, no missed payments!",
    menu: [
      "Billing Schedules",
      "Proration & Invoicing",
      "Tax management",
      "Payment Methods",
    ],
  },
  {
    title: "Smarter Subscription Management",
    code: "No more developer dependency",
    image:
      "https://webstatic.chargebee.com/assets/web/351/images/home/lemon/subscription-graphic.svg",
    description:
      "Experiment rapidly with pricing structures, product catalogs, and subscription lifecycles with a business-user-first experience.",
    menu: [
      "Price modeling",
      "Product Catalog",
      "Trial management",
      "Lifecycle automation",
    ],
  },
  {
    title: "Streamline Revenue Operations",
    code: "No more lost opportunities",
    image:
      "https://webstatic.chargebee.com/assets/web/351/images/home/lemon/revenue-operations-graphic.svg",
    description:
      "Plug revenue leaks by aligning GTM & Finance. Uncover growth opportunities across processes, geographies, and business models.",
    menu: [
      "SaaS Analytics",
      "Quote-to-cash",
      "Order-to-revenue",
      "Revenue Recognition",
    ],
  },
];

export default Hero2;
