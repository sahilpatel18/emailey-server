import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import { connect } from "react-redux";
import * as actions from "../actions";
import Landing from "../components/Landing";
import Dashboard from './Dashboard'


const SurveyNew = () => {
  return <div>New survey</div>
}


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
            <Route path='/surveys/new' component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
