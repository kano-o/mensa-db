<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->


<script>
    import { TabGroup, Tab } from '@skeletonlabs/skeleton';

    let tabSet = 2;
</script>

<div class="container h-full mx-auto flex justify-center items-center">

    <section>
        <TabGroup >
            <Tab bind:group={tabSet} name="tab1" value={0}>Mensa 1</Tab>
            <Tab bind:group={tabSet} name="tab2" value={1}>Mensa 2</Tab>
            <Tab bind:group={tabSet} name="tab3" value={2}>360°</Tab>
            <!-- Tab Panels --->
            <svelte:fragment slot="panel">
                {#if tabSet === 0}
                    (tab panel 1 contents)
                {:else if tabSet === 1}
                    (tab panel 2 contents)
                {:else if tabSet === 2}
                    (tab panel 3 contents)
                {/if}
            </svelte:fragment>
        </TabGroup>
    </section>

</div>