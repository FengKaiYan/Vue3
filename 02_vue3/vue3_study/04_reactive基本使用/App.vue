<template>
  <h2>reactive的使用</h2>
  <h3>名字：{{user.name}}</h3>
  <h3>年龄：{{user.age}}</h3>
  <h3>老公:{{user.husband}}</h3>
  <hr>
  <button @click="updateUser">clik</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "App",
  // 显示用户相关信息，点击按钮，可以更新用户的相关信息数据

  /**
   * reactive
   * 作用: 定义多个数据的响应式
  const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
  响应式转换是“深层的”：会影响对象内部所有嵌套的属性
  内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
    */
  setup() {
    const obj = {
      name: "Bonnie",
      age: 16,
      husband: {
        name: "Bob",
        age: 20,
        cars: ["奔驰", "宝马"],
      },
    };
    // 返回的是一个proxy的代理对象 被代理的对象就是obj对象
    // user是代理对象 obj是目标对象
    const user = reactive(obj);

    console.log(user);

    const updateUser = () => {
      // 直接使用目标对象方式更新目标对象中的对象的值 不可以
      // 只能使用代理对象更新
      // obj.name = "cdafa";
      // obj.age += 9;
      user.name = "cidy";
      user.age += 3;
      user.husband.name = "popp";
      user.husband.cars[0] = "玛莎离地";
    };
    return {
      user,
      updateUser,
    };
  },
});
</script>
