<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";

    export let name: string = "";
    export let click: undefined | (() => void) = undefined;
    export let c: string = "";
</script>  
 
{#if click != undefined}
    <Button variant="outline" on:click={click} class={c}>
        <span class="material-symbols-outlined flex items-center">
            {name}
        </span>
    </Button>
{:else}
    <span class="material-symbols-outlined flex items-center ${c}">
        {name}
    </span>
{/if}
    
