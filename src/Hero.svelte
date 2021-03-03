<script>
	import { Link } from "svelte-routing";
	import { blur, slide } from "svelte/transition";
	import { onMount } from "svelte";

	let ready = true;
	onMount(() => {
		// setTimeout(() => (ready = true), 500);
	});

	export let dark;

	$: welcomeMessage = dark ? "Hey there." : "Hello there.";
</script>

<main
	id="home"
	class="relative main bg-gray-50 h-screen flex bg-gradient-to-b dark:from-gray-700 dark:to-gray-900"
>
	<!-- <div class="background absolute bg-gray-100" /> -->

	<!-- <section class="min-h-screen flex"> -->
	<section class="section w-full flex flex-col-reverse justify-between lg:flex-row">
		<div class="hero">
			<div data-aos="flip-up" data-aos-delay="700" class="bg-purple-400 w-8 h-1.5 lg:w-10 lg:h-2 ml-0.5 mb-2" />
			<!-- {#if ready} -->
			<h1
      data-aos="zoom-in-right" data-aos-delay="900"
				class="-animate__animated -animate__fadeIn text-5xl md:text-6xl lg:text-6xl font-extrabold text-gray-600 dark:text-white mb-2"
			>
				{welcomeMessage}
			</h1>
			<p
      data-aos="zoom-in-right" data-aos-delay="1100"
				class="-animate__animated -animate__fadeInDown text-lg md:text-xl lg:text-2xl mb-10 font-bold text-gray-500 dark:text-gray-400 ml-1"
			>
				I am Ng Bob Shoaun. I write good code with good designs.
			</p>
			<!-- {/if} -->
			<!-- <a
          type="button"
          href="/images/resume.pdf"
          target="_blank"
          class="ml-1 py-2 px-4 border-green-400 border bg-green-200 hover:bg-green-300 rounded-none mr-3">
          <p class="text-gray-700 font-mono">View resume</p>
        </a> -->
			<div data-aos="flip-up" data-aos-delay="1300" class="-animate__animated -animate__fadeInDown animate__delay-0.5s">
				<Link
					to="resume"
					class="px-4 py-2 mb-3 lg:ml-1 inline-block leading-4 bg-green-200 border rounded-sm border-green-400  hover:bg-green-300 mr-3 text-gray-700 font-mono"
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
		<div
    data-aos="flip-up" data-aos-delay="900"
			class="bg-gradient-to-b via-green-300 from-indigo-400 to-blue-400 rounded-sm w-full h-16 mb-6 lg:m-0 lg:w-60 lg:h-60 moving-gradient-y"
		/>
	</section>

	<!-- <div class="absolute w-40 h-40 bg-transparent border-gray-300 border-8 top-64 right-64 design-element"></div> -->
	<p
		data-aos="fade-down"
    data-aos-delay="2000"
		on:click={() => document.getElementById("about").scrollIntoView()}
		class="text-xl lg:text-3xl text-gray-700 dark:text-white cursor-pointer text-center absolute bottom-28 right-0 left-0"
	>
		<i class="fas fa-angle-down" />
	</p>
</main>

<style>
	.background {
		transform: rotate(45deg);
		height: 2000px;
		width: 250px;
		right: 500px;
		top: -500px;
		z-index: -1;
	}
	:root {
		--gradient: linear-gradient(45deg, #818cf8, #60a5fa, #6ee7b7, #60a5fa, #818cf8);
	}
	.design-element {
		/* border-radius: 5px; */

		background-size: 100% 200%;
		background-position: top;
		animation: gradient-animation-y 10s infinite alternate;
	}
	.moving-gradient-y {
		background-image: var(--gradient);
		background-size: 400% 400%;
		background-position: top;
		animation: gradient-animation-y 10s infinite ease-in-out;
	}
	.moving-gradient-x {
		background-size: 500%;
		background-position: left;
		animation: gradient-animation-x 10s infinite alternate;
	}

	.moving-gradient-x:hover,
	.moving-gradient-x:focus {
		animation: gradient-animation-x 2s infinite alternate;
	}
	/* 
  .design-element:hover, .design-element:focus {
    background-position: right;
  } */

	@keyframes gradient-animation-y {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	@keyframes gradient-animation-x {
		0% {
			background-position: left;
		}
		100% {
			background-position: right;
		}
	}
</style>
