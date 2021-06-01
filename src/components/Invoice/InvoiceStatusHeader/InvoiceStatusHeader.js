import { SpanSecondary } from "../../../styles/textStyles";
import { InvoiceStatusHeaderWrapper, ButtonsWrapper } from "./InvoiceStatusHeader.styles";
import InvoiceStatus from "../../shared/InvoiceStatus/InvoiceStatus";
import Button from "../../shared/Button/Button";

const InvoiceStatusHeader = ({ invoice, func }) => {
  return (
    <InvoiceStatusHeaderWrapper>
      <SpanSecondary>Status</SpanSecondary>
      <InvoiceStatus status={invoice.status} />
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

export default InvoiceStatusHeader;
