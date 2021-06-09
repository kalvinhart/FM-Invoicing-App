import {
  InvoiceItemWrapper,
  InvoiceDueDate,
  ClientName,
  InvoiceTotal,
} from "./InvoiceItem.styles";
import InvoiceID from "../../shared/InvoiceID/InvoiceID";
import InvoiceStatus from "../../shared/InvoiceStatus/InvoiceStatus";

const InvoiceItem = ({ data }) => {
  return (
    <InvoiceItemWrapper>
      <InvoiceID>{data.id}</InvoiceID>
      <InvoiceDueDate>Due {data.paymentDue}</InvoiceDueDate>
      <ClientName>{data.clientName}</ClientName>
      <InvoiceTotal>£ {data.total.toFixed(2)}</InvoiceTotal>
      <InvoiceStatus status={data.status} position="absolute" />
    </InvoiceItemWrapper>
  );
};

export default InvoiceItem;
