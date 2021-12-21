<script>
  import { Link } from "svelte-routing";
  import { blur, slide } from "svelte/transition";
  import { copyToClipboard } from "../helper";
  import { onMount } from "svelte";

  onMount(() => {
    // setTimeout(() => (ready = true), 500);
  });

  export let theme;

  $: welcomeMessage =
    theme === "dark" ? 'console.log("Hey")' : 'console.log("Hi")';
</script>

<main
  id="home"
  class="relative main bg-gray-100 h-screen flex bg-gradient-to-b dark:from-gray-700 dark:to-gray-900"
>
  <div
    data-aos="slide-down"
    data-aos-delay="700"
    data-aos-duration="700"
    class="absolute background top-0 right-0 h-1/2 w-full md:w-1/3 md:h-full moving-gradient-1"
  />

  <section
    data-aos="fade-in"
    data-aos-delay="600"
    class="m-auto pt-5 relative grow max-w-5xl"
  >
    <div
      class="bg-white dark:bg-gray-900 px-5 py-10 lg:py-14 lg:px-10 shadow-2xl"
    >
      <div
        data-aos="flip-up"
        data-aos-delay="600"
        data-aos-duration="700"
        class="bg-purple-400 dark:bg-purple-300 shadow-purple-300/60 shadow-lg w-8 h-1.5 lg:w-10 lg:h-2 ml-0.5 mb-8"
      />
      <h1
        data-aos="zoom-in-right"
        data-aos-delay="800"
        data-aos-duration="700"
        class="mb-3 font-mono text-2xl md:text-3xl lg:text-3xl font-extrabold text-gray-600 dark:text-white "
      >
        {welcomeMessage}
      </h1>
      <p
        data-aos="zoom-in-right"
        data-aos-delay="1000"
        data-aos-duration="700"
        class="font-mono text-lg md:text-xl lg:text-xl mb-12 font-bold text-gray-500 dark:text-gray-400 ml-1"
      >
        My name is Bob and I create nice things.
      </p>

      <div
        data-aos="flip-up"
        data-aos-delay="1200"
        data-aos-duration="700"
        class=""
      >
        <Link
          to="resume"
          class="transition-colors px-4 py-1 mr-3 lg:ml-1 inline-block bg-green-200 shadow-green-300/20 shadow-lg border rounded-sm border-green-400  hover:bg-green-300 "
          noroute
        >
          <p class="text-gray-700 font-semibold font-mono">View resume</p></Link
        >
        <a
          href="#contact"
          class="transition-colors px-4 py-1 inline-block bg-blue-200 shadow-blue-300/20 shadow-lg hover:bg-blue-300 rounded-sm border border-blue-400"
          ><p class="text-gray-700 font-semibold font-mono">Let's talk</p></a
        >
      </div>
    </div>
  </section>

  <div
    data-aos="slide-up"
    data-aos-delay="1500"
    data-aos-duration="700"
    class="hidden lg:block absolute left-14 bottom-0 text-center"
  >
    <a href="https://github.com/BobShoaun" target="_blank" class="block mb-6"
      ><i class="text-gray-800 dark:text-gray-50 fab fa-github fa-lg" /></a
    >
    <a
      href="https://www.linkedin.com/in/ngbobshoaun/"
      target="_blank"
      class="block mb-6"
    >
      <i class="text-gray-800 dark:text-gray-50 fab fa-linkedin-in fa-lg" /></a
    >

    <!-- <a
      href="https://www.instagram.com/n.bob.s/"
      target="_blank"
      class="block mb-8"
      ><i class="text-gray-800 dark:text-gray-50 fab fa-instagram fa-lg" /></a
    > -->

    <p
      on:click={() => copyToClipboard("ngbobshoaun2000@gmail.com")}
      class="block mb-6 cursor-pointer"
    >
      <i class="text-gray-800 dark:text-gray-50 far fa-envelope fa-lg" />
    </p>

    <!-- <a href="https://codepen.io/bobshoaun" target="_blank" class="block mb-8"
			><i class="text-gray-800 dark:text-gray-50 fab fa-codepen fa-lg" /></a
		> -->

    <div class="w-5 h-28 bg-gray-800 dark:bg-gray-50" />
  </div>

  <!-- <div class="absolute w-40 h-40 bg-transparent border-gray-300 border-8 top-64 right-64 design-element"></div> -->
  <p
    data-aos="fade-down"
    data-aos-delay="1500"
    data-aos-duration="700"
    on:click={() => document.getElementById("about").scrollIntoView()}
    class="text-2xl lg:text-3xl text-gray-700 dark:text-white cursor-pointer text-center absolute bottom-28 right-0 left-0"
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

  /* .design-element {

		background-size: 100% 200%;
		background-position: top;
		animation: gradient-animation-y 10s infinite alternate;
	} */

  /* 
  .design-element:hover, .design-element:focus {
    background-position: right;
  } */
</style>
