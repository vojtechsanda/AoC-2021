x = ``.split('\n').map(x => Number(x))

// PART 1
var counter = 0
for (let i = 1; i < x.length; i++) {
	if (x[i - 1] < x[i]) {
		counter += 1
	}
}
console.log(counter)

// PART 2
var counter = 0
for (let i = 1; i < x.length; i++) {
	deep1 = x[i - 1] + x[i - 2] + x[i]
	deep2 = x[i - 1] + x[i - 2] + x[i - 3]
	if (deep2 < deep1) {
		counter += 1
	}
}
console.log(counter)
