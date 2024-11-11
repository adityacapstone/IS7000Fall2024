import React from 'react';
import Header from './Header';
import PortfolioOverview from './PortfolioOverview';
import MarketMovers from './MarketMovers';
import StockChart from './StockChart';
import NewsFeed from './NewsFeed';

function Dashboard() {
  return (
    <div className="space-y-6">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <PortfolioOverview />
        <MarketMovers />
        <StockChart />
        <NewsFeed />
      </div>
    </div>
  );
}

export default Dashboard;

