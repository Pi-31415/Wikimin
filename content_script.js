var url = window.location.href;



if (url.includes("wikipedia.org")) {


	var a = document.getElementsByTagName('a');

	for (var idx = 0; idx < a.length; ++idx) {
		//console.log(a[idx].href);
		a[idx].setAttribute("style", "color:#313131;");
	}

	a = document.getElementsByTagName('p');
	
	for (var idx = 0; idx < a.length; ++idx) {
		//console.log(a[idx].href);
		a[idx].setAttribute("style", "font-size:1.5em;line-height: 2.0;font-family: Georgia, serif;color:#313131;text-align:justify;padding:25px;");
	}

}
