<script lang="ts">
    import { RenderContent } from '@builder.io/sdk-svelte';

    // Add your Public API Key
    const YOUR_API_KEY = 'f5da03336afa4ae38846f28cf31d6032';

    export let data;
    const content = data?.content;
</script>

<main>
    {#if content}
        <RenderContent
                model="page"
                {content}
                apiKey={YOUR_API_KEY}
        />
    {:else}
        Content Not Found
    {/if}
</main>
