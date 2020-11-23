//Global Style
import GlobalStyle from './components/GlobalStyle';
//Pages import
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <h1>Film</h1>
      
      <AboutUs/>
    </div>
  );
}

export default App;
