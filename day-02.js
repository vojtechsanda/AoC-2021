a = ``.split('\n').map(x => x.split(' ').map(y => !isNaN(y) ? Number(y) : y))
// PART 1
var x = 0
var depth = 0

a.forEach(command => {
	[instruction, amount] = command;
	if (instruction === 'forward') {
		x += amount;
	} else if (instruction === 'down') {
		depth += amount;
	} else if (instruction === 'up') {
		depth -= amount;
	}
})
console.log(x * depth)

// PART 2
var x = 0
var depth = 0
var aim = 0

a.forEach(command => {
	[instruction, amount] = command;
	if (instruction === 'forward') {
		x += amount;
		depth += aim * amount;
	} else if (instruction === 'down') {
		aim += amount;
	} else if (instruction === 'up') {
		aim -= amount;
	}
})
console.log(x * depth)