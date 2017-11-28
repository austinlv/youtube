import React, { Component } from 'react'
import VideoContainer from './VideoContainer'

const main = {
  width: '78%',
  height: '130%',
  margin: '1em auto',
  marginTop: '8.2em',
  backgroundColor: 'white',
}

export default class MainFeed extends Component {
  render() {
    return (
      <div style={main}>
        <VideoContainer />
      </div>
    )
  }
}
