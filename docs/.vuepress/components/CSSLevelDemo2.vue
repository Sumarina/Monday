<template>
  <div class="demo2">
    <div class="box" id="box">
      <p>hello world</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CSSLevelDemo2',
  };
</script>

<style>
  .demo2 {
    width: 100%;
  }
  /*权重值 100 */
  .demo2 #box {
    color: white;
  }

  /*权重值 11 */
  .demo2 .box p {
    color: black;
  }

  .demo2 .box {
    margin: 20px auto;
    width: 100px;
    height: 100px;
    background-color: red;
  }
  .demo2 .box {
    margin: 20px auto;
    width: 100px;
    height: 100px;
    background-color: yellowgreen;
  }
</style>
