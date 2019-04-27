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
            "type": "none"
          },
          {
            "type": "none"
          },
          {
            "type": "none"
          },
          {
            "type": "none"
          },
          {
            "type": "none"
          },
          {
            "type": "none"
          },
          {
            "type": "none"
          },
          {
            "type": "none"
          },
          {
            "type": "none"
          },
          {
            "type": "none"
          },
          {
            "type": "none"
          }
        ],
        [
          {
            "type": "none"
          },
          {
            "type": "connector"
          },
          {
            "type": "line"
          },
          {
            "type": "connector"
          },
          {
            "type": "none"
          },
          {
            "type": "connector"
          },
          {
            "type": "line"
          },
          {
            "type": "noend"
          },
          {
            "type": "none"
          },
          {
            "type": "start"
          },
          {
            "type": "none"
          }
        ],
        [
          {
            "type": "none"
          },
          {
            "type": "line"
          },
          {
            "type": "none"
          },
          {
            "type": "line"
          },
          {
            "type": "none"
          },
          {
            "type": "line"
          },
          {
            "type": "none"
          },
          {
            "type": "none"
          },
          {
            "type": "none"
          },
          {
            "type": "line"
          },
          {
            "type": "none"
          }
        ],
        [
          {
            "type": "none"
          },
          {
            "type": "connector"
          },
          {
            "type": "none"
          },
          {
            "type": "connector"
          },
          {
            "type": "line"
          },
          {
            "type": "connector"
          },
          {
            "type": "none"
          },
          {
            "type": "connector"
          },
          {
            "type": "line"
          },
          {
            "type": "connector"
          },
          {
            "type": "none"
          }
        ],
        [
          {
            "type": "none"
          },
          {
            "type": "line"
          },
          {
            "type": "none"
          },
          {
            "type": "none"
          },
          {
            "type": "none"
          },
          {
            "type": "line"
          },
          {
            "type": "none"
          },
          {
            "type": "line"
          },
          {
            "type": "none"
          },
          {
            "type": "none"
          },
          {
            "type": "none"
          }
        ],
        [
          {
            "type": "none"
          },
          {
            "type": "connector"
          },
          {
            "type": "none"
          },
          {
            "type": "connector"
          },
          {
            "type": "line"
          },
          {
            "type": "connector"
          },
          {
            "type": "line"
          },
          {
            "type": "connector"
          },
          {
            "type": "line"
          },
          {
            "type": "connector"
          },
          {
            "type": "none"
          }
        ],
        [
          {
            "type": "none"
          },
          {
            "type": "line"
          },
          {
            "type": "none"
          },
          {
            "type": "line"
          },
          {
            "type": "none"
          },
          {
            "type": "line"
          },
          {
            "type": "none"
          },
          {
            "type": "line"
          },
          {
            "type": "none"
          },
          {
            "type": "line"
          },
          {
            "type": "none"
          }
        ],
        [
          {
            "type": "none"
          },
          {
            "type": "connector"
          },
          {
            "type": "none"
          },
          {
            "type": "connector"
          },
          {
            "type": "line"
          },
          {
            "type": "connector"
          },
          {
            "type": "none"
          },
          {
            "type": "connector"
          },
          {
            "type": "line"
          },
          {
            "type": "connector"
          },
          {
            "type": "none"
          }
        ],
        [
          {
            "type": "none"
          },
          {
            "type": "line"
          },
          {
            "type": "none"
          },
          {
            "type": "none"
          },
          {
            "type": "none"
          },
          {
            "type": "none"
          },
          {
            "type": "none"
          },
          {
            "type": "line"
          },
          {
            "type": "none"
          },
          {
            "type": "line"
          },
          {
            "type": "none"
          }
        ],
        [
          {
            "type": "endbottom"
          },
          {
            "type": "connector"
          },
          {
            "type": "none"
          },
          {
            "type": "noend"
          },
          {
            "type": "line"
          },
          {
            "type": "connector"
          },
          {
            "type": "line"
          },
          {
            "type": "connector"
          },
          {
            "type": "none"
          },
          {
            "type": "noend"
          },
          {
            "type": "none"
          }
        ],
        [
          {
            "type": "none"
          },
          {
            "type": "none"
          },
          {
            "type": "none"
          },
          {
            "type": "none"
          },
          {
            "type": "none"
          },
          {
            "type": "none"
          },
          {
            "type": "none"
          },
          {
            "type": "none"
          },
          {
            "type": "none"
          },
          {
            "type": "none"
          },
          {
            "type": "none"
          }
        ]
      ],
}