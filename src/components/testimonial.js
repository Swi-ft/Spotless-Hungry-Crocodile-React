import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author2Alt: 'Jane Smith Image Alt Text',
  author1Src:
    'https://images.unsplash.com/photo-1471895302488-5ce150f3a1ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzI3NzQyOHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Position: 'Supply Chain Analyst',
  author2Name: 'Jane Smith',
  review4:
    'The transitions have made a noticeable difference in how we track and manage our inventory, leading to better decision-making.',
  author3Name: 'Michael Johnson',
  author2Src:
    'https://images.unsplash.com/photo-1467307983825-619715426c70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzI3NzQyOXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1632377082368-66155ad702d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzI3NzQyOXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Position: 'Inventory Specialist',
  author4Src:
    'https://images.unsplash.com/photo-1525873765963-8931ab571545?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzI3NzQyOXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'John Doe Image Alt Text',
  author3Alt: 'Michael Johnson Image Alt Text',
  author1Position: 'Warehouse Manager',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  review3:
    'I have seen a significant improvement in our warehouse operations since implementing this web app with its smooth transitions.',
  author2Position: 'Logistics Coordinator',
  author4Alt: 'Sarah Williams Image Alt Text',
  author1Name: 'John Doe',
  review2:
    'The transitions are seamless and intuitive, making it easy for our team to navigate through the system effortlessly.',
  author4Name: 'Sarah Williams',
  heading1: 'Testimonials',
  review1:
    'The transitions in the warehouse management web app have greatly improved our efficiency and accuracy in inventory management.',
}

Testimonial.propTypes = {
  author2Alt: PropTypes.string,
  author1Src: PropTypes.string,
  author3Position: PropTypes.string,
  author2Name: PropTypes.string,
  review4: PropTypes.string,
  author3Name: PropTypes.string,
  author2Src: PropTypes.string,
  author3Src: PropTypes.string,
  author4Position: PropTypes.string,
  author4Src: PropTypes.string,
  author1Alt: PropTypes.string,
  author3Alt: PropTypes.string,
  author1Position: PropTypes.string,
  content1: PropTypes.string,
  review3: PropTypes.string,
  author2Position: PropTypes.string,
  author4Alt: PropTypes.string,
  author1Name: PropTypes.string,
  review2: PropTypes.string,
  author4Name: PropTypes.string,
  heading1: PropTypes.string,
  review1: PropTypes.string,
}

export default Testimonial
