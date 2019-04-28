CURSOR_X = 0
CURSOR_Y = 0

PADDING  = 30
LENGTH   = 70

COLORS = {
    'LINE'   : '#555',
    'CIRCLE' : '#555',
    'START'  : '#555',
    'NOEND'  : '#555',
    'END'    : '#555',
    'DEBUG'  : 'wheat',
    'PATH'   : '#fff'
}
//-------------------------------------
can = document.getElementById("puzzle");
    can.width  = window.innerWidth;
    can.height = window.innerHeight;
ctx = can.getContext("2d");

canPath = document.getElementById("path");
    canPath.width  = window.innerWidth;
    canPath.height = window.innerHeight;
ctxPath = canPath.getContext("2d");
//-------------------------------------
Game = {
    // Game related variables
    'vars' : {
        'isDrawing' : false,
        'cursor' : {
            'x' : 0,
            'y' : 0
        },
        'gridPos' : {
            'x' : -1,
            'y' : -1
        },
        'grid' : []
    },
    
    //###############################################
    'updateCanvas' : () => {
        can.width      = PADDING*2+(Puzzle.lines.x.length+1)*LENGTH;
        can.height     = PADDING*2+(Puzzle.lines.y.length+1)*LENGTH;
        canPath.width  = PADDING*2+(Puzzle.lines.x.length+1)*LENGTH;
        canPath.height = PADDING*2+(Puzzle.lines.y.length+1)*LENGTH;
    },
    //###############################################
    'drawCircle' : (x,y) => {
        ctx.beginPath();
        ctx.fillStyle = COLORS.CIRCLE;
        ctx.arc(x,y,10,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();
    },
    'drawStart' : (x,y) => {
        ctx.beginPath();
        ctx.fillStyle = COLORS.START;
        ctx.arc(x,y,20,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();
    },
    'drawLine' : (x1,y1,x2,y2) => {
        ctx.beginPath();
        ctx.strokeStyle = COLORS.LINE;
        ctx.lineWidth = 20;
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.stroke();
        ctx.closePath();
    },
    'drawNoEnd' : (x,y) => {
        ctx.beginPath();
        ctx.fillStyle = COLORS.NOEND;
        ctx.rect(x-10,y-10,20,20);
        ctx.fill();
        ctx.closePath();
    },
    'drawEndBottom' : (x,y) => {
        ctx.beginPath();
        ctx.strokeStyle = COLORS.END;
        ctx.lineWidth = 20;
        ctx.moveTo(x,y+15);
        ctx.lineTo(x,y+35);
        ctx.stroke();
        ctx.fillStyle = COLORS.END;
        ctx.arc(x,y+15,10,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();
    },
    'drawEndTop' : (x,y) => {
        ctx.beginPath();
        ctx.strokeStyle = COLORS.END;
        ctx.lineWidth = 20;
        ctx.moveTo(x,y-15);
        ctx.lineTo(x,y-35);
        ctx.stroke();
        ctx.fillStyle = COLORS.END;
        ctx.arc(x,y-15,10,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();
    },
    'drawEndRight' : (x,y) => {
        ctx.beginPath();
        ctx.strokeStyle = COLORS.END;
        ctx.lineWidth = 20;
        ctx.moveTo(x-15,y);
        ctx.lineTo(x-35,y);
        ctx.stroke();
        ctx.fillStyle = COLORS.END;
        ctx.arc(x-15,y,10,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();
    },
    'drawEndLeft' : (x,y) => {
        ctx.beginPath();
        ctx.strokeStyle = COLORS.END;
        ctx.lineWidth = 20;
        ctx.moveTo(x+15,y);
        ctx.lineTo(x+35,y);
        ctx.stroke();
        ctx.fillStyle = COLORS.END;
        ctx.arc(x+15,y,10,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();
    },
    'drawDebug' : (x,y) => {
        ctx.beginPath();
        ctx.fillStyle = COLORS.DEBUG;
        ctx.arc(x,y,5,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();
    },
    //###############################################
    'pathStart' : (x,y) => {
        ctxPath.beginPath();
        ctxPath.fillStyle = COLORS.PATH;
        ctxPath.arc(x,y,22,0,Math.PI*2);
        ctxPath.fill();
        ctxPath.closePath();
    },
    //###############################################
    'generateBoard' : () => {
        Game.vars.grid = [];
        for(var i=0; i < Puzzle.objects.length; i++){
            gridToInsert = [];
            gridToInsert.length = Puzzle.objects[i].length;
            gridToInsert.fill(0);
            Game.vars.grid.push(gridToInsert);
        }
        for(var i=0; i < Puzzle.lines.x.length; i++){
            for(var j=0; j < Puzzle.lines.x[i].length; j++){
                if(Puzzle.lines.x[i][j]){
                    Game.drawLine(i*LENGTH+PADDING+LENGTH/2, j*LENGTH+PADDING+LENGTH/2, (i+1)*LENGTH+PADDING+LENGTH/2, j*LENGTH+PADDING+LENGTH/2)
                }
            }
        }
        for(var i=0; i < Puzzle.lines.y.length; i++){
            for(var j=0; j < Puzzle.lines.y[i].length; j++){
                if(Puzzle.lines.y[i][j]){
                    Game.drawLine(j*LENGTH+PADDING+LENGTH/2, i*LENGTH+PADDING+LENGTH/2, j*LENGTH+PADDING+LENGTH/2, (i+1)*LENGTH+PADDING+LENGTH/2)
                }
            }
        }
        for(var i=0; i < Puzzle.objects.length; i++){
            for(var j=0; j < Puzzle.objects[i].length; j++){
                Puzzle.objects[i][j].x = i*(LENGTH/2)+PADDING
                Puzzle.objects[i][j].y = j*(LENGTH/2)+PADDING
                switch(Puzzle.objects[i][j].type){
                    case "connector":
                        Game.drawCircle(i*(LENGTH/2)+PADDING, j*(LENGTH/2)+PADDING);
                        break;
                    case "start":
                        Game.drawStart(i*(LENGTH/2)+PADDING, j*(LENGTH/2)+PADDING);
                        break;
                    case "noend":
                        Game.drawNoEnd(i*(LENGTH/2)+PADDING, j*(LENGTH/2)+PADDING);
                        break;
                    case "endbottom":
                        Game.drawEndBottom(i*(LENGTH/2)+PADDING, j*(LENGTH/2)+PADDING);
                        break;
                    case "endtop":
                        Game.drawEndTop(i*(LENGTH/2)+PADDING, j*(LENGTH/2)+PADDING);
                        break;
                    case "endright":
                        Game.drawEndRight(i*(LENGTH/2)+PADDING, j*(LENGTH/2)+PADDING);
                        break;
                    case "endleft":
                        Game.drawEndLeft(i*(LENGTH/2)+PADDING, j*(LENGTH/2)+PADDING);
                        break;
                }
            }
        }
    },
    //###############################################
    'cursorDrawPath' : (type,dir) => {
        moveIt = { 'x' : 0 , 'y' : 0 }
        switch(dir){
            case 0:
                moveIt.x = -1
                break;
            case 1:
                moveIt.x = 1
                break;
            case 2:
                moveIt.y = -1
                break;
            case 3:
                moveIt.y = 1
                break;
        }
        switch(type){
            case "line":
                ctxPath.beginPath();
                ctxPath.strokeStyle = COLORS.PATH;
                ctxPath.lineWidth = 22;
                ctxPath.lineCap = "round";
                ctxPath.moveTo(Math.min(Puzzle.objects[Game.vars.gridPos.x][Game.vars.gridPos.y].x, Puzzle.objects[Game.vars.gridPos.x+moveIt.x][Game.vars.gridPos.y+moveIt.y].x), Math.min(Puzzle.objects[Game.vars.gridPos.x][Game.vars.gridPos.y].y, Puzzle.objects[Game.vars.gridPos.x+moveIt.x][Game.vars.gridPos.y+moveIt.y].y));
                ctxPath.lineTo(Math.max(Puzzle.objects[Game.vars.gridPos.x][Game.vars.gridPos.y].x, Puzzle.objects[Game.vars.gridPos.x+moveIt.x][Game.vars.gridPos.y+moveIt.y].x), Math.max(Puzzle.objects[Game.vars.gridPos.x][Game.vars.gridPos.y].y, Puzzle.objects[Game.vars.gridPos.x+moveIt.x][Game.vars.gridPos.y+moveIt.y].y));
                ctxPath.stroke();
                ctxPath.closePath();
                break;
            case "connector":
                ctxPath.beginPath();
                ctxPath.strokeStyle = COLORS.PATH;
                ctxPath.lineCap = "round";
                ctxPath.lineWidth = 22;
                ctxPath.moveTo(Math.min(Puzzle.objects[Game.vars.gridPos.x][Game.vars.gridPos.y].x, Puzzle.objects[Game.vars.gridPos.x+moveIt.x][Game.vars.gridPos.y+moveIt.y].x), Math.min(Puzzle.objects[Game.vars.gridPos.x][Game.vars.gridPos.y].y, Puzzle.objects[Game.vars.gridPos.x+moveIt.x][Game.vars.gridPos.y+moveIt.y].y));
                ctxPath.lineTo(Math.max(Puzzle.objects[Game.vars.gridPos.x][Game.vars.gridPos.y].x, Puzzle.objects[Game.vars.gridPos.x+moveIt.x][Game.vars.gridPos.y+moveIt.y].x), Math.max(Puzzle.objects[Game.vars.gridPos.x][Game.vars.gridPos.y].y, Puzzle.objects[Game.vars.gridPos.x+moveIt.x][Game.vars.gridPos.y+moveIt.y].y));
                ctxPath.stroke();
                ctxPath.closePath();
                break;
            case "end":
                ctxPath.beginPath();
                ctxPath.strokeStyle = COLORS.PATH;
                ctxPath.lineWidth = 22;
                ctxPath.lineCap = "round";
                ctxPath.moveTo(Puzzle.objects[Game.vars.gridPos.x+moveIt.x][Game.vars.gridPos.y+moveIt.y].x-15*moveIt.x,Puzzle.objects[Game.vars.gridPos.x+moveIt.x][Game.vars.gridPos.y+moveIt.y].y-15*moveIt.y);
                ctxPath.lineTo(Puzzle.objects[Game.vars.gridPos.x+moveIt.x][Game.vars.gridPos.y+moveIt.y].x-35*moveIt.x,Puzzle.objects[Game.vars.gridPos.x+moveIt.x][Game.vars.gridPos.y+moveIt.y].y-35*moveIt.y);
                ctxPath.stroke();
                ctxPath.closePath();
                canPath.className = "anime"
                break;
            case "deadend":
                ctxPath.beginPath();
                ctxPath.strokeStyle = COLORS.PATH;
                ctxPath.lineCap = "square";
                ctxPath.lineWidth = 22;
                ctxPath.moveTo(Math.min(Puzzle.objects[Game.vars.gridPos.x][Game.vars.gridPos.y].x, Puzzle.objects[Game.vars.gridPos.x+moveIt.x][Game.vars.gridPos.y+moveIt.y].x), Math.min(Puzzle.objects[Game.vars.gridPos.x][Game.vars.gridPos.y].y, Puzzle.objects[Game.vars.gridPos.x+moveIt.x][Game.vars.gridPos.y+moveIt.y].y));
                ctxPath.lineTo(Math.max(Puzzle.objects[Game.vars.gridPos.x][Game.vars.gridPos.y].x, Puzzle.objects[Game.vars.gridPos.x+moveIt.x][Game.vars.gridPos.y+moveIt.y].x), Math.max(Puzzle.objects[Game.vars.gridPos.x][Game.vars.gridPos.y].y, Puzzle.objects[Game.vars.gridPos.x+moveIt.x][Game.vars.gridPos.y+moveIt.y].y));
                ctxPath.stroke();
                ctxPath.closePath();
                break;
        }
    },
    'cursorCheckObjectType' : (dir)=>{
        moveIt = { 'x' : 0 , 'y' : 0 }
        switch(dir){
            case 0:
                moveIt.x = -1
                break;
            case 1:
                moveIt.x = 1
                break;
            case 2:
                moveIt.y = -1
                break;
            case 3:
                moveIt.y = 1
                break;
        }
        if(Game.vars.grid[Game.vars.gridPos.x+moveIt.x][Game.vars.gridPos.y+moveIt.y] == 0 && cursorPosTemp.x >= Puzzle.objects[Game.vars.gridPos.x+moveIt.x][Game.vars.gridPos.y+moveIt.y].x-15 && cursorPosTemp.y >= Puzzle.objects[Game.vars.gridPos.x+moveIt.x][Game.vars.gridPos.y+moveIt.y].y-15 && cursorPosTemp.x <= Puzzle.objects[Game.vars.gridPos.x+moveIt.x][Game.vars.gridPos.y+moveIt.y].x+15 && cursorPosTemp.y <= Puzzle.objects[Game.vars.gridPos.x+moveIt.x][Game.vars.gridPos.y+moveIt.y].y+15){
            switch(Puzzle.objects[Game.vars.gridPos.x+moveIt.x][Game.vars.gridPos.y+moveIt.y].type){
                case "line":
                    Game.cursorDrawPath("line",dir)
                    Game.vars.gridPos.x += moveIt.x
                    Game.vars.gridPos.y += moveIt.y
                    Game.vars.grid[Game.vars.gridPos.x][Game.vars.gridPos.y] = 1;
                    break;
                case "connector":
                    Game.cursorDrawPath("connector",dir)
                    Game.vars.gridPos.x += moveIt.x
                    Game.vars.gridPos.y += moveIt.y
                    Game.vars.grid[Game.vars.gridPos.x][Game.vars.gridPos.y] = 1;
                    break;
                case "endtop":
                case "endright":
                case "endbottom":
                case "endleft":
                    Game.cursorDrawPath("end",dir)
                    Game.vars.gridPos.x += moveIt.x
                    Game.vars.gridPos.y += moveIt.y
                    Game.vars.grid[Game.vars.gridPos.x][Game.vars.gridPos.y] = 1;
                    break;
                case "noend":
                    Game.cursorDrawPath("deadend",dir)
                    Game.vars.gridPos.x += moveIt.x
                    Game.vars.gridPos.y += moveIt.y
                    Game.vars.grid[Game.vars.gridPos.x][Game.vars.gridPos.y] = 1;
                    break;
            }
        }
    },
    'cursorMove' : (e) => {
        cursorPosTemp = {}
        cursorPosTemp.x = Math.floor(e.clientX - e.target.getBoundingClientRect().left);
        cursorPosTemp.y = Math.floor(e.clientY - e.target.getBoundingClientRect().top);
        if(Game.vars.gridPos.x != -1){
            if(Game.vars.gridPos.x-1 >= 0){
                Game.cursorCheckObjectType(0);
            }
            if(Game.vars.gridPos.x+1 < Puzzle.objects[Game.vars.gridPos.y].length){
                Game.cursorCheckObjectType(1);
            }
            if(Game.vars.gridPos.y - 1 >= 0){
                Game.cursorCheckObjectType(2);
            }
            if(Game.vars.gridPos.y + 1 < Puzzle.objects.length){
                Game.cursorCheckObjectType(3);
            }
        }
        Game.vars.cursor.x = cursorPosTemp.x
        Game.vars.cursor.y = cursorPosTemp.y
    }
}
//-------------------------------------

function cursorStart(){
    if(Game.vars.isDrawing){
        Game.vars.isDrawing = false;
        ctxPath.clearRect(0,0,canPath.width,canPath.height);
        Game.vars.gridPos.x = -1;
        Game.vars.gridPos.y = -1;
        Game.vars.grid = [];
        for(var i=0; i < Puzzle.objects.length; i++){
            gridToInsert = [];
            gridToInsert.length = Puzzle.objects[i].length;
            gridToInsert.fill(0);
            Game.vars.grid.push(gridToInsert);
        }
        canPath.className = ""
    } else {
        for(var i=0; i < Puzzle.objects.length; i++){
            for(var j=0; j < Puzzle.objects[i].length; j++){
                if(Puzzle.objects[i][j].type == "start" && Game.vars.cursor.x >= Puzzle.objects[i][j].x-20 && Game.vars.cursor.y >= Puzzle.objects[i][j].y-20 && Game.vars.cursor.x <= Puzzle.objects[i][j].x+20 && Game.vars.cursor.y <= Puzzle.objects[i][j].y+20){
                    Game.vars.isDrawing = true;
                    Game.pathStart(Puzzle.objects[i][j].x,Puzzle.objects[i][j].y);
                    Game.vars.grid[i][j] = 1;
                    Game.vars.gridPos.x = i;
                    Game.vars.gridPos.y = j;
                    break;
                }
            }
            if(Game.vars.isDrawing){
                break;
            }
        }
    }
}
Game.updateCanvas();
Game.generateBoard();
