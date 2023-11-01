import logo from './logo.svg';
import './App.css';
import Header from './layouts/Header';
import DetailSource from './pages/DetailSource';

function App() {
  return (
    <div className='bg-bgBody'>
      <Header/>
      <DetailSource/>
    </div>
  );
}

export default App;
