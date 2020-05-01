// (function () {
//   window.addEventListener(
//     'scroll',
//     debounce(() => {
//       const image = document.getElementById('image');
//       const top = image.getBoundingClientRect().top;
//       if (top < document.documentElement.clientHeight && !image.getAttribute('src')) {
//         const src = image.getAttribute('data-src');
//         image.removeAttribute('data-src');
//         image.setAttribute('src', src);
//       }
//     }, 500)
//   );
//   // window.onscroll = debounce(() => {
//   //   const image = document.getElementById('image');
//   //   const top = image.getBoundingClientRect().top;
//   //   if (top < document.documentElement.clientHeight && !image.getAttribute('src')) {
//   //     const src = image.getAttribute('data-src');
//   //     image.removeAttribute('data-src');
//   //     image.setAttribute('src', src);
//   //   }
//   // }, 500);
// })();

(function () {
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
  const image = document.getElementById('image');
  observer.observe(image);
})();
