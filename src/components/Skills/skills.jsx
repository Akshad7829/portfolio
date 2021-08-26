import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';


const skills = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
    <section id="skills">
   
    <br></br>
      <Container>
        <Title title="Skills" />
        {/* <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'I am Akshad S. Nayakwadi, Currently pursuing Information Technology B.Tech degree in Karad, India'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    '  Iam trying to seek an  entry-Level position to  begin my Carrer in high-level Professional environment.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'I have gained experience in Front-End Web development. Please feel free to contact. Cheers !!'}
                </p> */}
                {resume && (
                //   <span className="d-flex mt-3">
               
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--hero  "
                      
                    >
                      C++
                    </a>
                  
                  // </span>
                )}
                    {resume && (
                //   <span className="d-flex mt-3">
              
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--hero but"
                    
                    >
                     Data Structures
                    </a>
                  
                  // </span>
                )}
                    {resume && (
                //   <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--hero but"
                
                    >Database Management System
                    </a>
                  // </span>
                )}
                    {resume && (
                //   <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--hero but"
                      
                    >
                      MySql
                    </a>
                  // </span>
                )}
                 {resume && (
                //   <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--hero but"
                      
                    >
                      JavaScript
                    </a>
                  // </span>
                )}
                     {resume && (
                //   <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--hero but"
                    
                    >
                      Reactjs
                    </a>
                  // </span>
                )}
                     {resume && (
                //   <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--hero but"
                    
                    >HTML5
                    </a>
                  // </span>
                )}
                {resume && (
                //   <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--hero but"
                    
                    >CSS3
                    </a>
                  // </span>
                )}
                {resume && (
                //   <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--hero but"
                      
                    >Bootstrap
                    </a>
                  // </span>
                )}
                  {resume && (
                //   <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--hero but"
                    
                    >Gatsbyjs
                    </a>
                  // </span>
                )}
                  {resume && (
                //   <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--hero but"
                  
                    >Github
                    </a>
                  // </span>
                )}
                  {resume && (
                //   <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--hero but"
                   
                    >Firebase
                    </a>
                  // </span>
                )}
              {/* </div>
            </Fade>
          </Col>
        </Row> */}
      </Container>
      <br></br>
    </section>
  )}

export default skills;
