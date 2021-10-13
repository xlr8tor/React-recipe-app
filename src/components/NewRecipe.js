import React,{Component} from "react";
import '../css/NewRecipe.css'

class NewRecipe extends Component {
    constructor(props){
        super(props);
        this.state = {
                title: "",
                instructions: "",
                ingredients: [""],
                imageURL: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleNewIng = this.handleNewIng.bind(this);
    }

    handleChange(e){
        const {name,value} = e.target;
        this.setState({[name]: value});
    }

    handleNewIng(e){
        const index = Number(e.target.name.split('-')[1]);
        const ingredients = this.state.ingredients.map((ing, i) => {
            return i === index? e.target.value: ing;
        })
        this.setState({ingredients})
    }

    handleAdd(){
        this.setState({ingredients: [...this.state.ingredients,""]})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onFormSubmit(this.state);
        this.setState({
                title: "",
                instructions: "",
                ingredients: [""],
                imageURL: ""
        })
    }

    render(){
        const {title,instructions,imageURL} = this.state;
        const ingredients = this.state.ingredients.map((ing, i) => {
                return <div key={`ingredients-${i}`}>
                            <span>{i + 1}.</span>
                            <input className="number" name={`ingredients-${i}`} type="text" onChange={this.handleNewIng} value={ing} />
                        </div>
        })
        return (
            <form action="" className="form" onSubmit={this.handleSubmit}>
            <div className="close" onClick={() => {
                this.props.onHideForm();
            }}>
                X
            </div>
            <label>Title
                <input name="title" type="text" value={title} onChange={this.handleChange}/>
            </label>
            <label>Instructions
                <textarea name="instructions" id="" cols="30" rows="5" value={instructions} onChange={this.handleChange}></textarea>
            </label>    
           <label>Ingredients <br />
                {ingredients}
           </label>
            <button className="btn add" onClick={this.handleAdd} type="button">+</button>
            <label>Image URL
                <input name="imageURL" type="text" value={imageURL} onChange={this.handleChange}/>
            </label>
            <button className="btn save">Save</button>
            </form>
        )
    }
}

export default NewRecipe;