// Day 1

// Feature Request

// Feature - 1 
var thala = 7

var playerName = 'Dhone'

var isMarried = true

var team = ['Dhoni', 'Rohit', 'Virat', 'Jadeja', 'Bumrah']

var player = {
    name: 'Dhoni',
    age: 39,
    isMarried: true,
    team: ['Dhoni', 'Rohit', 'Virat', 'Jadeja', 'Bumrah']
}

console.log(thala,typeof(thala))
console.log(playerName,typeof(playerName))
console.log(isMarried,typeof(isMarried))
console.log(team,typeof(team))
console.log(player,typeof(player))

// Feature - 2

// Reassignment Demo
let thalaRuns = 10;
const kohliRuns = 20;

console.log('Initial runs:', thalaRuns, kohliRuns);

// Reassigning let variable
thalaRuns = 100;
console.log('After reassigning let:', thalaRuns);

// Attempting to reassign const variable
try {
    kohliRuns = 69;
} catch (error) {
    console.log('Error when reassigning const:', error.message);
}