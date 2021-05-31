import React from "react";
import PropTypes from "react";
import { GoBackButton } from "./BackButton.styles";
import LeftArrow from "../../../assets/icon-arrow-left.svg";

const BackButton = (props) => {
  return (
    <GoBackButton onClick={props.onClick}>
      <img src={LeftArrow} alt="" />
      <span>Go Back</span>
    </GoBackButton>
  );
};

BackButton.propTypes = {
  onClick: PropTypes.func,
};

export default BackButton;
