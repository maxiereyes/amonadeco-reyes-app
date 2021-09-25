import React from "react";

export const InputSelect = ({ items, setSelectedItem }) => {
  return (
    <select
      className="custom-select p-2 text-secondary bg-light border-0"
      onChange={setSelectedItem}
    >
      {items.map((item, index) => (
        <option key={index} value={item.value}>
          {item.value}
        </option>
      ))}
    </select>
  );
};
