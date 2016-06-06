function getInfo() {
	var token = 'OTM3MTk'
	$.ajax({
		url: 'http://thecatapi.com/api/images/get?format=html&results_per_page=20',
		dataType: "html",
		success: function(stuff) {
			// console.log(stuff)
			var data = $.parseHTML(stuff)
			for(i = 0; i < data.length; i++) {
				if(data[i].nodeName == '#text') {
					data.splice(i, 1)
				}
			}
			console.log(data)
			document.getElementById('placement').appendChild(data[0])
		},
		type: 'GET'
	})
}

document.getElementById('getInfo').addEventListener('click', getInfo)