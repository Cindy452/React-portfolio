import React from 'react';
import Button from 'reactstrap/lib/Button';
import {projects} from './projects';


const Project = ( {image, title, content, url, source }) => {
 return (
    <article className='project'>
    <a href={url}><img className='image' src={image} alt='' /></a>
    <h1 className='title'>{title}</h1>
    <p>{content}</p>
    <Button style={{borderRadius: '25px', margin: '12px'}}
      outline
      tag="a"
      color="primary"
      size="large"
      href={url} 
      target="_blank">
     Live Demo
    </Button>
    <Button style={{borderRadius: '25px'}}
      outline
      tag="a"
      color="info"
      size="large"
      href={source} 
      target="_blank">
     View Code
    </Button>

    
    </article>
  )
}
function ProjectList() {
    return (
        <div>
      <h1>Latest Projects</h1>
      <section className='projectlist'>
       {projects.map((project) => {
         return  <Project  key={project.id} {...project} />
         })}
      </section>
        </div>
       
      
    );
  }

export default ProjectList;
