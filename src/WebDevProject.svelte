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

<main class="lg:flex lg:items-center justify-around">
	<div data-aos="{right ? 'fade-left' : 'fade-right'}" class="mb-5 md:mb-0 image2">
		<Image src={image} alt={name} />
	</div>
	<div data-aos="{right ? 'fade-right' : 'fade-left'}" class="{right ? 'lg:order-first lg:pr-28' : 'lg:pl-28'}">
		<h1 class="text-xl font-bold lg:text-3xl dark:text-gray-50">{name}</h1>
		<p class="font-bold font-mono text-purple-700 dark:text-purple-400 mb-4">
			{collaborators}
		</p>
		<p class="mb-4 text-gray-700 dark:text-gray-300">{description}</p>

		<p class="font-mono font-semibold mb-4 dark:text-gray-100">
			{technologies.join(" // ")}
		</p>

		{#if github}
			<a href={github} target="_blank"
				><i class="text-gray-800 dark:text-gray-50 fa-lg fab fa-md fa-github mr-4" /></a
			>
		{/if}
		{#if website}
			<a href={website} target="_blank"
				><i class="text-gray-800 dark:text-gray-50 fa-lg fas fa-external-link-alt" /></a
			>
		{/if}
	</div>
</main>

<style>
  .image2 {
    /* max-width: 10rem; */
  }
</style>
