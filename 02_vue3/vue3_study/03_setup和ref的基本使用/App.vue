<template>
  <h2>setup和ref的基本使用</h2>
  <h3>{{count}}</h3>
  <button @click="updateCount">点击</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",
  // 打开页面开到数据 点击按钮 更新数据
  // vue2
  // data(){
  //   return {
  //     count:0
  //   }
  // },
  // methods:{
  // updateCount(){
  //   this.count = 3
  // }
  // }
  // vue3
  // setup是组合api的入口函数
  setup() {
    // 变量
    // let count = 0; //此时数据不是响应式（数据变化，页面跟着渲染变化）
    // ref是一个函数， 作用:定义一个响应式数据 返回的是ref对象 对象中
    // 有一个value 如果对数据进行操作 就要调动改对象的value属性进行操作
    // html不需要.value
    // 一般用来定义一个基本类型的响应式数据
    // count是Ref类型
    const count = ref(0);
    console.log(count);
    function updateCount() {
      // count是一个Ref对象
      count.value++;
    }
    return {
      // 属性
      count,
      updateCount,
    };
  },
});
</script>
