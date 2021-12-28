<script>
  import { onMount } from "svelte";
  import SectionNumber from "../components/SectionNumber.svelte";
  import TextReveal from "../components/TextReveal.svelte";
  onMount(mounted);

  let experiences = [];

  async function mounted() {
    let response = await fetch("/experience.json");
    experiences = await response.json();
  }
</script>

<main
  id="experience"
  class="overflow-hidden relative bg-gradient-to-b dark:from-gray-900 dark:to-gray-800"
>
  <div
    data-aos="slide-down"
    data-aos-delay="900"
    class="bg-gray-50 bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 absolute right-0 w-1/2 h-full"
  />

  <SectionNumber
    right
    number="010"
    shaftClasses="bg-gray-800 dark:bg-gray-50"
    textClasses="text-gray-800 dark:text-gray-50"
  />

  <header class="px-5 relative lg:flex pt-40 pb-24 gap-10 text-center">
    <h2
      class="basis-1/2 lg:text-right tracking-wide text-4xl md:text-5xl lg:text-7xl font-black text-gray-200 mb-4"
    >
      <TextReveal text="EXPERIENCE" />
    </h2>
    <div data-aos="fade-left" data-aos-delay="200" class="basis-1/2">
      <p
        class="text-base lg:text-lg text-gray-300 lg:text-left lg:max-w-sm mx-auto max-w-prose lg:mx-0 font-semibold"
      >
        I currently have more than 2 years of work experience and counting. Here
        are some companies I have worked at before.
      </p>
    </div>
  </header>

  <section class="main max-w-6xl mx-auto mb-40">
    <div
      class="md:grid md:grid-cols-2 mx-6 sm:mx-28 md:mx-0 lg:mx-20 xl:mx-28 shadow-2xl"
    >
      {#each experiences as experience}
        <div class="exp aspect-square flex {experience.background}">
          <img
            class="m-auto w-40 sm:w-52 md:w-48 lg:w-40"
            src={experience.logo}
            alt={experience.name}
            style="mix-blend-mode: {experience.blend}"
          />
          <div
            class="exp-desc bg-gray-100/80 dark:bg-gray-800/80 p-5 sm:p-10 backdrop-blur-md"
          >
            <h1
              class="font-bold text-gray-700 dark:text-white text-xl lg:text-2xl"
            >
              {experience.position}
            </h1>
            <h1
              class="font-bold {experience.highlight} text-lg lg:text-lg mb-1"
            >
              @{experience.name}
            </h1>
            <p class="text-gray-500 dark:text-gray-400 mb-5 font-mono text-sm">
              {experience.start} - {experience.end}
            </p>
            <ul
              class="text-base text-gray-700 dark:text-gray-200 list-square ml-4"
            >
              {#each experience.points as point}
                <li class="mt-1">{point}</li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <div
    data-aos="slide-up"
    data-aos-offset="200"
    class="hidden lg:block absolute left-14 bottom-0 w-5 h-28 bg-gray-600 dark:bg-gray-300"
  />
</main>

<style>
  .exp {
    aspect-ratio: 1/1;
    position: relative;
    --hover-time: 400ms;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    /* background-attachment: fixed; */
  }

  .exp .exp-desc {
    position: absolute;
    inset: 0;
    opacity: 0;
    transform: translateY(100%);
    transition: all var(--hover-time) ease-out;
    z-index: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .exp:hover .exp-desc {
    transform: translateY(0);
    opacity: 1;
  }
</style>
