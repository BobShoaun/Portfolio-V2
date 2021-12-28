<script>
  import TextReveal from "../components/TextReveal.svelte";

  export let wrapperClasses = "moving-gradient-1";
  export let headingText = "WEB DEVELOPMENT";
  export let subtitleText =
    "I have industry experience working as a fullstack web developer, here are some featured projects.";
</script>

<header class={`py-24 text-center relative overflow-hidden`}>
  <div
    data-aos="slide-down"
    data-aos-offset="200"
    class="absolute inset-0 -z-0 {wrapperClasses}"
  />
  <div
    data-aos="fade"
    data-aos-offset="200"
    class="relative bg-gray-50 z-10 dark:bg-gray-900 shadow-xl p-5 lg:p-10 inline-block w-fit mx-5"
  >
    <h2
      class="text-3xl md:text-4xl lg:text-5xl mb-2 font-black text-gray-700 dark:text-gray-200"
    >
      <TextReveal delay={300} text={headingText} />
    </h2>
    <p
      data-aos="fade"
      data-aos-offset="200"
      data-aos-delay="300"
      class="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-prose font-semibold"
    >
      {subtitleText}
    </p>
  </div>
</header>
