const dataFetch = () => {
	fetch('https://calm-bayou-88483.herokuapp.com/data').then(response => {
	  	return response.json();
	}).then(data => {
	  	liCreator(data);
	}).catch(err => {
	  	throw err;
	});
}

dataFetch();


const liCreator = (data, err) => {

	if (err) {
		console.log(err)
	} else {
		let div;
		data.forEach((i) => {
			if(i.category==='general'){
				div = document.getElementById('linkGen');
				console.log(i, "general")
			} else if (i.category==='webdesign') {
				div = document.getElementById('linkWebd');
				console.log(i, "webd")
			} else {
				div = document.getElementById('otherLinks');
			}

			let p = document.createElement("p");
			div.appendChild(p);
			p.setAttribute("class", "dyn desc my-2 mx-4");
			linker(data, i, p);
			console.log(div.id)
		})

		console.log(data);
	}
}

const linker = (data, i, dP) => {
		
		let a = document.createElement("a");
		a.appendChild(document.createTextNode(i.url_text));
		a.href = i.url;
		a.style.fontWeight = "bold";
		a.setAttribute("class", "weblink");
		dP.appendChild(a);
		dP.appendChild(document.createTextNode(": " + i.desc));
}