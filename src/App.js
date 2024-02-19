// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Search from './components/Search/Search';
import Event from './components/Events/Event';
import OtherEvents from './components/OtherEvents/OtherEvents';
import Banner from './components/Banner/Banner';
import MembershipForm from './components/Forms/Membership/MembershipForm';
import RegisteredMember from './components/Forms/Membership/RegisteredMember';
import OtherSocialWork from './components/OtherSocialWork/OtherSocialWork';
import Membership from './components/Membership/Membership';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<div><Hero /><Search /><Event /><Banner /> <OtherSocialWork /> <Banner /> <Membership /> <OtherEvents /></div>} />
        <Route path="/register" element={<MembershipForm />} />
        <Route path="/login" element={<RegisteredMember />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
