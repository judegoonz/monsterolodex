import { Component } from "react";


import Card from "../Card/Card.Component";
import './Card-list-style.css';

class CardList extends Component {
    render() {
        const { monsters } = this.props;

        return (
            <div className="card-list">
            { monsters.map((monster) => { 
                return (   
                    <Card monster={monster}/>
        )})}    
        </div>
        );
    }
}


export default CardList;