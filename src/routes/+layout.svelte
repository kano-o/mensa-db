<script lang='ts'>
    // The ordering of these imports is critical to your app working properly
    import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
    // If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
    import '@skeletonlabs/skeleton/styles/skeleton.css';
    // Most of your app wide CSS should be put in this file
    import '../app.postcss';
    import {AppShell, AppBar} from '@skeletonlabs/skeleton';
    import {IconBrandGithubFilled, IconSoup, IconDatabaseExclamation} from '@tabler/icons-svelte'
    import {LightSwitch} from '@skeletonlabs/skeleton';
</script>

<!-- App Shell -->
<AppShell>
    <svelte:fragment slot="header">
        <AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
            <svelte:fragment slot="lead">
                <IconDatabaseExclamation size="30" stroke="2"/>
            </svelte:fragment>

            <strong class="text-xl">Mensa-DB</strong>

            <svelte:fragment slot="trail">
                <LightSwitch/>
            </svelte:fragment>
        </AppBar>
    </svelte:fragment>

    <slot />

    <svelte:fragment slot="footer">
        <a
            class="btn variant-ghost-surface"
            href="https://github.com/kano-o/mensa-db"
            target="_blank"
            rel="noreferrer"
            style="float:right"
        >
		    <span>
		        <IconBrandGithubFilled size={20} stroke={1}/>
		    </span>
            <span>
		        Github
            </span>
        </a>

        <a
            class="btn variant-ghost-surface"
            href="https://stw-on.de/braunschweig/essen/mensen-cafeterien/"
            target="_blank"
            rel="noreferrer"
            style="float:right"
        >
		    <span>
		        <IconSoup size={20} stroke={1}/>
		    </span>
            <span>
		    Mensa
		    </span>
        </a>
    </svelte:fragment>
</AppShell>

