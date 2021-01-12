<script>
    export let image = "images/pathforge.png";
    export let name = "awesome website";
    export let collaborators = "with some people";
    export let description = "none.";
    export let technologies = ["svelte", "tailwind css"];
    export let right = false;
</script>

<style>
    img {
        border-top: 20px solid rgba(191, 219, 254);
        border-left: 20px solid rgba(191, 219, 254);
        border-right: 20px solid rgba(167, 243, 208);
        border-bottom: 20px solid rgba(167, 243, 208);
    }
</style>

<main class="flex items-center justify-around py-16">
    <div class="relative h-auto w-auto">
        <div class="absolute bg-white w-5 h-5 right-0" />
        <div class="absolute bg-white w-5 h-5 bottom-0" />
        <img src={image} class=" object-contain" alt={name} />
    </div>

    <div class={right ? 'order-first pr-28' : 'pl-28'}>
        <h1 class="font-bold text-2xl">{name}</h1>
        <p class="font-bold text-sm text-purple-700 mb-3">{collaborators}</p>
        <p class="text-md mb-4">{description}</p>

        <p class="text-lg font-semibold">{technologies.join(' // ')}</p>
    </div>
</main>
