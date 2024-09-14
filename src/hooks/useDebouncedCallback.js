import { useMemo } from "react";
import debounce from "../utils/debounce";

export default function useDebouncedCallback(callback, delay) {
  return useMemo(() => debounce(callback, delay), [callback, delay]);
}
