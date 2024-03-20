<script lang="ts">
    import Icon from "./Icon.svelte";
    import type { File } from "$lib/types"
    import FileOptions from "./FileOptions.svelte";
    export let files: File[];

    const formatDate = (date: Date) => {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    const formatIcon = (file_name: string) => {
        // const ext = file_name.split('.').pop();

        // switch (ext) {
        //     case "folder":
        //         return "folder";
        //     case "file":
        //         return "description";
        //     case "image":
        //         return "image";
        // }

        return "description";
    }

    const formatSize = (size: number) => {
        if (size > 1024*1024)
            return `${(size / (1024*1024)).toFixed(2)} MB`;
        if (size > 1024)
            return `${(size / (1024)).toFixed(2)} KB`;
        else
            return `${size} B`;
    }
</script>

{#if files.length > 0} 
    {#each files as {name, size, createdAt, uuid}}
        <div class="[&>*]:w-full mx-4">
            <FileOptions {uuid}>
                <div class="w-full border-gray border-2 rounded-lg text-xl p-3 flex flex-row justify-between cursor-pointer hover:bg-slate-900 transition mt-2">    
                    <Icon name={formatIcon(name)}/>
                        <span class="flex flex-row justify-between w-full px-2">
                            <p>{name}</p>
                            <p>{formatSize(size)}</p>
                            <p>{formatDate(createdAt)}</p>
                        </span>        
                    <Icon name="more_horiz"/>
                </div>
            </FileOptions>
        </div>
    {/each}
{:else}
    <div class="w-full h-full flex justify-center items-center">
        <p class="text-4xl py-48 text-gray-500">No file stored.</p>
    </div>
{/if}
