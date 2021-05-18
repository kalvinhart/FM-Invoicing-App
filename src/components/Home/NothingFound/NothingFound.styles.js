import styled from "styled-components";

const EmptyResultsDiv = styled.div`
  ${"" /* width: 100%; */}
  padding: 80px 20px 40px;
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

export { EmptyResultsDiv, EmptyImage };
