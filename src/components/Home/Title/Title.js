import { useContext } from "react";
import InvoicesContext from "../../../store/InvoicesContext";
import { H1, SpanSecondary } from "../../../styles/textStyles";

const Title = () => {
  const data = useContext(InvoicesContext);
  return (
    <div>
      <H1>Invoices</H1>
      <SpanSecondary>
        {`${data.length} ${data.length === 1 ? "invoice" : "invoices"}`}
      </SpanSecondary>
    </div>
  );
};

export default Title;
