import getConfig from "next/config";

const {serverRuntimeConfig} = getConfig()

export const fetchCrudCollection = async ({endpoint, query = ''} : {endpoint: string, query?: string}) => {
    try {
        const data = await fetch(`${serverRuntimeConfig?.CRUD_PATH}/${endpoint}?${query}`, { 
            next: { revalidate: 5 },
            headers: {
                'Cache-Control': 'public, max-age=3600',
            }
        })
        return data.json()
    } catch (error) {
        console.error("Error:", error);
    }

}