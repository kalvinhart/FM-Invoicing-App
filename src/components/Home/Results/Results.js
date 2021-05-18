import PropTypes from "prop-types";
import { ResultsDiv } from "./Results.styles";

const Results = ({ invoices }) => {
  return <ResultsDiv>{invoices}</ResultsDiv>;
};

Results.propTypes = {
  invoices: PropTypes.array,
};

export default Results;
