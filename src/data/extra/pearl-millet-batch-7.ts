import type { Recipe } from "@/types/recipe";
import type { LineContent } from "@/data/i18n-content/sorghum";
import type { PlateInfo } from "@/types/plate";

/** pearl-millet recipes pearl-millet-46 to pearl-millet-50. */
export const PEARL_MILLET_BATCH_7: {
  recipes: Recipe[];
  content: Record<string, { hi: LineContent; ta: LineContent }>;
  translations: Record<string, { hi: { title: string; description: string }; ta: { title: string; description: string } }>;
  plate: Record<string, PlateInfo>;
} = {
  recipes: [
    {
      id: "pearl-millet-46",
      title: "Bajra Puri",
      milletId: "pearl-millet",
      region: "North Indian",
      diet: "Vegetarian",
      course: "Breakfast",
      description: "Light, puffed fried breads made from bajra and whole wheat flour with a little ajwain, served with potato curry or yoghurt for a filling morning meal.",
      servings: 4,
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      difficulty: "Easy",
      ingredients: [
        "1 cup bajra (pearl millet) flour",
        "1/2 cup whole wheat flour (atta)",
        "1 tsp ajwain (carom seeds), crushed",
        "1 tsp salt",
        "1 tbsp ghee or oil, for the dough",
        "Warm water as needed",
        "Oil for deep frying (about 1 cup)",
      ],
      steps: [
        "Mix the bajra flour, whole wheat flour, crushed ajwain and salt in a large bowl.",
        "Rub the ghee or oil into the flour with your fingertips until the mixture looks crumbly.",
        "Add warm water gradually and knead into a firm, smooth dough, then cover and rest it for 10 minutes.",
        "Divide the dough into small balls and roll each one into a round about 10 cm wide.",
        "Heat the oil in a kadai on medium heat until a small piece of dough rises quickly to the surface.",
        "Slide one puri in gently and press it lightly with a slotted spoon so it puffs up.",
        "Fry for 30 to 40 seconds per side until golden, then drain on paper towels.",
        "Serve hot with potato sabzi or a cup of curd.",
      ],
    },
    {
      id: "pearl-millet-47",
      title: "Kambu Appam",
      milletId: "pearl-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Breakfast",
      description: "Soft, lacy pancakes with crisp edges made from fermented pearl millet and rice, cooked in a special appam pan and eaten with coconut milk stew.",
      servings: 4,
      prepTimeMinutes: 20,
      cookTimeMinutes: 25,
      difficulty: "Medium",
      ingredients: [
        "1 cup kambu (pearl millet) flour",
        "1/2 cup raw rice, soaked for 4 hours and ground",
        "1/2 cup grated coconut",
        "1 tsp instant yeast or 1/4 tsp baking soda",
        "1 tsp sugar",
        "1 tsp salt",
        "Water as needed",
        "1 tbsp oil for greasing the pan",
      ],
      steps: [
        "Grind the soaked raw rice with the grated coconut and a little water to a fine, smooth batter.",
        "Mix in the kambu flour, sugar and salt, then add water until the batter is thick but pourable.",
        "Stir in the yeast or baking soda and leave the batter covered in a warm place for 6 to 8 hours to ferment.",
        "Heat a dedicated appam pan on medium heat and brush the inside lightly with oil.",
        "Pour a ladle of batter into the centre and swirl the pan so the batter spreads thin up the sides.",
        "Cover the pan and cook for 2 minutes until the edges are crisp and the centre is set.",
        "Lift the appam out with a spatula while the base is still golden.",
        "Serve warm with coconut milk stew or vegetable kurma.",
      ],
    },
    {
      id: "pearl-millet-48",
      title: "Bajra Sesame Ladoo",
      milletId: "pearl-millet",
      region: "West Indian",
      diet: "Vegetarian",
      course: "Dessert",
      description: "Energy-rich winter sweets made from roasted bajra flour, sesame seeds, jaggery and ghee, shaped into small round balls.",
      servings: 12,
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      difficulty: "Easy",
      ingredients: [
        "1 cup bajra (pearl millet) flour",
        "1/2 cup sesame seeds (til)",
        "3/4 cup jaggery, grated",
        "1/3 cup ghee",
        "1/2 tsp cardamom powder",
        "2 tbsp chopped peanuts",
        "1 tbsp warm water, only if needed",
      ],
      steps: [
        "Dry roast the sesame seeds in a pan on low heat until they turn golden and crackle, then transfer them to a plate.",
        "Roast the bajra flour in the same pan with 2 tbsp ghee for 6 to 8 minutes until it smells nutty.",
        "Grind the roasted sesame seeds coarsely in a mixer and keep them aside.",
        "Melt the grated jaggery with 2 tbsp water in a pan and cook it to a soft, sticky syrup.",
        "Mix the roasted bajra, sesame powder, peanuts and cardamom into the warm jaggery syrup.",
        "Add the remaining ghee and mix until the mixture holds together when pressed.",
        "Take small portions and roll them into tight round ladoos while still warm.",
        "Cool completely on a plate and store in an airtight box for up to two weeks.",
      ],
    },
    {
      id: "pearl-millet-49",
      title: "Bajra Keema Paratha",
      milletId: "pearl-millet",
      region: "North Indian",
      diet: "Non-Vegetarian",
      course: "Main Course",
      description: "Flaky bajra flatbreads stuffed with spiced minced mutton keema, pan-fried in ghee and served with yoghurt and onion.",
      servings: 4,
      prepTimeMinutes: 30,
      cookTimeMinutes: 35,
      difficulty: "Hard",
      ingredients: [
        "1 cup bajra (pearl millet) flour",
        "1/2 tsp salt",
        "Warm water as needed",
        "250 g mutton mince (keema)",
        "1 small onion, finely chopped",
        "1 tbsp ginger-garlic paste",
        "1 green chilli, finely chopped",
        "1 tsp garam masala",
        "1/2 tsp red chilli powder",
        "2 tbsp oil, for the keema",
        "4 tbsp ghee, for frying the parathas",
      ],
      steps: [
        "Knead the bajra flour with salt and warm water to a soft dough and rest it for 15 minutes.",
        "Heat the oil and fry the chopped onion, ginger-garlic paste and green chilli until golden.",
        "Add the mutton keema, red chilli powder and garam masala, and cook on medium heat until the meat is browned and dry.",
        "Let the keema cool completely before using it as a filling, so the dough does not tear.",
        "Divide the dough and the cooled keema into 4 portions, and roll each dough ball into a small disc.",
        "Place a portion of keema in the centre, bring the edges together, and seal it into a ball before rolling it out again.",
        "Roll the stuffed dough gently into a paratha about 5 mm thick, taking care not to let the filling out.",
        "Shallow fry each paratha in ghee on medium heat for 2 to 3 minutes per side until golden and crisp, then serve hot with curd.",
      ],
    },
    {
      id: "pearl-millet-50",
      title: "Kambu Ellu Sadam",
      milletId: "pearl-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Main Course",
      description: "A fragrant sesame rice dish from Tamil Nadu made with cooked broken kambu, toasted sesame, peanuts and a sizzling tempering of mustard and curry leaves.",
      servings: 4,
      prepTimeMinutes: 15,
      cookTimeMinutes: 30,
      difficulty: "Easy",
      ingredients: [
        "1 cup broken kambu (pearl millet)",
        "2 1/2 cups water",
        "1/2 cup sesame seeds (til), dry roasted and coarsely ground",
        "2 tbsp peanuts",
        "2 tbsp sesame oil",
        "1 tsp mustard seeds",
        "1 tsp urad dal",
        "8 curry leaves",
        "1 pinch asafoetida",
        "1 tsp salt",
      ],
      steps: [
        "Dry roast the broken kambu in a pan for 2 minutes, then cook it in the water with a pinch of salt until soft and fluffy.",
        "Dry roast the peanuts until crisp and set them aside.",
        "Heat the sesame oil in a pan and add the mustard seeds and urad dal until they splutter.",
        "Add the curry leaves, asafoetida and roasted peanuts, and fry for 1 minute.",
        "Stir in the ground sesame powder and fry for another minute until fragrant.",
        "Add the cooked kambu to the pan along with the salt and mix gently so that every grain is coated.",
        "Cook on low heat for 2 minutes to let the flavours combine.",
        "Serve warm with a spoon of ghee or a side of vegetable kootu.",
      ],
    },
  ],
  content: {
    "pearl-millet-46": {
      hi: {
        ingredients: ["1 कप बाजरे का आटा", "1/2 कप गेहूँ का आटा (आटा)", "1 छोटा चम्मच अजवाइन, कुटी हुई", "1 छोटा चम्मच नमक", "1 बड़ा चम्मच घी या तेल, आटे के लिए", "ज़रूरत अनुसार गुनगुना पानी", "तलने के लिए तेल (लगभग 1 कप)"],
        steps: ["बाजरे का आटा, गेहूँ का आटा, कुटी अजवाइन और नमक एक बड़े बर्तन में मिलाएँ।", "घी या तेल को उँगलियों के सिरों से आटे में मिलाएँ जब तक मिश्रण भुरभुरा न लगे।", "गुनगुना पानी धीरे-धीरे डालकर सख्त, चिकना आटा गूँधें, फिर ढककर 10 मिनट रखें।", "आटे को छोटी गोलियों में बाँटें और हर गोली को लगभग 10 सेमी की गोल पूरी बेलें।", "कड़ाही में तेल मध्यम आँच पर गरम करें जब तक आटे का एक छोटा टुकड़ा तुरंत ऊपर न आ जाए।", "एक पूरी धीरे से डालें और झारे से हल्का दबाएँ ताकि वह फूल जाए।", "हर तरफ 30 से 40 सेकंड सुनहरी होने तक तलें, फिर टिश्यू पेपर पर निकालें।", "गरम आलू की सब्ज़ी या एक कप दही के साथ परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் கம்பு மாவு", "1/2 கப் கோதுமை மாவு (ஆட்டா)", "1 டீஸ்பூன் ஓமம், இடித்தது", "1 டீஸ்பூன் உப்பு", "1 டேபிள்ஸ்பூன் நெய் அல்லது எண்ணெய், மாவுக்கு", "தேவையான அளவு வெதுவெதுப்பான தண்ணீர்", "பொரிக்க எண்ணெய் (சுமார் 1 கப்)"],
        steps: ["கம்பு மாவு, கோதுமை மாவு, இடித்த ஓமம், உப்பு ஒரு பெரிய பாத்திரத்தில் கலக்கவும்.", "நெய் அல்லது எண்ணெயை விரல் நுனிகளால் மாவில் கலக்கவும், கலவை உதிரியாக வரும் வரை.", "வெதுவெதுப்பான தண்ணீரை சிறிது சிறிதாக ஊற்றி கெட்டியான, மென்மையான மாவாக பிசைந்து, மூடி 10 நிமிடம் வைக்கவும்.", "மாவை சிறிய உருண்டைகளாக பிரித்து, ஒவ்வொன்றையும் சுமார் 10 செ.மீ. வட்ட பூரியாக தேய்க்கவும்.", "வாணலியில் எண்ணெயை மிதமான தீயில் சூடாக்கவும், மாவு ஒரு துண்டு உடனே மேலே வரும் பதத்தில்.", "ஒரு பூரியை மெதுவாக போட்டு, துளையுள்ள கரண்டியால் லேசாக அழுத்தி உப்ப விடவும்.", "ஒவ்வொரு பக்கமும் 30 முதல் 40 வினாடி பொன்னிறமாகும் வரை பொரித்து, டிஷ்யூ தாளில் வடிகட்டவும்.", "சூடான உருளைக்கிழங்கு மசாலா அல்லது ஒரு கப் தயிருடன் பரிமாறவும்."],
      },
    },
    "pearl-millet-47": {
      hi: {
        ingredients: ["1 कप कंबु (बाजरा) का आटा", "1/2 कप कच्चा चावल, 4 घंटे भिगोकर पीसा हुआ", "1/2 कप कद्दूकस किया नारियल", "1 छोटा चम्मच इंस्टेंट यीस्ट या 1/4 छोटा चम्मच बेकिंग सोडा", "1 छोटा चम्मच चीनी", "1 छोटा चम्मच नमक", "ज़रूरत अनुसार पानी", "अप्पम पैन में लगाने के लिए 1 बड़ा चम्मच तेल"],
        steps: ["भीगे कच्चे चावल को नारियल और थोड़े पानी के साथ पीसकर बारीक, चिकना घोल बनाएँ।", "कंबु का आटा, चीनी और नमक मिलाएँ, फिर इतना पानी डालें कि घोल गाढ़ा पर बहने वाला हो।", "यीस्ट या बेकिंग सोडा मिलाकर घोल को ढककर गुनगुनी जगह पर 6 से 8 घंटे फर्मेंट होने दें।", "अप्पम पैन को मध्यम आँच पर गरम करें और अंदर से हल्का तेल लगाएँ।", "बीच में एक करछी घोल डालें और पैन को घुमाकर घोल किनारों तक पतला फैलाएँ।", "पैन ढककर 2 मिनट पकाएँ, जब तक किनारे कुरकुरे और बीच का हिस्सा सेट न हो जाए।", "नीचे का हिस्सा सुनहरा रहते हुए स्पैचुला से अप्पम निकालें।", "गरम-गरम नारियल के दूध के स्ट्यू या सब्ज़ी कुर्मा के साथ परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் கம்பு மாவு", "1/2 கப் பச்சை அரிசி, 4 மணி நேரம் ஊறவைத்து அரைத்தது", "1/2 கப் துருவிய தேங்காய்", "1 டீஸ்பூன் இன்ஸ்டன்ட் ஈஸ்ட் அல்லது 1/4 டீஸ்பூன் பேக்கிங் சோடா", "1 டீஸ்பூன் சர்க்கரை", "1 டீஸ்பூன் உப்பு", "தேவையான அளவு தண்ணீர்", "அப்பச்சட்டியில் தடவ 1 டேபிள்ஸ்பூன் எண்ணெய்"],
        steps: ["ஊறவைத்த பச்சை அரிசியை தேங்காய், சிறிது தண்ணீருடன் அரைத்து மென்மையான மாவாக்கவும்.", "கம்பு மாவு, சர்க்கரை, உப்பு சேர்த்து, மாவு கெட்டியாக ஆனால் ஊற்றும் பதத்தில் வரும் வரை தண்ணீர் சேர்க்கவும்.", "ஈஸ்ட் அல்லது பேக்கிங் சோடா சேர்த்து, மூடி வெதுவெதுப்பான இடத்தில் 6 முதல் 8 மணி நேரம் புளிக்க விடவும்.", "அப்பச்சட்டியை மிதமான தீயில் சூடாக்கி, உள்ளே லேசாக எண்ணெய் தடவவும்.", "நடுவில் ஒரு கரண்டி மாவை ஊற்றி, சட்டியை சுற்றி ஓரங்கள் வரை மெல்லியதாக பரவ விடவும்.", "சட்டியை மூடி 2 நிமிடம் வேகவிடவும், ஓரங்கள் மொறுமொறுப்பாகவும் நடுப்பகுதி கெட்டியாகவும் வரும் வரை.", "அடிப்பகுதி பொன்னிறமாக இருக்கும் போதே கரண்டியால் அப்பத்தை எடுக்கவும்.", "சூடாக தேங்காய்ப்பால் குழம்பு அல்லது காய்கறி குருமாவுடன் பரிமாறவும்."],
      },
    },
    "pearl-millet-48": {
      hi: {
        ingredients: ["1 कप बाजरे का आटा", "1/2 कप तिल", "3/4 कप गुड़, कसा हुआ", "1/3 कप घी", "1/2 छोटा चम्मच इलायची पाउडर", "2 बड़े चम्मच कटी मूँगफली", "ज़रूरत हो तो 1 बड़ा चम्मच गुनगुना पानी"],
        steps: ["तिल को धीमी आँच पर सूखे पैन में सुनहरे और चटकने तक भूनें, फिर एक प्लेट में निकालें।", "उसी पैन में 2 बड़े चम्मच घी डालकर बाजरे का आटा 6 से 8 मिनट भूनें जब तक नटी खुशबू न आए।", "भुने तिल को मिक्सर में मोटा-मोटा पीसकर अलग रखें।", "कसे गुड़ को 2 बड़े चम्मच पानी के साथ पैन में पिघलाएँ और नरम, चिपचिपी चाशनी बनने तक पकाएँ।", "भुना बाजरा, तिल का पाउडर, मूँगफली और इलायची गरम चाशनी में मिलाएँ।", "बचा घी डालकर इतना मिलाएँ कि दबाने पर मिश्रण आपस में जुड़ जाए।", "छोटे हिस्से लेकर गरम रहते ही कसकर गोल लड्डू बनाएँ।", "प्लेट में पूरी तरह ठंडा होने दें और दो हफ्ते तक हवा-बंद डिब्बे में रखें।"],
      },
      ta: {
        ingredients: ["1 கப் கம்பு மாவு", "1/2 கப் எள்", "3/4 கப் வெல்லம், துருவியது", "1/3 கப் நெய்", "1/2 டீஸ்பூன் ஏலக்காய்த் தூள்", "2 டேபிள்ஸ்பூன் நறுக்கிய நிலக்கடலை", "தேவைப்பட்டால் 1 டேபிள்ஸ்பூன் வெதுவெதுப்பான தண்ணீர்"],
        steps: ["எள்ளை மெல்லிய தீயில் உலர்ந்த வாணலியில் பொன்னிறமாகி வெடிக்கும் வரை வறுத்து, தட்டில் எடுக்கவும்.", "அதே வாணலியில் 2 டேபிள்ஸ்பூன் நெய் சேர்த்து கம்பு மாவை 6 முதல் 8 நிமிடம் நட்டு வாசனை வரும் வரை வறுக்கவும்.", "வறுத்த எள்ளை மிக்சியில் கொரகொரப்பாக அரைத்து தனியாக வைக்கவும்.", "துருவிய வெல்லத்தை 2 டேபிள்ஸ்பூன் தண்ணீருடன் வாணலியில் உருக்கி, மென்மையான ஒட்டும் பாகு வரும் வரை காய்ச்சவும்.", "வறுத்த கம்பு, எள் தூள், நிலக்கடலை, ஏலக்காயை சூடான பாகில் சேர்க்கவும்.", "மீதமுள்ள நெய் சேர்த்து, அழுத்தும் போது கலவை ஒன்றாக சேரும் வரை கலக்கவும்.", "சிறு பகுதிகளாக எடுத்து, சூடாக இருக்கும் போதே இறுக்கமான உருண்டைகளாக உருட்டவும்.", "தட்டில் முழுவதும் ஆறவிட்டு, இரண்டு வாரம் வரை காற்றுப்புகாத டப்பாவில் வைக்கவும்."],
      },
    },
    "pearl-millet-49": {
      hi: {
        ingredients: ["1 कप बाजरे का आटा", "1/2 छोटा चम्मच नमक", "ज़रूरत अनुसार गुनगुना पानी", "250 ग्राम मटन कीमा", "1 छोटा प्याज़, बारीक कटा", "1 बड़ा चम्मच अदरक-लहसुन का पेस्ट", "1 हरी मिर्च, बारीक कटी", "1 छोटा चम्मच गरम मसाला", "1/2 छोटा चम्मच लाल मिर्च पाउडर", "कीमा भूनने के लिए 2 बड़े चम्मच तेल", "पराठे सेंकने के लिए 4 बड़े चम्मच घी"],
        steps: ["बाजरे के आटे को नमक और गुनगुने पानी से नरम आटा गूँधें और 15 मिनट रखें।", "तेल में कटा प्याज़, अदरक-लहसुन पेस्ट और हरी मिर्च सुनहरा होने तक भूनें।", "मटन कीमा, लाल मिर्च और गरम मसाला डालकर मध्यम आँच पर पकाएँ जब तक मांस भूरा और सूखा न हो जाए।", "भरावन के लिए कीमा को पूरी तरह ठंडा होने दें ताकि आटा न फटे।", "आटे और ठंडे कीमा को 4 हिस्सों में बाँटें, और हर आटे की गोली को छोटी टिक्की बनाएँ।", "एक हिस्सा कीमा बीच में रखें, किनारों को समेटकर गोली बनाएँ और फिर से हल्के हाथ से बेलें।", "भरे आटे को लगभग 5 मिमी मोटा पराठा बेलें, ध्यान रखें कि भरावन बाहर न निकले।", "हर पराठे को घी में मध्यम आँच पर 2 से 3 मिनट प्रति तरफ सुनहरा और कुरकुरा होने तक सेंकें, फिर दही के साथ गरम परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் கம்பு மாவு", "1/2 டீஸ்பூன் உப்பு", "தேவையான அளவு வெதுவெதுப்பான தண்ணீர்", "250 கிராம் ஆட்டுக்கறி கீமா", "1 சிறிய வெங்காயம், பொடியாக நறுக்கியது", "1 டேபிள்ஸ்பூன் இஞ்சி-பூண்டு விழுது", "1 பச்சை மிளகாய், பொடியாக நறுக்கியது", "1 டீஸ்பூன் கரம் மசாலா", "1/2 டீஸ்பூன் மிளகாய்த் தூள்", "கீமா வறுக்க 2 டேபிள்ஸ்பூன் எண்ணெய்", "பராத்தா சுட 4 டேபிள்ஸ்பூன் நெய்"],
        steps: ["கம்பு மாவை உப்பு, வெதுவெதுப்பான தண்ணீருடன் மிருதுவான மாவாக பிசைந்து 15 நிமிடம் வைக்கவும்.", "எண்ணெயில் நறுக்கிய வெங்காயம், இஞ்சி-பூண்டு விழுது, பச்சை மிளகாயை பொன்னிறமாக வதக்கவும்.", "ஆட்டுக்கறி கீமா, மிளகாய்த் தூள், கரம் மசாலா சேர்த்து, இறைச்சி பழுப்பாகி உலரும் வரை மிதமான தீயில் வேகவிடவும்.", "பூரணத்துக்கு கீமாவை முழுவதும் ஆறவிடவும், மாவு கிழியாமல் இருக்க.", "மாவையும் ஆறிய கீமாவையும் 4 பகுதிகளாக பிரித்து, ஒவ்வொரு மாவு உருண்டையையும் சிறு வட்டமாக தட்டவும்.", "ஒரு பகுதி கீமாவை நடுவில் வைத்து, ஓரங்களை மூடி உருண்டையாக்கி மீண்டும் மெதுவாக உருட்டவும்.", "பூரணம் வெளியே வராமல் கவனமாக சுமார் 5 மி.மீ. தடிமனான பராத்தாவாக உருட்டவும்.", "ஒவ்வொரு பராத்தாவையும் நெய்யில் மிதமான தீயில் ஒவ்வொரு பக்கமும் 2 முதல் 3 நிமிடம் பொன்னிறமாகவும் மொறுமொறுப்பாகவும் சுடவும், பிறகு தயிருடன் சூடாக பரிமாறவும்."],
      },
    },
    "pearl-millet-50": {
      hi: {
        ingredients: ["1 कप टूटा कंबु (बाजरा)", "2 1/2 कप पानी", "1/2 कप तिल, सूखे भूनकर मोटा पीसा हुआ", "2 बड़े चम्मच मूँगफली", "2 बड़े चम्मच तिल का तेल", "1 छोटा चम्मच राई", "1 छोटा चम्मच उड़द दाल", "8 करी पत्ते", "1 चुटकी हींग", "1 छोटा चम्मच नमक"],
        steps: ["टूटे कंबु को पैन में 2 मिनट हल्का भूनें, फिर नमक की चुटकी के साथ पानी में नरम और फूला हुआ पकाएँ।", "मूँगफली को सूखा भूनकर कुरकुरा होने दें और अलग रखें।", "तिल के तेल को पैन में गरम करें और राई व उड़द दाल डालें जब तक वे चटकने न लगें।", "करी पत्ते, हींग और भुनी मूँगफली डालकर 1 मिनट भूनें।", "पिसा तिल पाउडर डालकर एक मिनट और भूनें जब तक खुशबू न आए।", "पका कंबु पैन में डालें, नमक मिलाएँ और धीरे से चलाएँ ताकि हर दाना लिपट जाए।", "हल्की आँच पर 2 मिनट पकाएँ ताकि स्वाद आपस में घुल जाए।", "गरम परोसें, साथ में एक चम्मच घी या सब्ज़ी कूटू के साथ।"],
      },
      ta: {
        ingredients: ["1 கப் உடைத்த கம்பு", "2 1/2 கப் தண்ணீர்", "1/2 கப் எள், உலர வறுத்து கொரகொரப்பாக அரைத்தது", "2 டேபிள்ஸ்பூன் நிலக்கடலை", "2 டேபிள்ஸ்பூன் எள் எண்ணெய்", "1 டீஸ்பூன் கடுகு", "1 டீஸ்பூன் உளுத்தம் பருப்பு", "8 கறிவேப்பிலை", "1 சிட்டிகை பெருங்காயம்", "1 டீஸ்பூன் உப்பு"],
        steps: ["உடைத்த கம்பை வாணலியில் 2 நிமிடம் லேசாக வறுத்து, பிறகு ஒரு சிட்டிகை உப்புடன் தண்ணீரில் மென்மையாகவும் பொலபொலப்பாகவும் வேகவைக்கவும்.", "நிலக்கடலையை உலர வறுத்து மொறுமொறுப்பாக்கி தனியாக வைக்கவும்.", "எள் எண்ணெயை வாணலியில் சூடாக்கி, கடுகு, உளுத்தம் பருப்பை வெடிக்கும் வரை சேர்க்கவும்.", "கறிவேப்பிலை, பெருங்காயம், வறுத்த நிலக்கடலை சேர்த்து 1 நிமிடம் வறுக்கவும்.", "அரைத்த எள் தூளை சேர்த்து மேலும் ஒரு நிமிடம் வறுக்கவும், வாசனை வரும் வரை.", "வெந்த கம்பை வாணலியில் சேர்த்து உப்புடன் மெதுவாக கிளறி, ஒவ்வொரு தானியமும் கலக்கும் வரை கலக்கவும்.", "மெல்லிய தீயில் 2 நிமிடம் வேகவிட்டு சுவைகள் ஒன்றாக சேரவிடவும்.", "சூடாக ஒரு கரண்டி நெய் அல்லது காய்கறி கூட்டுடன் பரிமாறவும்."],
      },
    },
  },
  translations: {
    "pearl-millet-46": {
      hi: { title: "बाजरा पूरी", description: "बाजरे और गेहूँ के आटे में थोड़ी अजवाइन डालकर बनी हल्की, फूली हुई तली पूरियाँ, जिन्हें आलू की सब्ज़ी या दही के साथ परोसा जाता है।" },
      ta: { title: "கம்பு பூரி", description: "கம்பு மற்றும் கோதுமை மாவுடன் சிறிது ஓமம் சேர்த்து செய்யப்படும் லேசான, உப்பிய பொரித்த பூரி. உருளைக்கிழங்கு மசாலா அல்லது தயிருடன் பரிமாறப்படுகிறது." },
    },
    "pearl-millet-47": {
      hi: { title: "कंबु अप्पम", description: "खमीर उठाए कंबु और चावल के घोल से बने नरम, जालीदार पैनकेक जिनके किनारे कुरकुरे होते हैं, नारियल के दूध के स्ट्यू के साथ खाए जाते हैं।" },
      ta: { title: "கம்பு அப்பம்", description: "புளிக்க வைத்த கம்பு மற்றும் அரிசி மாவில் செய்யப்படும் மென்மையான, வலைப் போன்ற அப்பம். ஓரங்கள் மொறுமொறுப்பாக இருக்கும். தேங்காய்ப்பால் குழம்புடன் சாப்பிடப்படுகிறது." },
    },
    "pearl-millet-48": {
      hi: { title: "बाजरा तिल लड्डू", description: "भुने बाजरे के आटे, तिल, गुड़ और घी से बने ऊर्जा से भरपूर सर्दियों के छोटे गोल लड्डू।" },
      ta: { title: "கம்பு எள் உருண்டை", description: "வறுத்த கம்பு மாவு, எள், வெல்லம், நெய்யில் செய்யப்படும் ஆற்றல் நிறைந்த குளிர்கால இனிப்பு உருண்டைகள்." },
    },
    "pearl-millet-49": {
      hi: { title: "बाजरा कीमा पराठा", description: "बाजरे के नरम आटे में मसालेदार मटन कीमा भरकर घी में सेंके गए परतदार पराठे, जिन्हें दही और प्याज़ के साथ परोसा जाता है।" },
      ta: { title: "கம்பு கீமா பராத்தா", description: "கம்பு மாவில் மசாலா ஆட்டுக்கறி கீமாவை வைத்து நெய்யில் சுட்ட மடிப்பு பராத்தா. தயிர் மற்றும் வெங்காயத்துடன் பரிமாறப்படுகிறது." },
    },
    "pearl-millet-50": {
      hi: { title: "कंबु एल्लु सादम", description: "पके टूटे कंबु को भुने तिल, मूँगफली और करी पत्ते-राई के छौंक के साथ मिलाकर बना तमिलनाडु का सुगंधित तिल चावल।" },
      ta: { title: "கம்பு எள் சாதம்", description: "வெந்த உடைத்த கம்பை வறுத்த எள், நிலக்கடலை, கடுகு-கறிவேப்பிலை தாளிப்புடன் கலந்து செய்யப்படும் தமிழ்நாட்டின் மணமுள்ள எள் சாதம்." },
    },
  },
  plate: {
    "pearl-millet-46": {
      kcal: 260, carbsG: 34, fibreG: 5, gi: 68, minerals: ["magnesium", "iron", "phosphorus"],
      raw: { kind: "raw", name: "Cucumber and onion salad", how: "Slice cucumber and onion into rounds, toss with lemon juice, black salt and chilli powder." },
      sides: [
        { kind: "cooked", name: "Aloo sabzi", how: "Cook potato cubes with cumin, tomato and turmeric until tender and lightly dry." },
        { kind: "cooked", name: "Palak sabzi", how: "Saute chopped spinach with garlic, ginger and a little cumin until just wilted." },
      ],
    },
    "pearl-millet-47": {
      kcal: 190, carbsG: 30, fibreG: 4, gi: 60, minerals: ["magnesium", "iron", "manganese"],
      raw: { kind: "raw", name: "Carrot and cucumber sticks", how: "Cut carrot and cucumber into thin sticks and serve with a pinch of salt and lemon." },
      sides: [
        { kind: "cooked", name: "Vegetable stew", how: "Simmer carrot, beans and potato in coconut milk with curry leaves, green chilli and ginger." },
        { kind: "cooked", name: "Beans poriyal", how: "Stir fry chopped beans with mustard seeds, grated coconut and curry leaves until tender." },
      ],
    },
    "pearl-millet-48": {
      kcal: 270, carbsG: 30, fibreG: 4, gi: 62, minerals: ["calcium", "iron", "magnesium", "zinc"],
      raw: { kind: "raw", name: "Carrot and radish sticks", how: "Cut carrot and radish into thin sticks and serve with a pinch of black salt." },
      sides: [
        { kind: "cooked", name: "Dal tadka", how: "Cook toor dal until soft, then pour over a tempering of cumin, garlic and dried red chilli." },
        { kind: "cooked", name: "Lauki sabzi", how: "Cook bottle gourd cubes with cumin, tomato and turmeric until soft." },
      ],
    },
    "pearl-millet-49": {
      kcal: 380, carbsG: 34, fibreG: 4, gi: 64, minerals: ["iron", "zinc", "phosphorus", "magnesium"],
      raw: { kind: "raw", name: "Onion and cucumber salad", how: "Slice onion and cucumber thinly, then toss with lemon juice and a pinch of chaat masala." },
      sides: [
        { kind: "cooked", name: "Dal fry", how: "Cook masoor dal until soft, then finish with a tadka of cumin, garlic and red chilli." },
        { kind: "cooked", name: "Gobhi sabzi", how: "Saute cauliflower florets with cumin, ginger and turmeric until tender." },
      ],
    },
    "pearl-millet-50": {
      kcal: 330, carbsG: 46, fibreG: 5, gi: 60, minerals: ["calcium", "magnesium", "iron", "zinc"],
      raw: { kind: "raw", name: "Tomato and cucumber salad", how: "Dice tomato and cucumber, and season with lemon juice, black pepper and coriander." },
      sides: [
        { kind: "cooked", name: "Vegetable kootu", how: "Simmer chopped vegetables with toor dal and coconut paste, then temper with mustard and curry leaves." },
        { kind: "cooked", name: "Cabbage poriyal", how: "Stir fry shredded cabbage with mustard seeds, urad dal and grated coconut until tender." },
      ],
    },
  },
};
