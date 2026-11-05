import type { Recipe } from "@/types/recipe";
import type { LineContent } from "@/data/i18n-content/sorghum";
import type { PlateInfo } from "@/types/plate";

/** browntop-millet recipes browntop-millet-46 to browntop-millet-50 with full English, Hindi and Tamil content and plate data. */
export const BROWNTOP_MILLET_BATCH_7: {
  recipes: Recipe[];
  content: Record<string, { hi: LineContent; ta: LineContent }>;
  translations: Record<string, { hi: { title: string; description: string }; ta: { title: string; description: string } }>;
  plate: Record<string, PlateInfo>;
} = {
  recipes: [
    {
      id: "browntop-millet-46",
      title: "Korle Mirchi Bajji",
      milletId: "browntop-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Snack",
      description: "Large green chillies dipped in a spiced browntop millet and gram flour batter and deep-fried until crisp, a hot and crunchy evening snack from Andhra and Telangana.",
      servings: 4,
      prepTimeMinutes: 20,
      cookTimeMinutes: 15,
      difficulty: "Medium",
      ingredients: [
        "6 large green chillies (bajji mirchi), slit lengthwise with seeds left in",
        "1 cup browntop millet flour (korle atta)",
        "1/4 cup besan (gram flour)",
        "1/2 tsp turmeric powder, 1/2 tsp carom seeds",
        "1/2 tsp salt",
        "1 tsp lemon juice",
        "3/4 cup water, as needed",
        "1 tbsp hot oil, for the batter",
        "500 ml sunflower oil, for deep-frying",
      ],
      steps: [
        "Slit each green chilli lengthwise and make a small cut, keeping the stem on.",
        "Mix the millet flour, besan, turmeric, carom seeds and salt in a bowl.",
        "Add the lemon juice, hot oil and enough water to make a thick, smooth batter.",
        "Heat the frying oil in a kadai over medium heat until a drop of batter sizzles and rises to the surface.",
        "Dip each chilli into the batter, coating it evenly, and slide it gently into the oil.",
        "Fry for 2-3 minutes, turning, until the coating is crisp and golden.",
        "Drain on paper towels and serve hot with onion and tamarind chutney.",
      ],
    },
    {
      id: "browntop-millet-47",
      title: "Korle Prawn Fry",
      milletId: "browntop-millet",
      region: "South Indian",
      diet: "Non-Vegetarian",
      course: "Snack",
      description: "Prawns marinated in ginger, garlic and black pepper, then coated in a light browntop millet flour crust and shallow-fried with curry leaves, a coastal South Indian starter.",
      servings: 4,
      prepTimeMinutes: 20,
      cookTimeMinutes: 15,
      difficulty: "Medium",
      ingredients: [
        "300 g prawns, cleaned and deveined",
        "2 tbsp browntop millet flour (korle atta)",
        "1 tbsp rice flour",
        "1 tsp ginger-garlic paste",
        "1 tsp red chilli powder, 1/2 tsp turmeric powder, 1/2 tsp black pepper powder",
        "1 tsp lemon juice",
        "1/2 tsp salt",
        "2 tbsp sesame oil or coconut oil, for shallow-frying",
        "8 curry leaves",
      ],
      steps: [
        "Marinate the prawns with the ginger-garlic paste, chilli powder, turmeric, lemon juice and salt for 15 minutes.",
        "Mix the millet flour, rice flour and black pepper powder on a plate.",
        "Coat each prawn lightly in the flour mixture and shake off any excess.",
        "Heat the oil in a non-stick pan over medium-high heat and add the curry leaves to sizzle.",
        "Place the prawns in a single layer and fry for 2 minutes per side until crisp.",
        "Toss gently so the coating turns golden and the prawns are cooked through.",
        "Serve hot as a snack with lemon wedges and onion rings.",
      ],
    },
    {
      id: "browntop-millet-48",
      title: "Korle Kadubu",
      milletId: "browntop-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Snack",
      description: "Steamed browntop millet dumplings filled with jaggery and coconut and wrapped in banana leaves, a traditional Karnataka evening snack.",
      servings: 4,
      prepTimeMinutes: 25,
      cookTimeMinutes: 20,
      difficulty: "Medium",
      ingredients: [
        "1 cup browntop millet flour (korle atta)",
        "1 cup boiling water",
        "1/2 tsp salt",
        "1/2 cup jaggery, grated",
        "1/2 cup fresh grated coconut",
        "1/4 tsp cardamom powder",
        "2 tsp ghee",
        "4-6 banana leaf pieces, or greased idli moulds",
      ],
      steps: [
        "Add the salt to the boiling water, then pour it over the millet flour in a bowl and cover for 5 minutes.",
        "Knead the flour into a soft, smooth dough while it is still warm, adding a splash of water if needed.",
        "Mix the jaggery, coconut, cardamom and 1 tsp ghee to make a sticky filling.",
        "Take a lemon-sized piece of dough, flatten it in your palm, place a spoon of filling in the middle and seal into a ball.",
        "Wrap each ball in a banana leaf or place it in a greased idli mould.",
        "Steam for 15 minutes over boiling water until the dough is firm and set.",
        "Serve warm, brushed with the remaining ghee.",
      ],
    },
    {
      id: "browntop-millet-49",
      title: "Korle Dahi Vada",
      milletId: "browntop-millet",
      region: "North Indian",
      diet: "Vegetarian",
      course: "Snack",
      description: "Soft urad and browntop millet vadas soaked in whisked yoghurt and topped with tamarind and mint chutneys, a cooling chaat from North Indian streets.",
      servings: 4,
      prepTimeMinutes: 30,
      cookTimeMinutes: 20,
      difficulty: "Medium",
      ingredients: [
        "1 cup urad dal, soaked for 4 hours and drained",
        "1/4 cup browntop millet flour (korle atta)",
        "1/2 tsp salt",
        "2 cups plain yoghurt, whisked smooth",
        "1/2 tsp sugar",
        "1/2 tsp roasted cumin powder, 1/2 tsp red chilli powder",
        "1/4 tsp black salt",
        "1/4 cup tamarind chutney",
        "3 tbsp mint-coriander chutney",
        "500 ml sunflower oil, for deep-frying",
      ],
      steps: [
        "Grind the soaked urad dal with very little water to a thick, fluffy batter and beat it for 3 minutes.",
        "Fold the millet flour and salt into the batter.",
        "Heat the oil over medium heat and test with a drop of batter, which should rise immediately.",
        "Wet your hands, take a portion of batter, shape a round vada with a hole, and slide it into the oil.",
        "Fry for 3-4 minutes, turning, until golden and crisp, then drain.",
        "Soak the hot vadas in warm water for 5 minutes, then squeeze them gently.",
        "Arrange the vadas on a plate, pour over the whisked yoghurt, and sprinkle with the sugar, cumin, chilli and black salt.",
        "Drizzle the tamarind and mint chutneys over the top and serve chilled.",
      ],
    },
    {
      id: "browntop-millet-50",
      title: "Korle Gujiya",
      milletId: "browntop-millet",
      region: "North Indian",
      diet: "Vegetarian",
      course: "Dessert",
      description: "Crescent-shaped pastries of browntop millet and refined flour filled with sweetened khoya, nuts and cardamom, fried until golden and traditionally made for Holi.",
      servings: 6,
      prepTimeMinutes: 40,
      cookTimeMinutes: 25,
      difficulty: "Hard",
      ingredients: [
        "1/2 cup browntop millet flour (korle atta)",
        "1/2 cup all-purpose flour (maida)",
        "2 tbsp ghee, melted, plus oil for frying",
        "1/4 cup water, as needed",
        "1/2 cup khoya, crumbled",
        "1/3 cup powdered sugar",
        "2 tbsp chopped almonds and cashews",
        "1/4 tsp cardamom powder",
        "a pinch of salt",
        "500 ml oil, for deep-frying",
      ],
      steps: [
        "Mix both flours, the salt and the melted ghee, then rub with your fingers until it looks like breadcrumbs.",
        "Add water little by little and knead into a firm dough, then cover and rest for 20 minutes.",
        "Dry roast the khoya on low heat for 3 minutes until it smells rich, then mix in the sugar, nuts and cardamom.",
        "Divide the dough into 12 balls and roll each into a thin round about 3 inches wide.",
        "Place a spoonful of filling on one half of each round, moisten the edges with water and fold into half-moons.",
        "Press the edges firmly and seal them with a fork or pleats.",
        "Heat the oil on medium heat and fry the gujiyas in batches for 4-5 minutes until golden.",
        "Drain on kitchen paper, cool completely, and store in an airtight tin.",
      ],
    },
  ],
  content: {
    "browntop-millet-46": {
      hi: {
        ingredients: ["6 बड़ी हरी मिर्च (बजी मिर्च), लंबाई में चीरी हुई, बीज रहने दें", "1 कप ब्राउनटॉप मिलेट का आटा (कोर्ले का आटा)", "1/4 कप बेसन", "1/2 छोटा चम्मच हल्दी, 1/2 छोटा चम्मच अजवाइन", "1/2 छोटा चम्मच नमक", "1 छोटा चम्मच नींबू का रस", "3/4 कप पानी, ज़रूरत अनुसार", "1 बड़ा चम्मच गरम तेल, घोल के लिए", "500 मि.ली. सूरजमुखी तेल, डीप फ्राई के लिए"],
        steps: ["हर हरी मिर्च को लंबाई में चीरें और डंठल लगा रहने दें।", "मिलेट का आटा, बेसन, हल्दी, अजवाइन और नमक एक कटोरी में मिलाएँ।", "नींबू का रस, गरम तेल और ज़रूरत भर पानी डालकर गाढ़ा, चिकना घोल बनाएँ।", "तलने का तेल मध्यम आँच पर कढ़ाई में गरम करें जब तक घोल की एक बूँद सरसराकर ऊपर न आ जाए।", "हर मिर्च को घोल में अच्छी तरह लपेटकर धीरे से तेल में डालें।", "2-3 मिनट पलटते हुए तलें जब तक परत कुरकुरी और सुनहरी न हो जाए।", "किचन पेपर पर निकालें और प्याज़ व इमली की चटनी के साथ गरम परोसें।"],
      },
      ta: {
        ingredients: ["6 பெரிய பச்சை மிளகாய் (பஜ்ஜி மிளகாய்), நீளவாக்கில் கீறியது, விதைகளுடன்", "1 கப் பிரவுன்டாப் சிறுதானிய மாவு (கோர்லே மாவு)", "1/4 கப் கடலை மாவு", "1/2 டீஸ்பூன் மஞ்சள் தூள், 1/2 டீஸ்பூன் ஓமம்", "1/2 டீஸ்பூன் உப்பு", "1 டீஸ்பூன் எலுமிச்சை சாறு", "3/4 கப் தண்ணீர், தேவைக்கேற்ப", "1 டேபிள்ஸ்பூன் சூடான எண்ணெய், மாவுக்கு", "500 மி.லி. சூரியகாந்தி எண்ணெய், பொரிக்க"],
        steps: ["ஒவ்வொரு பச்சை மிளகாயையும் நீளவாக்கில் கீறி, காம்பு இருக்குமாறு வைக்கவும்.", "சிறுதானிய மாவு, கடலை மாவு, மஞ்சள், ஓமம், உப்பை ஒரு கிண்ணத்தில் கலக்கவும்.", "எலுமிச்சை சாறு, சூடான எண்ணெய், தேவையான தண்ணீர் சேர்த்து கெட்டியான, மென்மையான மாவாக்கவும்.", "பொரிக்கும் எண்ணெயை கடாயில் மிதமான தீயில் சூடாக்கவும்; மாவின் ஒரு துளி சீறி மேலே வந்தால் தயார்.", "ஒவ்வொரு மிளகாயையும் மாவில் நன்கு தோய்த்து எண்ணெயில் மெதுவாக விடவும்.", "2-3 நிமிடம் திருப்பிப் போட்டு மேலோடு மொறுமொறுப்பாகவும் பொன்னிறமாகவும் ஆகும் வரை வேகவிடவும்.", "கிச்சன் பேப்பரில் வடிகட்டி, வெங்காயம் மற்றும் புளி சட்னியுடன் சூடாக பரிமாறவும்."],
      },
    },
    "browntop-millet-47": {
      hi: {
        ingredients: ["300 ग्राम झींगा, साफ़ करके नस निकाली हुई", "2 बड़े चम्मच ब्राउनटॉप मिलेट का आटा (कोर्ले का आटा)", "1 बड़ा चम्मच चावल का आटा", "1 छोटा चम्मच अदरक-लहसुन पेस्ट", "1 छोटा चम्मच लाल मिर्च पाउडर, 1/2 छोटा चम्मच हल्दी, 1/2 छोटा चम्मच काली मिर्च पाउडर", "1 छोटा चम्मच नींबू का रस", "1/2 छोटा चम्मच नमक", "2 बड़े चम्मच तिल का तेल या नारियल तेल, शैलो फ्राई के लिए", "8 करी पत्ते"],
        steps: ["झींगे को अदरक-लहसुन पेस्ट, मिर्च पाउडर, हल्दी, नींबू का रस और नमक के साथ 15 मिनट मैरिनेट करें।", "मिलेट का आटा, चावल का आटा और काली मिर्च पाउडर थाली में मिलाएँ।", "हर झींगे को आटे के मिश्रण में हल्के से लपेटें और अतिरिक्त झाड़ दें।", "नॉन-स्टिक पैन में तेल मध्यम-तेज़ आँच पर गरम करें और करी पत्ते चटकाएँ।", "झींगे एक परत में डालें और हर तरफ 2 मिनट कुरकुरे होने तक तलें।", "धीरे से पलटें ताकि परत सुनहरी हो जाए और झींगे अच्छी तरह पक जाएँ।", "नींबू की फाँक और प्याज़ के छल्लों के साथ गरम नाश्ते के रूप में परोसें।"],
      },
      ta: {
        ingredients: ["300 கிராம் இறால், சுத்தம் செய்து நரம்பு நீக்கியது", "2 டேபிள்ஸ்பூன் பிரவுன்டாப் சிறுதானிய மாவு (கோர்லே மாவு)", "1 டேபிள்ஸ்பூன் அரிசி மாவு", "1 டீஸ்பூன் இஞ்சி-பூண்டு விழுது", "1 டீஸ்பூன் மிளகாய்த் தூள், 1/2 டீஸ்பூன் மஞ்சள் தூள், 1/2 டீஸ்பூன் மிளகுத் தூள்", "1 டீஸ்பூன் எலுமிச்சை சாறு", "1/2 டீஸ்பூன் உப்பு", "2 டேபிள்ஸ்பூன் நல்லெண்ணெய் அல்லது தேங்காய் எண்ணெய், ஷாலோ ஃப்ரை செய்ய", "8 கறிவேப்பிலை"],
        steps: ["இறாலை இஞ்சி-பூண்டு விழுது, மிளகாய்த் தூள், மஞ்சள், எலுமிச்சை சாறு, உப்புடன் 15 நிமிடம் ஊறவைக்கவும்.", "சிறுதானிய மாவு, அரிசி மாவு, மிளகுத் தூளை ஒரு தட்டில் கலக்கவும்.", "ஒவ்வொரு இறாலையும் மாவுக் கலவையில் லேசாக புரட்டி அதிகப்படியானதை உதறவும்.", "நான்-ஸ்டிக் பானில் எண்ணெயை மிதமான-அதிக தீயில் சூடாக்கி கறிவேப்பிலையை தாளிக்கவும்.", "இறால்களை ஒரு அடுக்காக வைத்து ஒரு பக்கம் 2 நிமிடம் மொறுமொறுப்பாக வறுக்கவும்.", "மெதுவாக புரட்டி மேலோடு பொன்னிறமாகவும் இறால் நன்கு வேகும்படியும் செய்யவும்.", "எலுமிச்சை துண்டுகள், வெங்காய வளையங்களுடன் சூடான சிற்றுண்டியாக பரிமாறவும்."],
      },
    },
    "browntop-millet-48": {
      hi: {
        ingredients: ["1 कप ब्राउनटॉप मिलेट का आटा (कोर्ले का आटा)", "1 कप उबलता पानी", "1/2 छोटा चम्मच नमक", "1/2 कप गुड़, कसा हुआ", "1/2 कप ताज़ा कसा हुआ नारियल", "1/4 छोटा चम्मच इलायची पाउडर", "2 छोटे चम्मच घी", "4-6 केले के पत्ते के टुकड़े, या चिकने इडली साँचे"],
        steps: ["उबलते पानी में नमक डालें, फिर उसे आटे के ऊपर डालकर 5 मिनट ढककर रखें।", "गरम रहते हुए आटे को चिकना, नरम गूँधें, ज़रूरत हो तो थोड़ा पानी छिड़कें।", "गुड़, नारियल, इलायची और 1 छोटा चम्मच घी मिलाकर चिपचिपा भरावन बनाएँ।", "नींबू जितना आटा लेकर हथेली पर चपटा करें, बीच में एक चम्मच भरावन रखें और गोल बंद करें।", "हर गोले को केले के पत्ते में लपेटें या चिकने इडली साँचे में रखें।", "उबलते पानी की भाप पर 15 मिनट पकाएँ जब तक आटा सख़्त और सेट न हो जाए।", "बचे घी से चुपड़कर गरम परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் பிரவுன்டாப் சிறுதானிய மாவு (கோர்லே மாவு)", "1 கப் கொதிக்கும் தண்ணீர்", "1/2 டீஸ்பூன் உப்பு", "1/2 கப் வெல்லம், துருவியது", "1/2 கப் துருவிய புதிய தேங்காய்", "1/4 டீஸ்பூன் ஏலக்காய் தூள்", "2 டீஸ்பூன் நெய்", "4-6 வாழையிலைத் துண்டுகள், அல்லது எண்ணெய் தடவிய இட்லி அச்சுகள்"],
        steps: ["கொதிக்கும் தண்ணீரில் உப்பு சேர்த்து மாவின் மேல் ஊற்றி 5 நிமிடம் மூடி வைக்கவும்.", "மாவு சூடாக இருக்கும் போதே மென்மையான, வழுவழுப்பான மாவாக பிசையவும்; தேவைப்பட்டால் சிறிது தண்ணீர் தெளிக்கவும்.", "வெல்லம், தேங்காய், ஏலக்காய், 1 டீஸ்பூன் நெய் சேர்த்து ஒட்டும் பூரணம் தயாரிக்கவும்.", "எலுமிச்சை அளவு மாவை எடுத்து உள்ளங்கையில் தட்டி, நடுவில் ஒரு கரண்டி பூரணம் வைத்து உருண்டையாக மூடவும்.", "ஒவ்வொரு உருண்டையையும் வாழையிலையில் சுற்றவும் அல்லது எண்ணெய் தடவிய இட்லி அச்சில் வைக்கவும்.", "கொதிக்கும் தண்ணீரின் ஆவியில் 15 நிமிடம் மாவு கெட்டியாகி நன்கு அமையும் வரை வேகவிடவும்.", "மீதி நெய்யால் தடவி சூடாக பரிமாறவும்."],
      },
    },
    "browntop-millet-49": {
      hi: {
        ingredients: ["1 कप उड़द दाल, 4 घंटे भिगोई और निथारी हुई", "1/4 कप ब्राउनटॉप मिलेट का आटा (कोर्ले का आटा)", "1/2 छोटा चम्मच नमक", "2 कप सादा दही, चिकना फेंटा हुआ", "1/2 छोटा चम्मच चीनी", "1/2 छोटा चम्मच भुना जीरा पाउडर, 1/2 छोटा चम्मच लाल मिर्च पाउडर", "1/4 छोटा चम्मच काला नमक", "1/4 कप इमली की चटनी", "3 बड़े चम्मच पुदीना-धनिया चटनी", "500 मि.ली. सूरजमुखी तेल, डीप फ्राई के लिए"],
        steps: ["भीगी उड़द दाल को बहुत कम पानी के साथ गाढ़ा, फूला घोल बनने तक पीसें और 3 मिनट फेंटें।", "मिलेट का आटा और नमक घोल में मिलाएँ।", "तेल मध्यम आँच पर गरम करें और घोल की एक बूँद डालकर देखें कि वह तुरंत ऊपर आ जाए।", "हाथ गीला करके घोल का हिस्सा लें, बीच में छेद वाला वड़ा बनाएँ और तेल में सरकाएँ।", "3-4 मिनट पलटते हुए सुनहरा और कुरकुरा होने तक तलें, फिर निकालें।", "गरम वड़ों को 5 मिनट गुनगुने पानी में भिगोएँ और फिर हल्के हाथ से निचोड़ें।", "वड़ों को थाली में सजाएँ, फेंटा हुआ दही डालें और चीनी, जीरा, मिर्च और काला नमक छिड़कें।", "ऊपर से इमली और पुदीना चटनी डालकर ठंडा परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் உளுந்து, 4 மணி நேரம் ஊறவைத்து வடிகட்டியது", "1/4 கப் பிரவுன்டாப் சிறுதானிய மாவு (கோர்லே மாவு)", "1/2 டீஸ்பூன் உப்பு", "2 கப் சாதாத் தயிர், மென்மையாக அடித்தது", "1/2 டீஸ்பூன் சர்க்கரை", "1/2 டீஸ்பூன் வறுத்த சீரகத் தூள், 1/2 டீஸ்பூன் மிளகாய்த் தூள்", "1/4 டீஸ்பூன் கருப்பு உப்பு", "1/4 கப் புளி சட்னி", "3 டேபிள்ஸ்பூன் புதினா-கொத்தமல்லி சட்னி", "500 மி.லி. சூரியகாந்தி எண்ணெய், பொரிக்க"],
        steps: ["ஊறிய உளுந்தை மிகக் குறைந்த தண்ணீருடன் கெட்டியாக, பஞ்சு போல அரைத்து 3 நிமிடம் அடிக்கவும்.", "சிறுதானிய மாவு, உப்பை மாவில் மெதுவாக கலக்கவும்.", "எண்ணெயை மிதமான தீயில் சூடாக்கி மாவின் ஒரு துளி உடனே மேலே வந்தால் தயார்.", "கையை ஈரப்படுத்தி மாவை எடுத்து நடுவில் துளையுடன் வடை வடிவமாக்கி எண்ணெயில் சறுக்கவும்.", "3-4 நிமிடம் திருப்பிப் போட்டு பொன்னிறமாகவும் மொறுமொறுப்பாகவும் வறுத்து வடிகட்டவும்.", "சூடான வடைகளை 5 நிமிடம் வெதுவெதுப்பான தண்ணீரில் ஊறவைத்து மெதுவாக பிழியவும்.", "வடைகளை தட்டில் அடுக்கி, அடித்த தயிரை ஊற்றி, சர்க்கரை, சீரகம், மிளகாய், கருப்பு உப்பு தூவவும்.", "மேலே புளி, புதினா சட்னிகளை ஊற்றி குளிரவைத்துப் பரிமாறவும்."],
      },
    },
    "browntop-millet-50": {
      hi: {
        ingredients: ["1/2 कप ब्राउनटॉप मिलेट का आटा (कोर्ले का आटा)", "1/2 कप मैदा", "2 बड़े चम्मच घी, पिघला हुआ, और तलने के लिए तेल", "1/4 कप पानी, ज़रूरत अनुसार", "1/2 कप खोया, मसला हुआ", "1/3 कप पिसी चीनी", "2 बड़े चम्मच कटे बादाम और काजू", "1/4 छोटा चम्मच इलायची पाउडर", "एक चुटकी नमक", "500 मि.ली. तलने के लिए तेल"],
        steps: ["दोनों आटे, नमक और पिघले घी को उँगलियों से मिलाएँ जब तक वह ब्रेडक्रंब जैसा न हो जाए।", "थोड़ा-थोड़ा पानी डालकर कड़ा आटा गूँधें, ढककर 20 मिनट रखें।", "खोया धीमी आँच पर 3 मिनट भूनें जब तक खुशबू न आए, फिर चीनी, मेवे और इलायची मिलाएँ।", "आटे को 12 गोलों में बाँटें और हर गोले को लगभग 3 इंच की पतली पूड़ी बेलें।", "हर पूड़ी के एक हिस्से पर एक चम्मच भरावन रखें, किनारों को पानी से नम करें और अर्धचंद्राकार मोड़ें।", "किनारों को कसकर दबाएँ और काँटे से या प्लीट बनाकर बंद करें।", "मध्यम आँच पर तेल गरम करें और गुझिया बैचों में 4-5 मिनट सुनहरी होने तक तलें।", "किचन पेपर पर निकालकर पूरी तरह ठंडा होने दें और हवाबंद डिब्बे में रखें।"],
      },
      ta: {
        ingredients: ["1/2 கப் பிரவுன்டாப் சிறுதானிய மாவு (கோர்லே மாவு)", "1/2 கப் மைதா", "2 டேபிள்ஸ்பூன் உருக்கிய நெய், மற்றும் பொரிக்க எண்ணெய்", "1/4 கப் தண்ணீர், தேவைக்கேற்ப", "1/2 கப் கோவா, நொறுக்கியது", "1/3 கப் பொடித்த சர்க்கரை", "2 டேபிள்ஸ்பூன் நறுக்கிய பாதாம், முந்திரி", "1/4 டீஸ்பூன் ஏலக்காய் தூள்", "ஒரு சிட்டிகை உப்பு", "500 மி.லி. பொரிக்க எண்ணெய்"],
        steps: ["இரு மாவுகள், உப்பு, உருக்கிய நெய்யை விரல்களால் ரொட்டித் தூள் போல ஆகும் வரை கலக்கவும்.", "சிறிது சிறிதாக தண்ணீர் சேர்த்து கெட்டியான மாவாக பிசைந்து, மூடி 20 நிமிடம் வைக்கவும்.", "கோவாவை மெல்லிய தீயில் 3 நிமிடம் மணம் வரும் வரை வறுத்து, சர்க்கரை, கொட்டைகள், ஏலக்காய் கலக்கவும்.", "மாவை 12 உருண்டைகளாக்கி, ஒவ்வொன்றையும் சுமார் 3 அங்குல மெல்லிய பூரியாக தேய்க்கவும்.", "ஒவ்வொரு பூரியின் ஒரு பாதியில் ஒரு கரண்டி பூரணம் வைத்து, ஓரங்களில் தண்ணீர் தடவி அரைவட்டமாக மடிக்கவும்.", "ஓரங்களை இறுக்கமாக அழுத்தி முள் கரண்டியால் அல்லது பிளீட்டாக மூடவும்.", "மிதமான தீயில் எண்ணெயை சூடாக்கி, குஜியாக்களை தொகுதியாக 4-5 நிமிடம் பொன்னிறமாக பொரிக்கவும்.", "கிச்சன் பேப்பரில் வடிகட்டி முழுவதுமாக ஆறவிட்டு, காற்றுப் புகாத டப்பாவில் சேமிக்கவும்."],
      },
    },
  },
  translations: {
    "browntop-millet-46": {
      hi: { title: "कोर्ले मिर्ची बजी", description: "ब्राउनटॉप मिलेट और बेसन के घोल में लपेटकर तली गई बड़ी हरी मिर्च, दक्षिण भारत की तेज़ और कुरकुरी शाम की चाट।" },
      ta: { title: "கோர்லே மிளகாய் பஜ்ஜி", description: "பிரவுன்டாப் சிறுதானிய மற்றும் கடலை மாவில் தோய்த்து பொரித்த பெரிய பச்சை மிளகாய், மொறுமொறுப்பான மாலை நேர சிற்றுண்டி." },
    },
    "browntop-millet-47": {
      hi: { title: "कोर्ले झींगा फ्राई", description: "ब्राउनटॉप मिलेट के आटे की पतली परत में लिपटे कुरकुरे तले झींगे, काली मिर्च और करी पत्ते के स्वाद के साथ, तटीय दक्षिण भारत का नाश्ता।" },
      ta: { title: "கோர்லே இறால் வறுவல்", description: "பிரவுன்டாப் சிறுதானிய மாவு பூச்சுடன் மொறுமொறுப்பாக வறுத்த இறால், மிளகு, கறிவேப்பிலை மணத்துடன், கடலோர தமிழ் சிற்றுண்டி." },
    },
    "browntop-millet-48": {
      hi: { title: "कोर्ले कडुबु", description: "गुड़-नारियल के भरावन वाले भाप में पके ब्राउनटॉप मिलेट के कडुबु, केले के पत्ते में लिपटे, कर्नाटक की शाम की नरम नाश्ता।" },
      ta: { title: "கோர்லே கடுபு", description: "வெல்லம், தேங்காய் பூரணம் வைத்து வாழையிலையில் ஆவியில் வேகவைத்த பிரவுன்டாப் சிறுதானிய கடுபு, கர்நாடக மாலை நேர சிற்றுண்டி." },
    },
    "browntop-millet-49": {
      hi: { title: "कोर्ले दही वड़ा", description: "ब्राउनटॉप मिलेट और उड़द दाल के नरम वड़े, दही, इमली और पुदीने की चटनी के साथ, उत्तर भारत की ठंडी और चटपटी चाट।" },
      ta: { title: "கோர்லே தயிர் வடை", description: "பிரவுன்டாப் சிறுதானிய மற்றும் உளுந்து வடை, தயிர், புளி, புதினா சட்னியுடன் பரிமாறப்படும் குளிர்ச்சியான காரமான சிற்றுண்டி." },
    },
    "browntop-millet-50": {
      hi: { title: "कोर्ले गुझिया", description: "ब्राउनटॉप मिलेट और मैदे के कुरकुरे आवरण में खोया, मेवे और इलायची का भरावन भरकर तली गई पारंपरिक होली की मिठाई।" },
      ta: { title: "கோர்லே குஜியா", description: "பிரவுன்டாப் சிறுதானிய மற்றும் மைதா மேல்தோலில் கோவா, கொட்டைகள், ஏலக்காய் பூரணம் வைத்து பொரித்த பாரம்பரிய இனிப்பு." },
    },
  },
  plate: {
    "browntop-millet-46": {
      kcal: 290, carbsG: 38, fibreG: 5, gi: 58,
      minerals: ["iron", "magnesium", "calcium"],
      raw: { kind: "raw", name: "Sliced onion and cucumber", how: "Slice one onion and one cucumber into rounds and season with black salt and lemon juice." },
      sides: [
        { kind: "cooked", name: "Beans poriyal", how: "Stir-fry chopped beans with grated coconut, mustard seeds and curry leaves until just tender." },
        { kind: "cooked", name: "Tomato rasam", how: "Simmer tomato with tamarind water, pepper, cumin and garlic, then finish with coriander." },
      ],
    },
    "browntop-millet-47": {
      kcal: 300, carbsG: 26, fibreG: 3, gi: 50,
      minerals: ["iron", "zinc", "selenium"],
      raw: { kind: "raw", name: "Sliced cucumber and onion", how: "Slice cucumber and onion thinly and toss with lemon juice and a pinch of salt." },
      sides: [
        { kind: "cooked", name: "Cabbage poriyal", how: "Sauté shredded cabbage with mustard seeds, green chilli and grated coconut until tender." },
        { kind: "cooked", name: "Beans poriyal", how: "Stir-fry chopped beans with grated coconut, mustard seeds and curry leaves until just tender." },
      ],
    },
    "browntop-millet-48": {
      kcal: 230, carbsG: 36, fibreG: 4, gi: 60,
      minerals: ["iron", "magnesium", "manganese"],
      raw: { kind: "raw", name: "Cucumber rounds", how: "Slice cucumber into rounds and sprinkle with black salt." },
      sides: [
        { kind: "cooked", name: "Carrot kootu", how: "Simmer grated carrot and toor dal with coconut and cumin, then temper with mustard seeds." },
        { kind: "cooked", name: "Beans poriyal", how: "Stir-fry chopped beans with grated coconut, mustard seeds and curry leaves until just tender." },
      ],
    },
    "browntop-millet-49": {
      kcal: 330, carbsG: 30, fibreG: 4, gi: 60,
      minerals: ["calcium", "iron", "magnesium"],
      raw: { kind: "raw", name: "Sliced onion", how: "Slice one onion into thin rings and sprinkle with chaat masala." },
      sides: [
        { kind: "cooked", name: "Palak sabzi", how: "Cook spinach with onion, garlic and cumin until soft and mildly spiced." },
        { kind: "cooked", name: "Aloo gobi", how: "Cook potato and cauliflower with cumin, turmeric and tomato until tender." },
      ],
    },
    "browntop-millet-50": {
      kcal: 320, carbsG: 42, fibreG: 3, gi: 68,
      minerals: ["iron", "calcium", "magnesium"],
      raw: { kind: "raw", name: "Cucumber rounds", how: "Slice cucumber into thin rounds and sprinkle with black salt." },
      sides: [
        { kind: "cooked", name: "Beetroot poriyal", how: "Sauté grated beetroot with mustard seeds, curry leaves and a little grated coconut until tender." },
        { kind: "cooked", name: "Pumpkin kootu", how: "Simmer pumpkin and moong dal with coconut and cumin, then temper with mustard seeds." },
      ],
    },
  },
};
