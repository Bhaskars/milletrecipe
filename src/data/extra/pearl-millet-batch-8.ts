import type { Recipe } from "@/types/recipe";
import type { LineContent } from "@/data/i18n-content/sorghum";
import type { PlateInfo } from "@/types/plate";

/** pearl-millet recipes pearl-millet-51 to pearl-millet-55. */
export const PEARL_MILLET_BATCH_8: {
  recipes: Recipe[];
  content: Record<string, { hi: LineContent; ta: LineContent }>;
  translations: Record<string, { hi: { title: string; description: string }; ta: { title: string; description: string } }>;
  plate: Record<string, PlateInfo>;
} = {
  recipes: [
    {
      id: "pearl-millet-51",
      title: "Bajra Palak Pakora",
      milletId: "pearl-millet",
      region: "North Indian",
      diet: "Vegetarian",
      course: "Snack",
      description: "Crisp fritters of bajra and besan with onion, spinach and green chilli, a monsoon-time snack that is best eaten hot with tea.",
      servings: 4,
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      difficulty: "Easy",
      ingredients: [
        "1/2 cup bajra (pearl millet) flour",
        "1/2 cup besan (gram flour)",
        "1 small onion, thinly sliced",
        "1 cup spinach leaves, chopped",
        "1 green chilli, finely chopped",
        "1 tsp ajwain (carom seeds)",
        "1/2 tsp red chilli powder",
        "1/2 tsp salt",
        "Water as needed",
        "Oil for deep frying (about 1 cup)",
      ],
      steps: [
        "Mix the bajra flour, besan, ajwain, red chilli powder and salt in a large bowl.",
        "Add the sliced onion, chopped spinach and green chilli and toss them through the flour.",
        "Sprinkle in water a little at a time and mix to a thick batter that clings to the vegetables without being runny.",
        "Rest the batter for 5 minutes so that the flour absorbs the moisture properly.",
        "Heat the oil in a kadai on medium heat until a drop of batter sizzles and rises to the top immediately.",
        "Drop small spoonfuls of the mixture into the oil, spacing them so they do not stick together.",
        "Fry for 3 to 4 minutes, turning them once, until golden brown and crisp all over.",
        "Drain on paper towels and serve hot with green chutney and tea.",
      ],
    },
    {
      id: "pearl-millet-52",
      title: "Bajra Dhokli in Tangy Dal",
      milletId: "pearl-millet",
      region: "West Indian",
      diet: "Vegetarian",
      course: "Main Course",
      description: "A Gujarati one-pot meal of hand-rolled bajra dough strips simmered in a tangy, spiced toor dal, a wholesome and filling lunch.",
      servings: 4,
      prepTimeMinutes: 25,
      cookTimeMinutes: 30,
      difficulty: "Medium",
      ingredients: [
        "1 cup bajra (pearl millet) flour",
        "1/4 cup whole wheat flour (atta)",
        "1/2 cup toor dal, cooked and mashed",
        "3 cups water",
        "1 tsp jaggery, grated",
        "1 tbsp tamarind pulp",
        "1 tsp ginger-green chilli paste",
        "1/2 tsp turmeric powder",
        "2 tbsp oil",
        "1 tsp mustard seeds and cumin seeds",
      ],
      steps: [
        "Knead the bajra flour and whole wheat flour with a little water into a firm dough, then rest it for 10 minutes.",
        "Roll the dough into a thin sheet and cut it into small diamond-shaped strips.",
        "Boil the mashed toor dal with 2 cups of water, turmeric, ginger-chilli paste and salt until it is soft and liquid.",
        "Stir in the tamarind pulp and jaggery and let the dal simmer for 5 minutes.",
        "Drop the dough strips into the simmering dal one by one and cook on low heat for 10 minutes.",
        "Heat the oil in a small pan and add the mustard and cumin seeds until they splutter.",
        "Pour the tempering over the dhokli and stir gently so the strips do not break.",
        "Cover and rest for 2 minutes, then serve hot with a spoon of ghee.",
      ],
    },
    {
      id: "pearl-millet-53",
      title: "Kambu Vegetable Biryani",
      milletId: "pearl-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Main Course",
      description: "A fragrant one-pot biryani of broken kambu layered with spiced vegetables, mint and fried onion, a lighter alternative to rice biryani.",
      servings: 4,
      prepTimeMinutes: 30,
      cookTimeMinutes: 35,
      difficulty: "Medium",
      ingredients: [
        "1 cup broken kambu (pearl millet), soaked for 30 minutes",
        "2 tbsp ghee and 2 tbsp oil",
        "1 onion, thinly sliced and fried golden",
        "1 cup mixed vegetables (carrot, beans, peas), chopped",
        "1 tbsp ginger-garlic paste",
        "1 tomato, chopped",
        "1 tsp biryani masala",
        "A few mint and coriander leaves",
        "2 1/2 cups water",
        "1 tsp salt",
      ],
      steps: [
        "Drain the soaked broken kambu and keep it aside.",
        "Heat the ghee and oil in a heavy pot and add half of the fried onion, reserving the rest for garnish.",
        "Stir in the ginger-garlic paste and cook until the raw smell disappears.",
        "Add the chopped vegetables and tomato and cook until the vegetables are nearly tender.",
        "Add the biryani masala, mint, coriander and the drained kambu and roast for 2 minutes.",
        "Pour in the water and salt, bring to a boil, then cover and cook on low heat for 20 minutes.",
        "Check that the grains are soft and the water is absorbed, then fluff the biryani gently.",
        "Garnish with the reserved fried onion and rest covered for 5 minutes before serving with raita.",
      ],
    },
    {
      id: "pearl-millet-54",
      title: "Bajra Roti with Mutton Curry",
      milletId: "pearl-millet",
      region: "North Indian",
      diet: "Non-Vegetarian",
      course: "Main Course",
      description: "Hearth-cooked bajra rotis served with a slow-simmered mutton curry of onion, yoghurt and whole spices, a classic winter combination.",
      servings: 4,
      prepTimeMinutes: 30,
      cookTimeMinutes: 60,
      difficulty: "Hard",
      ingredients: [
        "2 cups bajra (pearl millet) flour",
        "Warm water as needed",
        "1/2 tsp salt",
        "500 g mutton, bone-in pieces",
        "3 tbsp mustard oil",
        "2 onions, finely chopped",
        "2 tbsp ginger-garlic paste",
        "1/2 cup thick curd (yoghurt), whisked",
        "1 tsp garam masala",
        "1 tsp red chilli powder",
        "1 tsp salt for the curry",
        "1 cup water",
      ],
      steps: [
        "Knead the bajra flour with salt and warm water into a soft dough and set it aside for 10 minutes.",
        "Heat the mustard oil in a heavy pan and fry the onions until deep golden brown.",
        "Add the ginger-garlic paste and fry until the raw smell goes, then add the mutton pieces and sear them on high heat.",
        "Stir in the whisked curd, red chilli powder and salt, and cook on medium heat until the oil separates.",
        "Add the garam masala and water, cover the pan, and simmer on low heat for 45 minutes until the mutton is tender.",
        "Meanwhile, shape the dough into 8 rotis and cook them on a hot tawa, flipping until brown spots appear.",
        "Finish each roti over an open flame for a few seconds so that it puffs slightly.",
        "Serve the rotis hot with the mutton curry and a wedge of lemon.",
      ],
    },
    {
      id: "pearl-millet-55",
      title: "Kambu Sakkarai Pongal",
      milletId: "pearl-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Dessert",
      description: "A festive sweet pongal of broken kambu cooked with jaggery, moong dal, ghee and cashews, flavoured with cardamom and saffron.",
      servings: 4,
      prepTimeMinutes: 15,
      cookTimeMinutes: 35,
      difficulty: "Easy",
      ingredients: [
        "1 cup broken kambu (pearl millet)",
        "1/4 cup moong dal",
        "4 cups water",
        "1 cup jaggery, grated",
        "1/3 cup ghee",
        "10 cashews",
        "1/2 tsp cardamom powder",
        "A pinch of saffron soaked in 1 tbsp warm milk",
      ],
      steps: [
        "Dry roast the broken kambu and moong dal together for 3 minutes until they smell nutty.",
        "Pressure cook the roasted grains with 3 cups of water for 4 whistles, then mash them lightly.",
        "Melt the grated jaggery with the remaining water in a pan and strain it to remove any impurities.",
        "Add the jaggery syrup to the cooked kambu and stir on low heat until the mixture thickens.",
        "Fry the cashews in 1 tbsp ghee until golden, and keep them aside.",
        "Stir in the cardamom powder, saffron milk and the remaining ghee, and cook for 3 minutes more.",
        "Add the fried cashews and mix well so that they are spread evenly through the pongal.",
        "Serve warm as a festive sweet, drizzled with a little extra ghee on top.",
      ],
    },
  ],
  content: {
    "pearl-millet-51": {
      hi: {
        ingredients: ["1/2 कप बाजरे का आटा", "1/2 कप बेसन", "1 छोटा प्याज़, पतला कटा", "1 कप पालक के पत्ते, कटे", "1 हरी मिर्च, बारीक कटी", "1 छोटा चम्मच अजवाइन", "1/2 छोटा चम्मच लाल मिर्च पाउडर", "1/2 छोटा चम्मच नमक", "ज़रूरत अनुसार पानी", "तलने के लिए तेल (लगभग 1 कप)"],
        steps: ["एक बड़े बर्तन में बाजरे का आटा, बेसन, अजवाइन, लाल मिर्च पाउडर और नमक मिलाएँ।", "कटा प्याज़, कटा पालक और हरी मिर्च डालकर आटे में हल्के हाथ से मिलाएँ।", "थोड़ा-थोड़ा पानी डालकर इतना गाढ़ा घोल बनाएँ जो सब्ज़ियों से चिपके पर पतला न हो।", "घोल को 5 मिनट रखें ताकि आटा नमी अच्छी तरह सोख ले।", "कड़ाही में तेल मध्यम आँच पर गरम करें जब तक घोल की एक बूँद तुरंत चटककर ऊपर न आ जाए।", "घोल के छोटे-छोटे चम्मच तेल में डालें, इतनी दूरी पर कि वे आपस में न चिपकें।", "3 से 4 मिनट तक एक बार पलटते हुए हर तरफ से सुनहरे और कुरकुरे होने तक तलें।", "टिश्यू पेपर पर निकालें और गरम चटनी व चाय के साथ परोसें।"],
      },
      ta: {
        ingredients: ["1/2 கப் கம்பு மாவு", "1/2 கப் கடலை மாவு", "1 சிறிய வெங்காயம், மெல்லியதாக நறுக்கியது", "1 கப் பாலக் கீரை, நறுக்கியது", "1 பச்சை மிளகாய், பொடியாக நறுக்கியது", "1 டீஸ்பூன் ஓமம்", "1/2 டீஸ்பூன் மிளகாய்த் தூள்", "1/2 டீஸ்பூன் உப்பு", "தேவையான அளவு தண்ணீர்", "பொரிக்க எண்ணெய் (சுமார் 1 கப்)"],
        steps: ["ஒரு பெரிய பாத்திரத்தில் கம்பு மாவு, கடலை மாவு, ஓமம், மிளகாய்த் தூள், உப்பு சேர்க்கவும்.", "நறுக்கிய வெங்காயம், பாலக் கீரை, பச்சை மிளகாயை சேர்த்து மாவில் மெதுவாக புரட்டவும்.", "சிறிது சிறிதாக தண்ணீர் ஊற்றி, காய்கறிகளில் ஒட்டும் ஆனால் நீர்க்காத கெட்டியான கலவையாக கலக்கவும்.", "மாவு ஈரத்தை முழுவதும் உறிஞ்ச 5 நிமிடம் வைக்கவும்.", "வாணலியில் எண்ணெயை மிதமான தீயில் சூடாக்கவும், மாவில் ஒரு துளி உடனே சிதறி மேலே வரும் பதத்தில்.", "கலவையை சிறு கரண்டிகளாக எண்ணெயில் போடவும், ஒன்றோடு ஒன்று ஒட்டாமல் இடைவெளி விட்டு.", "ஒரு முறை திருப்பி 3 முதல் 4 நிமிடம் அனைத்து பக்கமும் பொன்னிறமாகவும் மொறுமொறுப்பாகவும் வறுக்கவும்.", "டிஷ்யூ தாளில் வடிகட்டி, சூடான பச்சை சட்னி மற்றும் தேநீருடன் பரிமாறவும்."],
      },
    },
    "pearl-millet-52": {
      hi: {
        ingredients: ["1 कप बाजरे का आटा", "1/4 कप गेहूँ का आटा (आटा)", "1/2 कप तूर दाल, पकाकर मसली हुई", "3 कप पानी", "1 छोटा चम्मच गुड़, कसा हुआ", "1 बड़ा चम्मच इमली का गूदा", "1 छोटा चम्मच अदरक-हरी मिर्च का पेस्ट", "1/2 छोटा चम्मच हल्दी पाउडर", "2 बड़े चम्मच तेल", "1 छोटा चम्मच राई और 1 छोटा चम्मच जीरा"],
        steps: ["बाजरे और गेहूँ के आटे को थोड़े पानी के साथ सख्त आटा गूँधें और 10 मिनट रखें।", "आटे की पतली चादर बेलें और उसे छोटी हीरे के आकार की पट्टियों में काटें।", "मसली तूर दाल को 2 कप पानी, हल्दी, अदरक-हरी मिर्च पेस्ट और नमक के साथ उबालें जब तक वह नरम और पतली न हो जाए।", "इमली का गूदा और गुड़ डालकर दाल को 5 मिनट धीमी आँच पर उबलने दें।", "उबलती दाल में धोकली की पट्टियाँ एक-एक करके डालें और धीमी आँच पर 10 मिनट पकाएँ।", "छोटे बर्तन में तेल गरम करें और राई व जीरा चटकने तक डालें।", "छौंक को धोकली पर डालें और पट्टियाँ न टूटें इसके लिए धीरे से चलाएँ।", "ढककर 2 मिनट रखें, फिर एक चम्मच घी के साथ गरम परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் கம்பு மாவு", "1/4 கப் கோதுமை மாவு (ஆட்டா)", "1/2 கப் துவரம் பருப்பு, வேகவைத்து மசித்தது", "3 கப் தண்ணீர்", "1 டீஸ்பூன் வெல்லம், துருவியது", "1 டேபிள்ஸ்பூன் புளிக் கூழ்", "1 டீஸ்பூன் இஞ்சி-பச்சை மிளகாய் விழுது", "1/2 டீஸ்பூன் மஞ்சள் தூள்", "2 டேபிள்ஸ்பூன் எண்ணெய்", "1 டீஸ்பூன் கடுகு மற்றும் 1 டீஸ்பூன் சீரகம்"],
        steps: ["கம்பு மாவு, கோதுமை மாவை சிறிது தண்ணீருடன் கெட்டியான மாவாக பிசைந்து 10 நிமிடம் வைக்கவும்.", "மாவை மெல்லிய தாளாக உருட்டி, சிறு வைர வடிவ துண்டுகளாக வெட்டவும்.", "மசித்த துவரம் பருப்பை 2 கப் தண்ணீர், மஞ்சள், இஞ்சி-பச்சை மிளகாய் விழுது, உப்புடன் மென்மையாகும் வரை கொதிக்கவிடவும்.", "புளிக் கூழ், வெல்லம் சேர்த்து பருப்பை மெல்லிய தீயில் 5 நிமிடம் கொதிக்கவிடவும்.", "கொதிக்கும் பருப்பில் மாவுத் துண்டுகளை ஒவ்வொன்றாக போட்டு, மெல்லிய தீயில் 10 நிமிடம் வேகவிடவும்.", "சிறிய பாத்திரத்தில் எண்ணெய் சூடாக்கி, கடுகு, சீரகம் வெடிக்கும் வரை சேர்க்கவும்.", "தாளிப்பை தோக்லி மேல் ஊற்றி, துண்டுகள் உடையாமல் மெதுவாக கிளறவும்.", "மூடி 2 நிமிடம் வைத்து, ஒரு கரண்டி நெய்யுடன் சூடாக பரிமாறவும்."],
      },
    },
    "pearl-millet-53": {
      hi: {
        ingredients: ["1 कप टूटा कंबु (बाजरा), 30 मिनट भिगोया हुआ", "2 बड़े चम्मच घी और 2 बड़े चम्मच तेल", "1 प्याज़, पतला कटा और सुनहरा तला हुआ", "1 कप मिली-जुली सब्ज़ियाँ (गाजर, फलियाँ, मटर), कटी हुई", "1 बड़ा चम्मच अदरक-लहसुन का पेस्ट", "1 टमाटर, कटा हुआ", "1 छोटा चम्मच बिरयानी मसाला", "कुछ पुदीना और धनिया की पत्तियाँ", "2 1/2 कप पानी", "1 छोटा चम्मच नमक"],
        steps: ["भीगे टूटे कंबु को छानकर अलग रखें।", "भारी बर्तन में घी और तेल गरम करें और आधा तला प्याज़ डालें, बाकी गार्निश के लिए रखें।", "अदरक-लहसुन पेस्ट डालकर कच्चापन जाने तक भूनें।", "कटी सब्ज़ियाँ और टमाटर डालकर लगभग नरम होने तक पकाएँ।", "बिरयानी मसाला, पुदीना, धनिया और छना कंबु डालकर 2 मिनट भूनें।", "पानी और नमक डालकर उबाल आने दें, फिर ढककर धीमी आँच पर 20 मिनट पकाएँ।", "दाने नरम और पानी सोख लिए जाने पर बिरयानी को धीरे से फुलाएँ।", "रखा हुआ तला प्याज़ डालकर सजाएँ और परोसने से पहले 5 मिनट ढककर रखें।"],
      },
      ta: {
        ingredients: ["1 கப் உடைத்த கம்பு, 30 நிமிடம் ஊறவைத்தது", "2 டேபிள்ஸ்பூன் நெய், 2 டேபிள்ஸ்பூன் எண்ணெய்", "1 வெங்காயம், மெல்லியதாக நறுக்கி பொன்னிறமாக வறுத்தது", "1 கப் கலந்த காய்கறிகள் (கேரட், பீன்ஸ், பட்டாணி), நறுக்கியது", "1 டேபிள்ஸ்பூன் இஞ்சி-பூண்டு விழுது", "1 தக்காளி, நறுக்கியது", "1 டீஸ்பூன் பிரியாணி மசாலா", "சில புதினா மற்றும் கொத்தமல்லி இலைகள்", "2 1/2 கப் தண்ணீர்", "1 டீஸ்பூன் உப்பு"],
        steps: ["ஊறவைத்த உடைத்த கம்பை வடிகட்டி தனியாக வைக்கவும்.", "கனமான பாத்திரத்தில் நெய், எண்ணெய் சூடாக்கி, வறுத்த வெங்காயத்தில் பாதியை சேர்க்கவும், மீதியை அலங்காரத்துக்கு வைக்கவும்.", "இஞ்சி-பூண்டு விழுது சேர்த்து பச்சை வாசனை போகும் வரை வதக்கவும்.", "நறுக்கிய காய்கறிகள், தக்காளி சேர்த்து காய்கறிகள் கிட்டத்தட்ட வேகும் வரை வேகவிடவும்.", "பிரியாணி மசாலா, புதினா, கொத்தமல்லி, வடிகட்டிய கம்பு சேர்த்து 2 நிமிடம் வறுக்கவும்.", "தண்ணீர், உப்பு சேர்த்து கொதிக்க விட்டு, மூடி மெல்லிய தீயில் 20 நிமிடம் வேகவிடவும்.", "தானியங்கள் மென்மையாகி தண்ணீர் உறிஞ்சியதும், பிரியாணியை மெதுவாக உதிர்க்கவும்.", "மீதமுள்ள வறுத்த வெங்காயத்தால் அலங்கரித்து, பரிமாறும் முன் 5 நிமிடம் மூடி வைக்கவும்."],
      },
    },
    "pearl-millet-54": {
      hi: {
        ingredients: ["2 कप बाजरे का आटा", "ज़रूरत अनुसार गुनगुना पानी", "1/2 छोटा चम्मच नमक", "500 ग्राम मटन, हड्डी वाले टुकड़े", "3 बड़े चम्मच सरसों का तेल", "2 प्याज़, बारीक कटे", "2 बड़े चम्मच अदरक-लहसुन का पेस्ट", "1/2 कप गाढ़ा दही, फेंटा हुआ", "1 छोटा चम्मच गरम मसाला", "1 छोटा चम्मच लाल मिर्च पाउडर", "सब्ज़ी के लिए 1 छोटा चम्मच नमक", "1 कप पानी"],
        steps: ["बाजरे के आटे को नमक और गुनगुने पानी से नरम आटा गूँधें और 10 मिनट रखें।", "भारी पैन में सरसों का तेल गरम करें और प्याज़ को गहरा भूरा होने तक भूनें।", "अदरक-लहसुन पेस्ट डालकर कच्चापन जाने तक भूनें, फिर मटन के टुकड़े डालकर तेज़ आँच पर सील होने तक भूनें।", "फेंटा दही, लाल मिर्च और नमक मिलाकर मध्यम आँच पर पकाएँ जब तक तेल अलग न होने लगे।", "गरम मसाला और पानी डालें, पैन ढककर धीमी आँच पर 45 मिनट उबालें जब तक मटन नरम न हो जाए।", "इस बीच आटे से 8 रोटियाँ बनाएँ और गरम तवे पर भूरे धब्बे आने तक पलटें।", "हर रोटी को खुली आँच पर कुछ सेकंड रखें ताकि वह हल्की फूल जाए।", "गरम रोटियों को मटन करी और नींबू की फाँक के साथ परोसें।"],
      },
      ta: {
        ingredients: ["2 கப் கம்பு மாவு", "தேவையான அளவு வெதுவெதுப்பான தண்ணீர்", "1/2 டீஸ்பூன் உப்பு", "500 கிராம் ஆட்டுக்கறி, எலும்புடன் துண்டுகள்", "3 டேபிள்ஸ்பூன் கடுகு எண்ணெய்", "2 வெங்காயம், பொடியாக நறுக்கியது", "2 டேபிள்ஸ்பூன் இஞ்சி-பூண்டு விழுது", "1/2 கப் கெட்டி தயிர், அடித்தது", "1 டீஸ்பூன் கரம் மசாலா", "1 டீஸ்பூன் மிளகாய்த் தூள்", "குழம்புக்கு 1 டீஸ்பூன் உப்பு", "1 கப் தண்ணீர்"],
        steps: ["கம்பு மாவை உப்பு, வெதுவெதுப்பான தண்ணீருடன் மென்மையான மாவாக பிசைந்து 10 நிமிடம் வைக்கவும்.", "கனமான வாணலியில் கடுகு எண்ணெயை சூடாக்கி, வெங்காயத்தை ஆழ்ந்த பழுப்பாகும் வரை வறுக்கவும்.", "இஞ்சி-பூண்டு விழுது சேர்த்து பச்சை வாசனை போகும் வரை வதக்கி, பிறகு ஆட்டுக்கறித் துண்டுகளை சேர்த்து அதிக தீயில் நிறம் மாறும் வரை வதக்கவும்.", "அடித்த தயிர், மிளகாய்த் தூள், உப்பு சேர்த்து, எண்ணெய் பிரிந்து வரும் வரை மிதமான தீயில் வேகவிடவும்.", "கரம் மசாலா, தண்ணீர் சேர்த்து, மூடி மெல்லிய தீயில் ஆட்டுக்கறி மென்மையாகும் வரை 45 நிமிடம் கொதிக்கவிடவும்.", "இதற்கிடையில் மாவை 8 ரொட்டிகளாக்கி, சூடான தோசைக்கல்லில் பழுப்புப் புள்ளிகள் வரும் வரை திருப்பி சுடவும்.", "ஒவ்வொரு ரொட்டியையும் திறந்த தீயில் சில வினாடி வைத்து லேசாக உப்ப விடவும்.", "சூடான ரொட்டிகளை ஆட்டுக்கறி குழம்பு மற்றும் எலுமிச்சை துண்டுடன் பரிமாறவும்."],
      },
    },
    "pearl-millet-55": {
      hi: {
        ingredients: ["1 कप टूटा कंबु (बाजरा)", "1/4 कप मूँग दाल", "4 कप पानी", "1 कप गुड़, कसा हुआ", "1/3 कप घी", "10 काजू", "1/2 छोटा चम्मच इलायची पाउडर", "1 चुटकी केसर, 1 बड़ा चम्मच गुनगुने दूध में भीगी"],
        steps: ["टूटे कंबु और मूँग दाल को 3 मिनट भूनें जब तक नटी खुशबू न आए।", "भुने अनाज और दाल को 3 कप पानी के साथ प्रेशर कुकर में 4 सीटी तक पकाएँ, फिर हल्का मसलें।", "कसे गुड़ को बचे पानी में पिघलाएँ और छानकर अशुद्धियाँ निकालें।", "गुड़ की चाशनी को पके कंबु में डालें और धीमी आँच पर चलाते रहें जब तक मिश्रण गाढ़ा न हो जाए।", "काजू को 1 बड़ा चम्मच घी में सुनहरा तलें और अलग रखें।", "इलायची पाउडर, केसर वाला दूध और बचा घी मिलाकर 3 मिनट और पकाएँ।", "तले काजू डालकर पोंगल में अच्छी तरह मिलाएँ ताकि पूरे में बराबर फैल जाएँ।", "गरम परोसें, ऊपर से थोड़ा और घी डालकर त्योहार की मिठाई की तरह।"],
      },
      ta: {
        ingredients: ["1 கப் உடைத்த கம்பு", "1/4 கப் பாசிப்பருப்பு", "4 கப் தண்ணீர்", "1 கப் வெல்லம், துருவியது", "1/3 கப் நெய்", "10 முந்திரி", "1/2 டீஸ்பூன் ஏலக்காய்த் தூள்", "1 சிட்டிகை குங்குமப்பூ, 1 டேபிள்ஸ்பூன் வெதுவெதுப்பான பாலில் ஊறியது"],
        steps: ["உடைத்த கம்பு, பாசிப்பருப்பை 3 நிமிடம் நட்டு வாசனை வரும் வரை வறுக்கவும்.", "வறுத்த தானியம், பருப்பை 3 கப் தண்ணீருடன் பிரஷர் குக்கரில் 4 விசில் வரை வேகவைத்து, லேசாக மசிக்கவும்.", "துருவிய வெல்லத்தை மீதமுள்ள தண்ணீரில் உருக்கி, அழுக்கு நீங்க வடிகட்டவும்.", "வெல்லப் பாகை வெந்த கம்பில் சேர்த்து, கலவை கெட்டியாகும் வரை மெல்லிய தீயில் கிளறவும்.", "முந்திரியை 1 டேபிள்ஸ்பூன் நெய்யில் பொன்னிறமாக வறுத்து, தனியாக வைக்கவும்.", "ஏலக்காய்த் தூள், குங்குமப்பூ பால், மீதமுள்ள நெய் சேர்த்து மேலும் 3 நிமிடம் வேகவிடவும்.", "வறுத்த முந்திரியை சேர்த்து பொங்கல் முழுவதும் சமமாக பரவும்படி நன்கு கலக்கவும்.", "சூடாக பரிமாறவும், மேலே கொஞ்சம் நெய் விட்டு பண்டிகை இனிப்பாக."],
      },
    },
  },
  translations: {
    "pearl-millet-51": {
      hi: { title: "बाजरा पकोड़ा", description: "बाजरे और बेसन में प्याज़, पालक और हरी मिर्च मिलाकर बने कुरकुरे पकौड़े, जो बारिश के मौसम में चाय के साथ गरम खाए जाते हैं।" },
      ta: { title: "கம்பு பக்கோடா", description: "கம்பு மற்றும் கடலை மாவில் வெங்காயம், பாலக் கீரை, பச்சை மிளகாய் சேர்த்து செய்யப்படும் மொறுமொறுப்பான பக்கோடா. சூடான தேநீருடன் சாப்பிட ஏற்றது." },
    },
    "pearl-millet-52": {
      hi: { title: "बाजरा दाल ढोकली", description: "गुजरात का एक-बर्तन भोजन, जिसमें बाजरे और गेहूँ के आटे की हाथ से बेली पट्टियाँ खट्टी-मीठी मसालेदार तूर दाल में पकाई जाती हैं।" },
      ta: { title: "கம்பு தால் தோக்லி", description: "குஜராத்தின் ஒரு பாத்திர உணவு. கம்பு, கோதுமை மாவில் கையால் உருட்டிய துண்டுகள் புளிப்பும் இனிப்புமான காரமான துவரம் பருப்பில் வேகவைக்கப்படுகின்றன." },
    },
    "pearl-millet-53": {
      hi: { title: "कंबु सब्ज़ी बिरयानी", description: "टूटे कंबु को मसालेदार सब्ज़ियों, पुदीने और तले प्याज़ के साथ परतों में पकाई गई सुगंधित एक-बर्तन बिरयानी, जो चावल की बिरयानी का हल्का विकल्प है।" },
      ta: { title: "கம்பு காய்கறி பிரியாணி", description: "உடைத்த கம்பை காரமான காய்கறிகள், புதினா, வறுத்த வெங்காயத்துடன் அடுக்கி செய்யப்படும் நறுமணமான ஒரு பாத்திர பிரியாணி. அரிசி பிரியாணிக்கு இலகுவான மாற்று." },
    },
    "pearl-millet-54": {
      hi: { title: "बाजरा रोटी के साथ मटन करी", description: "गरम तवे पर सेंकी बाजरा रोटियों के साथ दही, प्याज़ और साबुत मसालों में धीमी आँच पर पकी मटन करी, एक पारंपरिक सर्दियों का संयोजन।" },
      ta: { title: "கம்பு ரொட்டியுடன் ஆட்டுக்கறி குழம்பு", description: "சூடான தோசைக்கல்லில் சுட்ட கம்பு ரொட்டிகளுடன் தயிர், வெங்காயம், முழு மசாலாக்களில் மெல்லிய தீயில் வேகவைத்த ஆட்டுக்கறி குழம்பு. பாரம்பரிய குளிர்கால கலவை." },
    },
    "pearl-millet-55": {
      hi: { title: "कंबु शक्करई पोंगल", description: "टूटे कंबु को गुड़, मूँग दाल, घी और काजू के साथ पकाकर इलायची और केसर से सुगंधित किया गया त्योहारी मीठा पोंगल।" },
      ta: { title: "கம்பு சர்க்கரைப் பொங்கல்", description: "உடைத்த கம்பை வெல்லம், பாசிப்பருப்பு, நெய், முந்திரியுடன் சமைத்து ஏலக்காய், குங்குமப்பூவால் மணமூட்டிய பண்டிகை இனிப்பு பொங்கல்." },
    },
  },
  plate: {
    "pearl-millet-51": {
      kcal: 240, carbsG: 30, fibreG: 5, gi: 62, minerals: ["iron", "magnesium", "calcium"],
      raw: { kind: "raw", name: "Cucumber and tomato salad", how: "Dice cucumber and tomato, and toss with lemon juice, black salt and chopped coriander." },
      sides: [
        { kind: "cooked", name: "Dal tadka", how: "Cook toor dal until soft, then pour over a tempering of cumin, garlic and dried red chilli." },
        { kind: "cooked", name: "Methi aloo", how: "Saute potato cubes with fenugreek leaves, cumin and turmeric until tender." },
      ],
    },
    "pearl-millet-52": {
      kcal: 330, carbsG: 46, fibreG: 7, gi: 58, minerals: ["iron", "magnesium", "potassium", "phosphorus"],
      raw: { kind: "raw", name: "Onion and cucumber salad", how: "Slice onion and cucumber into rounds, then toss with lemon juice and a pinch of salt." },
      sides: [
        { kind: "cooked", name: "Lauki sabzi", how: "Cook bottle gourd cubes with cumin, tomato and turmeric until soft and lightly dry." },
        { kind: "cooked", name: "Cabbage poriyal-style sabzi", how: "Saute shredded cabbage with mustard seeds, green peas and grated coconut until tender." },
      ],
    },
    "pearl-millet-53": {
      kcal: 340, carbsG: 50, fibreG: 7, gi: 62, minerals: ["magnesium", "iron", "potassium", "zinc"],
      raw: { kind: "raw", name: "Cucumber and carrot sticks", how: "Cut cucumber and carrot into thin sticks and serve with a pinch of black salt." },
      sides: [
        { kind: "cooked", name: "Dal fry", how: "Cook masoor dal until soft, then finish with a tadka of cumin, garlic and red chilli." },
        { kind: "cooked", name: "Raita-style cucumber", how: "Mix grated cucumber into whisked curd with roasted cumin and a pinch of salt." },
      ],
    },
    "pearl-millet-54": {
      kcal: 520, carbsG: 46, fibreG: 5, gi: 60, minerals: ["iron", "zinc", "selenium", "phosphorus"],
      raw: { kind: "raw", name: "Onion and tomato salad", how: "Slice onion and tomato thinly, and season with lemon juice, black pepper and coriander." },
      sides: [
        { kind: "cooked", name: "Sarson ka saag", how: "Simmer mustard greens with spinach and ginger, then mash lightly and finish with a tadka." },
        { kind: "cooked", name: "Aloo gobi", how: "Cook potato and cauliflower florets with cumin, turmeric and tomato until tender." },
      ],
    },
    "pearl-millet-55": {
      kcal: 380, carbsG: 56, fibreG: 4, gi: 66, minerals: ["iron", "magnesium", "calcium", "potassium"],
      raw: { kind: "raw", name: "Carrot and cucumber sticks", how: "Cut carrot and cucumber into thin sticks and serve chilled with a pinch of salt." },
      sides: [
        { kind: "cooked", name: "Vegetable kootu", how: "Simmer chopped vegetables with toor dal and coconut paste, then temper with mustard and curry leaves." },
        { kind: "cooked", name: "Beetroot poriyal", how: "Stir fry diced beetroot with mustard seeds, curry leaves and grated coconut until tender." },
      ],
    },
  },
};
