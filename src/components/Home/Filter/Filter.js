import React, { useState, useContext } from "react";
import { FiltersContext } from "../../../store/FiltersContext";
import PropTypes from "prop-types";

import {
  FilterWrapper,
  FilterButton,
  ArrowImage,
  FilterBoxWrapper,
} from "./Filter.styles";
import DownArrow from "../../../assets/icon-arrow-down.svg";
import Checkbox from "../../shared/Checkbox/Checkbox";

const FilterBox = ({ filterList }) => {
  const filterOptions = filterList.map((filter, i) => {
    return <Checkbox key={filter.label} checked={filter.checked} text={filter.label} />;
  });

  return <FilterBoxWrapper>{filterOptions}</FilterBoxWrapper>;
};

const Filter = () => {
  const [showFilters, setShowFilters] = useState(false);
  const { filters } = useContext(FiltersContext);

  const handleClick = () => {
    setShowFilters(!showFilters);
  };

  return (
    <FilterWrapper>
      <FilterButton onClick={handleClick}>
        <ArrowImage flipArrow={showFilters} src={DownArrow} alt="" />
      </FilterButton>
      {showFilters && <FilterBox filterList={filters} />}
    </FilterWrapper>
  );
};

FilterBox.propTypes = {
  filterList: PropTypes.array.isRequired,
};

export default Filter;
