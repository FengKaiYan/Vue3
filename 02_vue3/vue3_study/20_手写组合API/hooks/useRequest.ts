import axios from "axios";
import { ref } from "vue";
export default function <T>(url: string) {
  const loading = ref(true),
    data = ref<T | null>(null),
    errMsg = ref("");

  axios
    .get(url)
    .then((response: { data: any }) => {
      loading.value = false;
      data.value = response.data;
    })
    .catch((e: { message: string }) => {
      loading.value = false;
      errMsg.value = e.message || "未知错误";
    });
  return {
    loading,
    data,
    errMsg,
  };
}
