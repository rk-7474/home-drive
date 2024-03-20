<script lang="ts">
  import * as Popover from "$lib/components/ui/popover/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import Icon from "./Icon.svelte";

  export let uuid: string;

</script>

<Popover.Root>
  <Popover.Trigger><slot/></Popover.Trigger>
  <Popover.Content class="w-40 flex justify-between mt-1">
    <Icon name="download" click={() => downloadFile(uuid)}/>
    <Icon name="delete" click={() => deleteFile(uuid)}/>
  </Popover.Content>
</Popover.Root>
