import instance from "./axios";

// banner
export const getBannerList = () => {
  return instance({
    url: "/bannerList",
  });
};

export const getNewsList = () => {
  return instance({
    url: "/newsList",
  });
};

export const getDetailList = (id: string) => {
  return instance.post("/detailList", {
    id,
  });
};
