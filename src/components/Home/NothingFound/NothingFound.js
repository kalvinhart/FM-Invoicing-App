import { EmptyResultsDiv, EmptyImage } from "./NothingFound.styles";
import EmptySVG from "../../../assets/illustration-empty.svg";
import { H2, PSecondary } from "../../../styles/textStyles";

const NothingFound = () => {
  return (
    <EmptyResultsDiv>
      <EmptyImage src={EmptySVG} alt="No invoices found" />
      <H2>There is nothing here</H2>
      <PSecondary>
        Create an invoice by clicking the <strong>new</strong> button to get started
      </PSecondary>
    </EmptyResultsDiv>
  );
};

export default NothingFound;
