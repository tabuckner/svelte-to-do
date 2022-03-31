<script lang="ts">
  export let isCompleted = false;

  $: cssClasses = isCompleted
    ? "text-transparent float-right"
    : "text-green-500 hover:text-red-600 float-right";
</script>

<div class={cssClasses}>
  <span class="fa fa-check-circle" on:click />
</div>
