<script lang="ts">
  import { enhance } from '$app/forms';
  import {page} from '$app/stores';
  import { fade, slide } from 'svelte/transition';

    const amount = $page.url.searchParams.get('amount');
    const frequency = $page.url.searchParams.get('frequency');
    let submitting = false;
    let redirect_url = '';
</script>

<section class="pt-8 pb-20 w-full" transition:slide>
    <article class="max-w-md mx-auto mb-5 px-4 lg:px-0">
        <a href="/" class="btn mb-4">Back</a>

        <h2 class="text-2xl font-semibold">Let's know about you</h2>
        <p>a little info about you so we can thank you!</p>
    </article>

    <div class="max-w-md mx-auto px-4 py-6 lg:border rounded" transition:fade>
        <form method="POST" action="/checkout?/checkout" use:enhance={() => {
            submitting = true;

            return async ({result}) => {
                if(result.type === 'failure') {
                    console.log(result.data);
                }
                
                if(result.type === 'success') {
                    redirect_url = `${result.data?.data}`;
                }
            }
        }}>
            <input type="hidden" name="amount" value={amount ? +amount : 10}>
            <input type="hidden" name="frequency" value="{frequency}">

            <div class="mb-5 grid grid-cols-12 gap-4">
                <div class="form-control col-span-6">
                    <label for="" class="label">First Name</label>
                    <input name="first_name" type="text" class="input input-bordered" placeholder="First name" required />
                </div>
        
                <div class="form-control col-span-6">
                    <label for="" class="label">Last Name</label>
                    <input name="last_name" type="text" class="input input-bordered" placeholder="Last name" required>
                </div>
        
                <div class="form-control col-span-12">
                    <label for="" class="label">Phone Number</label>
                    <input name="phone" type="tel" class="input input-bordered" placeholder="Phone number" required>
                </div>
        
                <div class="form-control col-span-12">
                    <label for="" class="label">Email</label>
                    <input name="email" type="email" class="input input-bordered" placeholder="Email address" required>
                </div>

                <div class="form-control col-span-12">
                    <label for="" class="label">Country</label>
                    <select name="country" class="input input-bordered" id="">
                        <option value="Nigeria" selected>Nigeria</option>
                        <option value="Others">Other countries</option>
                    </select>
                </div>
            </div>

            <button type="submit" class="btn btn-warning w-full disabled:bg-yellow-100 disabled:text-yellow-600" disabled={submitting}>
                {#if submitting}
                <span class="loading"></span>
                {:else}
                <span>Proceed to pay ${amount || 10}</span>
                {/if}
            </button>
        </form>
    </div>
</section>

{#if redirect_url}
<iframe src="{redirect_url}" title="Proceed to pay" style="position: fixed; top: 0px; left: 0px; z-index: 2147483647; border: none; opacity: 1; width: 100%; height: 100%;" allowtransparency={true} width="100%" height="100%" name="checkout"></iframe>
{/if}
