import { Search } from '../../components/Search';
import { Logo } from '../../components/Logo';
import './App.scss';

export const App = () => {
  return (
    <div className="App">
      <header className="header">
        <Logo href="/" className="fa-brands fa-github" />
        <div className="header-container">
          <h1 className="heading-primary">Github Search App</h1>
        </div>
      </header>
      <Search />
    </div>
  );
};

export default App;
