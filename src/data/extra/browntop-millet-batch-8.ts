import type { Recipe } from "@/types/recipe";
import type { LineContent } from "@/data/i18n-content/sorghum";
import type { PlateInfo } from "@/types/plate";

/** browntop-millet recipes browntop-millet-51 to browntop-millet-55 with full English, Hindi and Tamil content and plate data. */
export const BROWNTOP_MILLET_BATCH_8: {
  recipes: Recipe[];
  content: Record<string, { hi: LineContent; ta: LineContent }>;
  translations: Record<string, { hi: { title: string; description: string }; ta: { title: string; description: string } }>;
  plate: Record<string, PlateInfo>;
} = {
  recipes: [
    {
      id: "browntop-millet-51",
      title: "Korle Sambar Sadam",
      milletId: "browntop-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Main Course",
      description: "A one-pot meal of browntop millet and toor dal cooked in a thick, tamarind-scented sambar with mixed vegetables, comforting and filling for a family lunch.",
      servings: 4,
      prepTimeMinutes: 15,
      cookTimeMinutes: 25,
      difficulty: "Easy",
      ingredients: [
        "1 cup browntop millet (korle), rinsed",
        "1/2 cup toor dal, washed",
        "1 cup mixed vegetables (drumstick, brinjal, okra), chopped",
        "1 tbsp sambar powder",
        "1 small lemon-sized ball tamarind, soaked in 1/2 cup warm water",
        "2 tbsp sesame oil",
        "1 tsp mustard seeds, 1/2 tsp fenugreek seeds, 8 curry leaves",
        "1 onion, chopped, 2 tomatoes, chopped",
        "1/2 tsp turmeric powder",
        "1 tsp salt, 3 1/2 cups water",
      ],
      steps: [
        "Pressure-cook the millet and toor dal with 2 cups water, the turmeric and a pinch of salt for 3 whistles, or simmer covered until soft.",
        "Squeeze the tamarind in its soaking water and strain the extract.",
        "Heat the sesame oil in a heavy pan and splutter the mustard seeds, fenugreek and curry leaves.",
        "Add the onion and fry until soft, then add the tomatoes and cook until mushy.",
        "Add the vegetables, sambar powder, the tamarind extract and the remaining 1 1/2 cups water, and simmer for 10 minutes.",
        "Stir in the salt and the cooked millet and dal, mashing lightly.",
        "Simmer for 5 more minutes until the sambar thickens to a rice-like consistency.",
        "Serve hot with papad and a little pickle.",
      ],
    },
    {
      id: "browntop-millet-52",
      title: "Korle Gajar Halwa",
      milletId: "browntop-millet",
      region: "North Indian",
      diet: "Vegetarian",
      course: "Dessert",
      description: "A slow-cooked carrot halwa enriched with milk, ghee and a little roasted browntop millet flour, finished with cardamom and crunchy nuts.",
      servings: 6,
      prepTimeMinutes: 15,
      cookTimeMinutes: 35,
      difficulty: "Medium",
      ingredients: [
        "4 medium carrots, grated",
        "1/4 cup browntop millet flour (korle atta)",
        "2 tbsp ghee",
        "2 cups whole milk",
        "1/2 cup sugar",
        "1/4 tsp cardamom powder",
        "1 tbsp chopped almonds",
        "1 tbsp chopped pistachios",
        "2 tbsp ghee, extra for finishing",
      ],
      steps: [
        "Heat 2 tbsp ghee in a heavy pan and roast the millet flour on low heat for 3 minutes until fragrant, then set aside.",
        "Add a little ghee to the same pan and sauté the grated carrots for 5 minutes until they soften.",
        "Pour in the milk and simmer on medium heat, stirring, until the carrots absorb it and the mixture thickens, about 20 minutes.",
        "Stir in the roasted millet flour and cook for 3 minutes so there are no lumps.",
        "Add the sugar and cardamom and cook for 5 minutes more until the halwa leaves the sides of the pan.",
        "Drizzle the extra ghee over the halwa and mix in half the nuts.",
        "Garnish with the remaining nuts and serve warm.",
      ],
    },
    {
      id: "browntop-millet-53",
      title: "Korle Keema Paratha",
      milletId: "browntop-millet",
      region: "North Indian",
      diet: "Non-Vegetarian",
      course: "Main Course",
      description: "Flaky parathas of browntop millet and wheat flour stuffed with a spiced mutton keema, a hearty North Indian meal served with curd and pickle.",
      servings: 4,
      prepTimeMinutes: 40,
      cookTimeMinutes: 30,
      difficulty: "Hard",
      ingredients: [
        "1 cup browntop millet flour (korle atta)",
        "1/2 cup whole wheat flour, plus extra for dusting",
        "1/2 tsp salt",
        "2 tbsp ghee, plus 4 tbsp for cooking",
        "about 3/4 cup warm water, as needed",
        "250 g mutton mince (keema)",
        "1 onion, finely chopped",
        "1 tbsp ginger-garlic paste",
        "1 tsp red chilli powder, 1 tsp garam masala, 1/2 tsp turmeric powder",
        "2 tbsp fresh coriander leaves, chopped",
      ],
      steps: [
        "Mix both flours and the salt, rub in 2 tbsp ghee, then gradually add warm water to knead a soft, smooth dough.",
        "Cover the dough and rest it for 20 minutes.",
        "Heat 2 tbsp ghee in a pan and fry the onion until golden, then stir in the ginger-garlic paste.",
        "Add the mutton keema, turmeric and chilli powder, and cook on medium heat for 15 minutes until the mince is browned and dry.",
        "Stir in the garam masala and coriander, then let the filling cool completely.",
        "Divide the dough into 6 balls, flatten each into a small disc, place a spoonful of filling in the centre and seal the edges.",
        "Roll the stuffed balls gently into 6-inch parathas with dry flour.",
        "Cook each paratha on a hot tawa with ghee on both sides until golden and crisp.",
      ],
    },
    {
      id: "browntop-millet-54",
      title: "Korle Pesarattu",
      milletId: "browntop-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Breakfast",
      description: "Thin, green dosas of browntop millet and whole green gram batter with ginger and cumin, a protein-rich breakfast from Andhra Pradesh.",
      servings: 4,
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      difficulty: "Medium",
      ingredients: [
        "1 cup browntop millet, soaked for 4 hours",
        "1/2 cup whole green gram (moong), soaked for 4 hours",
        "1 green chilli, 1 tsp ginger, grated",
        "1 tsp cumin seeds",
        "1 tsp salt",
        "1/2 cup water, to grind",
        "1 small onion, finely chopped",
        "2 tbsp fresh coriander leaves, chopped",
        "3 tbsp sesame oil or ghee, for cooking the pesarattu",
      ],
      steps: [
        "Drain the soaked millet and green gram and grind them together with the green chilli, ginger and water to a smooth, thick batter.",
        "Stir in the salt and cumin seeds and rest the batter for 10 minutes.",
        "Heat a flat tawa over medium heat and sprinkle a few drops of oil on it.",
        "Pour a ladleful of batter onto the tawa and spread it in a round using the back of the ladle.",
        "Sprinkle the chopped onion and coriander on top and drizzle a little oil around the edges.",
        "Cook for 2-3 minutes until the underside is golden and the surface looks set.",
        "Flip carefully and cook the other side for 1 minute until golden.",
        "Serve hot with ginger chutney and upma.",
      ],
    },
    {
      id: "browntop-millet-55",
      title: "Korle Mysore Pak",
      milletId: "browntop-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Dessert",
      description: "A rich, melt-in-the-mouth sweet of gram flour and roasted browntop millet flour, cooked in a ghee and sugar syrup and set in squares.",
      servings: 8,
      prepTimeMinutes: 15,
      cookTimeMinutes: 30,
      difficulty: "Hard",
      ingredients: [
        "1/2 cup besan (gram flour)",
        "1/4 cup browntop millet flour (korle atta), dry roasted",
        "1 cup sugar",
        "1/2 cup water",
        "1 cup ghee, warmed",
        "1/4 tsp cardamom powder",
        "1 tbsp milk, to smooth",
        "1 tbsp chopped cashews, for garnish",
        "1 tsp ghee, to grease the tray",
      ],
      steps: [
        "Mix the besan and the roasted millet flour in a bowl and sift them together.",
        "Dissolve the sugar in the water in a heavy pan over medium heat and boil to a one-thread syrup.",
        "Lower the heat, add the flour mixture a spoonful at a time, and stir continuously to avoid lumps.",
        "Add the warm ghee gradually, stirring, until the mixture turns glossy and begins to leave the sides of the pan.",
        "Add the cardamom and milk, and mix well.",
        "Grease a tray with ghee, pour in the mixture and spread it evenly.",
        "Sprinkle the cashews on top, cool for 10 minutes, then cut into squares when it sets.",
      ],
    },
  ],
  content: {
    "browntop-millet-51": {
      hi: {
        ingredients: ["1 कप ब्राउनटॉप मिलेट (कोर्ले), धोया हुआ", "1/2 कप तुअर दाल, धोई हुई", "1 कप मिले-जुले सब्ज़ी (सहजन, बैंगन, भिंडी), कटी", "1 बड़ा चम्मच सांभर मसाला", "नींबू जितनी इमली, 1/2 कप गुनगुने पानी में भिगोई हुई", "2 बड़े चम्मच तिल का तेल", "1 छोटा चम्मच सरसों, 1/2 छोटा चम्मच मेथी दाना, 8 करी पत्ते", "1 प्याज़, कटी, 2 टमाटर, कटे", "1/2 छोटा चम्मच हल्दी", "1 छोटा चम्मच नमक, 3 1/2 कप पानी"],
        steps: ["मिलेट और तुअर दाल को 2 कप पानी, हल्दी और नमक के साथ प्रेशर कुकर में 3 सीटी दें, या ढककर नरम होने तक पकाएँ।", "इमली को भीगे पानी में निचोड़कर छानें।", "तिल का तेल गरम करें और सरसों, मेथी दाना व करी पत्ते चटकाएँ।", "प्याज़ नरम होने तक भूनें, फिर टमाटर डालकर गलने तक पकाएँ।", "सब्ज़ियाँ, सांभर मसाला, इमली का पानी और बचा 1 1/2 कप पानी डालकर 10 मिनट उबालें।", "नमक, पका मिलेट और दाल डालें और हल्के हाथ से मसलें।", "5 मिनट और पकाएँ जब तक सांभर गाढ़ा होकर चावल जैसी स्थिति में न आ जाए।", "पापड़ और थोड़े अचार के साथ गरम परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் பிரவுன்டாப் சிறுதானியம் (கோர்லே), கழுவியது", "1/2 கப் துவரம் பருப்பு, கழுவியது", "1 கப் கலந்த காய்கறிகள் (முருங்கைக்காய், கத்திரிக்காய், வெண்டைக்காய்), நறுக்கியது", "1 டேபிள்ஸ்பூன் சாம்பார் பொடி", "எலுமிச்சை அளவு புளி, 1/2 கப் வெதுவெதுப்பான தண்ணீரில் ஊறவைத்தது", "2 டேபிள்ஸ்பூன் நல்லெண்ணெய்", "1 டீஸ்பூன் கடுகு, 1/2 டீஸ்பூன் வெந்தயம், 8 கறிவேப்பிலை", "1 வெங்காயம், நறுக்கியது, 2 தக்காளி, நறுக்கியது", "1/2 டீஸ்பூன் மஞ்சள் தூள்", "1 டீஸ்பூன் உப்பு, 3 1/2 கப் தண்ணீர்"],
        steps: ["சிறுதானியம், துவரம் பருப்பை 2 கப் தண்ணீர், மஞ்சள், சிறிது உப்புடன் பிரஷர் குக்கரில் 3 விசில் வைக்கவும், அல்லது மூடி மென்மையாகும் வரை வேகவிடவும்.", "புளியை ஊறிய தண்ணீரில் பிழிந்து வடிகட்டவும்.", "நல்லெண்ணெயை சூடாக்கி கடுகு, வெந்தயம், கறிவேப்பிலை தாளிக்கவும்.", "வெங்காயம் மென்மையாக வதக்கி, பின்னர் தக்காளி சேர்த்து குழையும் வரை வேகவிடவும்.", "காய்கறிகள், சாம்பார் பொடி, புளித் தண்ணீர், மீதி 1 1/2 கப் தண்ணீர் சேர்த்து 10 நிமிடம் கொதிக்க விடவும்.", "உப்பு, வெந்த தானியம், பருப்பை சேர்த்து லேசாக மசிக்கவும்.", "சாம்பார் சாதம் பதத்திற்கு கெட்டியாகும் வரை மேலும் 5 நிமிடம் வேகவிடவும்.", "அப்பளம், ஊறுகாயுடன் சூடாக பரிமாறவும்."],
      },
    },
    "browntop-millet-52": {
      hi: {
        ingredients: ["4 मध्यम गाजर, कसी हुई", "1/4 कप ब्राउनटॉप मिलेट का आटा (कोर्ले का आटा)", "2 बड़े चम्मच घी", "2 कप फुल-क्रीम दूध", "1/2 कप चीनी", "1/4 छोटा चम्मच इलायची पाउडर", "1 बड़ा चम्मच कटे बादाम", "1 बड़ा चम्मच कटे पिस्ते", "2 बड़े चम्मच घी, ऊपर से डालने के लिए"],
        steps: ["भारी बर्तन में 2 बड़े चम्मच घी गरम करके मिलेट का आटा धीमी आँच पर 3 मिनट भूनें जब तक खुशबू न आए, फिर अलग रखें।", "उसी बर्तन में थोड़ा घी डालकर कसी गाजर 5 मिनट नरम होने तक भूनें।", "दूध डालकर मध्यम आँच पर चलाते हुए पकाएँ जब तक गाजर दूध सोख ले और मिश्रण गाढ़ा हो जाए, लगभग 20 मिनट।", "भुना आटा डालकर 3 मिनट चलाएँ ताकि गुठलियाँ न रहें।", "चीनी और इलायची डालकर 5 मिनट और पकाएँ जब तक हलवा बर्तन छोड़ने न लगे।", "ऊपर से बचा घी डालें और आधे मेवे मिलाएँ।", "बचे मेवों से सजाकर गरम परोसें।"],
      },
      ta: {
        ingredients: ["4 நடுத்தர கேரட், துருவியது", "1/4 கப் பிரவுன்டாப் சிறுதானிய மாவு (கோர்லே மாவு)", "2 டேபிள்ஸ்பூன் நெய்", "2 கப் முழு பால்", "1/2 கப் சர்க்கரை", "1/4 டீஸ்பூன் ஏலக்காய் தூள்", "1 டேபிள்ஸ்பூன் நறுக்கிய பாதாம்", "1 டேபிள்ஸ்பூன் நறுக்கிய பிஸ்தா", "2 டேபிள்ஸ்பூன் நெய், மேலே ஊற்ற"],
        steps: ["கனமான பாத்திரத்தில் 2 டேபிள்ஸ்பூன் நெய் சூடாக்கி சிறுதானிய மாவை மெல்லிய தீயில் 3 நிமிடம் மணம் வரும் வரை வறுத்து தனியாக வைக்கவும்.", "அதே பாத்திரத்தில் சிறிது நெய் சேர்த்து துருவிய கேரட்டை 5 நிமிடம் மென்மையாகும் வரை வதக்கவும்.", "பால் ஊற்றி நடுத்தர தீயில் கிளறி, கேரட் பாலை உறிஞ்சி கலவை கெட்டியாகும் வரை சுமார் 20 நிமிடம் வேகவிடவும்.", "வறுத்த மாவை சேர்த்து, கட்டி இல்லாமல் 3 நிமிடம் கிளறவும்.", "சர்க்கரை, ஏலக்காய் சேர்த்து பாத்திரத்தின் ஓரத்தில் இருந்து பிரியும் வரை மேலும் 5 நிமிடம் வேகவிடவும்.", "மீதி நெய்யை ஊற்றி, பாதி கொட்டைகளை கலக்கவும்.", "மீதி கொட்டைகளால் அலங்கரித்து சூடாக பரிமாறவும்."],
      },
    },
    "browntop-millet-53": {
      hi: {
        ingredients: ["1 कप ब्राउनटॉप मिलेट का आटा (कोर्ले का आटा)", "1/2 कप गेहूँ का आटा, बेलने के लिए और अतिरिक्त", "1/2 छोटा चम्मच नमक", "2 बड़े चम्मच घी, और पकाने के लिए 4 बड़े चम्मच", "लगभग 3/4 कप गुनगुना पानी, ज़रूरत अनुसार", "250 ग्राम मटन कीमा", "1 प्याज़, बारीक कटा", "1 बड़ा चम्मच अदरक-लहसुन पेस्ट", "1 छोटा चम्मच लाल मिर्च पाउडर, 1 छोटा चम्मच गरम मसाला, 1/2 छोटा चम्मच हल्दी", "2 बड़े चम्मच हरा धनिया, कटा"],
        steps: ["दोनों आटे और नमक को मिलाकर 2 बड़े चम्मच घी मसलें, फिर धीरे-धीरे गुनगुना पानी डालकर नरम, चिकना आटा गूँधें।", "आटे को ढककर 20 मिनट आराम दें।", "2 बड़े चम्मच घी में प्याज़ सुनहरा होने तक भूनें, फिर अदरक-लहसुन पेस्ट डालें।", "मटन कीमा, हल्दी और मिर्च पाउडर डालकर मध्यम आँच पर 15 मिनट पकाएँ जब तक कीमा भूरा और सूखा न हो जाए।", "गरम मसाला और धनिया मिलाएँ, फिर भरावन को पूरी तरह ठंडा होने दें।", "आटे को 6 गोलों में बाँटें, हर गोले को छोटी पूड़ी बनाकर बीच में भरावन रखें और किनारे बंद करें।", "भरे गोलों को सूखे आटे से हल्के हाथ से लगभग 6 इंच के पराठे बेलें।", "गरम तवे पर घी लगाकर दोनों तरफ सुनहरे और कुरकुरे होने तक सेंकें।"],
      },
      ta: {
        ingredients: ["1 கப் பிரவுன்டாப் சிறுதானிய மாவு (கோர்லே மாவு)", "1/2 கப் கோதுமை மாவு, தூவுவதற்கு கூடுதலாக", "1/2 டீஸ்பூன் உப்பு", "2 டேபிள்ஸ்பூன் நெய், மற்றும் சமைக்க 4 டேபிள்ஸ்பூன்", "சுமார் 3/4 கப் வெதுவெதுப்பான தண்ணீர், தேவைக்கேற்ப", "250 கிராம் ஆட்டுக்கறி கீமா", "1 வெங்காயம், பொடியாக நறுக்கியது", "1 டேபிள்ஸ்பூன் இஞ்சி-பூண்டு விழுது", "1 டீஸ்பூன் மிளகாய்த் தூள், 1 டீஸ்பூன் கரம் மசாலா, 1/2 டீஸ்பூன் மஞ்சள் தூள்", "2 டேபிள்ஸ்பூன் கொத்தமல்லி இலை, நறுக்கியது"],
        steps: ["இரு மாவுகள், உப்பை கலந்து 2 டேபிள்ஸ்பூன் நெய் தேய்த்து, படிப்படியாக வெதுவெதுப்பான தண்ணீர் சேர்த்து மென்மையான மாவாக பிசையவும்.", "மாவை மூடி 20 நிமிடம் ஓய்வு கொடுக்கவும்.", "2 டேபிள்ஸ்பூன் நெய்யில் வெங்காயத்தை பொன்னிறமாக வதக்கி, இஞ்சி-பூண்டு விழுது சேர்க்கவும்.", "ஆட்டுக்கறி கீமா, மஞ்சள், மிளகாய்த் தூள் சேர்த்து மிதமான தீயில் 15 நிமிடம் கீமா பழுப்பாகவும் உலர்ந்தும் வரும் வரை வேகவிடவும்.", "கரம் மசாலா, கொத்தமல்லி சேர்த்து, பூரணம் முழுவதுமாக ஆறும் வரை வைக்கவும்.", "மாவை 6 உருண்டைகளாக்கி, ஒவ்வொன்றையும் சிறு வட்டமாக தட்டி, நடுவில் பூரணம் வைத்து ஓரங்களை மூடவும்.", "நிரப்பிய உருண்டைகளை உலர்ந்த மாவில் மெதுவாக 6 அங்குல பராத்தாவாக தேய்க்கவும்.", "சூடான தவாவில் இரு பக்கமும் நெய் தடவி பொன்னிறமாகவும் மொறுமொறுப்பாகவும் சுடவும்."],
      },
    },
    "browntop-millet-54": {
      hi: {
        ingredients: ["1 कप ब्राउनटॉप मिलेट, 4 घंटे भिगोया हुआ", "1/2 कप साबुत मूँग, 4 घंटे भिगोई हुई", "1 हरी मिर्च, 1 छोटा चम्मच अदरक, कसा हुआ", "1 छोटा चम्मच जीरा", "1 छोटा चम्मच नमक", "1/2 कप पानी, पीसने के लिए", "1 छोटी प्याज़, बारीक कटी", "2 बड़े चम्मच हरा धनिया, कटा", "3 बड़े चम्मच तिल का तेल या घी, पेसरट्टू पकाने के लिए"],
        steps: ["भीगे मिलेट और मूँग को निथारकर हरी मिर्च, अदरक और पानी के साथ चिकना, गाढ़ा घोल बनने तक पीसें।", "नमक और जीरा मिलाकर घोल को 10 मिनट रखें।", "तवे को मध्यम आँच पर गरम करके उस पर तेल की कुछ बूँदें छिड़कें।", "एक कलछी घोल तवे पर डालें और कलछी के पिछले हिस्से से गोल फैलाएँ।", "ऊपर से प्याज़ और धनिया छिड़कें और किनारों पर थोड़ा तेल डालें।", "2-3 मिनट नीचे से सुनहरा और ऊपर से सेट होने तक पकाएँ।", "सावधानी से पलटें और दूसरी तरफ 1 मिनट सुनहरा होने तक पकाएँ।", "अदरक की चटनी और उपमा के साथ गरम परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் பிரவுன்டாப் சிறுதானியம், 4 மணி நேரம் ஊறவைத்தது", "1/2 கப் முழு பச்சைப் பயறு, 4 மணி நேரம் ஊறவைத்தது", "1 பச்சை மிளகாய், 1 டீஸ்பூன் இஞ்சி, துருவியது", "1 டீஸ்பூன் சீரகம்", "1 டீஸ்பூன் உப்பு", "1/2 கப் தண்ணீர், அரைக்க", "1 சிறிய வெங்காயம், பொடியாக நறுக்கியது", "2 டேபிள்ஸ்பூன் கொத்தமல்லி இலை, நறுக்கியது", "3 டேபிள்ஸ்பூன் நல்லெண்ணெய் அல்லது நெய், பெசரட்டு சுட"],
        steps: ["ஊறிய தானியத்தையும் பயறையும் வடிகட்டி, பச்சை மிளகாய், இஞ்சி, தண்ணீருடன் சேர்த்து மென்மையான, கெட்டியான மாவாக அரைக்கவும்.", "உப்பு, சீரகம் சேர்த்து மாவை 10 நிமிடம் வைக்கவும்.", "தவாவை மிதமான தீயில் சூடாக்கி அதன் மேல் சில துளி எண்ணெய் தெளிக்கவும்.", "ஒரு கரண்டி மாவை தவாவில் ஊற்றி கரண்டியின் பின்புறத்தால் வட்டமாக பரப்பவும்.", "மேலே வெங்காயம், கொத்தமல்லி தூவி ஓரங்களில் சிறிது எண்ணெய் விடவும்.", "அடிப்பகுதி பொன்னிறமாகி மேல்பகுதி கெட்டியாகும் வரை 2-3 நிமிடம் வேகவிடவும்.", "கவனமாக திருப்பி மறுபக்கம் 1 நிமிடம் பொன்னிறமாகும் வரை வேகவிடவும்.", "இஞ்சி சட்னி மற்றும் உப்புமாவுடன் சூடாக பரிமாறவும்."],
      },
    },
    "browntop-millet-55": {
      hi: {
        ingredients: ["1/2 कप बेसन", "1/4 कप ब्राउनटॉप मिलेट का आटा (कोर्ले का आटा), सूखा भुना हुआ", "1 कप चीनी", "1/2 कप पानी", "1 कप घी, गुनगुना किया हुआ", "1/4 छोटा चम्मच इलायची पाउडर", "1 बड़ा चम्मच दूध, चिकनाहट के लिए", "1 बड़ा चम्मच कटे काजू, सजाने के लिए", "1 छोटा चम्मच घी, थाली चिकनी करने के लिए"],
        steps: ["बेसन और भुना मिलेट आटा एक कटोरी में मिलाकर छान लें।", "चीनी को पानी के साथ भारी बर्तन में मध्यम आँच पर घोलें और एक-तार की चाशनी बनने तक उबालें।", "आँच धीमी करें, आटे का मिश्रण एक-एक चम्मच डालें और लगातार चलाते रहें ताकि गुठलियाँ न बनें।", "गुनगुना घी धीरे-धीरे डालते हुए चलाएँ जब तक मिश्रण चमकदार न हो जाए और बर्तन के किनारे छोड़ने न लगे।", "इलायची और दूध डालकर अच्छी तरह मिलाएँ।", "थाली में घी चुपड़ें, मिश्रण डालें और समान फैलाएँ।", "ऊपर से काजू बिखेरें, 10 मिनट ठंडा होने दें और जमने पर टुकड़ों में काटें।"],
      },
      ta: {
        ingredients: ["1/2 கப் கடலை மாவு", "1/4 கப் பிரவுன்டாப் சிறுதானிய மாவு (கோர்லே மாவு), உலர்வாக வறுத்தது", "1 கப் சர்க்கரை", "1/2 கப் தண்ணீர்", "1 கப் நெய், சூடாக்கியது", "1/4 டீஸ்பூன் ஏலக்காய் தூள்", "1 டேபிள்ஸ்பூன் பால், மென்மையாக்க", "1 டேபிள்ஸ்பூன் நறுக்கிய முந்திரி, அலங்கரிக்க", "1 டீஸ்பூன் நெய், தட்டுக்கு தடவ"],
        steps: ["கடலை மாவு, வறுத்த சிறுதானிய மாவை ஒரு கிண்ணத்தில் கலந்து சலிக்கவும்.", "சர்க்கரையை தண்ணீருடன் கனமான பாத்திரத்தில் மிதமான தீயில் கரைத்து ஒரு கம்பிப் பாகு வரும் வரை கொதிக்க வைக்கவும்.", "தீயை குறைத்து, மாவுக் கலவையை ஒரு கரண்டியாக சேர்த்து கட்டி விழாமல் தொடர்ந்து கிளறவும்.", "சூடான நெய்யை சிறிது சிறிதாக ஊற்றி, பளபளப்பு வந்து பாத்திர ஓரத்தில் இருந்து விலகும் வரை கிளறவும்.", "ஏலக்காய், பால் சேர்த்து நன்கு கலக்கவும்.", "தட்டில் நெய் தடவி கலவையை ஊற்றி சமமாக பரப்பவும்.", "மேலே முந்திரி தூவி 10 நிமிடம் ஆறவைத்து, கெட்டியானதும் சதுரங்களாக வெட்டவும்."],
      },
    },
  },
  translations: {
    "browntop-millet-51": {
      hi: { title: "कोर्ले सांभर सादम", description: "ब्राउनटॉप मिलेट, तुअर दाल और मिली-जुली सब्ज़ियों से बना गाढ़े सांभर वाला एक-बर्तन भोजन, इमली और सांभर मसाले की खुशबू के साथ।" },
      ta: { title: "கோர்லே சாம்பார் சாதம்", description: "பிரவுன்டாப் சிறுதானியம், துவரம் பருப்பு, கலந்த காய்கறிகளுடன் புளி, சாம்பார் பொடி மணத்துடன் செய்த ஒரு பாத்திர சாம்பார் சாதம்." },
    },
    "browntop-millet-52": {
      hi: { title: "कोर्ले गाजर हलवा", description: "कसी गाजर, दूध और घी में भुने ब्राउनटॉप मिलेट के आटे से बना मीठा हलवा, इलायची और मेवों की खुशबू के साथ।" },
      ta: { title: "கோர்லே கேரட் அல்வா", description: "துருவிய கேரட், பால், நெய்யில் வறுத்த பிரவுன்டாப் சிறுதானிய மாவுடன் செய்த இனிப்பு அல்வா, ஏலக்காய், கொட்டைகள் மணத்துடன்." },
    },
    "browntop-millet-53": {
      hi: { title: "कोर्ले कीमा पराठा", description: "ब्राउनटॉप मिलेट और गेहूँ के आटे के परत वाले पराठे, मसालेदार मटन कीमा भरावन के साथ, उत्तर भारत का हार्दिक भोजन।" },
      ta: { title: "கோர்லே கீமா பராத்தா", description: "பிரவுன்டாப் சிறுதானிய மற்றும் கோதுமை மாவு பராத்தா, மசாலா ஆட்டுக்கறி கீமா பூரணத்துடன், வட இந்திய பாணி உணவு." },
    },
    "browntop-millet-54": {
      hi: { title: "कोर्ले पेसरट्टू", description: "ब्राउनटॉप मिलेट और हरी मूँग के घोल से बने पतले, हरे, प्रोटीन-भरे दोसे, अदरक चटनी और उपमा के साथ आंध्र प्रदेश का नाश्ता।" },
      ta: { title: "கோர்லே பெசரட்டு", description: "பிரவுன்டாப் சிறுதானிய மற்றும் பச்சைப் பயறு மாவில் செய்த மெல்லிய, புரதச்சத்து நிறைந்த பெசரட்டு, இஞ்சி சட்னி, உப்புமாவுடன்." },
    },
    "browntop-millet-55": {
      hi: { title: "कोर्ले मैसूर पाक", description: "बेसन और भुने ब्राउनटॉप मिलेट के आटे से घी और चीनी की चाशनी में बनी नरम-कुरकुरी मैसूर पाक, दक्षिण भारत की प्रसिद्ध मिठाई।" },
      ta: { title: "கோர்லே மைசூர் பாக்", description: "கடலை மாவு மற்றும் வறுத்த பிரவுன்டாப் சிறுதானிய மாவில் நெய், சர்க்கரை பாகில் செய்த மென்மையான மைசூர் பாக், தென்னிந்திய பிரபல இனிப்பு." },
    },
  },
  plate: {
    "browntop-millet-51": {
      kcal: 280, carbsG: 40, fibreG: 6, gi: 55,
      minerals: ["iron", "magnesium", "potassium"],
      raw: { kind: "raw", name: "Sliced onion and cucumber", how: "Slice onion and cucumber thinly and sprinkle with lemon juice and black salt." },
      sides: [
        { kind: "cooked", name: "Beans poriyal", how: "Stir-fry chopped beans with grated coconut, mustard seeds and curry leaves until just tender." },
        { kind: "cooked", name: "Radish sambar", how: "Simmer radish and toor dal with tamarind and sambar powder until thick and fragrant." },
      ],
    },
    "browntop-millet-52": {
      kcal: 300, carbsG: 38, fibreG: 3, gi: 62,
      minerals: ["calcium", "potassium", "magnesium"],
      raw: { kind: "raw", name: "Cucumber rounds", how: "Slice cucumber and sprinkle with a pinch of black salt." },
      sides: [
        { kind: "cooked", name: "Beans poriyal", how: "Stir-fry chopped beans with grated coconut, mustard seeds and curry leaves until just tender." },
        { kind: "cooked", name: "Pumpkin kootu", how: "Simmer pumpkin and moong dal with coconut and cumin, then temper with mustard seeds." },
      ],
    },
    "browntop-millet-53": {
      kcal: 420, carbsG: 34, fibreG: 4, gi: 60,
      minerals: ["iron", "zinc", "phosphorus"],
      raw: { kind: "raw", name: "Sliced onion and cucumber", how: "Slice onion and cucumber thinly and sprinkle with lemon juice and black salt." },
      sides: [
        { kind: "cooked", name: "Palak sabzi", how: "Cook spinach with onion, garlic and cumin until soft and mildly spiced." },
        { kind: "cooked", name: "Carrot kootu", how: "Simmer grated carrot and toor dal with coconut and cumin, then temper with mustard seeds." },
      ],
    },
    "browntop-millet-54": {
      kcal: 250, carbsG: 36, fibreG: 6, gi: 52,
      minerals: ["iron", "magnesium", "zinc"],
      raw: { kind: "raw", name: "Sliced cucumber and onion", how: "Slice cucumber and onion thinly and toss with lemon juice and a pinch of salt." },
      sides: [
        { kind: "cooked", name: "Ridge gourd poriyal", how: "Stir-fry sliced ridge gourd with mustard seeds, curry leaves and grated coconut until tender." },
        { kind: "cooked", name: "Cabbage poriyal", how: "Sauté shredded cabbage with mustard seeds, green chilli and grated coconut until tender." },
      ],
    },
    "browntop-millet-55": {
      kcal: 420, carbsG: 40, fibreG: 2, gi: 68,
      minerals: ["calcium", "iron", "magnesium"],
      raw: { kind: "raw", name: "Cucumber rounds", how: "Slice cucumber into thin rounds and sprinkle with black salt." },
      sides: [
        { kind: "cooked", name: "Beetroot poriyal", how: "Sauté grated beetroot with mustard seeds, curry leaves and a little grated coconut until tender." },
        { kind: "cooked", name: "Pumpkin kootu", how: "Simmer pumpkin and moong dal with coconut and cumin, then temper with mustard seeds." },
      ],
    },
  },
};
