import type { Recipe } from "@/types/recipe";
import type { LineContent } from "@/data/i18n-content/sorghum";
import type { PlateInfo } from "@/types/plate";

/** finger-millet recipes finger-millet-46 to finger-millet-50. */
export const FINGER_MILLET_BATCH_7: {
  recipes: Recipe[];
  content: Record<string, { hi: LineContent; ta: LineContent }>;
  translations: Record<string, { hi: { title: string; description: string }; ta: { title: string; description: string } }>;
  plate: Record<string, PlateInfo>;
} = {
  recipes: [
    {
      id: "finger-millet-46",
      title: "Ragi Sesame Murukku",
      milletId: "finger-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Snack",
      description: "Crunchy, spiral-shaped snacks made from ragi and rice flour with sesame and cumin, pressed through a murukku mould and fried until crisp.",
      servings: 6,
      prepTimeMinutes: 25,
      cookTimeMinutes: 30,
      difficulty: "Medium",
      ingredients: [
        "1 cup ragi (finger millet) flour",
        "1/2 cup rice flour",
        "2 tbsp urad dal flour",
        "1 tbsp sesame seeds",
        "1 tsp cumin seeds",
        "1 tbsp butter, softened",
        "1 tsp salt",
        "Warm water as needed",
        "1 cup oil for deep frying",
      ],
      steps: [
        "Combine the ragi flour, rice flour, urad dal flour, sesame seeds, cumin and salt in a large bowl.",
        "Rub the softened butter into the flour mixture with your fingertips until it looks sandy.",
        "Add warm water gradually and knead into a soft, pliable dough that does not stick to your hands.",
        "Fill the murukku press with a little dough, choosing a star or round disc to shape the spirals.",
        "Heat the oil in a deep kadai on medium-low heat until a small drop of dough sizzles gently.",
        "Press the dough in a spiral directly into the hot oil, using the press to make concentric rings.",
        "Fry for 2 to 3 minutes per side until light golden and the bubbling has nearly stopped.",
        "Drain on paper towels, cool completely, and store in an airtight container.",
      ],
    },
    {
      id: "finger-millet-47",
      title: "Ragi Dhokla",
      milletId: "finger-millet",
      region: "West Indian",
      diet: "Vegetarian",
      course: "Snack",
      description: "A steamed, spongy savoury cake of ragi flour and besan with yoghurt, ginger and chilli, finished with a sizzling mustard and curry leaf tempering.",
      servings: 4,
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      difficulty: "Medium",
      ingredients: [
        "1 cup ragi (finger millet) flour",
        "1/2 cup besan (gram flour)",
        "1/2 cup thick curd (yoghurt)",
        "3/4 cup water",
        "1 tsp ginger and green chilli paste",
        "1 tsp salt",
        "1 tsp sugar",
        "1 tsp eno fruit salt or baking soda",
        "1 tbsp oil and 1 tsp mustard seeds, for tempering",
      ],
      steps: [
        "Whisk the ragi flour, besan, curd, ginger chilli paste, salt, sugar and water into a smooth batter.",
        "Rest the batter for 10 minutes so the flours can absorb the liquid.",
        "Grease a round steel tin or thali and set up a steamer with boiling water.",
        "Just before steaming, add the eno or baking soda to the batter and stir gently in one direction to trap air.",
        "Pour the batter into the tin and steam covered on medium heat for 15 to 18 minutes until a skewer comes out clean.",
        "Heat the oil in a small pan, add the mustard seeds and curry leaves, and let them splutter.",
        "Cut the dhokla into squares and pour the hot tempering over it.",
        "Serve warm with green chutney.",
      ],
    },
    {
      id: "finger-millet-48",
      title: "Ragi Sattu Cooler",
      milletId: "finger-millet",
      region: "North Indian",
      diet: "Vegetarian",
      course: "Drink",
      description: "A cooling, nutritious drink made from roasted ragi flour mixed with water, jaggery and roasted cumin, served chilled on hot summer afternoons.",
      servings: 2,
      prepTimeMinutes: 10,
      cookTimeMinutes: 5,
      difficulty: "Easy",
      ingredients: [
        "3 tbsp ragi (finger millet) flour, roasted",
        "2 cups cold water",
        "2 tbsp jaggery powder",
        "1/2 tsp roasted cumin powder",
        "1 pinch black salt",
        "A squeeze of lemon juice",
        "Crushed ice as needed",
        "A few mint leaves",
      ],
      steps: [
        "Dry roast the ragi flour in a pan on low heat for 2 minutes until it smells nutty.",
        "Let the roasted flour cool, then mix it with a few spoons of cold water to a smooth paste without lumps.",
        "Add the remaining cold water and the jaggery powder, and whisk until the jaggery dissolves completely.",
        "Stir in the roasted cumin powder and black salt for flavour.",
        "Add a squeeze of lemon juice and whisk the drink once more.",
        "Fill two glasses with crushed ice and pour the sharbat over it.",
        "Garnish each glass with mint leaves.",
        "Serve chilled immediately, while the drink is still cold and fresh.",
      ],
    },
    {
      id: "finger-millet-49",
      title: "Ragi Fish Curry with Rice",
      milletId: "finger-millet",
      region: "South Indian",
      diet: "Non-Vegetarian",
      course: "Main Course",
      description: "A tangy coastal fish curry of tamarind, coconut and spices, served with a warm ragi-flour roll, a protein-rich and wholesome meal.",
      servings: 4,
      prepTimeMinutes: 20,
      cookTimeMinutes: 25,
      difficulty: "Medium",
      ingredients: [
        "500 g fish (seer or pomfret), cut into steaks",
        "1/2 tsp turmeric powder",
        "1 tsp red chilli powder",
        "1/2 tsp salt",
        "2 tbsp coconut oil",
        "1 onion, chopped",
        "2 green chillies, slit",
        "1 tomato, chopped",
        "1 tsp ginger-garlic paste",
        "1 tbsp tamarind pulp",
        "1 tsp fenugreek seeds",
        "1 cup water for the curry",
        "1 cup ragi (finger millet) flour, for the side",
      ],
      steps: [
        "Rub the fish steaks with turmeric, red chilli powder and half the salt, and rest them for 10 minutes.",
        "Heat the coconut oil in a clay pot or heavy pan and add the fenugreek seeds until they darken slightly.",
        "Add the chopped onion and green chillies and fry until golden brown.",
        "Stir in the ginger-garlic paste and tomato, and cook until the tomato turns soft and mushy.",
        "Pour in 1 cup of water mixed with the tamarind pulp and the remaining salt, and bring to a simmer.",
        "Slide in the marinated fish steaks and cook on low heat for 8 to 10 minutes without stirring too much.",
        "Meanwhile, make a soft ragi dough with warm water and shape it into small rounds for serving.",
        "Serve the fish curry hot with the ragi rounds and a cup of steamed rice.",
      ],
    },
    {
      id: "finger-millet-50",
      title: "Ragi Coconut Kozhukattai",
      milletId: "finger-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Snack",
      description: "Steamed dumplings of ragi flour dough filled with grated coconut and jaggery, a traditional festival offering from Tamil Nadu.",
      servings: 4,
      prepTimeMinutes: 25,
      cookTimeMinutes: 15,
      difficulty: "Medium",
      ingredients: [
        "1 cup ragi (finger millet) flour",
        "1/4 cup rice flour",
        "1 cup water",
        "1/2 tsp salt",
        "1 tsp ghee",
        "1/2 cup grated fresh coconut",
        "1/3 cup jaggery, grated",
        "1/4 tsp cardamom powder",
      ],
      steps: [
        "Bring the water with salt and ghee to a rolling boil in a heavy pan.",
        "Lower the heat, add the ragi and rice flours, and stir quickly until the dough comes together.",
        "Cover and rest for 5 minutes, then knead the warm dough until it is smooth and pliable.",
        "Mix the grated coconut, jaggery and cardamom together for the filling, and let the jaggery melt slightly.",
        "Take small portions of dough, flatten each into a cup, and place a spoonful of filling in the centre.",
        "Pinch the edges together and seal them into a neat dumpling with a small pointed top.",
        "Arrange the kozhukattai on a greased steamer plate and steam for 12 to 15 minutes.",
        "Serve warm, brushed with a little ghee if you like.",
      ],
    },
  ],
  content: {
    "finger-millet-46": {
      hi: {
        ingredients: ["1 कप रागी (मडुआ) का आटा", "1/2 कप चावल का आटा", "2 बड़े चम्मच उड़द दाल का आटा", "1 बड़ा चम्मच तिल", "1 छोटा चम्मच जीरा", "1 बड़ा चम्मच मक्खन, नरम", "1 छोटा चम्मच नमक", "ज़रूरत अनुसार गुनगुना पानी", "तलने के लिए 1 कप तेल"],
        steps: ["एक बड़े बर्तन में रागी का आटा, चावल का आटा, उड़द दाल का आटा, तिल, जीरा और नमक मिलाएँ।", "नरम मक्खन को उँगलियों से आटे के मिश्रण में मिलाएँ जब तक वह रेत जैसा न लगे।", "गुनगुना पानी धीरे-धीरे डालकर नरम, लचीला आटा गूँधें जो हाथ से न चिपके।", "मुरुक्कू साँचे में थोड़ा आटा भरें और स्टार या गोल डिस्क चुनें जिससे गोल घेरे बनें।", "कड़ाही में तेल मध्यम-धीमी आँच पर गरम करें जब तक आटे की एक बूँद धीरे से न सनसनाए।", "आटे को सीधे गरम तेल में गोल घेरे में दबाएँ, साँचे से संकेंद्रित छल्ले बनाते हुए।", "हर तरफ 2 से 3 मिनट हल्का सुनहरा होने तक तलें, जब तक बुलबुले लगभग बंद न हो जाएँ।", "टिश्यू पेपर पर निकालकर पूरी तरह ठंडा करें और हवा-बंद डिब्बे में रखें।"],
      },
      ta: {
        ingredients: ["1 கப் ராகி (கேழ்வரகு) மாவு", "1/2 கப் அரிசி மாவு", "2 டேபிள்ஸ்பூன் உளுத்தம் பருப்பு மாவு", "1 டேபிள்ஸ்பூன் எள்", "1 டீஸ்பூன் சீரகம்", "1 டேபிள்ஸ்பூன் வெண்ணெய், மிருதுவானது", "1 டீஸ்பூன் உப்பு", "தேவையான அளவு வெதுவெதுப்பான தண்ணீர்", "பொரிக்க 1 கப் எண்ணெய்"],
        steps: ["ஒரு பெரிய பாத்திரத்தில் ராகி மாவு, அரிசி மாவு, உளுத்தம் பருப்பு மாவு, எள், சீரகம், உப்பு சேர்க்கவும்.", "மிருதுவான வெண்ணெயை விரல் நுனிகளால் மாவுக் கலவையில் மணல் போல ஆகும் வரை தேய்க்கவும்.", "வெதுவெதுப்பான தண்ணீரை சிறிது சிறிதாக சேர்த்து, கைகளில் ஒட்டாத மென்மையான, நெகிழ்வான மாவாக பிசையவும்.", "முறுக்கு அச்சில் சிறிது மாவை நிரப்பி, சுருள் வடிவத்துக்கு நட்சத்திர அல்லது வட்ட வில்லையை தேர்ந்தெடுக்கவும்.", "வாணலியில் எண்ணெயை மிதமான-மெல்லிய தீயில் சூடாக்கவும், மாவின் ஒரு துளி மெதுவாக சத்தமிடும் பதத்தில்.", "மாவை நேரடியாக சூடான எண்ணெயில் சுருளாக அழுத்தி, அச்சால் வட்ட வளையங்களாக்கவும்.", "ஒவ்வொரு பக்கமும் 2 முதல் 3 நிமிடம் லேசாக பொன்னிறமாகும் வரை பொரிக்கவும், குமிழிகள் கிட்டத்தட்ட நின்றதும்.", "டிஷ்யூ தாளில் வடிகட்டி முழுவதும் ஆறவிட்டு, காற்றுப்புகாத டப்பாவில் சேமிக்கவும்."],
      },
    },
    "finger-millet-47": {
      hi: {
        ingredients: ["1 कप रागी (मडुआ) का आटा", "1/2 कप बेसन", "1/2 कप गाढ़ा दही", "3/4 कप पानी", "1 छोटा चम्मच अदरक-हरी मिर्च का पेस्ट", "1 छोटा चम्मच नमक", "1 छोटा चम्मच चीनी", "1 छोटा चम्मच ईनो या बेकिंग सोडा", "1 बड़ा चम्मच तेल और 1 छोटा चम्मच राई, छौंक के लिए"],
        steps: ["रागी का आटा, बेसन, दही, अदरक-हरी मिर्च पेस्ट, नमक, चीनी और पानी फेंटकर चिकना घोल बनाएँ।", "घोल को 10 मिनट रखें ताकि आटा तरल सोख ले।", "गोल स्टील की थाली या थाली में थोड़ा तेल लगाएँ और भाप के लिए बर्तन में पानी उबालें।", "भाप देने से ठीक पहले घोल में ईनो या बेकिंग सोडा डालकर धीरे से एक ही दिशा में चलाएँ ताकि हवा फँस जाए।", "घोल थाली में डालकर ढककर मध्यम आँच पर 15 से 18 मिनट भाप दें, जब तक सींक साफ न निकले।", "छोटे कड़ाही में तेल गरम करें, राई और करी पत्ते डालें और उन्हें चटकने दें।", "ढोकले को चौकोर टुकड़ों में काटें और ऊपर से गरम छौंक डालें।", "हरी चटनी के साथ गरम परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் ராகி மாவு", "1/2 கப் கடலை மாவு", "1/2 கப் கெட்டி தயிர்", "3/4 கப் தண்ணீர்", "1 டீஸ்பூன் இஞ்சி-பச்சை மிளகாய் விழுது", "1 டீஸ்பூன் உப்பு", "1 டீஸ்பூன் சர்க்கரை", "1 டீஸ்பூன் ஈனோ அல்லது பேக்கிங் சோடா", "1 டேபிள்ஸ்பூன் எண்ணெய் மற்றும் 1 டீஸ்பூன் கடுகு, தாளிக்க"],
        steps: ["ராகி மாவு, கடலை மாவு, தயிர், இஞ்சி-பச்சை மிளகாய் விழுது, உப்பு, சர்க்கரை, தண்ணீர் சேர்த்து மென்மையான கரைசலாக அடிக்கவும்.", "மாவு நீரை உறிஞ்ச கரைசலை 10 நிமிடம் வைக்கவும்.", "வட்ட ஸ்டீல் தட்டு அல்லது தாலியில் சிறிது எண்ணெய் தடவி, ஆவிக்காக கொதிக்கும் தண்ணீருடன் பாத்திரத்தை தயார் செய்யவும்.", "ஆவி கொடுப்பதற்கு சற்று முன் ஈனோ அல்லது சோடாவை கரைசலில் சேர்த்து, காற்று சிக்க ஒரே திசையில் மெதுவாக கிளறவும்.", "கரைசலை தட்டில் ஊற்றி மூடி மிதமான தீயில் 15 முதல் 18 நிமிடம் ஆவியில் வேகவிடவும், குச்சி சுத்தமாக வரும் வரை.", "சிறிய வாணலியில் எண்ணெய் சூடாக்கி, கடுகு, கறிவேப்பிலை சேர்த்து வெடிக்க விடவும்.", "தோக்ளாவை சதுர துண்டுகளாக வெட்டி, மேலே சூடான தாளிப்பை ஊற்றவும்.", "பச்சை சட்னியுடன் சூடாக பரிமாறவும்."],
      },
    },
    "finger-millet-48": {
      hi: {
        ingredients: ["3 बड़े चम्मच रागी (मडुआ) का आटा, भुना हुआ", "2 कप ठंडा पानी", "2 बड़े चम्मच गुड़ का पाउडर", "1/2 छोटा चम्मच भुने जीरे का पाउडर", "1 चुटकी काला नमक", "नींबू का रस निचोड़ा हुआ", "कुटी बर्फ ज़रूरत अनुसार", "पुदीने की कुछ पत्तियाँ"],
        steps: ["रागी के आटे को पैन में धीमी आँच पर 2 मिनट भूनें जब तक सोंधी खुशबू न आए।", "भुने आटे को ठंडा होने दें, फिर थोड़े ठंडे पानी के साथ बिना गुठली का चिकना पेस्ट बनाएँ।", "बचा ठंडा पानी और गुड़ पाउडर डालकर फेंटें जब तक गुड़ पूरी तरह घुल न जाए।", "स्वाद के लिए भुने जीरे का पाउडर और काला नमक मिलाएँ।", "नींबू का रस निचोड़कर एक बार फिर फेंटें।", "दो गिलासों में कुटी बर्फ भरें और ऊपर से शरबत डालें।", "हर गिलास को पुदीने की पत्तियों से सजाएँ।", "ठंडा-ठंडा तुरंत परोसें, जब तक पेय ताज़ा और ठंडा हो।"],
      },
      ta: {
        ingredients: ["3 டேபிள்ஸ்பூன் ராகி மாவு, வறுத்தது", "2 கப் குளிர்ந்த தண்ணீர்", "2 டேபிள்ஸ்பூன் வெல்லத் தூள்", "1/2 டீஸ்பூன் வறுத்த சீரகத் தூள்", "1 சிட்டிகை கருப்பு உப்பு", "எலுமிச்சை சாறு பிழிந்தது", "நொறுக்கிய ஐஸ் தேவைக்கேற்ப", "சில புதினா இலைகள்"],
        steps: ["ராகி மாவை பாத்திரத்தில் மெல்லிய தீயில் 2 நிமிடம் நட்டு வாசனை வரும் வரை வறுக்கவும்.", "வறுத்த மாவை ஆறவிட்டு, சில கரண்டி குளிர்ந்த தண்ணீருடன் கட்டியில்லாத மென்மையான விழுதாக கரைக்கவும்.", "மீதமுள்ள குளிர்ந்த தண்ணீர், வெல்லத் தூள் சேர்த்து, வெல்லம் முழுவதும் கரையும் வரை அடிக்கவும்.", "சுவைக்காக வறுத்த சீரகத் தூள், கருப்பு உப்பு சேர்த்து கலக்கவும்.", "எலுமிச்சை சாறு பிழிந்து, பானத்தை ஒரு முறை மீண்டும் அடிக்கவும்.", "இரண்டு டம்ளர்களில் நொறுக்கிய ஐஸ் நிரப்பி, மேல் சர்பத்தை ஊற்றவும்.", "ஒவ்வொரு டம்ளரையும் புதினா இலைகளால் அலங்கரிக்கவும்.", "பானம் குளிர்ச்சியாகவும் புதிதாகவும் இருக்கும் போதே உடனே குளிர வைத்து பரிமாறவும்."],
      },
    },
    "finger-millet-49": {
      hi: {
        ingredients: ["500 ग्राम मछली (सुरमई या पॉम्फ्रेट), स्टेक में कटी", "1/2 छोटा चम्मच हल्दी पाउडर", "1 छोटा चम्मच लाल मिर्च पाउडर", "1/2 छोटा चम्मच नमक", "2 बड़े चम्मच नारियल तेल", "1 प्याज़, कटा", "2 हरी मिर्च, चीरी हुई", "1 टमाटर, कटा", "1 छोटा चम्मच अदरक-लहसुन पेस्ट", "1 बड़ा चम्मच इमली का गूदा", "1 छोटा चम्मच मेथी दाना", "करी के लिए 1 कप पानी", "1 कप रागी का आटा, साइड के लिए"],
        steps: ["मछली के स्टेक पर हल्दी, लाल मिर्च और आधा नमक लगाकर 10 मिनट रखें।", "मिट्टी के बर्तन या भारी पैन में नारियल तेल गरम करें और मेथी दाना डालें जब तक वे थोड़े गहरे न हो जाएँ।", "कटा प्याज़ और हरी मिर्च डालकर सुनहरा होने तक भूनें।", "अदरक-लहसुन पेस्ट और टमाटर डालकर टमाटर नरम और गूदेदार होने तक पकाएँ।", "इमली के गूदे और बचे नमक के साथ 1 कप पानी डालकर उबाल आने दें।", "मछली के मसालेदार स्टेक डालें और धीमी आँच पर 8 से 10 मिनट बिना ज़्यादा हिलाए पकाएँ।", "इस बीच गुनगुने पानी से रागी का नरम आटा गूँधें और परोसने के लिए छोटे गोल बनाएँ।", "मछली करी को गरम रागी गोलों और एक कप भाप में पके चावल के साथ परोसें।"],
      },
      ta: {
        ingredients: ["500 கிராம் மீன் (வஞ்சிரம் அல்லது வவ்வால்), துண்டுகளாக", "1/2 டீஸ்பூன் மஞ்சள் தூள்", "1 டீஸ்பூன் மிளகாய்த் தூள்", "1/2 டீஸ்பூன் உப்பு", "2 டேபிள்ஸ்பூன் தேங்காய் எண்ணெய்", "1 வெங்காயம், நறுக்கியது", "2 பச்சை மிளகாய், கீறியது", "1 தக்காளி, நறுக்கியது", "1 டீஸ்பூன் இஞ்சி-பூண்டு விழுது", "1 டேபிள்ஸ்பூன் புளிக் கூழ்", "1 டீஸ்பூன் வெந்தயம்", "குழம்புக்கு 1 கப் தண்ணீர்", "1 கப் ராகி மாவு, பக்கத்துக்கு"],
        steps: ["மீன் துண்டுகளுக்கு மஞ்சள், மிளகாய்த் தூள், பாதி உப்பு தடவி 10 நிமிடம் வைக்கவும்.", "மண் பானை அல்லது கனமான வாணலியில் தேங்காய் எண்ணெயை சூடாக்கி, வெந்தயம் சற்று கருமையாகும் வரை சேர்க்கவும்.", "நறுக்கிய வெங்காயம், பச்சை மிளகாய் சேர்த்து பொன்னிறமாகும் வரை வதக்கவும்.", "இஞ்சி-பூண்டு விழுது, தக்காளி சேர்த்து தக்காளி மென்மையாகி குழையும் வரை வேகவிடவும்.", "புளிக் கூழ், மீதமுள்ள உப்புடன் 1 கப் தண்ணீர் ஊற்றி கொதிக்க விடவும்.", "ஊறிய மீன் துண்டுகளை சேர்த்து அதிகம் கிளறாமல் மெல்லிய தீயில் 8 முதல் 10 நிமிடம் வேகவிடவும்.", "இதற்கிடையில் வெதுவெதுப்பான தண்ணீருடன் ராகி மாவை மென்மையாக பிசைந்து, பரிமாற சிறு உருண்டைகளாக்கவும்.", "மீன் குழம்பை சூடான ராகி உருண்டைகள் மற்றும் ஒரு கப் ஆவியில் வெந்த சாதத்துடன் பரிமாறவும்."],
      },
    },
    "finger-millet-50": {
      hi: {
        ingredients: ["1 कप रागी (मडुआ) का आटा", "1/4 कप चावल का आटा", "1 कप पानी", "1/2 छोटा चम्मच नमक", "1 छोटा चम्मच घी", "1/2 कप कद्दूकस किया ताज़ा नारियल", "1/3 कप गुड़, कसा हुआ", "1/4 छोटा चम्मच इलायची पाउडर"],
        steps: ["भारी बर्तन में पानी, नमक और घी को तेज़ उबाल पर लाएँ।", "आँच धीमी करके रागी और चावल का आटा डालें और तेज़ी से चलाएँ जब तक आटा एक जुट न हो जाए।", "ढककर 5 मिनट रखें, फिर गुनगुने आटे को गूँधें जब तक वह चिकना और लचीला न हो जाए।", "भरावन के लिए नारियल, गुड़ और इलायची मिलाएँ और गुड़ को थोड़ा पिघलने दें।", "आटे की छोटी-छोटी लोइयाँ लेकर हर एक को कटोरी जैसा फैलाएँ और बीच में एक चम्मच भरावन रखें।", "किनारों को चुटकी से बंद करके कोने वाला छोटा गोल मोदक-सा आकार दें।", "कोझुकट्टै को चिकनाई लगी भाप की थाली में रखकर 12 से 15 मिनट भाप दें।", "गरम परोसें, चाहें तो ऊपर से थोड़ा घी लगाकर।"],
      },
      ta: {
        ingredients: ["1 கப் ராகி மாவு", "1/4 கப் அரிசி மாவு", "1 கப் தண்ணீர்", "1/2 டீஸ்பூன் உப்பு", "1 டீஸ்பூன் நெய்", "1/2 கப் துருவிய புதிய தேங்காய்", "1/3 கப் வெல்லம், துருவியது", "1/4 டீஸ்பூன் ஏலக்காய்த் தூள்"],
        steps: ["கனமான பாத்திரத்தில் தண்ணீர், உப்பு, நெய்யை பொங்கும் கொதிநிலைக்கு கொண்டு வரவும்.", "தீயைக் குறைத்து ராகி, அரிசி மாவுகளை சேர்த்து, மாவு ஒன்று சேரும் வரை விரைவாக கிளறவும்.", "மூடி 5 நிமிடம் வைத்து, பின் வெதுவெதுப்பான மாவை மென்மையாகவும் நெகிழ்வாகவும் வரும் வரை பிசையவும்.", "பூரணத்துக்கு தேங்காய், வெல்லம், ஏலக்காயை கலந்து, வெல்லம் லேசாக உருகும் வரை வைக்கவும்.", "சிறு மாவு உருண்டைகளை எடுத்து ஒவ்வொன்றையும் கிண்ணம் போல தட்டி, நடுவில் ஒரு கரண்டி பூரணம் வைக்கவும்.", "ஓரங்களை கிள்ளி மூடி, கூர்மையான மேல் பகுதியுடன் அழகான கொழுக்கட்டையாக வடிவமைக்கவும்.", "எண்ணெய் தடவிய ஆவித் தட்டில் கொழுக்கட்டைகளை அடுக்கி 12 முதல் 15 நிமிடம் ஆவியில் வேகவிடவும்.", "சூடாக பரிமாறவும், விரும்பினால் மேலே கொஞ்சம் நெய் தடவி."],
      },
    },
  },
  translations: {
    "finger-millet-46": {
      hi: { title: "रागी मुरुक्कू", description: "रागी और चावल के आटे से बने तिल और जीरे वाले कुरकुरे, घुमावदार नाश्ते, जिन्हें मुरुक्कू साँचे से दबाकर कुरकुरा होने तक तला जाता है।" },
      ta: { title: "ராகி முறுக்கு", description: "ராகி, அரிசி மாவில் எள், சீரகம் சேர்த்து செய்யப்படும் மொறுமொறுப்பான சுருள் வடிவ சிற்றுண்டி. முறுக்கு அச்சில் அழுத்தி பொரிக்கப்படுகிறது." },
    },
    "finger-millet-47": {
      hi: { title: "रागी ढोकला", description: "रागी के आटे और बेसन से दही, अदरक और हरी मिर्च के साथ बना भाप में पका नरम, स्पंजी नमकीन केक, जिस पर चटकती राई और करी पत्ते का छौंक लगता है।" },
      ta: { title: "ராகி தோக்ளா", description: "ராகி மாவு, கடலை மாவு, தயிர், இஞ்சி, பச்சை மிளகாயில் செய்யப்படும் ஆவியில் வெந்த மென்மையான, பஞ்சு போன்ற காரமான கேக். கடுகு, கறிவேப்பிலை தாளிப்புடன் பரிமாறப்படுகிறது." },
    },
    "finger-millet-48": {
      hi: { title: "रागी सत्तू शरबत", description: "भुने रागी के आटे को पानी, गुड़ और भुने जीरे के साथ मिलाकर बनाया गया ठंडक देने वाला पौष्टिक पेय, जिसे गर्म दोपहर में ठंडा करके परोसा जाता है।" },
      ta: { title: "ராகி சத்து சர்பத்", description: "வறுத்த ராகி மாவை தண்ணீர், வெல்லம், வறுத்த சீரகத்துடன் கலந்து செய்யப்படும் குளிர்ச்சியான சத்தான பானம். வெயில் நாளில் குளிர வைத்து பரிமாறப்படுகிறது." },
    },
    "finger-millet-49": {
      hi: { title: "रागी के साथ मछली करी", description: "इमली, नारियल और मसालों से बनी तीखी तटीय मछली करी, जिसके साथ गरम रागी गोले परोसे जाते हैं। प्रोटीन से भरपूर और पौष्टिक भोजन।" },
      ta: { title: "ராகி மீன் குழம்பு", description: "புளி, தேங்காய், மசாலாக்களில் செய்யப்பட்ட புளிப்பான கடலோர மீன் குழம்பு. சூடான ராகி உருண்டைகளுடன் பரிமாறப்படுகிறது. புரதம் நிறைந்த சத்தான உணவு." },
    },
    "finger-millet-50": {
      hi: { title: "रागी कोझुकट्टै", description: "रागी के आटे से बने भाप में पके गोल, मोदक-जैसे दाने, जिनमें कसे नारियल और गुड़ का भरावन होता है। तमिलनाडु का पारंपरिक त्योहारी प्रसाद।" },
      ta: { title: "ராகி கொழுக்கட்டை", description: "ராகி மாவில் தேங்காய், வெல்லம் பூரணத்துடன் ஆவியில் வேகவைத்த கொழுக்கட்டைகள். தமிழ்நாட்டின் பாரம்பரிய பண்டிகை நைவேத்தியம்." },
    },
  },
  plate: {
    "finger-millet-46": {
      kcal: 320, carbsG: 40, fibreG: 4, gi: 58, minerals: ["calcium", "iron", "magnesium"],
      raw: { kind: "raw", name: "Cucumber and onion salad", how: "Slice cucumber and onion into rounds, toss with lemon juice and a pinch of salt." },
      sides: [
        { kind: "cooked", name: "Vegetable kurma", how: "Simmer mixed vegetables in a coconut and onion gravy with cumin and turmeric until tender." },
        { kind: "cooked", name: "Beans poriyal", how: "Stir fry chopped beans with mustard seeds, grated coconut and curry leaves until tender." },
      ],
    },
    "finger-millet-47": {
      kcal: 220, carbsG: 28, fibreG: 5, gi: 56, minerals: ["calcium", "iron", "magnesium", "phosphorus"],
      raw: { kind: "raw", name: "Onion and tomato salad", how: "Slice onion and tomato, then season with lemon juice, black pepper and coriander." },
      sides: [
        { kind: "cooked", name: "Dal tadka", how: "Cook toor dal until soft, then pour over a tempering of cumin, garlic and dried red chilli." },
        { kind: "cooked", name: "Palak sabzi", how: "Saute chopped spinach with garlic, ginger and a little cumin until just wilted." },
      ],
    },
    "finger-millet-48": {
      kcal: 110, carbsG: 22, fibreG: 3, gi: 60, minerals: ["calcium", "iron", "potassium"],
      raw: { kind: "raw", name: "Cucumber sticks", how: "Cut cucumber into thin sticks and serve with a pinch of black salt." },
      sides: [
        { kind: "cooked", name: "Bhuna chana", how: "Dry roast chickpeas with cumin, chaat masala and a little onion until lightly charred." },
        { kind: "cooked", name: "Roasted makhana", how: "Dry roast fox nuts with a little ghee, black pepper and rock salt until crisp." },
      ],
    },
    "finger-millet-49": {
      kcal: 380, carbsG: 30, fibreG: 4, gi: 55, minerals: ["calcium", "iron", "phosphorus", "selenium"],
      raw: { kind: "raw", name: "Onion and cucumber salad", how: "Slice onion and cucumber thinly, then toss with lemon juice and a pinch of salt." },
      sides: [
        { kind: "cooked", name: "Vellarikka thoran", how: "Stir fry thinly sliced cucumber with coconut, mustard seeds and curry leaves until dry." },
        { kind: "cooked", name: "Cabbage poriyal", how: "Stir fry shredded cabbage with mustard seeds, urad dal and grated coconut until tender." },
      ],
    },
    "finger-millet-50": {
      kcal: 260, carbsG: 42, fibreG: 4, gi: 60, minerals: ["iron", "magnesium", "calcium", "potassium"],
      raw: { kind: "raw", name: "Carrot and cucumber sticks", how: "Cut carrot and cucumber into thin sticks and serve chilled with a pinch of salt." },
      sides: [
        { kind: "cooked", name: "Vegetable kootu", how: "Simmer chopped vegetables with toor dal and coconut paste, then temper with mustard and curry leaves." },
        { kind: "cooked", name: "Beetroot poriyal", how: "Stir fry diced beetroot with mustard seeds, curry leaves and grated coconut until tender." },
      ],
    },
  },
};
