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
  const title = (parentElement, txt) => {
    let newElement = document.createElement("div");
    newElement.textContent = txt;
    parentElement.appendChild(newElement);
  };

  const img = (parentElement, src, height, width) => {
    let newElement = document.createElement("img");
    newElement.setAttribute("src", src);
    newElement.setAttribute("style", `height: ${height}; width: ${width}`);
    parentElement.appendChild(newElement);
  };

  const description = (parentElement, txt) => {
    let newElement = document.createElement("div");
    newElement.textContent = txt;
    parentElement.appendChild(newElement);
  };

  return {
    title,
    img,
    description,
  };
})();

export { sModule, DOM };
