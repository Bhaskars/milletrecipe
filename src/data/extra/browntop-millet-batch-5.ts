import type { Recipe } from "@/types/recipe";
import type { LineContent } from "@/data/i18n-content/sorghum";
import type { PlateInfo } from "@/types/plate";

/** browntop-millet recipes browntop-millet-36 to browntop-millet-40 with full English, Hindi and Tamil content and plate data. */
export const BROWNTOP_MILLET_BATCH_5: {
  recipes: Recipe[];
  content: Record<string, { hi: LineContent; ta: LineContent }>;
  translations: Record<string, { hi: { title: string; description: string }; ta: { title: string; description: string } }>;
  plate: Record<string, PlateInfo>;
} = {
  recipes: [
    {
      id: "browntop-millet-36",
      title: "Korle Adai",
      milletId: "browntop-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Breakfast",
      description: "Crisp, savoury pancakes of browntop millet and toor dal with grated carrot, onion and coconut, a filling breakfast from South Indian homes.",
      servings: 4,
      prepTimeMinutes: 20,
      cookTimeMinutes: 25,
      difficulty: "Medium",
      ingredients: [
        "1 cup browntop millet (korle), soaked for 3 hours",
        "1/3 cup toor dal, soaked for 3 hours",
        "2 tbsp grated carrot",
        "1 small onion, finely chopped",
        "1 green chilli, finely chopped",
        "2 tbsp fresh grated coconut",
        "1 tsp cumin seeds, 1/2 tsp asafoetida powder",
        "2 dried red chillies, 8 curry leaves",
        "1 tsp salt",
        "3 tbsp sesame oil, for shallow-frying",
      ],
      steps: [
        "Drain the soaked millet and dal, then grind them with the red chillies, cumin, asafoetida and salt to a thick, slightly coarse batter.",
        "Fold the carrot, onion, green chilli, coconut and curry leaves into the batter.",
        "Rest the batter for 10 minutes so it thickens.",
        "Heat a flat tawa over medium heat and grease it lightly with sesame oil.",
        "Spread a ladleful of batter into a round about 6 inches wide and make a small hole in the centre.",
        "Drizzle a little oil around the edges and cook for 2-3 minutes until the underside is golden.",
        "Flip the adai and cook for 1-2 minutes more until crisp, then repeat with the remaining batter.",
        "Serve hot with coconut chutney or a little jaggery.",
      ],
    },
    {
      id: "browntop-millet-37",
      title: "Korle Murukku",
      milletId: "browntop-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Snack",
      description: "Crunchy spiral snacks of browntop millet and urad dal flour, seasoned with cumin and sesame, a festival savoury made in Tamil and Karnataka kitchens.",
      servings: 6,
      prepTimeMinutes: 30,
      cookTimeMinutes: 30,
      difficulty: "Hard",
      ingredients: [
        "1 cup browntop millet flour (korle atta)",
        "1/4 cup urad dal flour",
        "2 tbsp ghee, softened",
        "1 tsp cumin seeds, 1/2 tsp sesame seeds",
        "1/2 tsp asafoetida powder, 1 tsp red chilli powder",
        "1 tsp salt",
        "1/2 cup warm water, as needed",
        "500 ml sunflower oil, for deep-frying",
      ],
      steps: [
        "Mix both flours with the cumin, sesame, asafoetida, chilli powder and salt in a large bowl.",
        "Rub the softened ghee into the flour until it looks like coarse crumbs.",
        "Add warm water little by little and knead into a soft, firm dough that holds its shape.",
        "Fill a murukku press with the dough, fitted with a star disc.",
        "Heat the oil over medium heat and test with a pinch of dough, which should rise slowly.",
        "Press the dough in tight spirals directly into the oil, about 5 inches across.",
        "Fry for 2-3 minutes on each side until golden and crisp, then drain on kitchen paper.",
        "Cool completely before storing in an airtight tin.",
      ],
    },
    {
      id: "browntop-millet-38",
      title: "Korle Vegetable Upma",
      milletId: "browntop-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Breakfast",
      description: "A light savoury porridge of browntop millet grits cooked with carrot, peas and a mustard and curry leaf tempering, quick enough for a weekday breakfast.",
      servings: 4,
      prepTimeMinutes: 10,
      cookTimeMinutes: 20,
      difficulty: "Easy",
      ingredients: [
        "1 cup browntop millet grits, rinsed and drained",
        "2 tbsp sesame oil",
        "1 tsp mustard seeds, 1 tsp urad dal",
        "1 small onion, chopped",
        "1 carrot, diced small",
        "1/2 cup green peas",
        "1 green chilli, chopped, 8 curry leaves",
        "1/2 tsp turmeric powder",
        "2 1/2 cups water",
        "1 tsp salt, 1 tbsp lemon juice",
      ],
      steps: [
        "Dry roast the millet grits in a pan for 3 minutes on low heat until they smell nutty, then set aside.",
        "Heat the sesame oil in a heavy pan and splutter the mustard seeds, then add the urad dal.",
        "Add the onion, carrot, peas, green chilli and curry leaves and sauté for 4 minutes.",
        "Stir in the turmeric, then pour in the water and salt and bring it to a boil.",
        "Add the roasted grits slowly, stirring to prevent lumps, and cover on low heat for 8 minutes.",
        "Fluff with a fork, sprinkle the lemon juice, and cover for 2 minutes more.",
        "Serve hot with coconut chutney.",
      ],
    },
    {
      id: "browntop-millet-39",
      title: "Korle Pakora",
      milletId: "browntop-millet",
      region: "North Indian",
      diet: "Vegetarian",
      course: "Snack",
      description: "Crisp onion and potato fritters made with browntop millet and gram flour, seasoned with carom seeds and deep-fried for an evening snack.",
      servings: 4,
      prepTimeMinutes: 15,
      cookTimeMinutes: 15,
      difficulty: "Easy",
      ingredients: [
        "1/2 cup browntop millet flour",
        "1/2 cup besan (gram flour)",
        "1 small potato, thinly sliced",
        "1 small onion, thinly sliced",
        "1 green chilli, finely chopped",
        "1/2 tsp carom seeds (ajwain), 1/2 tsp red chilli powder",
        "1/2 tsp salt",
        "2 tbsp hot oil, plus 500 ml oil for deep-frying",
        "3-4 tbsp water, as needed",
      ],
      steps: [
        "Combine the millet flour, besan, salt, chilli powder and carom seeds in a bowl.",
        "Add the potato, onion and green chilli and toss to coat them lightly in the flour.",
        "Add the hot oil and mix, then sprinkle in water a spoonful at a time to make a thick batter.",
        "Heat the frying oil in a kadai over medium heat until a pinch of batter rises to the surface quickly.",
        "Drop spoonfuls of the mixture into the oil, spreading them so they are not too thick.",
        "Fry for 3-4 minutes, turning once, until crisp and golden on all sides.",
        "Drain on paper towels and serve hot with mint chutney.",
      ],
    },
    {
      id: "browntop-millet-40",
      title: "Korle Meen Kuzhambu",
      milletId: "browntop-millet",
      region: "South Indian",
      diet: "Non-Vegetarian",
      course: "Main Course",
      description: "A tangy, fenugreek-scented fish curry in tamarind and coconut gravy, served with a bowl of soft browntop millet rice from the Tamil coast.",
      servings: 4,
      prepTimeMinutes: 20,
      cookTimeMinutes: 25,
      difficulty: "Medium",
      ingredients: [
        "400 g fish (seer or pomfret), cut into thick pieces",
        "2 cups cooked browntop millet, to serve",
        "2 tbsp sesame oil (gingelly oil)",
        "1 tsp fenugreek seeds, 1 tsp mustard seeds, 8 curry leaves",
        "1 onion, sliced",
        "2 tomatoes, chopped",
        "1 tbsp ginger-garlic paste",
        "1 tsp turmeric powder, 1 tbsp red chilli powder, 1 tsp coriander powder",
        "1 1/2 tbsp tamarind paste, dissolved in 1 cup water",
        "1 tsp salt",
      ],
      steps: [
        "Rub the fish pieces with a little turmeric and salt and set them aside for 10 minutes.",
        "Heat the sesame oil in a clay pot or heavy pan and splutter the fenugreek and mustard seeds with the curry leaves.",
        "Add the onion and fry until golden, then stir in the ginger-garlic paste and the tomatoes.",
        "Cook the tomatoes until soft, then add the remaining turmeric, chilli and coriander powders with a splash of water.",
        "Pour in the tamarind water, bring to a simmer and cook for 5 minutes.",
        "Slide in the fish, cover and simmer gently for 8-10 minutes until cooked through.",
        "Serve hot over steamed browntop millet.",
      ],
    },
  ],
  content: {
    "browntop-millet-36": {
      hi: {
        ingredients: ["1 कप ब्राउनटॉप मिलेट (कोर्ले), 3 घंटे भिगोया हुआ", "1/3 कप तुअर दाल, 3 घंटे भिगोई हुई", "2 बड़े चम्मच कसी गाजर", "1 छोटी प्याज़, बारीक कटी", "1 हरी मिर्च, बारीक कटी", "2 बड़े चम्मच कसा ताज़ा नारियल", "1 छोटा चम्मच जीरा, 1/2 छोटा चम्मच हींग पाउडर", "2 सूखी लाल मिर्च, 8 करी पत्ते", "1 छोटा चम्मच नमक", "3 बड़े चम्मच तिल का तेल, शैलो फ्राई के लिए"],
        steps: ["भीगे मिलेट और दाल को निथारकर लाल मिर्च, जीरा, हींग और नमक के साथ मोटा, थोड़ा दानेदार घोल बनने तक पीसें।", "घोल में गाजर, प्याज़, हरी मिर्च, नारियल और करी पत्ते मिलाएँ।", "घोल को 10 मिनट रखें ताकि गाढ़ा हो जाए।", "तवे को मध्यम आँच पर गरम करके तिल के तेल से हल्का चिकना करें।", "एक कलछी घोल फैलाकर लगभग 6 इंच का गोल बनाएँ और बीच में छोटा छेद करें।", "किनारों पर थोड़ा तेल डालें और नीचे की तरफ सुनहरा होने तक 2-3 मिनट पकाएँ।", "अडाई पलटें, 1-2 मिनट और सेंकें जब तक कुरकुरी हो जाए, फिर बचे घोल से यही दोहराएँ।", "गरम नारियल की चटनी या थोड़े गुड़ के साथ परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் பிரவுன்டாப் சிறுதானியம் (கோர்லே), 3 மணி நேரம் ஊறவைத்தது", "1/3 கப் துவரம் பருப்பு, 3 மணி நேரம் ஊறவைத்தது", "2 டேபிள்ஸ்பூன் துருவிய கேரட்", "1 சிறிய வெங்காயம், பொடியாக நறுக்கியது", "1 பச்சை மிளகாய், பொடியாக நறுக்கியது", "2 டேபிள்ஸ்பூன் துருவிய புதிய தேங்காய்", "1 டீஸ்பூன் சீரகம், 1/2 டீஸ்பூன் பெருங்காயத் தூள்", "2 காய்ந்த சிவப்பு மிளகாய், 8 கறிவேப்பிலை", "1 டீஸ்பூன் உப்பு", "3 டேபிள்ஸ்பூன் நல்லெண்ணெய், ஷாலோ ஃப்ரை செய்ய"],
        steps: ["ஊறிய தானியம், பருப்பை வடிகட்டி மிளகாய், சீரகம், பெருங்காயம், உப்புடன் கொரகொரப்பாக அரைக்கவும்.", "மாவில் கேரட், வெங்காயம், பச்சை மிளகாய், தேங்காய், கறிவேப்பிலை சேர்த்து கலக்கவும்.", "10 நிமிடம் வைத்து மாவை கெட்டியாக்கவும்.", "தவாவை மிதமான தீயில் சூடாக்கி நல்லெண்ணெயால் லேசாக தடவவும்.", "ஒரு கரண்டி மாவை சுமார் 6 அங்குல வட்டமாக பரப்பி நடுவில் சிறு துளை இடவும்.", "ஓரங்களில் சிறிது எண்ணெய் ஊற்றி அடிப்பகுதி பொன்னிறமாகும் வரை 2-3 நிமிடம் வேகவிடவும்.", "அடையை திருப்பி மேலும் 1-2 நிமிடம் மொறுமொறுப்பாக வேகவிட்டு, மீதி மாவிலும் இதையே செய்யவும்.", "சூடாக தேங்காய் சட்னி அல்லது வெல்லத்துடன் பரிமாறவும்."],
      },
    },
    "browntop-millet-37": {
      hi: {
        ingredients: ["1 कप ब्राउनटॉप मिलेट का आटा (कोर्ले का आटा)", "1/4 कप उड़द दाल का आटा", "2 बड़े चम्मच घी, नरम किया हुआ", "1 छोटा चम्मच जीरा, 1/2 छोटा चम्मच तिल", "1/2 छोटा चम्मच हींग पाउडर, 1 छोटा चम्मच लाल मिर्च पाउडर", "1 छोटा चम्मच नमक", "1/2 कप गुनगुना पानी, ज़रूरत अनुसार", "500 मि.ली. सूरजमुखी तेल, डीप फ्राई के लिए"],
        steps: ["दोनों आटे को जीरा, तिल, हींग, मिर्च पाउडर और नमक के साथ एक बड़े बर्तन में मिलाएँ।", "नरम घी को आटे में मसलें जब तक वह दरदरे चूरे जैसा न हो जाए।", "धीरे-धीरे गुनगुना पानी डालकर नरम, कड़ा आटा गूँधें जो अपना आकार रखे।", "मुरुक्कू प्रेस में स्टार वाली प्लेट लगाकर आटा भरें।", "तेल को मध्यम आँच पर गरम करें और आटे की एक चुटकी डालकर देखें कि वह धीरे-धीरे ऊपर आए।", "आटे को तेल में सीधे कसकर गोल घेरे में दबाएँ, लगभग 5 इंच व्यास के।", "हर तरफ 2-3 मिनट सुनहरा और कुरकुरा होने तक तलें, फिर किचन पेपर पर निकालें।", "पूरी तरह ठंडा होने दें, फिर हवाबंद डिब्बे में रखें।"],
      },
      ta: {
        ingredients: ["1 கப் பிரவுன்டாப் சிறுதானிய மாவு (கோர்லே மாவு)", "1/4 கப் உளுத்தம் மாவு", "2 டேபிள்ஸ்பூன் நெய், மிருதுவாக்கப்பட்டது", "1 டீஸ்பூன் சீரகம், 1/2 டீஸ்பூன் எள்", "1/2 டீஸ்பூன் பெருங்காயத் தூள், 1 டீஸ்பூன் மிளகாய்த் தூள்", "1 டீஸ்பூன் உப்பு", "1/2 கப் வெதுவெதுப்பான தண்ணீர், தேவைக்கேற்ப", "500 மி.லி. சூரியகாந்தி எண்ணெய், பொரிக்க"],
        steps: ["இரு மாவுகளையும் சீரகம், எள், பெருங்காயம், மிளகாய்த் தூள், உப்புடன் பெரிய பாத்திரத்தில் கலக்கவும்.", "மிருதுவான நெய்யை மாவுடன் கரகரப்பான தூள் போல ஆகும் வரை தேய்த்துக் கலக்கவும்.", "வெதுவெதுப்பான தண்ணீரை சிறிது சிறிதாக சேர்த்து, வடிவம் கொடுக்கும் மென்மையான, கெட்டியான மாவாக பிசையவும்.", "முறுக்கு அச்சில் நட்சத்திர வடிவ தட்டு பொருத்தி மாவை நிரப்பவும்.", "எண்ணெயை மிதமான தீயில் சூடாக்கி ஒரு சிட்டிகை மாவை போட்டு மெதுவாக மேலே வருகிறதா என பார்க்கவும்.", "மாவை எண்ணெயில் நேரடியாக சுமார் 5 அங்குல விட்டத்தில் இறுக்கமான வட்டமாக பிழியவும்.", "இரு பக்கமும் 2-3 நிமிடம் பொன்னிறமாகவும் மொறுமொறுப்பாகவும் வறுத்து கிச்சன் பேப்பரில் வடிகட்டவும்.", "முழுவதுமாக ஆறவிட்டு காற்றுப் புகாத டப்பாவில் சேமிக்கவும்."],
      },
    },
    "browntop-millet-38": {
      hi: {
        ingredients: ["1 कप ब्राउनटॉप मिलेट का दलिया (ग्रिट्स), धोकर निथारा हुआ", "2 बड़े चम्मच तिल का तेल", "1 छोटा चम्मच सरसों, 1 छोटा चम्मच उड़द दाल", "1 छोटी प्याज़, कटी", "1 छोटी गाजर, छोटे टुकड़ों में कटी", "1/2 कप हरे मटर", "1 हरी मिर्च, कटी, 8 करी पत्ते", "1/2 छोटा चम्मच हल्दी", "2 1/2 कप पानी", "1 छोटा चम्मच नमक, 1 बड़ा चम्मच नींबू का रस"],
        steps: ["मिलेट ग्रिट्स को पैन में धीमी आँच पर 3 मिनट भूनें जब तक नटी खुशबू न आए, फिर अलग रखें।", "भारी बर्तन में तिल का तेल गरम करें और सरसों चटकाकर उड़द दाल डालें।", "प्याज़, गाजर, मटर, हरी मिर्च और करी पत्ते डालकर 4 मिनट भूनें।", "हल्दी डालें, फिर पानी और नमक डालकर उबाल लें।", "भुने ग्रिट्स धीरे-धीरे डालें, गुठलियाँ न बनें इसलिए चलाते रहें, फिर धीमी आँच पर 8 मिनट ढककर पकाएँ।", "काँटे से फुलाएँ, नींबू का रस डालें और 2 मिनट और ढककर रखें।", "नारियल की चटनी के साथ गरम परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் பிரவுன்டாப் சிறுதானிய ரவை, கழுவி வடிகட்டியது", "2 டேபிள்ஸ்பூன் நல்லெண்ணெய்", "1 டீஸ்பூன் கடுகு, 1 டீஸ்பூன் உளுத்தம் பருப்பு", "1 சிறிய வெங்காயம், நறுக்கியது", "1 சிறிய கேரட், சிறு துண்டுகளாக நறுக்கியது", "1/2 கப் பச்சை பட்டாணி", "1 பச்சை மிளகாய், நறுக்கியது, 8 கறிவேப்பிலை", "1/2 டீஸ்பூன் மஞ்சள் தூள்", "2 1/2 கப் தண்ணீர்", "1 டீஸ்பூன் உப்பு, 1 டேபிள்ஸ்பூன் எலுமிச்சை சாறு"],
        steps: ["தானிய ரவையை கடாயில் மெல்லிய தீயில் 3 நிமிடம் வறுத்து நறுமணம் வந்ததும் தனியாக வைக்கவும்.", "கனமான பாத்திரத்தில் நல்லெண்ணெயை சூடாக்கி கடுகு தாளித்து, உளுத்தம் பருப்பு சேர்க்கவும்.", "வெங்காயம், கேரட், பட்டாணி, பச்சை மிளகாய், கறிவேப்பிலை சேர்த்து 4 நிமிடம் வதக்கவும்.", "மஞ்சள் சேர்த்து, பின்னர் தண்ணீர், உப்பு ஊற்றி கொதிக்க விடவும்.", "வறுத்த ரவையை மெதுவாக சேர்த்து, கட்டி விழாமல் கிளறி, மூடி மெல்லிய தீயில் 8 நிமிடம் வேகவிடவும்.", "முள் கரண்டியால் உதிர்த்து, எலுமிச்சை சாறு ஊற்றி மேலும் 2 நிமிடம் மூடி வைக்கவும்.", "தேங்காய் சட்னியுடன் சூடாக பரிமாறவும்."],
      },
    },
    "browntop-millet-39": {
      hi: {
        ingredients: ["1/2 कप ब्राउनटॉप मिलेट का आटा", "1/2 कप बेसन", "1 छोटा आलू, पतला कटा हुआ", "1 छोटी प्याज़, पतली कटी", "1 हरी मिर्च, बारीक कटी", "1/2 छोटा चम्मच अजवाइन, 1/2 छोटा चम्मच लाल मिर्च पाउडर", "1/2 छोटा चम्मच नमक", "2 बड़े चम्मच गरम तेल, और 500 मि.ली. तलने के लिए तेल", "3-4 बड़े चम्मच पानी, ज़रूरत अनुसार"],
        steps: ["मिलेट का आटा, बेसन, नमक, मिर्च पाउडर और अजवाइन एक बर्तन में मिलाएँ।", "आलू, प्याज़ और हरी मिर्च डालकर आटे में हल्के हाथ से लपेटें।", "गरम तेल डालकर मिलाएँ, फिर थोड़ा-थोड़ा पानी डालकर गाढ़ा घोल बनाएँ।", "तलने का तेल मध्यम आँच पर गरम करें जब तक घोल की एक चुटकी तुरंत ऊपर न आ जाए।", "घोल को चम्मच से तेल में धीरे से डालें और बहुत मोटा न रखें।", "3-4 मिनट तलें, बीच में पलटते हुए, जब तक सब तरफ से सुनहरे और कुरकुरे न हो जाएँ।", "किचन पेपर पर निकालें और पुदीने की चटनी के साथ गरम परोसें।"],
      },
      ta: {
        ingredients: ["1/2 கப் பிரவுன்டாப் சிறுதானிய மாவு", "1/2 கப் கடலை மாவு", "1 சிறிய உருளைக்கிழங்கு, மெல்லியதாக நறுக்கியது", "1 சிறிய வெங்காயம், மெல்லியதாக நறுக்கியது", "1 பச்சை மிளகாய், பொடியாக நறுக்கியது", "1/2 டீஸ்பூன் ஓமம், 1/2 டீஸ்பூன் மிளகாய்த் தூள்", "1/2 டீஸ்பூன் உப்பு", "2 டேபிள்ஸ்பூன் சூடான எண்ணெய், மற்றும் 500 மி.லி. பொரிக்க எண்ணெய்", "3-4 டேபிள்ஸ்பூன் தண்ணீர், தேவைக்கேற்ப"],
        steps: ["சிறுதானிய மாவு, கடலை மாவு, உப்பு, மிளகாய்த் தூள், ஓமம் ஒரு பாத்திரத்தில் கலக்கவும்.", "உருளைக்கிழங்கு, வெங்காயம், பச்சை மிளகாய் சேர்த்து மாவில் லேசாக புரட்டவும்.", "சூடான எண்ணெய் சேர்த்து கலந்து, சிறிது தண்ணீர் சேர்த்து கெட்டியான கலவையாக்கவும்.", "பொரிக்கும் எண்ணெயை மிதமான தீயில் சூடாக்கவும்; மாவின் ஒரு துளி உடனே மேலே வந்தால் தயார்.", "கரண்டியால் மாவை எண்ணெயில் மெதுவாக விடவும்; மிகவும் தடிமனாக இல்லாமல் பார்க்கவும்.", "3-4 நிமிடம் திருப்பிப் போட்டு எல்லா பக்கமும் பொன்னிறமாக மொறுமொறுப்பாக வேகவிடவும்.", "கிச்சன் பேப்பரில் வடிகட்டி புதினா சட்னியுடன் சூடாக பரிமாறவும்."],
      },
    },
    "browntop-millet-40": {
      hi: {
        ingredients: ["400 ग्राम मछली (सीर या पॉम्फ्रेट), मोटे टुकड़ों में कटी", "2 कप पका ब्राउनटॉप मिलेट, परोसने के लिए", "2 बड़े चम्मच तिल का तेल (गिंगेली तेल)", "1 छोटा चम्मच मेथी के दाने, 1 छोटा चम्मच सरसों, 8 करी पत्ते", "1 प्याज़, स्लाइस की हुई", "2 टमाटर, कटे हुए", "1 बड़ा चम्मच अदरक-लहसुन पेस्ट", "1 छोटा चम्मच हल्दी, 1 बड़ा चम्मच लाल मिर्च पाउडर, 1 छोटा चम्मच धनिया पाउडर", "1 1/2 बड़ा चम्मच इमली का पेस्ट, 1 कप पानी में घोला हुआ", "1 छोटा चम्मच नमक"],
        steps: ["मछली के टुकड़ों पर थोड़ी हल्दी और नमक लगाकर 10 मिनट अलग रखें।", "मिट्टी के बर्तन या भारी कढ़ाई में तिल का तेल गरम करें और मेथी, सरसों व करी पत्ते चटकाएँ।", "प्याज़ सुनहरा होने तक तलें, फिर अदरक-लहसुन पेस्ट और टमाटर डालकर नरम होने तक पकाएँ।", "टमाटर गलने पर बची हल्दी, मिर्च और धनिया पाउडर थोड़े पानी के साथ डालें।", "इमली का पानी डालकर उबाल लें और 5 मिनट पकाएँ।", "मछली डालें, ढककर धीमी आँच पर 8-10 मिनट पकाएँ जब तक मछली पूरी तरह पक न जाए।", "भाप में पके ब्राउनटॉप मिलेट के ऊपर गरम परोसें।"],
      },
      ta: {
        ingredients: ["400 கிராம் மீன் (வஞ்சிரம் அல்லது பாம்ப்ஃப்ரெட்), தடிமனான துண்டுகளாக வெட்டியது", "2 கப் வேகவைத்த பிரவுன்டாப் சிறுதானியம், பரிமாற", "2 டேபிள்ஸ்பூன் நல்லெண்ணெய்", "1 டீஸ்பூன் வெந்தயம், 1 டீஸ்பூன் கடுகு, 8 கறிவேப்பிலை", "1 வெங்காயம், மெல்லியதாக நறுக்கியது", "2 தக்காளி, நறுக்கியது", "1 டேபிள்ஸ்பூன் இஞ்சி-பூண்டு விழுது", "1 டீஸ்பூன் மஞ்சள் தூள், 1 டேபிள்ஸ்பூன் மிளகாய்த் தூள், 1 டீஸ்பூன் மல்லித் தூள்", "1 1/2 டேபிள்ஸ்பூன் புளி விழுது, 1 கப் தண்ணீரில் கரைத்தது", "1 டீஸ்பூன் உப்பு"],
        steps: ["மீன் துண்டுகளில் சிறிது மஞ்சள், உப்பு தடவி 10 நிமிடம் ஒதுக்கி வைக்கவும்.", "மண் சட்டி அல்லது கனமான பாத்திரத்தில் நல்லெண்ணெயை சூடாக்கி வெந்தயம், கடுகு, கறிவேப்பிலை தாளிக்கவும்.", "வெங்காயத்தை பொன்னிறமாக வதக்கி, இஞ்சி-பூண்டு விழுது, தக்காளி சேர்த்து மென்மையாகும் வரை வேகவிடவும்.", "தக்காளி குழைந்ததும் மீதி மஞ்சள், மிளகாய், மல்லித் தூள்களை சிறிது தண்ணீருடன் சேர்க்கவும்.", "புளித் தண்ணீர் ஊற்றி கொதிக்க விட்டு 5 நிமிடம் வேகவிடவும்.", "மீனை சேர்த்து மூடி மெல்லிய தீயில் 8-10 நிமிடம் மீன் நன்கு வேகும் வரை வைக்கவும்.", "ஆவியில் வெந்த பிரவுன்டாப் சிறுதானியத்தின் மேல் சூடாக பரிமாறவும்."],
      },
    },
  },
  translations: {
    "browntop-millet-36": {
      hi: { title: "कोर्ले अडाई", description: "ब्राउनटॉप मिलेट और तुअर दाल के घोल से बने कुरकुरे मसालेदार पैनकेक, कसी गाजर, प्याज़ और करी पत्तों के साथ। दक्षिण भारतीय घरों का भरपेट नाश्ता।" },
      ta: { title: "கோர்லே அடை", description: "பிரவுன்டாப் சிறுதானியம் மற்றும் துவரம் பருப்பில் செய்த மொறுமொறுப்பான அடை, துருவிய கேரட், வெங்காயம், கறிவேப்பிலையுடன்." },
    },
    "browntop-millet-37": {
      hi: { title: "कोर्ले मुरुक्कू", description: "ब्राउनटॉप मिलेट और उड़द दाल के आटे से बने कुरकुरे गोल मुरुक्कू, जीरा और तिल के स्वाद वाले, त्योहारों का नमकीन नाश्ता।" },
      ta: { title: "கோர்லே முறுக்கு", description: "பிரவுன்டாப் சிறுதானிய மற்றும் உளுத்த மாவில் செய்த மொறுமொறுப்பான முறுக்கு, சீரகம், எள் மணத்துடன், பண்டிகை கால சிற்றுண்டி." },
    },
    "browntop-millet-38": {
      hi: { title: "कोर्ले सब्ज़ी उप्मा", description: "ब्राउनटॉप मिलेट के दलिए को गाजर, मटर और सरसों-करी पत्ते के तड़के के साथ पकाया हल्का नमकीन नाश्ता, कामकाजी सुबह के लिए तैयार।" },
      ta: { title: "கோர்லே காய்கறி உப்புமா", description: "பிரவுன்டாப் சிறுதானிய ரவையுடன் கேரட், பட்டாணி, கடுகு-கறிவேப்பிலை தாளிப்பில் செய்த இலகுவான உப்புமா, வார நாள் காலை உணவுக்கு ஏற்றது." },
    },
    "browntop-millet-39": {
      hi: { title: "कोर्ले पकौड़े", description: "ब्राउनटॉप मिलेट और बेसन से बने कुरकुरे आलू-प्याज़ पकौड़े, अजवाइन के स्वाद वाले, शाम की चाय के साथ।" },
      ta: { title: "கோர்லே பக்கோடா", description: "பிரவுன்டாப் சிறுதானிய மற்றும் கடலை மாவில் செய்த மொறுமொறுப்பான உருளைக்கிழங்கு, வெங்காய பக்கோடா, ஓமம் மணத்துடன்." },
    },
    "browntop-millet-40": {
      hi: { title: "कोर्ले मीन कुज़ाम्बु", description: "इमली और नारियल की ग्रेवी में मेथी की खुशबू वाली तीखी-खट्टी मछली, तमिल तट का स्वाद, नरम ब्राउनटॉप मिलेट के साथ।" },
      ta: { title: "கோர்லே மீன் குழம்பு", description: "புளி, தேங்காய் குழம்பில் வெந்தய மணத்துடன் செய்த புளிப்பு காரமான மீன், கடலோர தமிழ் வீடுகளின் சுவை." },
    },
  },
  plate: {
    "browntop-millet-36": {
      kcal: 220, carbsG: 34, fibreG: 6, gi: 52,
      minerals: ["iron", "magnesium", "calcium"],
      raw: { kind: "raw", name: "Cucumber and carrot sticks", how: "Cut cucumber and carrot into sticks and sprinkle with chaat masala." },
      sides: [
        { kind: "cooked", name: "Beans thoran", how: "Stir-fry chopped beans with grated coconut, mustard seeds and curry leaves until just tender." },
        { kind: "cooked", name: "Carrot poriyal", how: "Sauté grated carrot with mustard seeds, urad dal and a little grated coconut until tender." },
      ],
    },
    "browntop-millet-37": {
      kcal: 320, carbsG: 38, fibreG: 4, gi: 55,
      minerals: ["iron", "magnesium", "potassium"],
      raw: { kind: "raw", name: "Sliced onion with lemon", how: "Thinly slice one onion and squeeze a few drops of lemon juice over it." },
      sides: [
        { kind: "cooked", name: "Tomato rasam", how: "Simmer tomato with tamarind water, pepper, cumin and garlic, then finish with coriander." },
        { kind: "cooked", name: "Cabbage poriyal", how: "Sauté shredded cabbage with mustard seeds, green chilli and grated coconut until tender." },
      ],
    },
    "browntop-millet-38": {
      kcal: 240, carbsG: 36, fibreG: 5, gi: 56,
      minerals: ["iron", "magnesium", "phosphorus"],
      raw: { kind: "raw", name: "Cucumber rounds", how: "Slice cucumber into rounds and sprinkle with black salt." },
      sides: [
        { kind: "cooked", name: "Drumstick sambar", how: "Simmer toor dal with drumsticks, tamarind and sambar powder until thick and fragrant." },
        { kind: "cooked", name: "Beans poriyal", how: "Stir-fry chopped beans with grated coconut, mustard seeds and curry leaves until just tender." },
      ],
    },
    "browntop-millet-39": {
      kcal: 270, carbsG: 28, fibreG: 4, gi: 60,
      minerals: ["iron", "calcium", "folate"],
      raw: { kind: "raw", name: "Sliced onion and cucumber", how: "Slice one onion and one cucumber into rounds and season with black salt and lemon juice." },
      sides: [
        { kind: "cooked", name: "Palak sabzi", how: "Cook spinach with onion, garlic and cumin until soft and mildly spiced." },
        { kind: "cooked", name: "Aloo gobi", how: "Cook potato and cauliflower with cumin, turmeric and tomato until tender." },
      ],
    },
    "browntop-millet-40": {
      kcal: 360, carbsG: 30, fibreG: 4, gi: 52,
      minerals: ["iron", "selenium", "phosphorus"],
      raw: { kind: "raw", name: "Cucumber and onion salad", how: "Slice cucumber and onion thinly and toss with lemon juice and a pinch of salt." },
      sides: [
        { kind: "cooked", name: "Beans poriyal", how: "Stir-fry chopped beans with grated coconut, mustard seeds and curry leaves until just tender." },
        { kind: "cooked", name: "Radish sambar", how: "Simmer radish and toor dal with tamarind and sambar powder until thick and fragrant." },
      ],
    },
  },
};
