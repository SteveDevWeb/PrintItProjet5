const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.jpg",
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
var caroussel= document.querySelector("#banner");


for (let i=0 ; i<nbpoint; i++){		
	//Selon le nombre de points, on cree le meme nombre de div avec la class dot puis on l'ajoute au parent qui est dots
	var point = document.createElement("div");
	point.classList.add("dot");
	points.appendChild(point);

	var image = document.createElement("img");
	image.classList.add("banner-img");
	image.setAttribute("src",slides[i].image);
	caroussel.appendChild(image);

}





