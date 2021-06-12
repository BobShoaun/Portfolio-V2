<script>
	import Border from "./Border.svelte";
	export let project = null;
</script>

<main
	class="py-20 mx-4 md:m-0 flex {project.right
		? 'flex-row space-x-10'
		: 'flex-col'} md:max-w-{project.width}"
>
	<div data-aos="fade-left" class="mb-7 shadow-lg">
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

	<div>
		<h1 data-aos="zoom-in-left" class="font-bold text-2xl lg:text-3xl dark:text-gray-50 mb-1.5">
			{project.name}
		</h1>
		<p
			data-aos="zoom-in-left"
			data-aos-delay="100"
			class="font-bold font-mono text-sm text-purple-600 dark:text-purple-300 mb-6"
		>
			{project.collaborators}
		</p>
		<p
			data-aos="zoom-in-left"
			data-aos-delay="200"
			class="mb-7 text-gray-700 dark:text-gray-300 max-w-lg  lg:text-lg xl:text-xl"
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
