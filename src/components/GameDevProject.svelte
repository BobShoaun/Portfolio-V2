<script>
	import Border from "./Border.svelte";
	export let project = null;
</script>

<main
	class="py-16 md:py-28 mx-4 xl:px-10 md:m-0 flex box-border {project.right
		? 'flex-row space-x-10'
		: 'flex-col'} md:max-w-{project.width}"
>
	<div data-aos="fade-left" class="mb-7 shadow-lg" style="height: fit-content">
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
			class="font-bold font-mono text-sm text-blue-500 dark:text-blue-300 mb-6"
		>
			{project.collaborators}
		</p>
		<p
			data-aos="zoom-in-left"
			data-aos-delay="200"
			class="mb-5 text-gray-700 dark:text-gray-300 max-w-lg lg:text-lg xl:text-xl"
		>
			{project.description}
		</p>
		<p
			data-aos="zoom-in-left"
			data-aos-delay="300"
			class="text-md font-semibold font-mono mb-7 text-green-500 dark:text-green-300"
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
						<p class="text-lg">Github</p>
						<i class="fab fa-github ml-3 text-xl" /></a
					>
				{/if}
				{#if project.website}
					<a
						href={project.website}
						target="_blank"
						class="flex items-center text-gray-800 dark:text-gray-50 ml-6"
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
