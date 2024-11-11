import React from 'react';

function PortfolioOverview() {
  return (
    <div className="p-6 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">My Portfolio</h2>
      <p>Total Value: $10,000</p>
      <p>Gains/Losses: <span className="text-green-500">+5%</span></p>
    </div>
  );
}

export default PortfolioOverview;

