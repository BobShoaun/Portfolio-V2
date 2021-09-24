<script>
  import GameDevProject from "../components/GameDevProject.svelte";
  import { onMount } from "svelte";

  onMount(mounted);

  let projects = [];
  $: visibleProjects = projects.slice(0, expanded ? projects.length : 5);
  let expanded = false;

  async function mounted() {
    const response = await fetch("projects.json");
    projects = await response.json();
  }
</script>

<main
  id="game-development"
  class="main relative from-gray-100 to-white  -dark:bg-gray-700 bg-gradient-to-b dark:from-gray-900 dark:to-gray-700"
>
  <!-- <div
    data-aos="slide-down"
    data-aos-delay="900"
    class="from-white to-gray-200 bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 absolute right-0 w-1/2 h-full moving-gradient-y z-0"
  /> -->

  <div
    data-aos="slide-down"
    data-aos-offset="200"
    class="hidden lg:block absolute right-14 top-0"
  >
    <div class="w-5 h-36 bg-gray-800 dark:bg-gray-50 mb-5" />
    <p
      class="text-gray-800 dark:text-gray-50 font-mono font-bold text-4xl right-0 absolute"
    >
      100
    </p>
  </div>

  <section class="section relative">
    <div class="text-center">
      <div
        class="bg-white dark:bg-gray-800 p-10 mb-6 lg:mb-14 shadow-lg inline-block"
      >
        <h2 data-aos="fade" class="title mb-6 font-mono">
          // Game development
        </h2>
        <h5 data-aos="fade" class="subtitle max-w-xl">
          Game development was what got me into coding in the first place, here
          are some featured projects.
        </h5>
      </div>
    </div>

    <div class="md:flex md:flex-wrap md:justify-around w-auto">
      {#each visibleProjects as project}
        <GameDevProject {project} />
      {/each}
    </div>

    <button
      on:click={() => (expanded = !expanded)}
      class="py-1 px-6 shadow-md transition-all hover:shadow-lg border-2 bg-transparent  border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white block mx-auto mt-10 font-mono focus:outline-none"
    >
      {#if expanded}
        <i class="fas fa-angle-up mr-2" />
        <span>Show Less</span>
      {:else}
        <i class="fas fa-angle-down mr-2" />
        <span>Show More</span>
      {/if}
    </button>
  </section>
  <div
    data-aos="slide-up"
    data-aos-offset="200"
    class="hidden lg:block absolute left-14 bottom-0"
  >
    <div class="w-5 h-28 bg-gray-600 dark:bg-gray-50" />
  </div>
</main>
