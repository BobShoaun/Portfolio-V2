<script>
	import Image from "./Image.svelte";
	import Border from "./Border.svelte";
	import { Link } from "svelte-routing";
</script>

<main
	id="about"
	class="main relative bg-gray-50 bg-gradient-to-b dark:from-gray-800 dark:to-gray-700"
>
	<div
		data-aos="flip-up"
		data-aos-delay="900"
		class="bg-gradient-to-b from-red-400 to-purple-400 absolute background left-0 w-1/3 lg:w-1/4 h-full moving-gradient-y"
	/>

	<div class="hidden lg:block absolute left-14 top-0 text-center">
		<div class="w-5 h-28 bg-gray-50 mb-6" />

		<p class="text-gray-100 font-mono font-bold text-4xl">001</p>
	</div>

	<section
		class="section flex flex-col items-center lg:flex-row justify-between space-y-20 lg:space-y-0"
	>
		<div data-aos="zoom-in-left" class="lg:mr-20 min-w-min max-w-sm m-10 lg:m-0">
			<!-- <Border> -->
			<img src="images/me.jpg" alt="me" class="rounded-sm shadow-xl " />
			<!-- </Border> -->
		</div>

		<div class="bg-white dark:bg-gray-900 p-5 lg:p-10 shadow-2xl relative">
			<h2 data-aos="zoom-in-left" class="title mb-5">About me</h2>
			<p
				data-aos="zoom-in-left"
				data-aos-delay="100"
				class="text-gray-500 dark:text-gray-300 lg:text-lg mb-9"
			>
				Hi, I’m Bob, a passionate software developer currently earning my degree in University of
				Toronto, alongside a part-time job as a web developer.
				<br /><br />
				I have started coding since the age of 14 and have since been driven to create and design quality,
				intuitive softwares for others to use. My expertise in software development lies in Unity game
				engine, C#, Python, and Vue. Besides coding, my hobbies include graphic designing, building computers
				and playing the drums.
			</p>
			<!-- <Link
				data-aos="fade-left"
				to="facts"
				class="px-4 py-2 inline-block leading-4 border-blue-400 border bg-blue-200 hover:bg-blue-300 rounded-sm mr-3 text-gray-700 font-mono"
				noroute
			>
				<p class="text-gray-700 font-bold font-mono">
					Some fun facts about me <i class="fas fa-long-arrow-alt-right" />
				</p>
			</Link> -->
		</div>
	</section>

  <div class="hidden lg:block absolute right-14 bottom-0">
		<div class="w-5 h-28 bg-gray-800 dark:bg-gray-50" />
	</div>
</main>
