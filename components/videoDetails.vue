<template>
    <div v-if="videoDetails.length!=0" class="container">
        <div class="details-card">
            <div class="details-header">
                <h4>Video Details</h4>
            </div>
            <div class="details-body row">
                <div class="video-img col col-lg-5 col-md-12">
                    <img :src="this.videoDetails.thumbnail" alt="">
                </div>
                <div class="video-info col-lg-7 col-md-12">
                    <div class="pt-3">
                        <strong>
                            video title: 
                        </strong>
                        <br>
                        <p>
                            {{videoDetails.title}}
                        </p>
                    </div>
                </div>
            </div>
            <form>
                <select v-model="selectedRes" id="select-type" required>
                    <option disabled value="">Please select resolution</option>
                    <option v-for="anyVid in videoDetails.stream_list" :key="anyVid.index" :value="anyVid.url">
                        <template v-if="anyVid.type=='video'">
                            {{anyVid.type}},{{anyVid.resolution}},{{anyVid.subtype}},{{anyVid.fps}}fps
                        </template>
                        <template v-else>
                            {{anyVid.type}},{{anyVid.subtype}},{{anyVid.abr}}
                        </template>
                    </option>
                </select>
            </form>
            <div class="text-center video-down-buttons">
                <a @click.prevent="download()" class="btn btn-primary down-but">Download</a>
                <a @click.prevent="copyText()" class="btn btn-primary link-but">Link</a>
            </div>
        <div class="copyNotif">
            <p>Link copied to Clipboard!</p>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            videoDetails:[],
            selectedRes:''
        }
    },
    methods:{
        download(){
            if(this.selectedRes==""){
                document.querySelector("#select-type").classList.add("empty")
            }
            else{
                document.querySelector("#select-type").classList.remove("empty")
                window.open(this.selectedRes, '_blank')
            }
        },
        copyText(){
            if(this.selectedRes==""){
                document.querySelector("#select-type").classList.add("empty")
            }
            else{
                document.querySelector("#select-type").classList.remove("empty")
                navigator.clipboard.writeText(this.selectedRes)
                const notif = document.querySelector(".copyNotif")
                if(notif){
                    notif.classList.add("show")
                    setTimeout(()=>{
                        notif.classList.remove("show")
                    },2000)
                }
                
            }
        }
    },
    watch:{
        '$store.state.videoDetails':{
            handler(){
                this.videoDetails = this.$store.state.videoDetails
            },
            deep:true
        }
    }
}
</script>