import styled from "styled-components";

const InvoiceIDWrapper = styled.div`
  order: 1;
  margin-bottom: 20px;

  @media only screen and (min-width: 768px) {
    width: 100px;
    margin-bottom: 0;
    order: 0;
  }
`;

export { InvoiceIDWrapper };
