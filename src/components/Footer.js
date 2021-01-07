import React from 'react';
import { social } from './data';

function Footer() {

    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (<footer className='footer'>
    <div>
     <ul className='footer-social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a rel="noreferrer" href={url} target='_blank'>{icon}</a>
              </li>
            );
          })}
        </ul>  
     </div>
     <div>
     <p>&#169; {year} Made by Cindy. Built with React</p>
     </div>
   
</footer>)
}

export default Footer;