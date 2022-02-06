import { onUnmounted, ref, onMounted } from "vue";
export default function () {
  const x = ref(-1),
    y = ref(-1);
  const clickHandler = (event: MouseEvent) => {
    x.value = event.x;
    y.value = event.y;
  };
  onMounted(() => {
    window.addEventListener("click", clickHandler);
  }),
    onUnmounted(() => {
      window.removeEventListener("click", clickHandler);
    });
  return {
    x,
    y,
  };
}
