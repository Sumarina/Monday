<template>
  <div class="demo">
    <img class="hidden" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3932093531,259615635&fm=26&gp=0.jpg" alt="image preload" />
  </div>
</template>

<script>
  export default {
    name: 'preLoad',
    mounted() {
      this.createImage();
      this.getImageByAjax();
    },
    methods: {
      createImage() {
        const image = new Image();
        image.src = 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3932093531,259615635&fm=26&gp=0.jpg';
      },
      getImageByAjax() {
        const xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.open('GET', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3932093531,259615635&fm=26&gp=0.jpg');
        xmlHttpRequest.onload = (state) => {
          console.info(state, xmlHttpRequest.response);
        };
        xmlHttpRequest.send();
      },
    },
  };
</script>

<style>
  .hidden {
    display: none;
  }
</style>
