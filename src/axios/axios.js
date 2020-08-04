import axios from "axios";

//!const instance = axios.create({baseURL:"/.../.../"})
// instance.get("/foo")
// it is like a shortcut of "axios.get("/.../.../.../foo")"
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export function axiosCall(url) {
  const result = instance(url);
  return result;
}

export default instance;
