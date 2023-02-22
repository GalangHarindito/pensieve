import axios from "axios";
import { baseApiUrl } from "../config/baseUrl";
import { toast } from "react-toastify";

class HttpClient {
  constructor() {
    this.timeout = 120000;

    this.createApiUrl()
      .createHeaders()
      .createInstance()
      .requestInterceptor()
      .responseInterceptor();
  }

  createApiUrl() {
    this.apiUrl = baseApiUrl;
    return this;
  }

  createHeaders() {
    this.headers = {};
    return this;
  }

  addHeaders(headers) {
    this.headers = {
      ...this.headers,
      ...headers,
    };
    return this;
  }

  createInstance() {
    this.instance = axios.create({
      baseURL: this.apiUrl,
      timeout: this.timeout,
      headers: this.headers,
    });
    return this;
  }

  requestInterceptor() {
    // const session = this.session;
    this.instance.interceptors.request.use(
      function (config) {
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
    return this;
  }

  responseInterceptor() {
    // const session = this.session;

    this.instance.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        if (error.response) {
          toast.error(error.response.data.response.message, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
        return Promise.reject(error);
      }
    );

    return this;
  }

  get(url) {
    return this.instance.get(url);
  }

  post(url, data) {
    return this.instance.post(url, data);
  }
}

export const get = (url) => {
  return new HttpClient().get(url);
};

export const post = (url, data) => {
  return new HttpClient().post(url, data);
};
