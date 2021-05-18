import styled from "styled-components";

const LogoWrapper = styled.div`
  position: relative;
  width: 72px;
  height: 72px;

  @media only screen and (min-width: 1024px) {
    width: 103px;
    height: 103px;
  }
`;

const LogoTopHalf = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const LogoBottomHalf = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.primaryLight};
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const LogoSVG = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 28px;
  height: 26px;

  @media only screen and (min-width: 1024px) {
    width: 40px;
    height: 37px;
  }
`;

export { LogoWrapper, LogoTopHalf, LogoBottomHalf, LogoSVG };
