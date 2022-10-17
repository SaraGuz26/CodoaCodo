const contenedor = document.querySelector('#menuLateral');

document.querySelector('#boton-menu').addEventListener('click', () => {
	contenedor.classList.toggle('active');
	
});

$(document).ready(main);

var contador=1;

function main(){
	$('boton-menu').click(function(){
		//$('nav').toggle();

		if(contador==1){
			$('nav').animate({
				left:'0'
			});
			contador=0;
			}else{
				contador=1;
				$('nav').animate({
					left:'-100%'
			});
		}
	});
}