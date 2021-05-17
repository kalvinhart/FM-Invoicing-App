import { useContext } from "react";
import InvoicesContext from "../../store/InvoicesContext";

import { Container } from "../../styles/containerStyles";
import Header from "./Header/Header";
import Results from "./Results/Results";
import NothingFound from "./Results/NothingFound";
import InvoiceItem from "./Results/InvoiceItem";

const Home = () => {
  const data = useContext(InvoicesContext);
  const invoices = data.forEach((inv) => <InvoiceItem data={inv} />);

  return (
    <main>
      <Container>
        <Header />
        {invoices ? <Results invoices={invoices} /> : <NothingFound />}
      </Container>
    </main>
  );
};

export default Home;
