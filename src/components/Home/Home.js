import PropTypes from "prop-types";
import { Container } from "../../styles/containerStyles";
import Header from "./Header/Header";
import Results from "./Results/Results";

const Home = (props) => {
  return (
    <Container>
      <Header />
      <Results />
    </Container>
  );
};

Home.propTypes = {};

export default Home;
