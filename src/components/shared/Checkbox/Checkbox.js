import { useContext } from "react";
import PropTypes from "prop-types";
import { FiltersContext } from "../../../store/FiltersContext";
import {
  CheckboxWrapper,
  CheckboxLabel,
  CheckboxInput,
  CheckboxSpan,
} from "./Checkbox.styles";
import { SpanPrimary } from "../../../styles/textStyles";
import CheckSVG from "../../../assets/icon-check.svg";

const Checkbox = ({ checked = false, text }) => {
  const { filters, setFilters } = useContext(FiltersContext);

  const handleChange = () => {
    const newFilters = filters.map((filter) => {
      if (filter.label === text) {
        return { ...filter, checked: !checked };
      }
      return filter;
    });
    setFilters(newFilters);
  };

  return (
    <CheckboxWrapper>
      <CheckboxLabel>
        <CheckboxInput type="checkbox" onChange={handleChange} checked={checked} />
        <CheckboxSpan>
          <img src={CheckSVG} alt="" aria-hidden="true" />
        </CheckboxSpan>
        <SpanPrimary>{text}</SpanPrimary>
      </CheckboxLabel>
    </CheckboxWrapper>
  );
};

Checkbox.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Checkbox;
