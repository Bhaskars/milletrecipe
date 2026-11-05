import type { Recipe } from "@/types/recipe";
import type { LineContent } from "@/data/i18n-content/sorghum";
import type { PlateInfo } from "@/types/plate";

/** proso-millet recipes proso-millet-41 to proso-millet-45 with full English, Hindi and Tamil content and plate data. */
export const PROSO_MILLET_BATCH_6: {
  recipes: Recipe[];
  content: Record<string, { hi: LineContent; ta: LineContent }>;
  translations: Record<string, { hi: { title: string; description: string }; ta: { title: string; description: string } }>;
  plate: Record<string, PlateInfo>;
} = {
  recipes: [
    {
      id: "proso-millet-41",
      title: "Panivaragu Puliyogare",
      milletId: "proso-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Main Course",
      description: "Tangy tamarind rice made with proso millet, spiced with roasted peanuts, sesame and a fragrant puliyogare powder, a festival rice from Karnataka and Tamil kitchens.",
      servings: 4,
      prepTimeMinutes: 20,
      cookTimeMinutes: 25,
      difficulty: "Medium",
      ingredients: [
        "2 cups cooked proso millet (panivaragu), cooled and loosened",
        "1 lemon-sized ball tamarind, soaked in 1/2 cup warm water",
        "3 tbsp sesame oil (gingelly oil), divided",
        "1 tsp mustard seeds, 1 tsp chana dal, 1 tsp urad dal",
        "2 tbsp roasted peanuts",
        "4 dried red chillies, 8 curry leaves",
        "1/4 tsp turmeric powder, 1/4 tsp asafoetida",
        "2 tbsp puliyogare masala powder, store-bought or home-ground",
        "1 1/2 tsp salt, 1 tsp jaggery",
      ],
      steps: [
        "Squeeze the tamarind in its soaking water, strain the extract, and simmer it with the turmeric, salt and jaggery for 5 minutes until slightly thickened.",
        "Heat 2 tbsp sesame oil in a kadai, fry the peanuts until crisp, and set them aside.",
        "Add the remaining oil, mustard seeds, chana dal and urad dal to the kadai and fry until golden.",
        "Add the red chillies, curry leaves and asafoetida and let them sizzle for 20 seconds.",
        "Pour in the tamarind mixture and bring to a boil, then stir in the puliyogare masala and simmer for 5 minutes.",
        "Add the cooked millet and fold gently so each grain is coated without breaking.",
        "Cover and rest for 10 minutes so the flavours soak in, then scatter the peanuts on top.",
        "Serve at room temperature with curd or cucumber.",
      ],
    },
    {
      id: "proso-millet-42",
      title: "Panivaragu Vellam Pongal",
      milletId: "proso-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Dessert",
      description: "A sweet pongal of soft proso millet and moong dal cooked with jaggery, ghee and cardamom, offered at festivals and enjoyed warm.",
      servings: 4,
      prepTimeMinutes: 10,
      cookTimeMinutes: 30,
      difficulty: "Easy",
      ingredients: [
        "1 cup proso millet (panivaragu)",
        "1/4 cup moong dal, dry roasted",
        "1 cup jaggery, grated",
        "3 cups water, plus 1/2 cup for the jaggery syrup",
        "1/4 cup ghee, divided",
        "1/2 tsp cardamom powder, pinch of nutmeg",
        "a few strands of saffron, soaked in 1 tbsp warm milk",
        "10 cashews, halved",
        "1 tbsp raisins",
      ],
      steps: [
        "Rinse the millet and dal together, then pressure-cook them with 3 cups water for 4 whistles, or simmer covered for 25 minutes, until soft.",
        "Mash the cooked mixture lightly with the back of a spoon for a creamy texture.",
        "Dissolve the jaggery in 1/2 cup water over low heat, then strain it to remove impurities.",
        "Add the strained jaggery syrup to the pongal and stir over low heat until well combined and slightly thick.",
        "Heat 2 tbsp ghee in a small pan and fry the cashews and raisins until golden, then set them aside.",
        "Stir in the cardamom, nutmeg, saffron and the remaining 2 tbsp ghee.",
        "Cook for 3 minutes more, stirring, until the pongal turns glossy.",
        "Garnish with the fried cashews and raisins and serve warm.",
      ],
    },
    {
      id: "proso-millet-43",
      title: "Panivaragu Thayir Sadam",
      milletId: "proso-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Main Course",
      description: "Cooling curd rice made with soft proso millet, mixed with yoghurt and milk and tempered with mustard seeds and curry leaves, a comforting end to a South Indian meal.",
      servings: 4,
      prepTimeMinutes: 10,
      cookTimeMinutes: 20,
      difficulty: "Easy",
      ingredients: [
        "1 cup proso millet (panivaragu), rinsed",
        "2 1/2 cups water, for cooking",
        "1 cup plain yoghurt, whisked smooth",
        "1/2 cup milk, to loosen",
        "1 tsp salt",
        "1 tbsp sesame oil or ghee, for tempering",
        "1 tsp mustard seeds, 1 tsp urad dal, 1 dried red chilli",
        "8 curry leaves, 1 tsp ginger, grated",
        "1 tbsp chopped coriander, 2 tbsp pomegranate seeds (optional)",
      ],
      steps: [
        "Cook the millet in 2 1/2 cups water until soft and fluffy, then drain any extra water.",
        "Spread the cooked millet on a plate and let it cool to lukewarm so the yoghurt does not split.",
        "Mash the millet lightly in a bowl, then mix in the whisked yoghurt and milk.",
        "Season with the salt and mix until creamy and smooth.",
        "Heat the oil in a small pan, then add the mustard seeds, urad dal, dried chilli, ginger and curry leaves.",
        "Once the mustard splutters, pour the tempering over the curd rice and mix well.",
        "Garnish with coriander and pomegranate, then chill for 15 minutes before serving.",
      ],
    },
    {
      id: "proso-millet-44",
      title: "Panivaragu Egg Bhurji",
      milletId: "proso-millet",
      region: "North Indian",
      diet: "Non-Vegetarian",
      course: "Breakfast",
      description: "Scrambled eggs cooked with onion, tomato and spices and served with warm proso millet, a quick and protein-rich breakfast from North Indian homes.",
      servings: 4,
      prepTimeMinutes: 10,
      cookTimeMinutes: 15,
      difficulty: "Easy",
      ingredients: [
        "6 large eggs",
        "1 cup cooked proso millet (panivaragu), warm",
        "2 tbsp ghee, or 2 tbsp sunflower oil",
        "1 small onion, finely chopped",
        "1 tomato, finely chopped",
        "1 green chilli, finely chopped",
        "1 tsp ginger, finely grated",
        "1/4 tsp turmeric powder, 1/2 tsp red chilli powder, 1/2 tsp garam masala",
        "1/2 tsp salt",
        "2 tbsp fresh coriander leaves, chopped",
      ],
      steps: [
        "Beat the eggs in a bowl with the salt and half the coriander until smooth and light.",
        "Heat the ghee in a non-stick pan over medium heat and fry the onion until soft and golden, about 4 minutes.",
        "Add the green chilli and ginger and cook for 1 minute until the raw smell fades.",
        "Stir in the tomato, turmeric, chilli powder and garam masala and cook until the tomato breaks down.",
        "Pour in the beaten eggs and stir gently over low heat, breaking them into soft curds.",
        "Cook for about 3 minutes until just set but still moist, and remove from the heat before they dry out.",
        "Fold in the warm millet, sprinkle the remaining coriander, and serve immediately.",
      ],
    },
    {
      id: "proso-millet-45",
      title: "Panivaragu Coconut Barfi",
      milletId: "proso-millet",
      region: "West Indian",
      diet: "Vegetarian",
      course: "Dessert",
      description: "Soft, fudge-like barfi made from roasted proso millet flour, fresh coconut and jaggery syrup, a sweet from the traditional kitchens of western India.",
      servings: 6,
      prepTimeMinutes: 10,
      cookTimeMinutes: 25,
      difficulty: "Medium",
      ingredients: [
        "1 cup proso millet flour (panivaragu atta)",
        "1 cup fresh grated coconut",
        "3/4 cup jaggery, grated",
        "1/4 cup water",
        "3 tbsp ghee, divided",
        "1/2 tsp cardamom powder",
        "1 tbsp chopped pistachios, for topping",
        "a pinch of salt",
      ],
      steps: [
        "Dry roast the millet flour in a heavy pan over low heat for 5 minutes until fragrant and a shade darker, then set aside.",
        "Dissolve the jaggery in the water and simmer for 3 minutes until it forms a slightly thick syrup, then strain it.",
        "Add the grated coconut and salt to the syrup and cook for 5 minutes, stirring.",
        "Stir in the roasted flour a spoonful at a time, mixing well to avoid lumps.",
        "Add 2 tbsp ghee and the cardamom and keep stirring until the mixture leaves the sides of the pan as a soft dough.",
        "Grease a plate or tray with the remaining ghee and spread the mixture evenly, about half an inch thick.",
        "Sprinkle the pistachios over the top, let it cool for 10 minutes, then cut into diamond shapes.",
      ],
    },
  ],
  content: {
    "proso-millet-41": {
      hi: {
        ingredients: ["2 कप पका पनिवरागु (प्रोसो मिलेट), ठंडा करके अलग-अलग किया हुआ", "नींबू जितनी इमली, 1/2 कप गुनगुने पानी में भिगोई हुई", "3 बड़े चम्मच तिल का तेल, बाँटा हुआ", "1 छोटा चम्मच सरसों, 1 छोटा चम्मच चना दाल, 1 छोटा चम्मच उड़द दाल", "2 बड़े चम्मच भुनी मूँगफली", "4 सूखी लाल मिर्च, 8 करी पत्ते", "1/4 छोटा चम्मच हल्दी, 1/4 छोटा चम्मच हींग", "2 बड़े चम्मच पुलियोगरे मसाला पाउडर, बाज़ार से या घर का", "1 1/2 छोटा चम्मच नमक, 1 छोटा चम्मच गुड़"],
        steps: ["इमली को भीगे पानी में निचोड़कर छानें और हल्दी, नमक और गुड़ के साथ 5 मिनट हल्का गाढ़ा होने तक उबालें।", "कढ़ाई में 2 बड़े चम्मच तिल का तेल गरम करके मूँगफली को कुरकुरा होने तक तलें और अलग रखें।", "बचा तेल डालकर सरसों, चना दाल और उड़द दाल सुनहरी होने तक तलें।", "सूखी लाल मिर्च, करी पत्ते और हींग डालकर 20 सेकंड चटकने दें।", "इमली का मिश्रण डालकर उबाल लें, फिर पुलियोगरे मसाला मिलाकर 5 मिनट पकाएँ।", "पका मिलेट डालकर धीरे से मिलाएँ ताकि हर दाना लिपटे पर टूटे नहीं।", "ढककर 10 मिनट रखें ताकि स्वाद रच जाए, फिर ऊपर से मूँगफली बिखेरें।", "कमरे के तापमान पर दही या खीरे के साथ परोसें।"],
      },
      ta: {
        ingredients: ["2 கப் வேகவைத்த பனிவரகு, ஆறவைத்து உதிர்த்தது", "எலுமிச்சை அளவு புளி, 1/2 கப் வெதுவெதுப்பான தண்ணீரில் ஊறவைத்தது", "3 டேபிள்ஸ்பூன் நல்லெண்ணெய், பிரித்தது", "1 டீஸ்பூன் கடுகு, 1 டீஸ்பூன் கடலைப் பருப்பு, 1 டீஸ்பூன் உளுத்தம் பருப்பு", "2 டேபிள்ஸ்பூன் வறுத்த வேர்க்கடலை", "4 காய்ந்த சிவப்பு மிளகாய், 8 கறிவேப்பிலை", "1/4 டீஸ்பூன் மஞ்சள் தூள், 1/4 டீஸ்பூன் பெருங்காயம்", "2 டேபிள்ஸ்பூன் புளியோதரை பொடி, கடையில் வாங்கியது அல்லது வீட்டில் அரைத்தது", "1 1/2 டீஸ்பூன் உப்பு, 1 டீஸ்பூன் வெல்லம்"],
        steps: ["புளியை ஊறிய தண்ணீரில் பிழிந்து வடிகட்டி, மஞ்சள், உப்பு, வெல்லத்துடன் 5 நிமிடம் சற்று கெட்டியாகும் வரை கொதிக்க விடவும்.", "கடாயில் 2 டேபிள்ஸ்பூன் நல்லெண்ணெய் சூடாக்கி வேர்க்கடலையை மொறுமொறுப்பாக வறுத்து தனியாக வைக்கவும்.", "மீதி எண்ணெயில் கடுகு, கடலைப் பருப்பு, உளுத்தம் பருப்பு சேர்த்து பொன்னிறமாக வறுக்கவும்.", "மிளகாய், கறிவேப்பிலை, பெருங்காயம் சேர்த்து 20 வினாடி தாளிக்கவும்.", "புளிக் கரைசலை ஊற்றி கொதிக்க விட்டு, புளியோதரை பொடி சேர்த்து 5 நிமிடம் வேகவிடவும்.", "வெந்த தானியத்தை சேர்த்து, ஒவ்வொரு தானியமும் உடையாமல் மெதுவாக கலக்கவும்.", "மூடி 10 நிமிடம் வைத்து சுவை ஊறவிட்டு, மேலே வேர்க்கடலை தூவவும்.", "அறை வெப்பநிலையில் தயிர் அல்லது வெள்ளரியுடன் பரிமாறவும்."],
      },
    },
    "proso-millet-42": {
      hi: {
        ingredients: ["1 कप पनिवरागु (प्रोसो मिलेट)", "1/4 कप मूँग दाल, बिना तेल के भुनी हुई", "1 कप गुड़, कसा हुआ", "3 कप पानी, और गुड़ की चाशनी के लिए 1/2 कप", "1/4 कप घी, बाँटा हुआ", "1/2 छोटा चम्मच इलायची पाउडर, जायफल की चुटकी", "केसर के कुछ धागे, 1 बड़े चम्मच गुनगुने दूध में भिगोए हुए", "10 काजू, दो टुकड़े किए हुए", "1 बड़ा चम्मच किशमिश"],
        steps: ["मिलेट और दाल को धोकर 3 कप पानी के साथ प्रेशर कुकर में 4 सीटी दें, या ढककर 25 मिनट धीमी आँच पर नरम होने तक पकाएँ।", "पके मिश्रण को चम्मच के पिछले हिस्से से हल्का मसलें ताकि क्रीमी बने।", "गुड़ को 1/2 कप पानी में धीमी आँच पर घोलें और गंदगी हटाने के लिए छान लें।", "छनी चाशनी पोंगल में डालें और धीमी आँच पर हल्का गाढ़ा होने तक चलाएँ।", "छोटी कढ़ाई में 2 बड़े चम्मच घी गरम करके काजू और किशमिश सुनहरे होने तक तलें और अलग रखें।", "इलायची, जायफल, केसर और बचा 2 बड़े चम्मच घी मिलाएँ।", "3 मिनट और चलाते हुए पकाएँ जब तक पोंगल चमकदार न हो जाए।", "तले काजू और किशमिश से सजाकर गरम परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் பனிவரகு", "1/4 கப் பாசிப்பருப்பு, வறுத்தது", "1 கப் வெல்லம், துருவியது", "3 கப் தண்ணீர், மற்றும் வெல்லப் பாகுக்கு 1/2 கப்", "1/4 கப் நெய், பிரித்தது", "1/2 டீஸ்பூன் ஏலக்காய் தூள், ஒரு சிட்டிகை ஜாதிக்காய்", "சில குங்குமப்பூ இழைகள், 1 டேபிள்ஸ்பூன் வெதுவெதுப்பான பாலில் ஊறவைத்தது", "10 முந்திரி, இரண்டாக உடைத்தது", "1 டேபிள்ஸ்பூன் உலர் திராட்சை"],
        steps: ["தானியத்தையும் பருப்பையும் கழுவி 3 கப் தண்ணீருடன் பிரஷர் குக்கரில் 4 விசில் வைக்கவும், அல்லது மூடி 25 நிமிடம் மெல்லிய தீயில் மென்மையாகும் வரை வேகவிடவும்.", "வெந்த கலவையை கரண்டியின் பின்புறத்தால் லேசாக மசித்து கிரீமியாக்கவும்.", "வெல்லத்தை 1/2 கப் தண்ணீரில் மெல்லிய தீயில் கரைத்து, அழுக்கு நீங்க வடிகட்டவும்.", "வடிகட்டிய வெல்லப் பாகை பொங்கலில் ஊற்றி மெல்லிய தீயில் நன்கு கலந்து சற்று கெட்டியாக்கவும்.", "சிறிய வாணலியில் 2 டேபிள்ஸ்பூன் நெய்யில் முந்திரி, உலர் திராட்சையை பொன்னிறமாக வறுத்து தனியாக வைக்கவும்.", "ஏலக்காய், ஜாதிக்காய், குங்குமப்பூ, மீதமுள்ள 2 டேபிள்ஸ்பூன் நெய் சேர்த்து கிளறவும்.", "மேலும் 3 நிமிடம் கிளறி பொங்கல் பளபளப்பாகும் வரை வேகவிடவும்.", "வறுத்த முந்திரி, திராட்சையால் அலங்கரித்து சூடாக பரிமாறவும்."],
      },
    },
    "proso-millet-43": {
      hi: {
        ingredients: ["1 कप पनिवरागु (प्रोसो मिलेट), धोया हुआ", "2 1/2 कप पानी, पकाने के लिए", "1 कप सादा दही, अच्छी तरह फेंटा हुआ", "1/2 कप दूध, पतला करने के लिए", "1 छोटा चम्मच नमक", "1 बड़ा चम्मच तिल का तेल या घी, तड़के के लिए", "1 छोटा चम्मच सरसों, 1 छोटा चम्मच उड़द दाल, 1 सूखी लाल मिर्च", "8 करी पत्ते, 1 छोटा चम्मच कसा हुआ अदरक", "1 बड़ा चम्मच कटा धनिया, 2 बड़े चम्मच अनार के दाने (वैकल्पिक)"],
        steps: ["मिलेट को 2 1/2 कप पानी में नरम और फूला हुआ होने तक पकाएँ, फिर अतिरिक्त पानी निथार दें।", "पका मिलेट थाली में फैलाकर गुनगुना होने तक ठंडा करें ताकि दही न फटे।", "मिलेट को कटोरे में चम्मच से हल्का मसलें, फिर फेंटा हुआ दही और दूध मिलाएँ।", "नमक डालकर मिलाएँ जब तक मलाईदार और चिकना न हो जाए।", "छोटी कढ़ाई में तेल गरम करें, फिर सरसों, उड़द दाल, सूखी मिर्च, अदरक और करी पत्ते डालें।", "सरसों चटकने पर तड़का दही-भात पर डालकर अच्छी तरह मिलाएँ।", "धनिया और अनार से सजाएँ और परोसने से पहले 15 मिनट ठंडा करें।"],
      },
      ta: {
        ingredients: ["1 கப் பனிவரகு, கழுவியது", "2 1/2 கப் தண்ணீர், வேகவைக்க", "1 கப் சாதாத் தயிர், நன்கு அடித்தது", "1/2 கப் பால், நீர்க்க", "1 டீஸ்பூன் உப்பு", "1 டேபிள்ஸ்பூன் நல்லெண்ணெய் அல்லது நெய், தாளிக்க", "1 டீஸ்பூன் கடுகு, 1 டீஸ்பூன் உளுத்தம் பருப்பு, 1 காய்ந்த சிவப்பு மிளகாய்", "8 கறிவேப்பிலை, 1 டீஸ்பூன் துருவிய இஞ்சி", "1 டேபிள்ஸ்பூன் கொத்தமல்லி நறுக்கியது, 2 டேபிள்ஸ்பூன் மாதுளை முத்துக்கள் (விருப்பம்)"],
        steps: ["தானியத்தை 2 1/2 கப் தண்ணீரில் மென்மையாகவும் உதிரியாகவும் வேகவைத்து, மீதி தண்ணீரை வடிக்கவும்.", "வெந்த தானியத்தை தட்டில் பரப்பி, தயிர் திரியாமல் இருக்க வெதுவெதுப்பாக ஆறவிடவும்.", "தானியத்தை கிண்ணத்தில் கரண்டியால் லேசாக மசித்து, அடித்த தயிர் மற்றும் பாலை சேர்க்கவும்.", "உப்பு சேர்த்து கிரீமியாகவும் மென்மையாகவும் வரும் வரை கலக்கவும்.", "சிறிய வாணலியில் எண்ணெயை சூடாக்கி கடுகு, உளுத்தம் பருப்பு, மிளகாய், இஞ்சி, கறிவேப்பிலை சேர்க்கவும்.", "கடுகு வெடித்ததும் தாளிப்பை தயிர் சாதத்தின் மேல் ஊற்றி நன்கு கலக்கவும்.", "கொத்தமல்லி, மாதுளையால் அலங்கரித்து பரிமாறும் முன் 15 நிமிடம் குளிரவைக்கவும்."],
      },
    },
    "proso-millet-44": {
      hi: {
        ingredients: ["6 बड़े अंडे", "1 कप पका पनिवरागु (प्रोसो मिलेट), गरम", "2 बड़े चम्मच घी, या 2 बड़े चम्मच सूरजमुखी तेल", "1 छोटी प्याज़, बारीक कटी", "1 टमाटर, बारीक कटा", "1 हरी मिर्च, बारीक कटी", "1 छोटा चम्मच अदरक, कसा हुआ", "1/4 छोटा चम्मच हल्दी, 1/2 छोटा चम्मच लाल मिर्च पाउडर, 1/2 छोटा चम्मच गरम मसाला", "1/2 छोटा चम्मच नमक", "2 बड़े चम्मच हरा धनिया, कटा"],
        steps: ["अंडों को नमक और आधे धनिया के साथ चिकना और हल्का होने तक फेंटें।", "नॉन-स्टिक पैन में घी मध्यम आँच पर गरम करें और प्याज़ नरम व सुनहरा होने तक लगभग 4 मिनट भूनें।", "हरी मिर्च और अदरक डालकर 1 मिनट पकाएँ जब तक कच्ची गंध न जाए।", "टमाटर, हल्दी, मिर्च पाउडर और गरम मसाला डालकर टमाटर गलने तक पकाएँ।", "फेंटे हुए अंडे डालें और धीमी आँच पर चलाते हुए नरम टुकड़े बनने दें।", "लगभग 3 मिनट पकाएँ जब तक हल्के सेट हों पर नम रहें, और सूखने से पहले आँच से उतार लें।", "गरम मिलेट और बचा धनिया मिलाकर तुरंत परोसें।"],
      },
      ta: {
        ingredients: ["6 பெரிய முட்டைகள்", "1 கப் வேகவைத்த பனிவரகு, சூடாக", "2 டேபிள்ஸ்பூன் நெய், அல்லது 2 டேபிள்ஸ்பூன் சூரியகாந்தி எண்ணெய்", "1 சிறிய வெங்காயம், பொடியாக நறுக்கியது", "1 தக்காளி, பொடியாக நறுக்கியது", "1 பச்சை மிளகாய், பொடியாக நறுக்கியது", "1 டீஸ்பூன் இஞ்சி, துருவியது", "1/4 டீஸ்பூன் மஞ்சள் தூள், 1/2 டீஸ்பூன் மிளகாய்த் தூள், 1/2 டீஸ்பூன் கரம் மசாலா", "1/2 டீஸ்பூன் உப்பு", "2 டேபிள்ஸ்பூன் கொத்தமல்லி இலை, நறுக்கியது"],
        steps: ["முட்டைகளை உப்பு, பாதி கொத்தமல்லியுடன் மென்மையாகவும் லேசாகவும் வரும் வரை அடிக்கவும்.", "நான்-ஸ்டிக் பானில் நெய்யை மிதமான தீயில் சூடாக்கி வெங்காயத்தை மென்மையாகவும் பொன்னிறமாகவும் சுமார் 4 நிமிடம் வதக்கவும்.", "பச்சை மிளகாய், இஞ்சி சேர்த்து 1 நிமிடம் பச்சை வாசனை போகும் வரை வதக்கவும்.", "தக்காளி, மஞ்சள், மிளகாய்த் தூள், கரம் மசாலா சேர்த்து தக்காளி குழையும் வரை வேகவிடவும்.", "அடித்த முட்டைகளை ஊற்றி மெல்லிய தீயில் கிளறி மென்மையான துண்டுகளாக வேகவிடவும்.", "சுமார் 3 நிமிடம் வேகவிட்டு, நன்கு அமைந்தும் ஈரப்பதம் இருக்கும் போதே அடுப்பிலிருந்து இறக்கவும்.", "சூடான பனிவரகு மற்றும் மீதி கொத்தமல்லியை சேர்த்து உடனே பரிமாறவும்."],
      },
    },
    "proso-millet-45": {
      hi: {
        ingredients: ["1 कप पनिवरागु (प्रोसो मिलेट) का आटा", "1 कप ताज़ा कसा हुआ नारियल", "3/4 कप गुड़, कसा हुआ", "1/4 कप पानी", "3 बड़े चम्मच घी, बाँटा हुआ", "1/2 छोटा चम्मच इलायची पाउडर", "1 बड़ा चम्मच कटे पिस्ते, ऊपर सजाने के लिए", "एक चुटकी नमक"],
        steps: ["मिलेट के आटे को भारी बर्तन में धीमी आँच पर 5 मिनट लगातार भूनें जब तक खुशबू न आए और रंग थोड़ा गहरा न हो जाए, फिर अलग रखें।", "गुड़ को पानी में 3 मिनट उबालें जब तक हल्की गाढ़ी चाशनी न बन जाए, फिर छान लें।", "चाशनी में कसा नारियल और नमक डालकर 5 मिनट चलाते हुए पकाएँ।", "भुना आटा एक-एक चम्मच करके डालें और अच्छी तरह मिलाएँ ताकि गुठलियाँ न बनें।", "2 बड़े चम्मच घी और इलायची डालकर लगातार चलाएँ जब तक मिश्रण बर्तन के किनारे छोड़ते हुए नरम आटे जैसा न हो जाए।", "प्लेट या ट्रे पर बचा घी चुपड़ें और मिश्रण को लगभग आधा इंच मोटा समान फैलाएँ।", "ऊपर पिस्ते बिखेरें, 10 मिनट ठंडा होने दें, फिर हीरे के आकार में काटें।"],
      },
      ta: {
        ingredients: ["1 கப் பனிவரகு மாவு", "1 கப் துருவிய தேங்காய்", "3/4 கப் வெல்லம், துருவியது", "1/4 கப் தண்ணீர்", "3 டேபிள்ஸ்பூன் நெய், பிரித்தது", "1/2 டீஸ்பூன் ஏலக்காய் தூள்", "1 டேபிள்ஸ்பூன் பிஸ்தா நறுக்கியது, மேலே தூவ", "ஒரு சிட்டிகை உப்பு"],
        steps: ["மாவை கனமான பாத்திரத்தில் மெல்லிய தீயில் 5 நிமிடம் வறுத்து மணம் வந்ததும், சற்று நிறம் மாறியதும் தனியாக வைக்கவும்.", "வெல்லத்தை தண்ணீரில் கரைத்து 3 நிமிடம் கொதிக்க விட்டு சற்று கெட்டியான பாகு ஆக்கி வடிகட்டவும்.", "பாகில் துருவிய தேங்காய், உப்பு சேர்த்து 5 நிமிடம் கிளறவும்.", "வறுத்த மாவை ஒரு கரண்டி அளவாக சேர்த்து, கட்டி விழாமல் நன்கு கலக்கவும்.", "2 டேபிள்ஸ்பூன் நெய், ஏலக்காய் சேர்த்து பாத்திரத்தின் ஓரத்தில் இருந்து பிரியும் மென்மையான மாவாகும் வரை தொடர்ந்து கிளறவும்.", "தட்டு அல்லது ட்ரேயில் மீதி நெய் தடவி, கலவையை சுமார் அரை அங்குல தடிமனில் சமமாக பரப்பவும்.", "மேலே பிஸ்தா தூவி 10 நிமிடம் ஆறவிட்டு வைர வடிவில் வெட்டவும்."],
      },
    },
  },
  translations: {
    "proso-millet-41": {
      hi: { title: "पनिवरागु पुलियोगरे", description: "इमली, भुनी मूँगफली और तिल के मसाले से तड़का हुआ खट्टा-मीठा चावल जैसा व्यंजन, कर्नाटक और तमिलनाडु के त्योहारों की थाली का हिस्सा।" },
      ta: { title: "பனிவரகு புளியோதரை", description: "புளி, வறுத்த வேர்க்கடலை, எள் சேர்த்து செய்த புளிப்பு இனிப்பான தானிய சாதம், திருவிழா நாட்களில் பரிமாறப்படும் உணவு." },
    },
    "proso-millet-42": {
      hi: { title: "पनिवरागु सक्करई पोंगल", description: "पनिवरागु और मूँग दाल को गुड़, घी और इलायची के साथ पकाया मीठा पोंगल, त्योहारों पर चढ़ाया जाने वाला और गरम खाया जाने वाला।" },
      ta: { title: "பனிவரகு சர்க்கரைப் பொங்கல்", description: "பனிவரகு மற்றும் பாசிப்பருப்பை வெல்லம், நெய், ஏலக்காயுடன் சமைத்த இனிப்புப் பொங்கல், பண்டிகை நாட்களில் படைக்கப்படுவது." },
    },
    "proso-millet-43": {
      hi: { title: "पनिवरागु थयिर सादम", description: "नरम पनिवरागु भात को दही और दूध में मिलाकर सरसों-करी पत्ते के तड़के के साथ बना ठंडा, सुखदायक दही-भात, दक्षिण भारतीय भोजन का आखिरी व्यंजन।" },
      ta: { title: "பனிவரகு தயிர் சாதம்", description: "மென்மையான பனிவரகு சாதத்தை தயிர், பாலுடன் கலந்து கடுகு, கறிவேப்பிலை தாளிப்புடன் செய்த குளிர்ச்சியான தயிர் சாதம்." },
    },
    "proso-millet-44": {
      hi: { title: "पनिवरागु अंडा भुर्जी", description: "प्याज़, टमाटर और मसालों के साथ भुने अंडे, गरम पनिवरागु के साथ परोसे जाने वाले उत्तर भारत के त्वरित और प्रोटीन-भरे नाश्ते।" },
      ta: { title: "பனிவரகு முட்டை புர்ஜி", description: "வெங்காயம், தக்காளி, மசாலாவுடன் வறுத்த முட்டை, சூடான பனிவரகுடன் பரிமாறப்படும் விரைவான புரதச்சத்து நிறைந்த காலை உணவு." },
    },
    "proso-millet-45": {
      hi: { title: "पनिवरागु नारियल बर्फी", description: "भुने पनिवरागु आटे, ताज़े नारियल और गुड़ की चाशनी से बनी नरम, मावे जैसी बर्फी, पश्चिम भारत की पारंपरिक मिठाइयों में से एक।" },
      ta: { title: "பனிவரகு தேங்காய் பர்பி", description: "வறுத்த பனிவரகு மாவு, புதிய தேங்காய், வெல்லப் பாகில் செய்த மென்மையான பர்பி, மேற்கிந்திய பாரம்பரிய இனிப்பு." },
    },
  },
  plate: {
    "proso-millet-41": {
      kcal: 310, carbsG: 48, fibreG: 5, gi: 62,
      minerals: ["iron", "magnesium", "phosphorus"],
      raw: { kind: "raw", name: "Cucumber rounds", how: "Slice one cucumber into thin rounds and sprinkle with a pinch of black salt." },
      sides: [
        { kind: "cooked", name: "Beetroot poriyal", how: "Sauté grated beetroot with mustard seeds, curry leaves and a little grated coconut until tender." },
        { kind: "cooked", name: "Drumstick sambar", how: "Simmer toor dal with drumsticks, tamarind and sambar powder until thick and fragrant." },
      ],
    },
    "proso-millet-42": {
      kcal: 330, carbsG: 52, fibreG: 4, gi: 66,
      minerals: ["iron", "magnesium", "potassium"],
      raw: { kind: "raw", name: "Carrot sticks", how: "Peel and cut one carrot into thin sticks and serve with a squeeze of lime." },
      sides: [
        { kind: "cooked", name: "Beans thoran", how: "Stir-fry chopped beans with grated coconut, mustard seeds and curry leaves until just tender." },
        { kind: "cooked", name: "Cabbage poriyal", how: "Sauté shredded cabbage with mustard seeds, green chilli and grated coconut until tender." },
      ],
    },
    "proso-millet-43": {
      kcal: 240, carbsG: 36, fibreG: 3, gi: 50,
      minerals: ["calcium", "phosphorus", "magnesium"],
      raw: { kind: "raw", name: "Cucumber and carrot sticks", how: "Cut cucumber and carrot into sticks and sprinkle with chaat masala." },
      sides: [
        { kind: "cooked", name: "Pumpkin kootu", how: "Simmer pumpkin and moong dal with coconut and cumin, then temper with mustard seeds." },
        { kind: "cooked", name: "Beans poriyal", how: "Stir-fry chopped beans with mustard seeds, curry leaves and grated coconut until just tender." },
      ],
    },
    "proso-millet-44": {
      kcal: 340, carbsG: 32, fibreG: 3, gi: 50,
      minerals: ["iron", "phosphorus", "selenium"],
      raw: { kind: "raw", name: "Cucumber and tomato slices", how: "Slice one cucumber and one tomato and season with black salt and a squeeze of lemon." },
      sides: [
        { kind: "cooked", name: "Palak sabzi", how: "Cook spinach with onion, garlic and cumin until soft and mildly spiced." },
        { kind: "cooked", name: "Cabbage poriyal", how: "Sauté shredded cabbage with mustard seeds, green chilli and grated coconut until tender." },
      ],
    },
    "proso-millet-45": {
      kcal: 260, carbsG: 34, fibreG: 4, gi: 65,
      minerals: ["iron", "magnesium", "copper"],
      raw: { kind: "raw", name: "Cucumber rounds", how: "Slice cucumber into thin rounds and sprinkle with a pinch of black salt." },
      sides: [
        { kind: "cooked", name: "Beetroot poriyal", how: "Sauté grated beetroot with mustard seeds, curry leaves and a little grated coconut until tender." },
        { kind: "cooked", name: "Radish sambar", how: "Simmer radish and toor dal with tamarind and sambar powder until thick and fragrant." },
      ],
    },
  },
};
