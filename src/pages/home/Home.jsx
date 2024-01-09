import React from 'react'
import Profile from "../../assets/home.jpg"
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa"
import "./home.css"

function Home() {
  return (
    <section className='home section grid'>
      <img src={Profile} alt='' className='home__img' />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Girish Girijan. </span>Full stack developer
          </h1>
          <p className="home__description">            
            Over 5+ years of extensive work experience as a Full Stack Engineer and have proficient experience in designing and developing front-end and back-end technologies and restful web services in various industries like Utility, Insurance, Sports, Finance, and Recruitment.
          </p>

          <Link to="/about" className='button'>
            More about me {' '}
            <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="colo__block"></div>
    </section>
  )
}

export default Home
