import React from 'react';
import {
   Header,
   Image,
   List,
   Segment,
} from 'semantic-ui-react'
import { Route, withRouter, Link } from "react-router-dom";

const Item = (props) => {
   return (
      <Route path={props.path || props.to} exact={props.exact} children={({ match }) => (
         <Link to={props.to} className={'item ' + (!!match && !props.nofocus ? 'active' : '')}>
            <List.Item>
               <List.Content>
                  <List.Header>{props.children}</List.Header>
               </List.Content>
            </List.Item>
         </Link>
      )}/>
   )
}

class People extends React.Component {

   render() {
      return (
         <Segment basic inverted style={{minHeight: '100vh'}}>
            <Header>Kişiler</Header>
            <List selection inverted verticalAlign='middle'>
               <Item to='/goksel'>Göksel Pırnal</Item>
               <Item to='/fatih'>Fatih Yıldızhan</Item>
               <Item to='/hakan'>Hakan Özler</Item>
            </List>
         </Segment>
      );
   }
}

export default People