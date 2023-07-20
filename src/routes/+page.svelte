<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->


<script lang="ts">
	import {TabGroup, Tab, tableMapperValues} from '@skeletonlabs/skeleton';
	import { Table } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';
    import { Ratings } from '@skeletonlabs/skeleton';
    import {IconStar, IconStarHalfFilled, IconStarFilled} from '@tabler/icons-svelte';

    let tabSet = 0;

    export let data;
    var dataString = data.htmlString;
    let value = { current: 3.5, max: 7};

    function iconClick(event: CustomEvent<{index:number}>): void {
        value.current = event.detail.index;
    }

    function generateTableSource(stringIndex) {
        const sourceData = [];
        for (let i = 0; i < dataString[stringIndex].length; i += 2) {
            sourceData.push({name: dataString[stringIndex][i],
                             symbol: 'test',
                             preis: dataString[stringIndex][i + 1]})
        }
        return sourceData;
    }

    const tableSimple0: TableSource = {
		head: ['Name', 'Symbol', 'Preis'],
		body: tableMapperValues(generateTableSource(0), ['name', 'symbol', 'preis'])
	}
    const tableSimple1: TableSource = {
        head: ['Name', 'Symbol', 'Preis'],
        body: tableMapperValues(generateTableSource(1), ['name', 'symbol', 'preis'])
    }
    const tableSimple2: TableSource = {
        head: ['Name', 'Symbol', 'Preis'],
        body: tableMapperValues(generateTableSource(2), ['name', 'symbol', 'preis'])
    }

</script>

<div class="container h-full mx-auto flex justify-center items-center">

    <section>
        <TabGroup justify="justify-center">
            <Tab bind:group={tabSet} name="Mensa1" value={0}>Mensa 1</Tab>
            <Tab bind:group={tabSet} name="Mensa2" value={1}>Mensa 2</Tab>
            <Tab bind:group={tabSet} name="360°" value={2}>360°</Tab>
            <!-- Tab Panels --->
            <svelte:fragment slot="panel">
                <span style="white-space: pre-line">
                {#if tabSet === 0}

                    <div>
                        <Table source={tableSimple0} interactive={true}  />
                        <!--<on:selected={ }-->

                        <Ratings bind:value={value.current} max={value.max} on:icon={iconClick}>
	                        <svelte:fragment slot="empty"><IconStar size={20} stroke={1}/></svelte:fragment>
	                        <svelte:fragment slot="half"><IconStarHalfFilled size={20} stroke={1}/></svelte:fragment>
	                        <svelte:fragment slot="full"><IconStarFilled size={20} stroke={1}/></svelte:fragment>
                        </Ratings>

                    </div>
                {:else if tabSet === 1}
                    <div>
                        <Table source={tableSimple1}/>
                    </div>
                {:else if tabSet === 2}
                    <div>
                        <Table source={tableSimple2}/>
                    </div>
                {/if}
                </span>
            </svelte:fragment>
        </TabGroup>
    </section>

</div>