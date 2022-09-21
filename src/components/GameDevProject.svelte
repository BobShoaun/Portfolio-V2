<script>
  import technologies from "../static/technologies";

  let techLinks = new Map(technologies.map((tech) => [tech.tech, tech.link]));
  export let project = null;
</script>

<article style="grid-column: {project.span ?? 'span 4'};">
  <aside class="mx-auto relative z-10 max-h-80 w-fit">
    <div
      class="relative z-10 max-h-80 w-fit mx-3.5 shadow-lg bg-gradient-to-br from-purple-400 to-red-300 shadow-3xl overflow-hidden rounded-sm"
    >
      {#if project.video}
        <video
          data-aos={"slide-down"}
          data-aos-duration="500"
          data-aos-delay="100"
          autoplay
          loop
          muted
          controls
          playsinline
          src={project.video}
          class="max-h-[inherit] w-auto p-2 sm:p-3 cursor-pointer img-container"
        />
      {:else}
        <img
          loading="lazy"
          src={project.image}
          class="max-h-[inherit] w-auto p-2 sm:p-3 cursor-pointer img-container"
          alt={`Screenshot of ${project.name}`}
        />
      {/if}
    </div>
  </aside>

  <section
    class="-mt-5 px-5 pt-10 pb-5 bg-gray-50 dark:bg-gray-900 shadow-xl rounded-sm"
    style="height: fit-content"
  >
    <h1
      data-aos="flip-down"
      class="font-extrabold text-2xl lg:text-3xl text-gray-800 dark:text-gray-50 mb-1"
    >
      {project.name}
      <time
        class="ml-0.5 font-light text-right text-xl lg:text-2xl dark:text-gray-300"
        >{project.year}</time
      >
    </h1>
    <p
      data-aos="fade-up"
      data-aos-delay="100"
      class="font-bold font-mono text-sm text-blue-500 dark:text-blue-300 mb-3"
    >
      {project.collaborators}
    </p>

    <hr
      data-aos="fade-up"
      data-aos-delay="150"
      class="mb-4 border-gray-400 dark:border-gray-500"
    />
    <p
      data-aos="fade-up"
      data-aos-delay="200"
      class="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed font-semibold"
    >
      {project.description}
    </p>

    <div
      data-aos="fade-up"
      data-aos-delay="300"
      class="text-sm font-mono font-semibold flex flex-wrap gap-2 mb-6"
    >
      {#each project.technologies as tech}
        <a
          href={techLinks.get(tech)}
          target="_blank"
          class="bg-green-200 text-green-900 px-2">{tech}</a
        >
      {/each}
    </div>

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
            class="shadow-md rounded-md px-3 py-1.5 bg-gray-700 hover:bg-gray-600 transition-colors flex items-center text-gray-50"
          >
            <p class="">Github</p>
            <i class="fab fa-github ml-3 text-lg" /></a
          >
        {/if}
        {#if project.website}
          <a
            href={project.website}
            target="_blank"
            class="flex items-center hover:underline text-gray-800 dark:text-gray-50 ml-6"
          >
            <p class="">Link</p>
            <i class="fas fa-external-link-alt ml-3 text-md" />
          </a>
        {/if}
      </div>
    {/if}
  </section>
</article>
