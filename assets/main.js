document.querySelectorAll("div[data-template]").forEach(function (element) {
	const name = element.getAttribute("data-template");
	const attributesMap = new Map();
	const argumentKeys = [];
	for (let i = 0; i < element.attributes.length; i++) {
		let argument = element.attributes[i];
		if (argument.name != "data-template") {
			attributesMap.set(argument.name.substring(5), argument.value);
			argumentKeys.push(argument.name.substring(5));
		}
	}
	argumentKeys.sort((a, b) => a.length - b.length);
	console.log(argumentKeys);
	const templateElement = document.querySelector(
		"template#" + name + "-template"
	);
	let content = templateElement.innerHTML;
	for (let i = 0; i < argumentKeys.length; i++) {
		let key = argumentKeys[i];
		let value = attributesMap.get(key);
		content = content.replace(new RegExp("{{" + key + "}}", "g"), value);
	}
	element.innerHTML = content;
});
