<template>
  <div class="demo">
    <div class="box">
      <p class="box2">
        <span>hello world</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CSSLevelDemo',
  };
</script>

<style>
  .demo {
    width: 100%;
  }
  .demo .box {
    margin: 20px auto;
    width: 100px;
    height: 100px;
    background-color: red;
  }
  /*权重值 11 */
  .demo .box2 span {
    color: black;
  }
  /*权重值 11 */
  .demo .box span {
    color: white;
  }

  .demo div {
    margin: 20px auto;
    width: 100px;
    height: 100px;
    background-color: green;
  }
</style>
