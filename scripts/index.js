(function(){
	'use strict';

	let divImg = document.getElementById('img');
	let quadro = document.getElementById('quadro');
	let legenda = document.getElementById('legenda');

	divImg.width = 300;
	divImg.height = 300;

	divImg.src = './images/tres.png';


	function ola(){
		legenda.textContent = 'Imagem carregada';
	}

	divImg.onload = ola;

	


})();