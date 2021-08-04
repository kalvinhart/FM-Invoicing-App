import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import InvoicesContext from "../../store/InvoicesContext";
import { getData } from "../../utils/getData";

import { Container } from "../../styles/containerStyles";
import Loading from "../shared/Loading/Loading";
import InvoiceStatusHeader from "../Invoice/InvoiceStatusHeader/InvoiceStatusHeader";
import InvoiceDetail from "./InvoiceDetail/InvoiceDetail";
import BackButton from "../shared/BackButton/BackButton";

const Invoice = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const { id } = match.params;
  const { data, setData } = useContext(InvoicesContext);
  const history = useHistory();

  useEffect(() => {
    const checkForData = async () => {
      console.log(data);
      if (data.length === 0) {
        try {
          const response = await getData();
          setData(response);
        } catch (e) {
          console.log(e.message);
        }
      }
      setLoading(false);
    };

    checkForData();
  }, [data, setData]);

  const invoiceData = data.filter((inv) => inv.id === id);
  const [invoice] = invoiceData;

  const dummyFunc = () => true;

  return (
    <main>
      <Container>
        <BackButton click={history.goBack} />

        {loading ? (
          <Loading />
        ) : (
          <>
            <InvoiceStatusHeader status={invoice.status} func={dummyFunc} />
            <InvoiceDetail invoice={invoice}></InvoiceDetail>
          </>
        )}
      </Container>
    </main>
  );
};

export default Invoice;
