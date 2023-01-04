import { Component } from "react";
import './card-item.styles.css'

class CardItem extends Component {
  render() {
    const { id, name, email } = this.props
    return (
      <div className="card-item">
        <div className="card-container" key={id}>
          <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={name} />
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    )
  }
}

export default CardItem