<script lang="ts">
    import Name from "$lib/components/Name.svelte";
    import { onMount } from "svelte";
    import "./style.pcss"
	import Explanation from "$lib/components/Explanation.svelte";
    import Prism from 'prismjs';
    import "./prism.css"
    import "prismjs/components/prism-csharp"
    import "prismjs/components/prism-python"
    import SANGIDescription from "$lib/descriptions/SANGIDescription.svelte"
    import DlDescription from "$lib/descriptions/DLDescription.svelte";
    import MiscDescription from "$lib/descriptions/MiscDescription.svelte";
    import Swiper from "swiper"
    import {Autoplay} from "swiper/modules"
    import "swiper/css"
    import { codeExamples } from "./codeExamples";
    let dlSwiper : Swiper
    let miscSwiper : Swiper

    let pageLoaded : boolean = false
    onMount(()=>{
        pageLoaded = true
        HandleMainTabbers()
        SwiperInitializer()

    })

    function SwiperInitializer() {
        dlSwiper = new Swiper('.deepLearningSwiperContainer', {
            modules: [Autoplay],
            autoplay: {
                delay: 1500,
                disableOnInteraction: false
            },
        });

        dlSwiper.autoplay.stop()

        miscSwiper = new Swiper('.miscellaneousSwiperContainer', {
            modules: [Autoplay],
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            },
        })

        miscSwiper.autoplay.stop()
    }

    function HandleMainTabbers() {
        const tabs = document.querySelectorAll('[data-tab-target]')
        const tabsContents = document.querySelectorAll('[data-tab-content]')
        const tabsContentsDescriptors = document.querySelectorAll('[data-tab-descriptor]')

        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                const target = document.querySelectorAll(tab.dataset.tabTarget)
                dlSwiper.autoplay.stop()
                miscSwiper.autoplay.stop()

                tabsContents.forEach(content=>{
                    content.classList.remove("active")
                })

                tabs.forEach(element => {
                    element.classList.remove("active")
                })

                tabsContentsDescriptors.forEach(element => {
                    element.classList.remove("active")
                })

                target.forEach(element => {
                    element.classList.add("active")
                })

                tab.classList.add("active")
                
                //TAB STUFF RESTART AUTOPLAY
                if (tab.dataset.tabTarget === "#deep-learning") {
                    dlSwiper.autoplay.start()
                }

                if (tab.dataset.tabTarget === "#miscellaneous") {
                    miscSwiper.autoplay.start()
                }

            })
        })
    }

    
</script>

