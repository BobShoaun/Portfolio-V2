<script>
	import WebDevProject from "../components/WebDevProject.svelte";
	import { onMount } from "svelte";

	function more() {
		projectsNum += 3;
	}

	onMount(mounted);

	let projects = [];
	$: visibleProjects = projects.slice(0, projectsNum);
	let projectsNum = 4;

	async function mounted() {
		let response = await fetch("projects_web.json");
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
		style="z-index: 0"
		class="bg-gray-50 bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 absolute right-0 w-1/2 h-full moving-gradient-y"
	/>

	<div data-aos="slide-down" data-aos-offset="200" class="hidden lg:block absolute right-14 top-0">
		<div class="w-5 h-36 bg-gray-800 dark:bg-gray-50 mb-6" />
		<p
			class="text-gray-800 dark:text-gray-50 font-mono font-bold text-4xl text-right right-0 absolute"
		>
			010
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

		<!-- <button
			on:click={more}
			class="py-1 px-4 bg-purple-300 border border-purple-500 hover:bg-purple-400 text-gray-700 rounded-sm block mx-auto mt-10 font-semibold font-mono"
		>
			See More
		</button> -->
	</section>

	<div data-aos="slide-up" data-aos-offset="200" class="hidden lg:block absolute left-14 bottom-0">
		<div class="w-5 h-28 bg-gray-600 dark:bg-gray-300" />
	</div>
</main>
