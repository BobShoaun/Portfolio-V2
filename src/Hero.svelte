<script>
	import { Link } from "svelte-routing";
	import { blur, slide } from "svelte/transition";
	import { onMount } from "svelte";

	let ready = true;
	onMount(() => {
		// setTimeout(() => (ready = true), 500);
	});

	export let dark;

	$: welcomeMessage = dark ? 'console.log("Hey");' : 'console.log("Hi");';
</script>

<main
	id="home"
	class="relative main bg-gray-100 h-screen flex bg-gradient-to-b dark:from-gray-700 dark:to-gray-900"
>
	<div
		data-aos="slide-down"
		data-aos-delay="900"
		class="absolute background right-0 w-2/5 lg:w-1/3 h-full moving-gradient-y"
	/>

	<!-- <div class="background absolute bg-gray-100" /> -->

	<!-- <section class="min-h-screen flex"> -->
	<section class="section w-full z-50 max-w-5xl">
		<div class="bg-white dark:bg-gray-900 px-5 py-10 lg:py-20 lg:px-10 shadow-2xl">
			<div
				data-aos="flip-up"
				data-aos-delay="700"
				class="bg-purple-400 w-8 h-1.5 lg:w-10 lg:h-2 ml-0.5 mb-2"
			/>
			<!-- {#if ready} -->
			<h1
				data-aos="zoom-in-right"
				data-aos-delay="900"
				class="font-mono text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-600 dark:text-white mb-5"
			>
				{welcomeMessage}
			</h1>
			<p
				data-aos="zoom-in-right"
				data-aos-delay="1100"
				class="font-mono text-lg md:text-xl lg:text-2xl mb-10 font-bold text-gray-500 dark:text-gray-400 ml-1"
			>
				// I'm Ng Bob Shoaun. I write good code with good designs.
			</p>
			<!-- {/if} -->
			<!-- <a
          type="button"
          href="/images/resume.pdf"
          target="_blank"
          class="ml-1 py-2 px-4 border-green-400 border bg-green-200 hover:bg-green-300 rounded-none mr-3">
          <p class="text-gray-700 font-mono">View resume</p>
        </a> -->
			<div
				data-aos="flip-up"
				data-aos-delay="1300"
				class=""
			>
				<Link
					to="resume"
					class="px-4 py-2 lg:ml-1 inline-block leading-4 bg-green-200 border rounded-sm border-green-400  hover:bg-green-300 mr-3 text-gray-700 font-mono"
					noroute
				>
					<p class="text-gray-700 font-semibold font-mono">View resume</p></Link
				>
				<a
					type="button"
					href="#contact"
					class="px-4 py-2 inline-block bg-blue-200 hover:bg-blue-300 rounded-sm border border-blue-400"
					><p class="text-gray-700 font-semibold font-mono leading-4">Let's talk</p></a
				>
			</div>
		</div>
	</section>

	<div class="hidden lg:block absolute left-14 bottom-0 text-center">
		<a href="https://github.com/BobShoaun" target="_blank" class="block mb-8"
			><i class="text-gray-800 dark:text-gray-50 fab fa-github fa-lg" /></a
		>
		<a href="https://www.linkedin.com/in/ngbobshoaun/" target="_blank" class="block mb-8">
			<i class="text-gray-800 dark:text-gray-50 fab fa-linkedin-in fa-lg" /></a
		>

		<a href="https://www.instagram.com/n.bob.s/" target="_blank" class="block mb-8"
			><i class="text-gray-800 dark:text-gray-50 fab fa-instagram fa-lg" /></a
		>

		<div class="w-5 h-28 bg-gray-800 dark:bg-gray-50" />
	</div>

	<!-- <div class="absolute w-40 h-40 bg-transparent border-gray-300 border-8 top-64 right-64 design-element"></div> -->
	<p
		data-aos="fade-down"
		data-aos-delay="2000"
		on:click={() => document.getElementById("about").scrollIntoView()}
		class="text-xl lg:text-3xl text-gray-700 dark:text-white cursor-pointer text-center absolute bottom-28 right-0 left-0"
	>
		<i class="hover-vertical fas fa-angle-down" />
	</p>
</main>

<style>
	.background {
		transform: rotate(20deg);
		/* height: 2000px; */
		/* width: 250px; */
		/* right: 500px; */
		/* top: -500px; */
		/* z-index: -1; */
	}
	
	.design-element {
		/* border-radius: 5px; */

		background-size: 100% 200%;
		background-position: top;
		animation: gradient-animation-y 10s infinite alternate;
	}
	

	/* 
  .design-element:hover, .design-element:focus {
    background-position: right;
  } */


</style>
