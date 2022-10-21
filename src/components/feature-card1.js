import React from 'react'

import PropTypes from 'prop-types'

import './feature-card1.css'

const FeatureCard1 = (props) => {
  return (
    <div className="feature-card1-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card1-image"
      />
      <h5 className="feature-card1-text headline5">{props.card_title11}</h5>
      <h5 className="feature-card1-text1 headline5">{props.card_title}</h5>
      <h5 className="feature-card1-text2 headline5">{props.card_title1}</h5>
      <h5 className="feature-card1-text3 headline5">{props.card_title111}</h5>
      <h5 className="feature-card1-text4 headline5">{props.card_title1111}</h5>
    </div>
  )
}

FeatureCard1.defaultProps = {
  card_title1111: 'RB Amount - Value',
  card_title111: 'Gold Amount - Value',
  card_title: 'Pet Name',
  card_title11: 'Shiny Amount - Value',
  card_title1: 'Normal Amount - Value',
  image_src: '/playground_assets/01.svg',
  image_alt: 'image',
}

FeatureCard1.propTypes = {
  card_title1111: PropTypes.string,
  card_title111: PropTypes.string,
  card_title: PropTypes.string,
  card_title11: PropTypes.string,
  card_title1: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default FeatureCard1
