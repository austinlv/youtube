import React, { Component } from 'react'
import thumbnail1 from '../icons/video1.png'
import thumbnail2 from '../icons/video2.png'
import thumbnail3 from '../icons/video3.png'
import thumbnail4 from '../icons/video4.png'
import thumbnail5 from '../icons/video5.png'
import thumbnail6 from '../icons/video6.png'
import thumbnail7 from '../icons/video7.png'
import thumbnail8 from '../icons/video8.png'
import thumbnail9 from '../icons/video9.png'
import thumbnail10 from '../icons/video10.png'
import thumbnail11 from '../icons/video11.png'
import thumbnail12 from '../icons/video12.png'
import Video from './Video'

const frame = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 16em)',
  marginTop: '-1.3em',
}

const recommended = {
  fontFamily: 'Roboto',
  fontWeight: '500px',
  color: '#333',
  marginLeft: '1.3em',
  paddingTop: '1em',
}

const titles = [
  'Nobody likes you when u are 26',
  'Walter White dares Tuco on Breaking Bad!',
  'Amazing Play by Roger Federer',
  'WHY YOU ARE DEPRESSED',
  'Bill Gates shows his daily morning routine',
  'SAY MY NAME, HEISENBERG!',
  'What would you do for 1,000,000$ ? OMG',
  'Picking up girls on UCLA',
  'CAN YOU SOLVE THIS MAZE?',
  'Social interactions on a typical night out',
  'HOW TO DO A PERFECT FRONT LEVER',
  'Best of Walter White Season 1',
]

const numOfViews = [
  '463.495 ',
  '893.903 ',
  '187.125 ',
  '59.000 ',
  '345.500 ',
  '606.234 ',
  '2.345.133 ',
  '993.021 ',
  '129.100 ',
  '14.600 ',
  '45.542 ',
  '1.967.385',
]

export default class VideoContainer extends Component {
  render() {
    return (
      <div>
        <h3 style={recommended}>Recomendados</h3>
        <div style={frame}>
          <Video vid={thumbnail1} vidTitle={titles[0]} views={numOfViews[0]} />
          <Video vid={thumbnail2} vidTitle={titles[1]} views={numOfViews[1]} />
          <Video vid={thumbnail3} vidTitle={titles[2]} views={numOfViews[2]} />
          <Video vid={thumbnail4} vidTitle={titles[3]} views={numOfViews[3]} />
          <Video vid={thumbnail5} vidTitle={titles[4]} views={numOfViews[4]} />
          <Video vid={thumbnail6} vidTitle={titles[5]} views={numOfViews[5]} />
          <Video vid={thumbnail7} vidTitle={titles[6]} views={numOfViews[6]} />
          <Video vid={thumbnail8} vidTitle={titles[7]} views={numOfViews[7]} />
          <Video vid={thumbnail9} vidTitle={titles[8]} views={numOfViews[8]} />
          <Video vid={thumbnail10} vidTitle={titles[9]} views={numOfViews[9]} />
          <Video vid={thumbnail11} vidTitle={titles[10]} views={numOfViews[10]} />
          <Video vid={thumbnail12} vidTitle={titles[11]} views={numOfViews[11]} />
        </div>
      </div>
    )
  }
}
