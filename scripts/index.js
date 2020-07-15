(function(){
	'use strict';

	let div = document.getElementById('img');

	let imgUm = new Image();
	let imgDois = new Image();
	let imgTres = new Image();

	imgUm.src = './images/um.jpg';
	imgDois.src = './images/dois.jpg';
	imgTres.src = './images/tres.png';

	function teste(msg){
		div.textContent += msg + '<br>';
	};

	imgUm.onLoad = teste('Imagem UM carregada');
	imgDois.onLoad = teste('Imagem Dois carregada');
	imgTres.onLoad = teste('Imagem Tres carregada');

	

})();