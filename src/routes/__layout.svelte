<script lang="ts">
	import '../app.css';
	import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@rgossiaux/svelte-headlessui';
</script>

<TabGroup>
	<TabList>
		<a href="/"><Tab>Tab 1</Tab></a>
		<a href="/tab2"><Tab>Tab 2</Tab></a>
		<a href="/tab3"><Tab>Tab 3</Tab></a>
	</TabList>
	<TabPanels>
		<TabPanel
			><main>
				<slot />
			</main></TabPanel
		>
		<TabPanel
			><main>
				<slot />
			</main></TabPanel
		>
		<TabPanel
			><main>
				<slot />
			</main></TabPanel
		>
	</TabPanels>
</TabGroup>
