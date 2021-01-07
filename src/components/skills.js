import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Skills extends Component {
  render() {
   
    return(
      <Container>
      <Row><Col>
          <div style={{display: 'flex'}}>{this.props.skill} </div>
        </Col></Row>
        
      </Container>
    )
  }
}

export default Skills;

