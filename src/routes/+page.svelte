<script lang="ts">
    import Files from "$lib/components/Files.svelte";
	import Icon from "$lib/components/Icon.svelte";
    import UploadDialog from "$lib/components/UploadDialog.svelte";
    import ContextMenuWindow from "$lib/components/ContextMenuWindow.svelte";

    export let data;

    const {files} = data;
</script>


<ContextMenuWindow>
    <div class="flex flex-row p-5 justify-between">

        <h1 class="scroll-m-20 text-4xl font-bold tracking-tight lg:text-4xl">
            Home drive
        </h1>
        
        <UploadDialog/>

    </div>

    <hr class="mx-4">

    <Files {files}/>
</ContextMenuWindow>


