<template>
  <div class="demo">
    <div class="container">
      <div class="image">
        <img
          src=""
          alt=""
          data-src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590486071699&di=eb216e01e3a037a40e0393a5bb143ff6&imgtype=0&src=http%3A%2F%2Fdesk-fd.zol-img.com.cn%2Ft_s960x600c5%2Fg2%2FM00%2F04%2F07%2FCg-4WlWI0dGIbiyEAAIxyAQA6pQAAF1mAHKJKcAAjHg239.jpg"
        />
      </div>
      <div class="image">
        <img src="" alt="" data-src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3932093531,259615635&fm=26&gp=0.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
  const debounce = (fn, wait) => {
    let timer = null;
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn.apply(this);
      }, wait);
    };
  };
  export default {
    name: 'LazyLoad',
    mounted() {
      //   window.addEventListener(
      //     'scroll',
      //     debounce(() => {
      //       const images = document.querySelectorAll('img[data-src]');
      //       images.forEach((image) => {
      //         const top = image.getBoundingClientRect().top;
      //         if (top < document.documentElement.clientHeight && !image.getAttribute('src')) {
      //           const src = image.getAttribute('data-src');
      //           image.removeAttribute('data-src');
      //           image.setAttribute('src', src);
      //         }
      //       });
      //     }, 500)
      //   );
      const observer = new IntersectionObserver((changes) => {
        // changes: 目标元素集合
        changes.forEach((change) => {
          // intersectionRatio
          if (change.isIntersecting) {
            const img = change.target;
            img.src = img.dataset.src;
            observer.unobserve(img);
          }
        });
      });
      const images = document.querySelectorAll('img[data-src]');
      images.forEach((image) => {
        observer.observe(image);
      });
    },
  };
</script>

<style>
  .demo {
    border: 1px solid #eee;
    border-radius: 2px;
    padding: 25px 35px;
    margin-top: 1em;
    margin-bottom: 40px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .image {
    display: inline-block;
    width: 200px;
    height: 200px;
  }
</style>
