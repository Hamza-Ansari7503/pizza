import React from "react";
import { FaSearch, FaShoppingCart,  } from "react-icons/fa";
import Toggle from './Toggle1'

const Header2 = () => {

    // const [UserArea, setUserArea] = useState(false);

  return (
    <div>
      <nav>
        <input type="checkbox" id="nav-toggle" />
        <div class="logo" color="black">
          PizzaForYou
        </div>
        <ul class="links">
          <li className="navbar">
            <a href="#home">Home</a>
          </li>
          <li className="navbar">
            <a href="#about">About</a>
          </li>
          <li className="navbar">
            <a href="#work">Menu</a>
          </li>
          <li className="navbar">
            <a href="#projects">Product</a>
          </li>

          <div className="icon">
            <li className="search">
              <FaSearch />
            </li>
            <li className="bucket">
              <FaShoppingCart />
            </li>
            <li className="user-icon">
              <a href="javascript:;">
              <Toggle/>
                
              </a>

             {/* {UserArea? (<div class="dropdown-menu" >
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </div>):'' }  */}
            </li>
          </div>
        </ul>
        <label for="nav-toggle" class="icon-burger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </label>
      </nav>
    </div>
  );
};

export default Header2;
