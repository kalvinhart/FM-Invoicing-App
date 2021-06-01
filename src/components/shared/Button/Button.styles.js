import styled from "styled-components";

const StyledButton = styled.button`
  padding: 15px 24px;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.2s;

  ${(props) => {
    if (props.type === "primary") {
      return `background-color: ${props.theme.buttons.primary.background}; color: ${props.theme.buttons.primary.text};`;
    }
    if (props.type === "secondary") {
      return `background-color: ${props.theme.buttons.secondary.background}; color: ${props.theme.buttons.secondary.text};`;
    }
    if (props.type === "tertiary") {
      return `background-color: ${props.theme.buttons.tertiary.background}; color: ${props.theme.buttons.tertiary.text};`;
    }
    if (props.type === "danger") {
      return `background-color: ${props.theme.buttons.danger.background}; color: ${props.theme.buttons.danger.text};`;
    }
  }}

  &:hover {
    ${(props) => {
      if (props.type === "primary") {
        return `background-color: ${props.theme.buttons.primary.hover};`;
      }
      if (props.type === "secondary") {
        return `background-color: ${props.theme.buttons.secondary.hover};`;
      }
      if (props.type === "tertiary") {
        return `background-color: ${props.theme.buttons.tertiary.hover};`;
      }
      if (props.type === "danger") {
        return `background-color: ${props.theme.buttons.danger.hover};`;
      }
    }}
  }
`;

export { StyledButton };
