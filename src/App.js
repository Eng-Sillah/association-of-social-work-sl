// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Search from './components/Search/Search';
import Event from './components/Events/Event';
import MembershipForm from './components/Forms/Membership/MembershipForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<div><Hero /><Search /><Event /></div>} />
        <Route path="/register" element={<MembershipForm />} />
      </Routes>
    </div>
  );
}

export default App;
