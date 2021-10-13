import React, {Component} from 'react'
import Header from './Header';
import Recipes from './Recipes';
import NewRecipe from './NewRecipe';
import '../css/App.css';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      recipes: [
          {id: 0,
          title: "Pasta",
          ingredients: ["floor","water"],
          instructions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi qui sit quisquam nesciunt. Eveniet similique vero quod id optio fuga.",
          imageURL: "images/pasta.jpeg"},
          {id: 1,
          title: "Milkshake",
          ingredients: ["2 spoons of icecream","8 ounces of milk"],
          instructions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi qui sit quisquam nesciunt. Eveniet similique vero quod id optio fuga.",
          imageURL: "images/milkshake.jpeg"},
          {id: 2,
          title: "Avocado Toast",
          ingredients: ["Toast Bread","Avocado","Butter"],
          instructions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi qui sit quisquam nesciunt. Eveniet similique vero quod id optio fuga.",
          imageURL: "images/toasty.jpeg"}
      ],
      nextRecipeID: 3,
      isVisible: false
  }

    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.delete = this.delete.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  showForm(){
    this.setState({isVisible: !this.state.isVisible})
  }

  hideForm(){
    this.setState({isVisible: false})
  }

  delete(id){
    const recipes = this.state.recipes.filter(recipe =>(
      id !== recipe.id
    ))
    this.setState({recipes})
  }

  submitForm(recipe){
    this.setState((prevValue) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeID}
      return { 
              recipes: [...this.state.recipes,newRecipe],
              nextRecipeID: prevValue.nextRecipeID + 1
            };
    })
  }

 render(){
  return (
    <div className="App">
      <Header onVisibilityChange={this.showForm}/>
      {this.state.isVisible && <NewRecipe onHideForm={this.hideForm} onFormSubmit={this.submitForm}/>}
      <Recipes recipes={this.state.recipes} onDelete={this.delete}/>
    </div>
  );
 }
}

export default App;
