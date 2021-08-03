<script>
	import WebDevProject from "../components/WebDevProject.svelte";
	import { onMount } from "svelte";

	onMount(mounted);

	let projects = [];
	$: visibleProjects = projects.slice(0, expanded ? projects.length : 4);
	let expanded = false;

	async function mounted() {
		const response = await fetch("projects_web.json");
		projects = await response.json();
	}
</script>

<main
	id="web-development"
	class="main relative bg-gradient-to-b dark:from-gray-900 dark:to-gray-800"
>
	<div
		data-aos="slide-down"
		data-aos-delay="900"
		class="bg-gray-50 bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 absolute right-0 w-1/2 h-full moving-gradient-y z-0"
	/>

	<div data-aos="slide-down" data-aos-offset="200" class="hidden lg:block absolute left-14 top-0">
		<div class="w-5 h-36 bg-gray-800 dark:bg-gray-50 mb-5" />
		<p
			class="text-gray-800 dark:text-gray-50 font-mono font-bold text-4xl text-right left-0 absolute"
		>
			011
		</p>
	</div>

	<section class="section relative">
		<h2 data-aos="fade-in" class="title mb-6 text-center font-mono">&lt; Web development /&gt;</h2>
		<h5 data-aos="fade-in" class="subtitle mb-20 text-center max-w-xl mx-auto">
			I have industry experience working as a fullstack web developer, here are some featured
			projects.
		</h5>

		{#each visibleProjects as project, index}
			<div class="py-16 lg:py-32">
				<WebDevProject {project} right={index % 2} />
			</div>
		{/each}

		<button
			on:click={() => (expanded = !expanded)}
			class="button-anim transition-colors py-1 px-8 shadow-lg hover:shadow-xl bg-purple-300 border border-purple-400 hover:bg-purple-200 text-gray-800 rounded-sm block mx-auto mt-10 font-bold focus:outline-none"
		>
			{expanded ? "Show Less" : "Show More"}
		</button>
	</section>

	<div data-aos="slide-up" data-aos-offset="200" class="hidden lg:block absolute right-14 bottom-0">
		<div class="w-5 h-28 bg-gray-600 dark:bg-gray-300" />
	</div>
</main>
