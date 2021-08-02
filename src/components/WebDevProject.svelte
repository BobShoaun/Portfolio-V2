<script>
	import Border from "./Border.svelte";

	export let project = null;
	export let right = false;
</script>

<main class="mx-4 lg:m-0 lg:flex lg:items-center justify-between">
	<div data-aos={right ? "fade-left" : "fade-right"} class="mb-7 shadow-lg">
		<Border>
			<div class="relative overflow-hidden m-2 lg:m-3 rounded-sm cursor-pointer img-container">
				<img
					data-aos={right ? "slide-right" : "slide-left"}
					data-aos-duration="700"
					data-aos-delay="100"
					src={project.image}
					alt={project.name}
					on:click={() => window.open(project.website)}
				/>
			</div>
		</Border>
	</div>

	<div class="{right ? 'lg:order-first lg:pr-28' : 'lg:pl-28'} lg:max-w-3/5">
		<h1
			data-aos={right ? "fade-right" : "fade-left"}
			class="text-2xl lg:text-3xl font-bold dark:text-gray-50 mb-1"
		>
			{@html project.name}
			<span class="font-light text-right text-xl lg:text-2xl dark:text-gray-300"
				>{project.year}</span
			>
		</h1>
		<p
			data-aos={right ? "fade-right" : "fade-left"}
			data-aos-delay="100"
			class="font-bold font-mono text-sm text-purple-600 dark:text-purple-300 mb-4"
		>
			{project.collaborators}
		</p>
		<p
			data-aos={right ? "fade-right" : "fade-left"}
			data-aos-delay="200"
			class="mb-4 text-gray-700 dark:text-gray-300 lg:text-lg"
		>
			{project.description}
		</p>

		<p
			data-aos={right ? "fade-right" : "fade-left"}
			data-aos-delay="300"
			class="text-sm font-mono font-semibold mb-6 text-red-400 dark:text-red-300"
		>
			{project.technologies.join(" // ")}
		</p>

		<div
			data-aos={right ? "fade-right" : "fade-left"}
			data-aos-delay="400"
			class="flex items-center justify-end"
		>
			{#if project.github}
				<a
					href={project.github}
					target="_blank"
					class="shadow-md hover:shadow-lg transition-shadow rounded-md px-4 py-2 dark:bg-gray-700 bg-gray-200 flex items-center text-gray-800 dark:text-gray-50"
				>
					<p class="text-md">Github</p>
					<i class="fab fa-github ml-3 text-lg" /></a
				>
			{:else}
				<button
					class="shadow-md rounded-md px-4 py-2 dark:bg-gray-700 bg-gray-200 flex items-center text-gray-500 dark:text-gray-400 cursor-not-allowed"
					disabled
				>
					<p class="text-md">Private</p>
					<i class="fas fa-code ml-3 text-lg" />
				</button>
			{/if}
			{#if project.website}
				<a
					href={project.website}
					target="_blank"
					class="flex items-center text-gray-800 dark:text-gray-50 ml-6"
				>
					<p class="text-md">Link</p>
					<i class="fas fa-external-link-alt ml-3 text-md" />
				</a>
			{/if}
		</div>
	</div>
</main>

<style>
	.img-container {
		opacity: 1;
		transition: opacity 500ms ease !important;
	}
	.img-container:is(:hover, :focus) {
		opacity: 0.4;
	}
</style>
