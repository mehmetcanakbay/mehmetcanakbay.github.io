<script>
    import {Tabs, Tab, TabList, TabPanel} from "$lib/components/tabbers/tabber"
</script>

<Tabs>
    <TabList class="flex flex-row gap-4 md:gap-12 py-6 text-ash-gray-100 text-base md:text-xl whitespace-nowrap flex-wrap">
        <Tab>ESRGAN</Tab>
        <Tab>Gatys Style Transfer</Tab>
        <Tab>Johnson Style Transfer</Tab>
        <Tab>Toy NN Site</Tab>
    </TabList>

    <TabPanel class="text-ash-gray-200 text-base md:text-lg">
        <p class="py-2">
            In short, ESRGAN is a GAN model, solving a super-resolution problem. Generator 
            follows the ResNet architecture with some modifications and special blocks. You first train your generator with simple
            L2 loss, then you save this model. Then, you train that generator again like how you train a normal GAN, with a discriminator. 
            Of course, there are things to consider aside from that. For example, they initialize the layers with he normalized weights, 
            multiplied by a certain amount. That also becomes a parameter. 
            After that, you linear interpolate between the L2 loss model and the GAN model, and the weight for this interpolation depends on
            how sharp you want the image to be. 
        </p>

        <div class="py-4">
            <a href="https://github.com/mehmetcanakbay/paperimp_tensorflow2.0/tree/main/esrgan" class="text-pinky-red-100 font-extrabold text-xl">Link to the repository</a>
        </div>

    </TabPanel>

    <TabPanel class="text-ash-gray-200 text-base md:text-lg">

        <p class="py-2">
            Gatys' style transfer architecture is the first of its kind to tackle the style transfer problem. 
            It's fairly limited, as it can only style one singular image. It's not generalized.
            In short, you first extract the features of the images using a frozen VGG model.
            Then, you "consolidate" the features of the style and content image using a gram matrix.
            Then you calculate the L2 distance between these two gram matrixes. This becomes your style loss. 
            There's also L2 loss, called content loss. There's also tv loss,
            and I have added it in my implementation, but I didnt see much of a difference between having it or not.
            Weights of these style and content losses change the outcome of the final image drastically.  
        </p>

        <div class="py-4">
            <a href="https://github.com/mehmetcanakbay/paperimp_tensorflow2.0/tree/main/neural_style_transfer_GATYS" class="text-pinky-red-100 font-extrabold text-xl">Link to the repository</a>
        </div>

    </TabPanel>

    <TabPanel class="text-ash-gray-200 text-base md:text-lg">
        <p class="py-2">
            Johnson's style transfer model is the generalized version of the Gatys' style model. It can style images it didnt see before (during training)
            It can also solve problems like super resolution, but with subpar results compared to ESRGAN as it wasnt specifically designed to do so.

            Unlike Gatys', this has a model. Gatys' basically uses losses to generate a stylized image and gradually comes close to the
            image that you want. Johnson's trains a neural network. This neural network is like how you would expect,
            it has residual layers, different kernel sizes at input and outputs and batch normalizations. It uses the same losses as Gatys'.
            There is another paper that released after Johnson's to make this style transfer model better, and it introduced Instance Normalization.
            It gets rid of artifacts and results in a better stylized image. My implementation doesnt use this, however I used instance normalization
            for the model I have done for my game.
        </p>

        <div class="py-4">
            <a href="https://github.com/mehmetcanakbay/paperimp_tensorflow2.0/tree/main/neural_style_transfer_Johnsons" class="text-pinky-red-100 font-extrabold text-xl">Link to the repository</a>
        </div>
    </TabPanel>

    <TabPanel class="text-ash-gray-200 text-base md:text-lg">
        <p class="py-2">
            This was a website I have done so people can visualize how learning rate and losses change how fast and different 
            a neural network can learn. User can set the target number, loss function and learning rate. They can also choose 
            which weights to visualize in real time. It's coded in vanilla JS, so all the backprop functions etc. are implemented by me. 
            Since its a very simple model, it does not use biases.
        </p>

        <div class="py-4">
            <a href="https://github.com/mehmetcanakbay/neuralnetworkviz" class="text-pinky-red-100 font-extrabold text-xl">Link to the repository</a>
        </div>
    </TabPanel>
</Tabs>