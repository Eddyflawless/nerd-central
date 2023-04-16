import AppConfig from "../../app.config";

const { api: { baseUrl }, isMockMode } = AppConfig;

export const Api =  async ({ token, path, method , additionalHeaders = {}, options = {}}) => {

    if(isMockMode) {
        return 
    }

    const response = await fetch(`${baseUrl}/${path}`, {
        method,
        headers: { Authorization: `Bearer ${token}`, ...additionalHeaders },
        ...(options? options: undefined)
    });

    return response;
}

export default Api;