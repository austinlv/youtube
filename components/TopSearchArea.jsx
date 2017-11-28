import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtubeLogo from '../icons/ytb_logo.png'
import uploadIcon from '../icons/upload_icon.png'
import menuIcon from '../icons/menu_icon.png'
import bellIcon from '../icons/bell_icon.png'
import profilePic from '../icons/profile_pic.png'

const logo = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '3.4em',
  borderBottom: '0.1px solid rgb(211,211,211)',
  backgroundColor: 'white',
  marginTop: '0.6em',
}

const menu = {
  width: '1.5em',
  height: '1.5em',
  marginTop: '0.6em',
  marginLeft: '2em',
  cursor: 'pointer',
}

const image = {
  marginTop: '0.6em',
  marginLeft: '1.5em',
  width: 98,
  height: 22,
  cursor: 'pointer',
}

const rightButtons = {
  display: 'flex',
  flexDirection: 'row',
  marginRight: '3em',
  marginTop: '0.6em',
}

const upload = {
  width: '1.9em',
  height: '1.9em',
  cursor: 'pointer',
}

const bell = {
  width: '1.9em',
  height: '1.9em',
  marginLeft: '3em',
  cursor: 'pointer',
}

const pic = {
  borderRadius: '50%',
  width: '27px',
  height: '27px',
  marginLeft: '3em',
  cursor: 'pointer',
}

export default class TopSearchArea extends Component {
  render() {
    return (
      <div style={logo}>
        <img alt="menuIcon" style={menu} src={menuIcon} />
        <img alt="logo" style={image} src={youtubeLogo} />
        <SearchBar />
        <div style={rightButtons}>
          <img alt="upload" style={upload} src={uploadIcon} />
          <img alt="bell" style={bell} src={bellIcon} />
          <img alt="pic" style={pic} src={profilePic} />
        </div>
      </div>
    )
  }
}
