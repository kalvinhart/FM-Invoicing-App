import styled from "styled-components";

const Header = styled.header`
  width: 100vw;
  height: 72px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.backgrounds.header};

  @media only screen and (min-width: 1024px) {
    width: 103px;
    height: 100vh;
    flex-direction: column;
    align-items: flex-start;
    border-top-right-radius: 20px;
  }
`;

// Logo =============================================================

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

// Settings =========================================================

const SettingsWrapper = styled.div`
  width: 160px;
  height: 72px;
  display: flex;

  @media only screen and (min-width: 1024px) {
    width: 103px;
    height: 180px;
    flex-direction: column;
  }
`;

const ThemeToggleDiv = styled.div`
  width: 80px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    width: 103px;
    height: 90px;
  }
`;

const AvatarDiv = styled(ThemeToggleDiv)`
  border-left: 1px solid #494e6e;

  @media only screen and (min-width: 1024px) {
    border-left: none;
    border-top: 1px solid #494e6e;
  }
`;

const ThemeToggleButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  cursor: pointer;

  &:hover svg {
    fill: #dfe3fa;
  }
`;

const ThemeToggleSVG = styled.svg`
  width: 20px;
  height: 20px;
  fill: #7e88c3;
`;

const AvatarImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  @media only screen and (min-width: 1024px) {
    width: 40px;
    height: 40px;
  }
`;

export {
  Header,
  LogoWrapper,
  LogoTopHalf,
  LogoBottomHalf,
  LogoSVG,
  SettingsWrapper,
  ThemeToggleDiv,
  AvatarDiv,
  ThemeToggleButton,
  ThemeToggleSVG,
  AvatarImg,
};
