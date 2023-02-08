const fs = require('fs');

const txt = "Writing this in a asynchronously way.";
const txt2 = "Inside a Notepad.";

fs.writeFile('./write.txt', `${txt}\n${txt2}`, 'utf-8', err => {
	if (err) return console.log('Error writing to file!');
	console.log('Your files has been written!');
});
