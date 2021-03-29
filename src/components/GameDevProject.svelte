<script>
	import Border from "./Border.svelte";
	export let project = null;
</script>

<main
	class="py-16 mx-4 md:m-0 flex {project.right
		? 'flex-row space-x-10'
		: 'flex-col'} md:max-w-{project.width}"
>
	<div data-aos="fade-left" class="mb-10 shadow-lg">
		{#if project.video}
			<Border secondary>
				<video autoplay loop muted playsinline src={project.video} class="p-2 lg:p-3 rounded-sm" />
			</Border>
		{:else}
			<Border secondary>
				<img src={project.image} class="p-2 lg:p-3 rounded-sm" alt={project.name} />
			</Border>
		{/if}
	</div>

	<div>
		<h1 data-aos="zoom-in-left" class="font-bold text-2xl lg:text-3xl dark:text-gray-50">
			{project.name}
		</h1>
		<p
			data-aos="zoom-in-left"
			data-aos-delay="100"
			class="font-bold font-mono text-sm text-purple-700 mb-3 dark:text-purple-400"
		>
			{project.collaborators}
		</p>
		<p
			data-aos="zoom-in-left"
			data-aos-delay="200"
			class="text-md mb-3 text-gray-700 dark:text-gray-300 max-w-lg"
		>
			{project.description}
		</p>
		<p
			data-aos="zoom-in-left"
			data-aos-delay="300"
			class="text-md font-semibold font-mono mb-4 dark:text-gray-50"
		>
			{project.technologies.join(" // ")}
		</p>
		{#if project.github || project.website}
			<div data-aos="zoom-in-left" data-aos-delay="400" class="float-right">
				{#if project.github}
					<a href={project.github} target="_blank" class="text-xl"
						><i class="text-gray-800 dark:text-gray-50 fab fa-github" /></a
					>
				{/if}
				{#if project.website}
					<a href={project.website} target="_blank" class="text-lg"
						><i class="text-gray-800 dark:text-gray-50 fas fa-external-link-alt ml-5" /></a
					>
				{/if}
			</div>
			<div class="clear-right" />
		{/if}
	</div>
</main>

<style>
</style>
