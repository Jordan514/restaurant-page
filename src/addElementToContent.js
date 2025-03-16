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

export { addElementToContent };
