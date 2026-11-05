import type { Recipe } from "@/types/recipe";
import type { LineContent } from "@/data/i18n-content/sorghum";
import type { PlateInfo } from "@/types/plate";

/** finger-millet recipes finger-millet-41 to finger-millet-45. */
export const FINGER_MILLET_BATCH_6: {
  recipes: Recipe[];
  content: Record<string, { hi: LineContent; ta: LineContent }>;
  translations: Record<string, { hi: { title: string; description: string }; ta: { title: string; description: string } }>;
  plate: Record<string, PlateInfo>;
} = {
  recipes: [
    {
      id: "finger-millet-41",
      title: "Ragi Banana Pancakes",
      milletId: "finger-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Breakfast",
      description: "Soft, lightly sweet pancakes made from ragi flour and ripe banana, leavened with baking powder and flavoured with cardamom, a quick breakfast for children.",
      servings: 3,
      prepTimeMinutes: 10,
      cookTimeMinutes: 15,
      difficulty: "Easy",
      ingredients: [
        "1 cup ragi (finger millet) flour",
        "1 ripe banana, mashed",
        "3/4 cup milk",
        "1 tbsp jaggery powder",
        "1/2 tsp baking powder",
        "1/4 tsp cardamom powder",
        "1 pinch salt",
        "1 tbsp ghee for the pan",
      ],
      steps: [
        "Mash the ripe banana in a bowl until it is completely smooth with no lumps.",
        "Add the jaggery powder, cardamom and salt and mix until the jaggery begins to dissolve.",
        "Stir in the ragi flour and milk gradually to make a thick, smooth batter.",
        "Add the baking powder just before cooking and fold it in gently.",
        "Heat a non-stick pan on medium-low heat and brush it with a few drops of ghee.",
        "Pour a ladle of batter into the pan and spread it into a round about 10 cm wide.",
        "Cook for 2 to 3 minutes until small bubbles appear on the surface, then flip and cook the other side for 1 to 2 minutes.",
        "Serve the pancakes warm with honey, fresh fruit or a spoon of curd.",
      ],
    },
    {
      id: "finger-millet-42",
      title: "Ragi Upma",
      milletId: "finger-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Breakfast",
      description: "A savoury, fluffy upma of dry-roasted ragi flour with mustard, urad dal, onion and curry leaves, a healthy and filling South Indian breakfast.",
      servings: 3,
      prepTimeMinutes: 10,
      cookTimeMinutes: 15,
      difficulty: "Easy",
      ingredients: [
        "1 cup ragi (finger millet) flour",
        "2 tbsp oil",
        "1 tsp mustard seeds",
        "1 tsp urad dal",
        "1 small onion, finely chopped",
        "1 green chilli, finely chopped",
        "8 curry leaves",
        "1/2 tsp ginger, grated",
        "1 1/2 cups water",
        "1/2 tsp salt",
        "1 tbsp grated coconut",
      ],
      steps: [
        "Dry roast the ragi flour in a pan on low heat for 3 to 4 minutes, stirring constantly, until it smells fragrant.",
        "Transfer the roasted flour to a plate and let it cool slightly.",
        "Heat the oil in a pan and add the mustard seeds and urad dal until they splutter.",
        "Add the chopped onion, green chilli, grated ginger and curry leaves and fry until the onion turns soft.",
        "Pour in the water and salt and bring it to a rolling boil.",
        "Lower the heat and slowly sprinkle in the roasted ragi flour while stirring continuously to avoid lumps.",
        "Cover the pan and cook on low heat for 3 minutes until the upma is fluffy and fully cooked.",
        "Mix in the grated coconut and serve hot with a spoon of ghee or coconut chutney.",
      ],
    },
    {
      id: "finger-millet-43",
      title: "Ragi Shankarpali",
      milletId: "finger-millet",
      region: "West Indian",
      diet: "Vegetarian",
      course: "Snack",
      description: "Crisp, lightly sweet diamond-shaped biscuits from Maharashtra, made with ragi flour, whole wheat flour, jaggery and ghee and deep fried until golden.",
      servings: 6,
      prepTimeMinutes: 20,
      cookTimeMinutes: 25,
      difficulty: "Medium",
      ingredients: [
        "1 cup ragi (finger millet) flour",
        "1/2 cup whole wheat flour (atta)",
        "1/2 cup jaggery powder",
        "1/3 cup ghee",
        "1/4 cup milk",
        "1/2 tsp cardamom powder",
        "1 tbsp sesame seeds",
        "1 cup oil for deep frying",
      ],
      steps: [
        "Mix the ragi flour and whole wheat flour in a large bowl and rub in the ghee with your fingertips.",
        "Dissolve the jaggery powder in the milk and strain it to remove any grit.",
        "Add the jaggery milk, cardamom and sesame seeds to the flour and knead into a stiff, smooth dough.",
        "Rest the dough for 15 minutes, then roll it out into a thin sheet about 3 mm thick.",
        "Cut the sheet into diamond-shaped pieces using a sharp knife.",
        "Heat the oil on medium-low heat and test with one piece, which should rise slowly to the top.",
        "Fry the shankarpali in batches for 3 to 4 minutes, turning them until golden and crisp.",
        "Drain on paper towels, cool completely, and store in an airtight tin.",
      ],
    },
    {
      id: "finger-millet-44",
      title: "Ragi Vegetable Pulao",
      milletId: "finger-millet",
      region: "North Indian",
      diet: "Vegetarian",
      course: "Main Course",
      description: "A fragrant one-pot pulao of ragi grits cooked with carrot, green peas and whole spices in ghee, a light and wholesome lunch option.",
      servings: 4,
      prepTimeMinutes: 20,
      cookTimeMinutes: 25,
      difficulty: "Medium",
      ingredients: [
        "1 cup ragi (finger millet) grits (ragi rava)",
        "2 tbsp ghee",
        "1 tsp cumin seeds",
        "1 bay leaf and 2 cloves",
        "1 small onion, sliced",
        "1 carrot, diced",
        "1/2 cup green peas",
        "1 tsp ginger-garlic paste",
        "2 1/2 cups water",
        "1 tsp salt",
      ],
      steps: [
        "Dry roast the ragi grits in a pan for 2 minutes until they turn a shade darker and smell nutty.",
        "Heat the ghee in a heavy pot and add the cumin seeds, bay leaf and cloves until fragrant.",
        "Add the sliced onion and fry on medium heat until golden at the edges.",
        "Stir in the ginger-garlic paste, then add the carrot and peas and cook for 3 minutes.",
        "Add the roasted ragi grits and stir for 1 minute so they are coated with the spices.",
        "Pour in the water and salt, bring to a boil, then cover and cook on low heat for 15 minutes.",
        "Check that the grits are soft and the water is absorbed, then fluff the pulao gently with a fork.",
        "Rest covered for 5 minutes and serve hot with raita.",
      ],
    },
    {
      id: "finger-millet-45",
      title: "Ragi Egg Dosa",
      milletId: "finger-millet",
      region: "South Indian",
      diet: "Non-Vegetarian",
      course: "Breakfast",
      description: "Thin, crisp ragi dosas with a beaten egg and onion spread over the top while cooking, a protein-rich breakfast that is quick to make.",
      servings: 4,
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      difficulty: "Medium",
      ingredients: [
        "1 cup ragi (finger millet) flour",
        "1/4 cup rice flour",
        "1/4 cup urad dal, soaked for 4 hours and ground",
        "2 eggs, beaten",
        "1 small onion, finely chopped",
        "1 green chilli, finely chopped",
        "1/2 tsp cumin seeds",
        "1 tsp salt",
        "Water as needed",
        "2 tbsp oil for cooking",
      ],
      steps: [
        "Mix the ragi flour, rice flour, ground urad dal, cumin and salt with water into a thin, pourable batter.",
        "Rest the batter for 15 minutes so that it thickens slightly.",
        "Heat a dosa tawa on medium heat and spread a ladle of batter into a thin round.",
        "Drizzle a little oil around the edges and let the dosa cook until the base turns golden.",
        "Spread a spoonful of beaten egg mixed with onion and chilli evenly over the top of the dosa.",
        "Cook for 1 minute until the egg sets, then flip the dosa carefully and cook for 30 seconds.",
        "Fold the dosa in half or roll it into a cone while it is still hot.",
        "Serve immediately with coconut chutney or sambar.",
      ],
    },
  ],
  content: {
    "finger-millet-41": {
      hi: {
        ingredients: ["1 कप रागी (मडुआ) का आटा", "1 पका केला, मसला हुआ", "3/4 कप दूध", "1 बड़ा चम्मच गुड़ का पाउडर", "1/2 छोटा चम्मच बेकिंग पाउडर", "1/4 छोटा चम्मच इलायची पाउडर", "1 चुटकी नमक", "पैन के लिए 1 बड़ा चम्मच घी"],
        steps: ["पके केले को कटोरे में मसलकर बिना गुठली का चिकना बना लें।", "गुड़ पाउडर, इलायची और नमक डालकर मिलाएँ जब तक गुड़ घुलने न लगे।", "रागी का आटा और दूध धीरे-धीरे डालकर गाढ़ा, चिकना घोल बनाएँ।", "पकाने से ठीक पहले बेकिंग पाउडर डालें और धीरे से मिलाएँ।", "नॉन-स्टिक पैन को मध्यम-धीमी आँच पर गरम करें और उस पर घी की कुछ बूँदें लगाएँ।", "पैन में एक कड़छी घोल डालें और लगभग 10 सेमी चौड़ा गोल फैलाएँ।", "2 से 3 मिनट तक पकाएँ जब तक सतह पर छोटे बुलबुले न आ जाएँ, फिर पलटकर दूसरी ओर 1 से 2 मिनट सेंकें।", "पैनकेक को शहद, ताज़े फल या दही के चम्मच के साथ गरम परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் ராகி (கேழ்வரகு) மாவு", "1 பழுத்த வாழைப்பழம், மசித்தது", "3/4 கப் பால்", "1 டேபிள்ஸ்பூன் வெல்லத் தூள்", "1/2 டீஸ்பூன் பேக்கிங் பவுடர்", "1/4 டீஸ்பூன் ஏலக்காய்த் தூள்", "ஒரு சிட்டிகை உப்பு", "தோசைக்கல்லுக்கு 1 டேபிள்ஸ்பூன் நெய்"],
        steps: ["பழுத்த வாழைப்பழத்தை ஒரு பாத்திரத்தில் கட்டியில்லாமல் முழுவதும் மசிக்கவும்.", "வெல்லத் தூள், ஏலக்காய், உப்பு சேர்த்து வெல்லம் கரையத் தொடங்கும் வரை கலக்கவும்.", "ராகி மாவு, பாலை சிறிது சிறிதாக சேர்த்து கெட்டியான, மென்மையான கரைசலாக்கவும்.", "சுடுவதற்கு சற்று முன் பேக்கிங் பவுடரை சேர்த்து மெதுவாக கலக்கவும்.", "நான்-ஸ்டிக் கல்லை மிதமான-மெல்லிய தீயில் சூடாக்கி, சில சொட்டு நெய் தடவவும்.", "ஒரு கரண்டி மாவை ஊற்றி, சுமார் 10 செ.மீ. அகலமான வட்டமாக பரப்பவும்.", "மேற்பரப்பில் சிறு குமிழிகள் வரும் வரை 2 முதல் 3 நிமிடம் வேகவிட்டு, திருப்பி மறுபக்கம் 1 முதல் 2 நிமிடம் வேகவிடவும்.", "தேன், புதிய பழங்கள் அல்லது ஒரு கரண்டி தயிருடன் சூடாக பரிமாறவும்."],
      },
    },
    "finger-millet-42": {
      hi: {
        ingredients: ["1 कप रागी (मडुआ) का आटा", "2 बड़े चम्मच तेल", "1 छोटा चम्मच राई", "1 छोटा चम्मच उड़द दाल", "1 छोटा प्याज़, बारीक कटा", "1 हरी मिर्च, बारीक कटी", "8 करी पत्ते", "1/2 छोटा चम्मच अदरक, कसी हुई", "1 1/2 कप पानी", "1/2 छोटा चम्मच नमक", "1 बड़ा चम्मच कसा नारियल"],
        steps: ["रागी के आटे को धीमी आँच पर पैन में 3 से 4 मिनट लगातार चलाते हुए भूनें, जब तक सुगंध न आने लगे।", "भुना आटा थाली में निकालकर थोड़ा ठंडा होने दें।", "पैन में तेल गरम करके राई और उड़द दाल डालें जब तक वे चटकने न लगें।", "कटा प्याज़, हरी मिर्च, कसी अदरक और करी पत्ते डालकर प्याज़ नरम होने तक भूनें।", "पानी और नमक डालकर तेज़ उबाल आने दें।", "आँच धीमी करके भुना रागी का आटा धीरे-धीरे छिड़कें और लगातार चलाते रहें ताकि गुठलियाँ न बनें।", "ढककर धीमी आँच पर 3 मिनट पकाएँ, जब तक उपमा फूला हुआ और पूरी तरह पका न हो जाए।", "कसा नारियल मिलाकर गरम परोसें, ऊपर से एक चम्मच घी या नारियल की चटनी के साथ।"],
      },
      ta: {
        ingredients: ["1 கப் ராகி (கேழ்வரகு) மாவு", "2 டேபிள்ஸ்பூன் எண்ணெய்", "1 டீஸ்பூன் கடுகு", "1 டீஸ்பூன் உளுத்தம் பருப்பு", "1 சிறிய வெங்காயம், பொடியாக நறுக்கியது", "1 பச்சை மிளகாய், பொடியாக நறுக்கியது", "8 கறிவேப்பிலை", "1/2 டீஸ்பூன் இஞ்சி, துருவியது", "1 1/2 கப் தண்ணீர்", "1/2 டீஸ்பூன் உப்பு", "1 டேபிள்ஸ்பூன் துருவிய தேங்காய்"],
        steps: ["ராகி மாவை மிதமான தீயில் ஒரு வாணலியில் 3 முதல் 4 நிமிடம் தொடர்ந்து கிளறி, வாசனை வரும் வரை உலர வறுக்கவும்.", "வறுத்த மாவை ஒரு தட்டுக்கு மாற்றி, சிறிது ஆறவிடவும்.", "வாணலியில் எண்ணெய் சூடாக்கி, கடுகு, உளுத்தம் பருப்பை வெடிக்கும் வரை சேர்க்கவும்.", "நறுக்கிய வெங்காயம், பச்சை மிளகாய், துருவிய இஞ்சி, கறிவேப்பிலை சேர்த்து வெங்காயம் மென்மையாகும் வரை வதக்கவும்.", "தண்ணீர், உப்பை ஊற்றி பொங்கும் கொதிநிலைக்கு கொண்டு வரவும்.", "தீயைக் குறைத்து, வறுத்த ராகி மாவை கட்டி சேராமல் தொடர்ந்து கிளறியபடி மெதுவாக தூவவும்.", "மூடி மெல்லிய தீயில் 3 நிமிடம் வேகவிடவும், உப்புமா பொலபொலப்பாகி முழுவதும் வேகும் வரை.", "துருவிய தேங்காய் சேர்த்து, ஒரு கரண்டி நெய் அல்லது தேங்காய் சட்னியுடன் சூடாக பரிமாறவும்."],
      },
    },
    "finger-millet-43": {
      hi: {
        ingredients: ["1 कप रागी (मडुआ) का आटा", "1/2 कप गेहूँ का आटा (आटा)", "1/2 कप गुड़ का पाउडर", "1/3 कप घी", "1/4 कप दूध", "1/2 छोटा चम्मच इलायची पाउडर", "1 बड़ा चम्मच तिल", "तलने के लिए 1 कप तेल"],
        steps: ["एक बड़े बर्तन में रागी और गेहूँ का आटा मिलाएँ और उँगलियों के सिरों से घी मिलाएँ।", "गुड़ पाउडर को दूध में घोलकर छान लें ताकि किरकिरापन न रहे।", "गुड़ वाला दूध, इलायची और तिल आटे में डालकर सख्त, चिकना आटा गूँधें।", "आटे को 15 मिनट रखें, फिर लगभग 3 मिमी मोटी चादर बेलें।", "तेज़ चाकू से चादर को हीरे के आकार के टुकड़ों में काटें।", "तेल को मध्यम-धीमी आँच पर गरम करें और एक टुकड़ा डालकर परखें, जो धीरे से ऊपर आना चाहिए।", "शंकरपाली को बैच में 3 से 4 मिनट तलें, पलटते हुए सुनहरा और कुरकुरा होने तक।", "टिश्यू पेपर पर निकालकर पूरी तरह ठंडा होने दें और हवा-बंद डिब्बे में रखें।"],
      },
      ta: {
        ingredients: ["1 கப் ராகி மாவு", "1/2 கப் கோதுமை மாவு (ஆட்டா)", "1/2 கப் வெல்லத் தூள்", "1/3 கப் நெய்", "1/4 கப் பால்", "1/2 டீஸ்பூன் ஏலக்காய்த் தூள்", "1 டேபிள்ஸ்பூன் எள்", "பொரிக்க 1 கப் எண்ணெய்"],
        steps: ["ஒரு பெரிய பாத்திரத்தில் ராகி மற்றும் கோதுமை மாவைக் கலந்து, விரல் நுனிகளால் நெய்யை தேய்க்கவும்.", "வெல்லத் தூளை பாலில் கரைத்து, மண் துகள்கள் நீங்க வடிகட்டவும்.", "வெல்லப் பாலையும் ஏலக்காய், எள்ளையும் மாவில் சேர்த்து கெட்டியான, மென்மையான மாவாக பிசையவும்.", "மாவை 15 நிமிடம் வைத்து, பிறகு சுமார் 3 மி.மீ. தடிமனான தாளாக உருட்டவும்.", "கூர்மையான கத்தியால் தாளை வைர வடிவ துண்டுகளாக வெட்டவும்.", "எண்ணெயை மிதமான-மெல்லிய தீயில் சூடாக்கி, ஒரு துண்டைப் போட்டு பார்க்கவும், அது மெதுவாக மேலே வர வேண்டும்.", "சங்கரபாலியை சிறு தொகுதிகளாக 3 முதல் 4 நிமிடம் பொரித்து, திருப்பி பொன்னிறமாகவும் மொறுமொறுப்பாகவும் ஆக்கவும்.", "டிஷ்யூ தாளில் வடிகட்டி முழுவதும் ஆறவிட்டு, காற்றுப்புகாத டப்பாவில் வைக்கவும்."],
      },
    },
    "finger-millet-44": {
      hi: {
        ingredients: ["1 कप रागी (मडुआ) के दाने (रागी रवा)", "2 बड़े चम्मच घी", "1 छोटा चम्मच जीरा", "1 तेज पत्ता और 2 लौंग", "1 छोटा प्याज़, पतला कटा", "1 छोटी गाजर, छोटे टुकड़ों में कटी", "1/2 कप हरे मटर", "1 छोटा चम्मच अदरक-लहसुन का पेस्ट", "2 1/2 कप पानी", "1 छोटा चम्मच नमक"],
        steps: ["रागी के दानों को पैन में 2 मिनट भूनें जब तक रंग थोड़ा गहरा न हो जाए और सोंधी खुशबू न आए।", "भारी बर्तन में घी गरम करें और जीरा, तेज पत्ता व लौंग डालें जब तक खुशबू न आए।", "कटा प्याज़ मध्यम आँच पर किनारों से सुनहरा होने तक भूनें।", "अदरक-लहसुन पेस्ट डालें, फिर गाजर और मटर डालकर 3 मिनट पकाएँ।", "भुने रागी के दाने डालकर 1 मिनट चलाएँ ताकि वे मसालों से लिपट जाएँ।", "पानी और नमक डालकर उबाल आने दें, फिर ढककर धीमी आँच पर 15 मिनट पकाएँ।", "दाने नरम और पानी सोखे जाने पर काँटे से पुलाव को धीरे से फुलाएँ।", "5 मिनट ढककर रखें और रायते के साथ गरम परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் ராகி (கேழ்வரகு) ரவை (ராகி ரவா)", "2 டேபிள்ஸ்பூன் நெய்", "1 டீஸ்பூன் சீரகம்", "1 பிரியாணி இலை, 2 கிராம்பு", "1 சிறிய வெங்காயம், மெல்லியதாக நறுக்கியது", "1 சிறிய கேரட், சதுரமாக நறுக்கியது", "1/2 கப் பச்சைப் பட்டாணி", "1 டீஸ்பூன் இஞ்சி-பூண்டு விழுது", "2 1/2 கப் தண்ணீர்", "1 டீஸ்பூன் உப்பு"],
        steps: ["ராகி ரவையை வாணலியில் 2 நிமிடம் நிறம் சற்று கருமையாகி வாசனை வரும் வரை லேசாக வறுக்கவும்.", "கனமான பாத்திரத்தில் நெய்யை சூடாக்கி, சீரகம், பிரியாணி இலை, கிராம்பு வாசனை வரும் வரை சேர்க்கவும்.", "நறுக்கிய வெங்காயத்தை மிதமான தீயில் ஓரங்கள் பொன்னிறமாகும் வரை வதக்கவும்.", "இஞ்சி-பூண்டு விழுது சேர்த்து, பிறகு கேரட், பட்டாணி போட்டு 3 நிமிடம் வேகவிடவும்.", "வறுத்த ராகி ரவையை சேர்த்து 1 நிமிடம் கிளறவும், மசாலாக்கள் ஒவ்வொன்றிலும் ஒட்ட.", "தண்ணீர், உப்பை சேர்த்து கொதிக்க விட்டு, மூடி மெல்லிய தீயில் 15 நிமிடம் வேகவிடவும்.", "ரவை மென்மையாகி தண்ணீர் உறிஞ்சியதும், முள் கரண்டியால் பிரியாணியை மெதுவாக உதிர்க்கவும்.", "5 நிமிடம் மூடி வைத்து, தயிர் பச்சடியுடன் சூடாக பரிமாறவும்."],
      },
    },
    "finger-millet-45": {
      hi: {
        ingredients: ["1 कप रागी (मडुआ) का आटा", "1/4 कप चावल का आटा", "1/4 कप उड़द दाल, 4 घंटे भिगोकर पीसी हुई", "2 अंडे, फेंटे हुए", "1 छोटा प्याज़, बारीक कटा", "1 हरी मिर्च, बारीक कटी", "1/2 छोटा चम्मच जीरा", "1 छोटा चम्मच नमक", "ज़रूरत अनुसार पानी", "पकाने के लिए 2 बड़े चम्मच तेल"],
        steps: ["रागी का आटा, चावल का आटा, पिसी उड़द दाल, जीरा और नमक पानी के साथ पतला, बहने वाला घोल बनाएँ।", "घोल को 15 मिनट रखें ताकि वह थोड़ा गाढ़ा हो जाए।", "डोसा तवे को मध्यम आँच पर गरम करें और एक कड़छी घोल डालकर पतला गोल फैलाएँ।", "किनारों पर थोड़ा तेल डालें और डोसा नीचे से सुनहरा होने तक पकने दें।", "डोसे के ऊपर फेंटे अंडे में प्याज़ और मिर्च मिलाकर एक चम्मच फैलाएँ।", "1 मिनट पकाएँ जब तक अंडा जम न जाए, फिर डोसे को सावधानी से पलटें और 30 सेकंड सेंकें।", "गरम-गरम डोसे को आधा मोड़ें या शंकु के आकार में लपेटें।", "तुरंत नारियल की चटनी या सांभर के साथ परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் ராகி மாவு", "1/4 கப் அரிசி மாவு", "1/4 கப் உளுத்தம் பருப்பு, 4 மணி நேரம் ஊறவைத்து அரைத்தது", "2 முட்டை, அடித்தது", "1 சிறிய வெங்காயம், பொடியாக நறுக்கியது", "1 பச்சை மிளகாய், பொடியாக நறுக்கியது", "1/2 டீஸ்பூன் சீரகம்", "1 டீஸ்பூன் உப்பு", "தேவையான அளவு தண்ணீர்", "சுடுவதற்கு 2 டேபிள்ஸ்பூன் எண்ணெய்"],
        steps: ["ராகி மாவு, அரிசி மாவு, அரைத்த உளுத்தம் பருப்பு, சீரகம், உப்பை தண்ணீருடன் மெல்லிய, ஊற்றும் பதத்தில் கரைக்கவும்.", "மாவை 15 நிமிடம் வைத்து லேசாக கெட்டியாக விடவும்.", "தோசைக்கல்லை மிதமான தீயில் சூடாக்கி, ஒரு கரண்டி மாவை ஊற்றி மெல்லிய வட்டமாக பரப்பவும்.", "ஓரங்களில் சிறிது எண்ணெய் விட்டு, அடிப்பகுதி பொன்னிறமாகும் வரை தோசையை வேகவிடவும்.", "தோசையின் மேல் அடித்த முட்டையுடன் வெங்காயம், மிளகாய் கலந்ததை ஒரு கரண்டி சமமாக பரப்பவும்.", "முட்டை உறையும் வரை 1 நிமிடம் வேகவிட்டு, தோசையை கவனமாக திருப்பி 30 வினாடி வேகவிடவும்.", "சூடாக இருக்கும் போதே தோசையை பாதியாக மடித்து அல்லது கூம்பு வடிவில் சுருட்டவும்.", "உடனே தேங்காய் சட்னி அல்லது சாம்பாருடன் பரிமாறவும்."],
      },
    },
  },
  translations: {
    "finger-millet-41": {
      hi: { title: "रागी केला पैनकेक", description: "रागी के आटे और पके केले से बने नरम, हल्के मीठे पैनकेक, जिन्हें बेकिंग पाउडर से फुलाया जाता है और इलायची से सुगंधित किया जाता है। बच्चों के लिए झटपट नाश्ता।" },
      ta: { title: "ராகி வாழைப்பழ பான்கேக்", description: "ராகி மாவு மற்றும் பழுத்த வாழைப்பழத்தில் செய்யப்படும் மென்மையான, லேசாக இனிப்பான பான்கேக். பேக்கிங் பவுடரில் உப்பி, ஏலக்காயால் மணக்கும். குழந்தைகளுக்கு விரைவான காலை உணவு." },
    },
    "finger-millet-42": {
      hi: { title: "रागी उप्मा", description: "भुने रागी के आटे से बना, राई, उड़द दाल, प्याज़ और करी पत्ते के छौंक वाला स्वादिष्ट और पौष्टिक दक्षिण भारतीय नाश्ता।" },
      ta: { title: "ராகி உப்புமா", description: "உலர வறுத்த ராகி மாவில் கடுகு, உளுத்தம் பருப்பு, வெங்காயம், கறிவேப்பிலை தாளிப்புடன் செய்யப்படும் சுவையான, சத்தான தென்னிந்திய காலை உணவு." },
    },
    "finger-millet-43": {
      hi: { title: "रागी शंकरपाली", description: "महाराष्ट्र के हीरे के आकार के कुरकुरे बिस्कुट, जो रागी और गेहूँ के आटे, गुड़ और घी से बनते हैं और सुनहरे होने तक तले जाते हैं।" },
      ta: { title: "ராகி சங்கரபாலி", description: "ராகி, கோதுமை மாவு, வெல்லம், நெய்யில் செய்யப்படும் மகாராஷ்டிராவின் வைர வடிவ மொறுமொறுப்பான லேசான இனிப்பு பிஸ்கட். பொன்னிறமாகும் வரை பொரிக்கப்படுகிறது." },
    },
    "finger-millet-44": {
      hi: { title: "रागी सब्ज़ी पुलाव", description: "रागी के दानों को घी में साबुत मसालों, गाजर और हरे मटर के साथ पकाया गया सुगंधित एक-बर्तन पुलाव, जो हल्का और पौष्टिक भोजन है।" },
      ta: { title: "ராகி காய்கறி புலாவ்", description: "ராகி ரவையை நெய்யில் முழு மசாலாக்கள், கேரட், பச்சைப் பட்டாணியுடன் சமைத்த நறுமணமான ஒரு பாத்திர புலாவ். இலகுவான, சத்தான மதிய உணவு." },
    },
    "finger-millet-45": {
      hi: { title: "रागी अंडा डोसा", description: "पतले, कुरकुरे रागी डोसे, जिनके ऊपर पकते समय फेंटा अंडा, प्याज़ और मिर्च फैलाया जाता है। प्रोटीन से भरपूर और जल्दी बनने वाला नाश्ता।" },
      ta: { title: "ராகி முட்டை தோசை", description: "மெல்லிய, மொறுமொறுப்பான ராகி தோசை, சுடும்போது மேலே அடித்த முட்டை, வெங்காயம், மிளகாய் பரப்பப்படுகிறது. புரதம் நிறைந்த விரைவில் செய்யக்கூடிய காலை உணவு." },
    },
  },
  plate: {
    "finger-millet-41": {
      kcal: 240, carbsG: 42, fibreG: 5, gi: 58, minerals: ["calcium", "iron", "potassium"],
      raw: { kind: "raw", name: "Cucumber and carrot sticks", how: "Cut cucumber and carrot into thin sticks and serve with a pinch of black salt." },
      sides: [
        { kind: "cooked", name: "Palak dal", how: "Cook toor dal with spinach, tomato and turmeric until creamy, then temper with cumin and garlic." },
        { kind: "cooked", name: "Beetroot sabzi", how: "Saute diced beetroot with mustard seeds, curry leaves and grated coconut until tender." },
      ],
    },
    "finger-millet-42": {
      kcal: 230, carbsG: 38, fibreG: 6, gi: 56, minerals: ["calcium", "iron", "magnesium"],
      raw: { kind: "raw", name: "Tomato and cucumber salad", how: "Dice tomato and cucumber, then season with lemon juice, black pepper and coriander." },
      sides: [
        { kind: "cooked", name: "Coconut chutney", how: "Grind coconut with roasted chana dal, green chilli and tamarind, then temper with mustard and curry leaves." },
        { kind: "cooked", name: "Beans poriyal", how: "Stir fry chopped beans with mustard seeds, grated coconut and curry leaves until tender." },
      ],
    },
    "finger-millet-43": {
      kcal: 260, carbsG: 32, fibreG: 4, gi: 60, minerals: ["calcium", "iron", "magnesium", "zinc"],
      raw: { kind: "raw", name: "Cabbage and carrot slaw", how: "Shred cabbage and carrot finely, then toss with lemon juice, salt and a pinch of sugar." },
      sides: [
        { kind: "cooked", name: "Dal tadka", how: "Cook moong dal until soft, then pour over a tempering of cumin, garlic and dried red chilli." },
        { kind: "cooked", name: "Tinda sabzi", how: "Saute small round gourds with onion, tomato and turmeric until tender." },
      ],
    },
    "finger-millet-44": {
      kcal: 290, carbsG: 46, fibreG: 7, gi: 58, minerals: ["calcium", "iron", "magnesium", "phosphorus"],
      raw: { kind: "raw", name: "Kachumber salad", how: "Dice cucumber, tomato and onion, and season with lemon juice, chaat masala and coriander." },
      sides: [
        { kind: "cooked", name: "Dal makhani-style lentils", how: "Simmer whole black lentils with onion, tomato and a little butter until thick and rich." },
        { kind: "cooked", name: "Bhindi fry", how: "Shallow fry sliced okra with cumin, turmeric and amchur until the edges turn crisp." },
      ],
    },
    "finger-millet-45": {
      kcal: 300, carbsG: 30, fibreG: 4, gi: 54, minerals: ["iron", "selenium", "phosphorus", "calcium"],
      raw: { kind: "raw", name: "Onion and cucumber salad", how: "Slice onion and cucumber thinly, then toss with lemon juice and a pinch of salt." },
      sides: [
        { kind: "cooked", name: "Sambar", how: "Simmer toor dal with tamarind, vegetables and sambar powder, then temper with mustard and curry leaves." },
        { kind: "cooked", name: "Cabbage poriyal", how: "Stir fry shredded cabbage with mustard seeds, urad dal and grated coconut until tender." },
      ],
    },
  },
};
