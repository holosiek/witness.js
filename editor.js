// Create main object
Board = { 
    'sizeX' : 11, 
    'sizeY' : 11, 
    'block' : 0, 
    'grid' : [], 
    'blocks' : [], 
    'lines': { 'x': [],'y': [] } 
}

// Create board and set variables
function boardCreate(){
    // Reset all variables
    Board.grid   = [];
    Board.blocks = [];
    Board.lines  = { 'x': [], 'y': [] };
    
    // Set width/height of board and reset it
    document.getElementById("boar").style.width  = (50*Board.sizeX) + "px"
    document.getElementById("boar").style.height = (50*Board.sizeY) + "px"
    document.getElementById("boar").innerHTML = ""
    
    // Create grid on the board
    for(var y=0; y < Board.sizeY; y++){
        for(var x=0; x < Board.sizeX; x++){
            let elem = document.createElement("div");
            if( x != 0 && x != Board.sizeX-1 && y != 0 && y != Board.sizeY-1 && x%2 == 0 && y%2 == 0 ){
                elem.className = "box cube-box";
                elem.id = "c_" + x + "_" + y;
                elem.addEventListener('click', () => { cubeClicked(elem); });
            } else if( (y-x%2)%2 == 1 && x != 0 && x != Board.sizeX-1 && y != 0 && y != Board.sizeY-1 ){
                elem.className = "box line-box";
                elem.id = "l_" + x + "_" + y;
                elem.addEventListener('click', () => { lineClicked(elem); });
            } else {
                elem.className = "box";
                elem.id = "b_" + x + "_" + y;
                elem.addEventListener('click', () => { gridClicked(elem); });
            }
            document.getElementById("boar").appendChild(elem)
        }
    }
    
    // Reset and create new grid variable to store which blocks are placed
    for(let i = 0; i < Board.sizeY; i++){
        let gride = [];
            gride.length = Board.sizeX;
            gride.fill({ "type": "none" })
        Board.grid.push(gride)
    }
    
    // Fill lines array
    let calculateArrayXList = Math.floor((Board.sizeX-2)/2);
    for(let i = 0; i < calculateArrayXList; i++){
        let gride = [];
            gride.length = (Board.sizeX-1)/2;
            gride.fill(0);
        Board.lines.x.push(gride);
    }
    let calculateArrayYList = Math.floor((Board.sizeY-2)/2);
    for(let i = 0; i < calculateArrayYList; i++){
        let gride = [];
            gride.length = (Board.sizeY-1)/2;
            gride.fill(0);
        Board.lines.y.push(gride);
    }
}

/*
    Click events for grid
    0 - start
    1 - line
    2 - connector
    3/4/5/6 - end
    7 - noend
    8/9 - nothing
*/
function gridClicked(elem){
    var whatsId = elem.id.split('_')
    switch(Board.block){
        case 0:
            //elem.style.backgroundImage = "url('img/start.png')";
            elem.innerHTML = "Start"
            Board.grid[whatsId[1]][whatsId[2]] = { "type": "start" };
            break;
        case 2:
            //elem.style.backgroundImage = "url('img/connector.png')";
            elem.innerHTML = "Conn"
            Board.grid[whatsId[1]][whatsId[2]] = { "type": "connector" };
            break;
        case 3:
            //elem.style.backgroundImage = "url('img/endbottom.png')";
            elem.innerHTML = "End ▼"
            Board.grid[whatsId[1]][whatsId[2]] = { "type": "endbottom" };
            break;
        case 4:
            //elem.style.backgroundImage = "url('img/endtop.png')";
            elem.innerHTML = "End ▲"
            Board.grid[whatsId[1]][whatsId[2]] = { "type": "endtop" };
            break;
        case 5:
            //elem.style.backgroundImage = "url('img/endleft.png')";
            elem.innerHTML = "End ◀"
            Board.grid[whatsId[1]][whatsId[2]] = { "type": "endleft" };
            break;
        case 6:
            //elem.style.backgroundImage = "url('img/endright.png')";
            elem.innerHTML = "End ▶"
            Board.grid[whatsId[1]][whatsId[2]] = { "type": "endleft" };
            break;
        case 7:
            //elem.style.backgroundImage = "url('img/noend.png')";
            elem.innerHTML = "⛌"
            Board.grid[whatsId[1]][whatsId[2]] = { "type": "noend" };
            break;
        case 8:
            //elem.style.backgroundImage = "";
            elem.innerHTML = "";
            Board.grid[whatsId[1]][whatsId[2]] = { "type": "none" };
            break;
    }
}

