import './App.css';
import Posts from './containers/Posts'
import Navbar from './components/Navbar';
import Status from './components/Status';

function App() {
  return (
    <div className='App'>
      <hr />
      <Navbar />
      <Status />
      <Posts />
    </div>
  );
}

export default App;
