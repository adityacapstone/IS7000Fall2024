import React from 'react';

function MarketMovers() {
  const movers = [
    { symbol: 'TSLA', price: '$900', change: '+2.5%' },
    { symbol: 'AMZN', price: '$3200', change: '-1.1%' },
  ];

  return (
    <div className="p-6 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Market Movers</h2>
      <ul className="space-y-2">
        {movers.map((item, index) => (
          <li key={index} className="flex justify-between">
            <span>{item.symbol} - {item.price}</span>
            <span className={item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
              {item.change}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MarketMovers;

