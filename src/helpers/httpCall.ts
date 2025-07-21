export const httpCall = async <T = any>({ url, method = "POST", data, }: { url: string; method?: "GET" | "POST" | "PUT" | "PATCH"; data?: any; }): Promise<T> => {
    const isBodyMethod = ["POST", "PUT", "PATCH"].includes(method);
    const response = await fetch(url, {
        method,
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        redirect: "follow",
        ...(isBodyMethod ? { body: data } : {})
    });

    if (!response.ok) {
        const errorBody = await response.text().catch(() => "");
        throw new Error(`HTTP error! ${response.status} - ${errorBody}`);
    }

    return response.json() as Promise<T>;
};
