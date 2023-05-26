// src/routes/+page.server.js
import { getContent } from '@builder.io/sdk-svelte';

export async function load({ page }) {
    if (!page) {
        page = []; // Set a default value if page is not provided
    }

    const urlPath = `/${page.join('/')}`;

    // fetch your Builder content
    const content = await getContent({
        model: 'home-page',
        apiKey: 'f5da03336afa4ae38846f28cf31d6032',
        userAttributes: {
            urlPath,
        },
    });

    // return content from `getContent()`
    return {
        props: {
            content,
        },
    };
}
