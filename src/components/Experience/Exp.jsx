import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';


const Exp = () => {
  const { exp } = useContext(PortfolioContext);
  // const {  exps } = exp;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="exp">
       
       <br></br>
      <Container>
        <Title title="Experience" />
        <Row className="exp-wrapper">
         
         <Col md={6} sm={12}>
                                      <Fade bottom duration={1000} delay={600} distance="30px">
                                        <div className="exp-wrapper__image">
                                           {/* <AboutImg alt="profile picture" filename={img} />  */}
                              <h1>Campus24 Web Developer - Internship</h1> 
                                        </div>
                                      </Fade>
                                    </Col> 
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="exp-wrapper__info" style={{marginLeft:"5rem"}}>
                <p className="exp-wrapper__info-text">
                  {
                    'Worked on official Website of Campus24'}
                </p>
                <p className="exp-wrapper__info-text">
                { 
                    'Developed pages as per given designs. '}
                </p>
                <p className="exp-wrapper__info-text">
                  { 'Made changes in designs of existing pages. '}
                </p>
                <p className="exp-wrapper__info-text">
                  {  'Tech Stack used:- HTML5 , CSS3 , Reactjs , GatsbyJs'}
                </p>
              
                 
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--hero"
                      href="https://drive.google.com/file/d/1p_zlt4mvJXPvugr3PnsimsV5zjQOOh3n/view?usp=sharing"
                    >
                      Internship Certificate
                    </a>
                  </span>
                
              </div>
            </Fade>
          </Col>
                            
                                    
        </Row>
      </Container>
    </section>
  );
};

export default Exp;
//trying to seek an
//             entry-Level position to<br></br> 
//             begin my Carrer in
//             high-level Professional<br></br> 
//             I have gained experience in <br></br> Front-End Web development. Please feel<br></br>  free to contact. Cheers !!!