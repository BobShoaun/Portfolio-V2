<script>
  import SectionNumber from "../components/SectionNumber.svelte";
  import TextReveal from "../components/TextReveal.svelte";

  let posters = [
    "sumfun.webp",
    "starlight.webp",
    "prosperity toss.webp",
    "freaky funhouse.webp",
    "freaky funhouse ticket front.webp",
    "unspoken.webp",
    "lazarus.webp",
    "closeted lies.webp",
    "minnie.webp",
    "better life.webp",
  ];
  let currentIndex = 0;
</script>

<section
  id="graphic-design"
  class="overflow-hidden relative bg-gray-50 dark:bg-gray-900"
>
  <SectionNumber
    number="101"
    shaftClasses="bg-gray-700 dark:bg-gray-50"
    textClasses="text-gray-700 dark:text-gray-50"
  />

  <header class="px-5 relative lg:flex pt-40 pb-24 gap-10 text-center">
    <h2
      class="basis-1/2 lg:text-right tracking-wide text-4xl md:text-5xl lg:text-7xl font-black text-gray-700 dark:text-gray-200 mb-4"
    >
      <TextReveal text={`GRAPHIC <br> DESIGN`} />
    </h2>
    <div data-aos="fade-left" data-aos-delay="200" class="basis-1/2">
      <p
        class="text-base lg:text-lg text-gray-600 dark:text-gray-300 lg:text-left lg:max-w-sm mx-auto max-w-prose lg:mx-0 font-semibold"
      >
        I also have an eye for good typography and graphic designs. Here are
        some of my work designing various posters for university clubs and
        events.
      </p>
    </div>
  </header>

  <section class="main max-w-6xl mx-auto mb-40">
    <div class="mb-16 flex justify-evenly md:hidden">
      <button
        on:click={() =>
          (currentIndex =
            currentIndex - 1 < 0 ? posters.length - 1 : currentIndex - 1)}
        class="bg-gray-200 hover:bg-gray-300 text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white transition-all rounded-sm px-6 py-2 flex items-center"
      >
        <i class="fas fa-caret-left text-xl mr-4" />
        <p class="font-bold">Previous</p>
      </button>
      <button
        on:click={() => (currentIndex = (currentIndex + 1) % posters.length)}
        class="bg-gray-200 hover:bg-gray-300 text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white transition-all rounded-sm px-6 py-2 flex items-center"
      >
        <p class="font-bold">Next</p>
        <i class="fas fa-caret-right text-xl ml-4" />
      </button>
    </div>

    <div class="md:flex items-center justify-center gap-10">
      <button
        aria-label="previous poster"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-delay="200"
        on:click={() =>
          (currentIndex =
            currentIndex - 1 < 0 ? posters.length - 1 : currentIndex - 1)}
        class="hidden md:block bg-gray-200 hover:bg-gray-300 text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white transition-all rounded-sm p-5"
      >
        <i class="fas fa-caret-left text-4xl" />
      </button>

      <div class="max-w-md mx-auto">
        <img
          floading="lazy"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="200"
          class="border-[0.75rem] md:border-[1.25rem] border-white shadow-2xl"
          src={`/images/designs/${posters[currentIndex]}`}
          alt={`${posters[currentIndex]} poster`}
        />
      </div>

      <button
        aria-label="next poster"
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-delay="200"
        on:click={() => (currentIndex = (currentIndex + 1) % posters.length)}
        class="hidden md:block bg-gray-200 hover:bg-gray-300 text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white transition-all rounded-sm p-5"
      >
        <i class="fas fa-caret-right text-4xl" />
      </button>
    </div>
  </section>

  <div
    data-aos="slide-up"
    data-aos-offset="200"
    class="hidden lg:block shadow-xl absolute right-14 bottom-0 w-4 h-28 bg-gray-400 dark:bg-gray-300"
  />
</section>
