<script>
    import ProjectImage from "./ProjectImage.svelte";
    export let image = "images/doodle jump.gif";
    export let name = "awesome game";
    export let collaborators = "with some people";
    export let description = "none.";
    export let technologies = ["unity", "c#"];
    export let right = false;
</script>

<main class="flex items-center justify-around py-16">
    <ProjectImage {image} alt={name} />

    <div class={right ? 'order-first pr-28' : 'pl-28'}>
        <h1 class="font-bold text-2xl">{name}</h1>
        <p class="font-bold text-sm text-purple-700 mb-3">{collaborators}</p>
        <p class="text-md mb-4">{description}</p>

        <p class="text-lg font-semibold">{technologies.join(' // ')}</p>
    </div>
</main>
