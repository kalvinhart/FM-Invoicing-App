import styled from "styled-components";

const Table = styled.table`
  width: 100%;

  & th {
    padding: 5px 0 15px;
  }

  & td {
    padding: 5px 0;
    color: ${(props) => props.theme.text.primary};
    font-weight: 700;
  }

  & .color-secondary {
    color: ${(props) => props.theme.text.secondary};
  }

  & .left {
    text-align: left;
  }
  & .center {
    text-align: center;
  }
  & .right {
    text-align: right;
  }

  & td.mobile-hidden {
    display: none;

    @media only screen and (min-width: 768px) {
      display: table-cell;
    }
  }

  & thead.mobile-hidden {
    display: none;

    @media only screen and (min-width: 768px) {
      display: table-header-group;
    }
  }

  & .mobile-text::after {
    content: attr(mobile-text);
    display: block;
    margin-top: 5px;
    color: ${(props) => props.theme.text.secondary};

    @media only screen and (min-width: 768px) {
      display: none;
    }
  }
`;

export { Table };
