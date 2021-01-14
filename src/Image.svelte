<script>
    export let src = "images/pathforge.png";
    export let alt = "this is an image";
    export let cornerColor = "bg-white";
    export let inverted = false;
</script>

<style>
    .image {
        border-top: 20px solid rgba(191, 219, 254);
        border-left: 20px solid rgba(191, 219, 254);
        border-right: 20px solid rgba(167, 243, 208);
        border-bottom: 20px solid rgba(167, 243, 208);
    }
    .image-inverted {
        border-right: 20px solid rgba(191, 219, 254);
        border-bottom: 20px solid rgba(191, 219, 254);
        border-top: 20px solid rgba(167, 243, 208);
        border-left: 20px solid rgba(167, 243, 208);
    }
</style>

<main class="">
    <div class="relative h-auto w-auto">
        <div class="absolute w-5 h-5 right-0 {cornerColor}" />
        <div class="absolute w-5 h-5 bottom-0 {cornerColor}" />
        <img {src} class="{inverted ? 'image-inverted' : 'image'} object-contain" {alt} />
    </div>
</main>
