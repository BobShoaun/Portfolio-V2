<script>
  export let project = null;
</script>

<main style="grid-column: {project.span ?? 'span 4'};">
  <div
    class="mb-8 max-h-80 w-fit mx-auto shadow-lg bg-gradient-to-br from-purple-400 to-red-300 shadow-3xl overflow-hidden rounded-sm"
  >
    {#if project.video}
      <video
        data-aos={"slide-down"}
        data-aos-duration="500"
        data-aos-delay="100"
        autoplay
        loop
        muted
        playsinline
        src={project.video}
        class="max-h-[inherit] w-auto p-2 sm:p-3 cursor-pointer img-container"
        on:click={() => window.open(project.github)}
      />
    {:else}
      <img
        src={project.image}
        class="max-h-[inherit] w-auto p-2 sm:p-3 cursor-pointer img-container"
        alt={project.name}
      />
    {/if}
  </div>

  <div
    class="px-6 py-10 bg-gray-50 dark:bg-gray-900 shadow-xl"
    style="height: fit-content"
  >
    <h1
      data-aos="flip-down"
      class="font-extrabold text-2xl lg:text-3xl text-gray-800 dark:text-gray-50 mb-1"
    >
      {project.name}
      <span
        class="ml-0.5 font-light text-right text-xl lg:text-2xl dark:text-gray-300"
        >{project.year}</span
      >
    </h1>
    <p
      data-aos="fade-up"
      data-aos-delay="100"
      class="font-bold font-mono text-sm text-blue-500 dark:text-blue-300 mb-4"
    >
      {project.collaborators}
    </p>
    <p
      data-aos="fade-up"
      data-aos-delay="200"
      class="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed font-semibold"
    >
      {project.description}
    </p>
    <p
      data-aos="fade-up"
      data-aos-delay="300"
      class="text-sm font-semibold font-mono mb-6 text-green-500 dark:text-green-300"
    >
      {project.technologies.join(" // ")}
    </p>
    {#if project.github || project.website}
      <div
        data-aos="flip-up"
        data-aos-delay="400"
        class="flex items-center justify-end"
      >
        {#if project.github}
          <a
            href={project.github}
            target="_blank"
            class="shadow-md rounded-md px-4 py-2 dark:bg-gray-700 bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center text-gray-800 dark:text-gray-50"
          >
            <p class="text-md">Github</p>
            <i class="fab fa-github ml-3 text-lg" /></a
          >
        {/if}
        {#if project.website}
          <a
            href={project.website}
            target="_blank"
            class="flex items-center hover:underline text-gray-800 dark:text-gray-50 ml-6"
          >
            <p class="text-md">Link</p>
            <i class="fas fa-external-link-alt ml-3 text-md" />
          </a>
        {/if}
      </div>
    {/if}
  </div>
</main>

<style>
  .img-container {
    opacity: 1;
    transition: opacity 500ms ease !important;
  }
  .img-container:is(:hover, :focus) {
    opacity: 0.4;
  }
</style>
