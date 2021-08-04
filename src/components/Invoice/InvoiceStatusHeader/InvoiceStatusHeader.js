import PropTypes from "prop-types";
import { SpanSecondary } from "../../../styles/textStyles";
import { InvoiceStatusHeaderWrapper, ButtonsWrapper } from "./InvoiceStatusHeader.styles";
import InvoiceStatus from "../../shared/InvoiceStatus/InvoiceStatus";
import Button from "../../shared/Button/Button";

const InvoiceStatusHeader = ({ status, func }) => {
  return (
    <InvoiceStatusHeaderWrapper>
      <SpanSecondary>Status</SpanSecondary>
      <InvoiceStatus status={status} />
      <ButtonsWrapper>
        <Button type="secondary" onClick={func}>
          Edit
        </Button>
        <Button type="danger" onClick={func}>
          Delete
        </Button>
        <Button type="primary" onClick={func}>
          Mark as Paid
        </Button>
      </ButtonsWrapper>
    </InvoiceStatusHeaderWrapper>
  );
};

InvoiceStatusHeader.propTypes = {
  status: PropTypes.string.isRequired,
  func: PropTypes.func,
};

export default InvoiceStatusHeader;
