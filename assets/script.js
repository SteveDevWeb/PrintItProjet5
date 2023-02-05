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
	},
]






/////////// Config des points ///////////
//Le nombre de points s'adapte au nombre d'images dans le tableau "slides"

var nbpoint = slides.length; 
console.log("nombre de bullet point : "+nbpoint);

var points = document.querySelector('.dots');

for (let i=0 ; i<nbpoint; i++){		
	//Selon le nombre de points, on cree le meme nombre de div avec la class dot puis on l'ajoute au parent qui est dots
	var point = document.createElement("div");
	point.classList.add("dot");
	points.appendChild(point);
}




/////////Configuration de départ///////////

var caroussel= document.querySelector("#banner");

var image = document.createElement("img"); //On crée une balise img
image.classList.add("banner-img"); //On lui ajoute la class "banner-img"
image.setAttribute("src",slides[0].image); //On lui met comme attribut src = slides[0].image, cad la propriété image du premier element du tableau slides( qui est le chemin relatif de l'image)
caroussel.appendChild(image); //On attribut a la div #banner l'enfant image qu'on vient de créer

var text = document.createElement("p"); //Idem pour la balise p
text.innerHTML= slides[0].tagLine;
caroussel.appendChild(text);

var initialdot = document.querySelector('.dots :nth-child(1)'); //On active le premier dot
initialdot.classList.add("dot_selected");

var position=1; //La position va nous servir à savoir on l'on se situe dans le caroussel






///////// Les Event Listener sur les boutons //////////

var flechegauche = document.querySelector('.arrow_left') ;

flechegauche.addEventListener("click",function(e){
		if(position==1){
			console.log("Gauche");
			position=slides.length; //Si on est au premier slide et qu'on fait clic vers la gauche, on arrive a la derniere slide donc la position prend pas 0 mais le nombre de slide
			initialdot.classList.remove("dot_selected");
			initialdot = document.querySelector('.dots :last-child'); //On se déplace pas sur l'enfant précédent mais le dernier
			initialdot.classList.add("dot_selected");
			console.log("position = "+position);
			image.setAttribute("src",slides[position-1].image);
			text.innerHTML= slides[position-1].tagLine;

		}else{
			console.log("Gauche");
			initialdot.classList.remove("dot_selected"); //On retire le dot actif
			initialdot = initialdot.previousElementSibling; //On se place sur l'enfant précédent
			initialdot.classList.add("dot_selected"); //On ajoute à l'enfant précédent la class dot selected pour que le point soit actif
			position-=1; //La position diminue de 1
			console.log("position = "+position);
			image.setAttribute("src",slides[position-1].image); //L'attribut src de la balise img se met a jour
			text.innerHTML= slides[position-1].tagLine; //Idem pour le text
		}
	}
);



var flechedroite = document.querySelector('.arrow_right') ;

flechedroite.addEventListener("click",function(e){
		if(position==slides.length){
			console.log("Droite");
			position=1;
			initialdot.classList.remove("dot_selected");
			initialdot = document.querySelector('.dots :first-child');
			initialdot.classList.add("dot_selected");
			console.log("position = "+position);
			image.setAttribute("src",slides[position-1].image);
			text.innerHTML= slides[position-1].tagLine;
		}else{
			console.log("Droite");
			initialdot.classList.remove("dot_selected");
			initialdot = initialdot.nextElementSibling;
			initialdot.classList.add("dot_selected");
			position+=1;
			console.log("position = "+position);
			image.setAttribute("src",slides[position-1].image);
			text.innerHTML= slides[position-1].tagLine;
		}
	} 
);



