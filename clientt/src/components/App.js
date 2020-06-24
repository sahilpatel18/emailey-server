import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import { connect } from "react-redux";
import * as actions from "../actions";
import Landing from '../components/Landing'

const Dashboard = () => {
  return <div>Dashboard</div>;
};


class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <Header />
          <div>
            <Route exact path='/' component={Landing} /> 
            <Route exact path='/surveys' component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
