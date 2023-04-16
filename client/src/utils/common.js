export async function retryHandler(fn, retryCount = 3) {

    const waitDuration = 1000 * 5 * retryCount;
    if(retryCount <= 0) {
        return;
    }
    try{
        await fn;
        console.log("fn", fn);
    }catch(err){
        console.error(err);
        console.log("Attempting to retry", retryCount);

        setTimeout( () => { 
            retryHandler(fn, retryCount - 1)
        } , waitDuration  );
    }
}

export const createRequestHelper = (config) => {
    console.log(config)
    if(!config) throw new Error("You must provide a config");
    /**
     * shape of config
     * {
     *   baseUrl: string,
     *   useMock: boolean
     *   mockPath: string
     * }
     */
    
    return function(path) {
        // if useMock is true
        return  `${config.baseUrl}/${path}`
    }

}