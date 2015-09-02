$(document).ready(function() {
  console.log('ready!');
  initializeGame();
  $('body').keydown(function(event){
    var arrow_keys = [37, 38, 39, 40];

    if(arrow_keys.indexOf(event.which) > -1) {
      var tile = $('.tile');
      moveTile(tile, event.which);
      // createTile();
      event.preventDefault();
    }
  })
})

 //keeps track of where on the board has a tile

  var tile_array = [];

function initializeGame() {
  createTile();
  createTile();
  createTile();
  createTile();
}

function rando_num(){
  return Math.floor(Math.random() * 4);
}


function checkLocation(column, row) {
  for(var i = 0; i < tile_array.length; i++) {
    if (tile_array[i].attr('data-col') == column && tile_array[i].attr('data-row') == row) {
      column = 'c' + rando_num();
      row = 'r' + rando_num();
      checkLocation(column, row);
    }
  }
  return [column, row];
}

function createTile() {

  // Check for empty spaces before creating
  if (tile_array.length < 16) {
    var new_column = 'c' +rando_num();
    var new_row = 'r' + rando_num();

    var result = checkLocation(new_column, new_row);

    var column = result[0];
    var row = result[1];

    // Create new div element with tile class, location attributes, and value attribute
    var newTile = $( '<div= class="tile">2</div>');
    newTile.attr("data-col", column);
    newTile.attr("data-row", row);
    newTile.attr("data-val", "2");
    $('#gameboard').append(newTile);

    tile_array.push(newTile);

  } else {
    console.log("spaces full");
  }

  // Maybe assign unique tile identifier
}

function destroyTile() {
  // If a tile is merged into a new tile, tile is destroyed

  // div is destroyed
}

 // Function may need more arguments to work
function tileCollide(tile) {
  // Should happen upon collision
  var new_tile_value = tile.attr("data-val") * 2;
  tile.attr("data-val", new_tile_value);
  tile.text(new_tile_value);
}

function moveTile(tile, direction) {
  // needs conditionals to check for occupied grids spaces
  switch(direction) {
    case 38: //up
      //tile.attr("data-row","r0");
      var zero = getColumn(0);
      var one = getColumn(1);
      var two = getColumn(2);
      var three = getColumn(3);
      console.log(zero);
      console.log(one);
      console.log(two);
      console.log(three);

      break;
    case 40: //down
      tile.attr("data-row","r3");
      break;
    case 37: //left
      tile.attr("data-col","c0");
      break;
    case 39: //right
      tile.attr("data-col","c3");
      break;
  }
}

  function getColumn(col){
    var column = Array(4);
    var colnum = ('c' + col);
    console.log(colnum);
    for(var i = 0; i < tile_array.length; i++) {
      var rownum = ("r" + [i] );
      if (tile_array[i].attr('data-col') == colnum && tile_array[i].attr('data-row') == rownum ) {
        column[i]=(tile_array[i]);
      }
    }
    return column;
  }

  // function moveUp(col) {
  //   var column = getColumn(col);
  //   for (var i = 0; i < column.length; i++ ) {
  //     var row = ('r' + [i] );
  //     column[i].attr('data-row', row);
  //   }
  //   console.log(column);
  // }




  // function moveUp(){
  //
  //   for(var i = 0; i < tile_array.length; i++) {
  //     var tile = tile_array[i];
  //     checkUp(tile);
  //   }
  // }
  //
  // function checkUp(tile) {
  //   var column = tile.attr('data-col');// data-col: 'c0'
  //   var row = tile.attr('data-row'); //data-row: 'r1'
  //   for(var j = 0; j < tile_array.length; j++) {
  //     if (row == 'r0') {
  //      console.log("done moving!");
  //     } else {
  //       var row_num = +(row.slice(1, 2)); //row-num: 1
  //       var next_row = 'r' + (row_num - 1); //next_row: r0
  //
  //       if(tile_array[j].attr('data-col') == column) {
  //         console.log(tile_array[j].attr('data-row'), next_row);
  //         if (tile_array[j].attr('data-row') == next_row) {
  //           console.log("I am not mutating");
  //         } else {
  //           tile.attr("data-row", next_row);
  //         }
  //       } else {
  //         console.log("I am not in this column");
  //       }
  //     }
  //   }
  // }
  //
  //

    //tile.attr("data-row","r0") if no tile exists with data-col 0, rows 2, 1, 0




  // move to 'r0' if tile_array.attr('data-row') !=



  // function sortToMove() {
  //     var zero_array = [];
  //     var one_array = [];
  //     var two_array = [];
  //     var three_array = [];
  //   for(var i=0; i < filled_space.length; i++) {
  //     if (filled_space[i][0] == 0) {
  //       zero_array.push([filled_space[i]]);
  //     } else if (filled_space[i][0] == 1) {
  //         one_array.push([filled_space[i]]);
  //     } else if (filled_space[i][0] == 2) {
  //         two_array.push([filled_space[i]]);
  //     } else if (filled_space[i][0] == 3) {
  //         three_array.push([filled_space[i]]);
  //     } else {
  //       console.log("you broke it");
  //     }
  //   }
  //   zero_array.sort();
  //   one_array.sort();
  //   two_array.sort();
  //   three_array.sort();

  // }


// var tile_num = zero_array.length;
// zero_array = zero_result.slice(0, tile_num);

// var zero_result =  [[0,0][0,1][0,2][0,3]];
// var one_result =   [[1,0][1,1][1,2][1,3]];
// var two_result =   [[2,0][2,1][2,2][2,3]];
// var three_result = [[3,0][3,1][3,2][3,3]];

// var filled_space = [[0, 1], [1, 3], [2, 3], [1, 1]];
//     console.log(zero_array);
//     console.log(one_array);
//     console.log(two_array);
//     console.log(three_array);
