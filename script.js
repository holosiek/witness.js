CURSOR_X = 0
CURSOR_Y = 0

PADDING  = 30
LENGTH   = 70

COLORS = {
    'LINE' : '#555',
    'CIRCLE' : '#555',
    'START' : '#555',
    'NOEND' : '#555',
    'END' : '#555'
}
//-------------------------------------
can = document.getElementById("puzzle");
    can.width  = window.innerWidth;
    can.height = window.innerHeight;
canPath = document.getElementById("path");
    canPath.width  = window.innerWidth;
    canPath.height = window.innerHeight;
ctx = can.getContext("2d");
//-------------------------------------
Game = {
    // Game related variables
    'vars' : {
        'cursor' : {
            'x' : 0,
            'y' : 0
        }
    },
    
    //###############################################
    // Grid which is user drawn lines
    'grid' : [],
    
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
    //###############################################
    'generateBoard' : () => {
        Game.grid = [];
        for(var i=0; i < Puzzle.objects.length; i++){
            gridToInsert = [];
            gridToInsert.length = Puzzle.objects[i].length;
            gridToInsert.fill(0);
            Game.grid.push(gridToInsert);
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
                switch(Puzzle.objects[i][j].type){
                    case "connector":
                        Game.drawCircle(Puzzle.objects[i][j].x, Puzzle.objects[i][j].y);
                        break;
                    case "start":
                        Game.drawStart(Puzzle.objects[i][j].x, Puzzle.objects[i][j].y);
                        break;
                    case "noend":
                        Game.drawNoEnd(Puzzle.objects[i][j].x, Puzzle.objects[i][j].y);
                        break;
                    case "endbottom":
                        Game.drawEndBottom(Puzzle.objects[i][j].x, Puzzle.objects[i][j].y);
                        break;
                    case "endtop":
                        Game.drawEndTop(Puzzle.objects[i][j].x, Puzzle.objects[i][j].y);
                        break;
                    case "endright":
                        Game.drawEndRight(Puzzle.objects[i][j].x, Puzzle.objects[i][j].y);
                        break;
                    case "endleft":
                        Game.drawEndLeft(Puzzle.objects[i][j].x, Puzzle.objects[i][j].y);
                        break;
                }
            }
        }
    },
    //###############################################
    'cursorMove' : (e) => {
        Game.vars.cursor.x = e.clientX - e.target.getBoundingClientRect().left;
        Game.vars.cursor.y = e.clientY - e.target.getBoundingClientRect().top;
    }
}
//-------------------------------------

function cursorStart(){
    
    console.log(Game.vars.cursor)
}
Game.updateCanvas();
Game.generateBoard();