<div class="flex flex-col md:flex-row h-full w-full">
    <div class="w-screen md:w-4/12 h-[56rem] md:h-screen px-12 py-12 flex flex-col gap-4 md:gap-12">
        <div class="name-holder w-72 md:w-96 md:self-center -ml-3">
            <Name/>
        </div>

        <div class="summary mt-24 flex flex-col gap-2 relative">
            <!--this is the animation div no delay to this-->
            <div class="w-full h-auto relative">
                <div class="w-[105%] h-full absolute top-0 bg-pinky-red-100 
                {pageLoaded ? "scale-x-100 origin-left delay05s" : "scale-x-0 origin-left"} z-10"></div>
    
                <h1 class="text-6xl  text-ash-gray-100 {pageLoaded ? "opacity-100" : "opacity-0"} delay-500">Game &</h1>
                <h1 class="text-6xl  text-ash-gray-100 {pageLoaded ? "opacity-100" : "opacity-0"} delay-500">Software Developer</h1>
            </div>
            
            <!--animation div again-->
            <div class="w-full h-auto relative">
                <div class="w-[105%] h-full absolute bottom-0 bg-pinky-red-100
                {pageLoaded ? "scale-x-100 origin-left delay1s" : "scale-x-0 origin-left"} z-10"></div>
    
                <p class="text-lg text-ash-gray-200 mt-4 {pageLoaded ? "opacity-100" : "opacity-0"} delay-1000">I’m Mehmet Can Akbay, a game and software developer based in Istanbul. 
                    Click on my works and scroll down for more details.</p>

            </div>
        </div>

        <div class="external-links mt-20 md:mt-40 flex flex-col gap-1 relative">
            <!--animation div again-->
            <div class="w-[105%] h-full absolute bottom-0 bg-pinky-red-100 
            {pageLoaded ? "scale-x-100 origin-left delay15s" : "scale-x-0 origin-left"} z-10"></div>

            <h3 class="text-xl font-bold text-ash-gray-200 {pageLoaded ? "opacity-100" : "opacity-0"} delay-[1.5s]">External Links</h3>
            
            <div class="flex flex-row gap-0 -mx-2 scale-100 {pageLoaded ? "opacity-100" : "opacity-0"} delay-[1.5s]">
                <a href="https://www.linkedin.com/in/mehmet-can-akbay-a506bb201/"> <img src="svgs/linkedin.svg" class="scale-75" alt=""></a>
                <a href="https://github.com/mehmetcanakbay"><img src="svgs/github-mark-white.svg" class="scale-50 -my-3" alt=""> </a>
            </div>
        </div>
    </div>

    <!--RIGHT SIDE CONTENT-->

    <div class="w-full md:w-8/12 h-[48rem] md:h-screen relative {pageLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-1000">
        <ul class="ml-auto flex flex-col justify-end items-end gap-4 md:gap-12 mt-32 mr-4 absolute right-0 z-10 tabs">
            <li class="text-2xl md:text-4xl font-bold text-ash-gray-100 origin-right tab opacity-50 active cursor-pointer" data-tab-target="#SANGI">SANGI</li>
            <li class="text-2xl md:text-4xl font-bold text-ash-gray-100 origin-right tab opacity-50 cursor-pointer" data-tab-target="#ability-system">Ability System</li>
            <li class="text-2xl md:text-4xl font-bold text-ash-gray-100 origin-right tab opacity-50 cursor-pointer" data-tab-target="#deep-learning">Deep Learning</li>
            <li class="text-2xl md:text-4xl font-bold text-ash-gray-100 origin-right tab opacity-50 cursor-pointer" data-tab-target="#miscellaneous">Miscellaneous</li>

        </ul>

        <div class="tab-content h-[26rem] md:h-full overflow-hidden">
            <div id="SANGI" data-tab-content class="active h-full">
                <div class="">
                    <video
                        autoplay
                        loop
                        muted
                        playsinline
                        class="h-[80%] mt-20 scale-[2.5] lg:scale-[2.2] xl:scale-[1.7] overflow-hidden brightness-75"
                    >
                        <source
                        src="video/sangi.mp4"
                        type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>

                </div>

                <Explanation title="Short Description" class="z-10 block bottom-12 md:bottom-32 absolute px-4 md:px-12">I have completed my game, which is a fast paced 2D platformer with 4 different weapons
                    that apply their own element on enemies, which can then cause a reaction if another element
                    hits the affected enemy. It's available on Steam. For more details, scroll down. </Explanation>
            </div>
            <div id="ability-system" data-tab-content class="h-full text-ash-gray-100 overflow-y-scroll scrollbar-hide w-full bg-ash-gray-850">
                <div class="text-xs md:text-sm">
                    <pre><code>
                        {@html Prism.highlight(codeExamples[0], Prism.languages["csharp"], "csharp")}
                    </code></pre>

                </div>
                <Explanation title="Short Description" class="z-10 block bottom-12 md:bottom-32 absolute px-4 md:px-12">This is an ability system made for Unity.
                    Using this system helps you while developing multiple abilities because you dont need to keep track of their cooldowns, what to do once it's
                cooldown is finished etc. they are all available to override in the scriptable object. This here is an example dash ability. For more information and an example
            project, scroll down below.  </Explanation>
            </div>

            <div id="deep-learning" data-tab-content class="h-full text-ash-gray-100 overflow-y-scroll scrollbar-hide w-full">
                <div class=" swiper deepLearningSwiperContainer w-full h-full">
                    <div class=" swiper-wrapper w-full h-full bg-ash-gray-850">    
                        <div class="swiper-slide w-full h-full overflow-y-scroll scrollbar-hide text-xs md:text-sm">
                            <pre><code>
                                {@html Prism.highlight(codeExamples[1], Prism.languages["python"], "python")}
                            </code></pre>
                        </div>

                        <div class="swiper-slide  w-full h-full overflow-y-scroll scrollbar-hide bg-ash-gray-850 text-xs md:text-sm">
                            <pre><code>
                                {@html Prism.highlight(codeExamples[2], Prism.languages["python"], "python")}
                            </code></pre>
                        </div>

                        <div class="swiper-slide  w-full h-full overflow-hidden ">
                            <img src="gifs/styletransfer-example2.gif" alt="neural example" class="scale-100 object-fill w-full h-full">
                        </div>

                        <div class="swiper-slide  w-full h-full overflow-hidden">
                            <img src="gifs/neuralsite-example.gif" alt="neural example" class="">
                        </div>
                    </div>
                </div>

                <Explanation title="Short Description" class="z-10 block bottom-12 md:bottom-32 absolute px-4 md:px-12">
                    These are some of the deep learning stuff I have worked on. First one is the main ESRGAN code. ESRGAN is still used for
                    upscaling diffuse models' output. Second one is the Gatys' Style Transfer architecture.                     
                    Third one is a gif from my game, which uses Johnson's style transfer model to stylize the game screen. 
                    Last one is a website I have done,
                    you can choose losses and learning rates and see how weights shift in real time, coded in vanilla JS with no libraries.

                </Explanation>
            </div>

            <div id="miscellaneous" data-tab-content class="h-full text-ash-gray-100 overflow-y-scroll scrollbar-hide w-full">
                <div class="swiper miscellaneousSwiperContainer w-full h-full">
                    <div class=" swiper-wrapper w-full h-full bg-ash-gray-850">    
                        <div class="swiper-slide  w-full h-full overflow-hidden">
                            <img src="gifs/shaderexample.gif" alt="neural example" class="object-cover">
                        </div>

                        <div class="swiper-slide  w-full h-full overflow-hidden">
                            <img src="images/noisemaker.png" alt="neural example" class="">
                        </div>
                    </div>
                </div>
                
                <Explanation title="Short Description" class="z-10 block bottom-12 md:bottom-32 absolute px-4 md:px-12">
                    I like shader coding a lot. Shadertoy is one of my favourite websites. Because of that, I also like to tinker 
                    with shader graph and visual effect graph. In the first image, I created a shader graph, with exposed parameters, which
                    I controlled using visual effect graph to achieve the effect below. In the second image, its an image from one of my  
                    repositories, which consist of code that helped me achieve some of the effects I wanted, 
                    or wanted to see how some effects were done completely from scratch. It includes a perlin noise from scratch,
                    a flowfield made from scratch etc.
                </Explanation>
            </div>
        </div>
    </div>
