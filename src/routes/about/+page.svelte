<script>
    import { RenderContent } from '@builder.io/sdk-svelte';

    // Add your Public API Key
    const YOUR_API_KEY = 'f5da03336afa4ae38846f28cf31d6032';

    export let content;
</script>

<main>
    <h1>
        About Page
    </h1>

    {#if content}
        <!-- Render builder content with all required props -->
        <RenderContent
                model="about-page"
                {content}
                apiKey={YOUR_API_KEY}
        />
    {:else}
        Content Not Found
    {/if}
</main>
