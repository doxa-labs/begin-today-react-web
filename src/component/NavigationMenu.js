import React from 'react';
import {Menu} from 'semantic-ui-react'
import { Route, withRouter, Link } from "react-router-dom";

const Item = (props) => {
   return (
      <Route path={props.path || props.to} exact={props.exact} children={({ match }) => (
         <Link to={props.to} className={'item ' + (!!match && !props.nofocus ? 'active' : '')}>
            {props.children}
         </Link>
      )}/>
   )
}

class NavigationMenu extends React.Component {
   render() {
      return (
         <Menu secondary size={'massive'} pointing>
            <Item exact path="/:username/(chain)?" to={'/'+this.props.match.params.username + '/chain'}>Zincir</Item>
            <Item to={'/'+this.props.match.params.username + '/calendar'}>Takvim</Item>
            <Menu.Menu position='right'>
               <Item to='/about'>Nedir?</Item>
            </Menu.Menu>
         </Menu>
      );
   }
}

export default NavigationMenu