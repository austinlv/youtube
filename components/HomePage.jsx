import React, { Component } from 'react'
import TopSearchArea from './TopSearchArea'
import MainFeed from './MainFeed'
import BarMenu from './BarMenu'

const topMenu = {
  position: 'fixed',
  width: '100%',
  top: '0',
  overflow: 'hidden',
  backgroundColor: 'white',
}

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div style={topMenu}>
          <TopSearchArea />
          <BarMenu />
        </div>
        <MainFeed />
      </div>
    )
  }
}
