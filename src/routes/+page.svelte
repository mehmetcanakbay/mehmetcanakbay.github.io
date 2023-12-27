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
    }`

    
    
</script>

<h1 class="absolute top-20 left-80 text-red-50 text-4xl z-20">!!WIP - DO NOT TAKE IT AT FACE VALUE - RESPONSIVE DESIGN CURRENTLY BROKEN!!</h1>
<div class="flex flex-col md:flex-row h-full w-full">
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

    <div class="w-full md:w-8/12 h-[48rem] md:h-screen bg-pinky-red-900 relative">
        <ul class="ml-auto flex flex-col justify-end items-end gap-12 mt-32 mr-4 absolute right-0 z-10 tabs">
            <li class="text-4xl font-bold text-ash-gray-100 origin-right tab opacity-50 active cursor-pointer" data-tab-target="#SANGI">SANGI</li>
            <li class="text-4xl font-bold text-ash-gray-100 origin-right tab opacity-50 cursor-pointer" data-tab-target="#ability-system">Ability System</li>
        </ul>

        <div class="tab-content overflow-hidden h-full">
            <div id="SANGI" data-tab-content class="active">
                <div class="">
                    <video
                        autoplay
                        loop
                        muted
                        playsinline
                        class="h-[80%] mt-20 md:scale-[3.0] lg:scale-[2.2] xl:scale-[1.7] overflow-hidden brightness-75"
                    >
                        <source
                        src="video/sangi.mp4"
                        type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>

                </div>

                <Explanation title="Short Description" class="z-10 block bottom-32 absolute px-12">I have completed my game, which is a fast paced 2D platformer with 4 different weapons
                    that apply their own element on enemies, which can then cause a reaction if another element
                    hits the affected enemy. It's available on Steam. For more details, scroll down. </Explanation>
            </div>
            <div id="ability-system" data-tab-content class="h-full text-ash-gray-100">
                <div class="overflow-auto">
                    <pre><code>
                        {@html Prism.highlight(abilitySystemCode, Prism.languages["csharp"])}
                    </code></pre>

                </div>
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

    
</style>

