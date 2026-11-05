import type { Recipe } from "@/types/recipe";
import type { LineContent } from "@/data/i18n-content/sorghum";
import type { PlateInfo } from "@/types/plate";

/** Pearl millet (bajra) recipes 21-25 with English, Hindi and Tamil content and plate data. */
export const PEARL_MILLET_BATCH_2 = {
  recipes: [
    {
      id: "pearl-millet-21",
      title: "Bajra Roti with Mutton Keema",
      milletId: "pearl-millet",
      region: "North Indian",
      diet: "Non-Vegetarian",
      course: "Main Course",
      description: "Warm bajra rotis served with minced mutton cooked with onion, tomato and garam masala, a hearty winter meal from Rajasthan.",
      servings: 4,
      prepTimeMinutes: 20,
      cookTimeMinutes: 40,
      difficulty: "Medium",
      ingredients: [
        "2 cups bajra (pearl millet) flour, for rotis",
        "1 cup warm water and 1/2 tsp salt",
        "500 g minced mutton (keema)",
        "2 onions, finely chopped",
        "2 tomatoes, pureed",
        "1 tbsp ginger-garlic paste, 1 tsp garam masala",
        "1 tsp red chilli powder, 1/2 tsp turmeric",
        "3 tbsp oil or ghee, and fresh coriander to garnish",
      ],
      steps: [
        "Knead the bajra flour, salt and warm water into a soft dough. Rest for 10 minutes.",
        "Heat the oil and fry the onions until deep golden, then add the ginger-garlic paste and cook for 2 minutes.",
        "Add the mutton keema, turmeric and chilli powder, and brown the meat for 6-8 minutes.",
        "Pour in the tomato puree and cook until the oil separates from the masala.",
        "Add 1 cup water and the garam masala, cover and simmer for 20-25 minutes until the mutton is tender.",
        "Shape the dough into 8 balls and roll each into a thin, round bajra roti with flour dusting.",
        "Cook the rotis on a hot tawa until spotted on both sides, then serve with the keema garnished with coriander.",
      ],
    },
    {
      id: "pearl-millet-22",
      title: "Bajra Roti with Egg Curry",
      milletId: "pearl-millet",
      region: "North Indian",
      diet: "Non-Vegetarian",
      course: "Main Course",
      description: "Soft bajra rotis with a rich, spiced egg curry of boiled eggs in a tomato and onion gravy.",
      servings: 4,
      prepTimeMinutes: 15,
      cookTimeMinutes: 30,
      difficulty: "Easy",
      ingredients: [
        "2 cups bajra (pearl millet) flour",
        "1 cup warm water and 1/2 tsp salt",
        "6 eggs, boiled and halved",
        "2 onions, finely chopped",
        "2 tomatoes, finely chopped",
        "1 tsp ginger-garlic paste",
        "1 tsp red chilli powder, 1/2 tsp turmeric and 1 tsp garam masala",
        "2 tbsp oil and fresh coriander to garnish",
      ],
      steps: [
        "Knead the bajra flour, salt and warm water into a soft, pliable dough and rest for 10 minutes.",
        "Heat the oil and fry the onions until golden. Add the ginger-garlic paste and cook for 2 minutes.",
        "Add the tomatoes, turmeric and chilli powder, and cook until the tomatoes break down into a thick masala.",
        "Add 1 cup water and the garam masala, and simmer for 8 minutes.",
        "Slip in the halved boiled eggs, cover and simmer on low for 5 minutes so they absorb the gravy.",
        "Shape the dough into 8 balls and roll each into a bajra roti.",
        "Cook the rotis on a hot tawa, then serve with the egg curry garnished with coriander."
      ],
    },
    {
      id: "pearl-millet-23",
      title: "Kambu Paniyaram",
      milletId: "pearl-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Snack",
      description: "Soft, round kambu dumplings cooked in a paniyaram pan with onion, ginger and curry leaves.",
      servings: 4,
      prepTimeMinutes: 20,
      cookTimeMinutes: 20,
      difficulty: "Medium",
      ingredients: [
        "1 cup kambu (pearl millet) flour",
        "1/4 cup idli rice, soaked for 4 hours",
        "2 tbsp urad dal, soaked",
        "1 tsp ginger, grated, and 1 green chilli, chopped",
        "1 onion, finely chopped",
        "1 tsp mustard seeds and 8 curry leaves",
        "salt to taste and oil for the pan",
      ],
      steps: [
        "Grind the soaked rice and urad dal with a little water into a thick batter, then mix in the kambu flour and salt.",
        "Leave the batter to ferment for 6-8 hours in a warm place until it rises and smells slightly sour.",
        "Heat 1 tsp oil and splutter the mustard seeds. Add curry leaves, ginger, green chilli and onion and sauté until soft.",
        "Stir the tempering into the batter and mix well.",
        "Heat a paniyaram pan and put a few drops of oil into each hollow.",
        "Spoon in the batter, cover and cook on low to medium heat for 2-3 minutes until the base sets.",
        "Turn each paniyaram over with a skewer, cook for 2 minutes more and serve with coconut chutney."
      ],
    },
    {
      id: "pearl-millet-24",
      title: "Bajra Kheer",
      milletId: "pearl-millet",
      region: "North Indian",
      diet: "Vegetarian",
      course: "Dessert",
      description: "Creamy, slow-cooked bajra pudding with milk, jaggery and cardamom, topped with nuts and saffron.",
      servings: 4,
      prepTimeMinutes: 10,
      cookTimeMinutes: 35,
      difficulty: "Easy",
      ingredients: [
        "1/2 cup bajra (pearl millet), soaked for 2 hours and coarsely ground",
        "4 cups full-fat milk",
        "1/3 cup jaggery, grated, or sugar to taste",
        "1/4 tsp cardamom powder",
        "1 tbsp ghee",
        "2 tbsp chopped almonds and pistachios",
        "a few saffron strands",
      ],
      steps: [
        "Heat the ghee in a heavy pan and roast the coarsely ground bajra for 2 minutes until fragrant.",
        "Add the milk and bring to a gentle simmer, stirring to prevent sticking.",
        "Cook on low heat for 25-30 minutes, stirring often, until the bajra is soft and the kheer thickens.",
        "Add the jaggery and stir until it dissolves completely.",
        "Stir in the cardamom and saffron, dissolved in a spoon of warm milk.",
        "Simmer for 2 more minutes, then take off the heat.",
        "Serve warm or chilled, topped with the chopped nuts."
      ],
    },
    {
      id: "pearl-millet-25",
      title: "Bajra Palak Cheela",
      milletId: "pearl-millet",
      region: "North Indian",
      diet: "Vegetarian",
      course: "Breakfast",
      description: "Savoury bajra and gram flour pancakes with puréed spinach, ginger and cumin, a green and protein-rich breakfast.",
      servings: 4,
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      difficulty: "Easy",
      ingredients: [
        "1 cup bajra (pearl millet) flour",
        "1/4 cup besan (gram flour)",
        "1 cup spinach, blanched and puréed",
        "1 tsp grated ginger and 1 green chilli, finely chopped",
        "1/2 tsp cumin seeds and 1/2 tsp turmeric",
        "1 cup water, adjusted as needed, and salt to taste",
        "oil for cooking",
      ],
      steps: [
        "Whisk the bajra flour, besan, spinach purée, ginger, green chilli, cumin, turmeric and salt with water into a smooth batter.",
        "Rest the batter for 10 minutes so the flour can absorb the liquid.",
        "Heat a non-stick tawa on medium and grease it lightly with oil.",
        "Pour a ladle of batter and spread it into a round about 6 inches wide.",
        "Drizzle a few drops of oil around the edges and cook for 2-3 minutes until the base is set.",
        "Flip and cook the other side for 1 minute until golden.",
        "Serve hot with mint chutney or yoghurt."
      ],
    },
  ] as Recipe[],

  content: {
    "pearl-millet-21": {
      hi: {
        ingredients: ["2 कप बाजरे का आटा, रोटी के लिए", "1 कप गुनगुना पानी और 1/2 छोटा चम्मच नमक", "500 ग्राम मटन कीमा", "2 प्याज़, बारीक कटे", "2 टमाटर, पीसे हुए", "1 बड़ा चम्मच अदरक-लहसुन पेस्ट, 1 छोटा चम्मच गरम मसाला", "1 छोटा चम्मच लाल मिर्च पाउडर, 1/2 छोटा चम्मच हल्दी", "3 बड़े चम्मच तेल या घी, और सजावट के लिए हरा धनिया"],
        steps: ["बाजरे का आटा, नमक और गुनगुने पानी से नरम आटा गूँधें। 10 मिनट रखें।", "तेल गरम करके प्याज़ गहरा सुनहरा होने तक भूनें, फिर अदरक-लहसुन पेस्ट डालकर 2 मिनट पकाएँ।", "मटन कीमा, हल्दी और मिर्च डालकर 6-8 मिनट तक मांस भूनें।", "टमाटर की प्यूरी डालकर तब तक पकाएँ जब तक मसाले से तेल अलग न होने लगे।", "1 कप पानी और गरम मसाला डालकर ढककर 20-25 मिनट धीमी आँच पर पकाएँ, जब तक मटन नरम न हो जाए।", "आटे के 8 गोले बनाएँ और हर एक को आटे की धूल लगाकर पतली गोल बाजरे की रोटी बेलें।", "रोटियों को गरम तवे पर दोनों तरफ धब्बे आने तक सेंकें, फिर धनिया से सजे कीमा के साथ परोसें।"],
      },
      ta: {
        ingredients: ["2 கப் கம்பு மாவு, ரொட்டிக்கு", "1 கப் வெதுவெதுப்பான தண்ணீர் மற்றும் 1/2 டீஸ்பூன் உப்பு", "500 கிராம் ஆட்டுக்கறி கொத்துக்கறி", "2 வெங்காயம், பொடியாக நறுக்கியது", "2 தக்காளி, அரைத்தது", "1 டேபிள்ஸ்பூன் இஞ்சி-பூண்டு விழுது, 1 டீஸ்பூன் கரம் மசாலா", "1 டீஸ்பூன் மிளகாய்த் தூள், 1/2 டீஸ்பூன் மஞ்சள்", "3 டேபிள்ஸ்பூன் எண்ணெய் அல்லது நெய், அலங்காரத்துக்கு கொத்தமல்லி"],
        steps: ["கம்பு மாவு, உப்பு, வெதுவெதுப்பான தண்ணீரால் மென்மையான மாவு பிசையவும். 10 நிமிடம் வைக்கவும்.", "எண்ணெயை சூடாக்கி வெங்காயத்தை ஆழ்ந்த பொன்னிறமாக வதக்கவும், பின் இஞ்சி-பூண்டு விழுது சேர்த்து 2 நிமிடம் வேகவிடவும்.", "கறிக்கீமா, மஞ்சள், மிளகாய்த் தூள் சேர்த்து 6-8 நிமிடம் இறைச்சியை வறுக்கவும்.", "தக்காளி விழுது சேர்த்து மசாலாவில் எண்ணெய் பிரியும் வரை வேகவிடவும்.", "1 கப் தண்ணீரும் கரம் மசாலாவும் சேர்த்து மூடி மெல்லிய தீயில் 20-25 நிமிடம் ஆட்டுக்கறி மென்மையாகும் வரை வேகவிடவும்.", "மாவை 8 உருண்டைகளாக்கி ஒவ்வொன்றையும் மாவு தூவி மெல்லிய வட்ட கம்பு ரொட்டியாக உருட்டவும்.", "சூடான தவாவில் ரொட்டிகளை இரு பக்கமும் புள்ளிகள் வரும் வரை வேகவிட்டு, கொத்தமல்லி தூவிய கறியுடன் பரிமாறவும்."],
      },
    },
    "pearl-millet-22": {
      hi: {
        ingredients: ["2 कप बाजरे का आटा", "1 कप गुनगुना पानी और 1/2 छोटा चम्मच नमक", "6 अंडे, उबले और आधे किए हुए", "2 प्याज़, बारीक कटे", "2 टमाटर, बारीक कटे", "1 छोटा चम्मच अदरक-लहसुन पेस्ट", "1 छोटा चम्मच लाल मिर्च पाउडर, 1/2 छोटा चम्मच हल्दी और 1 छोटा चम्मच गरम मसाला", "2 बड़े चम्मच तेल और सजावट के लिए धनिया"],
        steps: ["बाजरे का आटा, नमक और गुनगुने पानी से नरम, लचीला आटा गूँधें और 10 मिनट रखें।", "तेल गरम करके प्याज़ सुनहरा होने तक तलें। अदरक-लहसुन पेस्ट डालकर 2 मिनट पकाएँ।", "टमाटर, हल्दी और मिर्च डालें और टमाटर गलकर गाढ़ा मसाला बनने तक पकाएँ।", "1 कप पानी और गरम मसाला डालकर 8 मिनट उबालें।", "उबले अंडे के आधे टुकड़े डालें, ढककर धीमी आँच पर 5 मिनट पकाएँ ताकि वे ग्रेवी सोख लें।", "आटे के 8 गोले बनाकर हर एक को बाजरे की रोटी बेलें।", "रोटियों को गरम तवे पर सेंकें और धनिया से सजी अंडा करी के साथ परोसें।"],
      },
      ta: {
        ingredients: ["2 கப் கம்பு மாவு", "1 கப் வெதுவெதுப்பான தண்ணீர் மற்றும் 1/2 டீஸ்பூன் உப்பு", "6 முட்டை, வேகவைத்து பாதியாக வெட்டியது", "2 வெங்காயம், பொடியாக நறுக்கியது", "2 தக்காளி, பொடியாக நறுக்கியது", "1 டீஸ்பூன் இஞ்சி-பூண்டு விழுது", "1 டீஸ்பூன் மிளகாய்த் தூள், 1/2 டீஸ்பூன் மஞ்சள் மற்றும் 1 டீஸ்பூன் கரம் மசாலா", "2 டேபிள்ஸ்பூன் எண்ணெய் மற்றும் அலங்காரத்துக்கு கொத்தமல்லி"],
        steps: ["கம்பு மாவு, உப்பு, வெதுவெதுப்பான தண்ணீரால் மென்மையான, நெகிழ்வான மாவு பிசைந்து 10 நிமிடம் வைக்கவும்.", "எண்ணெயை சூடாக்கி வெங்காயத்தை பொன்னிறமாக வறுக்கவும். இஞ்சி-பூண்டு விழுது சேர்த்து 2 நிமிடம் வேகவிடவும்.", "தக்காளி, மஞ்சள், மிளகாய்த் தூள் சேர்த்து தக்காளி குழைந்து கெட்டி மசாலாவாகும் வரை வேகவிடவும்.", "1 கப் தண்ணீரும் கரம் மசாலாவும் சேர்த்து 8 நிமிடம் கொதிக்கவிடவும்.", "வேகவைத்த முட்டை பாதிகளை சேர்த்து, மூடி மெல்லிய தீயில் 5 நிமிடம் வேகவிடவும், குழம்பை உறிஞ்ச.", "மாவை 8 உருண்டைகளாக்கி ஒவ்வொன்றையும் கம்பு ரொட்டியாக உருட்டவும்.", "சூடான தவாவில் ரொட்டிகளை வேகவைத்து, கொத்தமல்லி தூவிய முட்டை குழம்புடன் பரிமாறவும்."],
      },
    },
    "pearl-millet-23": {
      hi: {
        ingredients: ["1 कप कंबु (बाजरा) का आटा", "1/4 कप इडली चावल, 4 घंटे भिगोए हुए", "2 बड़े चम्मच उड़द दाल, भिगोई हुई", "1 छोटा चम्मच अदरक, कसा हुआ और 1 हरी मिर्च, कटी", "1 प्याज़, बारीक कटा", "1 छोटा चम्मच सरसों और 8 करी पत्ते", "स्वादानुसार नमक और पैन के लिए तेल"],
        steps: ["भीगे चावल और उड़द दाल को थोड़े पानी के साथ गाढ़ा घोल बनाएँ, फिर कंबु का आटा और नमक मिलाएँ।", "घोल को 6-8 घंटे गरम जगह पर फर्मेंट होने दें, जब तक वह फूलकर हल्का खट्टा न हो जाए।", "छोटी कढ़ाई में 1 छोटा चम्मच तेल गरम करें और सरसों चटकाएँ। करी पत्ते, अदरक, हरी मिर्च और प्याज़ डालकर नरम होने तक भूनें।", "यह तड़का घोल में डालें और अच्छी तरह मिलाएँ।", "पनियारम पैन गरम करें और हर गड्ढे में कुछ बूँदें तेल डालें।", "घोल भरें, ढककर धीमी से मध्यम आँच पर 2-3 मिनट पकाएँ जब तक नीचे का हिस्सा जम न जाए।", "सींक से पलटें, 2 मिनट और पकाएँ और नारियल की चटनी के साथ परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் கம்பு மாவு", "1/4 கப் இட்லி அரிசி, 4 மணி நேரம் ஊறவைத்தது", "2 டேபிள்ஸ்பூன் உளுத்தம் பருப்பு, ஊறவைத்தது", "1 டீஸ்பூன் இஞ்சி துருவியது மற்றும் 1 பச்சை மிளகாய், நறுக்கியது", "1 வெங்காயம், பொடியாக நறுக்கியது", "1 டீஸ்பூன் கடுகு மற்றும் 8 கறிவேப்பிலை", "சுவைக்கேற்ப உப்பு மற்றும் பேனுக்கு எண்ணெய்"],
        steps: ["ஊறிய அரிசி, உளுத்தம் பருப்பை சிறிது தண்ணீருடன் கெட்டியான மாவாக அரைக்கவும். பின் கம்பு மாவு, உப்பு சேர்க்கவும்.", "மாவை 6-8 மணி நேரம் சூடான இடத்தில் புளிக்க விடவும், பொங்கி லேசாக புளிப்பு வாசனை வரும் வரை.", "சிறிய வாணலியில் 1 டீஸ்பூன் எண்ணெய் சூடாக்கி கடுகு தாளிக்கவும். கறிவேப்பிலை, இஞ்சி, பச்சை மிளகாய், வெங்காயம் சேர்த்து மென்மையாக வதக்கவும்.", "இந்த தாளிப்பை மாவில் சேர்த்து நன்கு கலக்கவும்.", "பனியாரக் கல்லை சூடாக்கி ஒவ்வொரு குழியிலும் சில சொட்டு எண்ணெய் விடவும்.", "மாவை நிரப்பி மூடி மிதமான குறைந்த தீயில் 2-3 நிமிடம் அடிப்பகுதி இறுகும் வரை வேகவிடவும்.", "குச்சியால் திருப்பி மேலும் 2 நிமிடம் வேகவிட்டு தேங்காய் சட்னியுடன் பரிமாறவும்."],
      },
    },
    "pearl-millet-24": {
      hi: {
        ingredients: ["1/2 कप बाजरा, 2 घंटे भिगोया और मोटा पीसा हुआ", "4 कप फुल-क्रीम दूध", "1/3 कप गुड़, कसा हुआ, या स्वादानुसार चीनी", "1/4 छोटा चम्मच इलायची पाउडर", "1 बड़ा चम्मच घी", "2 बड़े चम्मच बारीक कटे बादाम और पिस्ता", "केसर के कुछ धागे"],
        steps: ["भारी पैन में घी गरम करें और मोटे पिसे बाजरे को 2 मिनट तक भूनें, जब तक खुशबू न आए।", "दूध डालें और हल्के उबाल पर लाएँ, चिपकने से बचाने के लिए चलाते रहें।", "धीमी आँच पर 25-30 मिनट बार-बार चलाते हुए पकाएँ, जब तक बाजरा नरम और खीर गाढ़ी न हो जाए।", "गुड़ डालें और पूरी तरह घुलने तक चलाएँ।", "इलायची और केसर को एक चम्मच गुनगुने दूध में घोलकर मिलाएँ।", "2 मिनट और उबालें, फिर आँच से उतार लें।", "गरम या ठंडी परोसें, ऊपर से कटे मेवे डालकर।"],
      },
      ta: {
        ingredients: ["1/2 கப் கம்பு, 2 மணி நேரம் ஊறவைத்து கரகரப்பாக அரைத்தது", "4 கப் முழு கொழுப்பு பால்", "1/3 கப் வெல்லம், துருவியது, அல்லது சுவைக்கேற்ப சர்க்கரை", "1/4 டீஸ்பூன் ஏலக்காய்த் தூள்", "1 டேபிள்ஸ்பூன் நெய்", "2 டேபிள்ஸ்பூன் பொடியாக நறுக்கிய பாதாம், பிஸ்தா", "சில குங்குமப்பூ இழைகள்"],
        steps: ["கனமான பாத்திரத்தில் நெய்யை சூடாக்கி, கரகரப்பாக அரைத்த கம்பை 2 நிமிடம் மணம் வரும் வரை வறுக்கவும்.", "பால் சேர்த்து மெல்லிய கொதிநிலைக்கு கொண்டு வரவும், ஒட்டாமல் இருக்க கிளறவும்.", "மெல்லிய தீயில் 25-30 நிமிடம் அடிக்கடி கிளறி, கம்பு மென்மையாகி பாயசம் கெட்டியாகும் வரை வேகவிடவும்.", "வெல்லம் சேர்த்து முழுவதும் கரையும் வரை கிளறவும்.", "ஏலக்காய், ஒரு கரண்டி வெதுவெதுப்பான பாலில் கரைத்த குங்குமப்பூ சேர்க்கவும்.", "மேலும் 2 நிமிடம் கொதிக்கவிட்டு இறக்கவும்.", "சூடாக அல்லது குளிர்வித்து, நறுக்கிய பருப்புகளை மேலே தூவி பரிமாறவும்."],
      },
    },
    "pearl-millet-25": {
      hi: {
        ingredients: ["1 कप बाजरे का आटा", "1/4 कप बेसन", "1 कप पालक, ब्लांच करके पीसा हुआ", "1 छोटा चम्मच कसा अदरक और 1 हरी मिर्च, बारीक कटी", "1/2 छोटा चम्मच जीरा और 1/2 छोटा चम्मच हल्दी", "1 कप पानी, ज़रूरत अनुसार, और स्वादानुसार नमक", "पकाने के लिए तेल"],
        steps: ["बाजरे का आटा, बेसन, पालक की प्यूरी, अदरक, हरी मिर्च, जीरा, हल्दी और नमक पानी के साथ चिकना घोल बनाएँ।", "घोल को 10 मिनट रखें ताकि आटा पानी सोख ले।", "नॉन-स्टिक तवे को मध्यम आँच पर गरम करें और हल्का तेल लगाएँ।", "एक करछी घोल डालकर लगभग 6 इंच चौड़ा गोल फैलाएँ।", "किनारों पर तेल की कुछ बूँदें डालकर 2-3 मिनट पकाएँ जब तक नीचे का हिस्सा सेट न हो जाए।", "पलटकर दूसरी तरफ 1 मिनट और सेंकें जब तक सुनहरा न हो।", "पुदीने की चटनी या दही के साथ गरम परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் கம்பு மாவு", "1/4 கப் கடலை மாவு", "1 கப் கீரை, வெந்நீரில் வதக்கி அரைத்தது", "1 டீஸ்பூன் துருவிய இஞ்சி மற்றும் 1 பச்சை மிளகாய், பொடியாக நறுக்கியது", "1/2 டீஸ்பூன் சீரகம் மற்றும் 1/2 டீஸ்பூன் மஞ்சள்", "1 கப் தண்ணீர், தேவைக்கேற்ப, மற்றும் சுவைக்கேற்ப உப்பு", "சமைக்க எண்ணெய்"],
        steps: ["கம்பு மாவு, கடலை மாவு, கீரை விழுது, இஞ்சி, பச்சை மிளகாய், சீரகம், மஞ்சள், உப்பை தண்ணீருடன் மென்மையான மாவாக கலக்கவும்.", "மாவு தண்ணீரை உறிஞ்ச 10 நிமிடம் வைக்கவும்.", "நான்-ஸ்டிக் தவாவை மிதமான தீயில் சூடாக்கி லேசாக எண்ணெய் தடவவும்.", "ஒரு கரண்டி மாவை ஊற்றி சுமார் 6 அங்குல அகல வட்டமாக பரப்பவும்.", "ஓரங்களில் சில சொட்டு எண்ணெய் விட்டு 2-3 நிமிடம் அடிப்பகுதி இறுகும் வரை வேகவிடவும்.", "திருப்பி மறுபக்கம் 1 நிமிடம் பொன்னிறமாகும் வரை வேகவிடவும்.", "புதினா சட்னி அல்லது தயிருடன் சூடாக பரிமாறவும்."],
      },
    },
  } as Record<string, { hi: LineContent; ta: LineContent }>,

  translations: {
    "pearl-millet-21": { hi: { title: "बाजरा रोटी मटन कीमा", description: "गरम बाजरा रोटियों के साथ प्याज़, टमाटर और गरम मसाले में पका मटन कीमा, राजस्थान का भरपेट सर्दियों का भोजन।" }, ta: { title: "கம்பு ரொட்டி ஆட்டுக்கறி கொத்துக்கறி", description: "வெங்காயம், தக்காளி, கரம் மசாலாவில் வெந்த ஆட்டுக்கறி கொத்துக்கறியுடன் சூடான கம்பு ரொட்டிகள். ராஜஸ்தானின் நிறைவான குளிர்கால உணவு." } },
    "pearl-millet-22": { hi: { title: "बाजरा रोटी अंडा करी", description: "टमाटर-प्याज़ की ग्रेवी में उबले अंडों की मसालेदार करी के साथ नरम बाजरा रोटियाँ।" }, ta: { title: "கம்பு ரொட்டி முட்டை குழம்பு", description: "தக்காளி-வெங்காய குழம்பில் வேகவைத்த முட்டைகளின் மசாலா குழம்புடன் மென்மையான கம்பு ரொட்டிகள்." } },
    "pearl-millet-23": { hi: { title: "कंबु पनियारम", description: "प्याज़, अदरक और करी पत्ते वाले पनियारम पैन में पके नरम, गोल कंबु के गोले।" }, ta: { title: "கம்பு பனியாரம்", description: "வெங்காயம், இஞ்சி, கறிவேப்பிலை சேர்த்து பனியாரக் கல்லில் சுட்ட மென்மையான, உருண்டையான கம்பு பனியாரங்கள்." } },
    "pearl-millet-24": { hi: { title: "बाजरा खीर", description: "दूध, गुड़ और इलायची के साथ धीमी आँच पर पकी मलाईदार बाजरे की खीर, मेवों और केसर से सजी।" }, ta: { title: "கம்பு பாயசம்", description: "பால், வெல்லம், ஏலக்காயுடன் மெல்லிய தீயில் வேகவைத்த கிரீமியான கம்பு பாயசம், பருப்புகளாலும் குங்குமப்பூவாலும் அலங்கரித்தது." } },
    "pearl-millet-25": { hi: { title: "बाजरा पालक चीला", description: "पालक की प्यूरी, अदरक और जीरे वाले बाजरा-बेसन के मसालेदार चीले, हरा और प्रोटीन-भरा नाश्ता।" }, ta: { title: "கம்பு கீரை சீலா", description: "கீரை விழுது, இஞ்சி, சீரகம் சேர்த்த கம்பு-கடலை மாவு மசாலா தோசைகள். பச்சையான, புரதம் நிறைந்த காலை உணவு." } },
  } as Record<string, { hi: { title: string; description: string }; ta: { title: string; description: string } }>,

  plate: {
    "pearl-millet-21": { kcal: 440, carbsG: 44, fibreG: 7, gi: 50, minerals: ["Iron", "Zinc", "Phosphorus", "Magnesium"], raw: { kind: "raw", name: "Onion and cucumber salad", how: "Dice and dress with lemon, black pepper and coriander." }, sides: [{ kind: "cooked", name: "Dal tadka", how: "Cook toor dal, temper with cumin, garlic and dried red chilli." }, { kind: "cooked", name: "Cabbage and carrot stir-fry", how: "Sauté shredded cabbage and carrot with cumin and turmeric." }] },
    "pearl-millet-22": { kcal: 380, carbsG: 42, fibreG: 7, gi: 50, minerals: ["Iron", "Phosphorus", "Magnesium", "Zinc"], raw: { kind: "raw", name: "Cucumber and tomato salad", how: "Dice both and dress with lemon and black pepper." }, sides: [{ kind: "cooked", name: "Beans poriyal", how: "Stir-fry beans with mustard seeds, curry leaves and coconut." }, { kind: "cooked", name: "Palak dal", how: "Cook toor dal with spinach, garlic and cumin tempering." }] },
    "pearl-millet-23": { kcal: 230, carbsG: 34, fibreG: 6, gi: 58, minerals: ["Magnesium", "Iron", "Potassium"], raw: { kind: "raw", name: "Cucumber and carrot sticks", how: "Cut into sticks with lemon and black salt." }, sides: [{ kind: "cooked", name: "Coconut chutney", how: "Grind coconut with green chilli, roasted gram and salt." }, { kind: "cooked", name: "Sambar with vegetables", how: "Simmer drumstick and brinjal in tamarind broth with toor dal." }] },
    "pearl-millet-24": { kcal: 320, carbsG: 46, fibreG: 4, gi: 70, minerals: ["Calcium", "Phosphorus", "Magnesium", "Potassium"], raw: { kind: "raw", name: "Apple and cucumber slices", how: "Slice thinly and sprinkle with a little black salt." }, sides: [{ kind: "cooked", name: "Vegetable sabzi", how: "Cook carrot, beans and peas with cumin and turmeric." }, { kind: "cooked", name: "Bottle gourd curry", how: "Simmer lauki with tomato, cumin and coriander." }] },
    "pearl-millet-25": { kcal: 210, carbsG: 30, fibreG: 6, gi: 55, minerals: ["Iron", "Magnesium", "Calcium", "Potassium"], raw: { kind: "raw", name: "Tomato and cucumber salad", how: "Dice and season with lemon, black pepper and salt." }, sides: [{ kind: "cooked", name: "Methi aloo", how: "Sauté potato with fenugreek leaves, turmeric and mustard seeds." }, { kind: "cooked", name: "Mint chutney", how: "Blend mint, coriander, green chilli and lemon." }] },
  } as Record<string, PlateInfo>,
};
