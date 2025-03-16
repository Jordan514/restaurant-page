function addElementToContent(
  element = "div",
  textContent = "",
  AttributeObjects = []
) {
  let content = document.querySelector("#content");

  let newElement = document.createElement(element);

  textContent ? (newElement.textContent = textContent) : undefined;

  AttributeObjects.forEach((obj) =>
    newElement.setAttribute(obj.attribute, obj.data)
  );

  content.appendChild(newElement);
}

function pageload() {
  addElementToContent("div", "Jordan's Burger Factory", [
    { attribute: "class", data: "headline" },
  ]);
  addElementToContent("img", "", [
    {
      attribute: "src",
      data: "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
    },
    { attribute: "alt", data: "" },
    { attribute: "style", data: "height: 500px; width: auto" },
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

export { pageload };
