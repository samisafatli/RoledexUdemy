import { Component } from "react";
import CardItem from '../card-item/card-item'
import './card-list.styles.css'
class CardList extends Component {
  render() {

    const { monsters } = this.props
    return (
      <div className="card-list">
        {monsters.map(monster => {
          const { name, email, id } = monster
          return (
            <CardItem name={name} email={email} id={id} />
          )
        })}
      </div>
    )
  }
}

export default CardList