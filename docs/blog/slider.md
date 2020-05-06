# slider

断断续续写了差不多两周，终于搞定了。
写的比较简单，先看效果图。
开始我想的太简单了，总认为用 jquery 的 slider 就可以搞定。
实际上自己写的一套完整组件怎么能用 jquery 呢？
尝试用原生 JavaScript 搞定。
整个组件分为三块：灰色背景条、左侧绿色背景条以及拖拽的结点。
在拖拽的结点上绑定 mousedown 事件，再拖拽的时候全局注册 mouseto 事件，mouseup 的时候移除全局注册的事件。部分代码如下：

```html
mousedown: function(event) { event.preventDefault(); this.onDragStart(event); window.addEventListener("mousemove", this.onDraging);
window.addEventListener("mouseup", this.onDragEnd); },
```

在拖拽的过程中要随时计算当前的位置。

```html
onDraging: function(event) { if (this.draging) { let clientX = event.clientX; //compute the diff of draging. let diff = ((clientX - this.startX) /
this.sliderSize) * 100; this.resetSliderSize(); this.newPosition = this.startPosition + diff; this.setPosition(this.newPosition); } }
```

最关键的点是如何计算当前的位置，首先拖拽到的新位置一定是在[0-100]范围，一定要排除其他乱七八糟的位置。
我们把结点当作一个人，拖拽就是走路。
先计算出我们每走一步有多长，得出 lengthPerSteps。
我们已经走了多长的路也就是对应 newposition，通过 newPostion / lengthPerSteps 计算出我们走了多少步。
（走的步数\*每一步的长度\*单位值+最小值）的出来的 value 是对应的 slider 的 value。

```html
setPosition: function(newPostion) { if (newPostion < 0) { newPostion = 0; } else if (newPostion > 100) { newPostion = 100; } //compute the length of one step.
let lengthPerSteps = 100 / ((this.max - this.min) / this.steps); //the counts of step let steps = newPostion / lengthPerSteps; //get value,means current
position let value = steps * lengthPerSteps * (this.max - this.min) * 0.01 + this.min; this.value = value.toFixed(0); this.oldValue = value; }
```

拖拽完成后移除全局注册的事件。
完整代码如下：

```html
<template>
  <div class="m-slider" ref="slider">
    <div class="m-slider__left" :style="barStyle" @click="onClickJump"></div>
    <div class="m-slider__background" @click="onClickJump"></div>
    <div class="m-slider__wrapper" @mousedown="mousedown" :style="{left:currentPosition}">
      <div class="m-slider__wrapper--point"></div>
    </div>
  </div>
</template>

<script>
  import './Slider.css';

  export default {
    name: 'MSlider',
    props: {
      defalutValue: {
        type: Number,
        default: 0,
      },
      isVertical: {
        //if the slider is vertical
        type: Boolean,
        default: false,
      },
      steps: {
        type: Number,
        default: 1,
      },
      min: {
        type: Number,
        default: 0,
      },
      max: {
        type: Number,
        default: 100,
      },
    },
    data() {
      return {
        vertical: false,
        draging: false,
        startX: 0,
        startPosition: 0,
        newPosition: 0,
        oldValue: this.defalutValue,
        value: this.defalutValue,
        sliderSize: 1,
      };
    },
    computed: {
      currentPosition: function() {
        return `${((this.value - this.min) / (this.max - this.min)) * 100}%`;
      },
      barStyle: function() {
        return {
          width: this.currentPosition,
          top: 0,
        };
      },
    },
    methods: {
      mousedown: function(event) {
        event.preventDefault();
        this.onDragStart(event);
        //register event
        window.addEventListener('mousemove', this.onDraging);
        window.addEventListener('mouseup', this.onDragEnd);
      },
      onDragStart: function(event) {
        this.draging = true; //start draging
        this.startX = event.clientX; //get start clientX
        this.startPosition = parseFloat(this.currentPosition); //convert the string to number
        this.newPosition = this.startPosition;
      },
      onDraging: function(event) {
        if (this.draging) {
          let clientX = event.clientX;
          //compute the diff of draging.
          let diff = ((clientX - this.startX) / this.sliderSize) * 100;
          this.resetSliderSize();
          this.newPosition = this.startPosition + diff;
          this.setPosition(this.newPosition);
        }
      },
      onDragEnd: function(event) {
        this.draging = false;
        window.removeEventListener('mousemove', this.onDraging);
        window.removeEventListener('mouseup', this.onDragEnd);
      },
      onClickJump: function(event) {
        let offsetLeft = this.$refs.slider.getBoundingClientRect().left;
        this.setPosition(((event.clientX - offsetLeft) / this.sliderSize) * 100);
      },
      setPosition: function(newPostion) {
        if (newPostion < 0) {
          newPostion = 0;
        } else if (newPostion > 100) {
          newPostion = 100;
        }
        //compute the length of one step.
        let lengthPerSteps = 100 / ((this.max - this.min) / this.steps);
        //the counts of step
        let steps = newPostion / lengthPerSteps;
        //get value,means current position
        let value = steps * lengthPerSteps * (this.max - this.min) * 0.01 + this.min;
        this.value = value.toFixed(0);
        this.oldValue = value;
      },
      resetSliderSize: function() {
        this.sliderSize = this.$refs.slider[`client${this.vertical ? 'Height' : 'Width'}`];
      },
    },
    mounted() {
      this.resetSliderSize();
      window.addEventListener('resize', this.resetSliderSize);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.resetSliderSize);
    },
  };
</script>
```
