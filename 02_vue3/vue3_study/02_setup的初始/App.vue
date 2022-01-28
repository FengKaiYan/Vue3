<template>
    <div>Bonnie</div>
    <h1>{{number}}</h1>  
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
//   测试代码 setup是组合api中第一个使用的函数
//   setup(){
//       const number = 10
//       return{
//           number
//       }
//   }
});
</script>
