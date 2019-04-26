Puzzle = {
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
        [
          {
            "type": "none",
            "x": 30,
            "y": 30
          },
          {
            "type": "none",
            "x": 30,
            "y": 65
          },
          {
            "type": "none",
            "x": 30,
            "y": 100
          },
          {
            "type": "none",
            "x": 30,
            "y": 135
          },
          {
            "type": "none",
            "x": 30,
            "y": 170
          },
          {
            "type": "none",
            "x": 30,
            "y": 205
          },
          {
            "type": "none",
            "x": 30,
            "y": 240
          },
          {
            "type": "none",
            "x": 30,
            "y": 275
          },
          {
            "type": "none",
            "x": 30,
            "y": 310
          },
          {
            "type": "none",
            "x": 30,
            "y": 345
          },
          {
            "type": "none",
            "x": 30,
            "y": 380
          }
        ],
        [
          {
            "type": "none",
            "x": 65,
            "y": 30
          },
          {
            "type": "connector",
            "x": 65,
            "y": 65
          },
          {
            "type": "line",
            "x": 65,
            "y": 100
          },
          {
            "type": "connector",
            "x": 65,
            "y": 135
          },
          {
            "type": "none",
            "x": 65,
            "y": 170
          },
          {
            "type": "connector",
            "x": 65,
            "y": 205
          },
          {
            "type": "line",
            "x": 65,
            "y": 240
          },
          {
            "type": "noend",
            "x": 65,
            "y": 275
          },
          {
            "type": "none",
            "x": 65,
            "y": 310
          },
          {
            "type": "start",
            "x": 65,
            "y": 345
          },
          {
            "type": "none",
            "x": 65,
            "y": 380
          }
        ],
        [
          {
            "type": "none",
            "x": 100,
            "y": 30
          },
          {
            "type": "line",
            "x": 100,
            "y": 65
          },
          {
            "type": "none",
            "x": 100,
            "y": 100
          },
          {
            "type": "line",
            "x": 100,
            "y": 135
          },
          {
            "type": "none",
            "x": 100,
            "y": 170
          },
          {
            "type": "line",
            "x": 100,
            "y": 205
          },
          {
            "type": "none",
            "x": 100,
            "y": 240
          },
          {
            "type": "none",
            "x": 100,
            "y": 275
          },
          {
            "type": "none",
            "x": 100,
            "y": 310
          },
          {
            "type": "line",
            "x": 100,
            "y": 345
          },
          {
            "type": "none",
            "x": 100,
            "y": 380
          }
        ],
        [
          {
            "type": "none",
            "x": 135,
            "y": 30
          },
          {
            "type": "connector",
            "x": 135,
            "y": 65
          },
          {
            "type": "none",
            "x": 135,
            "y": 100
          },
          {
            "type": "connector",
            "x": 135,
            "y": 135
          },
          {
            "type": "line",
            "x": 135,
            "y": 170
          },
          {
            "type": "connector",
            "x": 135,
            "y": 205
          },
          {
            "type": "none",
            "x": 135,
            "y": 240
          },
          {
            "type": "connector",
            "x": 135,
            "y": 275
          },
          {
            "type": "line",
            "x": 135,
            "y": 310
          },
          {
            "type": "connector",
            "x": 135,
            "y": 345
          },
          {
            "type": "none",
            "x": 135,
            "y": 380
          }
        ],
        [
          {
            "type": "none",
            "x": 170,
            "y": 30
          },
          {
            "type": "line",
            "x": 170,
            "y": 65
          },
          {
            "type": "none",
            "x": 170,
            "y": 100
          },
          {
            "type": "none",
            "x": 170,
            "y": 135
          },
          {
            "type": "none",
            "x": 170,
            "y": 170
          },
          {
            "type": "line",
            "x": 170,
            "y": 205
          },
          {
            "type": "none",
            "x": 170,
            "y": 240
          },
          {
            "type": "line",
            "x": 170,
            "y": 275
          },
          {
            "type": "none",
            "x": 170,
            "y": 310
          },
          {
            "type": "none",
            "x": 170,
            "y": 345
          },
          {
            "type": "none",
            "x": 170,
            "y": 380
          }
        ],
        [
          {
            "type": "none",
            "x": 205,
            "y": 30
          },
          {
            "type": "connector",
            "x": 205,
            "y": 65
          },
          {
            "type": "none",
            "x": 205,
            "y": 100
          },
          {
            "type": "connector",
            "x": 205,
            "y": 135
          },
          {
            "type": "line",
            "x": 205,
            "y": 170
          },
          {
            "type": "connector",
            "x": 205,
            "y": 205
          },
          {
            "type": "line",
            "x": 205,
            "y": 240
          },
          {
            "type": "connector",
            "x": 205,
            "y": 275
          },
          {
            "type": "line",
            "x": 205,
            "y": 310
          },
          {
            "type": "connector",
            "x": 205,
            "y": 345
          },
          {
            "type": "none",
            "x": 205,
            "y": 380
          }
        ],
        [
          {
            "type": "none",
            "x": 240,
            "y": 30
          },
          {
            "type": "line",
            "x": 240,
            "y": 65
          },
          {
            "type": "none",
            "x": 240,
            "y": 100
          },
          {
            "type": "line",
            "x": 240,
            "y": 135
          },
          {
            "type": "none",
            "x": 240,
            "y": 170
          },
          {
            "type": "line",
            "x": 240,
            "y": 205
          },
          {
            "type": "none",
            "x": 240,
            "y": 240
          },
          {
            "type": "line",
            "x": 240,
            "y": 275
          },
          {
            "type": "none",
            "x": 240,
            "y": 310
          },
          {
            "type": "line",
            "x": 240,
            "y": 345
          },
          {
            "type": "none",
            "x": 240,
            "y": 380
          }
        ],
        [
          {
            "type": "none",
            "x": 275,
            "y": 30
          },
          {
            "type": "connector",
            "x": 275,
            "y": 65
          },
          {
            "type": "none",
            "x": 275,
            "y": 100
          },
          {
            "type": "connector",
            "x": 275,
            "y": 135
          },
          {
            "type": "line",
            "x": 275,
            "y": 170
          },
          {
            "type": "connector",
            "x": 275,
            "y": 205
          },
          {
            "type": "none",
            "x": 275,
            "y": 240
          },
          {
            "type": "connector",
            "x": 275,
            "y": 275
          },
          {
            "type": "line",
            "x": 275,
            "y": 310
          },
          {
            "type": "connector",
            "x": 275,
            "y": 345
          },
          {
            "type": "none",
            "x": 275,
            "y": 380
          }
        ],
        [
          {
            "type": "none",
            "x": 310,
            "y": 30
          },
          {
            "type": "line",
            "x": 310,
            "y": 65
          },
          {
            "type": "none",
            "x": 310,
            "y": 100
          },
          {
            "type": "none",
            "x": 310,
            "y": 135
          },
          {
            "type": "none",
            "x": 310,
            "y": 170
          },
          {
            "type": "none",
            "x": 310,
            "y": 205
          },
          {
            "type": "none",
            "x": 310,
            "y": 240
          },
          {
            "type": "line",
            "x": 310,
            "y": 275
          },
          {
            "type": "none",
            "x": 310,
            "y": 310
          },
          {
            "type": "line",
            "x": 310,
            "y": 345
          },
          {
            "type": "none",
            "x": 310,
            "y": 380
          }
        ],
        [
          {
            "type": "endbottom",
            "x": 345,
            "y": 30
          },
          {
            "type": "connector",
            "x": 345,
            "y": 65
          },
          {
            "type": "none",
            "x": 345,
            "y": 100
          },
          {
            "type": "noend",
            "x": 345,
            "y": 135
          },
          {
            "type": "line",
            "x": 345,
            "y": 170
          },
          {
            "type": "connector",
            "x": 345,
            "y": 205
          },
          {
            "type": "line",
            "x": 345,
            "y": 240
          },
          {
            "type": "connector",
            "x": 345,
            "y": 275
          },
          {
            "type": "none",
            "x": 345,
            "y": 310
          },
          {
            "type": "noend",
            "x": 345,
            "y": 345
          },
          {
            "type": "none",
            "x": 345,
            "y": 380
          }
        ],
        [
          {
            "type": "none",
            "x": 380,
            "y": 30
          },
          {
            "type": "none",
            "x": 380,
            "y": 65
          },
          {
            "type": "none",
            "x": 380,
            "y": 100
          },
          {
            "type": "none",
            "x": 380,
            "y": 135
          },
          {
            "type": "none",
            "x": 380,
            "y": 170
          },
          {
            "type": "none",
            "x": 380,
            "y": 205
          },
          {
            "type": "none",
            "x": 380,
            "y": 240
          },
          {
            "type": "none",
            "x": 380,
            "y": 275
          },
          {
            "type": "none",
            "x": 380,
            "y": 310
          },
          {
            "type": "none",
            "x": 380,
            "y": 345
          },
          {
            "type": "none",
            "x": 380,
            "y": 380
          }
        ]
      ],
}