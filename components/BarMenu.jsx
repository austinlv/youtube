import React, { Component } from 'react'

const menu = {
  width: '100%',
  height: '2.3em',
  position: 'relative',
  backgroundColor: 'white',
  borderBottom: '0.1px solid rgb(211,211,211)',
}

const navBar = {
  overflow: 'hidden',
  display: 'flex',
  verticalAlign: 'top',
  listStyle: 'none',
  textAlign: 'center',
  marginLeft: '35%',
}

const element1 = {
  marginRight: '2em',
  color: '#333',
  fontFamily: 'Roboto',
  fontWeight: 'bold',
  letterSpacing: '0.5px',
  cursor: 'pointer',
  height: '2em',
}

const element2 = {
  marginRight: '2em',
  color: '#666',
  fontFamily: 'Roboto',
  fontWeight: 'normal',
  cursor: 'pointer',
  letterSpacing: '0.2px',
}

export default class BarMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inicio: 'red',
      trends: 'white',
      subs: 'white',
    }
  }

  changeCategory(number) {
    setTimeout(() => {
      if (number === 1) {
        this.setState({
          inicio: 'red',
          trends: 'white',
          subs: 'white',
        })
      } else if (number === 2) {
        this.setState({
          inicio: 'white',
          trends: 'red',
          subs: 'white',
        })
      } else if (number === 3) {
        this.setState({
          inicio: 'white',
          trends: 'white',
          subs: 'red',
        })
      }
    }, 500)
  }

  render() {
    return (
      <div style={menu}>
        <ul style={navBar}>
          <li
            style={{ ...element1, borderBottom: `3px solid ${this.state.inicio}` }}
            onClick={this.changeCategory.bind(this, 1)}
          >
            Inicio
          </li>
          <li
            style={{ ...element2, borderBottom: `3px solid ${this.state.trends}` }}
            onClick={this.changeCategory.bind(this, 2)}
          >
            Tendencias
          </li>
          <li
            style={{ ...element2, borderBottom: `3px solid ${this.state.subs}` }}
            onClick={this.changeCategory.bind(this, 3)}
          >
            Suscripciones
          </li>
        </ul>
      </div>
    )
  }
}
