import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

//lifted state of Nav component to parent component, App.js
function Nav(props) {
  useEffect(() => {
    //1st argument = cb fxn
    document.title = capitalizeFirstLetter(currentCategory.name);
    //2nd argument = array with single element, currentCategory. It will be rerendered if currentCategory changes
  }, [currentCategory]);

  const { categories = [], setCurrentCategory, currentCategory } = props;

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {" "}
            📸{" "}
          </span>{" "}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about"> About me </a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                //below will be evaluated if it's true, navActive will be returned
                currentCategory.name === category.name && "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
