'use strict';

class point{
	constructor(X,Y,LVL,REAL,ICON){
		this.x = X;
		this.y = Y;
		this.lvl=LVL;
		this.real_lvl=REAL;
		this.icon=ICON;
	}
	Show(){
		console.log(this.x+",",this.y+",",this.lvl+",","\""+this.icon+"\"");
	}
	get getX(){
		return this.x;
	}
	get getY(){
		return this.y;
	}
	get getLVL(){
		return this.lvl;
	}
	get get_RealLVL(){
		return this.real_lvl;
	}
	get get_ICON(){
		return this.icon;
	}
};

let ALL = [];
	ALL.push(new point(107, 28, 1, 5, "gren_crice"));
	ALL.push(new point(138, 107, 1,4, "gren_crice"));
	ALL.push(new point(128, 216, 1,1, "gren_crice"));
	ALL.push(new point(164, 183, 1,2, "gren_crice"));
	ALL.push(new point(22, 352, 1, 2, "gren_crice"));
	ALL.push(new point(212, 470, 1,1, "gren_crice"));
	ALL.push(new point(462, 395, 1,4, "gren_crice"));
	ALL.push(new point(417, 299, 1,5, "gren_crice"));
	ALL.push(new point(291, 317, 1,1, "gren_crice"));
	ALL.push(new point(314, 58, 1, 1, "gren_crice"));
	ALL.push(new point(255, 18, 1, 4, "gren_crice"));
	ALL.push(new point(422, 166, 1,4, "gren_crice"));
	ALL.push(new point(281, 248, 1,4, "gren_crice"));
	ALL.push(new point(375, 209, 1,2, "gren_crice"));
	//--------------------------------------------
	ALL.push(new point(207, 83 , 7, 9,"orange_crice"));
	ALL.push(new point(20,  296, 7, 13,"orange_crice"));
	ALL.push(new point(268, 212, 7, 7,"orange_crice"));
	ALL.push(new point(356, 468, 7, 7,"orange_crice"));
	ALL.push(new point(340, 368, 7, 9,"orange_crice"));
	ALL.push(new point(438, 199, 7, 7,"orange_crice"));
	ALL.push(new point(475, 122, 7, 11,"orange_crice"));
	ALL.push(new point(365, 15 , 7, 13,"orange_crice"));
	//--------------------------------------------
	ALL.push(new point(223, 23, 16, 16,"red_crice"));
	ALL.push(new point(42, 80, 16,  20,"red_crice"));
	ALL.push(new point(35, 468, 16, 16,"red_crice"));
	ALL.push(new point(72, 471, 16, 19,"red_crice"));
	ALL.push(new point(456, 453, 16,16,"red_crice"));
	ALL.push(new point(468, 23, 16, 22,"red_crice"));
	//--------------------------------------------
	ALL.push(new point(184, 316, 100,11, "boss"));
	ALL.push(new point(485, 362, 100,20, "boss"));
	//--------------------------------------------
	ALL.push(new point(228, 370, 101,101,"heal_altar"));
	ALL.push(new point(32, 385, 101, 101,"heal_altar"));
	ALL.push(new point(395, 48, 101, 101,"heal_altar"));
	//--------------------------------------------
	ALL.push(new point(283, 46, 102, 102,"rune"));
	ALL.push(new point(163, 66, 102, 102,"rune"));
	ALL.push(new point(263, 382,102, 102,"rune"));
	ALL.push(new point(247, 240,102, 102,"rune"));
	//--------------------------------------------
	ALL.push(new point(274, 86, 1001, 3, "gren_romb"));
	ALL.push(new point(393, 265, 1001,3, "gren_romb"));
	ALL.push(new point(86, 397, 1001, 3, "gren_romb"));
	ALL.push(new point(476, 251, 1001,6, "gren_romb"));
	ALL.push(new point(293, 438, 1001,6, "gren_romb"));
	//--------------------------------------------
	ALL.push(new point(230, 404, 1007,8, "orange_romb"));
	ALL.push(new point(409, 10, 1007, 8, "orange_romb"));
	//--------------------------------------------
	ALL.push(new point(139, 442, 1016,12, "red_romb"));
	ALL.push(new point(35, 165,  1016,12, "red_romb"));
	//--------------------------------------------
