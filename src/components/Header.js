import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex flex-col items-center">
      <h1 className="text-2xl font-semibold mb-2">Finance Dashboard</h1>
      <input 
        type="text" 
        placeholder="Search stocks..." 
        className="p-2 mb-4 rounded-md w-1/3"
      />
      <div className="flex space-x-4 text-sm">
        <span>APPL: $150.45 <span className="text-green-500">▲ 1.2%</span></span>
        <span>GOOGL: $2750.00 <span className="text-red-500">▼ 0.8%</span></span>
      </div>
    </header>
  );
}

export default Header;
