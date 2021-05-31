import styled from "styled-components";

const InvoiceStatusHeader = styled.div`
  width: 100%;
  height: 91px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-items: space-between;
  background-color: ${(props) => props.theme.backgrounds.main};
  border-radius: 10px;
`;

export { InvoiceStatusHeader };
