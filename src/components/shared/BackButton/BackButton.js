import React from "react";
import PropTypes from "react";
import { GoBackButton } from "./BackButton.styles";
import LeftArrow from "../../../assets/icon-arrow-left.svg";

const BackButton = ({ click }) => {
  return (
    <GoBackButton onClick={click}>
      <img src={LeftArrow} alt="" aria-hidden="true" />
      <span>Go Back</span>
    </GoBackButton>
  );
};

BackButton.propTypes = {
  click: PropTypes.func,
};

export default BackButton;
