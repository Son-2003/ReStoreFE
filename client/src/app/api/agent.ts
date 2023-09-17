import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://localhost:44351/api/";

//loading
const sleep = () => new Promise(resolve => setTimeout(resolve, 500));

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(async response => {
    await sleep();
    return response
}, (error: AxiosError)=>{
    const {data, status} = error.response as AxiosResponse;
    switch(status) {
        case 400:
            //handling validation error
            if(data.errors){
                const modelStateErrors: string [] = [];
                for (const key in data.errors) {
                    modelStateErrors.push(data.errors[key]);
                }
                throw modelStateErrors.flat();
            }
            toast.error(data.title);
            break;

        case 401:
            toast.error(data.title);
            break;

        case 500:
            toast.error(data.title);
            break;

        default:
            break;
    }
    return Promise.reject(error.response);
})

const request = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}

const Catalog = {
    list: () => request.get('Products'),
    details: (id: number) => request.get(`Products/${id}`), 
}

const TestErrors = {
    get404Error: () => request.get('Buggy/not-found'),
    get400Error: () => request.get('Buggy/bad-request'),
    get401Error: () => request.get('Buggy/unauthorized'),
    getValidationError: () => request.get('Buggy/validation-error'),
    get500Error: () => request.get('Buggy/server-error'),
}

const agent = {
    Catalog, TestErrors
}

export default agent;