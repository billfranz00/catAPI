function getInfo() {
	var token = 'OTM3MTk',
		value = this.value
	console.log(value)
	$.ajax({
		url: 'http://thecatapi.com/api/images/get?format=html&results_per_page=20',
		dataType: "html",
		success: function(stuff) {
			// console.log(stuff)
			document.getElementById('placement').innerHTML = ""
			var data = $.parseHTML(stuff)
			for(i = 0; i < data.length; i++) {
				if(data[i].nodeName == '#text') {
					data.splice(i, 1)
				}
			}
			console.log(data)
			console.log(data[0].childNodes[0])
			for(i = 0; i < value; i++) {
				var div = document.createElement('div'),
					a = data[i]

				a.childNodes[0].className = 'img-responsive img-circle'
				//a.setAttribute('class', 'animated bounce infinite')

				div.setAttribute('class', 'col-md-4 col-sm-4 animated bounceInDown')
				div.addEventListener('mouseover', rubberBandMan, this)
				div.addEventListener('mouseout', removeClass, this)
				div.appendChild(a)

				document.getElementById('placement').appendChild(div)
			}
		},
		type: 'GET'
	})
}

window.onload = function() {
	var buttons = document.getElementsByClassName('btn')
	for(i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', getInfo, this)
	}
}

function rubberBandMan() {
	this.setAttribute('class', 'col-md-4 col-sm-4 animated rubberBand')
}

function removeClass() {
	this.setAttribute('class', 'col-md-4 col-sm-4')
}