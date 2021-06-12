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
	// export let privateRepo = true;
	export let right = false;
</script>

<main class="mx-4 lg:m-0 lg:flex lg:items-center justify-between">
	<div data-aos={right ? "fade-left" : "fade-right"} class="mb-7 shadow-lg">
		<Border>
			<img src={image} alt={name} class="p-2 lg:p-3 rounded-sm" />
		</Border>
	</div>
	<!-- <div data-aos={right ? "fade-left" : "fade-right"} class="mb-5">
		<Image src={image} alt={name} />
	</div> -->
	<div class="{right ? 'lg:order-first lg:pr-28' : 'lg:pl-28'} lg:max-w-3/5">
		<h1
			data-aos={right ? "fade-right" : "fade-left"}
			class="text-2xl font-bold lg:text-3xl dark:text-gray-50 mb-1.5"
		>
			{@html name}
		</h1>
		<p
			data-aos={right ? "fade-right" : "fade-left"}
			data-aos-delay="100"
			class="font-bold font-mono text-sm text-purple-600 dark:text-purple-300 mb-6"
		>
			{collaborators}
		</p>
		<p
			data-aos={right ? "fade-right" : "fade-left"}
			data-aos-delay="200"
			class="mb-5 text-gray-700 dark:text-gray-300 lg:text-lg xl:text-xl"
		>
			{description}
		</p>

		<p
			data-aos={right ? "fade-right" : "fade-left"}
			data-aos-delay="300"
			class="text-sm font-mono font-semibold mb-7 dark:text-red-300"
		>
			{technologies.join(" // ")}
		</p>

		{#if github || website}
			<div
				data-aos={right ? "fade-right" : "fade-left"}
				data-aos-delay="400"
				class="flex items-center justify-end"
			>
				{#if github}
					<a
						href={github}
						target="_blank"
						class="shadow-md hover:shadow-lg transition-shadow rounded-md px-4 py-2 dark:bg-gray-700 bg-gray-200 flex items-center text-gray-800 dark:text-gray-50 mr-6"
					>
						<p class="text-lg">Github</p>
						<i class="fab fa-github ml-3 text-xl" /></a
					>
				{:else}
					<div class="flex items-center text-gray-400 dark:text-gray-500 mr-6">
						<p class="text-lg">Private</p>
						<i class="fas fa-code ml-3 text-xl" />
					</div>
				{/if}
				{#if website}
					<a
						href={website}
						target="_blank"
						class="flex items-center text-gray-800 dark:text-gray-50"
					>
						<p class="text-lg">Link</p>
						<i class="fas fa-external-link-alt ml-3 text-lg" />
					</a>
				{/if}
			</div>
		{/if}
	</div>
</main>

<style>
</style>
