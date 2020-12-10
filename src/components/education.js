import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Education extends Component {
  render() {
    return(
      <Container>
      <Row> 
      <Col>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Col>
        <Col>
          <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
          <p>{this.props.schoolDescription}</p>
        </Col>
        </Row>
       
      </Container>
    )
  }
}

export default Education;