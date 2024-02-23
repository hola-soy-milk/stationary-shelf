import React from 'react';

export default function StationaryCollection({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Brand</th>
          <th>Color</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr>
            <td>{item.type}</td>
            <td>{item.brand}</td>
            <td>{item.color}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
