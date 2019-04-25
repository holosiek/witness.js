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
    // Lines: x - horozintal, y - vertical
    'lines' : { 
        'x': [[1,1,1,0,1],[1,0,1,1,0],[1,1,1,1,1],[1,0,0,1,1]], 
        'y': [[1,0,0,0,0],[0,1,1,1,1],[1,0,1,0,1],[0,1,1,1,0]] 
    },
    
    // Blocks: space between lines where there can be special attributes
    // none      - nothing
    'blocks' : [
        [{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'}],
        [{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'}],
        [{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'}],
        [{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'}]
    ],
    
    // Game objects: things that are drawn on lines or between them [FROM TOP TO BOTTOM -> THEN NEXT ELEMENT IS NEXT COLUMN]
    // none      - nothing
    // connector - circle where we can draw through
    // start     - start of the puzzle
    // noend     - there is no path after this
    'objects' : [
        [{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'}],
        [{'type':'none'},{'type':'connector'},{'type':'none'},{'type':'connector'},{'type':'none'},{'type':'connector'},{'type':'none'},{'type':'noend'},{'type':'none'},{'type':'start'},{'type':'none'}], 
        [{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'}], 
        [{'type':'none'},{'type':'connector'},{'type':'none'},{'type':'connector'},{'type':'none'},{'type':'connector'},{'type':'none'},{'type':'connector'},{'type':'none'},{'type':'connector'},{'type':'none'}],
        [{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'}], 
        [{'type':'none'},{'type':'connector'},{'type':'none'},{'type':'connector'},{'type':'none'},{'type':'connector'},{'type':'none'},{'type':'connector'},{'type':'none'},{'type':'connector'},{'type':'none'}],
        [{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'}], 
        [{'type':'none'},{'type':'connector'},{'type':'none'},{'type':'connector'},{'type':'none'},{'type':'connector'},{'type':'none'},{'type':'connector'},{'type':'none'},{'type':'connector'},{'type':'none'}], 
        [{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'}], 
        [{'type':'endbottom'},{'type':'connector'},{'type':'none'},{'type':'noend'},{'type':'none'},{'type':'connector'},{'type':'none'},{'type':'connector'},{'type':'none'},{'type':'noend'},{'type':'none'}],
        [{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'},{'type':'none'}]
    ],
    
    //###############################################
    // Grid which is user drawn lines
    'grid' : [],
    
    
    /*
    PUZZLE #2
    'lines' : { 'x': [[1,0]], 'y': [[0,1]] },
    'blocks' : [[{'type':'none'}]],
    'objects' : [[{'type':'connector'},{'type':'none'},{'type':'none'}], [{'type':'none'},{'type':'none'}], [{'type':'connector'},{'type':'none'},{'type':'start'}]],
    */
    //###############################################
    'updateCanvas' : () => {
        can.width      = PADDING*2+(Game.lines.x.length+1)*LENGTH;
        can.height     = PADDING*2+(Game.lines.y.length+1)*LENGTH;
        canPath.width  = PADDING*2+(Game.lines.x.length+1)*LENGTH;
        canPath.height = PADDING*2+(Game.lines.y.length+1)*LENGTH;
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
        for(var i=0; i < Game.objects.length; i++){
            gridToInsert = [];
            gridToInsert.length = Game.objects[i].length;
            gridToInsert.fill(0);
            Game.grid.push(gridToInsert);
        }
        for(var i=0; i < Game.lines.x.length; i++){
            for(var j=0; j < Game.lines.x[i].length; j++){
                if(Game.lines.x[i][j]){
                    Game.drawLine(i*LENGTH+PADDING+LENGTH/2, j*LENGTH+PADDING+LENGTH/2, (i+1)*LENGTH+PADDING+LENGTH/2, j*LENGTH+PADDING+LENGTH/2)
                }
            }
        }
        for(var i=0; i < Game.lines.y.length; i++){
            for(var j=0; j < Game.lines.y[i].length; j++){
                if(Game.lines.y[i][j]){
                    Game.drawLine(j*LENGTH+PADDING+LENGTH/2, i*LENGTH+PADDING+LENGTH/2, j*LENGTH+PADDING+LENGTH/2, (i+1)*LENGTH+PADDING+LENGTH/2)
                }
            }
        }
        for(var i=0; i < Game.objects.length; i++){
            for(var j=0; j < Game.objects[i].length; j++){
                switch(Game.objects[i][j].type){
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
    }
}
//-------------------------------------
function cursorMove(e){
  CURSOR_X = e.clientX - e.target.getBoundingClientRect().left
  CURSOR_Y = e.clientY - e.target.getBoundingClientRect().top
}
function cursorStart(){
  console.log(CURSOR_X + " " + CURSOR_Y)
}
Game.updateCanvas();
Game.generateBoard();
