import logo from './logo.svg';
import './App.css';
import NavigationBar from './NavigationBar';
import Card from './Card';


function App() {
  return (
    <div className="App">
      
      
      <NavigationBar/>

      <h1>CS 230L</h1>
      <h2>Section - 702</h2>
      <p>WVU ID: 800403404</p>
      <p>Hi I am Lucas</p>


      <Card/>
      <Card/>
      <Card/>

    </div>
  );
}

export default App;
