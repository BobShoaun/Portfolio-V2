<script>
    import ProjectImage from "./ProjectImage.svelte";
    export let image = "images/pathforge.png";
    export let name = "awesome website";
    export let collaborators = "with some people";
    export let description = "none.";
    export let technologies = ["svelte", "tailwind css"];
</script>

<main class="py-16">
    <div class="mb-10">
        <ProjectImage {image} alt={name} />
    </div>

    <div class="ml-5">

        <h1 class="font-bold text-2xl">{name}</h1>
        <p class="font-bold text-sm text-purple-700 mb-3">{collaborators}</p>
        <p class="text-md mb-4">{description}</p>
        <p class="text-lg font-semibold">{technologies.join(' // ')}</p>
    </div>

</main>
