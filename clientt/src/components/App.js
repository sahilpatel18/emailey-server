import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";

const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <div>
          <Header />
          {/* <Route exact path='/' component={Landing} />
                <Route exact path='/surveys' component={Landing} />
                <Route path='/surveys/new' component={Landing} />
                <Route path='/' component={Landing} />  */}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
