import axios from 'axios'
export const state = () => ({
    videoDetails : []
})

export const mutations = {
    setVideo(state, video){
        state.videoDetails = video
    }
}

export const actions = {
    async getVideo({commit},vidLink){
        const video = await axios.get("/api/singlestreamj/?link="+vidLink)
        commit("setVideo" , video.data)
    }
}