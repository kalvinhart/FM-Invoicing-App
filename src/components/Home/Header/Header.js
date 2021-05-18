import { HomePageHeader } from "./Header.styles";
import Title from "../Title/Title";
import Controls from "../Controls/Controls";

const Header = () => {
  return (
    <HomePageHeader>
      <Title />
      <Controls />
    </HomePageHeader>
  );
};

export default Header;
