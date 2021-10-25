<script>
  import WebDevProject from "../components/WebDevProject.svelte";
  import { onMount } from "svelte";

  onMount(mounted);

  let projects = [];
  $: visibleProjects = projects.slice(0, expanded ? projects.length : 4);
  let expanded = false;

  async function mounted() {
    const response = await fetch("projects_web.json");
    projects = await response.json();
  }
</script>

<main
  id="web-development"
  class="main relative dark:bg-gray-900"
>
  <div
    data-aos="slide-down"
    data-aos-offset="200"
    class="hidden lg:block absolute left-14 top-0"
  >
    <div class="w-5 h-36 bg-gray-800 dark:bg-gray-50 mb-4" />
    <p
      class="text-gray-800 dark:text-gray-50 font-mono font-bold text-4xl text-right left-0 absolute"
    >
      011
    </p>
  </div>

  <section class="section relative">
    <div class="text-center">
      <div
        class="bg-white dark:bg-gray-800 p-10 mb-6 lg:mb-14 shadow-lg inline-block"
      >
        <h2 data-aos="fade-in" class="title mb-6 font-mono">
          &lt; Web development /&gt;
        </h2>
        <h5 data-aos="fade-in" class="subtitle max-w-xl">
          I have industry experience working as a fullstack web developer, here
          are some featured projects.
        </h5>
      </div>
    </div>

    {#each visibleProjects as project, index}
      <div class="py-16 lg:py-32">
        <WebDevProject {project} right={index % 2} />
      </div>
    {/each}

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
    class="hidden lg:block absolute right-14 bottom-0"
  >
    <div class="w-5 h-28 bg-gray-600 dark:bg-gray-300" />
  </div>
</main>
