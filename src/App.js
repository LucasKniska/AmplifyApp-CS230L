import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Card1 from './Card1';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>CS 230L</h1>
      <h2>Section - 702</h2>
      <p>WVU ID: 800403404</p>
      <p>Hi I am Lucas</p>


      <Card1 num="1"/>
      <Card1 num="2"/>
      <Card1 num="3"/>

    </div>
  );
}

export default App;
