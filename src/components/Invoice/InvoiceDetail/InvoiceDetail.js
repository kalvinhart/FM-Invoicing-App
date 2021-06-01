import React from "react";
import PropTypes from "prop-types";

import {
  InvoiceWrapper,
  HeadingWrapper,
  ItemWrapper,
  AddressWrapper,
  DetailsWrapper,
  InvoiceItemsWrapper,
  InvoiceItems,
  InvoiceTotal,
} from "./InvoiceDetail.styles";
import InvoiceID from "../../shared/InvoiceID/InvoiceID";
import {
  SpanSecondary,
  SpanLarge,
  SpanWhite,
  SpanLargeWhite,
} from "../../../styles/textStyles";
import ItemsTable from "../ItemsTable/ItemsTable";

const InvoiceDetail = ({ invoice }) => {
  const {
    clientAddress,
    clientEmail,
    clientName,
    createdAt,
    description,
    id,
    items,
    paymentDue,
    paymentTerms,
    senderAddress,
    status,
    total,
  } = invoice;

  return (
    <InvoiceWrapper>
      <HeadingWrapper>
        <ItemWrapper>
          <InvoiceID>{id}</InvoiceID>
          <SpanSecondary>{description}</SpanSecondary>
        </ItemWrapper>
        <AddressWrapper>
          <SpanSecondary>{clientAddress.street}</SpanSecondary>
          <SpanSecondary>{clientAddress.city}</SpanSecondary>
          <SpanSecondary>{clientAddress.postCode}</SpanSecondary>
          <SpanSecondary>{clientAddress.country}</SpanSecondary>
        </AddressWrapper>
      </HeadingWrapper>

      <DetailsWrapper>
        <ItemWrapper>
          <ItemWrapper>
            <SpanSecondary>Invoice Date</SpanSecondary>
            <SpanLarge>{createdAt}</SpanLarge>
          </ItemWrapper>

          <ItemWrapper>
            <SpanSecondary>Payment Date</SpanSecondary>
            <SpanLarge>{paymentDue}</SpanLarge>
          </ItemWrapper>
        </ItemWrapper>

        <ItemWrapper>
          <SpanSecondary>Bill To</SpanSecondary>
          <SpanLarge>{clientName}</SpanLarge>
          <AddressWrapper>
            <SpanSecondary>{clientAddress.street}</SpanSecondary>
            <SpanSecondary>{clientAddress.city}</SpanSecondary>
            <SpanSecondary>{clientAddress.postCode}</SpanSecondary>
            <SpanSecondary>{clientAddress.country}</SpanSecondary>
          </AddressWrapper>
        </ItemWrapper>

        <ItemWrapper>
          <SpanSecondary>Sent To</SpanSecondary>
          <SpanLarge>{clientEmail}</SpanLarge>
        </ItemWrapper>
      </DetailsWrapper>

      <InvoiceItemsWrapper>
        <InvoiceItems>
          <ItemsTable items={items} />
        </InvoiceItems>
        <InvoiceTotal>
          <SpanWhite>Amount due</SpanWhite>
          <SpanLargeWhite>{`£ ${total.toFixed(2)}`}</SpanLargeWhite>
        </InvoiceTotal>
      </InvoiceItemsWrapper>
    </InvoiceWrapper>
  );
};

InvoiceDetail.propTypes = {
  invoice: PropTypes.object.isRequired,
};

export default InvoiceDetail;
