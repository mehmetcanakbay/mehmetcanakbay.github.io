<script>
    import {Tabs, Tab, TabList, TabPanel} from "$lib/components/tabbers/tabber"
</script>

<Tabs>
    <TabList class="flex flex-row gap-4 md:gap-12 py-6 text-ash-gray-100 text-base md:text-xl whitespace-nowrap flex-wrap">
        <Tab>Core Loop</Tab>
        <Tab>Ability System</Tab>
        <Tab>Movement</Tab>
        <Tab>Style Transfer</Tab>
    </TabList>

    <TabPanel class="text-ash-gray-200 text-base md:text-lg">
        <p class="py-2">
            In this game, there are several fundamental systems. To name a few, there are movement systems, elemental reaction systems,
            ability systems, weapon systems... For a more in-depth look at elemental reaction system and ability system, check out it's tab.       
        </p>

        <p class="py-2">
            Main takeaway here is that all of these systems blend in with each other <b class="text-ash-gray-100">extremely well</b>. For example, every weapon can
            apply a <b class="text-ash-gray-100">unique element</b> to the enemy. There are 4 weapons in total. <b class="text-ash-gray-100">All of these weapons have 3 different abilities</b> 
            that are available once you switch to them.
            These abilities also apply these elements to the enemy. <b class="text-ash-gray-100">You can switch your weapon any time</b> to apply another element to the enemy.
            When the enemy makes <b class="text-ash-gray-100">contact with an another element while having the effects of an another one</b>, elements will react and <b class="text-ash-gray-100">these reactions
            will have different effects</b>. 
        </p>
        <p class="py-2">
            One thing to keep in mind is that, every weapon or ability apply their elements <b class="text-ash-gray-100">a certain amount</b>. All weapon attacks
            apply <b class="text-ash-gray-100">1 unit of their elements except water</b>, but there are abilities where, for example,
            <b class="text-ash-gray-100">can apply 3 units of their respective elements</b>.

        </p>
        <p class="py-2">
            These reactions differ a lot from each other. For example, one of them causes a <b class="text-ash-gray-100">lifesteal</b>, while the other is a <b class="text-ash-gray-100">crowd control</b>.
            One of them spawns a small rectangular area that damages the enemy over time. This results in <b class="text-ash-gray-100">very fast gameplay</b> where you <b class="text-ash-gray-100">switch
            weapons</b> constantly to apply their elements and <b class="text-ash-gray-100">cause different reactions</b>. 
        </p>

    </TabPanel>

    <TabPanel class="text-ash-gray-200 text-base md:text-lg">

        <p class="py-2">
            There are in total <b class="text-ash-gray-100">12 different abilities</b> in this game, if we dont count elemental reactions. These abilities
            vary from defensive to offensive abilities. To give examples, one of them buffs the player, one of them attacks enemies in 
            coordination with the player, while the other is a laser beam! 
        </p>

        <p class="py-2">
            Here is the catch, all of these abilities also apply their respective elements, and it applies them a certain amount.
            This means that, for example, if you <b class="text-ash-gray-100">use an ability that applies a lot of water on to an enemy</b>, and then use <b class="text-ash-gray-100">an ability that applies
            less fire status...</b> You can cause the reaction <b class="text-ash-gray-100">multiple</b> times! 
        </p>

        <p class="py-2">
            This enables very creative plays. For example, you can use your fire weapon's ranged ability, which applies <b class="text-ash-gray-100">2 units of fire</b>, and then
            use the water weapon drawing ability that lets you draw on the screen to generate a slash... <b class="text-ash-gray-100">this slash deals x2 damage</b>, because
            it <b class="text-ash-gray-100">generates the "Vaporize" (Water+Fire) reaction</b>. But the enemy <b class="text-ash-gray-100">still has the fire status</b>. Then you can use your water weapon's other
            abilities to vaporize again or cause another reaction using a different weapon. 
        </p>

        <p class="py-2">
            One more thing to consider is that... this game <b  class="text-ash-gray-100">doesnt have any cooldowns whatsoever!</b> 
            When you attack an enemy, they <b  class="text-ash-gray-100">have a chance
            to drop an orb</b>. These orbs home in to you and <b  class="text-ash-gray-100">regenerate your "ability points". You use these ability points to activate abilities. </b>
            These abilities do their <b  class="text-ash-gray-100">full potential if their ability points gauge is full </b>. Orbs are colorful. They come in 3 different
            colors. They fill the corresponding ability points gauge, but they also fill the other ability points a little bit.
        </p>

        <p class="py-2">
            To understand this better, let's think of an example. But first, I'm going to give some info.
            Player has <b  class="text-ash-gray-100">3 different ability gauges</b>. They are all mapped to an ability.
            Their colors are blue, green and yellow respectively. Maximum ability points they can store is 5.

            Let's say an enemy dropped a green orb. <b  class="text-ash-gray-100">Let's say that an orb gives 3 ability points </b>. Your character's equipped weapon right now
            is the water weapon. <b  class="text-ash-gray-100">It fills water weapon's green gauge by 3 points. Others colors, 2 ability points. Then it fills other weapons'
            green ability gauge by 2. All the other colors by 1. </b>So as long as you get particles, you have an ability up all the time.
            This generates a seamless experience. 
        </p>
    </TabPanel>

    <TabPanel class="text-ash-gray-200 text-base md:text-lg">
        <p class="py-2">
            One of the biggest factors of what makes a game good is how the game feels. If a player gives an order to the player object
            in your game, it needs to happen <b class="text-ash-gray-100">fast</b>. There were great cautions taken on this. Controls
            feel <b class="text-ash-gray-100">snappy</b>, so the player doesnt feel like they lost because of the game. 
        </p>

        <p class="py-2">
            In addition to that, since the gameplay is very fast, movement also needs to be fast so the player controller doesnt feel
            clunky. On top of that, it has to accomodate for combat systems. To achieve this, 
            <b class="text-ash-gray-100">there are triple jumps, and dashes.</b> On the top of the health bar, there is a dash stamina bar.
            <b class="text-ash-gray-100">You can dash multiple times in a row</b>, but once this is deplated, 
            <b class="text-ash-gray-100">there's a cooldown period</b>, so you have to plan accordingly.
            Triple jumps are self-explanatory, and <b class="text-ash-gray-100">you can jump indefinitely if you time your
            jumps right</b>. There's still a catch, <b class="text-ash-gray-100">using a dash regenerates this triple dash.</b> 
            So the movement itself has mechanics to master as well.
        </p>

        <p class="py-2">
            While battling enemies, you have to consider all of these and try to master them, otherwise you will not be able to evade their attacks.    
        </p>
    </TabPanel>

    <TabPanel class="text-ash-gray-200 text-base md:text-lg">
        <p class="py-2">
            Player also has a super ability. This <b class="text-ash-gray-100">multiplies your outgoing damage by x2!</b>
            It's effects are special. It uses a deep learning model to stylize the game screen to that of 
            Hokusai's Great Waves of Kanagawa art. This generates a very special image.
        </p>

        <p class="py-2">
            To give more details, it uses <b class="text-ash-gray-100">Johnson's style transfer architecture with instance normalization.</b> 
            And with less filters,
            since it needs to be used in a real-time setting. You can then
            transform this model to an ONNX file, and then <b class="text-ash-gray-100">use it on Unity using the Barracuda library.</b>
            There are a lot of ways to get the image and then stylize the image after you send it through the model in Unity.
            For this game, I had a normal camera that mimicked the main Cinemachine camera perfectly, and then it outputted into a
            Render Target. Using this, then <b class="text-ash-gray-100">I subscribed to URP's endCameraRendering callback. </b>
            <b class="text-ash-gray-100">Inside the callback, blit captured render target to a temporary render target and use it as input to the model, 
            get the output, then blit back to the main render target. Then in UI, show this image. </b>
        </p>

        <p class="py-2">
            For more details on the model itself, check out the "Deep Learning" tab on my site.
        </p>
    </TabPanel>
</Tabs>