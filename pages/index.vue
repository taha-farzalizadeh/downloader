<template>
  <div class="first-page-body">
    <div v-if="show" class="center-logo">
      <img src="@/static/icon152.png" alt="icon">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show:false
    }
  },
  mounted(){
    this.show=true
    setTimeout(()=>{
      this.$router.push('/home')
    },2000)
  }
}
</script>
