<script>
	// import Image from "./Image.svelte";
	import Border from "./Border.svelte";

	export let image = "images/doodle jump.gif";
	export let name = "awesome game";
	export let collaborators = "with some people";
	export let description = "none.";
	export let technologies = ["unity", "c#"];
	export let github = null;
	export let website = null;
	export let right = false;
</script>

<main class="mx-4 lg:m-0 lg:flex lg:items-center justify-between">
	<div data-aos={right ? "fade-left" : "fade-right"} class="mb-5">
		<Border>
			<img src={image} alt={name} class="p-2 lg:p-3 rounded-sm" />
		</Border>
	</div>
	<!-- <div data-aos={right ? "fade-left" : "fade-right"} class="mb-5">
		<Image src={image} alt={name} />
	</div> -->
	<div class={right ? "lg:order-first lg:pr-28" : "lg:pl-28"}>
		<h1
			data-aos={right ? "fade-right" : "fade-left"}
			class="text-2xl font-bold lg:text-3xl dark:text-gray-50"
		>
			{name}
		</h1>
		<p
			data-aos={right ? "fade-right" : "fade-left"}
			data-aos-delay="100"
			class="font-bold font-mono text-sm text-purple-700 dark:text-purple-400 mb-4"
		>
			{collaborators}
		</p>
		<p
			data-aos={right ? "fade-right" : "fade-left"}
			data-aos-delay="200"
			class="mb-3 text-gray-700 dark:text-gray-300"
		>
			{description}
		</p>

		<p
			data-aos={right ? "fade-right" : "fade-left"}
			data-aos-delay="300"
			class="text-md font-mono font-semibold mb-4 dark:text-gray-100"
		>
			{technologies.join(" // ")}
		</p>

		{#if github || website}
			<div data-aos={right ? "fade-right" : "fade-left"} data-aos-delay="400" class="float-right">
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
			<div class="clear-right" />
		{/if}
	</div>
</main>

<style>
</style>
