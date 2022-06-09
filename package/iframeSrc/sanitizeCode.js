export const sanitize = (code) => {
	// find and remove any iframe adds
	const unauth = [`createElement('iframe');`];
	let matches = [];

	// loop through each unauth and remove string from code
	unauth.forEach((str) => {
		console.log(code.match(str));
		matches = code.match(str);
	}); // end forEach

	return matches.length == 0;
};
