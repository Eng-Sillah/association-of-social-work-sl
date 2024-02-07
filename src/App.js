// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Search from './components/Search/Search';
import Event from './components/Events/Event';
import MembershipForm from './components/Forms/Membership/MembershipForm';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Search />
      <Event />
      <MembershipForm />
    </div>
  );
}

export default App;
