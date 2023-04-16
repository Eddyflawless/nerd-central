import AppConfig from "../app.config";
import { RETRY_COUNT, RETRY_DELAY_IN_SECONDS} from "./constants";
const { api: { baseUrl } } = AppConfig;

const generateBasePath = (path) => !!path ? `${baseUrl}/${path}`: baseUrl;

export const getUrl = (path) => (params) => generateBasePath(path) + params

// refactor this code to use await instead of imperative promise
export const fetcher = (...args) => fetch(...args).then((response) => response.json());

const dontRetryOnErrorStatusCodes = [400, 400]; // can have more


// should be used with a toggle
const retryOnError = (error, revalidate, { retryCount }) => {

    if(!error || retryCount >= RETRY_COUNT || dontRetryOnErrorStatusCodes.includes(error?.status)) return;

    setTimeout(() => revalidate({ retryCount}), 1000 * RETRY_DELAY_IN_SECONDS)

}
export const transformSWRResponse = ( { data, isLoading, error, revalidate  } ) => ({  data, isLoading, isError: error, revalidate });