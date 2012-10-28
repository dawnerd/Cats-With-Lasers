/**
 * Catswithus
 *
 * Copyright 2012 Troy Whiteley <troy@somanyscientists.com>
 *
 * http://catswith.us
*/

// Clears up junk output in Visual Studio
console.clear && console.clear()

var Cats = {};

(function () {
  "use strict";

  Cats.environment = 'web';

  var Game = function () {
    var i;

    this.numberOfItems = 1;
    this.itemSpeed = 1;
    this.itemsClicked = 0;
    this.items = [];
    this.itemTemplate = {
      color: '#fff',
      currentPos: [0, 0],
      targetPos: [100, 100],
      finalPos: [500,0]
    };
    this.container = $('#Playfield');

    //generate items
    for (i = 0; i < this.numberOfItems; i++) {

    }
  }
  Cats.Game = Game;
})();
