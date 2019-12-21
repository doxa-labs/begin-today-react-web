import React from 'react';
import NavigationMenu from "./NavigationMenu";
import {Grid, Segment, Card} from 'semantic-ui-react'
import moment from 'moment'

class Calendar extends React.Component {

   render() {
      return (
         <Grid style={{maxHeight: '90vh',overflow:'scroll',overflowX:'hidden'}}>
            {[...new Array(53)].map((_, weekIndex) => {
               return (
                  <Grid.Row key={weekIndex} columns={7}>
                     {[...new Array(7)].map((_, dayIndex) => {
                        return (
                           <Grid.Column key={dayIndex}>
                              <Card fluid color='orange' header={moment().dayOfYear((weekIndex * 7) + dayIndex + 1).format('LL')} meta={moment().dayOfYear((weekIndex * 7) + dayIndex + 1).format('dddd')} description={'Lorem ipsum dolor sit amet'}/>
                           </Grid.Column>
                        )
                     })}
                  </Grid.Row>
               )
            })}
         </Grid>
      );
   }
}

export default Calendar