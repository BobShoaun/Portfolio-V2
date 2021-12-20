<script>
  import Border from "./Border.svelte";

  export let project = null;
  export let right = false;
</script>

<main>
  <section
    class="mx-4 sm:mx-14 lg:mx-0 lg:flex lg:items-center lg:justify-between"
  >
    <div class="mb-7 shadow-lg">
      <Border>
        <div
          class="relative overflow-hidden m-2 sm:m-3 cursor-pointer img-container"
        >
          <img
            data-aos={right ? "slide-right" : "slide-left"}
            data-aos-duration="500"
            data-aos-delay="100"
            src={project.image}
            alt={project.name}
            on:click={() => window.open(project.website)}
          />
        </div>
      </Border>
    </div>

    <div class="{right ? 'lg:order-first lg:pr-16' : 'lg:pl-16'} lg:max-w-3/5">
      <h1
        data-aos={right ? "fade-right" : "fade-left"}
        class="text-2xl lg:text-3xl font-bold dark:text-gray-50 mb-1"
      >
        {@html project.name}
        <span
          class="font-light text-right text-xl lg:text-2xl dark:text-gray-300"
          >{project.year}</span
        >
      </h1>
      <p
        data-aos={right ? "fade-right" : "fade-left"}
        data-aos-delay="100"
        class="font-bold font-mono text-sm text-purple-600 dark:text-purple-300 mb-4"
      >
        {project.collaborators}
      </p>
      <p
        data-aos={right ? "fade-right" : "fade-left"}
        data-aos-delay="200"
        class="mb-4 text-gray-700 dark:text-gray-300 lg:text-base"
      >
        {project.description}
      </p>

      <p
        data-aos={right ? "fade-right" : "fade-left"}
        data-aos-delay="300"
        class="text-sm font-mono font-semibold mb-8 text-red-400 dark:text-red-300"
      >
        {project.technologies.join(" // ")}
      </p>

      <div
        data-aos={right ? "flip-up" : "flip-up"}
        data-aos-delay="400"
        class="flex flex-wrap items-center justify-end gap-4"
      >
        {#if project.github}
          <a
            href={project.github}
            target="_blank"
            class="shadow-md hover:shadow-lg transition-shadow rounded-md px-4 py-2 dark:bg-gray-700 bg-gray-200 flex items-center text-gray-800 dark:text-gray-50"
          >
            <p class="text-md">Github</p>
            <i class="fab fa-github ml-3 text-lg" /></a
          >
        {:else}
          <button
            class="shadow-md rounded-md px-4 py-2 dark:bg-gray-700 bg-gray-200 flex items-center text-gray-500 dark:text-gray-400 cursor-not-allowed"
            disabled
          >
            <p class="text-md">Private</p>
            <i class="fas fa-code ml-3 text-lg" />
          </button>
        {/if}
        {#if project.website}
          <a
            href={project.website}
            target="_blank"
            class="flex px-2 py-2 items-center text-gray-800 dark:text-gray-50"
          >
            <p class="text-md">Link</p>
            <i class="fas fa-external-link-alt ml-3 text-md" />
          </a>
        {/if}
      </div>
    </div>
  </section>
  {#if project.more}
    <section data-aos="fade-up" class="mx-2 sm:mx-4">
      <a
        href={project.more}
        class="mt-20 block relative text-gray-700 dark:text-white cursor-pointer featured-article "
      >
        <em class="block mb-2"
          ><i class="fas fa-newspaper mr-2 text-lg" />Featured Article</em
        >
        <hr class="mb-4 border-gray-400" />
        <h1 class="text-2xl lg:text-3xl font-bold mb-3">
          How I Made My Own Cryptocurrency
        </h1>
        <p class="text-gray-500 dark:text-gray-300 mb-6">
          by Ng Bob Shoaun &nbsp;∙&nbsp; 2 August 2021 &nbsp;∙&nbsp; 8 minute
          read
        </p>
        <div class="text-center" data-aos="flip-up" data-aos-delay="100">
          <a
            href={project.more}
            class="font-bold shadow-md hover:shadow-lg transition-shadow rounded-sm px-4 py-2 bg-purple-300 text-gray-800"
          >
            Click Here to Read
          </a>
        </div>
      </a>
    </section>
  {/if}
</main>

<style>
  .img-container {
    opacity: 1;
    transition: opacity 500ms ease !important;
  }
  .img-container:is(:hover, :focus) {
    opacity: 0.4;
  }

  .featured-article {
    outline: 2px dashed transparent;
    outline-offset: 2em;
    transition: outline ease 400ms;
  }
  .featured-article:is(:hover, :focus) {
    outline: 2px dashed rgba(156, 163, 175);
  }
</style>
