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
		return div.textContent += msg + '<br>';
	};

	imgTres.decode()
		.then(() => {
			div.textContent = teste('Imagem TRES carregada');
		})
		.catch((encodingError) => {
			// Do something with the error.
		})

	

})();