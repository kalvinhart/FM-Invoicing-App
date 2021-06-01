import styled from "styled-components";

const Table = styled.table`
  width: 100%;

  & td {
    padding: 5px 0;
    color: ${(props) => props.theme.text.primary};
    font-weight: 700;
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

  & .mobile-hidden {
    display: none;
  }

  & .mobile-text::after {
    content: attr(mobile-text);
    display: block;
    margin-top: 5px;
    color: ${(props) => props.theme.text.secondary};
  }
`;

export { Table };
