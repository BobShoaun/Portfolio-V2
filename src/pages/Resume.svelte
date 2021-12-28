<script>
  import { Link } from "svelte-routing";
  import { copyToClipboard } from "../helper";
  import resume from "../resume.js";

  // const primary = "red-500";
  // const light = "red-50";

  /* 
  bg-teal-50
  text-teal-50
  border-teal-50
  bg-teal-600
  text-teal-600
  border-teal-600
  */

  const primary = "teal-600";
  const light = "teal-50";
</script>

<main class="bg-gray-500 dark:bg-gray-700 pt-32 pb-20 overflow-auto flex">
  <div class="m-auto">
    <div class="mb-5">
      <Link
        to="/"
        class="px-4 py-2 inline-block leading-4 border-green-400 border bg-green-200 hover:bg-green-300 rounded-none mr-3 text-gray-700 font-mono"
      >
        <p class="text-gray-700 font-bold font-mono">
          <i class="fas fa-arrow-left mr-3" />Go Back
        </p></Link
      >
      <button
        on:click={() => window.print()}
        class="px-4 py-1 font-bold font-mono border-blue-400 border bg-blue-200 hover:bg-blue-300 rounded-none"
        ><i class="fas fa-print mr-3" />Print</button
      >
    </div>

    <main class="resume bg-white shadow-xl">
      <section class="sidebar flex flex-col justify-between gap-2">
        <aside
          class={`bg-${light} px-5 pt-5 pb-6 border-${primary} border-t-4`}
        >
          <h1
            class="text-gray-700 text-5xl font-extrabold mb-1"
            fstyle="font-size: 2.5rem; line-height: 1"
          >
            {resume.name}
          </h1>
          <h3 class={`text-${primary} font-semibold text-lg mb-3 leading-5`}>
            {resume.title}
          </h3>
          <div class="grid info items-center">
            <i class="text-gray-700 text-center fas fa-phone" />
            <p class="text-gray-700 text-sm">{resume.phoneNumber}</p>

            <i class="text-gray-700 text-center fas fa-globe" />
            <a
              href={resume.website.url}
              target="_blank"
              class="text-gray-700 text-sm">{resume.website.label}</a
            >

            <i class="text-gray-700 text-center fas fa-envelope" />
            <p
              class="text-gray-700 text-sm cursor-pointer"
              on:click={() => copyToClipboard(resume.email.url)}
            >
              {resume.email.label}
            </p>
            <i class="text-gray-700 text-center fab fa-linkedin" />
            <a
              href={resume.linkedIn.url}
              target="_blank"
              class="text-gray-700 text-sm">{resume.linkedIn.label}</a
            >
            <i class="text-gray-700 text-center fab fa-github" />
            <a
              href={resume.github.url}
              target="_blank"
              class="text-gray-700 text-sm">{resume.github.label}</a
            >
            <i class="text-gray-700 text-center fas fa-map-marker-alt" />
            <p class="text-gray-700 text-sm">{resume.location}</p>
          </div>
        </aside>

        <div>
          <h2
            class={`text-${primary} bg-${light} w-full border-${primary} pl-4 py-1 border-l-4 font-semibold text-xl mb-2`}
          >
            About Me
          </h2>
          <p class="text-gray-600 text-sm pl-1">
            <q>{resume.about}</q>
          </p>
        </div>

        <div>
          <h2
            class={`text-${primary} bg-${light} w-full border-${primary} pl-4 py-1 border-l-4 font-semibold text-xl mb-2`}
          >
            Coding Languages
          </h2>
          <div class="tags flex flex-wrap justify-start">
            {#each resume.codingLanguages as codingLanguage}
              <h4
                class={`bg-${primary} px-2.5 py-1.5 font-bold text-xs text-white`}
              >
                {codingLanguage}
              </h4>
            {/each}
          </div>
        </div>

        <div>
          <h2
            class={`text-${primary} bg-${light} w-full border-${primary} pl-4 py-1 border-l-4 font-semibold text-xl mb-2`}
          >
            Tech Stack
          </h2>
          <div class="tags flex flex-wrap justify-start">
            {#each resume.techStack as framework}
              <h4
                class={`bg-${primary} px-2.5 py-1.5 font-bold text-xs text-white`}
              >
                {framework}
              </h4>
            {/each}
          </div>
        </div>

        <div
          class={`bg-${light} border-${primary} border-b-4 px-5 pt-1.5 pb-1.5 w-full`}
        >
          <h3 class={`text-${primary} text-sm`}>
            Last updated on: <span class="italic font-semibold"
              >{resume.lastUpdated}</span
            >
          </h3>
        </div>
      </section>

      <!-- CONTENT SECTION -->

      <article class="content flex flex-col justify-between gap-2">
        <div>
          <h2
            class={`text-${primary} bg-${light} w-full border-${primary} pl-4 py-1 border-l-4 font-semibold text-xl mb-2`}
          >
            Education
          </h2>

          <div class="flex justify-between items-baseline mb-0">
            <h3 class="text-gray-700 text-md font-bold">
              {resume.education.school}
            </h3>
            <p class="text-xs text-gray-700 font-semibold">
              CGPA: {resume.education.cgpa}
            </p>
          </div>

          <p class="text-sm text-gray-400 float-right text-right">
            {resume.education.timeline}
          </p>
          <p class="text-sm text-gray-400 mb-0.5 italic">
            {resume.education.major}
          </p>

          <ul class="list-square text-gray-700 pl-5 text-xs">
            {#each resume.education.courses as course}
              <li>
                {course.name}
                <p class="float-right">{@html course.grade}</p>
              </li>
            {/each}
          </ul>
        </div>

        <div>
          <h2
            class={`text-${primary} bg-${light} w-full border-${primary} pl-4 py-1 border-l-4 font-semibold text-xl mb-2`}
          >
            Experience
          </h2>

          {#each resume.experiences as experience, i}
            <h3 class="text-gray-700 text-md font-bold">
              {experience.company}
            </h3>
            <p class="text-sm text-gray-400 float-right text-right">
              {experience.timeline}
            </p>
            <p class="text-sm text-gray-400 mb-0.5 italic">
              {experience.position}
            </p>
            <ul
              class={`list-square text-gray-600 pl-5 text-xs ${
                i == resume.experiences.length - 1 ? "mb-0" : "mb-2"
              }`}
            >
              {#each experience.points as point}
                <li>
                  {point}
                </li>
              {/each}
            </ul>
          {/each}
        </div>

        <div>
          <h2
            class={`text-${primary} bg-${light} w-full border-${primary} pl-4 py-1 border-l-4 font-semibold text-xl mb-2`}
          >
            Projects
          </h2>

          {#each resume.projects as project, i}
            <div class="flex justify-between items-baseline mb-0.5">
              <h3 class="text-gray-700 text-md font-bold">
                {project.name}
              </h3>
              <p class="text-sm text-gray-400 italic">{project.type}</p>
            </div>
            <ul
              class={`list-square text-gray-600 pl-5 text-xs ${
                i == resume.projects.length - 1 ? "mb-0" : "mb-2"
              }`}
            >
              {#each project.points as point}
                <li>
                  {point}
                </li>
              {/each}
            </ul>
          {/each}
        </div>
      </article>
    </main>
  </div>
</main>

<style>
  /* only use light, regular, regular italic, bold */
  /* @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"); */
  /* @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,400&display=swap'); */
  /* @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,700;1,400&display=swap'); */

  .resume {
    /* font-family: "Open Sans", sans-serif; */
    /* font-family: "Noto Sans", sans-serif; */
    /* font-family: ui-sans-serif, sans-serif; */

    /* font-family: 'Lato', sans-serif; */
    /* font-family: 'Source Sans Pro', sans-serif; */
    /* font-family: 'Roboto', sans-serif; */
    /* 

    display: grid;
    grid-template-columns: 1fr 3fr; */

    display: flex;
    gap: 2rem;

    /* a4 size */
    width: 21cm;
    height: 29.7cm;

    box-sizing: border-box;
    padding: 2.25rem;
  }

  @media print {
    .resume {
      height: 100% !important;
      width: 100% !important;
      position: fixed !important;
      z-index: 100000 !important;
      top: 0 !important;
      left: 0 !important;
      margin: 0 !important;
      padding: 0 !important;
      line-height: 18px;
      -webkit-print-color-adjust: exact !important;
    }
    @page {
      size: A4;
    }
  }

  .info {
    /* display: grid; */
    grid-template-columns: auto 1fr;
    column-gap: 0.6rem;
    row-gap: 0.55rem;
  }
  .content {
    grid-area: content;
  }
  .sidebar {
    grid-area: sidebar;
    flex-shrink: 2;
  }
  .tags {
    gap: 0.3rem;
  }
  a {
    color: rgba(55, 65, 81, var(--tw-text-opacity));
  }
</style>
