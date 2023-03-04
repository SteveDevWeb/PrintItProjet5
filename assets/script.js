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

function nbOfDots(tab) {
	return(tab.length)
}

function createDots(DOMelt,tab){
	for (let i=0 ; i<nbOfDots(tab); i++){		
		let point = document.createElement("div")  //Selon la taille du tableau, on crée autant de div 
		point.classList.add("dot")  //On leur ajoute la class dot
		DOMelt.appendChild(point)  //On ajoute l'élément en tant qu'enfant de DOMelt
	}
}

createDots(document.querySelector('.dots'),slides)  //on appelle la fonction pour créer les points




const banniere = document.querySelector("#banner")
const dot=document.querySelector('.dots')
var position=0 //La position va nous servir à savoir on l'on se situe dans le caroussel



//////////////////////////////////// Fonctions ////////////////////////////////////

function setImage(DOMelt, tabelt) {
	const image = document.createElement("img") //On crée une balise img
	image.classList.add("banner-img") //On lui ajoute la class "banner-img"
	image.setAttribute("src",tabelt.image) //On lui met comme attribut src = slides[0].image, cad la propriété image du premier element du tableau slides( qui est le chemin relatif de l'image)
	DOMelt.appendChild(image) //On attribut a la div #banner l'enfant image qu'on vient de créer
}	

function setText(DOMelt, tabelt) {
	const text = document.createElement("p") //Idem pour la balise p
	text.innerHTML= tabelt.tagLine
	DOMelt.appendChild(text)
}

function setDotSelected(DOMelt) {
	DOMelt.classList.add("dot_selected")  //On ajoute la class dot_selected
} 
 
function setSlide(DOMbanner,DOMdot,tab, tabelt) {
	setImage(DOMbanner,tabelt)
	setText(DOMbanner,tabelt)
	setDotSelected(DOMdot)
}

function removeSlide(DOMelt,DOMdot) {
	DOMelt.removeChild(document.querySelector('.banner-img'));  //On supprime la balise image
	DOMelt.removeChild(document.querySelector('p'));  //On supprime le texte
	DOMdot.classList.remove('dot_selected')
} 




/////////Configuration de départ///////////


setSlide(banniere,dot.children[0],slides,slides[0])






///////// Les Event Listener sur les boutons //////////

const flechegauche = document.querySelector('.arrow_left') ;

flechegauche.addEventListener("click",function(e){
	removeSlide(banniere, dot.children[position])
	position = (position==0) ? position=slides.length-1 : position-1; //Si on est au premier slide et qu'on fait clic vers la gauche, on arrive a la derniere slide donc la position prend pas 0 mais le nombre de slide
	setSlide(banniere,dot.children[position],slides,slides[position])
})



const flechedroite = document.querySelector('.arrow_right') ;

flechedroite.addEventListener("click",function(e){
	removeSlide(banniere, dot.children[position])
	position = (position==slides.length-1) ? 0 : position+1;     //Si on est au dernier slide et qu'on fait clic vers la droite, on arrive a la premiere slide donc la position prend le nombre de slide
	setSlide(banniere,dot.children[position],slides,slides[position])
})