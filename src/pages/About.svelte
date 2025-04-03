<script>
  import SectionNumber from "../components/SectionNumber.svelte";
  import TextReveal from "../components/TextReveal.svelte";
</script>

<section
  id="about"
  class="overflow-hidden snap-center relative bg-gray-50 bg-gradient-to-b dark:from-gray-800 dark:to-gray-700"
>
  <div
    data-aos="slide-right"
    data-aos-offset="100"
    data-aos-duration="700"
    class="absolute background left-0 w-1/3 lg:w-1/4 h-full moving-gradient-2"
  />

  <SectionNumber
    number="001"
    shaftClasses="bg-gray-100 dark:bg-gray-800"
    textClasses="text-gray-100 dark:text-gray-800"
  />

  <section class="main my-20 md:mb-40 md:mt-40 lg:mt-64">
    <div
      class="flex flex-col items-center gap-32 lg:gap-20 lg:flex-row justify-center"
    >
      <div class="max-w-xs z-10 flex-1">
        <div
          class="bg-gray-50 dark:bg-gray-300 shadow-2xl overflow-hidden p-3 rounded-sm"
        >
          <img
            loading="lazy"
            data-aos="slide-right"
            data-aos-duration="500"
            data-aos-delay="200"
            src="/images/me.webp"
            alt="Me wearing an Amazon t-shirt with Columbia Icefields in the background during my vacation to Banff, Alberta."
          />
        </div>
      </div>

      <div
        class="flex-1 max-w-prose relative bg-white dark:bg-gray-900 px-6 py-6 lg:py-10 lg:px-10 shadow-2xl"
      >
        <div
          class="absolute right-0 -top-20 lg:-top-32 lg:text-right tracking-wide text-5xl md:text-6xl lg:text-7xl font-black text-gray-700 dark:text-gray-200"
        >
          <TextReveal text="ABOUT ME" />
        </div>

        <div
          data-aos="zoom-in-left"
          data-aos-delay="100"
          class="text-gray-600 dark:text-gray-300 lg:text-lg space-y-5"
        >
          <p>
            Hey there!👋 I'm Bob Shoaun Ng, a passionate software developer
            specializing in web development. I hold an Honours Bachelor of
            Science in Computer Science from the University of Toronto and
            proudly call both Malaysia 🇲🇾 and Toronto, Canada 🇨🇦 home.
          </p>
          <p>
            From a young age, I've been driven by the thrill of creating and
            innovating. My goal? To build clean, intuitive, and robust software
            that not only works seamlessly but also delivers an exceptional user
            experience. My expertise lies in JavaScript, CSS, and the MERN
            stack. I've also dove deep into the world of blockchain technology
            and Web3.
          </p>
          <p>
            Beyond coding, you’ll find me playing table tennis 🏓, cycling
            through the city 🚴, or jamming on the drums 🥁.
          </p>
        </div>
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
    </div>
  </section>

  <div
    data-aos="slide-up"
    data-aos-offset="200"
    class="shadow-xl hidden lg:block absolute right-14 bottom-0 w-4 h-28 bg-gray-300 dark:bg-gray-300"
  />
</section>
