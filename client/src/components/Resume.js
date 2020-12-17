import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    const List1 = [
      {description: 'Gained Responsive Web Design Certification, JavaScript Algorithms and Data Structures Certification on freecodecamp  ', key: 0},
      {description: 'Completed 5 courses: React, C#, CSS, HTML, SQL on codecademy', key: 1},
      {description: 'Completed 3 Courses: Fundamentals of C#, The Complete 2020 Web Development Bootcamp on udemy', key: 2},
      {description: 'Completed a MERN Stack todolist app: https://cindystodoapp.herokuapp.com/', key: 3},
      {description: 'Completed a ', key: 4},
      {description: 'Completed 3 Courses: Fundamentals of C#, The Complete 2020 Web Development Bootcamp on udemy', key: 5}
    ];

    const List2 = [
      {description: 'Receive container delivery orders from customers and brokers by email  ', key: 0},
      {description: 'Check the container arrival location, shipping lines and size', key: 1},
      {description: 'Tracking the ETA of cargo and giving the customer instant updates', key: 2},
      {description: 'Help customer to check the last free day of containers in the port and railway to avoid demurrage charges ', key: 3},
      {description: 'Inform brokers for any custom hold and bill of lading hold containers', key: 4},
      {description: 'Arrange delivery appointments with customer for live load and drop containers', key: 5},
      {description: 'Work with dispatcher to arrange a driver for picking up, delivering full containers and returning empty containers', key: 6},
      {description: 'Check off hire container re-delivery number and return location ', key: 7},
      {description: 'Submit rail billing or street turn request for export bookings ', key: 8}
    ];

    const List3 = [
      {description: 'Facilitates the flow of purchase orders to accounts receivable insuring they are proper and correct ', key: 0},
      {description: 'Coordinates with adjacent departments for the collection of information needed for finalizing purchase orders', key: 1},
      {description: 'Communicates with customer purchasing departments as well as individual customers for billing and collections', key: 2},
      {description: 'Double checking Takeoff calculations using Bluebeam and Excel', key: 3},
      {description: 'Interact with customers content management systems for collection of information', key: 4},
      {description: 'Submits invoices to customers for approval', key: 5},
      {description: 'Works with accounts receivable to follow up on outstanding invoices', key: 6},
      {description: 'Generates monthly sales commission report', key: 7},
      {description: 'Handles large volume accounts, using company’s stone profit system to generate daily sales orders ', key: 8},
      {description: 'Follows up emails and calls with builders to make sure the company get paid in a timely manner', key: 9},
      {description: 'Assists in the interview process and performs training of new hires', key: 10},
    ];

    return(
      <div>
       <Container> 
          <Row>
          <Col>

            <h2 style={{paddingTop: '2em'}}>Changhui(Cindy) McReynolds</h2>
            <h4 style={{color: 'grey'}}>Junior Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            <p>I was an administrative assistant in the construction and transportation field. After three years experience, I realize the way I didn't grow. So I decided to change my career to dive into web Developer industry and haven't looked back. Now I'm a self taught web developer and I am looking forward to finding a full-time position where I can offer my existing skills and talents to help my future employer, while also having the opportunity to learn and grow new skills along the way.
</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            <h5>Address</h5>
            <p>Houston, TX</p>
            <h5>Phone</h5>
            <p>(832) 466-8475</p>
            <h5>Email</h5>
            <p>cindyhui546@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
          </Col>
          </Row>
          <Row><Col className="resume-right-col">
           <h2>Education</h2>
            <Education
              startYear={2012.9}
              endYear={2016.7}
              schoolName="JinZhong University"
              schoolDescription="Bachelors in English Education "
               />

               <Education
                 startYear={2020.8 }
                 endYear={2020.11}
                 schoolName="freeCodeCamp"
                 schoolDescription="Responsive Web Design and JavaScript Algorithms and Data Structures Developer Certification"
                  />
                <hr style={{borderTop: '3px solid #833fb2'}} />

                <h2>Skills</h2>
              <Skills
                skill="HTML, CSS, Javascript, C#, ASP.NET Core, Bootstrap, React, Node.js, Express.js, MongoDB, SQL, jQuery"
                />
               <hr style={{borderTop: '3px solid #833fb2'}} />
              <h2>Experience</h2>
              <Experience
              startYear={2020.7}
              endYear={2020.12}
              jobName="FreeCodeCamp, Udemy, Codecademy"
             jobDescription= {List1.map(question => {
          return (
            <li key={question.key}>{question.description}</li>
          );
        })}
              />
                <hr style={{borderTop: '10px'}} />
            <Experience
              startYear={2020.5}
              endYear={2020.6}
              jobName="Land network trucking LP., Houston, Texas, USA"
              jobDescription= {List2.map(question => {
          return (
            <li key={question.key}>{question.description}</li>
          );
        })}
              />
               <hr style={{borderTop: '10px'}} />
              <Experience
                startYear={2017.5}
                endYear={2020.1}
                jobName="Allied Stone Inc., Jersey Village, Texas, USA"
                jobDescription= {List3.map(question => {
          return (
            <li key={question.key}>{question.description}</li>
          );
        })}
                />
             
             
                 </Col></Row>
          
               </Container>
      </div>
    )
  }
}

export default Resume;