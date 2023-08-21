<script lang="ts">
  import lottie from 'lottie-web';
  import { onMount } from 'svelte';
  import successLottie from '$lib/assets/success-lottie.json';

  let animationContainer: HTMLElement;
  export let animationType: 'success';

    onMount(() => {
        lottie.loadAnimation({
            container: animationContainer,
            animationData: animationType === 'success' ? successLottie : '',
            loop: true
        })
    })
</script>

<div bind:this={animationContainer} class="max-w-[30rem] mx-auto"></div>