import { addElementToContent } from "./addElementToContent";

function loadMenu() {
  addElementToContent("div", "Jordan's Burger Factory", [
    { attribute: "class", data: "headline" },
  ]);
  addElementToContent("img", "", [
    {
      attribute: "src",
      data: "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
    },
    { attribute: "alt", data: "" },
    { attribute: "style", data: "height: 500px; width: 500px" },
  ]);
  addElementToContent(
    "div",
    `Jordans Burger factory is full of the best burgers in america! From our
        classic american cheeseburger to our portobella new jersey burger to our
        california vegan burger we have the best burgers in united States of
        burgers!`,
    [{ attribute: "class", data: "description" }]
  );
}

export { loadMenu };
