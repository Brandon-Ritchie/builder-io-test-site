// src/routes/+page.server.ts
import { getContent } from '@builder.io/sdk-svelte';

export async function load({ page }: {page: string[]}) {
    if (!page) {
        page = []; // Set a default value if page is not provided
    }

    const urlPath = `/${page.join('/')}`;

    // fetch your Builder content
    const content = await getContent({
        model: 'page',
        apiKey: 'f5da03336afa4ae38846f28cf31d6032',
        userAttributes: {
            urlPath,
        },
    });

    // return content from `getContent()`
    return {
        content,
    };
}
