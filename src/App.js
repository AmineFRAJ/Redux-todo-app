 
import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  return (
    <div className="App">
      <h1 className='text-4xl font-bold text-gray-800 mb-4'>TODO-APP-REDUX</h1>
      <AddTask/>
      <ListTask/>
    </div>
  );
}

export default App;
