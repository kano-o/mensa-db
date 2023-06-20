<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->


<script>
    import { TabGroup, Tab } from '@skeletonlabs/skeleton';

    let tabSet = 0;

    let date = new Date();
    date = date.toISOString().slice(0, 10);
    console.log(date);

    let data  = ''
    fetch('https://sls.api.stw-on.de/v1/locations/101/menu/' + date)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            data=myJson
            console.debug(data)
        });
</script>

<div class="container h-full mx-auto flex justify-center items-center">

    <section>
        <TabGroup justify="justify-center">
            <Tab bind:group={tabSet} name="Mensa1" value={0}>Mensa 1</Tab>
            <Tab bind:group={tabSet} name="Mensa2" value={1}>Mensa 2</Tab>
            <Tab bind:group={tabSet} name="360°" value={2}>360°</Tab>
            <!-- Tab Panels --->
            <svelte:fragment slot="panel">
                {#if tabSet === 0}
                    ${JSON.stringify(data,null,2)}
                {:else if tabSet === 1}
                    (tab panel 2 contents)
                {:else if tabSet === 2}
                    (tab panel 3 contents)
                {/if}
            </svelte:fragment>
        </TabGroup>
    </section>

</div>