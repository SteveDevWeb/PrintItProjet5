const slides = [
	{
		"image":".asset/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

var flechegauche = document.querySelector('.arrow_left') ;

flechegauche.addEventListener("click",function(e){
		console.log("Gauche");
	} 
);



var flechedroite = document.querySelector('.arrow_right') ;

flechedroite.addEventListener("click",function(e){
		console.log("Droite");
	} 
);


var nbpoint = slides.length; //Le nombre de points s'adapte au nombre d'images dans le tableau "slides"
console.log("nombre de bullet point : "+nbpoint);



var points = document.querySelector('.dots');
for (let i=0 ; i<nbpoint; i++){
	var point = document.createElement("div");
	point.classList.add("dot");
	points.appendChild(point);
}


