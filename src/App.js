
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Pages/Home';
import Admin from './Components/Pages/Admin';

import ContactUs from './Components/Pages/ContactUs';
import UserList from './Components/UserList/UserList';
import Profile from './Components/Pages/Profile';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
     <Route path='/' element={ <Home /> } />
          <Route path="/Admin" element={ <Admin /> } />
          <Route path="/Users" element={ <UserList /> } />
          <Route path="/ContactUs" element={ <ContactUs /> } />
          <Route path="/user/:id" element={<Profile />} />



      </Routes>
    </div>
  );
}

export default App;
