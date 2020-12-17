import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Experience extends Component {
  render() {
    return(
      <Row> 
      <Col>
          <h5 style={{fontWeight: 500}} >{this.props.jobName} <p></p>{this.props.startYear} - {this.props.endYear}</h5>
         {this.props.jobDescription}
       
      </Col>
      </Row>
    
    )
  }
}

export default Experience;


