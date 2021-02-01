<script>
    import Image from "./Image.svelte";
    export let image = "images/doodle jump.gif";
    export let name = "awesome game";
    export let collaborators = "with some people";
    export let description = "none.";
    export let technologies = ["unity", "c#"];
    export let github = null;
    export let website = null;
    export let right = false;
</script>

<main class="md:flex items-center justify-around py-16">
  <div class="mb-10 md:mb-0">
  <Image src={image} alt={name} />
</div>  
    <div class="{right ? 'md:order-first md:pr-28' : 'md:pl-28' } ml-5">
        <h1 class="font-bold text-3xl dark:text-gray-50">{name}</h1>
        <p class="font-bold font-mono text-sm text-purple-700 dark:text-purple-400 mb-3">{collaborators}</p>
        <p class="text-md mb-4 text-gray-700 dark:text-gray-300">{description}</p>

        <p class="text-lg font-mono font-semibold mb-6 dark:text-gray-100">{technologies.join(' // ')}</p>

        {#if github}
            <a href={github} target="_blank"><i
                    class="text-gray-800 dark:text-gray-50 fa-lg fab fa-md fa-github mr-4" /></a>
        {/if}
        {#if website}
            <a href={website} target="_blank"><i
                    class="text-gray-800 dark:text-gray-50 fa-lg fas fa-external-link-alt" /></a>
        {/if}
    </div>
</main>
