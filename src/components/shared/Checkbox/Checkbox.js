import React from "react";
import PropTypes from "prop-types";
import {
  CheckboxWrapper,
  CheckboxLabel,
  CheckboxInput,
  CheckboxSpan,
} from "./Checkbox.styles";
import { SpanPrimary } from "../../../styles/textStyles";
import CheckSVG from "../../../assets/icon-check.svg";

const Checkbox = ({ text }) => {
  return (
    <CheckboxWrapper>
      <CheckboxLabel>
        <CheckboxInput type="checkbox" />
        <CheckboxSpan>
          <img src={CheckSVG} alt="" aria-hidden="true" />
        </CheckboxSpan>
        <SpanPrimary>{text}</SpanPrimary>
      </CheckboxLabel>
    </CheckboxWrapper>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Checkbox;
