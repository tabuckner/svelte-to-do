<script lang="ts">
  import { toDos } from "../stores/to-do.store";
  import { fade } from "svelte/transition";
  import { flip } from "svelte/animate";

  import CreateToDo from "./CreateToDo.svelte";
  import ToDoListItem from "./ToDoListItem.svelte";
</script>

<div class="to-do-list bg-white rounded-xl p-4 w-80 shadow">
  <CreateToDo />
  <div class="to-do-list__items">
    {#if $toDos.length > 0}
      {#each $toDos as toDo (toDo.id)}
        <div transition:fade animate:flip={{ duration: 300 }}>
          <ToDoListItem {toDo} />
        </div>
      {/each}
    {:else}
      <p transition:fade>No ToDos to display. Try adding one above!</p>
    {/if}
  </div>
</div>
