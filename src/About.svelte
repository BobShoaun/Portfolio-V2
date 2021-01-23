<script>
	import Image from "./Image.svelte";
</script>

<main id="about" class="main bg-gray-100 md:flex justify-between md:space-x-20">
  <div class="m-10 md:m-0 mb-14 md:mb-0 max-w-xs">
    <Image src="images/me.jpg" alt="me" inverted cornerColor="bg-gray-100" />
  </div>
	
	<!-- <img src= class="w-1/3 h-auto object-contain" alt="me" /> -->

	<div class="my-auto md:max-w-1/2">
		<h1 class="text-5xl font-semibold mb-6 text-gray-600">About me</h1>
		<p class="text-gray-500 text-lg">
			Hi, I’m Bob, a passionate software developer currently earning my degree in University of
			Toronto, alongside a part-time job as a web developer.
			<br /><br />
			I have started coding since the age of 14 and have since been driven to create and design
			quality, intuitive softwares for others to use. My expertise in software development lies in Unity
			game engine, C#, Python, and Vue. Besides coding, my hobbies include graphic designing, building computers and playing the drums.
		</p>
	</div>
</main>
