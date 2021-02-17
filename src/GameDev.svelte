<script>
	import GameDevProject from "./GameDevProject.svelte";
	import { onMount } from "svelte";

	function more() {
    projectsNum += 2;
	}

	onMount(mounted);

	let projects = [];
  $: visibleProjects = projects.slice(0, projectsNum);
  let projectsNum = 3;

	async function mounted() {
		let response = await fetch("projects.json");
		projects = await response.json();
	}
</script>

<main id="game-development" class="main dark:bg-gray-700">
	<section class="section">
		<h2 data-aos="fade" class="title mb-2">Game development</h2>
		<h5 data-aos="fade" class="subtitle mb-20">
			Game development was what got me into coding in the first place.
		</h5>
		<!-- <video autoplay loop muted playsinline src="videos/doodle jump.mp4"></video> -->
		<div class="md:flex md:flex-wrap md:justify-around">
			{#each visibleProjects as project}
				<div class="md:w-72">
					<GameDevProject
						image={project.image}
						video={project.video}
						name={project.name}
						collaborators={project.collaborators}
						description={project.description}
						technologies={project.technologies}
						github={project.github}
					/>
				</div>
			{/each}
		</div>

		<button
			on:click={more}
			class="py-2 px-4 bg-purple-400 text-white rounded-none block mx-auto mt-10 font-bold font-mono"
		>
			See More
		</button>
	</section>
</main>
