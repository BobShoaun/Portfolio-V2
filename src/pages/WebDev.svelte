<script>
  import WebDevProject from "../components/WebDevProject.svelte";
  import { onMount } from "svelte";
  import axios from "axios";

  onMount(mounted);

  let projects = [];
  $: visibleProjects = projects.slice(0, expanded ? projects.length : 4);
  let expanded = false;

  async function mounted() {
    const { data } = await axios("/projects_web.json");
    projects = data;
  }
</script>

<main
  id="web-development"
  class="-main relative bg-gradient-to-b dark:from-gray-900 dark:to-gray-800"
>
  <div
    data-aos="slide-down"
    data-aos-offset="200"
    class="hidden lg:block absolute left-14 top-0"
  >
    <div class="w-5 h-36 bg-gray-800 dark:bg-gray-800 mb-2" />
    <p
      class="text-gray-800 dark:text-gray-800 font-mono font-bold text-3xl text-right left-0 absolute"
    >
      011
    </p>
  </div>
  <section class="moving-gradient-1 pt-24 pb-20 text-center">
    <div class="flg:ml-40 bg-gray-900 shadow-xl p-10 inline-block w-fit">
      <h2 class="text-6xl mb-2 font-black text-gray-200">WEB DEVELOPMENT</h2>
      <p class="lg:ml-3 text-lg text-gray-200 max-w-prose font-semibold">
        I have industry experience working as a fullstack web developer, here
        are some featured projects.
      </p>
    </div>
  </section>

  <section class="main py-40">
    <!-- <div class="text-center">
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
    </div> -->

    <div class="space-y-32">
      {#each visibleProjects as project, index}
        <WebDevProject {project} right={index % 2} />
      {/each}
    </div>

    <button
      on:click={() => (expanded = !expanded)}
      class="py-2 px-4 mt-40 shadow-md rounded-sm transition-color hover:shadow-lg border-2 bg-transparent  border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white block mx-auto focus:outline-none"
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
