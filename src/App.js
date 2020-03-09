import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap';



const cardData = [
  {
    nama : "Hanan",
    job : "Front End"
  },
  {
    nama : "Hanan",
    job : "Front End"
  },
  {
    nama : "Hanan",
    job : "Front End"
  },
]


class App extends React.Component {
  
  
  

  
  
  render() {
    return(
    <div className="App">
      
      <Container>

      <Row>
        <Col  sm={{ size:6, offset:3 }}>
          {
            cardData.map(data=>
            <Card body style={{ backgroundColor: '#333', borderColor: '#333', color:'white', margin:'10px' }}>
              <CardTitle>{data.nama}</CardTitle>
              <CardText>{data.job}</CardText>
              <Button>Go somewhere</Button>
            </Card>
            )
          }
          
        </Col>
      </Row>
    </Container>
    </div>

    );}
    
}

export default App;
