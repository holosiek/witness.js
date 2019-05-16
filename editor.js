board = { 'sizeX' : 11, 'sizeY' : 11, 'block' : 0, 'grid' : [] }
function boardCreate(){
    board.grid = [];
    document.getElementById("boar").style.width = (30*board.sizeY) + "px"
    document.getElementById("boar").style.height = (30*board.sizeX) + "px"
    document.getElementById("boar").innerHTML = ""
    for(var i=0; i<board.sizeX; i++){
        for(var j=0; j<board.sizeY; j++){
            let xd = document.createElement("div");
            if( (i%2) == 0 && i != 0 && i != board.sizeX-1 && (j%2) == 0 && j != 0 && j != board.sizeY-1 ){
                xd.className = "cube-box";
                xd.innerHTML = "b_" + i + "_" + j;
                xd.id = "b_" + i + "_" + j;
                xd.addEventListener('click',()=>{
                    clicked(xd)
                });
            } else {
                xd.className = "box";
                xd.innerHTML = "b_" + i + "_" + j;
                xd.id = "b_" + i + "_" + j;
                xd.addEventListener('click',()=>{
                    clicked(xd)
                });
            }
            
            document.getElementById("boar").appendChild(xd)
        }
    }
    for(var i=0; i<board.sizeY; i++){
        var gride = [];
            gride.length = board.sizeX;
            gride.fill({ "type": "none" })
        board.grid.push(gride)
    }
}
boardCreate()
function changeColor(x){
    board.block = x;
    for(var i=0; i<document.getElementsByClassName("menu-button").length; i++){
        if(i == x){
            document.getElementsByClassName("menu-button")[i].className = "menu-button menu-button-on"
        } else {
            document.getElementsByClassName("menu-button")[i].className = "menu-button"
        }
    }
}
function clicked(x){
    var whatsId = x.id.split('_')
    switch(board.block){
        case 0:
            x.style.backgroundImage = "url('img/start.png')";
            board.grid[whatsId[2]][whatsId[1]] = { "type": "start" };
            break;
        case 1:
            x.style.backgroundImage = "url('img/hor_line.png')";
            board.grid[whatsId[2]][whatsId[1]] = { "type": "line" };
            break;
        case 2:
            x.style.backgroundImage = "url('img/ver_line.png')";
            board.grid[whatsId[2]][whatsId[1]] = { "type": "line" };
            break;
        case 3:
            x.style.backgroundImage = "url('img/connector.png')";
            board.grid[whatsId[2]][whatsId[1]] = { "type": "connector" };
            break;
        case 4:
            x.style.backgroundImage = "url('img/endbottom.png')";
            board.grid[whatsId[2]][whatsId[1]] = { "type": "endbottom" };
            break;
        case 5:
            x.style.backgroundImage = "url('img/endtop.png')";
            board.grid[whatsId[2]][whatsId[1]] = { "type": "endtop" };
            break;
        case 6:
            x.style.backgroundImage = "url('img/endleft.png')";
            board.grid[whatsId[2]][whatsId[1]] = { "type": "endleft" };
            break;
        case 7:
            x.style.backgroundImage = "url('img/endright.png')";
            board.grid[whatsId[2]][whatsId[1]] = { "type": "endleft" };
            break;
        case 8:
            x.style.backgroundImage = "url('img/noend.png')";
            board.grid[whatsId[2]][whatsId[1]] = { "type": "noend" };
            break;
        case 9:
            x.style.backgroundImage = "";
            board.grid[whatsId[2]][whatsId[1]] = { "type": "none" };
            break;
    }
}
function restore(x,y){
    switch(y.type){
        case "start":
            document.getElementById(x).style.backgroundImage = "url('img/start.png')";
            break;
        case "line":
            document.getElementById(x).style.backgroundImage = "url('img/hor_line.png')";
            break;
        case "connector":
            document.getElementById(x).style.backgroundImage = "url('img/connector.png')";
            break;
        case "endbottom":
            document.getElementById(x).style.backgroundImage = "url('img/endbottom.png')";
            break;
        case "endtop":
            document.getElementById(x).style.backgroundImage = "url('img/endtop.png')";
            break;
        case "endleft":
            document.getElementById(x).style.backgroundImage = "url('img/endleft.png')";
            break;
        case "endleft":
            document.getElementById(x).style.backgroundImage = "url('img/endright.png')";
            break;
        case "noend":
            document.getElementById(x).style.backgroundImage = "url('img/noend.png')";
            break;
        case "none":
            document.getElementById(x).style.backgroundImage = "";
            break;
    }
}
changeColor(board.block);
function savePuzzle(){
    window.prompt("Copy it to clipboard and save it to file",JSON.stringify(board.grid))
}
function loadPuzzle(){
    saved = JSON.parse(window.prompt("Paste puzzle code"));
    board.sizeX = saved.length;
    board.sizeY = saved[0].length;
    document.getElementById("inputGridX").value = board.sizeX;
    document.getElementById("inputGridY").value = board.sizeY;
    boardCreate();
    board.grid = saved;
    for(var i=0; i<board.sizeX; i++){
        for(var j=0; j<board.sizeY; j++){
            restore("b_"+i+"_"+j,board.grid[j][i])
        }
    }
}