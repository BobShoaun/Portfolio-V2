<script>
	import GameDevProject from "../components/GameDevProject.svelte";
	import { onMount } from "svelte";

	function more() {
		projectsNum += 4;
	}

	onMount(mounted);

	let projects = [];
	$: visibleProjects = projects.slice(0, projectsNum);
	let projectsNum = 4;

	async function mounted() {
		let response = await fetch("projects.json");
		projects = await response.json();
	}
</script>

<main
	id="game-development"
	class="main relative from-gray-100 to-white  dark:bg-gray-700 bg-gradient-to-b dark:from-gray-900 dark:to-gray-700"
>
	<div
		data-aos="slide-down"
		data-aos-delay="900"
		style="z-index: 0"
		class="from-white to-gray-200 bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 absolute right-0 w-1/2 h-full moving-gradient-y"
	/>

	<div data-aos="slide-down" data-aos-offset="200" class="hidden lg:block absolute left-14 top-0">
		<div class="w-5 h-36 bg-gray-800 dark:bg-gray-50 mb-6" />
		<p class="text-gray-800 dark:text-gray-50 font-mono font-bold text-4xl left-0 absolute">011</p>
	</div>

	<section class="section relative">
		<h2 data-aos="fade" class="title mb-6 text-center font-mono">/* Game development */</h2>
		<h5 data-aos="fade" class="subtitle mb-20 text-center max-w-xl mx-auto">
			Game development was what got me into coding in the first place, here are some featured
			projects.
		</h5>
		<!-- <video autoplay loop muted playsinline src="videos/doodle jump.mp4"></video> -->
		<div class="md:flex md:flex-wrap md:justify-between w-auto">
			<!-- {#if projects} -->
			{#each visibleProjects as project}
				<!-- <div class="m-auto"> -->
				<GameDevProject {project} />
				<!-- </div> -->
			{/each}
			<!-- {/if} -->
		</div>

		<button
			on:click={more}
			class="button-anim transition-colors py-1 px-4 bg-purple-200 border border-purple-400 hover:bg-purple-300 text-gray-700 rounded-sm block mx-auto mt-10 font-semibold font-mono"
		>
			See More
		</button>
	</section>
	<div data-aos="slide-up" data-aos-offset="200" class="hidden lg:block absolute right-14 bottom-0">
		<div class="w-5 h-28 bg-gray-600 dark:bg-gray-300" />
	</div>
</main>
