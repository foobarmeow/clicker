var clicker = {
	clickerCount: 0,
	clickCount: {

	},

	createClicker: function(){
		var title = $('#title').val();
		$('#title').val("");
		this.clickerCount += 1;
		var id = this.clickerCount;
		this.clickCount['clicker' + id] = 0;
		$('body').append("<div id='clicker" + id + "'><h1>" + title + "</h1><h2 id='p" + id + "'></h2><br><button id='bu" + id + "' onclick='clicker.goUp(" + id + ")'>Plus</button><button id='bd" + id + "' onclick='clicker.goDown(" + id + ")'>Minus</button><br><button onclick='clicker.clear(" + id + ")'>Clear</button><button onclick='clicker.remove(" + id + ")'>Remove</button></div>");
		$("#p" + id).html(this.clickCount['clicker' + id]);
	},
	goUp: function(id){
		this.clickCount['clicker' + id] += 1;
		$("#p" + id).html(this.clickCount['clicker' + id]);
	},
	goDown: function(id){
		this.clickCount['clicker' + id] -= 1;
		$("#p" + id).html(this.clickCount['clicker' + id]);
	},
	clear: function(id) {
		this.clickCount['clicker' + id] = 0;
		$("#p" + id).html(this.clickCount['clicker' + id]);
	},
	remove: function(id){
		$("#clicker" + id).remove();
	}
}