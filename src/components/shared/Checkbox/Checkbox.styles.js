import styled from "styled-components";

const CheckboxWrapper = styled.div`
  height: 16px;
  margin-bottom: 15px;
`;

const CheckboxSpan = styled.span`
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  width: 16px;
  background-color: ${(props) => props.theme.form.checkbox.background};
  border: 1px solid transparent;
  border-radius: 2px;

  & img {
    display: none;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.text.primary};
  cursor: pointer;
  user-select: none;

  &:hover > ${CheckboxSpan} {
    border: 1px solid ${(props) => props.theme.colors.primary};
  }
`;

const CheckboxInput = styled.input`
  height: 0;
  width: 0;
  opacity: 0;

  &:checked + ${CheckboxSpan} {
    background-color: ${(props) => props.theme.colors.primary};
  }

  &:checked + ${CheckboxSpan} img {
    display: block;
  }
`;

export { CheckboxWrapper, CheckboxLabel, CheckboxInput, CheckboxSpan };
