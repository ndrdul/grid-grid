import './App.css';
import Grid from './components/Grid';

const rangeArray = [...Array(500).keys()]

function App() {
  return (
    <div className="container">
      <Grid rangeArray={rangeArray} />
    </div>
  );
}

export default App;
