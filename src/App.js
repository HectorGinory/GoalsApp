import './App.css';
import Goal from './components/list/goals/goal';
import Footer from './components/shared/footer/footer';
import Header from './components/shared/header/header';
import Main from './components/shared/main/main';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main>
        <Goal></Goal>
      </Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
