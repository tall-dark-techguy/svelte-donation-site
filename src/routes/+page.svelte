<script lang="ts">
  import { goto } from "$app/navigation";

    let amount = 10;
    let frequency = 'once';

    const handleCheckout = () => {
        const redirect_url = `/checkout?amount=${amount}&frequency=${frequency}`;
        return goto(redirect_url);
    }
</script>

<div class="background min-h-[100vh] w-full flex items-center justify-center px-2 py-6">
    <div class="bg-orange-500 opacity-90 p-6 shadow-xl max-w-md w-full text-white">
        <h1 class="text-lg font-semibold mb-3">Choose a donation amount</h1>
        
        <div class="mb-2">
            <button on:click={() => amount = 10} class="flex gap-4 items-start px-2 py-2 border-b {amount === 10 ? 'bg-black text-white' : 'bg-white text-neutral-800'} transition active:text-white active:bg-black">
                <span></span>
                <span class="text-2xl font-bold">$10</span>
                <span class="text-xs text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, fugiat?</span>
            </button>

            <button on:click={() => amount = 20} class="flex gap-4 items-start {amount === 20 ? 'bg-black text-white' : 'bg-white text-neutral-800'} px-2 py-2 border-b active:text-white active:bg-black">
                <span></span>
                <span class="text-2xl font-bold">$20</span>
                <span class="text-xs text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, fugiat?</span>
            </button>

            <button on:click={() => amount = 30} class="flex gap-4 items-start {amount === 30 ? 'bg-black text-white' : 'bg-white text-neutral-800'} px-2 py-2 border-b active:text-white active:bg-black">
                <span></span>
                <span class="text-2xl font-bold">$30</span>
                <span class="text-xs text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, fugiat?</span>
            </button>
        </div>

        <div class="form-group mb-6">
            <label for="amount" class="label">Or enter a donation amount</label>
            <input bind:value={amount} type="number" class="input text-neutral-700 w-full rounded-none" placeholder="$ 0.00" />
        </div>

        <h2 class="text-lg font-semibold mb-3">Choose a donation frequency</h2>

        <div class="grid grid-cols-2 text-center mb-6">
            <button on:click={() => frequency = 'monthly'} class="px-2 py-2 {frequency === 'monthly' ? 'bg-black text-white' : 'text-neutral-800 bg-white'}">
                <span></span>
                <span>Monthly</span>
            </button>

            <button on:click={() => frequency = 'once'} class="px-2 py-2 {frequency === 'once' ? 'bg-black text-white' : 'text-neutral-800 bg-white'}">
                <span></span>
                <span>One time</span>
            </button>
        </div>

        <div class="flex justify-between">
            <span></span>
            <button on:click={handleCheckout} class="btn btn-success rounded-full">Go to checkout</button>
        </div>
    </div>
</div>

<style>
  .background { 
    background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)),url('../lib/assets/donation.jpg'); 
    background-size: cover; 
    background-position: center; 
    background-attachment: fixed;
 }
</style>