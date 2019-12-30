import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/signup";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Data from "./components/dates";

class App extends React.Component {

  constructor(props) {
    super(props)

    this.updateDat = this.updateData.bind(this)
  }
  state = {
    response: '',
    post: '',
    responseToPost: '',
    data: "",
    flag: false,
    flag2: false,
    moreData: ""
  };

  updateData = (data) => {
    this.setState({ data: data })
    this.setState({ flag: true })
  }
  updateMoreData = (data) => {
    this.setState({ moreData: data })
    this.setState({ flag2: true })
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({
        response: res.express
      }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  render() {
    return (

      <Router>
        <div className="App">

          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/"}>CodersCamp Cinema</Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                  </li>

                </ul>
              </div>
            </div>
          </nav>

          <div className="cinemaContainer">


            <div className="mainContent"><Route exact path='/' component={Home} /></div>
            <div className="authPanel"><Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} /></div>

          </div>
          <Navbar />
          <div className="dataContainer row justify-content-md-center">
            <Data />
          </div>

        </div>



      </Router >

    );
  }
}
export default App;