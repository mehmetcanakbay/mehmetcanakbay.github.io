<script lang="ts">
    import Name from "$lib/components/Name.svelte";
    import { onMount } from "svelte";
    import "./animations.pcss"
    let pageLoaded : boolean = false

    onMount(()=>{
        pageLoaded = true
    })

</script>

<div class="flex flex-col md:flex-row h-screen w-full">
    <div class="w-full md:w-4/12 h-screen px-12 py-12 flex flex-col gap-4 md:gap-12">
        <div class="name-holder w-full">
            <Name/>
        </div>

        <div class="summary mt-24 flex flex-col gap-2 relative">
            <!--this is the animation div no delay to this-->
            <div class="w-full h-36 absolute top-0 bg-pinky-red-100 transition-transform duration-[400] ease-[cubic-bezier(.17,.7,.12,1.01)]
            {pageLoaded ? "scale-x-100 origin-left delay05s" : "scale-x-0 origin-left"} z-10"></div>


            <h1 class="text-6xl  text-ash-gray-100 {pageLoaded ? "opacity-100" : "opacity-0"} delay-500">Game &</h1>
            <h1 class="text-6xl  text-ash-gray-100 {pageLoaded ? "opacity-100" : "opacity-0"} delay-500">Software Developer</h1>
            
            <!--animation div again-->
            <div class="w-full h-24 absolute bottom-0 bg-pinky-red-100 transition-transform delay-500 duration-500 ease-[cubic-bezier(.17,.7,.12,1.01)]
            {pageLoaded ? "scale-x-100 origin-left delay1s" : "scale-x-0 origin-left"} z-10"></div>

            <p class="text-lg text-ash-gray-200 pt-4 {pageLoaded ? "opacity-100" : "opacity-0"} delay-1000">I’m Mehmet Can Akbay, a game and software developer, based in Istanbul. 
                You can see my works on the right side. Click on them and scroll down for more details.</p>
        </div>

        <div class="external-links mt-40 flex flex-col gap-1 relative">
            <div class="w-full h-full absolute bottom-0 bg-pinky-red-100 transition-transform delay-[1s] duration-700 ease-[cubic-bezier(.17,.7,.12,1.01)]
            {pageLoaded ? "scale-x-100 origin-left delay15s" : "scale-x-0 origin-left"} z-10"></div>

            <h3 class="text-xl font-bold text-ash-gray-200 {pageLoaded ? "opacity-100" : "opacity-0"} delay-[1.5s]">External Links</h3>
            
            <div class="flex flex-row gap-0 -mx-2 scale-100 {pageLoaded ? "opacity-100" : "opacity-0"} delay-[1.5s]">
                <a href="https://www.linkedin.com/in/mehmet-can-akbay-a506bb201/"> <img src="svgs/linkedin.svg" class="scale-75" alt=""></a>
                <a href="https://github.com/mehmetcanakbay"><img src="svgs/github-mark-white.svg" class="scale-50 -my-3" alt=""> </a>
            </div>
        </div>
    </div>

    <div class="w-full md:w-8/12 h-screen bg-pinky-red-900">


        
    </div>
</div>

<!-- <h1 class="bg-pinky-red-100 h-96">DETAILS</h1> -->
<style>
    .delay05s {
        animation: scaleOutX 0.5s cubic-bezier(.17,.7,.12,1.01) 0.4s forwards ;
    }

    .delay1s {
        animation: scaleOutX 0.5s cubic-bezier(.17,.7,.12,1.01) 1s forwards ;
    }

    .delay15s {
        animation: scaleOutX 1s cubic-bezier(.17,.7,.12,1.01) 1.5s forwards ;
    }
</style>

