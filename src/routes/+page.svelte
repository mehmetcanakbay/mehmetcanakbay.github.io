<script lang="ts">
    import Name from "$lib/components/Name.svelte";
    import { onMount } from "svelte";
    import "./style.pcss"
	import Explanation from "$lib/components/Explanation.svelte";
    import Prism from 'prismjs';
    import "./prism.css"
    import "prismjs/components/prism-csharp"

    let pageLoaded : boolean = false
    onMount(()=>{
        pageLoaded = true
        const tabs = document.querySelectorAll('[data-tab-target]')
        const tabsContents = document.querySelectorAll('[data-tab-content]')
        console.log(tabs[0]);

        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                const target = document.querySelector(tab.dataset.tabTarget)
                tabsContents.forEach(content=>{
                    content.classList.remove("active")
                })

                tabs.forEach(element => {
                    element.classList.remove("active")
                });
                console.log(target);
                target.classList.add("active")
                tab.classList.add("active")
            })
        })
    })

    //Spaces at the end must exist to let user scroll down a little bit.
    const abilitySystemCode = 
    `
    using System.Collections;
    using System.Collections.Generic;
    using UnityEngine;

    [CreateAssetMenu(menuName = "Abilities/AbilityDash")]
    public class AbilityDash : AbilityDataHolder
    {
        [Header("ThisAbilitySettings")]
        public float dashStaminaNeedAmount = 10.0f; 
        public float distAmount = 50.0f; 
        public override void CheckResources(GameObject go)
        {
            base.CheckResources(go);
            float currStamina = PlayerAttributes.Instance.GetCurrentDashStamina();
            if (currStamina >= dashStaminaNeedAmount) {
                doesHaveResources = true;
            } else {
                doesHaveResources = false;
            }
        }

        public override void OnAbilityActivated(GameObject go)
        {
            base.OnAbilityActivated(go);
            Rigidbody rb = go.GetComponent<Rigidbody>();
            PlayerMovement movementComponent = go.GetComponent<PlayerMovement>();
            if (rb == null) return;

            rb.AddForce(movementComponent.moveDirection*distAmount, ForceMode.Impulse);

            ConfirmResourceExpense();
        }

        void ConfirmResourceExpense() {
            PlayerAttributes.Instance.SetDashStamina(
                PlayerAttributes.Instance.GetCurrentDashStamina()-
                dashStaminaNeedAmount
            );
        }
    }
    
    
    
    







    `

    
    
</script>

<div class="flex flex-col md:flex-row h-full w-full">
    <div class="w-screen md:w-4/12 h-[56rem] md:h-screen px-12 py-12 flex flex-col gap-4 md:gap-12">
        <div class="name-holder w-72 md:w-96 md:self-center -ml-3">
            <Name/>
        </div>

        <div class="summary mt-24 flex flex-col gap-2 relative">
            <!--this is the animation div no delay to this-->
            <div class="w-full h-auto relative overflow-hidden">
                <div class="w-full h-full absolute top-0 bg-pinky-red-100 
                {pageLoaded ? "scale-x-100 origin-left delay05s" : "scale-x-0 origin-left"} z-10"></div>
    
                <h1 class="text-6xl  text-ash-gray-100 {pageLoaded ? "opacity-100" : "opacity-0"} delay-500">Game &</h1>
                <h1 class="text-6xl  text-ash-gray-100 {pageLoaded ? "opacity-100" : "opacity-0"} delay-500">Software Developer</h1>
            </div>
            
            <!--animation div again-->
            <div class="w-full h-auto overflow-hidden relative">
                <div class="w-full h-full absolute bottom-0 bg-pinky-red-100
                {pageLoaded ? "scale-x-100 origin-left delay1s" : "scale-x-0 origin-left"} z-10"></div>
    
                <p class="text-lg text-ash-gray-200 mt-4 {pageLoaded ? "opacity-100" : "opacity-0"} delay-1000">I’m Mehmet Can Akbay, a game and software developer, based in Istanbul. 
                    You can see my works on the right side. Click on them and scroll down for more details.</p>

            </div>
        </div>

        <div class="external-links mt-20 md:mt-40 flex flex-col gap-1 relative">
            <div class="w-full h-full absolute bottom-0 bg-pinky-red-100 
            {pageLoaded ? "scale-x-100 origin-left delay15s" : "scale-x-0 origin-left"} z-10"></div>

            <h3 class="text-xl font-bold text-ash-gray-200 {pageLoaded ? "opacity-100" : "opacity-0"} delay-[1.5s]">External Links</h3>
            
            <div class="flex flex-row gap-0 -mx-2 scale-100 {pageLoaded ? "opacity-100" : "opacity-0"} delay-[1.5s]">
                <a href="https://www.linkedin.com/in/mehmet-can-akbay-a506bb201/"> <img src="svgs/linkedin.svg" class="scale-75" alt=""></a>
                <a href="https://github.com/mehmetcanakbay"><img src="svgs/github-mark-white.svg" class="scale-50 -my-3" alt=""> </a>
            </div>
        </div>
    </div>

    <!--RIGHT SIDE CONTENT-->

    <div class="w-full md:w-8/12 h-[48rem] md:h-screen relative">
        <ul class="ml-auto flex flex-col justify-end items-end gap-4 md:gap-12 mt-32 mr-4 absolute right-0 z-10 tabs">
            <li class="text-2xl md:text-4xl font-bold text-ash-gray-100 origin-right tab opacity-50 active cursor-pointer" data-tab-target="#SANGI">SANGI</li>
            <li class="text-2xl md:text-4xl font-bold text-ash-gray-100 origin-right tab opacity-50 cursor-pointer" data-tab-target="#ability-system">Ability System</li>
            <li class="text-2xl md:text-4xl font-bold text-ash-gray-100 origin-right tab opacity-50 cursor-pointer" data-tab-target="#deep-learning">Deep Learning</li>

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

                <Explanation title="Short Description" class="z-10 block bottom-12 md:bottom-32 absolute px-12">I have completed my game, which is a fast paced 2D platformer with 4 different weapons
                    that apply their own element on enemies, which can then cause a reaction if another element
                    hits the affected enemy. It's available on Steam. For more details, scroll down. </Explanation>
            </div>
            <div id="ability-system" data-tab-content class="h-full text-ash-gray-100 overflow-y-scroll scrollbar-hide w-full">
                <div class="text-xs md:text-sm">
                    <pre><code>
                        {@html Prism.highlight(abilitySystemCode, Prism.languages["csharp"])}
                    </code></pre>

                </div>
                <Explanation title="Short Description" class="z-10 block bottom-12 md:bottom-32 absolute px-12">This is an ability system made for Unity.
                    Using this system helps you while developing multiple abilities because you dont need to keep track of their cooldowns, what to do once it's
                cooldown is finished etc. they are all available to override in the scriptable object. This here is an example dash ability. For more information and an example
            project, scroll down below.  </Explanation>
            </div>

            <div id="deep-learning" data-tab-content class="h-full text-ash-gray-100 overflow-y-scroll scrollbar-hide w-full">

            </div>

        </div>
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
    
</style>

