import type { Recipe } from "@/types/recipe";
import type { LineContent } from "@/data/i18n-content/sorghum";
import type { PlateInfo } from "@/types/plate";

/** proso-millet recipes proso-millet-51 to proso-millet-55 with full English, Hindi and Tamil content and plate data. */
export const PROSO_MILLET_BATCH_8: {
  recipes: Recipe[];
  content: Record<string, { hi: LineContent; ta: LineContent }>;
  translations: Record<string, { hi: { title: string; description: string }; ta: { title: string; description: string } }>;
  plate: Record<string, PlateInfo>;
} = {
  recipes: [
    {
      id: "proso-millet-51",
      title: "Panivaragu Masala Dosa",
      milletId: "proso-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Breakfast",
      description: "Crisp, golden dosas made from a fermented proso millet and urad dal batter, filled with a spiced potato masala and served with chutney and sambar.",
      servings: 4,
      prepTimeMinutes: 25,
      cookTimeMinutes: 30,
      difficulty: "Medium",
      ingredients: [
        "1 cup proso millet (panivaragu), soaked for 4 hours",
        "1/2 cup whole urad dal, soaked for 4 hours, with 1/2 tsp fenugreek seeds",
        "1 tsp salt",
        "1 cup water, for grinding",
        "2 tbsp sesame oil or ghee, for cooking the dosas",
        "2 medium potatoes, boiled and mashed",
        "1 tbsp sesame oil, for the masala",
        "1 onion, sliced, 1 green chilli, chopped, 1 tsp ginger, grated, 1/2 tsp turmeric",
        "1 tsp mustard seeds, 8 curry leaves",
        "1 tbsp chopped coriander leaves",
      ],
      steps: [
        "Grind the soaked millet with a little water to a fine batter, then grind the urad dal and fenugreek seeds into a smooth, fluffy batter.",
        "Combine both batters with the salt, cover and ferment in a warm place for 8 hours until doubled and bubbly.",
        "For the masala, heat the sesame oil and splutter the mustard seeds with the curry leaves.",
        "Add the onion, green chilli and ginger, fry until golden, then add the turmeric and mashed potatoes and mix well.",
        "Heat a flat tawa over medium-high heat and grease it with the remaining oil.",
        "Pour a ladleful of batter and spread it in a thin circle, drizzling oil around the edge.",
        "Cook until golden and crisp, then place a spoonful of masala in the centre and fold.",
        "Serve immediately with coconut chutney and sambar, garnished with coriander.",
      ],
    },
    {
      id: "proso-millet-52",
      title: "Panivaragu Badam Halwa",
      milletId: "proso-millet",
      region: "North Indian",
      diet: "Vegetarian",
      course: "Dessert",
      description: "A rich, slow-cooked halwa of ground almonds, proso millet and ghee, sweetened with sugar and perfumed with cardamom and saffron.",
      servings: 6,
      prepTimeMinutes: 15,
      cookTimeMinutes: 35,
      difficulty: "Medium",
      ingredients: [
        "1/2 cup proso millet flour (panivaragu atta)",
        "1/2 cup almonds, soaked and peeled, ground to a paste with 1/4 cup milk",
        "1/2 cup ghee, divided",
        "3/4 cup sugar",
        "2 cups milk",
        "1/4 tsp cardamom powder, a pinch of saffron",
        "2 tbsp slivered almonds and 1 tbsp pistachios, for garnish",
      ],
      steps: [
        "Warm the milk in a small pan and soak the saffron in 2 tbsp of it.",
        "Heat 3 tbsp ghee in a heavy pan and roast the millet flour on low heat for 6-8 minutes until golden and fragrant.",
        "Add the almond paste and 5 tbsp of the remaining ghee, and stir for 3 minutes until the mixture sizzles and smells rich.",
        "Pour in the warm milk gradually, stirring continuously to keep the halwa smooth.",
        "Cook over low heat, stirring, for 10 minutes until the mixture thickens.",
        "Add the sugar, cardamom and saffron milk, and cook for 5-7 minutes more until the halwa pulls away from the pan.",
        "Garnish with slivered almonds and pistachios and serve warm.",
      ],
    },
    {
      id: "proso-millet-53",
      title: "Panivaragu Prawn Curry",
      milletId: "proso-millet",
      region: "South Indian",
      diet: "Non-Vegetarian",
      course: "Main Course",
      description: "Prawns simmered in a spiced onion and tomato gravy with coconut milk, a coastal Tamil curry that pairs well with soft millet rice.",
      servings: 4,
      prepTimeMinutes: 15,
      cookTimeMinutes: 25,
      difficulty: "Medium",
      ingredients: [
        "400 g prawns, cleaned and deveined",
        "2 cups cooked proso millet (panivaragu), to serve",
        "2 tbsp sesame oil (gingelly oil)",
        "1 tsp mustard seeds, 1 tsp fennel seeds, 8 curry leaves",
        "1 onion, finely chopped",
        "2 tomatoes, chopped",
        "1 tsp ginger-garlic paste",
        "1 tsp turmeric powder, 1 tbsp red chilli powder, 1 tsp coriander powder, 1/2 tsp garam masala",
        "1/2 cup thin coconut milk",
        "1 tsp tamarind paste, with 1/2 cup water",
        "1 tsp salt",
      ],
      steps: [
        "Marinate the prawns with the turmeric, half the chilli powder and half the salt for 10 minutes.",
        "Heat the sesame oil in a heavy pan and splutter the mustard and fennel seeds with the curry leaves.",
        "Add the onion and fry until light golden, about 5 minutes.",
        "Stir in the ginger-garlic paste, then add the tomatoes and cook until soft and pulpy.",
        "Add the remaining chilli, coriander and garam masala, and fry for 1 minute.",
        "Pour in the tamarind with the water, simmer for 5 minutes, then stir in the coconut milk and the remaining salt.",
        "Add the prawns and cook for 4-5 minutes until they turn pink and opaque, taking care not to overcook them.",
        "Serve hot over steamed proso millet.",
      ],
    },
    {
      id: "proso-millet-54",
      title: "Panivaragu Poha",
      milletId: "proso-millet",
      region: "West Indian",
      diet: "Vegetarian",
      course: "Breakfast",
      description: "A light Maharashtrian-style breakfast of roasted proso millet grits tempered with mustard, curry leaves and peanuts, finished with lemon and coconut.",
      servings: 4,
      prepTimeMinutes: 10,
      cookTimeMinutes: 15,
      difficulty: "Easy",
      ingredients: [
        "1 1/2 cups proso millet grits, coarsely crushed",
        "2 tbsp groundnut oil",
        "1 tsp mustard seeds, 1 tsp cumin seeds",
        "2 tbsp roasted peanuts",
        "1 small onion, chopped",
        "2 green chillies, chopped, 8 curry leaves",
        "1/2 tsp turmeric powder",
        "1 tsp salt, 1 tsp sugar",
        "2 1/2 cups water, 2 tbsp lemon juice",
        "2 tbsp grated fresh coconut and chopped coriander, for garnish",
      ],
      steps: [
        "Dry roast the crushed millet in a pan on low heat for 4 minutes until it smells nutty, then set aside.",
        "Heat the groundnut oil in a pan and splutter the mustard and cumin seeds.",
        "Add the peanuts, green chillies, curry leaves and onion, and fry until the onion softens.",
        "Stir in the turmeric, then add the water, salt and sugar and bring it to a boil.",
        "Add the roasted millet slowly, stirring to prevent lumps, and cover on low heat for 5 minutes.",
        "Fluff with a fork, sprinkle the lemon juice, and cover for 2 minutes more.",
        "Garnish with coconut and coriander and serve hot.",
      ],
    },
    {
      id: "proso-millet-55",
      title: "Panivaragu Koozh",
      milletId: "proso-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Drink",
      description: "A cooling, lightly fermented millet porridge drink from Tamil Nadu, made with buttermilk, shallots and green chilli and served chilled in summer.",
      servings: 4,
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      difficulty: "Easy",
      ingredients: [
        "1/2 cup proso millet, cooked soft and cooled",
        "3 cups water, for cooking",
        "1 cup buttermilk, chilled",
        "1 tsp salt",
        "2 shallots, finely chopped",
        "1 green chilli, finely chopped, 1 tsp ginger, grated",
        "1 tsp mustard seeds, 8 curry leaves",
        "1 tsp sesame oil, for tempering",
      ],
      steps: [
        "Cook the millet in 3 cups water for 20 minutes until very soft, then cool to room temperature.",
        "Mash the cooked millet lightly, cover it and leave it in a warm place for 8 hours so it ferments slightly and turns sour.",
        "Heat the sesame oil, splutter the mustard seeds with the curry leaves, then fry the shallots, ginger and chilli until golden.",
        "Add the tempering to the fermented millet and stir well.",
        "Whisk in the chilled buttermilk and salt until smooth and thin enough to drink.",
        "Chill the koozh for 30 minutes before serving.",
        "Serve cold in small glasses or bowls in the afternoon.",
      ],
    },
  ],
  content: {
    "proso-millet-51": {
      hi: {
        ingredients: ["1 कप पनिवरागु (प्रोसो मिलेट), 4 घंटे भिगोया हुआ", "1/2 कप साबुत उड़द दाल, 4 घंटे भिगोई हुई, 1/2 छोटा चम्मच मेथी के दाने के साथ", "1 छोटा चम्मच नमक", "1 कप पानी, पीसने के लिए", "2 बड़े चम्मच तिल का तेल या घी, डोसा सेंकने के लिए", "2 मध्यम आलू, उबले और मसले हुए", "1 बड़ा चम्मच तिल का तेल, मसाले के लिए", "1 प्याज़, स्लाइस की हुई, 1 हरी मिर्च, कटी, 1 छोटा चम्मच अदरक, कसा हुआ, 1/2 छोटा चम्मच हल्दी", "1 छोटा चम्मच सरसों, 8 करी पत्ते", "1 बड़ा चम्मच कटा हरा धनिया"],
        steps: ["भीगे मिलेट को थोड़े पानी के साथ बारीक घोल बनने तक पीसें, फिर उड़द दाल और मेथी को चिकना, फूला हुआ घोल बनने तक पीसें।", "दोनों घोल नमक के साथ मिलाकर ढककर गरम जगह पर 8 घंटे रखें जब तक दुगना और बुलबुलेदार न हो जाए।", "मसाले के लिए तिल का तेल गरम करें और सरसों व करी पत्ते चटकाएँ।", "प्याज़, हरी मिर्च और अदरक सुनहरे होने तक भूनें, फिर हल्दी और मसले आलू डालकर अच्छी तरह मिलाएँ।", "भारी तवे को मध्यम-तेज़ आँच पर गरम करें और बचे तेल से चिकना करें।", "एक कलछी घोल डालकर पतला गोल फैलाएँ और किनारों पर थोड़ा तेल डालें।", "सुनहरा और कुरकुरा होने तक सेंकें, फिर बीच में मसाला रखकर मोड़ें।", "तुरंत नारियल की चटनी और सांभर के साथ, हरे धनिये से सजाकर परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் பனிவரகு, 4 மணி நேரம் ஊறவைத்தது", "1/2 கப் முழு உளுந்து, 4 மணி நேரம் ஊறவைத்தது, 1/2 டீஸ்பூன் வெந்தயத்துடன்", "1 டீஸ்பூன் உப்பு", "1 கப் தண்ணீர், அரைக்க", "2 டேபிள்ஸ்பூன் நல்லெண்ணெய் அல்லது நெய், தோசை சுட", "2 நடுத்தர உருளைக்கிழங்கு, வேகவைத்து மசித்தது", "1 டேபிள்ஸ்பூன் நல்லெண்ணெய், மசாலாவுக்கு", "1 வெங்காயம் மெல்லியதாக நறுக்கியது, 1 பச்சை மிளகாய் நறுக்கியது, 1 டீஸ்பூன் இஞ்சி துருவியது, 1/2 டீஸ்பூன் மஞ்சள் தூள்", "1 டீஸ்பூன் கடுகு, 8 கறிவேப்பிலை", "1 டேபிள்ஸ்பூன் கொத்தமல்லி இலை, நறுக்கியது"],
        steps: ["ஊறிய தானியத்தை சிறிது தண்ணீருடன் மெல்லிய மாவாக அரைக்கவும்; பின்னர் உளுந்து, வெந்தயத்தை மென்மையாகவும் பஞ்சு போலவும் அரைக்கவும்.", "இரு மாவையும் உப்புடன் கலந்து மூடி, வெதுவெதுப்பான இடத்தில் 8 மணி நேரம் இருமடங்காகி குமிழியிடும் வரை புளிக்க விடவும்.", "மசாலாவுக்கு நல்லெண்ணெய் சூடாக்கி கடுகு, கறிவேப்பிலையை தாளிக்கவும்.", "வெங்காயம், பச்சை மிளகாய், இஞ்சி பொன்னிறமாக வதக்கி, பின்னர் மஞ்சள், மசித்த உருளைக்கிழங்கு சேர்த்து நன்கு கலக்கவும்.", "கனமான தவாவை நடுத்தர-அதிக தீயில் சூடாக்கி மீதி எண்ணெயால் தடவவும்.", "ஒரு கரண்டி மாவை ஊற்றி மெல்லிய வட்டமாக பரப்பி, ஓரத்தில் எண்ணெய் விடவும்.", "பொன்னிறமாக மொறுமொறுப்பாக வெந்ததும், நடுவில் ஒரு கரண்டி மசாலாவை வைத்து மடிக்கவும்.", "உடனே தேங்காய் சட்னி, சாம்பாருடன், கொத்தமல்லியால் அலங்கரித்து பரிமாறவும்."],
      },
    },
    "proso-millet-52": {
      hi: {
        ingredients: ["1/2 कप पनिवरागु (प्रोसो मिलेट) का आटा", "1/2 कप बादाम, भिगोकर छिले हुए, 1/4 कप दूध के साथ पेस्ट बनाया हुआ", "1/2 कप घी, बाँटा हुआ", "3/4 कप चीनी", "2 कप दूध", "1/4 छोटा चम्मच इलायची पाउडर, केसर की एक चुटकी", "2 बड़े चम्मच बादाम के लच्छे और 1 बड़ा चम्मच पिस्ता, सजाने के लिए"],
        steps: ["दूध को छोटी कढ़ाई में गरम करें और उसमें से 2 बड़े चम्मच दूध में केसर भिगोएँ।", "भारी बर्तन में 3 बड़े चम्मच घी गरम करके मिलेट का आटा धीमी आँच पर 6-8 मिनट सुनहरा और खुशबूदार होने तक भूनें।", "बादाम का पेस्ट और बचे घी में से 5 बड़े चम्मच डालें और 3 मिनट चलाएँ जब तक मिश्रण से सुगंध न आने लगे।", "गुनगुना दूध धीरे-धीरे डालें और लगातार चलाते रहें ताकि हलवा चिकना रहे।", "धीमी आँच पर चलाते हुए 10 मिनट पकाएँ जब तक मिश्रण गाढ़ा न हो जाए।", "चीनी, इलायची और केसर वाला दूध डालकर 5-7 मिनट और पकाएँ जब तक हलवा बर्तन छोड़ने न लगे।", "बादाम के लच्छे और पिस्ते से सजाकर गरम परोसें।"],
      },
      ta: {
        ingredients: ["1/2 கப் பனிவரகு மாவு", "1/2 கப் பாதாம், ஊறவைத்து தோல் நீக்கி, 1/4 கப் பாலுடன் அரைத்தது", "1/2 கப் நெய், பிரித்தது", "3/4 கப் சர்க்கரை", "2 கப் பால்", "1/4 டீஸ்பூன் ஏலக்காய் தூள், ஒரு சிட்டிகை குங்குமப்பூ", "2 டேபிள்ஸ்பூன் பாதாம் துண்டுகள் மற்றும் 1 டேபிள்ஸ்பூன் பிஸ்தா, அலங்கரிக்க"],
        steps: ["பாலை ஒரு சிறிய பாத்திரத்தில் சூடாக்கி, அதில் 2 டேபிள்ஸ்பூன் பாலில் குங்குமப்பூவை ஊறவைக்கவும்.", "கனமான பாத்திரத்தில் 3 டேபிள்ஸ்பூன் நெய் சூடாக்கி பனிவரகு மாவை மெல்லிய தீயில் 6-8 நிமிடம் பொன்னிறமாகவும் மணமாகவும் வறுக்கவும்.", "பாதாம் விழுது, மீதி நெய்யில் 5 டேபிள்ஸ்பூன் சேர்த்து 3 நிமிடம் கிளறவும், வாசனை வரும் வரை.", "சூடான பாலை சிறிது சிறிதாக ஊற்றி ஹல்வா மென்மையாக இருக்க தொடர்ந்து கிளறவும்.", "மெல்லிய தீயில் கிளறிக் கொண்டே 10 நிமிடம் வேகவிட்டு கலவை கெட்டியாக்கவும்.", "சர்க்கரை, ஏலக்காய், குங்குமப்பூ பாலைச் சேர்த்து 5-7 நிமிடம் வேகவிடவும், பாத்திரத்தில் இருந்து விலகும் வரை.", "பாதாம் துண்டுகள், பிஸ்தாவால் அலங்கரித்து சூடாக பரிமாறவும்."],
      },
    },
    "proso-millet-53": {
      hi: {
        ingredients: ["400 ग्राम झींगा, साफ़ करके नस निकाली हुई", "2 कप पका पनिवरागु (प्रोसो मिलेट), परोसने के लिए", "2 बड़े चम्मच तिल का तेल", "1 छोटा चम्मच सरसों, 1 छोटा चम्मच सौंफ, 8 करी पत्ते", "1 छोटी प्याज़, बारीक कटी", "2 टमाटर, कटे हुए", "1 छोटा चम्मच अदरक-लहसुन पेस्ट", "1 छोटा चम्मच हल्दी, 1 बड़ा चम्मच लाल मिर्च पाउडर, 1 छोटा चम्मच धनिया पाउडर, 1/2 छोटा चम्मच गरम मसाला", "1/2 कप पतला नारियल का दूध", "1 छोटा चम्मच इमली का पेस्ट और 1/2 कप पानी", "1 छोटा चम्मच नमक"],
        steps: ["झींगे को हल्दी, आधी मिर्च पाउडर और आधा नमक लगाकर 10 मिनट मैरिनेट करें।", "भारी कढ़ाई में तिल का तेल गरम करें और सरसों, सौंफ और करी पत्ते चटकाएँ।", "प्याज़ हल्का सुनहरा होने तक 5 मिनट भूनें।", "अदरक-लहसुन पेस्ट डालें, फिर टमाटर डालकर गलने तक पकाएँ।", "बची मिर्च, धनिया और गरम मसाला डालकर 1 मिनट भूनें।", "इमली और पानी डालकर 5 मिनट उबालें, फिर नारियल का दूध और बचा नमक मिलाएँ।", "झींगे डालकर 4-5 मिनट पकाएँ जब तक वे गुलाबी और अपारदर्शी न हो जाएँ, ज़्यादा न पकाएँ।", "भाप में पके पनिवरागु पर गरम परोसें।"],
      },
      ta: {
        ingredients: ["400 கிராம் இறால், சுத்தம் செய்து நரம்பு நீக்கியது", "2 கப் வேகவைத்த பனிவரகு, பரிமாற", "2 டேபிள்ஸ்பூன் நல்லெண்ணெய்", "1 டீஸ்பூன் கடுகு, 1 டீஸ்பூன் சோம்பு, 8 கறிவேப்பிலை", "1 சிறிய வெங்காயம், பொடியாக நறுக்கியது", "2 தக்காளி, நறுக்கியது", "1 டீஸ்பூன் இஞ்சி-பூண்டு விழுது", "1 டீஸ்பூன் மஞ்சள் தூள், 1 டேபிள்ஸ்பூன் மிளகாய்த் தூள், 1 டீஸ்பூன் மல்லித் தூள், 1/2 டீஸ்பூன் கரம் மசாலா", "1/2 கப் மெல்லிய தேங்காய்ப் பால்", "1 டீஸ்பூன் புளி விழுது மற்றும் 1/2 கப் தண்ணீர்", "1 டீஸ்பூன் உப்பு"],
        steps: ["இறாலை மஞ்சள், பாதி மிளகாய்த் தூள், பாதி உப்புடன் 10 நிமிடம் ஊறவைக்கவும்.", "கனமான பாத்திரத்தில் நல்லெண்ணெயை சூடாக்கி கடுகு, சோம்பு, கறிவேப்பிலை தாளிக்கவும்.", "வெங்காயத்தை லேசாக பொன்னிறமாகும் வரை சுமார் 5 நிமிடம் வதக்கவும்.", "இஞ்சி-பூண்டு விழுது சேர்த்து, பின்னர் தக்காளி போட்டு மிருதுவாக குழையும் வரை வேகவிடவும்.", "மீதி மிளகாய், மல்லி, கரம் மசாலா சேர்த்து 1 நிமிடம் வதக்கவும்.", "புளி, 1/2 கப் தண்ணீர் ஊற்றி 5 நிமிடம் கொதிக்க விட்டு, தேங்காய்ப் பால், மீதி உப்பு சேர்க்கவும்.", "இறாலை சேர்த்து 4-5 நிமிடம் இளஞ்சிவப்பாகவும் ஒளிபுகாததாகவும் ஆகும் வரை வேகவிடவும், அதிகம் வேகவிட வேண்டாம்.", "ஆவியில் வெந்த பனிவரகுடன் சூடாக பரிமாறவும்."],
      },
    },
    "proso-millet-54": {
      hi: {
        ingredients: ["1 1/2 कप पनिवरागु (प्रोसो मिलेट), मोटा कुटा हुआ", "2 बड़े चम्मच मूँगफली तेल", "1 छोटा चम्मच सरसों, 1 छोटा चम्मच जीरा", "2 बड़े चम्मच भुनी मूँगफली", "1 छोटी प्याज़, कटी", "2 हरी मिर्च, कटी, 8 करी पत्ते", "1/2 छोटा चम्मच हल्दी", "1 छोटा चम्मच नमक, 1 छोटा चम्मच चीनी", "2 1/2 कप पानी, 2 बड़े चम्मच नींबू का रस", "2 बड़े चम्मच कसा नारियल और कटा धनिया, सजाने के लिए"],
        steps: ["कुटे मिलेट को पैन में धीमी आँच पर 4 मिनट भूनें जब तक नटी खुशबू न आए, फिर अलग रखें।", "मूँगफली तेल गरम करें और सरसों व जीरा चटकाएँ।", "मूँगफली, हरी मिर्च, करी पत्ते और प्याज़ डालकर प्याज़ नरम होने तक भूनें।", "हल्दी डालें, फिर पानी, नमक और चीनी डालकर उबाल लें।", "भुना मिलेट धीरे-धीरे डालें और गुठलियाँ न बनें इसलिए चलाते रहें, फिर धीमी आँच पर 5 मिनट ढककर रखें।", "काँटे से फुलाएँ, नींबू का रस डालें और 2 मिनट और ढककर रखें।", "नारियल और धनिया से सजाकर गरम परोसें।"],
      },
      ta: {
        ingredients: ["1 1/2 கப் பனிவரகு ரவை, கொரகொரப்பாக இடித்தது", "2 டேபிள்ஸ்பூன் நிலக்கடலை எண்ணெய்", "1 டீஸ்பூன் கடுகு, 1 டீஸ்பூன் சீரகம்", "2 டேபிள்ஸ்பூன் வறுத்த வேர்க்கடலை", "1 சிறிய வெங்காயம், நறுக்கியது", "2 பச்சை மிளகாய், நறுக்கியது, 8 கறிவேப்பிலை", "1/2 டீஸ்பூன் மஞ்சள் தூள்", "1 டீஸ்பூன் உப்பு, 1 டீஸ்பூன் சர்க்கரை", "2 1/2 கப் தண்ணீர், 2 டேபிள்ஸ்பூன் எலுமிச்சை சாறு", "2 டேபிள்ஸ்பூன் துருவிய தேங்காய் மற்றும் நறுக்கிய கொத்தமல்லி, அலங்கரிக்க"],
        steps: ["இடித்த தானியத்தை கடாயில் மெல்லிய தீயில் 4 நிமிடம் வறுத்து நறுமணம் வந்ததும் தனியாக வைக்கவும்.", "நிலக்கடலை எண்ணெயை சூடாக்கி கடுகு, சீரகம் தாளிக்கவும்.", "வேர்க்கடலை, பச்சை மிளகாய், கறிவேப்பிலை, வெங்காயம் சேர்த்து வெங்காயம் மென்மையாகும் வரை வதக்கவும்.", "மஞ்சள் சேர்த்து, பின்னர் தண்ணீர், உப்பு, சர்க்கரை ஊற்றி கொதிக்க விடவும்.", "வறுத்த தானியத்தை மெதுவாக சேர்த்து, கட்டி விழாமல் கிளறி, மூடி மெல்லிய தீயில் 5 நிமிடம் வேகவிடவும்.", "முள் கரண்டியால் உதிர்த்து, எலுமிச்சை சாறு ஊற்றி மேலும் 2 நிமிடம் மூடி வைக்கவும்.", "தேங்காய், கொத்தமல்லியால் அலங்கரித்து சூடாக பரிமாறவும்."],
      },
    },
    "proso-millet-55": {
      hi: {
        ingredients: ["1/2 कप पनिवरागु (प्रोसो मिलेट), नरम पकाया और ठंडा किया हुआ", "3 कप पानी, पकाने के लिए", "1 कप छाछ, ठंडी", "1 छोटा चम्मच नमक", "2 छोटे प्याज़ (शैलट), बारीक कटे", "1 हरी मिर्च, बारीक कटी, 1 छोटा चम्मच अदरक, कसा हुआ", "1 छोटा चम्मच सरसों, 8 करी पत्ते", "1 छोटा चम्मच तिल का तेल, तड़के के लिए"],
        steps: ["मिलेट को 3 कप पानी में 20 मिनट बहुत नरम होने तक पकाएँ, फिर कमरे के तापमान तक ठंडा करें।", "पके मिलेट को हल्का मसलें, ढककर गरम जगह पर 8 घंटे रखें ताकि थोड़ा किण्वित होकर खट्टा हो जाए।", "तिल का तेल गरम करें और सरसों व करी पत्ते चटकाएँ, फिर शैलट, अदरक और हरी मिर्च सुनहरे होने तक तलें।", "तड़के को किण्वित मिलेट में डालकर अच्छी तरह मिलाएँ।", "ठंडी छाछ और नमक डालकर फेंटें जब तक चिकना और पीने लायक पतला न हो जाए।", "परोसने से पहले 30 मिनट ठंडा करें।", "दोपहर में छोटे गिलासों या कटोरों में ठंडा परोसें।"],
      },
      ta: {
        ingredients: ["1/2 கப் பனிவரகு, நன்கு வெந்து ஆறியது", "3 கப் தண்ணீர், வேகவைக்க", "1 கப் மோர், குளிர்ந்தது", "1 டீஸ்பூன் உப்பு", "2 சின்ன வெங்காயம், பொடியாக நறுக்கியது", "1 பச்சை மிளகாய், பொடியாக நறுக்கியது, 1 டீஸ்பூன் இஞ்சி, துருவியது", "1 டீஸ்பூன் கடுகு, 8 கறிவேப்பிலை", "1 டீஸ்பூன் நல்லெண்ணெய், தாளிக்க"],
        steps: ["தானியத்தை 3 கப் தண்ணீரில் 20 நிமிடம் மிகவும் மென்மையாகும் வரை வேகவைத்து அறை வெப்பநிலைக்கு ஆறவிடவும்.", "வெந்த தானியத்தை லேசாக மசித்து, மூடி வெதுவெதுப்பான இடத்தில் 8 மணி நேரம் வைத்து சற்று புளிக்க விடவும்.", "நல்லெண்ணெயை சூடாக்கி கடுகு, கறிவேப்பிலை தாளித்து, பின்னர் சின்ன வெங்காயம், இஞ்சி, பச்சை மிளகாயை பொன்னிறமாக வறுக்கவும்.", "தாளிப்பை புளித்த தானியத்துடன் சேர்த்து நன்கு கலக்கவும்.", "குளிர்ந்த மோர் மற்றும் உப்பு சேர்த்து, மென்மையாகவும் குடிக்கும் பதத்திற்கு நீர்க்கவும் அடித்துக் கலக்கவும்.", "பரிமாறும் முன் 30 நிமிடம் குளிரவைக்கவும்.", "பிற்பகலில் சிறிய டம்ளர்கள் அல்லது கிண்ணங்களில் குளிரவைத்து பரிமாறவும்."],
      },
    },
  },
  translations: {
    "proso-millet-51": {
      hi: { title: "पनिवरागु मसाला डोसा", description: "भीगे और किण्वित पनिवरागु-उड़द घोल से बने सुनहरे, कुरकुरे डोसे, मसालेदार आलू भरावन के साथ, चटनी और सांभर के साथ परोसे जाने वाले।" },
      ta: { title: "பனிவரகு மசாலா தோசை", description: "புளிக்க வைத்த பனிவரகு-உளுந்து மாவில் செய்த பொன்னிறமான மொறுமொறுப்பான தோசை, உருளைக்கிழங்கு மசாலா பூரணத்துடன், சட்னி சாம்பாருடன்." },
    },
    "proso-millet-52": {
      hi: { title: "पनिवरागु बादाम हलवा", description: "भुने पनिवरागु आटे, पिसे बादाम और घी से धीमी आँच पर बना समृद्ध हलवा, इलायची और केसर की खुशबू के साथ।" },
      ta: { title: "பனிவரகு பாதாம் அல்வா", description: "வறுத்த பனிவரகு மாவு, அரைத்த பாதாம், நெய்யில் மெல்லிய தீயில் செய்த செழுமையான அல்வா, ஏலக்காய், குங்குமப்பூ மணத்துடன்." },
    },
    "proso-millet-53": {
      hi: { title: "पनिवरागु झींगा करी", description: "प्याज़-टमाटर की मसालेदार ग्रेवी और नारियल के दूध में पके झींगे, तमिलनाडु के तटीय भोजन का स्वाद, नरम पनिवरागु भात के साथ।" },
      ta: { title: "பனிவரகு இறால் குழம்பு", description: "வெங்காயம், தக்காளி மசாலா குழம்பிலும் தேங்காய்ப் பாலிலும் வெந்த இறால், மென்மையான பனிவரகு சாதத்துடன் பொருந்தும் கடலோர கறி." },
    },
    "proso-millet-54": {
      hi: { title: "पनिवरागु पोहा", description: "कुटे पनिवरागु को भुनकर सरसों, मूँगफली और करी पत्ते के तड़के में बना हल्का महाराष्ट्रियन नाश्ता, नींबू और नारियल के साथ।" },
      ta: { title: "பனிவரகு அவல்", description: "இடித்த பனிவரகு ரவையை கடுகு, வேர்க்கடலை, கறிவேப்பிலை தாளிப்பில் செய்த இலகுவான மகாராஷ்டிர பாணி காலை உணவு, எலுமிச்சை சாறுடன்." },
    },
    "proso-millet-55": {
      hi: { title: "पनिवरागु कूज़ (छाछ पेय)", description: "छाछ, शैलट और हरी मिर्च के साथ बना ठंडा, हल्का किण्वित मिलेट पेय, तमिलनाडु का गर्मियों का पारंपरिक पेय।" },
      ta: { title: "பனிவரகு கூழ்", description: "மோர், சின்ன வெங்காயம், பச்சை மிளகாயுடன் செய்த குளிர்ச்சியான, சற்று புளித்த பனிவரகு பானம், தமிழ்நாட்டின் கோடைகால பாரம்பரிய பானம்." },
    },
  },
  plate: {
    "proso-millet-51": {
      kcal: 290, carbsG: 44, fibreG: 4, gi: 60,
      minerals: ["iron", "magnesium", "potassium"],
      raw: { kind: "raw", name: "Sliced onion and cucumber", how: "Slice onion and cucumber thinly and sprinkle with lemon juice and black salt." },
      sides: [
        { kind: "cooked", name: "Drumstick sambar", how: "Simmer toor dal with drumsticks, tamarind and sambar powder until thick and fragrant." },
        { kind: "cooked", name: "Beans poriyal", how: "Stir-fry chopped beans with grated coconut, mustard seeds and curry leaves until just tender." },
      ],
    },
    "proso-millet-52": {
      kcal: 330, carbsG: 34, fibreG: 3, gi: 60,
      minerals: ["calcium", "magnesium", "iron"],
      raw: { kind: "raw", name: "Cucumber slices", how: "Slice cucumber and sprinkle with a pinch of black salt." },
      sides: [
        { kind: "cooked", name: "Beans poriyal", how: "Stir-fry chopped beans with grated coconut, mustard seeds and curry leaves until just tender." },
        { kind: "cooked", name: "Pumpkin kootu", how: "Simmer pumpkin and moong dal with coconut and cumin, then temper with mustard seeds." },
      ],
    },
    "proso-millet-53": {
      kcal: 340, carbsG: 30, fibreG: 4, gi: 50,
      minerals: ["iron", "zinc", "selenium"],
      raw: { kind: "raw", name: "Cucumber and onion slices", how: "Thinly slice cucumber and onion and toss with lemon juice and a pinch of salt." },
      sides: [
        { kind: "cooked", name: "Pumpkin kootu", how: "Simmer pumpkin and moong dal with coconut and cumin, then temper with mustard seeds." },
        { kind: "cooked", name: "Radish sambar", how: "Simmer radish and toor dal with tamarind and sambar powder until thick and fragrant." },
      ],
    },
    "proso-millet-54": {
      kcal: 260, carbsG: 42, fibreG: 4, gi: 56,
      minerals: ["iron", "magnesium", "phosphorus"],
      raw: { kind: "raw", name: "Cucumber and tomato", how: "Dice cucumber and tomato and toss with lemon juice and black salt." },
      sides: [
        { kind: "cooked", name: "Aloo bhaji", how: "Pan-fry diced potato with cumin, turmeric and chilli until golden and tender." },
        { kind: "cooked", name: "Beans poriyal", how: "Stir-fry chopped beans with grated coconut, mustard seeds and curry leaves until just tender." },
      ],
    },
    "proso-millet-55": {
      kcal: 150, carbsG: 22, fibreG: 2, gi: 50,
      minerals: ["calcium", "potassium", "magnesium"],
      raw: { kind: "raw", name: "Cucumber rounds", how: "Slice cucumber into thin rounds and sprinkle with black salt." },
      sides: [
        { kind: "cooked", name: "Tomato rasam", how: "Simmer tomato with tamarind water, pepper, cumin and garlic, then finish with coriander." },
        { kind: "cooked", name: "Beetroot poriyal", how: "Sauté grated beetroot with mustard seeds, curry leaves and a little grated coconut until tender." },
      ],
    },
  },
};
