import styled from "styled-components";

// Headings==========================================================
const H1 = styled.h1`
  color: ${(props) => props.theme.text.primary};
`;

const H2 = styled.h2`
  color: ${(props) => props.theme.text.primary};
`;

const H3 = styled.h3`
  color: ${(props) => props.theme.text.primary};
`;

const SpanPrimary = styled.span`
  color: ${(props) => props.theme.text.primary};
`;

const SpanSecondary = styled.span`
  color: ${(props) => props.theme.text.secondary};
`;

const SpanWhite = styled.span`
  color: white;
  font-size: 11px;
`;

const SpanLarge = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: ${(props) => props.theme.text.primary};
`;

const SpanLargeWhite = styled(SpanLarge)`
  color: white;
`;

const PSecondary = styled.p`
  color: ${(props) => props.theme.text.secondary};
`;

export {
  H1,
  H2,
  H3,
  SpanPrimary,
  SpanSecondary,
  SpanWhite,
  SpanLargeWhite,
  SpanLarge,
  PSecondary,
};
