<script>
  export let shaftClasses = "bg-gray-800 dark:bg-gray-800";
  export let textClasses = "text-gray-800 dark:text-gray-800";
  export let number = "011";
  export let right = false;
</script>

<div
  data-aos="slide-down"
  data-aos-offset="200"
  data-aos-delay="100"
  class={`hidden lg:block absolute top-0 ${right ? "right-14" : "left-14"}`}
>
  <div class={`w-5 h-32 mb-2 ${shaftClasses}`} />
  <p
    class={`${textClasses} ${
      right ? "right-0" : "left-0"
    } font-mono font-bold text-3xl absolute`}
  >
    {number}
  </p>
</div>
