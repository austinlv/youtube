import React, { Component } from 'react'

const btn = {
  width: '5.0em',
  height: '2.2em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '1px',
  borderBottomRightRadius: '0.15em',
  borderTopRightRadius: '0.15em',
  border: '1px solid rgb(211,211,211)',
  backgroundColor: 'rgb(248,248,248)',
}

const btsvg = {
  width: '19px',
  height: '19px',
}

const inputStyle = {
  width: '45em',
  height: '2.2em',
  border: '1px solid rgb(211,211,211)',
  borderRight: '0px',
  boxShadow: 'inset 0 1px 2px #eee',
  fontFamily: 'Roboto',
  paddingLeft: '0.5em',
}

const search = {
  display: 'flex',
  width: '55%',
  margin: '0.2em auto',
}

export default class SearchBar extends Component {
  render() {
    return (
      <div style={search}>
        <input style={inputStyle} placeholder="Buscar" />
        <a href="https://www.youtube.com" style={btn}>
          <svg style={btsvg} id="yt-logo-svg">
            <path
              fill="#a3a3a3"
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5
               16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59
               4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5
               11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              className="style-scope yt-icon"
            />
          </svg>
        </a>
      </div>
    )
  }
}
