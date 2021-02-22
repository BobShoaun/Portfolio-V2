<script>
	import WebDevProject from "./WebDevProject.svelte";
	import { onMount } from "svelte";

	function more() {
		projectsNum += 3;
	}

	onMount(mounted);

	let projects = [];
	$: visibleProjects = projects.slice(0, projectsNum);
	let projectsNum = 3;

	async function mounted() {
		let response = await fetch("projects_web.json");
		projects = await response.json();
	}
</script>

<main id="web-development" class="main dark:bg-gray-700 bg-gradient-to-b dark:from-gray-900 dark:to-gray-700">
	<section class="section">
		<h2 data-aos="fade-in" class="title mb-2">Web development</h2>
		<h5 data-aos="fade-in" class="subtitle mb-20">
			Here are some web development projects i have worked on.
		</h5>

		{#each visibleProjects as project, index}
			<div class="mb-20 lg:mb-32">
				<WebDevProject
					image={project.image}
					name={project.name}
					collaborators={project.collaborators}
					description={project.description}
					technologies={project.technologies}
					website={project.website}
					github={project.github}
					right={index % 2}
				/>
			</div>
		{/each}

		<button
			on:click={more}
			class="py-2 px-4 bg-purple-400 text-white rounded-none block mx-auto mt-10 font-bold font-mono"
		>
			See More
		</button>
	</section>
</main>
