

/* // CREATE A NEW ELEMENT - h1
let heading1 = document.createElement("h1");
heading1.innerHTML = "Hello World...!";

// APPEND THE NEW ELEMENT CREATED
let root = document.getElementById("root");
root.appendChild(heading1);
 */

const heading1 = React.createElement("h1", {}, "Hello World");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading1);