</div>

<!--divider-->
<div class="w-full h-2 bg-ash-gray-900"></div>
<!---->

<div class="descriptions px-4 md:px-52 py-8 pb-28" >
    <div id="SANGI" data-tab-descriptor class="active">
        <div class="flex flex-col gap-0 pb-1">
            <h1 class="text-4xl md:text-6xl text-ash-gray-100 font-semibold">SANGI</h1>
            <h3 class="text-2xl md:text-2xl text-ash-gray-400 font-medium -mt-1">2D Action Platformer Game</h3>
        </div>

        <SANGIDescription/>
    </div>

    <div id="ability-system" data-tab-descriptor>
        <div class="flex flex-col gap-0 pb-1">
            <h1 class="text-3xl md:text-6xl text-ash-gray-100 font-semibold">Ability System</h1>
            <h3 class="text-xl md:text-2xl text-ash-gray-400 font-medium ">Ability System made for Unity</h3>
        </div>

        <div class="text-ash-gray-200 text-base md:text-lg py-4">
            <p class="py-2">
                This is the ability system I have used in my released game. Main reason why its so useful is that <b>it solves</b>
                a lot of the problems an ability might have, such as <b>cooldowns</b>, what to do once its <b>ready</b>, if it has a duration, 
                <b>what to do while it ticks</b> etc.
            </p>

            <p class="py-2">
                There are 3 scripts, -AbilityBase, AbilityComponent and AbilityDataHolder- and these work together to make the system tick.
                <br>
                In short, <b>AbilityBase</b> is the script where <b>system logic</b> like cooldowns, what happens when its ready, what happens when its activated etc. happens. This is the logic of the system.
                <br>
                <b>AbilityDataHolder</b> is a ScriptableObject, and with overrideable functions, you can write your own ability logic, to then add to AbilityComponent. You can think of this as <b>"ability logic data holder".</b>
                <br>
                <b>AbilityComponent</b> holds creates and holds AbilityBases, basically its the <b>initializer and maintainer</b>.
            </p>

            <p class="py-2">
                For more information and its usage, with an example project, check out my repostiory.
            </p>

            <div class="py-4">
                <a href="https://github.com/mehmetcanakbay/abilitySystem-unity" class="text-pinky-red-100 font-extrabold text-xl">Link to the repository</a>
            </div>
        </div>
    </div>

    <div id="deep-learning" data-tab-descriptor class="">
        <div class="flex flex-col gap-0 pb-1">
            <h1 class="text-4xl md:text-6xl text-ash-gray-100 font-semibold">Deep Learning</h1>
            <h3 class="text-2xl md:text-2xl text-ash-gray-400 font-medium -mt-1">In-depth Explanation of the Works Mentioned</h3>
        </div>

        <DlDescription/>
    </div>

    <div id="miscellaneous" data-tab-descriptor class="">
        <div class="flex flex-col gap-0 pb-1">
            <h1 class="text-4xl md:text-6xl text-ash-gray-100 font-semibold">Miscellaneous</h1>
            <h3 class="text-2xl md:text-2xl text-ash-gray-400 font-medium -mt-1">Various Other Works I Have Done</h3>
        </div>  

        <MiscDescription/>
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

    .videoshadow {
        box-shadow:
            inset 0px 4rem 1rem -0.2rem #000000,
            inset 0px -4rem 1rem -0.2rem #000000; 
    }
    /* For Webkit-based browsers (Chrome, Safari and Opera) */
    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }

    /* For IE, Edge and Firefox */
    .scrollbar-hide {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
    
    b {
        @apply text-ash-gray-100;
    }
    
</style>

