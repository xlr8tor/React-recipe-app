import React,{Component} from "react";
import '../css/Recipe.css';

class Recipe extends Component {
    render(){
        const cardStyle = {
            width: '30%',
            minWidth: '18rem',
            boxShadow: "0 1px 3px #999"
        }

       const {title,instructions,imageURL,id,onDelete} = this.props;
        
        const ingredients = this.props.ingredients.map((item, index) =>(
            <li key={index}>{item}</li>
        ))

        return (
            <div  style={cardStyle} className="card">
            <div>
                <img src={imageURL} alt="" />
            </div>
            <div className="card-body">
                <h2 className="title">{title}</h2>
                <h2 className="title">Ingredients:</h2>
                <ul className="ingredients">
                    {ingredients}
                </ul>
                <h2 className="title">Instructions:</h2>
                <p>{instructions}</p>
                <button className="delete" onClick={() =>(onDelete(id))}>Delete</button>
            </div>    
        </div>
        )
    }
}

export default Recipe;