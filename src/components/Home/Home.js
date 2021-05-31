import { useContext } from "react";
import InvoicesContext from "../../store/InvoicesContext";
import { Link } from "react-router-dom";

import { Container } from "../../styles/containerStyles";
import Header from "./Header/Header";
import Results from "./Results/Results";
import NothingFound from "./NothingFound/NothingFound";
import InvoiceItem from "./InvoiceItem/InvoiceItem";

const Home = () => {
  const { data } = useContext(InvoicesContext);
  const invoices = data.map((inv) => (
    <Link to={`/invoice/${inv.id}`} key={inv.id}>
      <InvoiceItem data={inv} />
    </Link>
  ));

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
