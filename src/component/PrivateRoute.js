import React from 'react';
import {connect} from "react-redux";
import {Route,Redirect} from "react-router-dom";

class PrivateRoute extends React.Component {

   render() {
      if(this.props.user){
         return <Route path={this.props.path} {...this.props} component={this.props.component}/>
      }
      return <Redirect to={'/login'}/>
   }

}

const mapStateToProps = (state, ownProps) => {
   return {
      user: state.auth.user,
   }
}

export default connect(mapStateToProps)(PrivateRoute);
