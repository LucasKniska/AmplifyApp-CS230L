import logo from './logo.svg';
import './App.css';
import navigationBar from './NavigationBar';
import Card from './Card';


function App() {
  return (
    <div className="App">
      
      
      <navigationBar/>
      
      <h1>CS 230L</h1>
      <h2>Section - 702</h2>
      <p>WVU ID: 800403404</p>
      <p>Hi I am Lucas</p>


      <Card num={1}/>
      <Card num={2}/>
      <Card num={3}/>

    </div>
  );
}

export default App;
