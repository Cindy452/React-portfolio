import React from 'react';
import  { Row, Col, Jumbotron, Button } from 'reactstrap';

function Home() {
    return (
        <div>
            <Jumbotron>
                    <Row>
                        <Col>
                            <h1>Welcome to my website</h1>
                            <p>
                                <Button
                                    tag="a"
                                    color="success"
                                    size="large"
                                    href="/resume" 
                                    target="_blank"
                                    >
                                    
                                    View Resume
                                </Button>
                            </p>
                        </Col>
                    </Row>
            </Jumbotron>
        </div>
    )
}

export default Home;