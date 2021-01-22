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
      {description: 'Completed 3 Courses: Fundamentals of C#, The Complete 2020 Web Development Bootcamp, Complete guide to building an app with .Net Core and React on udemy', key: 2},
      {description: 'Created a MERN Stack Exercise Tracker App: https://cindysexerciseapp.herokuapp.com/', key: 3},
      {description: 'Created a MERN Stack Memories Editor: https://cindy-memories.netlify.app/', key: 4},
      {description: 'Created a Fullstack Face detection App: https://face-detections-app.herokuapp.com/', key: 5},
    ];

    const List2 = [
      {description: 'Facilitates the flow of purchase orders to accounts receivable insuring they are proper and correct ', key: 0},
      {description: 'Communicates with customer purchasing departments as well as individual customers for billing and collections', key: 1},
      {description: 'Submits invoices to customers for approval', key: 2},
      {description: 'Generates monthly sales commission report', key: 3},
      {description: 'Assists in the interview process and performs training of new hires', key: 4},
    ];

    return(
      <div>
       <Container> 
          <Row>
          <Col>

            <h2 style={{paddingTop: '2em'}}>Changhui(Cindy) McReynolds</h2>
            <h4 style={{color: 'grey'}}>Self taught Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            <p>I was an administrative assistant in the construction field. After three years experience, I realize the way I didn't grow. So I decided to change my career to dive into web Developement industry and haven't looked back. Now I'm a self taught web developer and I am looking forward to finding a full-time or part-time position where I can offer my existing skills and talents to help my future employer, while also having the opportunity to learn and grow new skills along the way.
</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            <h5>Address</h5>
            <p>Houston, TX</p>
            <h5>Phone</h5>
            <p>(832) 466-8475</p>
            <h5>Email</h5>
            <p>cindyhui546@gmail.com</p>
            <h5>Web</h5>
            <p>https://cindy-coding.herokuapp.com/</p>
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
                skill="HTML, CSS, Javascript, C#, Bootstrap, React, Node.js, Express.js, MongoDB, SQL, jQuery"
                />
               <hr style={{borderTop: '3px solid #833fb2'}} />
              <h2>Experience</h2>
              <Experience
              startYear={2020.7}
              endYear={2021}
              jobName="FreeCodeCamp, Udemy, Codecademy"
             jobDescription= {List1.map(question => {
          return (
            <li key={question.key} style={{lineHeight: 2 }}>{question.description}</li>
          );
        })}
              />
                <hr style={{borderTop: '10px'}} />
              <Experience style={{listStylePosition: 'outside'}}
                startYear={2017.5}
                endYear={2020.1}
                jobName="Allied Stone Inc., Jersey Village, Texas, USA"
                jobDescription= {List2.map(question => {
          return (
            <li key={question.key} style={{textAlign: 'left', lineHeight: 2}}>{question.description}</li>
           
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