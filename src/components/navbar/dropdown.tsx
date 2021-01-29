import React from "react";
import Grid from "@material-ui/core/Grid";
import styles from "./navbar.module.css";
import { DropDownData } from "../../constants/dropdowndata";
import CustomContainer from "../container/customContainer";
const Dropdown = ({
  onMouseGone,
  onMouseEnter,
  data,
  index,
}: {
  onMouseGone: any;
  onMouseEnter: any;
  data: DropDownData[];
  index: number;
}) => {
  console.log(data);
  return (
    <div
      className={styles.dropdown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={() => onMouseGone()}
    >
      <CustomContainer>
        <Grid
          container
          style={{ width: "100%" }}
          className={index % 2 === 0 ? styles.from_left : styles.from_right}
          spacing={2}
        >
          {data &&
            data.map(({ category, items }) => {
              return (
                <Grid key={category + index} item xs={3} container>
                  <div className={styles.category}>{category}</div>
                  {items.map((data) => {
                    return (
                      <Grid item xs={12}>
                        <div className={styles.item}>{data}</div>
                      </Grid>
                    );
                  })}
                </Grid>
              );
            })}
          <Grid item></Grid>
        </Grid>
      </CustomContainer>
    </div>
  );
};

export default Dropdown;
