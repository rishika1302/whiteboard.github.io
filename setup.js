let cTool = "pencil";
let canvasBoard = document.querySelector("canvas");
let tool = canvasBoard.getContext("2d");
// console.log(tool);
let body = document.querySelector("body");
let download = document.querySelector("#download");
// canvas dimesnions set karne ke baad jo changes karoge wahi reflect
canvasBoard.height = window.innerHeight;
canvasBoard.width = window.innerWidth;
tool.fillStyle = "white";
tool.fillRect(0, 0, canvasBoard.width, canvasBoard.height);
tool.strokeStyle = "black";

//download logic
download.addEventListener("click", (e) => {
    //toDataURL method converts all graphics on the window of browser into a url
    let url = canvasBoard.toDataURL(); 
    let a = document.createElement("a");
    a.href = url;
    a.download = "board.jpg";
    a.click();
})