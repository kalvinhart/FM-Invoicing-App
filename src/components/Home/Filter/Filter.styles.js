import styled, { keyframes } from "styled-components";

const FilterWrapper = styled.div`
  position: relative;
`;

const FilterButton = styled.button`
  height: 44px;
  border: none;
  background: transparent;
  font-weight: 700;
  cursor: pointer;

  &::before {
    content: "Filter";
    margin-right: 10px;
    color: ${(props) => props.theme.text.primary};

    @media only screen and (min-width: 768px) {
      content: "Filter by status";
    }
  }
`;

const ArrowImage = styled.img`
  ${(props) => {
    if (props.flipArrow) {
      return "transform: rotateX(180deg);";
    }
  }}
`;

const fadeIn = keyframes`
 0% {
      opactity: 0;
    }
    100% {
      opacity: 1;
    }
`;

const FilterBoxWrapper = styled.div`
  position: absolute;
  z-index: 10;
  top: 110%;
  left: -60%;

  width: 192px;
  height: 128px;
  padding: 20px;

  opacity: 0;
  background-color: ${(props) => props.theme.backgrounds.filter};
  border-radius: 10px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.05);
  animation: ${fadeIn};
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
`;

export { FilterWrapper, FilterButton, ArrowImage, FilterBoxWrapper };
