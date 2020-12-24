import React, {useState} from 'react';

function Contact() {

  const [inputs, setInputs] = useState({email: '', name: '', subject: '', message: ''})
    const handleChange = e => {
      const {name, value} = e.target
      setInputs(prev => ({...prev, [name]: value }))
    }
    const handleSubmit = e => {
      e.preventDefault()
      window.location = '/submit'
    }
  return (
     <div>
     <h1>Contact Me</h1>
         <form id= "contact-form" onSubmit={handleSubmit}>

        <div className="form-group">
        <label htmlFor="name">Name</label>
       <input type="text" className="form-control" placeholder="full name" required minLength="3" maxLength="100" name="name" value={inputs.name} onChange={handleChange} />
       </div>

       <div className="form-group">
         <label htmlFor="exampleInputEmail1">Email</label>
         <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="email@example.com" required name="email" value={inputs.email} onChange={handleChange} />
        </div>

       <div className="form-group">
       <label htmlFor="name">Subject</label>
       <input type="text" className="form-control" placeholder="subject" required name="subject" value={inputs.subject} onChange={handleChange} />
       </div>

       <div className="form-group">
       <label htmlFor="name">Message</label>
       <textarea className="form-control" rows="5" name="message" placeholder="tell me about your experience..." required value={inputs.message} onChange={handleChange} ></textarea>
       </div>

      <button type="submit" className="btn btn-primary">Submit</button>
      
      </form>
    </div>
  );
}

export default Contact;