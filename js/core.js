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
    var i,
        item,
        index,
        windowHeight,
        windowWidth,
        self = this;

    this.numberOfItems = 10;
    this.itemSpeed = 2000;
    this.itemsClicked = 0;
    this.items = [];
    this.itemWidth = 20;
    this.itemHeight = 20;
    this.container = $('#Playfield');

    //generate items
    for (i = 0; i < this.numberOfItems; i++) {
      item = $('<div id="item_' + i + '"></div>');
      this.items.push(item);
      this.move(item);
    }

    this.container.append(this.items);
  };

  Game.prototype.move = function (item) {
    var self = this;

    var windowHeight = $(window).height() - this.itemHeight;
    var windowWidth = $(window).width() - this.itemWidth;
    item.css({
      top: Math.floor(Math.random() * windowHeight),
      left: Math.floor(Math.random() * windowWidth)
    }).show();

    setTimeout(function(){
      self.move(item);
    }, Math.floor(Math.random() * this.itemSpeed));
  };

  Cats.Game = Game;
})();
