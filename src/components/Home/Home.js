import { useContext, useEffect, useState } from "react";
import InvoicesContext from "../../store/InvoicesContext";
import { FiltersContext } from "../../store/FiltersContext";
import { Link } from "react-router-dom";

import { Container } from "../../styles/containerStyles";
import Header from "./Header/Header";
import Results from "./Results/Results";
import NothingFound from "./NothingFound/NothingFound";
import InvoiceItem from "./InvoiceItem/InvoiceItem";

const Home = () => {
  const { data } = useContext(InvoicesContext);
  const { filters } = useContext(FiltersContext);
  const [invoiceData, setInvoiceData] = useState([]);

  useEffect(() => {
    const activeFiltersWithNull = filters.map((filter) => {
      if (filter.checked) {
        return filter.label.toLowerCase();
      }
      return null;
    });

    const activeFilters = activeFiltersWithNull.filter((item) => item !== null);

    const filteredData =
      activeFilters.length > 0
        ? data.filter((item) => activeFilters.includes(item.status))
        : data;

    setInvoiceData(filteredData);
  }, [data, filters]);

  const invoices = invoiceData.map((inv) => (
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
