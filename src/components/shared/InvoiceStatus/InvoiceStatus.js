import PropTypes from "prop-types";
import { StatusWrapper } from "./InvoiceStatus.styles";

const InvoiceStatus = ({ status, position }) => {
  return (
    <StatusWrapper status={status} position={position}>
      {status}
    </StatusWrapper>
  );
};

InvoiceStatus.propTypes = {
  status: PropTypes.oneOf(["paid", "pending", "draft"]).isRequired,
  position: PropTypes.oneOf(["absolute", null]),
};

export default InvoiceStatus;
