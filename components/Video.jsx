import React, { Component } from 'react'
import PropTypes from 'prop-types'

const vid = {
  width: '15em',
  height: '9em',
  marginLeft: '1.5em',
  marginTop: '1em',
  cursor: 'pointer',
}

const title = {
  overflow: 'hidden',
  color: '#167AC5',
  fontFamily: 'Roboto',
  fontSize: '13px',
  marginLeft: '1.3em',
  marginTop: '0.3em',
  cursor: 'pointer',
}

const channelName = {
  color: '#767676',
  marginLeft: '1.5em',
  fontFamily: 'Roboto',
  fontSize: '11px',
  fontWeight: '400',
  textDecoration: 'none',
  display: 'inline-block',
  marginTop: '-1em',
}

const views = {
  display: 'inline-block',
  color: '#767676',
  fontFamily: 'Roboto',
  fontSize: '11px',
  marginLeft: '1.5em',
  marginTop: '0.25em',
}

export default class Video extends Component {
  render() {
    return (
      <div>
        <img alt="video" style={vid} src={this.props.vid} />
        <h3 style={title}>{this.props.vidTitle}</h3>
        <a href="https://www.youtube.com" style={channelName}>Wall Street Journal</a>
        <li style={views}>{this.props.views} visualizaciones</li>
      </div>
    )
  }
}

Video.propTypes = {
  vid: PropTypes.element.isRequired,
  vidTitle: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
}
