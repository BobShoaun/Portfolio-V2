<script>
	import Border from "./Border.svelte";
	export let project = null;
</script>

<main
	class="py-16 md:py-24 mx-4 xl:px-7 md:m-0 flex box-border {project.right
		? 'flex-row space-x-5'
		: 'flex-col'} md:max-w-{project.width}"
>
	<div
		data-aos="fade-left"
		class="mb-7 shadow-lg flex-shrink-0"
		style="height: fit-content; {project.right ? 'flex-basis: 40%' : ''}"
	>
		{#if project.video}
			<Border type={1}>
				<video autoplay loop muted playsinline src={project.video} class="p-2 lg:p-3 rounded-sm" />
			</Border>
		{:else}
			<Border type={1}>
				<img src={project.image} class="p-2 lg:p-3 rounded-sm" alt={project.name} />
			</Border>
		{/if}
	</div>

	<div class="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-xl" style="height: fit-content">
		<h1 data-aos="zoom-in-left" class="font-bold text-2xl dark:text-gray-50 mb-1">
			{project.name}
			<span class="font-light text-right text-xl dark:text-gray-300">{project.year}</span>
		</h1>
		<p
			data-aos="zoom-in-left"
			data-aos-delay="100"
			class="font-bold font-mono text-sm text-blue-500 dark:text-blue-300 mb-4"
		>
			{project.collaborators}
		</p>
		<p
			data-aos="zoom-in-left"
			data-aos-delay="200"
			class="mb-4 text-gray-700 dark:text-gray-300 text-base"
		>
			{project.description}
		</p>
		<p
			data-aos="zoom-in-left"
			data-aos-delay="300"
			class="text-sm font-semibold font-mono mb-4 text-green-500 dark:text-green-300"
		>
			{project.technologies.join(" // ")}
		</p>
		{#if project.github || project.website}
			<div data-aos="zoom-in-left" data-aos-delay="400" class="flex items-center justify-end">
				{#if project.github}
					<a
						href={project.github}
						target="_blank"
						class="shadow-md hover:shadow-lg transition-shadow rounded-md px-4 py-2 dark:bg-gray-700 bg-gray-200 flex items-center text-gray-800 dark:text-gray-50"
					>
						<p class="text-md">Github</p>
						<i class="fab fa-github ml-3 text-lg" /></a
					>
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
		{/if}
	</div>
</main>

<style>
</style>
