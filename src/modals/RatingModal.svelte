<script lang="ts">
    import { modalStore } from "@skeletonlabs/skeleton";
    export let balls: string;
    balls = "balls";
</script>

{#if $modalStore[0]}
    <div></div>
{/if}