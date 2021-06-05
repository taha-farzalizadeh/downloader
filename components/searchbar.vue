<template>
    <div>
        <div class="container">
            <form class="row justify-content-center searchbar" @submit.prevent="findVideo()">
                <span v-if="emptyInput">Incorrect input!</span>
                <input v-model="inputLink" class="col col-10 customInput" id="test1" type="text" placeholder="Copy video link here!"> 
                <a @click="findVideo()" class="btn"><fa :icon="['fas', 'search']" /></a>
            </form>
        </div>
        <loading v-if="showLoad"/>
    </div>
</template>

<script>
export default {
    data(){
        return{
            inputLink:'',
            emptyInput:false,
            showLoad:false
        }
    },
    methods:{
        async findVideo(){
            const test=this.inputLink.trim()
            if(test==''){
                const input = document.querySelector('.customInput')
                if(input){
                    input.classList.add('empty')
                    this.emptyInput =true
                }
            }
            else{
                const input = document.querySelector('.customInput')
                if(input){
                    input.classList.remove('empty')
                    this.emptyInput = false
                }
                try{
                    this.showLoad=true
                    await this.$store.dispatch("getVideo",this.inputLink)
                    this.showLoad=false
                }catch (error){
                    const input = document.querySelector('.customInput')
                    if(input){
                        input.classList.add('empty')
                        this.emptyInput =true
                    }
                    this.showLoad=false
                }
            }
        }
    }
}
</script>