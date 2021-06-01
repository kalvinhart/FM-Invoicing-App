import React from "react";
import PropTypes from "prop-types";
import { Table } from "./ItemsTable.styles";

const ItemsTable = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr className="mobile-hidden">
          <th className="left">Item Name</th>
          <th className="center">QTY.</th>
          <th className="right">Price</th>
          <th className="right">Total</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.name}>
              <td
                className="left mobile-text"
                mobile-text={`${item.quantity} x £ ${item.price.toFixed(2)}`}
              >
                {item.name}
              </td>
              <td className="center mobile-hidden">{item.quantity}</td>
              <td className="right mobile-hidden">{`£ ${item.price.toFixed(2)}`}</td>
              <td className="right">{`£ ${item.total.toFixed(2)}`}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

ItemsTable.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemsTable;
