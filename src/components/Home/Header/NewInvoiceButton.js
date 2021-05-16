import { AddInvoiceButton, PlusIcon } from "../../../styles/homeStyles";

const NewInvoiceButton = () => {
  return (
    <div>
      <AddInvoiceButton>
        <PlusIcon>
          <path
            d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
            fill="#7C5DFA"
            fillRule="nonzero"
          />
        </PlusIcon>
      </AddInvoiceButton>
    </div>
  );
};

export default NewInvoiceButton;
