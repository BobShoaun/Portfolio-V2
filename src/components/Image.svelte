<script>
	export let src = "images/pathforge.png";
	export let alt = "this is an image";
	// export let cornerColor = "bg-white dark:bg-gray-700";
	// export let inverted = false;
</script>

<!-- 
<main class="">
	<div class="relative h-auto w-auto">
		<div class="absolute w-3 md:w-5 h-3 md:h-5 right-0 {cornerColor}" />
		<div class="absolute w-3 md:w-5 h-3 md:h-5 bottom-0 {cornerColor}" />
		<img {src} class="{inverted ? 'image-inverted' : 'image'} object-contain" {alt} />
	</div>
</main> -->

<main>
	<div class="h-auto w-auto bg-gradient-to-br from-green-300 to-blue-300 rounded-sm">
		<img {src} class="p-2 lg:p-3 rounded-sm" {alt} />
	</div>
</main>

<style>
	/* .image {
		border-top: 10px solid rgba(191, 219, 254);
		border-left: 10px solid rgba(191, 219, 254);
		border-right: 10px solid rgba(167, 243, 208);
		border-bottom: 10px solid rgba(167, 243, 208);
  }
  @screen md {
		.image {
			border-top: 20px solid rgba(191, 219, 254);
			border-left: 20px solid rgba(191, 219, 254);
			border-right: 20px solid rgba(167, 243, 208);
			border-bottom: 20px solid rgba(167, 243, 208);
		}
	} */
</style>
