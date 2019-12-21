import React from 'react';
import {Grid, Card, Input, TextArea, Form, Button, Divider} from 'semantic-ui-react'
import NavigationMenu from "./NavigationMenu";
import AddGoal from "./AddGoal";

const goals = [
   {title:'Kitap Okuma',desc:'lorem ipsum dolor sit amet'},
   {title:'Kitap Okuma 2',desc:'lorem ipsum dolor sit amet'},
   {title:'Kitap Okuma 3',desc:'lorem ipsum dolor sit amet'}
]

class Goals extends React.Component {

   state = {
      goals:goals
   }

   addGoal = (goal) => {
      console.log(goal)
      this.setState({goals:[...this.state.goals,goal]})
   }

   render() {
      return (
         <Grid>
            <Grid.Row>
               <Grid.Column>
                  <Input icon='search' iconPosition='left' placeholder='Ara...'/>
                  <Divider/>
                  <Card.Group>
                     <AddGoal onAdd={this.addGoal}/>
                     {this.state.goals.map((goal)=>{
                        return <Card key={goal.title} header={goal.title} description={goal.desc}/>
                     })}
                  </Card.Group>
               </Grid.Column>
            </Grid.Row>
         </Grid>
      );
   }
}

export default Goals