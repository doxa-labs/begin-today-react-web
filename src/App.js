import React, {Component} from 'react';
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Link
} from 'react-router-dom'
import {connect} from 'react-redux'
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRoute from "./component/PrivateRoute";

class App extends Component {
   render() {
      const {rehydrate} = this.props;

      if (!rehydrate.loaded) {
         return <span>Loading...</span>;
      }

      return (
         <Router>
            <Switch>
               <Route path="/login" component={Login}/>
               <Route path="/" component={Home}/>
            </Switch>
         </Router>
      );
   }
}

const mapStateToProps = state => {
   return {
      rehydrate: state.rehydrate
   };
};

export default connect(mapStateToProps)(App);

