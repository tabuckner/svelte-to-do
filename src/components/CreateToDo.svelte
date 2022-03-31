<script lang="ts">
  import type { ToDoModel } from "../models/to-do.model";

  import { toDos } from "../stores/to-do.store";

  let value: string;
  let inputInvalid: boolean = false;

  const baseButtonCssClasses =
    "flex-initial bg-blue-100 hover:bg-blue-200 rounded-xl p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600 w-20";

  $: buttonShouldBeDisabled = inputInvalid || !value || value.trim().length < 1;
  $: buttonCssClasses = buttonShouldBeDisabled
    ? `${baseButtonCssClasses} opacity-50 cursor-not-allowed`
    : baseButtonCssClasses;

  const onCreateNewToDo = () => {
    if (buttonShouldBeDisabled) {
      return;
    }

    const nextToDo: ToDoModel = {
      id: Math.random(),
      content: value,
      completed: false,
    };
    toDos.update((currentToDos) => [...currentToDos, nextToDo]);

    value = undefined;
    inputInvalid = false;
  };

  const onInput = () => {
    if (value && value.trim().length < 3) {
      inputInvalid = true;
    } else {
      inputInvalid = false;
    }
  };

  const onBlur = () => {
    if (value && value.trim().length === 0) {
      inputInvalid = false;
    }
  };
</script>

<div class="flex">
  <input
    class="flex-initial bg-gray-100 rounded-xl p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full mr-2 pl-4"
    placeholder="What to do, What ToDo..."
    class:border-red-500={inputInvalid}
    bind:value
    on:input={onInput}
    on:blur={onBlur}
  />
  <button
    class={buttonCssClasses}
    on:click={onCreateNewToDo}
    disabled={buttonShouldBeDisabled}
  >
    <span class="fa fa-plus text-blue-500" />
  </button>
</div>
{#if inputInvalid}
  <div class="error-message">ToDo item must have at least 1 character.</div>
{/if}

<style>
  .error-message {
    font-size: 12px;
    color: red;
    margin-bottom: 8px;
  }
</style>
