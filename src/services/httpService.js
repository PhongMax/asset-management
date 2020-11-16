import axios from "axios";
// import logger from "./logService";
// import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    // logger.log(error);
    // từ từ xử lý nè... login toast các kiểu nè.
    // toast.error("An unexpected error occurrred.");
  }

  return Promise.reject(error);
});

// đối với Protected API, cần phải có token đi  kèm, nên cài đặt mỗi lần gửi request thì gán nó vào phần header..
function setJwt(jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
  console.log(axios);

  console.log(
    "Đã vào hàm setJWT" + axios.defaults.headers.common["Authorization"]
  );
}
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
