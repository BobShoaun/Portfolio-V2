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

<section
  id="web-development"
  class="relative overflow-hidden snap-center bg-gray-100 bg-gradient-to-b dark:from-gray-900 dark:to-gray-800"
>
  <SectionHeader
    wrapperClasses="moving-gradient-1"
    headingText="WEB DEVELOPMENT"
    subtitleText="My projects are driven by passion and creativity. Here are some of my featured works that showcase my skills and expertise."
  />
  <!-- subtitleText="I have industry experience working as a fullstack web developer, here are some featured projects." -->
  <SectionNumber number="011" />

  <section class="main max-w-7xl py-20 md:pb-40 md:pt-32 mx-auto">
    <div class="space-y-20 md:space-y-40">
      {#each visibleProjects as project, index}
        <WebDevProject {project} right={index % 2} />
      {/each}

      <button
        on:click={() => (expanded = !expanded)}
        class="w-full flex items-center gap-2 group font-semibold text-gray-700 dark:text-gray-100"
      >
        <hr class="flex-1 mr-2 border-gray-400 dark:border-gray-500" />
        {#if expanded}
          <i class="fas fa-angle-up" />
          <span class="group-hover:underline">Less Projects</span>
        {:else}
          <i class="fas fa-angle-down" />
          <span class="group-hover:underline">More Projects</span>
        {/if}
        <hr class="flex-1 ml-2 border-gray-400 dark:border-gray-500" />
      </button>
    </div>
  </section>

  <div
    data-aos="slide-up"
    data-aos-offset="200"
    class="hidden lg:block absolute shadow-xl right-14 bottom-0 w-4 h-28 bg-gray-400 dark:bg-gray-300"
  />
</section>
