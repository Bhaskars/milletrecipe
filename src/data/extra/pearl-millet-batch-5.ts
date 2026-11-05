import type { Recipe } from "@/types/recipe";
import type { LineContent } from "@/data/i18n-content/sorghum";
import type { PlateInfo } from "@/types/plate";

/** pearl-millet recipes pearl-millet-36 to pearl-millet-40. */
export const PEARL_MILLET_BATCH_5: {
  recipes: Recipe[];
  content: Record<string, { hi: LineContent; ta: LineContent }>;
  translations: Record<string, { hi: { title: string; description: string }; ta: { title: string; description: string } }>;
  plate: Record<string, PlateInfo>;
} = {
  recipes: [
    {
      id: "pearl-millet-36",
      title: "Bajra Thalipeeth",
      milletId: "pearl-millet",
      region: "West Indian",
      diet: "Vegetarian",
      course: "Breakfast",
      description: "A savoury, hand-patted multigrain flatbread from Maharashtra, made with bajra, gram flour and rice flour and cooked on a griddle with a little oil.",
      servings: 4,
      prepTimeMinutes: 20,
      cookTimeMinutes: 25,
      difficulty: "Easy",
      ingredients: [
        "1 cup bajra (pearl millet) flour",
        "1/4 cup besan (gram flour)",
        "1/4 cup rice flour",
        "1 small onion, finely chopped",
        "1 green chilli, finely chopped",
        "1 tsp cumin seeds, crushed",
        "1/2 tsp red chilli powder",
        "1/4 tsp turmeric powder",
        "2 tbsp coriander leaves, chopped",
        "1 tsp salt",
        "Water as needed",
        "2 tbsp oil or ghee for cooking",
      ],
      steps: [
        "Mix the bajra flour, besan, rice flour, salt, turmeric, red chilli powder and crushed cumin in a wide bowl.",
        "Add the chopped onion, green chilli and coriander leaves and mix them through the flour with your fingers.",
        "Pour in warm water a little at a time and knead to a soft dough that holds its shape without sticking to your hands.",
        "Divide the dough into 4 equal balls and rest them for 5 minutes so the flours absorb the water fully.",
        "Grease a clean sheet of plastic or a banana leaf with a few drops of oil and place one ball on it.",
        "Pat the dough outwards with damp fingers into a round about 5 mm thick, and poke a small hole in the centre.",
        "Slide the thalipeeth onto a hot tawa on medium heat, drizzle a teaspoon of oil around the edges, and cook until the base is golden.",
        "Flip it, cook the other side until spotted and crisp, and serve hot with white butter or a spoon of curd.",
      ],
    },
    {
      id: "pearl-millet-37",
      title: "Bajra Laapsi",
      milletId: "pearl-millet",
      region: "North Indian",
      diet: "Vegetarian",
      course: "Dessert",
      description: "A rich, slow-roasted sweet porridge of coarse bajra flour cooked in ghee and jaggery, with cardamom and nuts, traditionally served in winter.",
      servings: 4,
      prepTimeMinutes: 10,
      cookTimeMinutes: 35,
      difficulty: "Easy",
      ingredients: [
        "1 cup coarse bajra (pearl millet) flour",
        "3 tbsp ghee",
        "3 cups water",
        "3/4 cup jaggery, grated",
        "1/2 tsp cardamom powder",
        "2 tbsp chopped almonds",
        "2 tbsp chopped pistachios",
        "A pinch of saffron soaked in 1 tbsp warm milk",
      ],
      steps: [
        "Heat the ghee in a heavy pan on low to medium heat and add the coarse bajra flour.",
        "Roast the flour for 8 to 10 minutes, stirring constantly, until it turns a deep golden colour and smells nutty.",
        "Bring the water to a boil in a separate pot and keep it hot.",
        "Pour the hot water slowly into the roasted flour while whisking, so that no lumps form.",
        "Cook on low heat for 10 minutes, stirring often, until the porridge thickens and the flour is fully cooked.",
        "Add the grated jaggery and stir until it melts completely and the mixture turns glossy.",
        "Stir in the cardamom powder and saffron milk, then cook for 2 minutes more.",
        "Garnish with the almonds and pistachios and serve warm in small bowls.",
      ],
    },
    {
      id: "pearl-millet-38",
      title: "Kambu Vadai",
      milletId: "pearl-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Snack",
      description: "Crisp, savoury fritters of pearl millet and urad dal flour with onion, curry leaves and cumin, a teatime snack from Tamil Nadu.",
      servings: 4,
      prepTimeMinutes: 25,
      cookTimeMinutes: 20,
      difficulty: "Easy",
      ingredients: [
        "1 cup kambu (pearl millet) flour",
        "1/4 cup urad dal flour",
        "1 small onion, finely chopped",
        "2 green chillies, finely chopped",
        "1 tsp ginger, grated",
        "8 curry leaves, chopped",
        "1 tsp cumin seeds",
        "1/2 cup coriander leaves, chopped",
        "1 tsp salt",
        "Water as needed",
        "1 cup oil for deep frying",
      ],
      steps: [
        "Combine the kambu flour, urad dal flour, salt and cumin seeds in a large mixing bowl.",
        "Add the onion, green chillies, grated ginger, curry leaves and coriander leaves and mix well.",
        "Add water a spoonful at a time and knead into a stiff dough that can be shaped without cracking.",
        "Wet your palm, take a small ball of dough, and pat it flat into a round about 1 cm thick with a hole in the centre.",
        "Heat the oil in a deep kadai on medium heat until a pinch of dough rises steadily to the surface.",
        "Slide 2 or 3 vadais into the oil at a time and fry for 2 to 3 minutes per side until golden and crisp.",
        "Drain the vadais on paper towels and let them cool for a minute.",
        "Serve hot with coconut chutney or tomato chutney as an evening snack.",
      ],
    },
    {
      id: "pearl-millet-39",
      title: "Bajra Lauki Muthia",
      milletId: "pearl-millet",
      region: "West Indian",
      diet: "Vegetarian",
      course: "Snack",
      description: "Steamed and tempered dumplings from Gujarat made with bajra flour, fresh fenugreek leaves, besan and grated bottle gourd, with a sweet and sour finish.",
      servings: 4,
      prepTimeMinutes: 25,
      cookTimeMinutes: 25,
      difficulty: "Medium",
      ingredients: [
        "1 cup bajra (pearl millet) flour",
        "1/2 cup fresh methi (fenugreek) leaves, finely chopped",
        "1/4 cup besan (gram flour)",
        "1/2 cup grated bottle gourd (lauki)",
        "1 tsp ginger and green chilli paste",
        "1/2 tsp turmeric powder",
        "1 tsp sugar",
        "1 tbsp lemon juice",
        "1 tsp salt",
        "Water as needed",
        "1 tbsp oil for tempering",
        "1 tsp mustard seeds and 1 tsp sesame seeds for tempering",
      ],
      steps: [
        "Mix the bajra flour, besan, chopped methi leaves, grated bottle gourd, ginger chilli paste, turmeric, sugar and salt in a bowl.",
        "Add lemon juice and enough water to bring the mixture to a soft, pliable dough.",
        "Shape the dough into 3 or 4 long logs and place them on a greased steamer plate.",
        "Steam the logs over boiling water for 15 to 18 minutes until firm and cooked through when a skewer comes out clean.",
        "Let the steamed logs cool for 5 minutes, then cut them into thick rounds or slices.",
        "Heat the oil in a small pan and add the mustard and sesame seeds until they splutter.",
        "Fry the muthia slices in the tempering on medium heat for 2 minutes per side until lightly golden at the edges.",
        "Serve hot with green chutney or a cup of masala chai.",
      ],
    },
    {
      id: "pearl-millet-40",
      title: "Bajra Roti with Egg Bhurji",
      milletId: "pearl-millet",
      region: "North Indian",
      diet: "Non-Vegetarian",
      course: "Main Course",
      description: "Soft bajra rotis served with a quick, spiced scramble of eggs, onion and tomato, a filling and high-protein everyday meal.",
      servings: 2,
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      difficulty: "Medium",
      ingredients: [
        "1 cup bajra (pearl millet) flour",
        "Warm water as needed",
        "1/2 tsp salt",
        "2 eggs, beaten",
        "1 small onion, finely chopped",
        "1 green chilli, finely chopped",
        "1 small tomato, finely chopped",
        "1/4 tsp turmeric powder",
        "1/2 tsp red chilli powder",
        "1 tbsp oil for the bhurji",
        "1 tbsp ghee for brushing the rotis",
      ],
      steps: [
        "Knead the bajra flour with salt and warm water into a soft, pliable dough and rest it for 10 minutes.",
        "Divide the dough into 6 balls and flatten each one between your palms into a thin round roti.",
        "Cook the rotis one at a time on a hot tawa, flipping until both sides have brown spots, and brush each with a little ghee.",
        "Heat the oil in a pan on medium heat and fry the chopped onion and green chilli until soft and translucent.",
        "Add the tomato, turmeric and red chilli powder and cook until the tomato breaks down into a thick paste.",
        "Pour in the beaten eggs and stir gently on low heat until they set into soft, moist curds.",
        "Serve the egg bhurji hot alongside the warm bajra rotis.",
        "Fold each roti around a spoonful of bhurji to eat, or serve them separately on the same plate.",
      ],
    },
  ],
  content: {
    "pearl-millet-36": {
      hi: {
        ingredients: ["1 कप बाजरे का आटा", "1/4 कप बेसन", "1/4 कप चावल का आटा", "1 छोटा प्याज़, बारीक कटा", "1 हरी मिर्च, बारीक कटी", "1 छोटा चम्मच जीरा, कुटा हुआ", "1/2 छोटा चम्मच लाल मिर्च पाउडर", "1/4 छोटा चम्मच हल्दी पाउडर", "2 बड़े चम्मच हरा धनिया, कटा हुआ", "1 छोटा चम्मच नमक", "ज़रूरत अनुसार पानी", "पकाने के लिए 2 बड़े चम्मच तेल या घी"],
        steps: ["एक चौड़े बर्तन में बाजरे का आटा, बेसन, चावल का आटा, नमक, हल्दी, लाल मिर्च पाउडर और कुटा जीरा मिलाएँ।", "कटा प्याज़, हरी मिर्च और धनिया डालकर उँगलियों से आटे में अच्छी तरह मिलाएँ।", "थोड़ा-थोड़ा गुनगुना पानी डालते हुए नरम आटा गूँधें, जो हाथ से चिपके नहीं।", "आटे को 4 बराबर गोलों में बाँटें और आटा पानी सोखे, इसके लिए 5 मिनट रखें।", "प्लास्टिक की शीट या केले के पत्ते पर कुछ बूँदें तेल लगाएँ और एक गोला रखें।", "गीली उँगलियों से गोले को बाहर की ओर थपथपाकर लगभग 5 मिमी मोटा गोल बनाएँ और बीच में छोटा छेद करें।", "गरम तवे पर मध्यम आँच पर थालीपीठ डालें, किनारों पर एक चम्मच तेल डालें और नीचे का भाग सुनहरा होने तक सेंकें।", "पलटकर दूसरी ओर भी कुरकुरा होने तक सेंकें और सफेद मक्खन या दही के साथ गरम परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் கம்பு மாவு", "1/4 கப் கடலை மாவு", "1/4 கப் அரிசி மாவு", "1 சிறிய வெங்காயம், பொடியாக நறுக்கியது", "1 பச்சை மிளகாய், பொடியாக நறுக்கியது", "1 டீஸ்பூன் சீரகம், இடித்தது", "1/2 டீஸ்பூன் மிளகாய்த் தூள்", "1/4 டீஸ்பூன் மஞ்சள் தூள்", "2 டேபிள்ஸ்பூன் கொத்தமல்லி இலை, நறுக்கியது", "1 டீஸ்பூன் உப்பு", "தேவையான அளவு தண்ணீர்", "சுடுவதற்கு 2 டேபிள்ஸ்பூன் எண்ணெய் அல்லது நெய்"],
        steps: ["ஒரு அகன்ற பாத்திரத்தில் கம்பு மாவு, கடலை மாவு, அரிசி மாவு, உப்பு, மஞ்சள், மிளகாய்த் தூள், இடித்த சீரகம் சேர்த்து கலக்கவும்.", "நறுக்கிய வெங்காயம், பச்சை மிளகாய், கொத்தமல்லி சேர்த்து விரல்களால் மாவில் நன்கு கலக்கவும்.", "வெதுவெதுப்பான தண்ணீரை சிறிது சிறிதாக ஊற்றி, கைகளில் ஒட்டாத மிருதுவான மாவாக பிசையவும்.", "மாவை 4 சம உருண்டைகளாக பிரித்து, மாவு தண்ணீரை முழுவதும் உறிஞ்ச 5 நிமிடம் வைக்கவும்.", "பிளாஸ்டிக் ஷீட் அல்லது வாழையிலையில் சில சொட்டு எண்ணெய் தடவி ஒரு உருண்டையை வைக்கவும்.", "ஈரக் கைவிரல்களால் உருண்டையை வெளிப்புறமாக தட்டி சுமார் 5 மி.மீ. தடிமனான வட்டமாக்கி, நடுவில் சிறிய துளையிடவும்.", "சூடான தோசைக்கல்லில் மிதமான தீயில் தாலிபீட்டை போட்டு, ஓரங்களில் ஒரு டீஸ்பூன் எண்ணெய் விட்டு அடிப்பகுதி பொன்னிறமாகும் வரை வேகவிடவும்.", "திருப்பி மறுபக்கமும் மொறுமொறுப்பாக வேகவிட்டு, வெண்ணெய் அல்லது தயிருடன் சூடாக பரிமாறவும்."],
      },
    },
    "pearl-millet-37": {
      hi: {
        ingredients: ["1 कप मोटा बाजरे का आटा", "3 बड़े चम्मच घी", "3 कप पानी", "3/4 कप गुड़, कसा हुआ", "1/2 छोटा चम्मच इलायची पाउडर", "2 बड़े चम्मच कटे बादाम", "2 बड़े चम्मच कटे पिस्ता", "1 बड़ा चम्मच गुनगुने दूध में भीगी केसर की एक चुटकी"],
        steps: ["भारी पेंदी के बर्तन में घी को धीमी से मध्यम आँच पर गरम करें और उसमें मोटा बाजरे का आटा डालें।", "लगातार चलाते हुए आटे को 8 से 10 मिनट भूनें, जब तक रंग गहरा सुनहरा न हो जाए और सोंधी खुशबू न आने लगे।", "एक अलग बर्तन में पानी उबालें और उसे गरम रखें।", "फेंटते हुए गरम पानी को भुने आटे में धीरे-धीरे डालें, ताकि गुठलियाँ न बनें।", "धीमी आँच पर 10 मिनट चलाते हुए पकाएँ, जब तक लापसी गाढ़ी होकर आटा पूरी तरह पक न जाए।", "कसा गुड़ डालकर चलाएँ, जब तक वह पूरी तरह घुल न जाए और मिश्रण चमकदार न लगने लगे।", "इलायची पाउडर और केसर वाला दूध मिलाकर 2 मिनट और पकाएँ।", "बादाम और पिस्ते से सजाकर छोटे कटोरों में गुनगुना परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் கரகரப்பான கம்பு மாவு", "3 டேபிள்ஸ்பூன் நெய்", "3 கப் தண்ணீர்", "3/4 கப் வெல்லம், துருவியது", "1/2 டீஸ்பூன் ஏலக்காய்த் தூள்", "2 டேபிள்ஸ்பூன் நறுக்கிய பாதாம்", "2 டேபிள்ஸ்பூன் நறுக்கிய பிஸ்தா", "1 டேபிள்ஸ்பூன் வெதுவெதுப்பான பாலில் ஊறிய குங்குமப்பூ ஒரு சிட்டிகை"],
        steps: ["கனமான பாத்திரத்தில் நெய்யை மிதமான-மெல்லிய தீயில் சூடாக்கி, கரகரப்பான கம்பு மாவைச் சேர்க்கவும்.", "தொடர்ந்து கிளறியபடி 8 முதல் 10 நிமிடம் வறுக்கவும், அடர் பொன்னிறமாகி வாசனை வரும் வரை.", "தனி பாத்திரத்தில் தண்ணீரை கொதிக்க வைத்து சூடாக வைக்கவும்.", "கட்டி சேராமல் இருக்க, அடித்துக் கொண்டே சூடான தண்ணீரை வறுத்த மாவில் மெல்லிய ஓட்டமாக ஊற்றவும்.", "மிதமான தீயில் 10 நிமிடம் கிளறி, கூழ் கெட்டியாகி மாவு முழுவதும் வேகும் வரை சமைக்கவும்.", "துருவிய வெல்லத்தை சேர்த்து, முழுவதும் கரைந்து பளபளப்பாகும் வரை கிளறவும்.", "ஏலக்காய்த் தூள், குங்குமப்பூ பாலை சேர்த்து மேலும் 2 நிமிடம் வேகவிடவும்.", "பாதாம், பிஸ்தாவால் அலங்கரித்து சிறிய கிண்ணங்களில் வெதுவெதுப்பாக பரிமாறவும்."],
      },
    },
    "pearl-millet-38": {
      hi: {
        ingredients: ["1 कप कंबु (बाजरा) का आटा", "1/4 कप उड़द दाल का आटा", "1 छोटा प्याज़, बारीक कटा", "2 हरी मिर्च, बारीक कटी", "1 छोटा चम्मच अदरक, कसा हुआ", "8 करी पत्ते, कटे हुए", "1 छोटा चम्मच जीरा", "1/2 कप हरा धनिया, कटा हुआ", "1 छोटा चम्मच नमक", "ज़रूरत अनुसार पानी", "तलने के लिए 1 कप तेल"],
        steps: ["एक बड़े बर्तन में कंबु का आटा, उड़द दाल का आटा, नमक और जीरा मिलाएँ।", "प्याज़, हरी मिर्च, कसी अदरक, करी पत्ते और धनिया डालकर अच्छी तरह मिलाएँ।", "थोड़ा-थोड़ा पानी डालकर कड़ा आटा गूँधें जिससे वड़े बिना फटे बन सकें।", "गीली हथेली पर आटे की एक छोटी गोली लेकर बीच में छेद वाला लगभग 1 सेमी मोटा गोल चपटा करें।", "कड़ाही में तेल मध्यम आँच पर गरम करें जब तक आटे की एक बूँद धीरे-धीरे ऊपर न आ जाए।", "एक बार में 2 या 3 वड़े तेल में डालें और हर तरफ 2 से 3 मिनट सुनहरा और कुरकुरा होने तक तलें।", "वड़े निकालकर टिश्यू पेपर पर रखें और एक मिनट ठंडा होने दें।", "शाम के नाश्ते में नारियल या टमाटर की चटनी के साथ गरम परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் கம்பு மாவு", "1/4 கப் உளுத்தம் பருப்பு மாவு", "1 சிறிய வெங்காயம், பொடியாக நறுக்கியது", "2 பச்சை மிளகாய், பொடியாக நறுக்கியது", "1 டீஸ்பூன் இஞ்சி, துருவியது", "8 கறிவேப்பிலை, நறுக்கியது", "1 டீஸ்பூன் சீரகம்", "1/2 கப் கொத்தமல்லி இலை, நறுக்கியது", "1 டீஸ்பூன் உப்பு", "தேவையான அளவு தண்ணீர்", "பொரிக்க 1 கப் எண்ணெய்"],
        steps: ["ஒரு பெரிய பாத்திரத்தில் கம்பு மாவு, உளுத்தம் பருப்பு மாவு, உப்பு, சீரகம் சேர்த்து கலக்கவும்.", "வெங்காயம், பச்சை மிளகாய், துருவிய இஞ்சி, கறிவேப்பிலை, கொத்தமல்லி சேர்த்து நன்கு கலக்கவும்.", "சிறிது சிறிதாக தண்ணீர் சேர்த்து வடை வெடிக்காத அளவுக்கு கெட்டியான மாவாக பிசையவும்.", "ஈரக் கையில் ஒரு சிறிய உருண்டை எடுத்து, நடுவில் துளையுடன் சுமார் 1 செ.மீ. தடிமனான வட்டமாக தட்டவும்.", "வாணலியில் எண்ணெயை மிதமான தீயில் சூடாக்கவும், மாவு ஒரு துண்டு போட்டால் மெதுவாக மேலே வரும் பதத்தில்.", "ஒரு முறைக்கு 2 அல்லது 3 வடைகளை எண்ணெயில் விட்டு, ஒவ்வொரு பக்கமும் 2 முதல் 3 நிமிடம் பொன்னிறமாகவும் மொறுமொறுப்பாகவும் பொரிக்கவும்.", "வடைகளை வடிகட்டி டிஷ்யூ தாளில் வைத்து ஒரு நிமிடம் ஆறவிடவும்.", "மாலை சிற்றுண்டியாக தேங்காய் அல்லது தக்காளி சட்னியுடன் சூடாக பரிமாறவும்."],
      },
    },
    "pearl-millet-39": {
      hi: {
        ingredients: ["1 कप बाजरे का आटा", "1/2 कप ताज़ी मेथी के पत्ते, बारीक कटे", "1/4 कप बेसन", "1/2 कप लौकी, कसी हुई", "1 छोटा चम्मच अदरक-हरी मिर्च का पेस्ट", "1/2 छोटा चम्मच हल्दी पाउडर", "1 छोटा चम्मच चीनी", "1 बड़ा चम्मच नींबू का रस", "1 छोटा चम्मच नमक", "ज़रूरत अनुसार पानी", "छौंक के लिए 1 बड़ा चम्मच तेल", "छौंक के लिए 1 छोटा चम्मच राई और 1 छोटा चम्मच तिल"],
        steps: ["बाजरे का आटा, बेसन, कटी मेथी, कसी लौकी, अदरक-हरी मिर्च पेस्ट, हल्दी, चीनी और नमक एक बर्तन में मिलाएँ।", "नींबू का रस और ज़रूरत भर पानी डालकर नरम, लचीला आटा गूँधें।", "आटे को 3 या 4 लंबे रोल बनाकर चिकनाई लगी भाप की थाली में रखें।", "उबलते पानी के ऊपर 15 से 18 मिनट भाप में पकाएँ, जब तक सींक डालने पर साफ न निकले।", "भाप वाले रोल 5 मिनट ठंडे होने दें, फिर मोटे गोल टुकड़ों में काटें।", "छोटी कड़ाही में तेल गरम करें और राई व तिल डालें जब तक वे चटकने न लगें।", "मुठिया के टुकड़े छौंक में मध्यम आँच पर हर तरफ 2 मिनट हल्के सुनहरे होने तक भूनें।", "गरम-गरम हरी चटनी या एक कप मसाला चाय के साथ परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் கம்பு மாவு", "1/2 கப் புதிய வெந்தயக் கீரை, பொடியாக நறுக்கியது", "1/4 கப் கடலை மாவு", "1/2 கப் சுரைக்காய், துருவியது", "1 டீஸ்பூன் இஞ்சி-பச்சை மிளகாய் விழுது", "1/2 டீஸ்பூன் மஞ்சள் தூள்", "1 டீஸ்பூன் சர்க்கரை", "1 டேபிள்ஸ்பூன் எலுமிச்சை சாறு", "1 டீஸ்பூன் உப்பு", "தேவையான அளவு தண்ணீர்", "தாளிக்க 1 டேபிள்ஸ்பூன் எண்ணெய்", "தாளிக்க 1 டீஸ்பூன் கடுகு, 1 டீஸ்பூன் எள்"],
        steps: ["கம்பு மாவு, கடலை மாவு, நறுக்கிய வெந்தயக் கீரை, துருவிய சுரைக்காய், இஞ்சி-பச்சை மிளகாய் விழுது, மஞ்சள், சர்க்கரை, உப்பு ஒரு பாத்திரத்தில் சேர்க்கவும்.", "எலுமிச்சை சாறும் தேவையான தண்ணீரும் சேர்த்து மிருதுவான, நெகிழ்வான மாவாக பிசையவும்.", "மாவை 3 அல்லது 4 நீளமான உருளைகளாக்கி, எண்ணெய் தடவிய ஆவித் தட்டில் வைக்கவும்.", "கொதிக்கும் தண்ணீர் மேல் 15 முதல் 18 நிமிடம் ஆவியில் வேகவிடவும், குச்சி செருகினால் சுத்தமாக வரும் வரை.", "ஆவியில் வெந்த உருளைகளை 5 நிமிடம் ஆறவிட்டு, தடித்த வட்ட துண்டுகளாக வெட்டவும்.", "சிறிய வாணலியில் எண்ணெய் சூடாக்கி, கடுகு, எள் வெடிக்கும் வரை தாளிக்கவும்.", "முத்தியா துண்டுகளை தாளிப்பில் மிதமான தீயில் ஒவ்வொரு பக்கமும் 2 நிமிடம் ஓரங்கள் லேசாக பொன்னிறமாகும் வரை வறுக்கவும்.", "சூடாக பச்சை சட்னி அல்லது ஒரு கப் மசாலா டீயுடன் பரிமாறவும்."],
      },
    },
    "pearl-millet-40": {
      hi: {
        ingredients: ["1 कप बाजरे का आटा", "ज़रूरत अनुसार गुनगुना पानी", "1/2 छोटा चम्मच नमक", "2 अंडे, फेंटे हुए", "1 छोटा प्याज़, बारीक कटा", "1 हरी मिर्च, बारीक कटी", "1 छोटा टमाटर, बारीक कटा", "1/4 छोटा चम्मच हल्दी पाउडर", "1/2 छोटा चम्मच लाल मिर्च पाउडर", "भुर्जी के लिए 1 बड़ा चम्मच तेल", "रोटी पर लगाने के लिए 1 बड़ा चम्मच घी"],
        steps: ["बाजरे के आटे को नमक और गुनगुने पानी के साथ नरम, लचीला गूँधें और 10 मिनट ढककर रखें।", "आटे को 6 गोलों में बाँटें और हर गोले को हथेलियों के बीच पतली गोल रोटी बनाएँ।", "गरम तवे पर रोटियाँ एक-एक करके सेंकें, दोनों तरफ भूरे धब्बे आने तक पलटते रहें, और हर रोटी पर थोड़ा घी लगाएँ।", "कड़ाही में तेल मध्यम आँच पर गरम करके कटे प्याज़ और हरी मिर्च को नरम होने तक भूनें।", "टमाटर, हल्दी और लाल मिर्च पाउडर डालकर टमाटर गाढ़ा पेस्ट बनने तक पकाएँ।", "फेंटे अंडे डालकर धीमी आँच पर हल्के से चलाएँ, जब तक वे नरम और नम भुर्जी जैसे न हो जाएँ।", "गरम बाजरे की रोटियों के साथ अंडा भुर्जी तुरंत परोसें।", "हर रोटी में एक चम्मच भुर्जी लपेटकर खाएँ, या दोनों को एक ही प्लेट में अलग-अलग परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் கம்பு மாவு", "தேவையான அளவு வெதுவெதுப்பான தண்ணீர்", "1/2 டீஸ்பூன் உப்பு", "2 முட்டை, அடித்தது", "1 சிறிய வெங்காயம், பொடியாக நறுக்கியது", "1 பச்சை மிளகாய், பொடியாக நறுக்கியது", "1 சிறிய தக்காளி, பொடியாக நறுக்கியது", "1/4 டீஸ்பூன் மஞ்சள் தூள்", "1/2 டீஸ்பூன் மிளகாய்த் தூள்", "பொரியலுக்கு 1 டேபிள்ஸ்பூன் எண்ணெய்", "ரொட்டியில் தடவ 1 டேபிள்ஸ்பூன் நெய்"],
        steps: ["கம்பு மாவை உப்பு, வெதுவெதுப்பான தண்ணீருடன் மிருதுவான, நெகிழ்வான மாவாக பிசைந்து 10 நிமிடம் மூடி வைக்கவும்.", "மாவை 6 உருண்டைகளாக பிரித்து, ஒவ்வொன்றையும் உள்ளங்கைகளுக்கு நடுவே மெல்லிய வட்ட ரொட்டியாக தட்டவும்.", "சூடான தோசைக்கல்லில் ரொட்டிகளை ஒவ்வொன்றாக சுட்டு, இருபக்கமும் பழுப்புப் புள்ளிகள் வரும் வரை புரட்டி, ஒவ்வொன்றிலும் கொஞ்சம் நெய் தடவவும்.", "வாணலியில் எண்ணெயை மிதமான தீயில் சூடாக்கி, நறுக்கிய வெங்காயம், பச்சை மிளகாயை மென்மையாகும் வரை வதக்கவும்.", "தக்காளி, மஞ்சள், மிளகாய்த் தூள் சேர்த்து, தக்காளி கெட்டியான விழுதாகும் வரை வேகவிடவும்.", "அடித்த முட்டையை ஊற்றி மெல்லிய தீயில் மெதுவாக கிளறவும், மென்மையான ஈரமான பொரியல் பதத்துக்கு வரும் வரை.", "சூடான கம்பு ரொட்டிகளுடன் முட்டை பொரியலை உடனே பரிமாறவும்.", "ஒவ்வொரு ரொட்டியிலும் ஒரு கரண்டி பொரியலை சுற்றி சாப்பிடலாம், அல்லது தனித்தனியாக ஒரே தட்டில் பரிமாறலாம்."],
      },
    },
  },
  translations: {
    "pearl-millet-36": {
      hi: { title: "बाजरा थालीपीठ", description: "महाराष्ट्र का मसालेदार हाथ से थपथपाया गया बहु-अनाज फ्लैटब्रेड, जो बाजरा, बेसन और चावल के आटे से बनता है और तवे पर थोड़े तेल में सेंका जाता है।" },
      ta: { title: "கம்பு தாலிபீத்", description: "மகாராஷ்டிராவின் சுவையான கையால் தட்டிய பல தானிய ரொட்டி. கம்பு, கடலை மாவு, அரிசி மாவில் செய்து தோசைக்கல்லில் சிறிது எண்ணெயில் சுடப்படுகிறது." },
    },
    "pearl-millet-37": {
      hi: { title: "बाजरा लापसी", description: "मोटे बाजरे के आटे को घी में धीमी आँच पर भूनकर गुड़ और इलायची के साथ बनाई गई गाढ़ी मीठी लापसी, जिसमें मेवे डाले जाते हैं और सर्दियों में परोसी जाती है।" },
      ta: { title: "கம்பு லாப்சி", description: "கரகரப்பான கம்பு மாவை நெய்யில் மெதுவாக வறுத்து, வெல்லம் மற்றும் ஏலக்காயுடன் செய்யப்படும் இனிப்புக் கூழ். குளிர்காலத்தில் பரிமாறப்படுகிறது." },
    },
    "pearl-millet-38": {
      hi: { title: "कंबु वड़ा", description: "कंबु और उड़द दाल के आटे से बने कुरकुरे मसालेदार वड़े, जिनमें प्याज़, करी पत्ते और जीरा होता है। तमिलनाडु का एक शाम का नाश्ता।" },
      ta: { title: "கம்பு வடை", description: "கம்பு மற்றும் உளுத்தம் பருப்பு மாவில் வெங்காயம், கறிவேப்பிலை, சீரகம் சேர்த்து செய்யப்படும் மொறுமொறுப்பான காரமான வடை. தமிழ்நாட்டின் மாலை சிற்றுண்டி." },
    },
    "pearl-millet-39": {
      hi: { title: "बाजरा मेथी मुठिया", description: "गुजरात की भाप में पकाई और छौंक लगी मुठिया, जो बाजरे के आटे, ताज़ी मेथी, बेसन और कसी लौकी से बनती है और खट्टा-मीठा स्वाद देती है।" },
      ta: { title: "கம்பு வெந்தய முத்தியா", description: "குஜராத்தின் ஆவியில் வேகவைத்து தாளித்த முத்தியா. கம்பு மாவு, புதிய வெந்தயக் கீரை, கடலை மாவு, துருவிய சுரைக்காயில் செய்யப்பட்டு இனிப்பும் புளிப்பும் சேர்ந்த சுவை." },
    },
    "pearl-millet-40": {
      hi: { title: "बाजरा रोटी के साथ अंडा भुर्जी", description: "नरम बाजरा रोटियों के साथ अंडे, प्याज़ और टमाटर की मसालेदार भुर्जी, जो भरपेट और प्रोटीन से भरपूर रोज़ का खाना है।" },
      ta: { title: "கம்பு ரொட்டியுடன் முட்டை பொரியல்", description: "மென்மையான கம்பு ரொட்டிகளுடன் முட்டை, வெங்காயம், தக்காளியில் செய்த காரமான பொரியல். வயிறு நிறையும், புரதம் நிறைந்த எளிய உணவு." },
    },
  },
  plate: {
    "pearl-millet-36": {
      kcal: 230, carbsG: 34, fibreG: 6, gi: 58, minerals: ["magnesium", "iron", "phosphorus"],
      raw: { kind: "raw", name: "Cucumber and onion salad", how: "Slice cucumber and onion into rounds, toss with lemon juice, a pinch of salt and chilli powder." },
      sides: [
        { kind: "cooked", name: "Methi bhaji", how: "Saute chopped fenugreek leaves with garlic, onion and a little turmeric until just wilted." },
        { kind: "cooked", name: "Bhindi fry", how: "Shallow fry sliced okra with cumin, turmeric and a little amchur until crisp at the edges." },
      ],
    },
    "pearl-millet-37": {
      kcal: 290, carbsG: 48, fibreG: 5, gi: 65, minerals: ["magnesium", "iron", "potassium"],
      raw: { kind: "raw", name: "Carrot and cucumber sticks", how: "Cut carrot and cucumber into thin sticks and serve chilled with a pinch of black salt." },
      sides: [
        { kind: "cooked", name: "Palak paneer", how: "Blend cooked spinach and simmer with paneer cubes, ginger, garlic and a little cream." },
        { kind: "cooked", name: "Lauki sabzi", how: "Cook bottle gourd cubes with cumin, tomato and turmeric until soft and lightly dry." },
      ],
    },
    "pearl-millet-38": {
      kcal: 210, carbsG: 28, fibreG: 5, gi: 60, minerals: ["magnesium", "iron", "zinc"],
      raw: { kind: "raw", name: "Tomato and onion salad", how: "Dice tomato and red onion, season with lemon juice, black pepper and chopped coriander." },
      sides: [
        { kind: "cooked", name: "Sambar", how: "Simmer toor dal with tamarind, vegetables and sambar powder, then temper with mustard and curry leaves." },
        { kind: "cooked", name: "Beans poriyal", how: "Stir fry chopped beans with mustard seeds, grated coconut and curry leaves until tender." },
      ],
    },
    "pearl-millet-39": {
      kcal: 200, carbsG: 27, fibreG: 6, gi: 55, minerals: ["magnesium", "iron", "calcium"],
      raw: { kind: "raw", name: "Cabbage and carrot slaw", how: "Shred cabbage and carrot finely, toss with lemon juice, salt and a pinch of sugar." },
      sides: [
        { kind: "cooked", name: "Dal tadka", how: "Cook moong dal until soft, then pour over a tempering of cumin, garlic and dried red chilli." },
        { kind: "cooked", name: "Tinda sabzi", how: "Saute small round gourds with onion, tomato and turmeric until tender." },
      ],
    },
    "pearl-millet-40": {
      kcal: 340, carbsG: 36, fibreG: 6, gi: 60, minerals: ["iron", "magnesium", "phosphorus", "selenium"],
      raw: { kind: "raw", name: "Kachumber salad", how: "Dice cucumber, tomato and onion, and season with lemon juice, chaat masala and coriander." },
      sides: [
        { kind: "cooked", name: "Saag", how: "Simmer mustard greens with spinach and a little ginger, then mash lightly and finish with a tadka." },
        { kind: "cooked", name: "Aloo gobi", how: "Cook potato and cauliflower florets with cumin, turmeric and tomato until tender." },
      ],
    },
  },
};
