import { getContent } from '@builder.io/sdk-svelte';

export async function load({route} : {route: {id: string}}) {
    const content = await getContent({
        model: 'page',
        apiKey: 'f5da03336afa4ae38846f28cf31d6032',
        userAttributes: {
            urlPath: route.id,
        },
    });

    return {
        content,
    };
}
