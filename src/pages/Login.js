import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const Login = () => (
   <div className='login-form'>
      <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
      <Grid
         textAlign='center'
         style={{ height: '100%' }}
         verticalAlign='middle'
      >
         <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>Giriş Formu</Header>
            <Form size='large'>
               <Segment stacked>
                  <Form.Input
                     fluid
                     icon='user'
                     iconPosition='left'
                     placeholder='Eposta Adresi'
                  />
                  <Form.Input
                     fluid
                     icon='lock'
                     iconPosition='left'
                     placeholder='Parola'
                     type='password'
                  />

                  <Button color='teal' fluid size='large'>Giriş Yap</Button>
               </Segment>
            </Form>
         </Grid.Column>
      </Grid>
   </div>
)

export default Login
