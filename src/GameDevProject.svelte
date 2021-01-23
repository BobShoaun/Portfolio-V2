<script>
	import Image from "./Image.svelte";
	export let image = "images/pathforge.png";
	export let name = "awesome website";
	export let collaborators = "with some people";
	export let description = "none.";
	export let technologies = ["svelte", "tailwind css"];
	export let github = null;
	export let website = null;
</script>

<main class="py-16">
	<div class="mb-10">
    <Image src={image} alt={name} />
	</div>

	<div class="ml-5">
		<h1 class="font-bold text-3xl">{name}</h1>
		<p class="font-bold font-mono text-sm text-purple-700 mb-3">{collaborators}</p>
		<p class="text-md mb-4 text-gray-700">{description}</p>
		<p class="text-lg font-semibold font-mono mb-6">{technologies.join(" // ")}</p>

		{#if github}
			<a href={github} target="_blank"><i class="text-gray-800 fab fa-lg fa-github mr-4" /></a>
		{/if}
		{#if website}
			<a href={website} target="_blank"
				><i class="text-gray-800 fas fa-lg fa-external-link-alt" /></a
			>
		{/if}
	</div>
</main>
