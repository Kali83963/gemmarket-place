// HttpService.ts
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

class HttpService {
  private static instance: HttpService;
  private axiosInstance: AxiosInstance;

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "", // optional baseURL
      withCredentials: true, // enables sending cookies
    });

    // Request logging
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        console.log(
          `[HTTP Request] ${config.method?.toUpperCase()} ${config.url}`
        );
        if (config.data) {
          console.log(`[Request Data]:`, config.data);
        }
        return config;
      },
      (error) => {
        console.error(`[Request Error]:`, error);
        return Promise.reject(error);
      }
    );

    // Optional: Response logging
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        console.log(
          `[HTTP Response] ${response.status} ${response.config.url}`
        );
        return response;
      },
      (error) => {
        console.error(
          `[Response Error]:`,
          error.response?.data || error.message
        );
        return Promise.reject(error);
      }
    );
  }

  public static getInstance(): HttpService {
    if (!HttpService.instance) {
      HttpService.instance = new HttpService();
    }
    return HttpService.instance;
  }

  public get<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get<T>(url, config);
  }

  public post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post<T>(url, data, config);
  }

  public put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.put<T>(url, data, config);
  }

  public delete<T = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.delete<T>(url, config);
  }
}

export default HttpService;