function lineClicked(elem){
    var whatsId = elem.id.split('_')
    switch(Board.block){
        case 1:
            //elem.style.backgroundImage = "url('img/hor_line.png')";
            elem.innerHTML = "Path";
            if(whatsId[1]%2 == 0){
                Board.lines.x[(whatsId[1]/2)-1][(whatsId[2]-1)/2] = 1;
            } else {
                Board.lines.y[(whatsId[2]/2)-1][(whatsId[1]-1)/2] = 1;
            }
            Board.grid[whatsId[1]][whatsId[2]] = { "type": "line" };
            break;
        case 9:
            //elem.style.backgroundImage = "";
            elem.innerHTML = "";
            if(whatsId[1]%2 == 0){
                Board.lines.x[(whatsId[1]/2)-1][(whatsId[2]-1)/2] = 0;
            } else {
                Board.lines.y[(whatsId[2]/2)-1][(whatsId[1]-1)/2] = 0;
            }
            Board.grid[whatsId[1]][whatsId[2]] = { "type": "none" };
            break;
    }
}

function cubeClicked(elem){
    
}

/*
    #####################################################
    SAVE AND LOAD MAP
*/
// Load map functions
function gridRestore(id,block){
    elem = document.getElementById(id);
    switch(block.type){
        case "start":
            //elem.style.backgroundImage = "url('img/start.png')";
            elem.innerHTML = "Start"
            break;
        case "connector":
            //elem.style.backgroundImage = "url('img/connector.png')";
            elem.innerHTML = "Conn"
            break;
        case "endbottom":
            //elem.style.backgroundImage = "url('img/endbottom.png')";
            elem.innerHTML = "End ▼"
            break;
        case "endtop":
            //elem.style.backgroundImage = "url('img/endtop.png')";
            elem.innerHTML = "End ▲"
            break;
        case "endleft":
            //elem.style.backgroundImage = "url('img/endleft.png')";
            elem.innerHTML = "End ◀"
            break;
        case "endright":
            //elem.style.backgroundImage = "url('img/endright.png')";
            elem.innerHTML = "End ▶"
            break;
        case "noend":
            //elem.style.backgroundImage = "url('img/noend.png')";
            elem.innerHTML = "⛌"
            break;
        case "none":
            //elem.style.backgroundImage = "";
            elem.innerHTML = "";
            break;
    }
}

function lineRestore(id,block){
    elem = document.getElementById(id);
    switch(block.type){
        case "line":
            //elem.style.backgroundImage = "url('img/hor_line.png')";
            elem.innerHTML = "Path";
            break;
        case "none":
            //elem.style.backgroundImage = "";
            elem.innerHTML = "";
            break;
    }
}

function cubeRestore(id,block){
    elem = document.getElementById(id);
    switch(block.type){
        
    }
}

// Load puzzle
function loadPuzzle(){
    // Ask for code
    saved = JSON.parse(window.prompt("Paste puzzle code"));
    // Set board size
    Board.sizeX = saved.objects.length;
    Board.sizeY = saved.objects[0].length;
    // Create board from new size
    boardCreate();
    // Set variables
    Board.grid   = saved.objects;
    Board.blocks = saved.blocks;
    Board.lines  = saved.lines;
    // Set new values of inputs
    document.getElementById("inputGridX").value = Board.sizeX;
    document.getElementById("inputGridY").value = Board.sizeY;
    // Restore board data
    for(var y = 0; y < Board.sizeY; y++){
        for(var x = 0; x < Board.sizeX; x++){
            if( x != 0 && x != Board.sizeX-1 && y != 0 && y != Board.sizeY-1 && x%2 == 0 && y%2 == 0 ){
                cubeRestore("c_"+x+"_"+y, Board.grid[x][y]);
            } else if( (y-x%2)%2 == 1 && x != 0 && x != Board.sizeX-1 && y != 0 && y != Board.sizeY-1 ){
                lineRestore("l_"+x+"_"+y, Board.grid[x][y]);
            } else {
                gridRestore("b_"+x+"_"+y, Board.grid[x][y]);
            }
        }
    }
}

// SAVE PUZZLE
function savePuzzle(){
    let save = {}
        save["objects"] = Board.grid;
        save["lines"] = Board.lines;
        save["blocks"] = Board.blocks;
    window.prompt("Copy this to clipboard and paste to the game:", JSON.stringify(save))
}


/*
    #####################################################
    MISC. FUNCTIONS
*/
// Change color of the button
function changeColor(x){
    Board.block = x;
    for(var i=0; i<document.getElementsByClassName("menu-button").length; i++){
        document.getElementsByClassName("menu-button")[i].className = "menu-button"
    }
    document.getElementById("tool_"+x).className = "menu-button menu-button-on"
}

// Initalize whole editor
function Init(){
    boardCreate();
    changeColor(Board.block);
}
Init();