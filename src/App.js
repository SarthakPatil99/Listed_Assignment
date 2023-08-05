import './App.css';
import Dashboard from './component/Dashboard';
import Layout from './component/Layout';
import Login from './component/Login';
import Transaction from './component/Transaction'
import Schedules from './component/Schedules';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './component/Users';
import Settings from './component/Settings';
import Help from './component/Help';
import ContactUs from './component/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path='/dashboard' element={<Layout />}>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/dashboard/transaction' element={<Transaction />}></Route>
          <Route path='/dashboard/schedules' element={<Schedules />}></Route>
          <Route path='/dashboard/users' element={<Users />}></Route>
          <Route path='/dashboard/settings' element={<Settings />}></Route>
          <Route path='/dashboard/help' element={<Help />}></Route>
          <Route path='/dashboard/contactus' element={<ContactUs />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
