//Standard module for creating a general type of element
function sModule(element = "div", textContent = "", AttributeObjects = []) {
  let content = document.querySelector("#content");

  let newElement = document.createElement(element);

  textContent ? (newElement.textContent = textContent) : undefined;

  AttributeObjects.forEach((obj) =>
    newElement.setAttribute(obj.attribute, obj.data)
  );
  content.appendChild(newElement);
}

const DOM = (() => {
  const title = () => {
    //function to create a title element
  };

  return {
    title,
  };
})();

export { sModule, DOM };
