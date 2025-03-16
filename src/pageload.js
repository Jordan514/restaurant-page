function addElementToContent(
  element = "div",
  textContent,
  arrayOfAttributeObjects
) {
  let content = document.querySelector("#content");
  let newElement = document.createElement(element);
  newElement.textContent = textContent;
  arrayOfAttributeObjects.forEach((obj) =>
    newElement.setAttribute(obj.attribute, obj.data)
  );

  content.appendChild(newElement);
  return;
}

function pageload() {
  addElementToContent("div", "Jordan's Burger Factory", [
    { attribute: "class", data: "headline" },
  ]);
}

export { pageload };
