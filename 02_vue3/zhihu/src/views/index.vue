<template>
  <div class="Home">
    <Header :month="month"
            :day="day" />
    <Banner :bannerData="bannerData" />
    <NewsItem :news="newsData" />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, reactive, toRefs } from "vue";
import Header from "../components/Header.vue";
import Banner from "../components/Banner.vue";
import NewsItem from "../components/NewsItem.vue";
import { getBannerList, getNewsList } from "../api/index";
import utils from "../utils";
import { banner, newsItem } from "../types";
export default defineComponent({
  name: "",
  components: {
    Header,
    Banner,
    NewsItem,
  },
  setup() {
    const state = reactive({
      date: new Date(),
      bannerData: [] as banner[],
      newsData: [] as newsItem[],
    });
    const day = computed(() => utils.formatTime(state.date)[2]);
    const month = computed(() => utils.formatTime(state.date)[1]);
    // 后去banner数据
    const getBannerData = async () => {
      const res = await getBannerList();
      state.bannerData = res.data.data;
    };
    // 后去新闻列表数据
    const getNewsData = async () => {
      const res = await getNewsList();
      state.newsData = res.data.data;
    };

    onMounted(() => {
      getBannerData();
      getNewsData();
    });
    return {
      ...toRefs(state),
      day,
      month,
    };
  },
});
</script>

<style lang="scss" scoped>
.Home {
  width: 100%;
  height: 100%;
}
</style>