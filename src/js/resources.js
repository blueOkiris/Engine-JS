var derp_face = new Sprite("images/derp.png", [[0, 0]], [599, 568]);
var bomb_locs = function() {
	var list = [[]];
	for(var i = 0; i < 13; i++)
		list.push([i*32, 0]);
	return list;
}();
var bomb = new Sprite("images/Hyptosis/BombExploding.png",
						bomb_locs, [32, 64]);
