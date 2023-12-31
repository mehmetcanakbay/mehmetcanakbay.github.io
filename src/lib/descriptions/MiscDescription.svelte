<script>
    import {Tabs, Tab, TabList, TabPanel} from "$lib/components/tabbers/tabber"
</script>

<Tabs>
    <TabList class="flex flex-row gap-4 md:gap-12 py-6 text-ash-gray-100 text-base md:text-xl whitespace-nowrap flex-wrap">
        <Tab>Shader Graph Examples</Tab>
        <Tab>Noise Abstract Repository</Tab>
    </TabList>

    <TabPanel class="text-ash-gray-200 text-base md:text-lg">
        <p class="py-2">
            This repository consist some of the shader graphs I have made over the course of 2023. They are taken from multiple projects.
            Some of them are extremely simple while some of them are complex. For more examples, check out the repository below.
        </p>

        <div class="py-4">
            <a href="https://github.com/mehmetcanakbay/shadergraph-examples2023" class="text-pinky-red-100 font-extrabold text-xl">Link to the repository</a>
        </div>

    </TabPanel>

    <TabPanel class="text-ash-gray-200 text-base md:text-lg">

        <p class="py-2">
            This repository consist of art like image packing, random shapes abstract art, implementation of perlin noise, and a flowfield
            art made in Pygame. It's written in Python. For more examples and code, check out the repository below.
        </p>

        <div class="py-4">
            <a href="https://github.com/mehmetcanakbay/noiseabstractart-python" class="text-pinky-red-100 font-extrabold text-xl">Link to the repository</a>
        </div>

    </TabPanel>

</Tabs>