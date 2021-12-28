<script>
  import WebDevProject from "../components/WebDevProject.svelte";
  import SectionNumber from "../components/SectionNumber.svelte";
  import SectionHeader from "../components/SectionHeader.svelte";
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
  class="relative overflow-hidden bg-gray-100 bg-gradient-to-b dark:from-gray-900 dark:to-gray-800"
>
  <SectionHeader />
  <SectionNumber number="011" />

  <section class="main max-w-6xl pb-40 pt-32 mx-auto">
    <div class="space-y-40">
      {#each visibleProjects as project, index}
        <WebDevProject {project} right={index % 2} />
      {/each}
    </div>

    <button
      on:click={() => (expanded = !expanded)}
      class="py-2 px-4 mt-40 shadow-md font-semibold rounded-sm transition-color hover:shadow-lg border-2 bg-transparent  border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white block mx-auto focus:outline-none"
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
    class="hidden lg:block absolute shadow-xl right-14 bottom-0 w-5 h-28 bg-gray-400 dark:bg-gray-300"
  />
</main>
