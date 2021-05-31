import React, { useState, useEffect, useContext } from "react";
import InvoicesContext from "../../store/InvoicesContext";
import { getData } from "../../utils/getData";

import { Container } from "../../styles/containerStyles";
import { SpanSecondary } from "../../styles/textStyles";
import { InvoiceStatusHeader } from "./Invoice.styles";
import Loading from "../shared/Loading/Loading";
import InvoiceStatus from "../shared/InvoiceStatus/InvoiceStatus";
import BackButton from "../shared/BackButton/BackButton";

const Invoice = ({ match, location, history }) => {
  const [loading, setLoading] = useState(true);
  const { id } = match.params;
  const { data, setData } = useContext(InvoicesContext);
  let invoice = [{ status: "pending" }];

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

  invoice = data.filter((inv) => inv.id === id);

  return (
    <main>
      <Container>
        <BackButton onClick={history.goBack} />
        {loading ? (
          <Loading />
        ) : (
          <InvoiceStatusHeader>
            <SpanSecondary>Status</SpanSecondary>
            <InvoiceStatus status={invoice[0].status} />
          </InvoiceStatusHeader>
        )}
      </Container>
    </main>
  );
};

export default Invoice;
