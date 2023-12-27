<script lang="ts">
    export let title : string;
</script>

<div class={$$props.class}>
    <div class="flex flex-col gap-4">

        <div class="w-2/3 xl:w-3/12 relative h-auto">
            <h1 class="text-2xl font-light text-ash-gray-100 px-2 mr-8 py-1 z-10 relative">{title}</h1>

            <div class="h-full w-full top-0 bg-white backdrop-blur-xl opacity-100 absolute"></div>
            <div class="w-full h-full top-0 bg-ash-gray-900 opacity-70 z-0 absolute"></div>

        </div>
    
        <div class="text-ash-gray-100 text-lg font-light relative w-auto h-auto">
            <div class="px-2 z-10 w-full h-full relative py-1 ">
                <slot></slot>
                
            </div>
            <div class="w-full h-full top-0 bg-white px-4 py-8 opacity-100 z-0 absolute backdrop-blur-xl"></div>
            <div class="w-full h-full top-0 bg-ash-gray-900 px-4 py-8 opacity-70 z-0 absolute"></div>
        </div>
    </div>

</div>