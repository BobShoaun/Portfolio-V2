<script>
  import technologies from "../static/technologies";

  let techLinks = new Map(technologies.map((tech) => [tech.tech, tech.link]));

  export let project = null;
  export let right = false;
</script>

<article class="sm:mx-14 lg:mx-0">
  <div
    class="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14"
  >
    <aside class="lg:max-w-1/2 w-fit shrink">
      <div
        class="mx-0 mb-4 max-h-80 w-fit bg-gradient-to-br from-green-300 to-blue-300 shadow-xl overflow-hidden"
      >
        <img
          data-aos={right ? "slide-right" : "slide-left"}
          data-aos-duration="200"
          data-aos-delay="100"
          class="max-h-[inherit] w-auto object-scale-down p-2 sm:p-3 cursor-pointer img-container"
          src={project.image}
          alt={`Screenshot of ${project.name}`}
          on:click={() => window.open(project.website)}
          loading="lazy"
        />
      </div>
      <div
        data-aos={right ? "flip-up" : "flip-up"}
        data-aos-delay="100"
        class="flex items-center justify-center gap-3"
      >
        {#if project.github}
          <a
            href={project.github}
            aria-label="Look at GitHub repo"
            target="_blank"
            class="px-3 py-1.5 transition-colors flex items-center bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 hover:dark:bg-gray-600 text-gray-500 dark:text-gray-50"
          >
            <p class="">Github</p>
            <i class="fab fa-github ml-3 text-lg" /></a
          >
        {:else}
          <button
            class="px-3 py-1.5 dark:bg-gray-800 bg-gray-200 flex items-center text-gray-500 dark:text-gray-400 cursor-not-allowed"
            disabled
          >
            <p class="">Private</p>
            <i class="fas fa-code ml-3 text-lg" />
          </button>
        {/if}
        {#if project.website}
          <a
            href={project.website}
            aria-label="Go to live website"
            target="_blank"
            class="flex px-2 py-2 items-center group text-gray-800 dark:text-gray-50"
          >
            <p class="group-hover:underline">Link</p>
            <i class="fas fa-external-link-alt ml-3" />
          </a>
        {/if}
      </div>
    </aside>

    <section class="flex-1 {right ? 'lg:order-first' : ''}">
      <h1
        data-aos={right ? "fade-right" : "fade-left"}
        class="text-2xl lg:text-4xl font-extrabold text-gray-800 dark:text-gray-50 mb-1"
      >
        {@html project.name}
        <time
          class="ml-0.5 font-light text-right text-xl lg:text-2xl dark:text-gray-300"
          >{project.year}</time
        >
      </h1>
      <p
        data-aos="fade"
        data-aos-delay="100"
        class="font-bold font-mono text-sm text-purple-700 dark:text-purple-400 mb-3"
      >
        {project.collaborators}
      </p>

      <hr
        data-aos="fade"
        data-aos-delay="150"
        class="mb-4 border-gray-400 dark:border-gray-500"
      />
      <p
        data-aos="fade"
        data-aos-delay="200"
        class="mb-4 text-gray-600 font-semibold dark:text-gray-300 leading-relaxed max-w-prose"
      >
        {@html project.description}
      </p>

      <div
        data-aos="fade"
        data-aos-delay="300"
        class="text-sm font-mono font-semibold flex flex-wrap gap-2"
      >
        {#each project.technologies as tech}
          <a
            href={techLinks.get(tech)}
            target="_blank"
            class="bg-red-200 text-red-900 px-2">{tech}</a
          >
        {/each}
      </div>
    </section>
  </div>
  {#if project.more}
    <article data-aos="fade-left" class="mt-14">
      <a
        href={project.more}
        class="block relative text-gray-700 dark:text-white cursor-pointer featured-article"
      >
        <em class="block mb-2"
          ><i class="fas fa-newspaper mr-2 text-lg" />Featured Article</em
        >
        <hr class="mb-4 border-gray-400" />
        <h1 class="text-2xl lg:text-3xl font-bold mb-3">
          How I Made My Own Cryptocurrency
        </h1>
        <p class="text-gray-500 dark:text-gray-300">
          by Ng Bob Shoaun &nbsp;∙&nbsp; 2 August 2021 &nbsp;∙&nbsp; 8 minute
          read
        </p>
      </a>
    </article>
  {/if}
</article>

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
    outline-offset: 1.5em;
    transition: outline ease 400ms;
  }
  .featured-article:is(:hover, :focus) {
    outline: 2px dashed rgba(156, 163, 175);
  }
</style>
