import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import styles from './App.css';

class HotelItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const {image, name, description, phone, price, bText} = this.props;
    return (
      <div className={styles.hotelGridItem}>
        {image ? <img className={styles.hotelGridImage} src={image} /> : null}
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
          <p>{phone}</p>
          <p>{price}</p>
        </div>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleClick} className={styles.hotelButton}>
          {!!bText ? bText : 'Learn More'}
        </Button>
      </div>
    );
  }

  handleClick() {
    window.open(this.props.link);
  }
}

export default HotelItem;
