// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Posts from "./Posts";
import SideMenu from "./SideMenu";

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to refreshhhh.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  return (
    <div className="App">
      <Header />
      <Container />
    </div>
  );
}

function Container() {
  return (
    <div className="Container">
      <Posts />
      <SideMenu />
    </div>
  );
}

export default App;
