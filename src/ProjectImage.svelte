<script>
    export let image = "images/pathforge.png";
    export let alt = "this is an image";
</script>

<style>
    img {
        border-top: 20px solid rgba(191, 219, 254);
        border-left: 20px solid rgba(191, 219, 254);
        border-right: 20px solid rgba(167, 243, 208);
        border-bottom: 20px solid rgba(167, 243, 208);
    }
</style>

<main class="">
    <div class="relative h-auto w-auto">
        <div class="absolute bg-white w-5 h-5 right-0" />
        <div class="absolute bg-white w-5 h-5 bottom-0" />
        <img src={image} class=" object-contain" {alt} />
    </div>
</main>
