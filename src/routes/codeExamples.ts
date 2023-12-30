export const codeExamples:string[] = [
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
    
    
    
    






    `,

    `
    #get the dataset
    datagen = get_iterable(batch_size=16)

    inputs = tf.keras.layers.Input(shape=(None,None,3))
    model = Generator()
    
    output = model(inputs)

    #initialize the generator model 
    generator = tf.keras.models.Model(inputs=inputs, outputs=output)
    #get discriminator
    discriminator = Discriminator()

    #these lr parameters are important, since they are GANs, choose very carefully 
    optimizer = tf.keras.optimizers.Adam(lr=1e-4)
    optimizer_discriminator = tf.keras.optimizers.Adam(lr=5e-5)
    #it uses VGG19 as a feature extractor, so fetch the VGG19 with frozen layers 
    feature_extractor = get_extractors()
    count = 0

    test_img_ = get_test_image()
    testbatch, testwidth, testheight, testchannels = test_img_.shape

    @tf.function
    def train_step(low_res, high_res):
        with tf.GradientTape() as tape, tf.GradientTape() as tape2:
            gen_img = generator(low_res)
            percep_loss = perceptural_loss(high_res, gen_img, feature_extractor)
            #
            y_true_out = discriminator(high_res + (tf.random.normal(shape=tf.shape(high_res)) * 0.3))
            y_false_out = discriminator(gen_img + (tf.random.normal(shape=tf.shape(gen_img)) * 0.3))
            #
            relative_false = tf.nn.sigmoid(y_false_out - tf.reduce_mean(y_true_out))
            relative_true = tf.nn.sigmoid(y_true_out - tf.reduce_mean(y_false_out))
            adversarial_loss = tf.reduce_mean(tf.keras.losses.binary_crossentropy(tf.ones_like(relative_false), relative_false))

            content_loss = tf.reduce_sum(tf.math.abs(high_res - gen_img))
            complete_gen_loss = percep_loss + (5e-3*adversarial_loss) + (1e-2*content_loss)

            discriminator_loss_true = tf.reduce_mean(tf.keras.losses.binary_crossentropy(tf.ones_like(relative_true), relative_true))
            discriminator_loss_false = tf.reduce_mean(tf.keras.losses.binary_crossentropy(tf.zeros_like(relative_false), relative_false))
            complete_disc_loss = (discriminator_loss_false + discriminator_loss_true) / 2


        grads = tape.gradient(complete_gen_loss, generator.trainable_weights)
        optimizer.apply_gradients(zip(grads, generator.trainable_weights))

        grads_disc = tape2.gradient(complete_disc_loss, discriminator.trainable_weights)
        optimizer_discriminator.apply_gradients(zip(grads_disc, discriminator.trainable_weights))

        return complete_disc_loss, complete_gen_loss

        for _ in range(100):
            for steps, (low_res, high_res) in enumerate(datagen):

                
                starttime = time.time()
                complete_disc_loss, complete_gen_loss= train_step(low_res, high_res)
                end_time = time.time()
                print("{0} in progress".format(_))
                print(f"steps: {steps}")       
                print("Disc loss: " + str(complete_disc_loss))
                print("Gen loss: " + str(complete_gen_loss))
                print("Elapsed Time: " + str(end_time- starttime))

                if steps>100:
                    break
                
            if _ == 70:
                optimizer.lr.assign(5e-5)
            # if _ == 100:
            #     optimizer.lr.assign(2e-5)


            if _ % 2 == 0:
                plt.imshow(tf.cast(tf.reshape((generator(test_img_, training=False) *255), [212*2,212*2,3]),tf.uint8))
                plt.savefig("{0}.jpg".format(count))
                count += 1

    generator.save("tflitemodel/perceptive")
    `,
    `
    def gram_matrix(extracted_tensor):
        batch, width, heigth, channels = extracted_tensor.shape 
        vectorize = tf.reshape(extracted_tensor, [width* heigth, channels])
        return tf.matmul(vectorize, vectorize, transpose_a=True)

    def get_extractors():
        vgg = tf.keras.applications.VGG19(include_top=False, weights='imagenet')
        vgg.trainable = False
        conv_parts = [
            'block1_conv1',
            'block2_conv1',
            'block3_conv1',
            'block4_conv1'
        ]
        content_part = [
            'block4_conv2'
        ]
        outputs = [vgg.get_layer(name).output for name in conv_parts]
        feature_extractor_style = tf.keras.Model([vgg.input], outputs)
        feature_extractor_content = tf.keras.Model(inputs = vgg.input, outputs= vgg.get_layer(content_part[0]).output)
        return feature_extractor_style, feature_extractor_content

    def load_img(PATH, img_width=800, img_heigth=530):
        img = cv2.imread(PATH)
        img = cv2.resize(img, (img_width, img_heigth))
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        img = tf.convert_to_tensor(img)
        img = tf.expand_dims(img, axis=0)
        img = tf.cast(img, tf.float32)
        return img

    
    optimizer = tf.keras.optimizers.Adam(lr=1e-2)
    content_img = load_img(r"neural_style_transfer_5_0.jpg") / 127.5 - 1
    style_img = load_img(r"neural_style_transfer_5_1.jpg")  / 127.5 - 1
    generated_img = tf.Variable(tf.identity(content_img), dtype=tf.float32, trainable=True)
    # generated_img = tf.Variable(tf.zeros(content_img.shape), dtype=tf.float32, trainable=True)
    feature_extractor_style, feature_extractor_content = get_extractors()
    # w1,w2 = 1e-9,1e-4
    w1,w2 = 1e-3,1
    @tf.function
    def train_step(style_loss, content_loss):
        with tf.GradientTape() as tape:
            tape.watch(generated_img)
            pre_vgg_gen_img = preprocess_input((generated_img * 127.5) + 127.5)
            pre_vgg_style_img = preprocess_input((style_img * 127.5) + 127.5)
            gen_img_feat = feature_extractor_style(pre_vgg_gen_img)
            style_img_feat = feature_extractor_style(pre_vgg_style_img)
            for gen_feat, style_feat in zip(
                gen_img_feat,
                style_img_feat):
                batch, width, height, channels = gen_feat.shape
                gen_gram = gram_matrix(gen_feat)
                style_gram = gram_matrix(style_feat)
                style_loss += tf.reduce_sum((gen_gram - style_gram) **2) / (4*((channels**2) * ((height*width)**2)))
                # style_loss += tf.reduce_sum((gen_gram - style_gram) **2) / (4*(channels**2)*((width*heigth)**2))
            # style_loss *= 0.2
            gen_img_feat_content = feature_extractor_content(generated_img)
            content_img_feat = feature_extractor_content(content_img)
            tv = tf.reduce_mean(tf.image.total_variation(generated_img))
            content_loss += tf.reduce_sum((gen_img_feat_content - content_img_feat) ** 2) / 2
            loss = (content_loss * w1) + (style_loss * w2) + 1e-7*tv
        grads = tape.gradient(loss, generated_img)
        # optimizer.apply_gradients([(grads), (generated_img)])
        optimizer.apply_gradients(zip([grads], [generated_img]))
        return style_loss, content_loss, loss
    `


       
]