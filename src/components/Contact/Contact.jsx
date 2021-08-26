import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn } = contact;
  const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, r) => {
        alert(`Thank you for your message from ${data.email}`);
        const templateId = 'template_zr3rb6a';
        const serviceID = 'service_n89bolb';
        sendFeedback(serviceID, templateId, { from_name: data.name, reply_to: data.email,from_phn:data.phn})
        r.target.reset();
    }

    const sendFeedback = (serviceID, templateId, variables) => {
            window.emailjs.send(
                serviceID, templateId,
                variables
            ).then(res => {
                console.log('Email successfully sent!')
            })
                .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
        }
  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to contact with me? Awesome!'}
            </p>
       
             <form onSubmit={handleSubmit(onSubmit)}>

<div className="input-container">
<h4 >Your Full Name :-</h4>
  <input
style={{width:"30rem",height:"3.5rem",borderRadius:"2rem"}}
    placeholder="Name"
      name="name"

      ref={
          register({
              required: "Please enter your Name",
              maxLength: {
                  value: 20,
                  message: "Please enter a name with fewer than 20 characters"
              }
          })
      }
  /><br />
 

<p className="error" style={{color:"red"}}>  {errors.name && errors.name.message}</p><br />
</div>
     
<h4>Your Email address:-</h4>
      <div className="input-container">

  <input
style={{width:"30rem",height:"3.5rem",borderRadius:"2rem"}}
  className="take"

      placeholder="Email"
      name="email"
      ref={
          register({

              required: "Please enter an email",
              pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address"
              }
          })
      }
  /><br/>
       
    <p className="error" style={{color:"red"}}>  {errors.email && errors.email.message}</p><br />
    </div>
      <div className="input-container">
      <h4>Your Message:-</h4>
      <textarea
    className="take"
          placeholder="Your Message"
          name="phn"
        type="text"
        style={{width:"30rem",height:"3.5rem",borderRadius:"2rem"}}
          ref={
              register({
                  required: "Please enter your Message ",
                  // maxLength: {
                  //     value: 10,
                  //     message: "Please enter a name with equal to 20 characters"
                  // }
              })
          }
      /><br />
        
        <p className="error" style={{color:"red"}}>{errors.phn && errors.phn.message}</p><br />
        </div>

                {/* <input className="cta-btn cta-btn--resume" type="submit" className="btn" /> */}
                      <input
             
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              type="submit"
             text="Letks Tal"
             style={{color:"black", width:"15rem",height:"3rem",borderRadius:"2rem",backgroundColor:"#01bdae",}}
            />
              
           
            </form>
      
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
