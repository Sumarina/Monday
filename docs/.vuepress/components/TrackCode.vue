<template>
  <div></div>
</template>

<script>
  export default {
    name: 'TrackCode',
    created() {
      window._pt_lt = new Date().getTime();
      window._pt_sp_2 = [];
      _pt_sp_2.push('setAccount,522ee0bd');
      var _protocol = 'https:' == document.location.protocol ? ' https://' : ' http://';
      (function() {
        var atag = document.createElement('script');
        atag.type = 'text/javascript';
        atag.async = true;
        atag.src = _protocol + 'js.ptengine.cn/522ee0bd.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(atag, s);
      })();
    },
  };
</script>

<style></style>
