import React, {Component} from 'react';
import img from '../images/home.jpg';

const imageStyle = {
  width: '100%',
  height: 'auto',
};

const textStyle = {
  position: 'absolute',
  top: '25%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '#F4BBCF',
  'font-size': '300%',
  'font-family': " 'Coronetscript', cursive",
};

const textStyleA = {
  position: 'absolute',
  top: '35%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: '#F4BBCF',
  'font-size': '100%',
  'font-family': " 'Helvetiva Narrow', sans-serif",
};

const container = {
  position: 'relative',
  'text-align': 'center',
  color: 'white',
};

class Home extends Component {
  render() {
    return (
      <div style={container}>
        <img src={img} style={imageStyle} />
        <div style={textStyle}>Makayla & Mason</div>
        <div style={textStyleA}>October 5, 2019 - Edgartown, MA</div>
      </div>
    );
  }
}

export default Home;
