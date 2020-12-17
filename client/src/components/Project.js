import React from 'react';
import {projects} from './projects';

const Project = ( {image, title, url }) => {
 return (
    <article className='project'>
       <img className='image' src={image} alt='' />
      <h1><a href={url}>{title}</a></h1>
    
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
