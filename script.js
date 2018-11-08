const dataFetch = () => {
	fetch(WEB_URL).then(response => {
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

			switch(i.category) {
				case 'general':
					div = document.getElementById('linkGen');
					console.log(i, "general");
					break;
				case 'webdesign':
					div = document.getElementById('linkWebdesign');
					console.log(i, "webdesign");
					break;
				case 'javascript':
					div = document.getElementById('linkJavascript');
					console.log(i, "javascript");
					break;
				case 'articles':
					div = document.getElementById('linkArticles');
					console.log(i, "articles");
					break;
				case 'tools':
					div = document.getElementById('linkTools');
					console.log(i, "tools");
					break;
				case 'git':
					div = document.getElementById('linkGit');
					console.log(i, "github");
					break;
				case 'interview':
					div = document.getElementById('linkInterview');
					console.log(i, "interview");
					break;
				case 'youtube':
					div = document.getElementById('linkYoutube');
					console.log(i, "youtube");
					break;
				default:
					div = document.getElementById('otherLinks');
					console.log(i, "random");
					break;
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
		a.target = "_blank";
		a.style.fontWeight = "bold";
		a.setAttribute("class", "weblink");
		dP.appendChild(a);
		dP.appendChild(document.createTextNode(": " + i.desc));
}
