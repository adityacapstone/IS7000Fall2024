import Navbar from './header/Navbar';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/dashboard/Home';
import Contact from './pages/Contact';
import MarketOverview from './pages/dashboard/MarketOverview';
import Subscription from './pages/subscription/Subscription';
import Wallet from './pages/wallet/Wallet';
import User from './pages/user/User';
import Profile from './pages/profile/Profile';
import SignUp from './pages/user/signup';
import Login from './pages/user/Login';

function App() {
  return (
    <div className="App bg-rose-400	  w-full h-screen" >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/markets' element={<MarketOverview />} />
        <Route path='/subscription' element={<Subscription />} />
        <Route path='/wallet' element={<Wallet />} />
        <Route path='/user' element={<User />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
