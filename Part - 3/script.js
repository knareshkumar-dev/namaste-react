const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "Naresh" }, // props (or) attributes
  "I'm Heading 1", // childrens
);

const root = ReactDOM.createRoot(document.getElementById("root")); // creating root using react dom

root.render(heading);  // passing react element to root
// render method is used to pass the react element to the root which is created using react dom and render method takes only one argument, it will render the react element to the root.
