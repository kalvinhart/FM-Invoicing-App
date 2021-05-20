import styled from "styled-components";
import { SpanSecondary } from "../../../styles/textStyles";

const InvoiceItemWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 134px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.backgrounds.main};
  border: 1px solid transparent;
  border-radius: 10px;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.primary};
  }

  @media only screen and (min-width: 768px) {
    height: 72px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const InvoiceDueDate = styled(SpanSecondary)`
  order: 2;
  margin-bottom: 15px;

  @media only screen and (min-width: 768px) {
    width: 120px;
    margin-bottom: 0;
    order: 0;
  }
`;

const ClientName = styled(SpanSecondary)`
  order: 4;
  margin-top: 5px;
  margin-bottom: 20px;
  text-align: right;

  @media only screen and (min-width: 768px) {
    width: 120px;
    margin-bottom: 0;
    margin-top: 0;
    margin-right: 60px;
    order: 0;
    text-align: left;
  }
`;

const InvoiceTotal = styled.span`
  order: 3;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.text.primary};

  @media only screen and (min-width: 768px) {
    width: 120px;
    margin-right: 20px;
    order: 0;
    text-align: right;
  }
`;

export { InvoiceItemWrapper, InvoiceDueDate, ClientName, InvoiceTotal };
