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

<main id="graphic-design" class="main bg-gray-100 dark:bg-gray-900">
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
        class="hidden lg:block bg-gray-800 hover:bg-gray-700 transition-all rounded-sm p-5"
      >
        <i class="fas fa-caret-left text-4xl text-white" />
      </button>
      <img
        class="poster mx-auto max-w-full lg:max-w-md"
        src={`/images/designs/${posters[currentIndex]}`}
        alt={posters[currentIndex]}
      />
      <button
        on:click={() => (currentIndex = (currentIndex + 1) % posters.length)}
        class="hidden lg:block bg-gray-800 hover:bg-gray-700 transition-all rounded-sm p-5"
      >
        <i class="fas fa-caret-right text-4xl text-white" />
      </button>

      <div class="mt-10 flex justify-evenly lg:hidden text-white">
        <button
          on:click={() =>
            (currentIndex =
              currentIndex - 1 < 0 ? posters.length - 1 : currentIndex - 1)}
          class="bg-gray-800 hover:bg-gray-700 transition-all rounded-sm p-5 flex items-center"
        >
          <i class="fas fa-caret-left text-4xl text-white mr-4" />
          <p class="font-bold">Previous</p>
        </button>
        <button
          on:click={() => (currentIndex = (currentIndex + 1) % posters.length)}
          class="bg-gray-800 hover:bg-gray-700 transition-all rounded-sm p-5 flex items-center"
        >
          <p class="font-bold">Next</p>
          <i class="fas fa-caret-right text-4xl text-white ml-4" />
        </button>
      </div>
    </div>
  </section>
</main>

<style>
  .poster {
    max-height: 90vh;
  }
</style>
