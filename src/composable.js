import { ref, onUnmounted } from "vue";

export function useMediaQuery(query) {
  const match = window.matchMedia(query);
  const isMatching = ref(match.matches);

  match.addEventListener(
    "change",
    (event) => (isMatching.value = event.matches)
  );

  onUnmounted(() => match.removeEventListener("change"));

  return isMatching;
}
