module.exports = function findRotationPoint(words) {
	let prevWord = 'a';
	for (let i = 0; i < words.length; i++){
		if (words[i] > prevWord) prevWord = words[i];
		else return i;
	}
	return 0;
}
