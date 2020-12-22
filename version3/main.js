const RootComponent = {
    data() {
        return {
            title: "HIIIIIII",
            property: "Are you there ?",
        }
    },
    methods: {
        wakeUp(str){
            alert("ui " + str);
        },
        created(){
            console.log("Created");
        },
        beforeUpdate(){
            console.log("beforeupdate");
        }
    }
};
const app = Vue.createApp(RootComponent);

// Etape pour rajouter un composant : 
// 1 --- Le crée dans une page js à part 
// 2 --- Mettre une balise script dans le html pour le lier : <script src="moncomposant">
// 3 --- Ajouter la balise <script> const vm = app.mount("#app");</script> 


