function reactRender(element,container){
const domElem = document.createElement(element.type)
domElem.innerHTML=element.children;
for (const key in element.props) {
    if(key==='children') continue;
    domElem.setAttribute(key,element.props[key]);
    // console.log(key);
    // console.log(element.props[key])
}
container.appendChild(domElem)
}
const element = {
    type : 'a',
    props:{
        href: 'https://google.com'
    },
    children: 'Click me to open google'
}
const container = document.getElementById("root");
reactRender(element,container);

