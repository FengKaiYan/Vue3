<template>
  <div class="swipe-content">
    <van-swipe class="my-swipe"
               :autoplay="3000">
      <van-swipe-item v-for="(item,index) in bannerData"
                      :key="index">
        <img :src="item.img"
             class="img"
             alt="">
        <h5 style="position: absolute; bottom: 2rem; ">{{item.title}}</h5>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { banner } from "../types";

export default defineComponent({
  name: "Banner",
  props: {
    bannerData: {
      type: Array as PropType<banner[]>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.swipe-content {
  margin-top: 6rem;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 1rem;
  line-height: 6rem;
  text-align: center;
  background-color: #fff;
}
</style>