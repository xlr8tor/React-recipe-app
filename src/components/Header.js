import React, {Component} from 'react';
import '../css/Header.css'

class Header extends Component {
    render(){
    
        return(
            <header className="header">
                <nav className="container nav">
                    <div>
                        <a className="brand">
                            Recipe App
                        </a>
                    </div>
                       <ul className="nav__list">
                           <li className="nav__item"><a onClick={() => {
                               this.props.onVisibilityChange()
                           }} href="#" className="nav__link">New Recipe</a></li>
                           <li className="nav__item"><a href="#" className="nav__link secondary">Home</a></li>
                           <li className="nav__item"><a href="#" className="nav__link secondary">About</a></li>
                           <li className="nav__item"><a href="#" className="nav__link secondary">Contact Us</a></li>
                       </ul>
                </nav>
            </header>
        )
    }
}

export default Header;