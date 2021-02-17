<script>
	import Image from "./Image.svelte";
	export let image = "images/pathforge.png";
	export let video = null;
	export let name = "awesome website";
	export let collaborators = "with some people";
	export let description = "none.";
	export let technologies = ["svelte", "tailwind css"];
	export let github = null;
	export let website = null;
</script>

<main class="py-16">
	<div data-aos="fade-up" class="mb-10">
		{#if video}
			<video autoplay loop muted playsinline src={video} />
		{:else}
			<!-- <Image src={image} alt={name} /> -->
			<img src={image} class="object-contain" alt={name} />
		{/if}
	</div>

	<div data-aos="fade-down" class="">
		<h1 class="font-bold text-2xl lg:text-3xl dark:text-gray-50">{name}</h1>
		<p class="font-bold font-mono text-sm text-purple-700 mb-3 dark:text-purple-400">
			{collaborators}
		</p>
		<p class="text-md mb-3 text-gray-700 dark:text-gray-300">{description}</p>
		<p class="text-md font-semibold font-mono mb-4 dark:text-gray-50">
			{technologies.join(" // ")}
		</p>
		{#if github || website}
			<div class="float-right">
				{#if github}
					<a href={github} target="_blank"
						><i class="text-gray-800 dark:text-gray-50 fab fa-lg fa-github mr-4" /></a
					>
				{/if}
				{#if website}
					<a href={website} target="_blank"
						><i class="text-gray-800 dark:text-gray-50 fas fa-lg fa-external-link-alt" /></a
					>
				{/if}
			</div>
			<div class="clear-right" />
		{/if}
	</div>
</main>
