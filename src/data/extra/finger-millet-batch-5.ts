import type { Recipe } from "@/types/recipe";
import type { LineContent } from "@/data/i18n-content/sorghum";
import type { PlateInfo } from "@/types/plate";

/** finger-millet recipes finger-millet-36 to finger-millet-40. */
export const FINGER_MILLET_BATCH_5: {
  recipes: Recipe[];
  content: Record<string, { hi: LineContent; ta: LineContent }>;
  translations: Record<string, { hi: { title: string; description: string }; ta: { title: string; description: string } }>;
  plate: Record<string, PlateInfo>;
} = {
  recipes: [
    {
      id: "finger-millet-36",
      title: "Ragi Thalipeeth",
      milletId: "finger-millet",
      region: "West Indian",
      diet: "Vegetarian",
      course: "Breakfast",
      description: "A hand-patted, savoury multigrain flatbread from Maharashtra made with ragi flour, rice flour and besan, rich in calcium and iron.",
      servings: 4,
      prepTimeMinutes: 20,
      cookTimeMinutes: 25,
      difficulty: "Easy",
      ingredients: [
        "1 cup ragi (finger millet) flour",
        "1/4 cup rice flour",
        "1/4 cup besan (gram flour)",
        "1 small onion, finely chopped",
        "1 green chilli, finely chopped",
        "1 tsp cumin seeds, crushed",
        "2 tbsp coriander leaves, chopped",
        "1 tsp salt",
        "Warm water as needed",
        "2 tbsp oil or ghee for cooking",
      ],
      steps: [
        "Combine the ragi flour, rice flour, besan, crushed cumin and salt in a wide bowl.",
        "Add the chopped onion, green chilli and coriander and mix them into the flour with your fingers.",
        "Add warm water gradually and knead into a soft dough that holds its shape without sticking to your hands.",
        "Divide the dough into 4 equal balls and rest them for 5 minutes so the flours absorb the water.",
        "Grease a sheet of plastic or a banana leaf with a few drops of oil and place one ball on it.",
        "Pat the dough outwards with damp fingers into a round about 5 mm thick, and make a small hole in the centre.",
        "Transfer the thalipeeth to a hot tawa on medium heat, drizzle a little oil around the edges, and cook until the base is golden.",
        "Flip it, cook the other side until crisp and spotted, and serve hot with a dollop of butter or curd.",
      ],
    },
    {
      id: "finger-millet-37",
      title: "Ragi Kheer",
      milletId: "finger-millet",
      region: "North Indian",
      diet: "Vegetarian",
      course: "Dessert",
      description: "A creamy, earthy kheer made by cooking ragi flour in milk with jaggery, cardamom and nuts, a nourishing sweet for children and new mothers.",
      servings: 4,
      prepTimeMinutes: 10,
      cookTimeMinutes: 25,
      difficulty: "Easy",
      ingredients: [
        "3 tbsp ragi (finger millet) flour",
        "1 tbsp ghee",
        "3 cups full-fat milk",
        "1/2 cup water",
        "1/3 cup jaggery, grated",
        "1/2 tsp cardamom powder",
        "1 tbsp chopped almonds",
        "1 tbsp chopped cashews",
      ],
      steps: [
        "Mix the ragi flour with the water in a small bowl until it forms a smooth, lump-free slurry.",
        "Heat the ghee in a heavy pan on low heat and add the milk.",
        "Bring the milk to a gentle simmer, then slowly pour in the ragi slurry while stirring constantly.",
        "Cook on low heat for 12 to 15 minutes, stirring often so the bottom does not catch.",
        "Add the grated jaggery and stir until it dissolves completely and the kheer turns a deep brown.",
        "Cook for 3 minutes more until the kheer thickens to a pouring consistency.",
        "Stir in the cardamom powder, almonds and cashews, then switch off the heat.",
        "Serve warm or chilled, garnished with a few extra nuts.",
      ],
    },
    {
      id: "finger-millet-38",
      title: "Ragi Onion Vada",
      milletId: "finger-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Snack",
      description: "Crisp, golden fritters of ragi flour with onion, curry leaves, ginger and green chilli, a light and nutritious evening snack from Karnataka.",
      servings: 4,
      prepTimeMinutes: 20,
      cookTimeMinutes: 20,
      difficulty: "Easy",
      ingredients: [
        "1 cup ragi (finger millet) flour",
        "2 tbsp rice flour",
        "1 small onion, finely chopped",
        "2 green chillies, finely chopped",
        "1 tsp ginger, grated",
        "8 curry leaves, chopped",
        "2 tbsp coriander leaves, chopped",
        "1 tsp cumin seeds",
        "1 tsp salt",
        "Water as needed, plus 1 cup oil for deep frying",
      ],
      steps: [
        "Combine the ragi flour, rice flour, cumin seeds and salt in a mixing bowl.",
        "Add the onion, green chillies, grated ginger, curry leaves and coriander and mix thoroughly.",
        "Add water a little at a time and knead to a firm dough that can be shaped without cracking.",
        "Wet your palm, take a small ball of dough, and pat it into a round about 1 cm thick with a hole in the centre.",
        "Heat the oil in a kadai on medium heat until a small bit of dough rises to the surface steadily.",
        "Slide 2 or 3 vadas into the oil and fry for 2 to 3 minutes per side until golden and crisp.",
        "Lift them out with a slotted spoon and drain on paper towels for a minute.",
        "Serve hot with coconut chutney or sambar.",
      ],
    },
    {
      id: "finger-millet-39",
      title: "Ragi Roti with Ghee",
      milletId: "finger-millet",
      region: "North Indian",
      diet: "Vegetarian",
      course: "Main Course",
      description: "Soft, earthy finger millet flatbreads cooked on a hot tawa and brushed with ghee, traditionally eaten with vegetables, dal or jaggery.",
      servings: 4,
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      difficulty: "Medium",
      ingredients: [
        "2 cups ragi (finger millet) flour",
        "1/2 cup whole wheat flour (atta), for binding",
        "1/2 tsp salt",
        "1 cup warm water, approximately",
        "1 tsp ghee for the dough",
        "2 tbsp ghee for brushing the rotis",
      ],
      steps: [
        "Mix the ragi flour, whole wheat flour and salt in a large bowl.",
        "Add the ghee and rub it into the flour until it looks crumbly.",
        "Pour in the warm water gradually and knead for 4 to 5 minutes into a soft, pliable dough.",
        "Rest the dough covered for 10 minutes, then divide it into 8 equal balls.",
        "Flatten each ball between your palms and roll it out gently into a round about 2 mm thick.",
        "Cook each roti on a hot tawa on medium heat for 30 seconds, then flip and cook until small brown spots appear.",
        "Brush each roti with a little ghee as it comes off the tawa, and press lightly so it puffs.",
        "Serve hot with vegetable sabzi, dal or a spoon of jaggery.",
      ],
    },
    {
      id: "finger-millet-40",
      title: "Ragi Mudde with Mutton Curry",
      milletId: "finger-millet",
      region: "South Indian",
      diet: "Non-Vegetarian",
      course: "Main Course",
      description: "Smooth, round ragi balls from Karnataka, eaten by dipping in a spicy mutton curry, a filling and traditional rural meal.",
      servings: 4,
      prepTimeMinutes: 25,
      cookTimeMinutes: 50,
      difficulty: "Hard",
      ingredients: [
        "2 cups ragi (finger millet) flour",
        "3 cups water",
        "1/2 tsp salt",
        "500 g mutton, bone-in pieces",
        "3 tbsp oil",
        "2 onions, finely chopped",
        "2 tbsp ginger-garlic paste",
        "2 tomatoes, chopped",
        "1 tbsp red chilli powder",
        "1 tsp garam masala",
      ],
      steps: [
        "Bring the water and salt to a rolling boil in a heavy pot.",
        "Add the ragi flour slowly while stirring constantly to avoid lumps, then cover and cook for 5 minutes.",
        "Stir the mudde vigorously until it becomes a smooth, firm dough, then cover and keep warm.",
        "Heat the oil in a pan and fry the onions until golden, then add the ginger-garlic paste and cook for 2 minutes.",
        "Add the tomatoes and cook until mushy, then stir in the chilli powder and mutton pieces.",
        "Add enough water to cover the mutton, add the garam masala, and simmer on low heat for 40 minutes until tender.",
        "Shape the mudde into smooth balls with wet hands, making a small hollow in each one.",
        "Serve each mudde with a ladle of mutton curry, and eat it by dipping small pieces into the curry.",
      ],
    },
  ],
  content: {
    "finger-millet-36": {
      hi: {
        ingredients: ["1 कप रागी (मडुआ) का आटा", "1/4 कप चावल का आटा", "1/4 कप बेसन", "1 छोटा प्याज़, बारीक कटा", "1 हरी मिर्च, बारीक कटी", "1 छोटा चम्मच जीरा, कुटा हुआ", "2 बड़े चम्मच हरा धनिया, कटा हुआ", "1 छोटा चम्मच नमक", "ज़रूरत अनुसार गुनगुना पानी", "पकाने के लिए 2 बड़े चम्मच तेल या घी"],
        steps: ["एक चौड़े बर्तन में रागी का आटा, चावल का आटा, बेसन, कुटा जीरा और नमक मिलाएँ।", "कटा प्याज़, हरी मिर्च और धनिया डालकर उँगलियों से आटे में मिलाएँ।", "धीरे-धीरे गुनगुना पानी डालते हुए नरम आटा गूँधें जो हाथ से चिपके नहीं।", "आटे को 4 बराबर गोलों में बाँटें और आटे को पानी सोखने के लिए 5 मिनट रखें।", "प्लास्टिक शीट या केले के पत्ते पर तेल की कुछ बूँदें लगाएँ और एक गोला रखें।", "गीली उँगलियों से बाहर की ओर थपथपाकर लगभग 5 मिमी मोटा गोल बनाएँ और बीच में छोटा छेद करें।", "थालीपीठ को गरम तवे पर मध्यम आँच पर रखें, किनारों पर थोड़ा तेल डालें और नीचे का भाग सुनहरा होने तक सेंकें।", "पलटकर दूसरी ओर भी कुरकुरा और धब्बेदार होने तक सेंकें, फिर मक्खन या दही के साथ गरम परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் ராகி (கேழ்வரகு) மாவு", "1/4 கப் அரிசி மாவு", "1/4 கப் கடலை மாவு", "1 சிறிய வெங்காயம், பொடியாக நறுக்கியது", "1 பச்சை மிளகாய், பொடியாக நறுக்கியது", "1 டீஸ்பூன் சீரகம், இடித்தது", "2 டேபிள்ஸ்பூன் கொத்தமல்லி இலை, நறுக்கியது", "1 டீஸ்பூன் உப்பு", "தேவையான அளவு வெதுவெதுப்பான தண்ணீர்", "சுடுவதற்கு 2 டேபிள்ஸ்பூன் எண்ணெய் அல்லது நெய்"],
        steps: ["ஒரு அகன்ற பாத்திரத்தில் ராகி மாவு, அரிசி மாவு, கடலை மாவு, இடித்த சீரகம், உப்பு சேர்க்கவும்.", "நறுக்கிய வெங்காயம், பச்சை மிளகாய், கொத்தமல்லியை சேர்த்து விரல்களால் மாவில் கலக்கவும்.", "வெதுவெதுப்பான தண்ணீரை சிறிது சிறிதாக ஊற்றி, கைகளில் ஒட்டாத மிருதுவான மாவாக பிசையவும்.", "மாவை 4 சம உருண்டைகளாக பிரித்து, தண்ணீர் உறிஞ்ச 5 நிமிடம் வைக்கவும்.", "பிளாஸ்டிக் ஷீட் அல்லது வாழையிலையில் சில சொட்டு எண்ணெய் தடவி ஒரு உருண்டையை வைக்கவும்.", "ஈரக் கைவிரல்களால் வெளிப்புறமாக தட்டி சுமார் 5 மி.மீ. தடிமனான வட்டமாக்கி, நடுவில் சிறிய துளையிடவும்.", "தாலிபீட்டை சூடான தோசைக்கல்லில் மிதமான தீயில் வைத்து, ஓரங்களில் சிறிது எண்ணெய் விட்டு அடிப்பகுதி பொன்னிறமாகும் வரை வேகவிடவும்.", "திருப்பி மறுபக்கமும் மொறுமொறுப்பாகவும் புள்ளிகள் வரும் வரை வேகவிட்டு, வெண்ணெய் அல்லது தயிருடன் சூடாக பரிமாறவும்."],
      },
    },
    "finger-millet-37": {
      hi: {
        ingredients: ["3 बड़े चम्मच रागी (मडुआ) का आटा", "1 बड़ा चम्मच घी", "3 कप फुल क्रीम दूध", "1/2 कप पानी", "1/3 कप गुड़, कसा हुआ", "1/2 छोटा चम्मच इलायची पाउडर", "1 बड़ा चम्मच कटे बादाम", "1 बड़ा चम्मच कटे काजू"],
        steps: ["रागी के आटे को पानी के साथ एक छोटे कटोरे में मिलाकर बिना गुठली का चिकना घोल बनाएँ।", "भारी पेंदी के बर्तन में घी धीमी आँच पर गरम करें और दूध डालें।", "दूध को हल्का उबलने दें, फिर लगातार चलाते हुए धीरे-धीरे रागी का घोल डालें।", "धीमी आँच पर 12 से 15 मिनट पकाएँ, बीच-बीच में चलाते रहें ताकि नीचे न लगे।", "कसा गुड़ डालें और चलाएँ जब तक वह पूरी तरह घुल न जाए और खीर गहरा भूरा न हो जाए।", "3 मिनट और पकाएँ, जब तक खीर बहने लायक गाढ़ी न हो जाए।", "इलायची पाउडर, बादाम और काजू मिलाकर गैस बंद करें।", "गरम या ठंडी परोसें, ऊपर से कुछ और मेवे डालकर।"],
      },
      ta: {
        ingredients: ["3 டேபிள்ஸ்பூன் ராகி மாவு", "1 டேபிள்ஸ்பூன் நெய்", "3 கப் முழு கொழுப்பு பால்", "1/2 கப் தண்ணீர்", "1/3 கப் வெல்லம், துருவியது", "1/2 டீஸ்பூன் ஏலக்காய்த் தூள்", "1 டேபிள்ஸ்பூன் நறுக்கிய பாதாம்", "1 டேபிள்ஸ்பூன் நறுக்கிய முந்திரி"],
        steps: ["ராகி மாவை தண்ணீருடன் ஒரு சிறிய கிண்ணத்தில் கலந்து கட்டியில்லாத மென்மையான கரைசலாக்கவும்.", "கனமான அடிப்பாத்திரத்தில் நெய்யை மெல்லிய தீயில் சூடாக்கி பாலைச் சேர்க்கவும்.", "பால் லேசாக கொதித்ததும், தொடர்ந்து கிளறியபடி ராகி கரைசலை மெதுவாக ஊற்றவும்.", "மெல்லிய தீயில் 12 முதல் 15 நிமிடம் வேகவிடவும், அடியில் பிடிக்காமல் அடிக்கடி கிளறவும்.", "துருவிய வெல்லத்தை சேர்த்து முழுவதும் கரைந்து கீர் ஆழ்ந்த பழுப்பாகும் வரை கிளறவும்.", "மேலும் 3 நிமிடம் வேகவிட்டு, ஊற்றும் பதத்துக்கு கெட்டியாக்கவும்.", "ஏலக்காய்த் தூள், பாதாம், முந்திரி சேர்த்து அடுப்பை அணைக்கவும்.", "சூடாகவோ குளிராகவோ பரிமாறவும், மேலே சில நட்ஸ் தூவி அலங்கரித்து."],
      },
    },
    "finger-millet-38": {
      hi: {
        ingredients: ["1 कप रागी (मडुआ) का आटा", "2 बड़े चम्मच चावल का आटा", "1 छोटा प्याज़, बारीक कटा", "2 हरी मिर्च, बारीक कटी", "1 छोटा चम्मच अदरक, कसी हुई", "8 करी पत्ते, कटे हुए", "2 बड़े चम्मच हरा धनिया, कटा हुआ", "1 छोटा चम्मच जीरा", "1 छोटा चम्मच नमक", "ज़रूरत अनुसार पानी और तलने के लिए 1 कप तेल"],
        steps: ["एक मिक्सिंग बर्तन में रागी का आटा, चावल का आटा, जीरा और नमक मिलाएँ।", "प्याज़, हरी मिर्च, कसी अदरक, करी पत्ते और धनिया डालकर अच्छी तरह मिलाएँ।", "थोड़ा-थोड़ा पानी डालकर कड़ा आटा गूँधें जिससे वड़े बिना फटे बन सकें।", "गीली हथेली पर आटे की छोटी गोली लेकर बीच में छेद वाला लगभग 1 सेमी मोटा गोल बनाएँ।", "कड़ाही में तेल मध्यम आँच पर गरम करें जब तक आटे का एक टुकड़ा धीरे-धीरे ऊपर न आ जाए।", "2 या 3 वड़े तेल में डालकर हर तरफ 2 से 3 मिनट सुनहरे और कुरकुरे होने तक तलें।", "झारे से निकालकर टिश्यू पेपर पर एक मिनट रखें।", "गरम नारियल की चटनी या सांभर के साथ परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் ராகி மாவு", "2 டேபிள்ஸ்பூன் அரிசி மாவு", "1 சிறிய வெங்காயம், பொடியாக நறுக்கியது", "2 பச்சை மிளகாய், பொடியாக நறுக்கியது", "1 டீஸ்பூன் இஞ்சி, துருவியது", "8 கறிவேப்பிலை, நறுக்கியது", "2 டேபிள்ஸ்பூன் கொத்தமல்லி இலை, நறுக்கியது", "1 டீஸ்பூன் சீரகம்", "1 டீஸ்பூன் உப்பு", "தேவையான அளவு தண்ணீர், பொரிக்க 1 கப் எண்ணெய்"],
        steps: ["ஒரு கலவைப் பாத்திரத்தில் ராகி மாவு, அரிசி மாவு, சீரகம், உப்பு சேர்க்கவும்.", "வெங்காயம், பச்சை மிளகாய், துருவிய இஞ்சி, கறிவேப்பிலை, கொத்தமல்லி சேர்த்து நன்கு கலக்கவும்.", "சிறிது சிறிதாக தண்ணீர் சேர்த்து, வடை வெடிக்காமல் வடிவம் கொடுக்கக் கூடிய கெட்டியான மாவாக பிசையவும்.", "ஈரக் கையில் சிறிய உருண்டை எடுத்து, நடுவில் துளையுடன் சுமார் 1 செ.மீ. தடிமனான வட்டமாக தட்டவும்.", "வாணலியில் எண்ணெயை மிதமான தீயில் சூடாக்கவும், மாவு ஒரு துண்டு மெதுவாக மேலே வரும் பதத்தில்.", "2 அல்லது 3 வடைகளை எண்ணெயில் விட்டு, ஒவ்வொரு பக்கமும் 2 முதல் 3 நிமிடம் பொன்னிறமாகவும் மொறுமொறுப்பாகவும் பொரிக்கவும்.", "துளையுள்ள கரண்டியால் எடுத்து டிஷ்யூ தாளில் ஒரு நிமிடம் வைக்கவும்.", "சூடான தேங்காய் சட்னி அல்லது சாம்பாருடன் பரிமாறவும்."],
      },
    },
    "finger-millet-39": {
      hi: {
        ingredients: ["2 कप रागी (मडुआ) का आटा", "1/2 कप गेहूँ का आटा (आटा), बाँधने के लिए", "1/2 छोटा चम्मच नमक", "1 कप गुनगुना पानी, लगभग", "आटे में मिलाने के लिए 1 छोटा चम्मच घी", "रोटी पर लगाने के लिए 2 बड़े चम्मच घी"],
        steps: ["रागी का आटा, गेहूँ का आटा और नमक एक बड़े बर्तन में मिलाएँ।", "घी डालकर उँगलियों से आटे में मिलाएँ जब तक मिश्रण भुरभुरा न लगे।", "गुनगुना पानी धीरे-धीरे डालें और 4 से 5 मिनट गूँधें, जब तक आटा नरम और लचीला न हो जाए।", "आटे को ढककर 10 मिनट रखें, फिर 8 बराबर गोलों में बाँटें।", "हर गोले को हथेलियों के बीच दबाकर लगभग 2 मिमी मोटी गोल रोटी बेलें।", "हर रोटी को गरम तवे पर मध्यम आँच पर 30 सेकंड सेंकें, फिर पलटें और छोटे भूरे धब्बे आने तक सेंकें।", "तवे से उतरते ही हर रोटी पर थोड़ा घी लगाएँ और हल्के से दबाएँ ताकि वह फूले।", "सब्ज़ी, दाल या गुड़ के साथ गरम परोसें।"],
      },
      ta: {
        ingredients: ["2 கப் ராகி மாவு", "1/2 கப் கோதுமை மாவு (ஆட்டா), பிணைக்க", "1/2 டீஸ்பூன் உப்பு", "தோராயமாக 1 கப் வெதுவெதுப்பான தண்ணீர்", "மாவில் சேர்க்க 1 டீஸ்பூன் நெய்", "ரொட்டியில் தடவ 2 டேபிள்ஸ்பூன் நெய்"],
        steps: ["ராகி மாவு, கோதுமை மாவு, உப்பை ஒரு பெரிய பாத்திரத்தில் கலக்கவும்.", "நெய் சேர்த்து, உதிரியாக வரும் வரை விரல்களால் மாவில் தேய்க்கவும்.", "வெதுவெதுப்பான தண்ணீரை மெதுவாக ஊற்றி 4 முதல் 5 நிமிடம் பிசைந்து, மென்மையான நெகிழ்வான மாவாக்கவும்.", "மாவை மூடி 10 நிமிடம் வைத்து, பின்னர் 8 சம உருண்டைகளாக பிரிக்கவும்.", "ஒவ்வொரு உருண்டையையும் உள்ளங்கைகளுக்கு நடுவே தட்டி, சுமார் 2 மி.மீ. தடிமனான வட்ட ரொட்டியாக உருட்டவும்.", "சூடான தோசைக்கல்லில் மிதமான தீயில் ஒவ்வொன்றையும் 30 வினாடி சுடவும், பின் திருப்பி சிறு பழுப்புப் புள்ளிகள் வரும் வரை வேகவிடவும்.", "தோசைக்கல்லில் இருந்து எடுத்ததும் ஒவ்வொன்றிலும் சிறிது நெய் தடவி, லேசாக அழுத்தி உப்ப விடவும்.", "காய்கறி, பருப்பு அல்லது வெல்லத்துடன் சூடாக பரிமாறவும்."],
      },
    },
    "finger-millet-40": {
      hi: {
        ingredients: ["2 कप रागी (मडुआ) का आटा", "3 कप पानी", "1/2 छोटा चम्मच नमक", "500 ग्राम मटन, हड्डी वाले टुकड़े", "3 बड़े चम्मच तेल", "2 प्याज़, बारीक कटे", "2 बड़े चम्मच अदरक-लहसुन का पेस्ट", "2 टमाटर, कटे हुए", "1 बड़ा चम्मच लाल मिर्च पाउडर", "1 छोटा चम्मच गरम मसाला"],
        steps: ["भारी बर्तन में पानी और नमक तेज़ उबाल पर लाएँ।", "लगातार चलाते हुए धीरे-धीरे रागी का आटा डालें ताकि गुठलियाँ न बनें, फिर ढककर 5 मिनट पकाएँ।", "मुद्दे को ज़ोर से चलाकर चिकना, कड़ा आटा बनाएँ, फिर ढककर गरम रखें।", "पैन में तेल गरम करके प्याज़ को सुनहरा तलें, फिर अदरक-लहसुन पेस्ट डालकर 2 मिनट भूनें।", "टमाटर डालकर गलने तक पकाएँ, फिर लाल मिर्च और मटन के टुकड़े डालें।", "मटन ढकने भर पानी डालें, गरम मसाला मिलाएँ और धीमी आँच पर 40 मिनट नरम होने तक उबालें।", "गीले हाथों से मुद्दे को चिकनी गोलियों में बनाएँ और हर गोली के बीच थोड़ा गड्ढा करें।", "हर मुद्दे के साथ मटन करी की एक कड़छी परोसें, और छोटे टुकड़े करी में डुबोकर खाएँ।"],
      },
      ta: {
        ingredients: ["2 கப் ராகி மாவு", "3 கப் தண்ணீர்", "1/2 டீஸ்பூன் உப்பு", "500 கிராம் ஆட்டுக்கறி, எலும்புடன் துண்டுகள்", "3 டேபிள்ஸ்பூன் எண்ணெய்", "2 வெங்காயம், பொடியாக நறுக்கியது", "2 டேபிள்ஸ்பூன் இஞ்சி-பூண்டு விழுது", "2 தக்காளி, நறுக்கியது", "1 டேபிள்ஸ்பூன் மிளகாய்த் தூள்", "1 டீஸ்பூன் கரம் மசாலா"],
        steps: ["கனமான பாத்திரத்தில் தண்ணீர், உப்பை பொங்கும் கொதிநிலைக்கு கொண்டு வரவும்.", "கட்டி சேராமல் தொடர்ந்து கிளறியபடி ராகி மாவை மெதுவாக சேர்த்து, மூடி 5 நிமிடம் வேகவிடவும்.", "முத்தை வலுவாக கிளறி மென்மையான, கெட்டியான மாவாக்கி, மூடி சூடாக வைக்கவும்.", "வாணலியில் எண்ணெய் சூடாக்கி வெங்காயத்தை பொன்னிறமாக வறுக்கவும், பிறகு இஞ்சி-பூண்டு விழுது சேர்த்து 2 நிமிடம் வதக்கவும்.", "தக்காளி சேர்த்து குழையும் வரை வேகவிட்டு, பின் மிளகாய்த் தூள், ஆட்டுக்கறி துண்டுகளை சேர்க்கவும்.", "ஆட்டுக்கறி மூழ்கும் அளவு தண்ணீர் ஊற்றி, கரம் மசாலா சேர்த்து மெல்லிய தீயில் 40 நிமிடம் மென்மையாகும் வரை கொதிக்கவிடவும்.", "ஈரக் கைகளால் முத்தை மென்மையான உருண்டைகளாக்கி, ஒவ்வொன்றிலும் சிறு குழி செய்யவும்.", "ஒவ்வொரு முத்தையுடன் ஆட்டுக்கறி குழம்பை ஒரு கரண்டி பரிமாறி, சிறு துண்டுகளை குழம்பில் தோய்த்து சாப்பிடவும்."],
      },
    },
  },
  translations: {
    "finger-millet-36": {
      hi: { title: "रागी थालीपीठ", description: "महाराष्ट्र की हाथ से थपथपाई गई मसालेदार बहु-अनाज रोटी, जो रागी, चावल के आटे और बेसन से बनती है और कैल्शियम व आयरन से भरपूर है।" },
      ta: { title: "ராகி தாலிபீத்", description: "மகாராஷ்டிராவின் கையால் தட்டிய காரமான பல தானிய ரொட்டி. ராகி, அரிசி மாவு, கடலை மாவில் செய்யப்பட்டு கால்சியம், இரும்புச்சத்து நிறைந்தது." },
    },
    "finger-millet-37": {
      hi: { title: "रागी खीर", description: "रागी के आटे को दूध में गुड़, इलायची और मेवों के साथ पकाकर बनी मलाईदार और पौष्टिक खीर, जो बच्चों और नई माताओं के लिए अच्छी मानी जाती है।" },
      ta: { title: "ராகி கீர்", description: "ராகி மாவை பாலில் வெல்லம், ஏலக்காய், நட்ஸ் சேர்த்து காய்ச்சி செய்யப்படும் கிரீமியான, சத்தான இனிப்பு. குழந்தைகளுக்கும் புதிய தாய்மார்களுக்கும் ஏற்றது." },
    },
    "finger-millet-38": {
      hi: { title: "रागी वड़ा", description: "रागी के आटे में प्याज़, करी पत्ते, अदरक और हरी मिर्च मिलाकर बने कुरकुरे, हल्के और पौष्टिक वड़े, जो कर्नाटक का शाम का नाश्ता है।" },
      ta: { title: "ராகி வடை", description: "ராகி மாவில் வெங்காயம், கறிவேப்பிலை, இஞ்சி, பச்சை மிளகாய் சேர்த்து செய்யப்படும் மொறுமொறுப்பான, இலகுவான, சத்தான கர்நாடக மாலை சிற்றுண்டி." },
    },
    "finger-millet-39": {
      hi: { title: "घी वाली रागी रोटी", description: "गरम तवे पर सेंकी और घी लगाई गई नरम, मिट्टी जैसी स्वाद वाली रागी रोटियाँ, जिन्हें परंपरा से सब्ज़ी, दाल या गुड़ के साथ खाया जाता है।" },
      ta: { title: "நெய் ராகி ரொட்டி", description: "சூடான தோசைக்கல்லில் சுட்டு நெய் தடவிய மென்மையான ராகி ரொட்டிகள். பாரம்பரியமாக காய்கறி, பருப்பு அல்லது வெல்லத்துடன் சாப்பிடப்படுகிறது." },
    },
    "finger-millet-40": {
      hi: { title: "रागी मुद्दे के साथ मटन करी", description: "कर्नाटक के चिकने, गोल रागी मुद्दे, जिन्हें मसालेदार मटन करी में डुबोकर खाया जाता है, एक भरपेट और पारंपरिक ग्रामीण भोजन।" },
      ta: { title: "ராகி முத்தையுடன் ஆட்டுக்கறி குழம்பு", description: "கர்நாடகாவின் மென்மையான, உருண்டையான ராகி முத்தை. காரமான ஆட்டுக்கறி குழம்பில் தோய்த்து சாப்பிடப்படும் நிறைவான பாரம்பரிய உணவு." },
    },
  },
  plate: {
    "finger-millet-36": {
      kcal: 230, carbsG: 36, fibreG: 6, gi: 60, minerals: ["calcium", "iron", "magnesium"],
      raw: { kind: "raw", name: "Cucumber and onion salad", how: "Slice cucumber and onion into rounds, toss with lemon juice and a pinch of salt." },
      sides: [
        { kind: "cooked", name: "Methi bhaji", how: "Saute chopped fenugreek leaves with garlic, onion and a little turmeric until just wilted." },
        { kind: "cooked", name: "Bhindi fry", how: "Shallow fry sliced okra with cumin, turmeric and amchur until crisp at the edges." },
      ],
    },
    "finger-millet-37": {
      kcal: 280, carbsG: 44, fibreG: 4, gi: 58, minerals: ["calcium", "iron", "phosphorus", "potassium"],
      raw: { kind: "raw", name: "Carrot and cucumber sticks", how: "Cut carrot and cucumber into thin sticks and serve chilled with a pinch of black salt." },
      sides: [
        { kind: "cooked", name: "Palak paneer", how: "Blend cooked spinach and simmer with paneer cubes, ginger, garlic and a little cream." },
        { kind: "cooked", name: "Lauki sabzi", how: "Cook bottle gourd cubes with cumin, tomato and turmeric until soft and lightly dry." },
      ],
    },
    "finger-millet-38": {
      kcal: 200, carbsG: 29, fibreG: 5, gi: 56, minerals: ["calcium", "iron", "magnesium"],
      raw: { kind: "raw", name: "Tomato and onion salad", how: "Dice tomato and red onion, season with lemon juice, black pepper and chopped coriander." },
      sides: [
        { kind: "cooked", name: "Sambar", how: "Simmer toor dal with tamarind, vegetables and sambar powder, then temper with mustard and curry leaves." },
        { kind: "cooked", name: "Beans poriyal", how: "Stir fry chopped beans with mustard seeds, grated coconut and curry leaves until tender." },
      ],
    },
    "finger-millet-39": {
      kcal: 210, carbsG: 38, fibreG: 6, gi: 58, minerals: ["calcium", "iron", "magnesium", "phosphorus"],
      raw: { kind: "raw", name: "Onion and cucumber salad", how: "Slice onion and cucumber thinly, then toss with lemon juice and chaat masala." },
      sides: [
        { kind: "cooked", name: "Dal tadka", how: "Cook moong dal until soft, then pour over a tempering of cumin, garlic and dried red chilli." },
        { kind: "cooked", name: "Tinda sabzi", how: "Saute small round gourds with onion, tomato and turmeric until tender." },
      ],
    },
    "finger-millet-40": {
      kcal: 420, carbsG: 38, fibreG: 5, gi: 60, minerals: ["calcium", "iron", "zinc", "phosphorus"],
      raw: { kind: "raw", name: "Kachumber salad", how: "Dice cucumber, tomato and onion, and season with lemon juice, chaat masala and coriander." },
      sides: [
        { kind: "cooked", name: "Beans thoran", how: "Stir fry chopped beans with coconut, mustard seeds and curry leaves until dry and tender." },
        { kind: "cooked", name: "Rasam", how: "Simmer tomato and tamarind with rasam powder, then temper with mustard, cumin and garlic." },
      ],
    },
  },
};
