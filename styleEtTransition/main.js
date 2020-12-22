//Téléchargement de la 2.6.0 de Vue pour des raisons encore inconnus.
const app = new Vue({
    el:"#app",
    data() {
        return {
            title:"C joulie",
            text:"Du Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ea. Modi fugit blanditiis vitae minus officiis. Quia, delectus temporibus, deleniti atque repellat, iusto tempore animi sit beatae corporis earum eius!",
            verif: false,
            display: false,
        
        }
    }, 
    methods: {
        animate(){
            this.display= !this.display;
        }
    }
})