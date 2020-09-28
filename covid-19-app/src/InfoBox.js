import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({
  cases,
  title,
  isRed,
  isOrange,
  isBlack,
  active,
  total,
  ...props
}) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox__selected"} ${
        isRed && "infoBox__red"
      } ${!isRed && !isBlack && "infoBox__green"} ${
        isBlack && "infoBox__black"
      }`}
    >
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        <h2 className="infoBox__cases">{cases}</h2>

        <Typography className="infoBox__total" color="textSecondary">
          <h3>Total: {total}</h3>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
