<script>
	import Image from "./Image.svelte";
	import { Link } from "svelte-routing";
</script>

<main id="about" class="bg-gray-100 dark:bg-gray-800">
	<section class="section flex flex-col items-center lg:flex-row justify-between space-y-20 lg:space-y-0">
		<div class="lg:mr-20 min-w-min max-w-sm">
			<Image src="images/me.jpg" alt="me" inverted cornerColor="bg-gray-100 dark:bg-gray-800" />
		</div>

		<div class="">
			<h2 class="title mb-5">About me</h2>
			<p class="text-gray-500 dark:text-gray-300 lg:text-lg mb-9">
				Hi, I’m Bob, a passionate software developer currently earning my degree in University of
				Toronto, alongside a part-time job as a web developer.
				<br /><br />
				I have started coding since the age of 14 and have since been driven to create and design quality,
				intuitive softwares for others to use. My expertise in software development lies in Unity game
				engine, C#, Python, and Vue. Besides coding, my hobbies include graphic designing, building computers
				and playing the drums.
			</p>
			<Link
				to="facts"
				class="px-4 py-2 inline-block leading-4 border-blue-400 border bg-blue-200 hover:bg-blue-300 rounded-none mr-3 text-gray-700 font-mono"
				noroute
			>
				<p class="text-gray-700 font-bold font-mono">
					Some fun facts about me <i class="fas fa-long-arrow-alt-right" />
				</p>
			</Link>
		</div>
	</section>
</main>
