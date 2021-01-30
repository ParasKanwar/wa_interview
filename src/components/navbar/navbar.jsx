import { Fragment, useState } from "react";
import CustomContainer from "../container/customContainer";
import Grid from "@material-ui/core/Grid";
import styles from "./navbar.module.css";
import { Lock, ChevronRight, MenuBook, Close } from "@material-ui/icons";
import "@fontsource/poppins";
import Dropdown from "./dropdown";
import { drop_down_data } from "../../constants/dropdowndata";
import { to_show_menu_on_index } from "../../constants/dropdowndata";
import {
  Backdrop,
  Container,
  IconButton,
  Modal,
  Grow,
} from "@material-ui/core";
import useBreakPoints from "../../hooks/useBreakPoints.tsx";
const Navbar = () => {
  const centerStyles = { display: "flex", alignItems: "center" };
  const [drop_down_content, setDropDownContent] = useState([]);
  const [hasDropDownTookTheHandle, setThat] = useState(false);
  const [current_dropdown_index, set_c_d_i] = useState(0);
  const [show_backdrop, setSB] = useState(false);
  return (
    <div className={styles.base}>
      <Backdrop
        in={show_backdrop}
        style={{
          zIndex: 30,
          pointerEvents: "none",
          transform: "translateY(70px)",
          background: "rgba(44, 130, 201, 0.3)",
        }}
      ></Backdrop>
      {drop_down_content.length > 0 ? (
        <Dropdown
          data={drop_down_content}
          index={current_dropdown_index}
          onMouseEnter={() => {
            setThat(true);
            setSB(true);
          }}
          onMouseGone={() => {
            setSB(false);
            setDropDownContent([]);
          }}
        ></Dropdown>
      ) : (
        ""
      )}
      <CustomContainer>
        <Grid container style={{ height: "100%" }}>
          <Grid item xs={2} container justify="flex-start" alignItems="center">
            <img
              alt="logo"
              src="https://www.chargebee.com/static/resources/brand/chargebee-logo-black.svg"
              className={styles.logo_style}
            ></img>
          </Grid>
          <Grid item xs={6} container alignItems="center">
            {["product", "pricing", "solutions", "customers", "resources"].map(
              (name, i) => {
                return (
                  <div
                    onMouseEnter={() => {
                      set_c_d_i(i);
                      if (to_show_menu_on_index[i]) {
                        setSB(true);
                        setDropDownContent(drop_down_data.data);
                      } else {
                        setDropDownContent([]);
                      }
                    }}
                    onMouseLeave={() => {
                      setSB(false);
                      setTimeout(() => {
                        if (!hasDropDownTookTheHandle) {
                          setDropDownContent([]);
                        }
                      }, 100);
                    }}
                    className={styles.menu_button}
                  >
                    {name}
                  </div>
                );
              }
            )}
          </Grid>
          <Grid item xs={4} container justify="flex-end" alignItems="center">
            <div style={centerStyles}>
              <LoginButton />
              <ScheduleADemoButton />
            </div>
          </Grid>
        </Grid>
      </CustomContainer>
    </div>
  );
};

function LoginButton() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className={styles.login_button}
    >
      <div
        style={{
          textTransform: "capitalize",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Lock style={{ color: "orange", marginRight: 1, height: 21 }} />
        log in
      </div>
      <ChevronRight
        style={{
          transform: isActive ? "translate(3px,2px)" : "translate(0px,2px)",
          transition: "0.2s transform ease-out",
        }}
      />
    </div>
  );
}
function ScheduleADemoButton() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={styles.schedule_a_demo_button}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      schedule a demo
      <ChevronRight
        style={{
          color: "white",
          transform: isActive ? "translate(3px,2px)" : "translate(0px,2px)",
          transition: "0.2s transform ease-out",
        }}
      />
    </div>
  );
}

const NavbarMob = () => {
  const [show_drop_down, setDD] = useState(false);

  return (
    <Fragment>
      <Modal open={show_drop_down} onClose={() => setDD(false)}>
        <Container
          style={{
            width: "100%",
            padding: 20,
            height: "100%",
            borderRadius: 10,
          }}
        >
          <Grow in={true} unmountOnExit>
            <Grid
              container
              style={{
                background: "white",
                width: "100%",
                height: "100%",
                borderRadius: 20,
                padding: 20,
              }}
            >
              <IconButton
                onClick={() => setDD(false)}
                style={{ position: "absolute", right: "4%", top: "4%" }}
              >
                <Close></Close>
              </IconButton>
              <Grid></Grid>
            </Grid>
          </Grow>
        </Container>
      </Modal>
      <div
        style={{
          width: "100%",
          height: "70px",
          background: "white",
          position: "fixed",
          top: 0,
          zIndex: 30,
        }}
      >
        <Container style={{ maxWidth: "1200px", height: "100%" }}>
          <Grid container style={{ height: "100%" }}>
            <Grid
              item
              xs={6}
              container
              justify="flex-start"
              alignItems="center"
            >
              <img
                alt="logo"
                src="https://www.chargebee.com/static/resources/brand/chargebee-logo-black.svg"
                className={styles.logo_style}
              ></img>
            </Grid>
            <Grid item xs={6} container justify="flex-end" alignItems="center">
              <IconButton onClick={() => setDD(true)}>
                <MenuBook></MenuBook>
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
};

const RealNavbar = () => {
  const deviceType = useBreakPoints();

  return (
    <Fragment>
      {deviceType === "computer" ? <Navbar></Navbar> : <NavbarMob></NavbarMob>}
    </Fragment>
  );
};

export default RealNavbar;
