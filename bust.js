const fs = require("fs-extra");

// console.log("__dirname: ", __dirname);

let formatNum = function (num, len) {
	let str = num.toString(10);
	let sl = str.length;

	if (sl < len) return "0".repeat(len - sl) + str;

	return str;
};

var d = new Date();
var key =
	formatNum(d.getFullYear(), 4) +
	formatNum(d.getMonth() + 1, 2) +
	formatNum(d.getDate(), 2) +
	"-" +
	formatNum(d.getHours(), 2) +
	formatNum(d.getMinutes(), 2) +
	formatNum(d.getSeconds(), 2);
console.log("Key: ", key);

var bundleName = "bundle-" + key;

fs.ensureDirSync(".\\public-busted");
fs.emptyDirSync(".\\public-busted");
fs.ensureDirSync(".\\public-busted\\build");

fs.readFile(".\\public\\index.html", "utf8")
	.then((a) => {
		return a
			.replace(/bundle\.css/g, bundleName + ".css")
			.replace(/bundle\.js/g, bundleName + ".js");
	})
	.then((a) => {
		fs.writeFile(".\\public-busted\\index.html", a, "utf8");
	});

fs.readFile(".\\public\\build\\bundle.css", "utf8")
	.then((a) => {
		return a.replace(/bundle\.css/g, bundleName + ".css");
	})
	.then((a) => {
		fs.writeFile(".\\public-busted\\build\\" + bundleName + ".css", a, "utf8");
	});

fs.readFile(".\\public\\build\\bundle.css.map", "utf8")
	.then((a) => {
		return a.replace(/bundle\.css/g, bundleName + ".css");
	})
	.then((a) => {
		fs.writeFile(".\\public-busted\\build\\" + bundleName + ".css.map", a, "utf8");
	});

fs.readFile(".\\public\\build\\bundle.js", "utf8")
	.then((a) => {
		return a.replace(/bundle\.js/g, bundleName + ".js");
	})
	.then((a) => {
		fs.writeFile(".\\public-busted\\build\\" + bundleName + ".js", a, "utf8");
	});

fs.readFile(".\\public\\build\\bundle.js.map", "utf8")
	.then((a) => {
		return a.replace(/bundle\.js/g, bundleName + ".js");
	})
	.then((a) => {
		fs.writeFile(".\\public-busted\\build\\" + bundleName + ".js.map", a, "utf8");
	});
