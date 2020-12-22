// Il faut créer une instance de Vue et on lui donn en paramètre un objet
const app = new Vue({
  el: "#app", // On récupère l'élément que l'on va utiliser à l'aide d'un sélecteur CSS
  data: function () {
    return {
      title: "Welcome to my big Vue app :)",
      introduction:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iste aliquid eligendi repellendus, deserunt consequatur maxime quisquam tempore sint! Iste inventore beatae minus itaque impedit perspiciatis ratione ea architecto minima.",
      subTitle: "MerryChristmas",
      christmas: false, //La condition qui permet ou non d'afficher les sous-titres
      image: "./ressources/vintage-christmas-tree-with-gifts_23-2148759404.jpg",
      summer: 1,
      spring: 2, // Les conditions à remplir sont comme dans un if else classique, il ne passe pas à la suite tant que les conditions ne sont pas respectées.
      sale: false, // J'ai pas super bien compris la diff avec un if, à revoir
      products: [
        "Il était une fois",
        "Un génie du mal",
        "Très très méchant",
        "Fin",
        {
          item1: "livre de conte",
          item2: "tester",
        },
      ], //Et oui ça marche aussi avec des tableaux d'objets /o/
      computeTitle: "",
      count: "",
      property: "",
    };
  },
  methods: {
    //Création de séries de méthodes dans la variable methods
    alert(str) {
      console.log(this.property); //Ici la propriété property récupère ce qu'il y a dans l'input à chaque click. 
    },
  },
  computed: {
    //Une autre série de méthodes possible ici
    footerMessage() {
      return this.title + " " + this.subTitle;
      // Possible également d'écrire :
      //this.computeTitle = this.title + " " + this.subTitle;
      //return this.computeTitle; L'avantage ici c'est que l'action ne s'effectue qu'une fois et est sauvegardée par la suite. 
    },
  },
});
