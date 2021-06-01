import styled from "styled-components";

const InvoiceWrapper = styled.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 120px;
  background-color: ${(props) => props.theme.backgrounds.main};
  border-radius: 10px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.05);

  @media only screen and (min-width: 768px) {
    padding: 30px;
  }
`;

let AddressWrapper;

const HeadingWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

   & ${AddressWrapper} {
    @media only screen and (min-width: 768px) {
      text-align: right;
    }
  } 
  }
`;

const ItemWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;

  & span {
    display: block;
    margin-bottom: 10px;
  }

  & h3 > span {
    display: inline;
  }
`;

AddressWrapper = styled.div`
  & span {
    display: block;
    margin-bottom: 5px;
  }
`;
const DetailsWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;

  & > *:not(:last-child) {
    margin-right: 40px;
  }

  & > * {
    @media only screen and (min-width: 768px) {
      margin: 0;
    }
  }

  @media only screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

const InvoiceItemsWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
`;

const InvoiceItems = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${(props) => props.theme.backgrounds.invoiceItems};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const InvoiceTotal = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.backgrounds.invoiceTotal};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export {
  InvoiceWrapper,
  HeadingWrapper,
  ItemWrapper,
  AddressWrapper,
  DetailsWrapper,
  InvoiceItemsWrapper,
  InvoiceItems,
  InvoiceTotal,
};
