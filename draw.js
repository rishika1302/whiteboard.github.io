    // canavas board -> left  point kitna aage  hai 
    let boardLeft = canvasBoard.getBoundingClientRect().left;
    let boardTop = canvasBoard.getBoundingClientRect().top;
    let iX, iY, fX, fY;
    let drawingMode = false;

    //undo redo
    let undo = document.querySelector("#undo");
    let redo = document.querySelector("#redo");
    let undoRedoTracker = []; //records actions performed on canvas
    let track = 0; //redo=track++, undo=track--

    body.addEventListener("mousedown", function (e) {
        iX = e.clientX - boardLeft
        iY = e.clientY - boardTop
        if (cTool == "pencil" || cTool == "eraser") {
            drawingMode = true;
            tool.beginPath();
            tool.moveTo(iX, iY);
        }
    })

    undo.addEventListener("click", (e) => {

    })
    redo.addEventListener("click", (e) => {
        
    })
    body.addEventListener("mouseup", function (e) {
        if (cTool == "pencil" || cTool == "eraser") {
            drawingMode = false;
        } else if (cTool == "rect" || cTool == "line") {
            // rect, line
            fX = e.clientX - boardLeft;;
            fY = e.clientY - boardTop;
            let width = fX - iX;
            let height = fY - iY;
            if (cTool == "rect") {
                tool.strokeRect(iX, iY, width, height);
            } else if (cTool == "line") {
                tool.beginPath();
                tool.moveTo(iX, iY);
                tool.lineTo(fX, fY);
                tool.stroke();
                console.log("line tool is pending")
            }
        }

        //undo redo
        let url = canvasBoard.toDataURL();
        undoRedoTracker.push(url);
        track = undoRedoTracker.lenth-1;
    })
    body.addEventListener("mousemove", function (e) {
        if (drawingMode == false)
            return;
        fX = e.clientX - boardLeft;
        fY = e.clientY - boardTop;
        tool.lineTo(fX, fY);
        tool.stroke();
        iX = fX;
        iY = fY;
    })
