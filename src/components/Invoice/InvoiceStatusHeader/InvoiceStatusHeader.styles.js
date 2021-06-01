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
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.05);

  @media only screen and (min-width: 768px) {
    justify-content: flex-start;
    padding: 20px 30px;

    & span {
      margin-right: 20px;
    }
  }
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

  @media only screen and (min-width: 768px) {
    position: static;
    width: auto;
    margin-left: auto;

    & > *:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export { InvoiceStatusHeaderWrapper, ButtonsWrapper };
