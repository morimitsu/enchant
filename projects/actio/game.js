enchant();
var _applyMapBlocks = function (map,path)
{
   var xhr = new XMLHttpRequest();
   xhr.open('GET',path,false);
   xhr.onload = function (oEvent)
   {
     var buffer = xhr.responseText;
     var preBlocks=new Array();
     var blocks=new Array();
     {
       console.log({"buffer":buffer,"length":buffer.length});
       for (var idx = 0; idx < buffer.length; idx++)
       {
         preBlocks.push(buffer[idx]);
       }
       blocks.push(new Array());
       for(var idx=0;idx<preBlocks.length;++idx)
       {
         var elem = preBlocks[idx];
         if( elem !="\n")
         {
           blocks[blocks.length-1].push( parseInt(elem)-1);
         }
         else
         {
           blocks.push(new Array());
         }
       }
     }
    //  map.loadData(blocks);
   };

   xhr.send(null);

};
window.onload = function() {
  var game = new Game(320, 320);
  game.fps = 20;
  game.preload('map0.png');
  game.onload = function() {
      var map = new Map(16, 16);
      map.image = game.assets['map0.png'];
      map.loadData(
          [
              [-1, 4, 4, 4, 4, 4, 4],
              [4, 5, 5, 5, 5, 5, 4],
              [4, 5, 4, 5, 4, 5, 4],
              [4, 5, 5, 5, 5, 5, 4],
              [4, 5, 4, 5, 4, 5, 4],
              [4, 5, 5, 5, 5, 5, 4],
              [4, 4, 4, 4, 4, 4, 4]
          ]
      );
      _applyMapBlocks(map,"./map1.dat");
      game.rootScene.addChild(map);
      var pad = new Pad();
      pad.x = 0;
      pad.y = 220;
      game.rootScene.addChild(pad);
  };

  game.touched = false;
  game.start();
  };
