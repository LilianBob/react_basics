function trefresh(){
    const element = React.createElement("h3", null, `The Time is: ${new Date().toLocaleTimeString()}`);
    ReactDOM.render(element, document.getElementById("root"));
}
setInterval(func => {
    1000,
    trefresh()   
});