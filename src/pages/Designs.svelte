<script>
  import { slide } from "svelte/transition";

  let posters = [
    "sumfun.png",
    "starlight.png",
    "prosperity toss.png",
    "freaky funhouse.png",
    "freaky funhouse ticket front.png",
    "unspoken.png",
    "lazarus.png",
    "closeted lies.png",
    "minnie.png",
    "better life.png",
  ];
  let currentIndex = 0;
</script>

<main id="graphic-design" class="main relative bg-gray-100 dark:bg-gray-900">
  <div
    data-aos="slide-down"
    data-aos-offset="200"
    class="hidden lg:block absolute left-14 top-0"
  >
    <div class="w-5 h-36 bg-gray-800 dark:bg-gray-50 mb-4" />
    <p
      class="text-gray-800 dark:text-gray-50 font-mono font-bold text-4xl text-right left-0 absolute"
    >
      101
    </p>
  </div>

  <section class="section">
    <div class="text-center">
      <div
        class="bg-white dark:bg-gray-800 p-10 mb-6 lg:mb-14 shadow-lg inline-block"
      >
        <h2 data-aos="fade-in" class="title mb-6 font-mono">Graphic Design</h2>
        <h5 data-aos="fade-in" class="subtitle max-w-xl">
          I also have an eye for good typography and graphic designs. Here are
          some of my work designing various posters for university clubs and
          events.
        </h5>
      </div>
    </div>

    <div class="mt-10 lg:flex items-center mb-20">
      <button
        on:click={() =>
          (currentIndex =
            currentIndex - 1 < 0 ? posters.length - 1 : currentIndex - 1)}
        class="hidden lg:block bg-gray-200 hover:bg-gray-300 text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white transition-all rounded-sm p-5"
      >
        <i class="fas fa-caret-left text-4xl" />
      </button>
      <div class="p-3 lg:p-5 shadow-2xl bg-white max-w-md mx-auto">
        <img
          class=""
          src={`/images/designs/${posters[currentIndex]}`}
          alt={posters[currentIndex]}
        />
      </div>
      <button
        on:click={() => (currentIndex = (currentIndex + 1) % posters.length)}
        class="hidden lg:block bg-gray-200 hover:bg-gray-300 text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white transition-all rounded-sm p-5"
      >
        <i class="fas fa-caret-right text-4xl" />
      </button>

      <div class="mt-10 flex justify-evenly lg:hidden">
        <button
          on:click={() =>
            (currentIndex =
              currentIndex - 1 < 0 ? posters.length - 1 : currentIndex - 1)}
          class="bg-gray-200 hover:bg-gray-300 text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white transition-all rounded-sm px-5 py-2 flex items-center"
        >
          <i class="fas fa-caret-left text-2xl mr-4" />
          <p class="font-bold">Previous</p>
        </button>
        <button
          on:click={() => (currentIndex = (currentIndex + 1) % posters.length)}
          class="bg-gray-200 hover:bg-gray-300 text-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white transition-all rounded-sm px-5 py-2 flex items-center"
        >
          <p class="font-bold">Next</p>
          <i class="fas fa-caret-right text-2xl ml-4" />
        </button>
      </div>
    </div>
  </section>

  <div
    data-aos="slide-up"
    data-aos-offset="200"
    class="hidden lg:block absolute right-14 bottom-0"
  >
    <div class="w-5 h-28 bg-gray-600 dark:bg-gray-300" />
  </div>
</main>

<style>
  /* .poster {
    max-height: 90vh;
  } */
</style>
