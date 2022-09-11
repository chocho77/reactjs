import './App.css';

function App() {
  const name = "Chavdar";
  const x = true;

  return (
    <div className="App">
     <h1>Hello From React</h1>
     <h2>Hello {name} {x ? 'Yes' : 'No'}</h2>
    </div>
  );
}

export default App;
