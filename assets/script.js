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








var nbpoint = slides.length; //Le nombre de points s'adapte au nombre d'images dans le tableau "slides"
console.log("nombre de bullet point : "+nbpoint);







var points = document.querySelector('.dots');


for (let i=0 ; i<nbpoint; i++){		
	//Selon le nombre de points, on cree le meme nombre de div avec la class dot puis on l'ajoute au parent qui est dots
	var point = document.createElement("div");
	point.classList.add("dot");
	points.appendChild(point);
}





var caroussel= document.querySelector("#banner");


var image = document.createElement("img");
image.classList.add("banner-img");
image.setAttribute("src",slides[0].image);
caroussel.appendChild(image);


var text = document.createElement("p");
text.innerHTML= slides[0].tagLine;
caroussel.appendChild(text);


var initialdot = document.querySelector('.dots :nth-child(1)');
initialdot.classList.add("dot_selected");







var position=1;





var flechegauche = document.querySelector('.arrow_left') ;

flechegauche.addEventListener("click",function(e){
		if(position==1){
			console.log("Gauche");
			position=slides.length;
			initialdot.classList.remove("dot_selected");
			initialdot = document.querySelector('.dots :last-child');
			initialdot.classList.add("dot_selected");
			console.log("position = "+position);
			image.setAttribute("src",slides[position-1].image);
			text.innerHTML= slides[position-1].tagLine;

		}else{
			console.log("Gauche");
			initialdot.classList.remove("dot_selected");
			initialdot = initialdot.previousElementSibling;
			initialdot.classList.add("dot_selected");
			position-=1;
			console.log("position = "+position);
			image.setAttribute("src",slides[position-1].image);
			text.innerHTML= slides[position-1].tagLine;
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







/*var flechegauche = document.querySelector('.arrow_left') ;

flechegauche.addEventListener("click",function(e){
		console.log("Gauche");
		initialdot.classList.remove("dot_selected");
		initialdot = initialdot.previousElementSibling;
		initialdot.classList.add("dot_selected");
		position-=1;
		console.log("position = "+position);
		image.setAttribute("src",slides[position-1].image);
		text.innerHTML= slides[position-1].tagLine;
	}
);



var flechedroite = document.querySelector('.arrow_right') ;

flechedroite.addEventListener("click",function(e){
		console.log("Droite");
		initialdot.classList.remove("dot_selected");
		initialdot = initialdot.nextElementSibling;
		initialdot.classList.add("dot_selected");
		position+=1;
		console.log("position = "+position);
		image.setAttribute("src",slides[position-1].image);
		text.innerHTML= slides[position-1].tagLine;
	} 
);*/




