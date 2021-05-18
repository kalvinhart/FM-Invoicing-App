import styled from "styled-components";
import { InvoiceItemWrapper } from "../InvoiceItem/InvoiceItem.styles";

const ResultsDiv = styled.div`
  width: 100%;
  padding-bottom: 60px;

  & a {
    display: block;
    margin-bottom: 20px;
  }

  & a:hover ${InvoiceItemWrapper} {
    border: 1px solid ${(props) => props.theme.colors.primary};
  }
`;

export { ResultsDiv };
