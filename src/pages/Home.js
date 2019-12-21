import React, {Component} from 'react'
import {Grid, Segment} from 'semantic-ui-react'
import {Route, Switch} from 'react-router-dom'
import People from "../component/People";
import NavigationMenu from "../component/NavigationMenu";
import Goals from "../component/Goals";
import Calendar from "../component/Calendar";

export default class Home extends Component {
   render() {
      return (
         <div>
            <Grid style={{maxHeight: '100vh'}}>
               <Grid.Row>
                  <Grid.Column width={4} style={{paddingRight: 0}}>
                     <People/>
                  </Grid.Column>
                  <Grid.Column width={12} style={{paddingLeft: 0}} >
                     <Route path="/:username" component={NavigationMenu}/>
                     <Segment basic>
                        <Switch>
                           <Route exact path="/:username/(chain)?" component={Goals}/>
                           <Route path="/:username/calendar" component={Calendar}/>
                        </Switch>
                     </Segment>
                  </Grid.Column>
               </Grid.Row>
            </Grid>
         </div>
      )
   }
}