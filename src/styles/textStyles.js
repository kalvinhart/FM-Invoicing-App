import styled from "styled-components";

// Headings==========================================================
const H1 = styled.h1`
  color: ${(props) => props.theme.text.primary};
`;

const SpanSecondary = styled.span`
  color: ${(props) => props.theme.text.secondary};
`;

export { H1, SpanSecondary };
