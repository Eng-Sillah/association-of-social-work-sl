// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Login from './components/Login/Login';
import Search from './components/Search/Search';
import Event from './components/Events/Event';
import OtherEvents from './components/OtherEvents/OtherEvents';
import Banner from './components/Banner/Banner';
import MembershipForm from './components/Forms/Membership/MembershipForm';
import RegisteredMember from './components/Forms/Membership/RegisteredMember';
import OtherSocialWork from './components/OtherSocialWork/OtherSocialWork';
import Membership from './components/Membership/Membership';
import Footer from './components/Footer/Footer';

/////// About Links ///////
import WhatIsSocialWork from './components/AboutUs/WhatIsSocialWork/WhatIsSocialWork';
import AboutSLASW from './components/AboutUs/AboutSLASW';
import WhatSocialWorkDo from './components/AboutUs/WhatIsSocialWork/WhatSocialWorkDo/WhatSocialWorkDo';
import Constitution from './components/AboutUs/Governance/Constitution/Constitution';
import OrgansOfSLASW from './components/AboutUs/Governance/OrganOfSLASW/OrgansOfSLASW';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<div><Hero /><Search /><Event /><Banner /> <OtherSocialWork /> <Banner /> <Membership /> <OtherEvents /></div>} />
        <Route path="/register" element={<MembershipForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="what-is-social-work" element={<WhatIsSocialWork />} />
        <Route path="about-slasw" element={<AboutSLASW />} />
        <Route path="registered-member" element={<RegisteredMember />} />
        <Route path="what-social-work-do" element={<WhatSocialWorkDo />} />
        <Route path="constitution" element={<Constitution />} />
        <Route path="organs" element={<OrgansOfSLASW />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
