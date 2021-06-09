import React, { useState } from "react";
import PropTypes from "prop-types";
import { config } from "../../../config/config";

import {
  FilterWrapper,
  FilterButton,
  ArrowImage,
  FilterBoxWrapper,
} from "./Filter.styles";
import DownArrow from "../../../assets/icon-arrow-down.svg";
import Checkbox from "../../shared/Checkbox/Checkbox";

const FilterBox = ({ filters }) => {
  const filterOptions = filters.map((filter) => <Checkbox text={filter.label} />);

  return <FilterBoxWrapper>{filterOptions}</FilterBoxWrapper>;
};

const Filter = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <FilterWrapper>
      <FilterButton onClick={() => setShowFilters(!showFilters)}>
        <ArrowImage flipArrow={showFilters} src={DownArrow} alt="" />
      </FilterButton>
      {showFilters && <FilterBox filters={config.filters} />}
    </FilterWrapper>
  );
};

FilterBox.propTypes = {
  filters: PropTypes.array.isRequired,
};

export default Filter;
