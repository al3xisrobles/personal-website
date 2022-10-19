import './App.css';
import Title from './components/Title';

function App() {

  var http = require("http");
  setInterval(function() {
      http.get("http://www.alexis-robles.com/");
  }, 300000);

  return (
    <>
      <Title/>
    </>
  );
}

export default App;
