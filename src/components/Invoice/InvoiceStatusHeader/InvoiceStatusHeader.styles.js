import styled from "styled-components";

const InvoiceStatusHeaderWrapper = styled.div`
  width: 100%;
  height: 91px;
  padding: 20px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.backgrounds.main};
  border-radius: 10px;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  height: 91px;
  padding: 0 20px;
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.backgrounds.main};
`;

export { InvoiceStatusHeaderWrapper, ButtonsWrapper };
