function Human() {
	this.killed = [];
}

Human.prototype.kill = function(cat) {
	this.killed.push(cat);
}