<script>
  import { Link } from "svelte-routing";
  import { copyToClipboard } from "../helper";
  import resume from "../resume.js";
</script>

<main class="bg-gray-100 dark:bg-gray-700 pt-32 pb-20 overflow-auto flex">
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
        class="px-4 py-1 font-bold font-mono text-gray-700 border-indigo-400 border bg-indigo-200 hover:bg-indigo-300 rounded-none"
        ><i class="fas fa-print mr-3" />Print</button
      >
    </div>

    <main
      class="resume bg-white shadow-xl flex flex-col justify-between fpx-8 fpy-9"
    >
      <section>
        <h1 class={`text-gray-700 text-3xl font-extrabold`}>
          {resume.name}
        </h1>

        <div class="flex items-start mt-1 content-text">
          <ul class="text-gray-600 flex flex-wrap gap-x-4 gap-y-0.5">
            <li>
              <a
                class="flex gap-1.5 items-center"
                href={resume.website.url}
                target="_blank"
                ><i class="fas fa-globe" />{resume.website.label}</a
              >
            </li>

            <li>
              <button
                class="flex gap-1.5 items-center"
                on:click={() => copyToClipboard(resume.email.url)}
              >
                <i class="fas fa-envelope" />
                {resume.email.label}
              </button>
            </li>

            <li class="fbasis-1/2">
              <a
                class="flex gap-1.5 items-center"
                href={resume.linkedIn.url}
                target="_blank"
                ><i class="fab fa-linkedin" />{resume.linkedIn.label}</a
              >
            </li>

            <li class="basis-1/3">
              <a
                class="flex gap-1.5 items-center"
                href={resume.github.url}
                target="_blank"
                ><i class="fab fa-github" />{resume.github.label}</a
              >
            </li>

            <li>
              <a class="flex gap-1.5 items-center" href="tel:+1437-984-6410"
                ><i class="fas fa-phone" />{resume.phoneNumber}</a
              >
            </li>

            <li>
              <p class="flex gap-1.5 items-center">
                <i class="fas fa-map-marker-alt" />{resume.location}
              </p>
            </li>
          </ul>

          <!-- <p class="text-gray-400 text-right right-text basis-1/3">
            Last updated <em>{resume.lastUpdated}</em>
          </p> -->
        </div>
      </section>

      <section>
        <h2
          class={`w-full text-resume-primary bg-resume-light border-resume-primary pl-2 py-0 border-l-2 font-bold text-sm`}
        >
          Technical Skills
        </h2>

        <div
          class="grid grid-cols-[auto_1fr] mt-2 items-baseline gap-x-2 text-xs content-text"
        >
          <h3 class="text-gray-700 font-bold">Languages:</h3>
          <p class="text-gray-500">
            {resume.skills.languages.join(", ")}
          </p>
          <h3 class="text-gray-700 font-bold">Frontend:</h3>
          <p class="text-gray-500">
            {resume.skills.frontend.join(", ")}
          </p>
          <h3 class="text-gray-700 font-bold">Backend:</h3>
          <p class="text-gray-500">
            {resume.skills.backend.join(", ")}
          </p>
          <h3 class="text-gray-700 font-bold">Database:</h3>
          <p class="text-gray-500">
            {resume.skills.database.join(", ")}
          </p>
          <h3 class="text-gray-700 font-bold">DevOps:</h3>
          <p class="text-gray-500">
            {resume.skills.devops.join(", ")}
          </p>
          <h3 class="text-gray-700 font-bold">Others:</h3>
          <p class="text-gray-500">
            {resume.skills.others.join(", ")}
          </p>
        </div>
      </section>

      <section>
        <h2
          class="w-full text-resume-primary bg-resume-light border-resume-primary pl-2 py-0 border-l-2 font-bold text-sm"
        >
          Work Experience
        </h2>

        <ul class="flex flex-col gap-2.5 mt-2">
          {#each resume.experiences as experience}
            <li>
              <div class="flex items-baseline gap-2">
                <h3 class="text-gray-700 font-bold title-text">
                  {experience.company}
                </h3>
                <em class="text-gray-500 title-text">
                  {experience.position}
                </em>

                <p class="text-gray-400 ml-auto right-text">
                  {experience.location}
                </p>

                <p class="text-gray-400 right-text ml-2">
                  {experience.timeline}
                </p>
              </div>

              <ul class="list-square text-gray-700 pl-5 mt-0.5 content-text">
                {#each experience.points as point}
                  <li>
                    {point}
                  </li>
                {/each}
              </ul>
            </li>
          {/each}
        </ul>
      </section>

      <section>
        <h2
          class={`w-full text-resume-primary bg-resume-light border-resume-primary pl-2 py-0 border-l-2 font-bold text-sm`}
        >
          Education
        </h2>

        <div class="flex justify-between items-baseline mt-2">
          <h3 class="text-gray-700 font-bold title-text">
            {resume.education.school}
          </h3>
          <p class="text-gray-400 right-text">
            {resume.education.timeline}
          </p>
        </div>

        <div class="flex justify-between items-baseline mt-0.5">
          <p class="text-gray-700 content-text">
            {resume.education.description}
          </p>
          <p class="text-gray-500 font-semibold content-text">
            CGPA: {resume.education.cgpa}
          </p>
        </div>
      </section>

      <section>
        <h2
          class={`w-full text-resume-primary bg-resume-light border-resume-primary pl-2 py-0 border-l-2 font-bold text-sm`}
        >
          Projects
        </h2>
        <ul class="flex flex-col gap-2.5 mt-2">
          {#each resume.projects as project}
            <li>
              <div class="flex justify-between items-baseline">
                <h3
                  class="text-gray-700 font-bold title-text flex items-baseline gap-1.5"
                >
                  {project.name}
                  <!-- <i class="text-[10px] leading-3 fa fa-external-link-alt" /> -->
                </h3>
                <ul class="text-gray-400 flex right-text gap-4">
                  {#each project.github as github}
                    <li>
                      <a
                        class="flex gap-1 items-center"
                        href={github.url}
                        target="_blank"
                        ><i class="fab fa-github" />{github.repo}</a
                      >
                    </li>
                  {/each}
                </ul>
                <!-- <p class="text-gray-400 right-text">{project.github[0].repo}</p> -->
              </div>
              <ul class="list-square text-gray-700 pl-5 content-text mt-0.5">
                {#each project.points as point}
                  <li>
                    {point}
                  </li>
                {/each}
              </ul>
            </li>
          {/each}
        </ul>
      </section>
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

    /* a4 size */
    width: 21cm;
    height: 29.7cm;

    box-sizing: border-box;
    /* padding: 2.25rem; */
    padding: 0.5in;
  }

  .content-text {
    /* @apply text-[11px] leading-snug; */
    font-size: 11px;
    line-height: 1.4;
  }

  .right-text {
    font-size: 11px;
    line-height: 1rem;
  }

  .title-text {
    font-size: 13px;
    line-height: 1.4;
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
      margin: 0.5in;
    }
  }
</style>
