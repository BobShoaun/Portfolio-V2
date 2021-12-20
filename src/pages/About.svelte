<script>
  import Border from "../components/Border.svelte";
</script>

<main
  id="about"
  class="main relative bg-gray-50 bg-gradient-to-b dark:from-gray-800 dark:to-gray-700"
>
  <div
    data-aos="slide-right"
    data-aos-offset="100"
    data-aos-duration="700"
    class="absolute background left-0 w-1/3 lg:w-1/4 h-full moving-gradient-2"
  />

  <div
    data-aos="slide-down"
    data-aos-offset="200"
    class="hidden lg:block absolute left-14 top-0 text-center"
  >
    <div class="w-5 h-28 bg-gray-50 dark:bg-gray-800 mb-4" />
    <p class="text-gray-100 dark:text-gray-800 font-mono font-bold text-4xl">
      001
    </p>
  </div>

  <section
    class="section flex flex-col items-center lg:flex-row justify-between"
  >
    <div class="max-w-xs m-10 mb-16 lg:m-16 lg:mr-20 z-10">
      <div
        class="bg-white dark:bg-gray-300 shadow-2xl overflow-hidden p-3 rounded-sm"
      >
        <img
          data-aos="slide-right"
          data-aos-duration="500"
          data-aos-delay="200"
          src="/images/me.jpg"
          alt="me"
        />
      </div>
    </div>

    <div
      class="bg-white dark:bg-gray-900 px-6 py-6 lg:py-10 lg:px-10 shadow-2xl shrink relative"
    >
      <h2 data-aos="zoom-in-left" class="title mb-6 lg:mb-10 font-mono">
        > About me
      </h2>
      <p
        data-aos="zoom-in-left"
        data-aos-delay="100"
        class="text-gray-500 dark:text-gray-300 lg:text-lg"
      >
        What's up? I’m Bob, a student currently earning my degree in University
        of Toronto, and also working as a software developer.
        <br /><br />
        The passion to create and innovate has always been in me. I strive to build
        quality, intuitive products with the goal of learning and improving my coding
        skills.
        <br /><br />
        My expertise include JS, React, Vue, Unity, and C#. Recently I have been
        intrigue with blockchain technologies. Aside from coding, I enjoy playing
        table tennis, video games, and the drums.
      </p>
      <!-- <Link
				data-aos="fade-left"
				to="facts"
				class="px-4 py-2 inline-block leading-4 border-blue-400 border bg-blue-200 hover:bg-blue-300 rounded-sm mr-3 text-gray-700 font-mono"
				noroute
			>
				<p class="text-gray-700 font-bold font-mono">
					Some fun facts about me <i class="fas fa-long-arrow-alt-right" />
				</p>
			</Link> -->
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
