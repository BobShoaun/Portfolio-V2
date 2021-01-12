<script>
    import ProjectImage from "./ProjectImage.svelte";
    export let image = "images/doodle jump.gif";
    export let name = "awesome game";
    export let collaborators = "with some people";
    export let description = "none.";
    export let technologies = ["unity", "c#"];
    export let github = null;
    export let website = null;
    export let right = false;
</script>

<main class="flex items-center justify-around py-16">
    <ProjectImage {image} alt={name} />

    <div class={right ? 'order-first pr-28' : 'pl-28'}>
        <h1 class="font-bold text-2xl">{name}</h1>
        <p class="font-bold text-sm text-purple-700 mb-3">{collaborators}</p>
        <p class="text-md mb-4">{description}</p>

        <p class="text-lg font-semibold mb-3">{technologies.join(' // ')}</p>

        {#if github}
            <a href={github} target="_blank"><i
                    class="text-gray-800 fab fa-lg fa-github mr-2" /></a>
        {/if}
        {#if website}
            <a href={website} target="_blank"><i
                    class="text-gray-800 fas fa-lg fa-external-link-alt" /></a>
        {/if}
    </div>
</main>
