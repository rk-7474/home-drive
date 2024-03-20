	
<script lang="ts">
    import * as Dialog from "$lib/components/ui/dialog";
    import { Button } from "$lib/components/ui/button/index.js";
	import Icon from "./Icon.svelte";

    let files: FileList;

    $: {
        if (files) {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                console.log(`File name: ${file.name}, File size: ${file.size}, File type: ${file.type}`);
            }
        }
    }
    
    
</script>

<Dialog.Root>
    <Dialog.Trigger>
        <Icon name="upload" click={() => ""}/>
    </Dialog.Trigger>
    <Dialog.Content>
        <form action="?/upload" method="POST" enctype="multipart/form-data">
            <Dialog.Header>
                <Dialog.Title>Upload your file</Dialog.Title>
            </Dialog.Header>
            
            <div class="flex justify-center my-5 {files ? "hidden" : ""}">
                <label class="w-64 flex flex-col items-center px-4 py-6 bg-transparent text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                    <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span class="mt-2 text-base leading-normal">Select a file</span>
                    <input type='file' name="files" bind:files multiple class="hidden" />
                </label>
            </div>

            {#if files}
                {#each files as file}
                    <p class="align-middle p-2 my-2 rounded border-2 border-gray">{file.name}</p>
                {/each}
                <Dialog.Footer>
                    <Button type="submit">Upload</Button>
                </Dialog.Footer>
            {/if}
            
        </form>
    </Dialog.Content>
</Dialog.Root>


  