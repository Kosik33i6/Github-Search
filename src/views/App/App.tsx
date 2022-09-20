import { Search } from '../../components/Search';
import './App.scss';

export const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h1 className="heading-primary">Github Search App</h1>
      </header>
      <Search />
    </div>
  );
};

export default App;
