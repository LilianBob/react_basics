// const toDo = React.createElement("div", {style: {display: "block", margin:"20",}}, 
//     React.createElement("h1", {style: {color: "blue", textAlign: "center"}, className: "header"}, "To-do List"),
//     React.createElement("h3", {style: {fontStyle: "italic", textAlign: "center"}}, "Things I will do this weekend!"),
//     React.createElement("ul", {style: {display: "table", margin: "auto"}}, 
//         React.createElement("li", {style: {listStyleType: "square"}}, "Learn React"),
//         React.createElement("li", {style: {listStyleType: "square"}}, "Go fishing"),
//         React.createElement("li", {style: {listStyleType: "square"}}, "Go to the gym"),
//         ),
// );
// ReactDOM.render(toDo, document.getElementById("root"));

const listTitle = React.createElement("h1", {style: {color: "blue", textAlign: "center"}, className: "header"}, "To-do List");
const listHeader = React.createElement("h3", {style: {fontStyle: "italic", textAlign: "center"}}, "Things I will do this weekend!");
const items = ["Learn React", "Go fishing", "Go to the gym"];
const list = React.createElement("ul", {style: {display: "table", margin: "auto"}}, items.map((item, index) => 
    React.createElement("li", {key: index}, `${item}`)
));
const toDo = React.createElement("div", {style: {display: "block", margin:"20",}}, listTitle, listHeader, list);

ReactDOM.render(toDo, document.getElementById("root"));