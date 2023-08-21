<script lang="ts">
  import { page } from "$app/stores";
  import { slide } from "svelte/transition";
  import Lottie from "$lib/components/Lottie.svelte";

    const status = $page.url.searchParams.get('status');  
</script>

<section class="flex justify-center items-center w-full min-h-[100vh] px-4" transition:slide>
{#if status === 'completed'}
    <div class="max-w-lg px-6 py-8 rounded mx-auto border text-center">
        <Lottie animationType="success" />

        <h2 class="text-3xl font-bold text-success mb-2">Thank you!</h2>

        <p class="mb-6 text-sm">We really appreciate your donation and it will go a long way in helping millions of children across the world access better lives and education.</p>

        <a href="/" class="btn btn-warning">Donate again</a>
    </div>
{:else}
    <div class="max-w-lg px-6 py-8 rounded mx-auto border text-center">
        <h2 class="text-3xl font-bold text-red-500 mb-2">Not completed</h2>

        <p class="mb-6 text-sm">Your payment didn't go through. You can try pay again. Thank you for your patience.</p>

        <p><a href="/" class="btn btn-warning">Try donation again</a></p>
    </div>
{/if}
</section>