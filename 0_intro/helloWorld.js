const fs = require('fs');
//const textIn = fs.readFileSync('./input.txt', 'utf-8');
//console.log(textIn);


//const txtOut = "I`m asynchronously written!";

//fs.writeFile("./output.txt", txtOut, (err, data) => {
//	console.log(txtOut);
//})


fs.readFile('./input.txt', 'utf-8', (error, data) =>{
	console.log(data);
} );
console.log('Will read first!'); // This will be written first as latter is asynchronously