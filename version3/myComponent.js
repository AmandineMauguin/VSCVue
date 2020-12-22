app.component("mycomponent", {
    template: `
    <p>
        <button @click="addCount() ; sendToParent()">Clique, clique. {{count}}</button>
    </p>
    <h2>{{ $parent.title}}</h2>
    <h3>{{myprops}}</h3>`,
    props:{
        myprops:{
            type: String,
        },
    },
    data(){
        return {
            count:0,
        }
    },
    methods:{
        addCount(){
            this.count++;
        },
        sendToParent(){
            this.$emit("hello-parent", "I'm your child");
        }

    },
    computed:{

    }
});