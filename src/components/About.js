import React from 'react';
import profile from '../profile.jpg';

function About() {
    return (
        <div>
            <h1>About me</h1>
            <img className="profile"  src={profile} alt="" />
          <p> Hi,there! I'm Cindy and I starting coding when I'm 27 years old, because I want to change my career and make my life better. My previous work experience also taught me a lot, and I was an administrative assistant with over two years experience in the counter-top and cabinet industries, but after a while, I realize the way I didn't grow. So I decided to find a new field and here I am. I am looking forward to learning more and can't wait to explore the big tech world. I also like cooking western and Chinese food, enjoying the food what I make is a journey, not a destination.
          If you just like me, love cooking as much as I do? Let's talk about how delicious they are! We can code while we eat yummy food.</p>
        </div>
    )
}

export default About;