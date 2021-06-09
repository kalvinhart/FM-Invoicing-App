import styled from "styled-components";

const ControlsWrapper = styled.div`
  width: 160px;
  display: flex;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    width: 300px;
  }
`;

export { ControlsWrapper };
