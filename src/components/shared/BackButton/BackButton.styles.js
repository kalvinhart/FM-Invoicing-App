import styled from "styled-components";

const GoBackButton = styled.button`
  margin-bottom: 30px;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.text.primary};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: ${(props) => props.theme.text.secondary};
  }

  & img {
    margin-right: 20px;
  }
`;

export { GoBackButton };
