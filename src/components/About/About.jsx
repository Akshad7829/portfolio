import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import codechef from "./codechef.jpeg"
import cf from "./cf.png"
const About = () => {
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
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
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
                    'I am Akshad S. Nayakwadi, Currently pursuing Information Technology B.Tech degree in Government College Of Engineeering Karad, India'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    '  Iam trying to seek an  entry-Level position to  begin my Carrer in high-level Professional environment.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'I have gained experience in Front-End Web development. Please feel free to contact. Cheers !!'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
              </Fade>
 </Col>       
  </Row> 
      </Container>
   
    </section>
  );
};

export default About;
//trying to seek an
//             entry-Level position to<br></br> 
//             begin my Carrer in
//             high-level Professional<br></br> 
//             I have gained experience in <br></br> Front-End Web development. Please feel<br></br>  free to contact. Cheers !!!

// {/* <Fade bottom duration={1000} delay={600} distance="30px">
// <div className="project-wrapper__text-title">
//    {/* <AboutImg alt="profile picture" filename={img} />  */}
// <h1>Competitive Programing</h1> 
// </div>


// <div class="row">
// <div class="column">
// <img src={codechef} alt="Snow" style={{width:"65%"}}/>
// </div>
// <div class="column">
// <img src={cf} alt="Forest" style={{width:"65%"}}/>
// </div>
// </div>
// <div class="row">
// <div class="column">
// <img src={codechef} alt="Snow" style={{width:"65%"}}/>
// </div>
// <div class="column">
// <img src={cf} alt="Forest" style={{width:"65%"}}/>
// </div>
// </div>
// </Fade> */}