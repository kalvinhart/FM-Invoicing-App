import { ControlsWrapper } from "./Controls.styles";
import Filter from "../Filter/Filter";
import NewInvoiceButton from "../NewInvoiceButton/NewInvoiceButton";

const Controls = () => {
  return (
    <ControlsWrapper>
      <Filter />
      <NewInvoiceButton />
    </ControlsWrapper>
  );
};

export default Controls;
