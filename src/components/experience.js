import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Experience extends Component {
  render() {
    return(
      <Row> 
      <Col>
          <h4 style={{fontWeight: 500}} >
          {this.props.jobName}
         <p></p>
          {this.props.startYear} - {this.props.endYear}
          </h4>
          <p></p>
          <p style={{listStylePosition: 'inside', textIndent: '-1em', paddingLeft: '1em'}}>
          {this.props.jobDescription}
          </p>
       </Col>
      </Row>
    
    )
  }
}

export default Experience;

