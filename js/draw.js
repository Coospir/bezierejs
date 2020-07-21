let c1 = document.querySelectorAll("circle")[0],
    c2 = document.querySelectorAll("circle")[1],
    c3 = document.querySelectorAll("circle")[2],
    path = document.querySelectorAll("path")[0],
    drag, d = {x1:10, y1:80, x2:95, y2:10, x3:180, y3:80}

let mouseMoveHandler = (e) => {
    drag.setAttribute("cx", e.clientX - (drag.clientX - drag.x))
    drag.setAttribute("cy", e.clientY - (drag.clientY - drag.y))
    switch( drag ){
        case c1:
            d.x1 = drag.getAttribute("cx");
            d.y1 = drag.getAttribute("cy"); break;
        case c2:
            d.x2 = drag.getAttribute("cx");
            d.y2 = drag.getAttribute("cy"); break;
        case c3:
            d.x3 = drag.getAttribute("cx");
            d.y3 = drag.getAttribute("cy"); break;
    }
    path.setAttribute("d",`M${d.x1} ${d.y1} Q ${d.x2} ${d.y2} ${d.x3} ${d.y3}`);

    document.getElementById("path").innerHTML = 'Coord: ' +  path.getAttribute("d");

}

let mouseUpHandler = (e) => {
    window.removeEventListener("mousemove", mouseMoveHandler);
    window.removeEventListener("mouseup", mouseUpHandler);
}

let mouseDownHandler = (e) => {
    if(e.srcElement instanceof SVGCircleElement) {
        drag = e.srcElement
        drag.x = e.srcElement.getAttribute("cx")
        drag.y = e.srcElement.getAttribute("cy")
        drag.clientX = e.clientX
        drag.clientY = e.clientY

        window.addEventListener("mousemove", mouseMoveHandler);
        window.addEventListener("mouseup", mouseUpHandler);
    }
}

window.addEventListener("mousedown", mouseDownHandler);
