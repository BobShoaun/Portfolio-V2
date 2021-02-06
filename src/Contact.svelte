<main id="contact" class="main bg-gray-100 dark:bg-gray-800">
	<h1 class="text-5xl font-semibold text-gray-600 dark:text-white mb-3">Contact me</h1>
	<p class="text-gray-500 dark:text-gray-300 text-xl mb-10">
		What are you waiting for? Shoot me a message and I will get back to you as soon as I can. <br />
		My email is <a href="mailto:ngbobshoaun2000@gmail.com">ngbobshoaun2000@gmail.com</a>.
	</p>

	<form action="POST" data-netlify="true">
		<input
			name="email"
			class="w-full mb-2 px-4 py-2 dark:bg-gray-600 dark:text-gray-50"
			type="text"
			placeholder="Your email"
		/>
		<textarea
			name="message"
			class="w-full px-4 py-2 mb-3 min-h-1/4 dark:bg-gray-600 dark:text-gray-50"
			placeholder="Hey..."
			id=""
			rows="10"
		/>
    <div data-netlify-recaptcha="true"></div>
		<button class="bg-green-200 py-1 px-4 float-right rounded-none font-bold font-mono"
			><i class="far fa-paper-plane mr-3" />Send</button>
	</form>
</main>
