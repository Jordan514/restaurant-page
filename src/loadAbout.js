import { DOM } from "./sModule";

function loadAbout() {
  let parentElement = document.querySelector("#content");
  DOM.title(parentElement, "Jordan's Burger Factory");
  DOM.img(
    parentElement,
    "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
    "500px",
    "500px"
  );
  DOM.description(
    parentElement,
    `Jordans Burger factory is full of the best burgers in america! From our
        classic american cheeseburger to our portobella new jersey burger to our
        california vegan burger we have the best burgers in united States of
        burgers!`
  );
}

export { loadAbout };
