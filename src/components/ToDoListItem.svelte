<script lang="ts">
  import type { ToDoModel } from "../models/to-do.model";
  import { toDos } from "../stores/to-do.store";
  import CompleteButton from "./CompleteButton.svelte";
  import DeleteButton from "./DeleteButton.svelte";

  export let toDo: ToDoModel;

  const onClickDelete = () => {
    toDos.update((currentToDos) =>
      currentToDos.filter((eachToDo) => eachToDo.id !== toDo.id)
    );
  };

  const onClickComplete = () => {
    toDos.update((currentToDos) => {
      const targetToDo = currentToDos.find(
        (eachToDo) => eachToDo.id === toDo.id
      );
      targetToDo.completed = true;

      return [...currentToDos];
    });
  };
</script>

<div class="bg-gray-100 rounded-xl p-2 mb-2 bg-gray-100">
  <div class="flex">
    <div class="flex-auto pl-2">
      <div class="leading-tight text-gray-500" class:completed={toDo.completed}>
        {toDo.content}
      </div>
    </div>
    <div class="flex-none pr-2">
      <DeleteButton on:click={onClickDelete} />
    </div>
    <div class="flex-none">
      <CompleteButton on:click={onClickComplete} isCompleted={toDo.completed}/>
    </div>
  </div>
</div>

<style>
  .completed {
    text-decoration: line-through;
  }
</style>
