function Human(name) {
	this.name = name,
	this.killed = []
}

Human.prototype.kill = function(cat) {
	this.killed.push(cat);
}

module.exports = Human;