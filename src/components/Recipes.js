import React, {Component} from "react";
import Recipe from "./Recipe";
import '../css/Recipes.css'

class Recipes extends Component { 
    render(){
        const {onDelete} = this.props;
        return(
            <div className="container recipes">
                {this.props.recipes.map((recipe) => {
                    return <Recipe {...recipe} key={recipe.id} onDelete={onDelete}/>
                })}
                
            </div>
        )
    }
}

export default Recipes;