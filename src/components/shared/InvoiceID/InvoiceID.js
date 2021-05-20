import PropTypes from "prop-types";
import { H3, SpanSecondary } from "../../../styles/textStyles";
import { InvoiceIDWrapper } from "./InvoiceID.styles";

const InvoiceID = ({ children }) => {
  return (
    <InvoiceIDWrapper>
      <H3>
        <SpanSecondary>#</SpanSecondary>
        {children}
      </H3>
    </InvoiceIDWrapper>
  );
};

InvoiceID.propTypes = {
  children: PropTypes.string.isRequired,
};

export default InvoiceID;
