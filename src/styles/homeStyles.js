import styled from "styled-components";

const HomePageHeader = styled.div`
  width: 100%;
  height: 44px;
  margin-bottom: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddInvoiceButton = styled.button`
  position: relative;
  width: 90px;
  height: 44px;
  border: none;
  border-radius: 100px;
  background-color: ${(props) => props.theme.buttons.primary.background};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.buttons.primary.hover};
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 7px;
    transform: translateY(-50%);
    display: block;
    width: 32px;
    height: 32px;
    background-color: #ffffff;
    border-radius: 50%;
  }

  &::after {
    position: absolute;
    top: 50%;
    right: 15%;
    transform: translateY(-50%);
    content: "New";
    display: block;
    color: ${(props) => props.theme.buttons.primary.text};
  }

  @media only screen and (min-width: 768px) {
    width: 150px;
    height: 48px;

    &::after {
      content: "New Invoice";
      transform: translate(10%, -50%);
    }
  }
`;

const PlusIcon = styled.svg`
  position: absolute;
  top: 50%;
  left: 18px;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
`;

// RESULTS===========================================================
const EmptyResultsDiv = styled.div`
  ${"" /* width: 100%; */}
  padding: 40px 20px;
  text-align: center;

  & img {
    margin-bottom: 20px;
  }

  & h2 {
    margin-bottom: 10px;
  }
`;

const EmptyImage = styled.img`
  width: 242px;
`;

export { HomePageHeader, AddInvoiceButton, PlusIcon, EmptyResultsDiv, EmptyImage };
