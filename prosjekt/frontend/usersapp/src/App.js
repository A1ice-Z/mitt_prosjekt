// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <h1>
//           LEARN REACT
//         </h1>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';

const App = () => (
  <Router>
    <div>
      <Link to="/Login">
        <button>Go to Login</button>
      </Link>
    </div>

    <Routes>
      <Route path="/Login" Component={Login}/>
      <Route path="/Logout" Component={Logout}/>
    </Routes>
  </Router>
);

export default App;