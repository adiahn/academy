import './About.css'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__content">
          <div className="about__text">
            <h2 className="about__heading">About KASEDA Digital Academy</h2>
            <p className="about__subheading">A Platform and an Education Model.</p>
            <div className="about__description">
              <p>
                KASEDA Digital Academy is an online e-learning platform with mobile and offline capability 
                that enables continuous access to quality entrepreneurship education. It is highly flexible 
                and adaptable, allowing learners and educators to easily access comprehensive business development 
                resources and use it to complement existing learning efforts.
              </p>
              <p>
                The platform has been developed with a unique suite of online and offline functions that caters 
                for deployment in places with poor connectivity - often locations where aspiring entrepreneurs 
                find themselves unable to access quality digital education, tools and content.
              </p>
            </div>
            <button className="about__cta">
              Read More →
            </button>
          </div>
          <div className="about__visual">
            <div className="about__decorative-shape">
              <div className="about__shape-inner"></div>
              <div className="about__dots">
                <span className="about__dot"></span>
                <span className="about__dot"></span>
                <span className="about__dot"></span>
                <span className="about__dot"></span>
              </div>
            </div>
            <div className="about__image-wrapper">
              <img 
                src="https://source.unsplash.com/83tkHLPgg2Q/600x600" 
                alt="Students learning together" 
                className="about__image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

