import { HomePageHeader } from "../../../styles/homeStyles";
import Title from "./Title";
import Filter from "./Filter";

const Header = () => {
  return (
    <HomePageHeader>
      <Title />
      <Filter />
    </HomePageHeader>
  );
};

export default Header;
