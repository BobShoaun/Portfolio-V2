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
    // console.log(projects)
	}
</script>

<main id="game-development" class="main relative dark:bg-gray-700 bg-gradient-to-b dark:from-gray-900 dark:to-gray-700">
  <div class="hidden lg:block absolute left-14 top-0">
		<div class="w-5 h-36 bg-gray-800 dark:bg-gray-50 mb-6" />

		<p
			class="text-gray-800 dark:text-gray-50 font-mono font-bold text-4xl left-0 absolute"
		>
			011
		</p>
	</div>
  <section class="section">
		<h2 data-aos="fade" class="title mb-6 text-center font-mono">/* Game development */</h2>
		<h5 data-aos="fade" class="subtitle mb-20 text-center max-w-xl mx-auto">
			Game development was what got me into coding in the first place. Here are some featured game dev projects I've worked on.
		</h5>
		<!-- <video autoplay loop muted playsinline src="videos/doodle jump.mp4"></video> -->
		<div class="md:flex md:flex-wrap md:justify-between w-auto">
      <!-- {#if projects} -->
			{#each visibleProjects as project}
				<!-- <div class="m-auto"> -->
					<GameDevProject
            project={project}
					/>
				<!-- </div> -->
        {/each}
        <!-- {/if} -->
		</div>

		<button
			on:click={more}
      class="py-1 px-4 bg-purple-200 border border-purple-500 hover:bg-purple-400 text-gray-700 rounded-sm block mx-auto mt-10 font-semibold font-mono"

		>
			See More
		</button>
	</section>
  <div class="hidden lg:block absolute right-14 bottom-0">
		<div class="w-5 h-28 bg-gray-800 dark:bg-gray-50" />
	</div>
</main>
