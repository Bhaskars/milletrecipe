import type { Recipe } from "@/types/recipe";
import type { LineContent } from "@/data/i18n-content/sorghum";
import type { PlateInfo } from "@/types/plate";

/** pearl-millet recipes pearl-millet-41 to pearl-millet-45. */
export const PEARL_MILLET_BATCH_6: {
  recipes: Recipe[];
  content: Record<string, { hi: LineContent; ta: LineContent }>;
  translations: Record<string, { hi: { title: string; description: string }; ta: { title: string; description: string } }>;
  plate: Record<string, PlateInfo>;
} = {
  recipes: [
    {
      id: "pearl-millet-41",
      title: "Bajra Doodh Kheer",
      milletId: "pearl-millet",
      region: "North Indian",
      diet: "Vegetarian",
      course: "Dessert",
      description: "A creamy rice-pudding style kheer made with coarse bajra flour, full-fat milk, jaggery and cardamom, served warm or chilled.",
      servings: 4,
      prepTimeMinutes: 10,
      cookTimeMinutes: 30,
      difficulty: "Easy",
      ingredients: [
        "1/2 cup coarse bajra (pearl millet) flour",
        "1 tbsp ghee",
        "4 cups full-fat milk",
        "1/2 cup water",
        "1/3 cup jaggery, grated",
        "1/2 tsp cardamom powder",
        "1 tbsp raisins",
        "1 tbsp chopped almonds",
      ],
      steps: [
        "Heat the ghee in a heavy-bottomed pan on low heat and add the coarse bajra flour.",
        "Roast the flour for 4 to 5 minutes, stirring constantly, until it smells nutty and turns a light brown.",
        "Mix the water into the roasted flour to make a smooth paste without any lumps.",
        "Pour in the milk slowly while stirring, then simmer on low heat for 15 minutes, stirring often so it does not stick.",
        "Add the grated jaggery and stir until it dissolves fully into the kheer.",
        "Cook for 5 more minutes until the kheer coats the back of a spoon and turns creamy.",
        "Stir in the cardamom powder, raisins and almonds, then switch off the heat.",
        "Serve warm in small bowls, or chill for an hour and serve cold.",
      ],
    },
    {
      id: "pearl-millet-42",
      title: "Bajra Besan Dhokla",
      milletId: "pearl-millet",
      region: "West Indian",
      diet: "Vegetarian",
      course: "Snack",
      description: "A soft, steamed and tempered savoury cake made from bajra flour and besan with yoghurt, ginger and green chilli, from the Gujarati kitchen.",
      servings: 4,
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      difficulty: "Medium",
      ingredients: [
        "1 cup bajra (pearl millet) flour",
        "1/2 cup besan (gram flour)",
        "1/2 cup thick curd (yoghurt)",
        "3/4 cup water",
        "1 tsp ginger and green chilli paste",
        "1 tsp salt",
        "1 tsp sugar",
        "1 tsp eno fruit salt or baking soda",
        "1 tbsp oil for greasing and tempering",
        "1 tsp mustard seeds",
        "1 tsp sesame seeds",
      ],
      steps: [
        "Whisk the bajra flour, besan, curd, ginger chilli paste, salt, sugar and water into a smooth batter.",
        "Rest the batter for 10 minutes so the flours fully hydrate.",
        "Grease a steel thali or a round tin with a little oil and set up a steamer with boiling water.",
        "Just before steaming, add the eno or baking soda to the batter and stir gently in one direction to aerate it.",
        "Pour the batter into the greased tin and steam covered on medium heat for 15 to 18 minutes until a skewer comes out clean.",
        "Heat the remaining oil, add the mustard and sesame seeds, and let them splutter to make the tempering.",
        "Cut the dhokla into squares, pour the tempering over the top, and let it soak in for a minute.",
        "Serve warm with green chutney and a sprinkle of coriander.",
      ],
    },
    {
      id: "pearl-millet-43",
      title: "Kambu Sundal",
      milletId: "pearl-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Snack",
      description: "A protein-rich South Indian snack of tempered whole pearl millet tossed with grated coconut, mustard seeds and curry leaves, eaten on festive evenings.",
      servings: 4,
      prepTimeMinutes: 15,
      cookTimeMinutes: 25,
      difficulty: "Easy",
      ingredients: [
        "1 cup whole kambu (pearl millet) grains, soaked overnight",
        "2 cups water for cooking",
        "1 tbsp oil",
        "1 tsp mustard seeds",
        "1 tsp urad dal",
        "2 dried red chillies, broken",
        "8 curry leaves",
        "1/4 cup freshly grated coconut",
        "1/2 tsp salt",
        "1 tsp lemon juice",
      ],
      steps: [
        "Drain the soaked kambu grains and add them to a pressure cooker with 2 cups of water and a pinch of salt.",
        "Pressure cook on medium heat for 3 whistles, then let the pressure release naturally.",
        "Drain any leftover water and spread the cooked grains on a plate to cool slightly.",
        "Heat the oil in a pan and add the mustard seeds, urad dal and broken red chillies until they crackle.",
        "Add the curry leaves and the cooked kambu, then toss gently on medium heat for 2 minutes.",
        "Sprinkle in the salt and grated coconut and stir until the coconut is evenly mixed in.",
        "Finish with a few drops of lemon juice and toss once more.",
        "Serve warm as a light, protein-rich evening snack.",
      ],
    },
    {
      id: "pearl-millet-44",
      title: "Bajra Matar Pulao",
      milletId: "pearl-millet",
      region: "North Indian",
      diet: "Vegetarian",
      course: "Main Course",
      description: "A fragrant one-pot pulao made with broken bajra, green peas and carrot, spiced with whole garam masala and cooked in ghee.",
      servings: 4,
      prepTimeMinutes: 20,
      cookTimeMinutes: 30,
      difficulty: "Medium",
      ingredients: [
        "1 cup broken bajra (pearl millet), soaked for 30 minutes",
        "2 tbsp ghee",
        "1 tsp cumin seeds",
        "1 bay leaf, 2 cloves and 1 small cinnamon stick",
        "1 small onion, thinly sliced",
        "1/2 cup green peas",
        "1 small carrot, diced",
        "1 tsp ginger-garlic paste",
        "2 1/2 cups water",
        "1 tsp salt",
      ],
      steps: [
        "Drain the soaked broken bajra and keep it aside.",
        "Heat the ghee in a heavy pot and add the cumin seeds, bay leaf, cloves and cinnamon stick until fragrant.",
        "Add the sliced onion and fry on medium heat until golden brown at the edges.",
        "Stir in the ginger-garlic paste, then add the peas and carrot and cook for 3 minutes.",
        "Add the drained bajra and roast it with the vegetables for 2 minutes.",
        "Pour in the water and salt, bring to a boil, then cover and cook on low heat for 20 minutes.",
        "Check that the grains are tender and the water is fully absorbed, and fluff the pulao with a fork.",
        "Rest it covered for 5 minutes and serve hot with raita.",
      ],
    },
    {
      id: "pearl-millet-45",
      title: "Kambu Chicken Pulao",
      milletId: "pearl-millet",
      region: "South Indian",
      diet: "Non-Vegetarian",
      course: "Main Course",
      description: "A one-pot pulao of broken kambu cooked with chicken pieces, onion, tomato and whole spices, a hearty meal that uses the pearl millet grain instead of rice.",
      servings: 4,
      prepTimeMinutes: 25,
      cookTimeMinutes: 40,
      difficulty: "Medium",
      ingredients: [
        "1 cup broken kambu (pearl millet), soaked for 30 minutes",
        "400 g chicken, cut into bone-in pieces",
        "2 tbsp oil and 1 tbsp ghee",
        "1 onion, sliced",
        "2 tomatoes, chopped",
        "1 tbsp ginger-garlic paste",
        "1 tsp garam masala",
        "1/2 tsp turmeric powder",
        "1 tsp red chilli powder",
        "1 tsp salt",
        "2 1/2 cups water",
        "A few mint leaves",
      ],
      steps: [
        "Drain the soaked kambu and rub the chicken pieces with turmeric, red chilli powder and half the salt.",
        "Heat the oil and ghee in a heavy pot and fry the sliced onion until deep golden brown.",
        "Add the ginger-garlic paste and fry until the raw smell disappears.",
        "Add the chopped tomatoes and cook until soft, then add the marinated chicken and sear it for 5 minutes.",
        "Stir in the garam masala, then add the drained kambu and roast it lightly with the masala for 2 minutes.",
        "Pour in the water and the remaining salt, bring to a boil, and cover the pot.",
        "Cook on low heat for 25 minutes until the chicken is tender and the kambu grains are soft and separate.",
        "Garnish with mint leaves and serve hot with raita.",
      ],
    },
  ],
  content: {
    "pearl-millet-41": {
      hi: {
        ingredients: ["1/2 कप मोटा बाजरे का आटा", "1 छोटा चम्मच घी", "4 कप फुल क्रीम दूध", "1/2 कप पानी", "1/3 कप गुड़, कसा हुआ", "1/2 छोटा चम्मच इलायची पाउडर", "1 बड़ा चम्मच किशमिश", "1 बड़ा चम्मच कटे बादाम"],
        steps: ["भारी पेंदी के बर्तन में घी धीमी आँच पर गरम करें और मोटा बाजरे का आटा डालें।", "लगातार चलाते हुए आटे को 4 से 5 मिनट भूनें, जब तक सोंधी खुशबू न आए और रंग हल्का भूरा न हो जाए।", "भुने आटे में पानी मिलाकर बिना गुठली का चिकना घोल बनाएँ।", "धीरे-धीरे दूध डालते हुए चलाएँ और धीमी आँच पर 15 मिनट उबालें, बीच-बीच में चलाते रहें ताकि नीचे न लगे।", "कसा गुड़ डालें और चलाएँ, जब तक वह पूरी तरह घुल न जाए।", "5 मिनट और पकाएँ, जब तक खीर चम्मच के पिछले हिस्से पर चिपककर मलाईदार न लगने लगे।", "इलायची पाउडर, किशमिश और बादाम मिलाकर गैस बंद करें।", "गरम-गरम कटोरियों में परोसें, या एक घंटा ठंडा करके ठंडी परोसें।"],
      },
      ta: {
        ingredients: ["1/2 கப் கரகரப்பான கம்பு மாவு", "1 டீஸ்பூன் நெய்", "4 கப் முழு கொழுப்பு பால்", "1/2 கப் தண்ணீர்", "1/3 கப் வெல்லம், துருவியது", "1/2 டீஸ்பூன் ஏலக்காய்த் தூள்", "1 டேபிள்ஸ்பூன் உலர் திராட்சை", "1 டேபிள்ஸ்பூன் நறுக்கிய பாதாம்"],
        steps: ["கனமான அடிப்பாத்திரத்தில் நெய்யை மெல்லிய தீயில் சூடாக்கி கம்பு மாவைச் சேர்க்கவும்.", "தொடர்ந்து கிளறியபடி 4 முதல் 5 நிமிடம் வறுக்கவும், நட்டு வாசனை வந்து லேசாக பழுப்பு நிறமாகும் வரை.", "வறுத்த மாவில் தண்ணீர் சேர்த்து கட்டியில்லாமல் மென்மையான விழுதாக கரைக்கவும்.", "கிளறியபடி பாலை மெல்லிய ஓட்டமாக ஊற்றி, மெல்லிய தீயில் 15 நிமிடம் கொதிக்கவிடவும், அடியில் பிடிக்காமல் அடிக்கடி கிளறவும்.", "துருவிய வெல்லம் சேர்த்து முழுவதும் கரையும் வரை கிளறவும்.", "மேலும் 5 நிமிடம் வேகவிடவும், கரண்டியின் பின்புறத்தில் ஒட்டும் கிரீமி பதம் வரும் வரை.", "ஏலக்காய்த் தூள், உலர் திராட்சை, பாதாம் சேர்த்து அடுப்பை அணைக்கவும்.", "சூடாக சிறிய கிண்ணங்களில் பரிமாறவும், அல்லது ஒரு மணி நேரம் குளிரவைத்து குளிரவைத்து பரிமாறவும்."],
      },
    },
    "pearl-millet-42": {
      hi: {
        ingredients: ["1 कप बाजरे का आटा", "1/2 कप बेसन", "1/2 कप गाढ़ा दही", "3/4 कप पानी", "1 छोटा चम्मच अदरक-हरी मिर्च का पेस्ट", "1 छोटा चम्मच नमक", "1 छोटा चम्मच चीनी", "1 छोटा चम्मच ईनो या बेकिंग सोडा", "1 बड़ा चम्मच तेल, चिकनाई और छौंक के लिए", "1 छोटा चम्मच राई", "1 छोटा चम्मच तिल"],
        steps: ["बाजरे का आटा, बेसन, दही, अदरक-हरी मिर्च पेस्ट, नमक, चीनी और पानी फेंटकर चिकना घोल बनाएँ।", "घोल को 10 मिनट रखें ताकि आटा पूरी तरह पानी सोख ले।", "थाली या गोल डिब्बे में थोड़ा तेल लगाएँ और भाप के लिए बर्तन में पानी उबालकर रखें।", "भाप देने से ठीक पहले घोल में ईनो या बेकिंग सोडा डालकर धीरे से एक ही दिशा में चलाएँ ताकि हवा भर जाए।", "घोल को थाली में डालकर ढककर मध्यम आँच पर 15 से 18 मिनट भाप दें, जब तक सींक साफ न निकले।", "बचा तेल गरम करें, राई और तिल डालें और चटकने दें ताकि छौंक बन जाए।", "ढोकले को चौकोर टुकड़ों में काटें, ऊपर से छौंक डालें और एक मिनट भीगने दें।", "गरम-गरम हरी चटनी और हरे धनिये के साथ परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் கம்பு மாவு", "1/2 கப் கடலை மாவு", "1/2 கப் கெட்டி தயிர்", "3/4 கப் தண்ணீர்", "1 டீஸ்பூன் இஞ்சி-பச்சை மிளகாய் விழுது", "1 டீஸ்பூன் உப்பு", "1 டீஸ்பூன் சர்க்கரை", "1 டீஸ்பூன் ஈனோ அல்லது பேக்கிங் சோடா", "1 டேபிள்ஸ்பூன் எண்ணெய், தடவவும் தாளிக்கவும்", "1 டீஸ்பூன் கடுகு", "1 டீஸ்பூன் எள்"],
        steps: ["கம்பு மாவு, கடலை மாவு, தயிர், இஞ்சி-பச்சை மிளகாய் விழுது, உப்பு, சர்க்கரை, தண்ணீர் சேர்த்து அடித்து மென்மையான கரைசலாக்கவும்.", "கரைசலை 10 நிமிடம் வைத்து மாவு தண்ணீரை முழுவதும் உறிஞ்ச விடவும்.", "தட்டில் அல்லது வட்ட டப்பாவில் சிறிது எண்ணெய் தடவி, ஆவிக்கு பாத்திரத்தில் தண்ணீரை கொதிக்க வைக்கவும்.", "ஆவி கொடுப்பதற்கு சற்று முன் ஈனோ அல்லது சோடாவை கரைசலில் சேர்த்து, காற்று சேர ஒரே திசையில் மெதுவாக கிளறவும்.", "கரைசலை தட்டில் ஊற்றி மூடி மிதமான தீயில் 15 முதல் 18 நிமிடம் ஆவியில் வேகவிடவும், குச்சி சுத்தமாக வரும் வரை.", "மீதமுள்ள எண்ணெயை சூடாக்கி, கடுகு, எள் சேர்த்து வெடிக்க விடவும்.", "தோக்ளாவை சதுர துண்டுகளாக வெட்டி, மேலே தாளிப்பை ஊற்றி ஒரு நிமிடம் ஊறவிடவும்.", "சூடாக பச்சை சட்னியுடன் கொத்தமல்லி தூவி பரிமாறவும்."],
      },
    },
    "pearl-millet-43": {
      hi: {
        ingredients: ["1 कप साबुत कंबु (बाजरा), रात भर भिगोया हुआ", "2 कप पानी पकाने के लिए", "1 बड़ा चम्मच तेल", "1 छोटा चम्मच राई", "1 छोटा चम्मच उड़द दाल", "2 सूखी लाल मिर्च, तोड़ी हुई", "8 करी पत्ते", "1/4 कप ताज़ा कसा नारियल", "1/2 छोटा चम्मच नमक", "1 छोटा चम्मच नींबू का रस"],
        steps: ["भीगे कंबु को छानकर प्रेशर कुकर में 2 कप पानी और एक चुटकी नमक के साथ डालें।", "मध्यम आँच पर 3 सीटी तक पकाएँ और प्रेशर अपने-आप निकलने दें।", "बचा पानी निकालकर पके दाने एक थाली में फैलाएँ ताकि थोड़ा ठंडे हो जाएँ।", "कड़ाही में तेल गरम करें और राई, उड़द दाल व तोड़ी लाल मिर्च चटकने तक भूनें।", "करी पत्ते और पका कंबु डालकर मध्यम आँच पर 2 मिनट धीरे-धीरे चलाएँ।", "नमक और कसा नारियल डालकर चलाएँ ताकि नारियल बराबर मिल जाए।", "नींबू का रस डालकर एक बार और पलटें।", "हल्के नाश्ते के रूप में गरम परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் முழு கம்பு, இரவு முழுவதும் ஊறவைத்தது", "2 கப் தண்ணீர் வேகவைக்க", "1 டேபிள்ஸ்பூன் எண்ணெய்", "1 டீஸ்பூன் கடுகு", "1 டீஸ்பூன் உளுத்தம் பருப்பு", "2 காய்ந்த சிவப்பு மிளகாய், உடைத்தது", "8 கறிவேப்பிலை", "1/4 கப் புதிய துருவிய தேங்காய்", "1/2 டீஸ்பூன் உப்பு", "1 டீஸ்பூன் எலுமிச்சை சாறு"],
        steps: ["ஊறவைத்த கம்பை வடிகட்டி, 2 கப் தண்ணீர், ஒரு சிட்டிகை உப்புடன் பிரஷர் குக்கரில் சேர்க்கவும்.", "மிதமான தீயில் 3 விசில் வரை வேகவைத்து, பிரஷர் தானாக இறங்க விடவும்.", "மீதமுள்ள தண்ணீரை வடித்து, வெந்த தானியங்களை ஒரு தட்டில் பரப்பி சிறிது ஆறவிடவும்.", "வாணலியில் எண்ணெய் சூடாக்கி, கடுகு, உளுத்தம் பருப்பு, உடைத்த மிளகாயை வெடிக்கும் வரை வறுக்கவும்.", "கறிவேப்பிலை, வெந்த கம்பு சேர்த்து மிதமான தீயில் 2 நிமிடம் மெதுவாக கிளறவும்.", "உப்பு, துருவிய தேங்காய் சேர்த்து, தேங்காய் சமமாக கலக்கும் வரை கிளறவும்.", "எலுமிச்சை சாறு சேர்த்து ஒரு முறை மீண்டும் புரட்டவும்.", "லேசான புரதம் நிறைந்த மாலை சிற்றுண்டியாக சூடாக பரிமாறவும்."],
      },
    },
    "pearl-millet-44": {
      hi: {
        ingredients: ["1 कप टूटा बाजरा (कंबु), 30 मिनट भिगोया हुआ", "2 बड़े चम्मच घी", "1 छोटा चम्मच जीरा", "1 तेज पत्ता, 2 लौंग और 1 छोटी दालचीनी", "1 छोटा प्याज़, पतला कटा", "1/2 कप हरे मटर", "1 छोटी गाजर, छोटे टुकड़ों में कटी", "1 छोटा चम्मच अदरक-लहसुन का पेस्ट", "2 1/2 कप पानी", "1 छोटा चम्मच नमक"],
        steps: ["भीगे टूटे बाजरे को छानकर अलग रखें।", "भारी बर्तन में घी गरम करें और जीरा, तेज पत्ता, लौंग व दालचीनी डालें जब तक खुशबू न आए।", "कटा प्याज़ डालकर मध्यम आँच पर किनारों से सुनहरा होने तक भूनें।", "अदरक-लहसुन पेस्ट डालकर कच्चापन जाने तक भूनें, फिर मटर और गाजर डालकर 3 मिनट पकाएँ।", "छना बाजरा डालकर सब्ज़ियों के साथ 2 मिनट हल्का भूनें।", "पानी और नमक डालकर उबाल आने दें, फिर ढककर धीमी आँच पर 20 मिनट पकाएँ।", "दाने नरम और पानी पूरी तरह सोखा हुआ होने पर काँटे से पुलाव फुलाएँ।", "5 मिनट ढककर रखें और रायते के साथ गरम परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் உடைத்த கம்பு, 30 நிமிடம் ஊறவைத்தது", "2 டேபிள்ஸ்பூன் நெய்", "1 டீஸ்பூன் சீரகம்", "1 பிரியாணி இலை, 2 கிராம்பு, 1 சிறு பட்டை", "1 சிறிய வெங்காயம், மெல்லியதாக நறுக்கியது", "1/2 கப் பச்சைப் பட்டாணி", "1 சிறிய கேரட், சதுரமாக நறுக்கியது", "1 டீஸ்பூன் இஞ்சி-பூண்டு விழுது", "2 1/2 கப் தண்ணீர்", "1 டீஸ்பூன் உப்பு"],
        steps: ["ஊறவைத்த உடைத்த கம்பை வடிகட்டி தனியாக வைக்கவும்.", "கனமான பாத்திரத்தில் நெய்யை சூடாக்கி, சீரகம், பிரியாணி இலை, கிராம்பு, பட்டை வாசனை வரும் வரை வறுக்கவும்.", "நறுக்கிய வெங்காயத்தை சேர்த்து மிதமான தீயில் ஓரங்கள் பொன்னிறமாகும் வரை வதக்கவும்.", "இஞ்சி-பூண்டு விழுது சேர்த்து பச்சை வாசனை போகும் வரை வதக்கவும், பிறகு பட்டாணி, கேரட் சேர்த்து 3 நிமிடம் வேகவிடவும்.", "வடிகட்டிய கம்பை சேர்த்து காய்கறிகளுடன் 2 நிமிடம் லேசாக வறுக்கவும்.", "தண்ணீர், உப்பு சேர்த்து கொதிக்க விட்டு, மூடி மெல்லிய தீயில் 20 நிமிடம் வேகவிடவும்.", "தானியங்கள் மென்மையாகி தண்ணீர் முழுவதும் உறிஞ்சியதும், முள் கரண்டியால் புலாவை உதிர்க்கவும்.", "5 நிமிடம் மூடி வைத்து, தயிர் பச்சடியுடன் சூடாக பரிமாறவும்."],
      },
    },
    "pearl-millet-45": {
      hi: {
        ingredients: ["1 कप टूटा कंबु (बाजरा), 30 मिनट भिगोया हुआ", "400 ग्राम चिकन, हड्डी वाले टुकड़े", "2 बड़े चम्मच तेल और 1 बड़ा चम्मच घी", "1 प्याज़, पतला कटा", "2 टमाटर, कटे हुए", "1 बड़ा चम्मच अदरक-लहसुन का पेस्ट", "1 छोटा चम्मच गरम मसाला", "1/2 छोटा चम्मच हल्दी पाउडर", "1 छोटा चम्मच लाल मिर्च पाउडर", "1 छोटा चम्मच नमक", "2 1/2 कप पानी", "पुदीने की कुछ पत्तियाँ"],
        steps: ["भीगे कंबु को छानें और चिकन के टुकड़ों पर हल्दी, लाल मिर्च और आधा नमक लगाकर रखें।", "भारी बर्तन में तेल और घी गरम करें और कटे प्याज़ को गहरा सुनहरा होने तक भूनें।", "अदरक-लहसुन पेस्ट डालकर कच्चापन जाने तक भूनें।", "कटे टमाटर डालें और नरम होने तक पकाएँ, फिर मसालेदार चिकन डालकर 5 मिनट भूनें।", "गरम मसाला डालें, फिर छना कंबु डालकर मसाले के साथ 2 मिनट हल्का भूनें।", "पानी और बचा नमक डालकर उबाल आने दें और बर्तन ढक दें।", "धीमी आँच पर 25 मिनट पकाएँ, जब तक चिकन नरम और कंबु के दाने मुलायम व अलग-अलग न हो जाएँ।", "पुदीने की पत्तियों से सजाकर रायते के साथ गरम परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் உடைத்த கம்பு, 30 நிமிடம் ஊறவைத்தது", "400 கிராம் கோழி, எலும்புடன் துண்டுகளாக்கியது", "2 டேபிள்ஸ்பூன் எண்ணெய், 1 டேபிள்ஸ்பூன் நெய்", "1 வெங்காயம், மெல்லியதாக நறுக்கியது", "2 தக்காளி, நறுக்கியது", "1 டேபிள்ஸ்பூன் இஞ்சி-பூண்டு விழுது", "1 டீஸ்பூன் கரம் மசாலா", "1/2 டீஸ்பூன் மஞ்சள் தூள்", "1 டீஸ்பூன் மிளகாய்த் தூள்", "1 டீஸ்பூன் உப்பு", "2 1/2 கப் தண்ணீர்", "சில புதினா இலைகள்"],
        steps: ["ஊறவைத்த கம்பை வடிகட்டி, கோழித் துண்டுகளுக்கு மஞ்சள், மிளகாய்த் தூள், பாதி உப்பு தடவி வைக்கவும்.", "கனமான பாத்திரத்தில் எண்ணெய், நெய் சூடாக்கி, நறுக்கிய வெங்காயத்தை ஆழ்ந்த பொன்னிறமாகும் வரை வறுக்கவும்.", "இஞ்சி-பூண்டு விழுது சேர்த்து பச்சை வாசனை போகும் வரை வதக்கவும்.", "நறுக்கிய தக்காளியைச் சேர்த்து மென்மையாகும் வரை வேகவிடவும், பிறகு ஊறிய கோழித் துண்டுகளை சேர்த்து 5 நிமிடம் வதக்கவும்.", "கரம் மசாலா சேர்த்து, வடிகட்டிய கம்பை போட்டு மசாலாவுடன் 2 நிமிடம் லேசாக வறுக்கவும்.", "தண்ணீரையும் மீதமுள்ள உப்பையும் சேர்த்து கொதிக்க விட்டு, பாத்திரத்தை மூடவும்.", "மெல்லிய தீயில் 25 நிமிடம் வேகவிடவும், கோழி மென்மையாகி கம்பு தானியங்கள் உதிரியாக வரும் வரை.", "புதினா இலைகளால் அலங்கரித்து தயிர் பச்சடியுடன் சூடாக பரிமாறவும்."],
      },
    },
  },
  translations: {
    "pearl-millet-41": {
      hi: { title: "बाजरा खीर", description: "मोटे बाजरे के आटे, फुल क्रीम दूध, गुड़ और इलायची से बनी मलाईदार खीर, जिसे गरम या ठंडा परोसा जाता है।" },
      ta: { title: "கம்பு கீர்", description: "கரகரப்பான கம்பு மாவு, முழு கொழுப்பு பால், வெல்லம், ஏலக்காயில் செய்யப்பட்ட கிரீமி கீர். சூடாகவோ குளிராகவோ பரிமாறலாம்." },
    },
    "pearl-millet-42": {
      hi: { title: "बाजरा ढोकला", description: "बाजरे के आटे और बेसन से बना नरम, भाप में पका और छौंक लगा गुजराती नमकीन केक, जिसमें दही, अदरक और हरी मिर्च होती है।" },
      ta: { title: "கம்பு தோக்ளா", description: "கம்பு மாவு, கடலை மாவு, தயிரில் செய்யப்பட்ட மென்மையான ஆவியில் வேகவைத்த காரமான கேக். இஞ்சி, பச்சை மிளகாய் சேர்த்து தாளிப்பு ஊற்றப்படுகிறது." },
    },
    "pearl-millet-43": {
      hi: { title: "कंबु सुंदल", description: "साबुत कंबु के दानों को नारियल, राई और करी पत्ते के छौंक के साथ मिलाकर बना प्रोटीन से भरपूर दक्षिण भारतीय नाश्ता, जो त्योहारों की शाम को खाया जाता है।" },
      ta: { title: "கம்பு சுண்டல்", description: "முழு கம்பு தானியங்களை தேங்காய், கடுகு, கறிவேப்பிலை தாளிப்புடன் கலந்து செய்யப்படும் புரதம் நிறைந்த தென்னிந்திய சிற்றுண்டி. பண்டிகை மாலைகளில் சாப்பிடப்படுகிறது." },
    },
    "pearl-millet-44": {
      hi: { title: "बाजरा मटर पुलाव", description: "टूटे बाजरे को हरे मटर और गाजर के साथ घी में साबुत गरम मसालों के साथ पकाया गया सुगंधित एक-बर्तन पुलाव।" },
      ta: { title: "கம்பு பட்டாணி புலாவ்", description: "உடைத்த கம்பை பச்சைப் பட்டாணி, கேரட்டுடன் நெய்யில் முழு கரம் மசாலா சேர்த்து செய்யப்படும் நறுமணமுள்ள ஒரு பாத்திர புலாவ்." },
    },
    "pearl-millet-45": {
      hi: { title: "कंबु चिकन पुलाव", description: "टूटे कंबु को चिकन के टुकड़ों, प्याज़, टमाटर और साबुत मसालों के साथ पकाया गया हार्दिक एक-बर्तन भोजन, जिसमें चावल की जगह बाजरा इस्तेमाल होता है।" },
      ta: { title: "கம்பு சிக்கன் புலாவ்", description: "உடைத்த கம்புடன் கோழித் துண்டுகள், வெங்காயம், தக்காளி, முழு மசாலாக்களைச் சேர்த்து செய்யப்படும் சத்தான ஒரு பாத்திர உணவு. அரிசிக்கு பதில் கம்பு பயன்படுகிறது." },
    },
  },
  plate: {
    "pearl-millet-41": {
      kcal: 300, carbsG: 46, fibreG: 4, gi: 66, minerals: ["calcium", "magnesium", "phosphorus"],
      raw: { kind: "raw", name: "Cucumber and carrot sticks", how: "Cut cucumber and carrot into thin sticks and serve with a pinch of black salt." },
      sides: [
        { kind: "cooked", name: "Palak dal", how: "Cook toor dal with spinach, tomato and turmeric until creamy, then temper with cumin and garlic." },
        { kind: "cooked", name: "Beetroot sabzi", how: "Saute diced beetroot with mustard seeds, curry leaves and grated coconut until tender." },
      ],
    },
    "pearl-millet-42": {
      kcal: 220, carbsG: 30, fibreG: 5, gi: 56, minerals: ["magnesium", "iron", "calcium"],
      raw: { kind: "raw", name: "Onion and cucumber salad", how: "Slice onion into rings and cucumber into half moons, then toss with lemon juice and chaat masala." },
      sides: [
        { kind: "cooked", name: "Methi thepla-style greens", how: "Saute fenugreek leaves with garlic, onion and a little ginger until just tender." },
        { kind: "cooked", name: "Dal tadka", how: "Cook moong dal until soft, then pour over a tempering of cumin, garlic and dried chilli." },
      ],
    },
    "pearl-millet-43": {
      kcal: 240, carbsG: 32, fibreG: 7, gi: 52, minerals: ["magnesium", "iron", "zinc", "phosphorus"],
      raw: { kind: "raw", name: "Tomato and cucumber salad", how: "Dice tomato and cucumber, then season with lemon juice, black pepper and coriander." },
      sides: [
        { kind: "cooked", name: "Rasam", how: "Simmer tomato, tamarind and rasam powder, then temper with mustard, cumin and curry leaves." },
        { kind: "cooked", name: "Cabbage poriyal", how: "Stir fry shredded cabbage with mustard seeds, urad dal and grated coconut until tender." },
      ],
    },
    "pearl-millet-44": {
      kcal: 320, carbsG: 50, fibreG: 6, gi: 62, minerals: ["magnesium", "iron", "potassium", "phosphorus"],
      raw: { kind: "raw", name: "Kachumber salad", how: "Dice cucumber, tomato and onion, and season with lemon juice, chaat masala and coriander." },
      sides: [
        { kind: "cooked", name: "Dal makhani-style lentils", how: "Simmer whole black lentils with onion, tomato and a little butter until thick and rich." },
        { kind: "cooked", name: "Bhindi fry", how: "Shallow fry sliced okra with cumin, turmeric and amchur until the edges turn crisp." },
      ],
    },
    "pearl-millet-45": {
      kcal: 430, carbsG: 40, fibreG: 5, gi: 60, minerals: ["iron", "phosphorus", "zinc", "selenium"],
      raw: { kind: "raw", name: "Onion and cucumber salad", how: "Slice onion and cucumber thinly, then toss with lemon juice and a pinch of salt." },
      sides: [
        { kind: "cooked", name: "Vellarikka thoran", how: "Stir fry thinly sliced cucumber with coconut, mustard seeds and curry leaves until dry." },
        { kind: "cooked", name: "Rasam", how: "Simmer tomato and tamarind with rasam powder, then temper with mustard, cumin and garlic." },
      ],
    },
  },
};
