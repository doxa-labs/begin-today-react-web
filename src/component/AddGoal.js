import React from 'react';
import {Card, Input, TextArea, Form, Button} from 'semantic-ui-react'

class AddGoal extends React.Component {

   state = {
      title:'',
      desc:''
   }

   save = () => {
      if(this.props.onAdd){
         if(this.state.title && this.state.desc){
            this.props.onAdd({title:this.state.title,desc:this.state.desc})
            this.clear()
         }
      }
   }

   clear = () => {
      this.setState({title:'',desc:''})
   }

   render() {
      return (
         <Card>
            <Card.Content>
               <Card.Description><Input fluid placeholder='Hedef' value={this.state.title} onChange={(e,data)=>{this.setState({title:data.value})}}/></Card.Description>
               <Form>
                  <Card.Description><TextArea autoHeight placeholder='Açıklama' value={this.state.desc} onChange={(e,data)=>{this.setState({desc:data.value})}}/></Card.Description>
               </Form>
            </Card.Content>
            <Card.Content extra>
               <div className='ui two buttons'>
                  <Button basic color='green' onClick={this.save}>Kayet</Button>
                  <Button basic color='red' onClick={this.clear}>Temizle</Button>
               </div>
            </Card.Content>
         </Card>
      );
   }
}

export default AddGoal