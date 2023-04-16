import useSWR from "swr";
import { fetcher, getUrl } from "../core";

const pathBase = "/posts";

const generateResourceUrl = getUrl(pathBase);

/**
 * USage
 * const { data, error, isLoading } = useGetPosts(null)
 */

export const useGetPosts = (params) => {
    return useSWR(generateResourceUrl(params), fetcher)
}

