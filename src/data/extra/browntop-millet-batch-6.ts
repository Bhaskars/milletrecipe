import type { Recipe } from "@/types/recipe";
import type { LineContent } from "@/data/i18n-content/sorghum";
import type { PlateInfo } from "@/types/plate";

/** browntop-millet recipes browntop-millet-41 to browntop-millet-45 with full English, Hindi and Tamil content and plate data. */
export const BROWNTOP_MILLET_BATCH_6: {
  recipes: Recipe[];
  content: Record<string, { hi: LineContent; ta: LineContent }>;
  translations: Record<string, { hi: { title: string; description: string }; ta: { title: string; description: string } }>;
  plate: Record<string, PlateInfo>;
} = {
  recipes: [
    {
      id: "browntop-millet-41",
      title: "Korle Lemon Rice",
      milletId: "browntop-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Main Course",
      description: "Light lemon rice made with browntop millet, tempered with mustard, chana dal, peanuts and curry leaves, a quick lunchbox dish from South Indian kitchens.",
      servings: 4,
      prepTimeMinutes: 10,
      cookTimeMinutes: 20,
      difficulty: "Easy",
      ingredients: [
        "2 cups cooked browntop millet, cooled and loosened",
        "2 tbsp sesame oil or groundnut oil",
        "1 tsp mustard seeds, 1 tsp chana dal",
        "2 tbsp roasted peanuts",
        "2 green chillies, slit, 8 curry leaves",
        "1/2 tsp turmeric powder, 1/4 tsp asafoetida",
        "1 tbsp grated fresh ginger",
        "2 tbsp lemon juice",
        "1 tsp salt",
        "1 tbsp chopped coriander leaves",
      ],
      steps: [
        "Heat the oil in a heavy pan over medium heat and splutter the mustard seeds.",
        "Add the chana dal and peanuts and fry until the dal turns golden and the peanuts are crisp.",
        "Add the green chillies, curry leaves, ginger and asafoetida and sauté for 30 seconds.",
        "Stir in the turmeric, then remove the pan from the heat.",
        "Gently fold in the cooked millet and salt so that the grains stay separate.",
        "Pour the lemon juice over the rice and mix lightly.",
        "Garnish with coriander and serve at room temperature with papad or curd.",
      ],
    },
    {
      id: "browntop-millet-42",
      title: "Korle Paddu",
      milletId: "browntop-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Snack",
      description: "Round, golden fermented dumplings of browntop millet and urad dal, cooked in a paddu pan with ghee and cumin, served with chutney and sambar.",
      servings: 4,
      prepTimeMinutes: 25,
      cookTimeMinutes: 20,
      difficulty: "Medium",
      ingredients: [
        "1 cup browntop millet, soaked for 4 hours",
        "1/4 cup urad dal, soaked for 4 hours with 1/2 tsp fenugreek seeds",
        "1 tsp salt",
        "1 cup water, for grinding",
        "1/2 small onion, finely chopped",
        "1 green chilli, finely chopped",
        "1 tsp ginger, grated",
        "8 curry leaves, chopped, 1 tbsp chopped coriander",
        "3 tbsp ghee or sesame oil, for cooking",
        "1/2 tsp cumin seeds",
      ],
      steps: [
        "Grind the soaked millet with a little water to a fine batter, then grind the urad dal and fenugreek to a light, fluffy batter.",
        "Mix both batters with the salt, cover, and ferment in a warm place for 8 hours until bubbly.",
        "Fold in the onion, green chilli, ginger, curry leaves, coriander and cumin seeds.",
        "Heat a paddu pan over medium heat and place a few drops of ghee in each cup.",
        "Pour a spoonful of batter into each cup, filling about three-quarters full.",
        "Cover and cook on low heat for 2 minutes until the bottom sets and turns golden.",
        "Turn each paddu over with a skewer and cook for another 2 minutes until golden on all sides.",
        "Serve hot with coconut chutney and sambar.",
      ],
    },
    {
      id: "browntop-millet-43",
      title: "Korle Appam",
      milletId: "browntop-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Breakfast",
      description: "Soft appam with crisp lacy edges made from fermented browntop millet batter and coconut milk, a Kerala-style breakfast served with jaggery.",
      servings: 4,
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      difficulty: "Hard",
      ingredients: [
        "1 cup browntop millet flour (korle atta)",
        "1/2 tsp active dry yeast",
        "1 tsp sugar",
        "1/2 tsp salt",
        "1 cup warm water",
        "1/2 cup thin coconut milk",
        "1/4 cup cooked browntop millet, mashed",
        "2 tbsp ghee or coconut oil, to grease the pan",
        "1/4 tsp baking soda",
        "1 tbsp jaggery, to serve",
      ],
      steps: [
        "Dissolve the yeast and sugar in half of the warm water and leave for 5 minutes until frothy.",
        "Whisk the millet flour, salt, mashed millet and the remaining water into a smooth batter.",
        "Add the frothy yeast mixture and rest the batter, covered, in a warm place for 4 hours until risen and bubbly.",
        "Stir in the coconut milk and baking soda gently, to a pouring consistency.",
        "Heat an appam pan over medium heat and grease the centre with ghee or coconut oil.",
        "Pour a ladleful of batter and swirl the pan so the edges become thin and lacy while the centre stays thick.",
        "Cover and cook for 2-3 minutes until the edges are crisp and the centre is set.",
        "Serve warm with jaggery or a light vegetable stew.",
      ],
    },
    {
      id: "browntop-millet-44",
      title: "Korle Ukadiche Modak",
      milletId: "browntop-millet",
      region: "West Indian",
      diet: "Vegetarian",
      course: "Dessert",
      description: "Steamed modaks with a soft browntop millet shell and a filling of coconut, jaggery and sesame, a sweet traditionally made for Ganesh Chaturthi in Maharashtra.",
      servings: 4,
      prepTimeMinutes: 40,
      cookTimeMinutes: 15,
      difficulty: "Hard",
      ingredients: [
        "1 cup browntop millet flour (korle atta)",
        "1 cup water",
        "1 tsp ghee",
        "1/4 tsp salt",
        "1/2 cup fresh grated coconut",
        "1/2 cup jaggery, grated",
        "1/4 tsp cardamom powder, 1 tbsp sesame seeds, dry roasted",
        "2 tsp ghee, for greasing the moulds",
        "1 tbsp sesame oil, for greasing the hands",
      ],
      steps: [
        "Cook the coconut, jaggery, sesame and cardamom in a pan over low heat for 4 minutes until the jaggery melts and the filling thickens.",
        "Let the filling cool slightly, then shape it into small portions.",
        "Bring the water, ghee and salt to a boil in a heavy pan.",
        "Add the millet flour, turn off the heat, cover for 3 minutes, then knead into a smooth dough.",
        "Grease your hands with sesame oil and take a small ball of dough.",
        "Press it into a cup shape, place a spoonful of filling inside, and pinch the edges together to form a pleated modak.",
        "Grease the modak moulds with ghee, place the modaks in them, and steam for 12 minutes until firm.",
        "Serve warm, brushed with a little ghee.",
      ],
    },
    {
      id: "browntop-millet-45",
      title: "Korle Tilgul Ladoo",
      milletId: "browntop-millet",
      region: "West Indian",
      diet: "Vegetarian",
      course: "Dessert",
      description: "Energy-rich ladoos of roasted sesame, peanuts, browntop millet flour and jaggery, a winter sweet from Maharashtra shared at harvest festivals.",
      servings: 6,
      prepTimeMinutes: 15,
      cookTimeMinutes: 10,
      difficulty: "Easy",
      ingredients: [
        "1 cup white sesame seeds, dry roasted",
        "3/4 cup jaggery, grated",
        "2 tbsp ghee",
        "1/4 cup browntop millet flour, dry roasted",
        "1/2 cup roasted peanuts, coarsely crushed",
        "1/4 tsp cardamom powder",
        "a pinch of salt",
        "2 tbsp water, for the syrup",
      ],
      steps: [
        "Dry roast the sesame seeds in a pan over low heat for 3-4 minutes until fragrant and lightly golden, then cool and grind coarsely.",
        "Dry roast the browntop millet flour for 3 minutes until it smells nutty.",
        "Melt the jaggery with the water in a pan over low heat and cook into a thick syrup for 2 minutes.",
        "Stir in the ground sesame, roasted millet flour, peanuts, cardamom and salt, and mix well.",
        "Add the ghee and mix until the mixture holds together when pressed.",
        "Shape the mixture into small round ladoos while still warm, pressing firmly.",
        "Let them cool completely before storing in an airtight jar.",
      ],
    },
  ],
  content: {
    "browntop-millet-41": {
      hi: {
        ingredients: ["2 कप पका ब्राउनटॉप मिलेट, ठंडा करके अलग-अलग किया हुआ", "2 बड़े चम्मच तिल का तेल या मूँगफली तेल", "1 छोटा चम्मच सरसों, 1 छोटा चम्मच चना दाल", "2 बड़े चम्मच भुनी मूँगफली", "2 हरी मिर्च, चीरी हुई, 8 करी पत्ते", "1/2 छोटा चम्मच हल्दी, 1/4 छोटा चम्मच हींग", "1 बड़ा चम्मच कसा हुआ अदरक", "2 बड़े चम्मच नींबू का रस", "1 छोटा चम्मच नमक", "1 बड़ा चम्मच कटा हरा धनिया"],
        steps: ["मध्यम आँच पर भारी बर्तन में तेल गरम करें और सरसों चटकाएँ।", "चना दाल और मूँगफली डालकर दाल सुनहरी और मूँगफली कुरकुरी होने तक तलें।", "हरी मिर्च, करी पत्ते, अदरक और हींग डालकर 30 सेकंड भूनें।", "हल्दी डालें और कड़ाही आँच से उतार लें।", "पका मिलेट और नमक धीरे से मिलाएँ ताकि दाने अलग रहें।", "नींबू का रस ऊपर डालकर हल्के हाथ से मिलाएँ।", "धनिया से सजाकर कमरे के तापमान पर पापड़ या दही के साथ परोसें।"],
      },
      ta: {
        ingredients: ["2 கப் வேகவைத்த பிரவுன்டாப் சிறுதானியம், ஆறவைத்து உதிர்த்தது", "2 டேபிள்ஸ்பூன் நல்லெண்ணெய் அல்லது நிலக்கடலை எண்ணெய்", "1 டீஸ்பூன் கடுகு, 1 டீஸ்பூன் கடலைப் பருப்பு", "2 டேபிள்ஸ்பூன் வறுத்த வேர்க்கடலை", "2 பச்சை மிளகாய் கீறியது, 8 கறிவேப்பிலை", "1/2 டீஸ்பூன் மஞ்சள் தூள், 1/4 டீஸ்பூன் பெருங்காயம்", "1 டேபிள்ஸ்பூன் துருவிய இஞ்சி", "2 டேபிள்ஸ்பூன் எலுமிச்சை சாறு", "1 டீஸ்பூன் உப்பு", "1 டேபிள்ஸ்பூன் கொத்தமல்லி இலை, நறுக்கியது"],
        steps: ["நடுத்தர தீயில் கனமான பாத்திரத்தில் எண்ணெயை சூடாக்கி கடுகு தாளிக்கவும்.", "கடலைப் பருப்பு, வேர்க்கடலை சேர்த்து பருப்பு பொன்னிறமாகவும் வேர்க்கடலை மொறுமொறுப்பாகவும் ஆகும் வரை வறுக்கவும்.", "பச்சை மிளகாய், கறிவேப்பிலை, இஞ்சி, பெருங்காயம் சேர்த்து 30 வினாடி வதக்கவும்.", "மஞ்சள் சேர்த்து, பாத்திரத்தை அடுப்பிலிருந்து இறக்கவும்.", "வெந்த தானியம், உப்பை மெதுவாக கலந்து தானியங்கள் தனித்தனியாக இருக்கும்படி பார்த்துக் கொள்ளவும்.", "எலுமிச்சை சாற்றை ஊற்றி லேசாக கலக்கவும்.", "கொத்தமல்லியால் அலங்கரித்து அறை வெப்பநிலையில் அப்பளம் அல்லது தயிருடன் பரிமாறவும்."],
      },
    },
    "browntop-millet-42": {
      hi: {
        ingredients: ["1 कप ब्राउनटॉप मिलेट, 4 घंटे भिगोया हुआ", "1/4 कप उड़द दाल, 4 घंटे भिगोई हुई, 1/2 छोटा चम्मच मेथी के दाने के साथ", "1 छोटा चम्मच नमक", "1 कप पानी, पीसने के लिए", "1/2 छोटी प्याज़, बारीक कटी", "1 हरी मिर्च, बारीक कटी", "1 छोटा चम्मच अदरक, कसा हुआ", "8 करी पत्ते, कटे, 1 बड़ा चम्मच कटा धनिया", "3 बड़े चम्मच घी या तिल का तेल, पकाने के लिए", "1/2 छोटा चम्मच जीरा"],
        steps: ["भीगे मिलेट को थोड़े पानी के साथ बारीक घोल बनने तक पीसें, फिर उड़द दाल और मेथी को हल्का, फूला घोल बनने तक पीसें।", "दोनों घोल नमक के साथ मिलाकर ढककर गरम जगह पर 8 घंटे रखें जब तक बुलबुले न आ जाएँ।", "प्याज़, हरी मिर्च, अदरक, करी पत्ते, धनिया और जीरा मिलाएँ।", "पद्दू पैन को मध्यम आँच पर गरम करें और हर कप में घी की कुछ बूँदें डालें।", "हर कप में एक चम्मच घोल डालें, लगभग तीन-चौथाई भरें।", "ढककर धीमी आँच पर 2 मिनट पकाएँ जब तक नीचे की परत सेट होकर सुनहरी न हो जाए।", "सींक से हर पद्दू पलटें और 2 मिनट और पकाएँ जब तक सब तरफ सुनहरे न हो जाएँ।", "नारियल की चटनी और सांभर के साथ गरम परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் பிரவுன்டாப் சிறுதானியம், 4 மணி நேரம் ஊறவைத்தது", "1/4 கப் உளுத்தம் பருப்பு, 4 மணி நேரம் ஊறவைத்தது, 1/2 டீஸ்பூன் வெந்தயத்துடன்", "1 டீஸ்பூன் உப்பு", "1 கப் தண்ணீர், அரைக்க", "1/2 சிறிய வெங்காயம், பொடியாக நறுக்கியது", "1 பச்சை மிளகாய், பொடியாக நறுக்கியது", "1 டீஸ்பூன் இஞ்சி, துருவியது", "8 கறிவேப்பிலை நறுக்கியது, 1 டேபிள்ஸ்பூன் கொத்தமல்லி", "3 டேபிள்ஸ்பூன் நெய் அல்லது நல்லெண்ணெய், சமைக்க", "1/2 டீஸ்பூன் சீரகம்"],
        steps: ["ஊறிய தானியத்தை சிறிது தண்ணீருடன் நுண்ணிய மாவாக அரைக்கவும்; உளுந்து, வெந்தயத்தை லேசாக பஞ்சு போல அரைக்கவும்.", "இரு மாவையும் உப்புடன் கலந்து மூடி, வெதுவெதுப்பான இடத்தில் 8 மணி நேரம் குமிழி வரும் வரை புளிக்க விடவும்.", "வெங்காயம், பச்சை மிளகாய், இஞ்சி, கறிவேப்பிலை, கொத்தமல்லி, சீரகம் சேர்க்கவும்.", "பணியார பானை அல்லது பேனை மிதமான தீயில் சூடாக்கி, ஒவ்வொரு குழியிலும் சில துளி நெய் விடவும்.", "ஒவ்வொரு குழியிலும் ஒரு கரண்டி மாவு ஊற்றி, சுமார் முக்கால் பங்கு நிரப்பவும்.", "மூடி மெல்லிய தீயில் 2 நிமிடம் வேகவிடவும், அடிப்பகுதி கெட்டியாகி பொன்னிறமாகும் வரை.", "குச்சியால் ஒவ்வொன்றையும் திருப்பி மேலும் 2 நிமிடம் எல்லா பக்கமும் பொன்னிறமாகும் வரை வேகவிடவும்.", "சூடாக தேங்காய் சட்னி, சாம்பாருடன் பரிமாறவும்."],
      },
    },
    "browntop-millet-43": {
      hi: {
        ingredients: ["1 कप ब्राउनटॉप मिलेट का आटा (कोर्ले का आटा)", "1/2 छोटा चम्मच सक्रिय ड्राई यीस्ट", "1 छोटा चम्मच चीनी", "1/2 छोटा चम्मच नमक", "1 कप गुनगुना पानी", "1/2 कप पतला नारियल का दूध", "1/4 कप पका ब्राउनटॉप मिलेट, मसला हुआ", "2 बड़े चम्मच घी या नारियल तेल, पैन चिकना करने के लिए", "1/4 छोटा चम्मच बेकिंग सोडा", "1 बड़ा चम्मच गुड़, परोसने के लिए"],
        steps: ["यीस्ट और चीनी को आधे गुनगुने पानी में घोलें और 5 मिनट रखें जब तक झाग न आ जाए।", "मिलेट का आटा, नमक, मसला मिलेट और बचा पानी मिलाकर चिकना घोल बनाएँ।", "झाग वाला यीस्ट मिश्रण डालें और ढककर गरम जगह पर 4 घंटे रखें जब तक घोल फूल न जाए।", "नारियल का दूध और बेकिंग सोडा धीरे से मिलाएँ जब तक घोल बहने लायक न हो जाए।", "अप्पम पैन को मध्यम आँच पर गरम करें और बीच में घी या नारियल तेल लगाएँ।", "एक कलछी घोल डालें और पैन घुमाएँ ताकि किनारे पतले और जालीदार हों, बीच मोटा रहे।", "ढककर 2-3 मिनट पकाएँ जब तक किनारे कुरकुरे और बीच सेट न हो जाए।", "गुड़ या हल्की सब्ज़ी के स्टू के साथ गरम परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் பிரவுன்டாப் சிறுதானிய மாவு (கோர்லே மாவு)", "1/2 டீஸ்பூன் ஈஸ்ட்", "1 டீஸ்பூன் சர்க்கரை", "1/2 டீஸ்பூன் உப்பு", "1 கப் வெதுவெதுப்பான தண்ணீர்", "1/2 கப் மெல்லிய தேங்காய்ப் பால்", "1/4 கப் வேகவைத்த பிரவுன்டாப் சிறுதானியம், மசித்தது", "2 டேபிள்ஸ்பூன் நெய் அல்லது தேங்காய் எண்ணெய், பானை தடவ", "1/4 டீஸ்பூன் பேக்கிங் சோடா", "1 டேபிள்ஸ்பூன் வெல்லம், பரிமாற"],
        steps: ["ஈஸ்ட், சர்க்கரையை பாதி வெதுவெதுப்பான தண்ணீரில் கரைத்து 5 நிமிடம் நுரை வரும் வரை வைக்கவும்.", "சிறுதானிய மாவு, உப்பு, மசித்த தானியம், மீதி தண்ணீரை சேர்த்து மென்மையான மாவாக கலக்கவும்.", "நுரைத்த ஈஸ்ட் கலவையை சேர்த்து மூடி வெதுவெதுப்பான இடத்தில் 4 மணி நேரம் மாவு உப்பும் வரை வைக்கவும்.", "தேங்காய்ப் பால், பேக்கிங் சோடாவை மெதுவாக கலந்து ஊற்றும் பதத்திற்கு கொண்டு வரவும்.", "அப்பம் சட்டியை மிதமான தீயில் சூடாக்கி நடுவில் நெய் அல்லது தேங்காய் எண்ணெய் தடவவும்.", "ஒரு கரண்டி மாவை ஊற்றி, ஓரங்கள் மெல்லியதாகவும் வலையாகவும் வரும்படி சட்டியை சுழற்றவும், நடுவில் தடிமனாக இருக்கட்டும்.", "மூடி 2-3 நிமிடம் வேகவிடவும், ஓரங்கள் மொறுமொறுப்பாகவும் நடுப்பகுதி கெட்டியாகவும் ஆகும் வரை.", "வெல்லம் அல்லது லேசான காய்கறி குழம்புடன் சூடாக பரிமாறவும்."],
      },
    },
    "browntop-millet-44": {
      hi: {
        ingredients: ["1 कप ब्राउनटॉप मिलेट का आटा (कोर्ले का आटा)", "1 कप पानी", "1 छोटा चम्मच घी", "1/4 छोटा चम्मच नमक", "1/2 कप ताज़ा कसा हुआ नारियल", "1/2 कप गुड़, कसा हुआ", "1/4 छोटा चम्मच इलायची पाउडर, 1 बड़ा चम्मच भुने तिल", "2 छोटे चम्मच घी, साँचे चिकने करने के लिए", "1 बड़ा चम्मच तिल का तेल, हाथ चिकने करने के लिए"],
        steps: ["नारियल, गुड़, तिल और इलायची को पैन में धीमी आँच पर 4 मिनट पकाएँ जब तक गुड़ पिघल न जाए और भरावन गाढ़ा हो जाए।", "भरावन को थोड़ा ठंडा होने दें, फिर छोटे-छोटे हिस्से बनाएँ।", "पानी, घी और नमक को भारी बर्तन में उबाल लें।", "मिलेट का आटा डालें, गैस बंद करें, 3 मिनट ढककर रखें, फिर चिकना आटा गूँधें।", "हाथों पर तिल का तेल लगाकर आटे की एक छोटी गोली लें।", "उसे कटोरी जैसा दबाएँ, भरावन डालें और किनारे बंद करके प्लीट वाला मोदक बनाएँ।", "मोदक साँचों को घी से चिकना करें, मोदक रखें और 12 मिनट भाप में पकाएँ जब तक सख़्त न हो जाएँ।", "थोड़े घी के साथ गरम परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் பிரவுன்டாப் சிறுதானிய மாவு (கோர்லே மாவு)", "1 கப் தண்ணீர்", "1 டீஸ்பூன் நெய்", "1/4 டீஸ்பூன் உப்பு", "1/2 கப் துருவிய புதிய தேங்காய்", "1/2 கப் வெல்லம், துருவியது", "1/4 டீஸ்பூன் ஏலக்காய் தூள், 1 டேபிள்ஸ்பூன் வறுத்த எள்", "2 டீஸ்பூன் நெய், அச்சுகளுக்கு தடவ", "1 டேபிள்ஸ்பூன் நல்லெண்ணெய், கைகளுக்கு தடவ"],
        steps: ["தேங்காய், வெல்லம், எள், ஏலக்காயை பாத்திரத்தில் மெல்லிய தீயில் 4 நிமிடம் வேகவிடவும்; வெல்லம் கரைந்து பூரணம் கெட்டியாகும் வரை.", "பூரணம் சற்று ஆறியதும் சிறு பாகங்களாகப் பிரிக்கவும்.", "தண்ணீர், நெய், உப்பை கனமான பாத்திரத்தில் கொதிக்க வைக்கவும்.", "மாவை சேர்த்து அடுப்பை அணைத்து 3 நிமிடம் மூடி வைத்து, பின்னர் மென்மையான மாவாக பிசையவும்.", "கைகளில் நல்லெண்ணெய் தடவி மாவிலிருந்து சிறு உருண்டை எடுக்கவும்.", "அதை கிண்ணம் போல அழுத்தி, பூரணம் வைத்து ஓரங்களை மூடி பிளீட் வைத்த மோதகமாக்கவும்.", "அச்சுகளில் நெய் தடவி மோதகங்களை வைத்து 12 நிமிடம் ஆவியில் கெட்டியாகும் வரை வேகவிடவும்.", "சிறிது நெய்யுடன் சூடாக பரிமாறவும்."],
      },
    },
    "browntop-millet-45": {
      hi: {
        ingredients: ["1 कप सफ़ेद तिल, सूखा भुना हुआ", "3/4 कप गुड़, कसा हुआ", "2 बड़े चम्मच घी", "1/4 कप ब्राउनटॉप मिलेट का आटा, सूखा भुना हुआ", "1/2 कप भुनी मूँगफली, मोटी कुटी हुई", "1/4 छोटा चम्मच इलायची पाउडर", "एक चुटकी नमक", "2 बड़े चम्मच पानी, चाशनी के लिए"],
        steps: ["तिल को पैन में धीमी आँच पर 3-4 मिनट भूनें जब तक खुशबू और हल्का सुनहरापन न आ जाए, फिर ठंडा करके मोटा पीसें।", "ब्राउनटॉप मिलेट के आटे को 3 मिनट धीमी आँच पर भूनें जब तक उसमें नटी खुशबू न आए।", "गुड़ को पानी के साथ धीमी आँच पर 2 मिनट गाढ़ी चाशनी बनने तक पकाएँ।", "पिसे तिल, भुना आटा, मूँगफली, इलायची और नमक मिलाकर अच्छी तरह चलाएँ।", "घी डालकर मिलाएँ जब तक मिश्रण दबाने पर जुड़ने न लगे।", "गरम रहते हुए मिश्रण से छोटे गोल लड्डू बनाएँ और कसकर दबाएँ।", "पूरी तरह ठंडा होने दें, फिर हवाबंद डिब्बे में रखें।"],
      },
      ta: {
        ingredients: ["1 கப் வெள்ளை எள், உலர்வாக வறுத்தது", "3/4 கப் வெல்லம், துருவியது", "2 டேபிள்ஸ்பூன் நெய்", "1/4 கப் பிரவுன்டாப் சிறுதானிய மாவு, உலர்வாக வறுத்தது", "1/2 கப் வறுத்த வேர்க்கடலை, கொரகொரப்பாக இடித்தது", "1/4 டீஸ்பூன் ஏலக்காய் தூள்", "ஒரு சிட்டிகை உப்பு", "2 டேபிள்ஸ்பூன் தண்ணீர், பாகுக்கு"],
        steps: ["எள்ளை மெல்லிய தீயில் 3-4 நிமிடம் மணம் வரும் வரை வறுத்து, ஆறவைத்து கொரகொரப்பாக அரைக்கவும்.", "சிறுதானிய மாவை மெல்லிய தீயில் 3 நிமிடம் நட்டு வாசனை வரும் வரை வறுக்கவும்.", "வெல்லத்தை தண்ணீருடன் மெல்லிய தீயில் 2 நிமிடம் கெட்டியான பாகாகும் வரை காய்ச்சவும்.", "அரைத்த எள், வறுத்த மாவு, வேர்க்கடலை, ஏலக்காய், உப்பு சேர்த்து நன்கு கலக்கவும்.", "நெய் சேர்த்து, அழுத்தும்போது உருண்டையாக பிடிக்கும் வரை கலக்கவும்.", "சூடாக இருக்கும் போதே கையால் அழுத்தி சிறிய உருண்டைகளாக பிடிக்கவும்.", "முழுவதுமாக ஆறவிட்டு காற்றுப் புகாத டப்பாவில் சேமிக்கவும்."],
      },
    },
  },
  translations: {
    "browntop-millet-41": {
      hi: { title: "कोर्ले लेमन राइस", description: "ब्राउनटॉप मिलेट के दानों को सरसों, चना दाल, मूँगफली और करी पत्तों के तड़के में नींबू के रस के साथ मिलाया गया हल्का, खट्टा व्यंजन।" },
      ta: { title: "கோர்லே எலுமிச்சை சாதம்", description: "பிரவுன்டாப் சிறுதானிய சாதத்தை கடுகு, கடலைப் பருப்பு, வேர்க்கடலை தாளிப்பில் எலுமிச்சை சாறுடன் கலந்த இலகுவான புளிப்பு சாதம்." },
    },
    "browntop-millet-42": {
      hi: { title: "कोर्ले पद्दू", description: "ब्राउनटॉप मिलेट और उड़द दाल के खमीर उठे घोल से पद्दू पैन में घी और जीरे के साथ बने गोल, सुनहरे व्यंजन, चटनी और सांभर के साथ।" },
      ta: { title: "கோர்லே பணியாரம்", description: "பிரவுன்டாப் சிறுதானிய மற்றும் உளுத்த மாவை புளிக்க வைத்து குழிப் பணியாரக் கல்லில் நெய், சீரகத்துடன் சுட்ட வட்டமான பணியாரம்." },
    },
    "browntop-millet-43": {
      hi: { title: "कोर्ले अप्पम", description: "ब्राउनटॉप मिलेट के खमीर उठे घोल और नारियल के दूध से बने जालीदार किनारों वाले नरम अप्पम, केरल की शैली में गुड़ के साथ परोसे जाने वाले।" },
      ta: { title: "கோர்லே அப்பம்", description: "பிரவுன்டாப் சிறுதானிய புளித்த மாவு மற்றும் தேங்காய்ப் பாலில் செய்த விளிம்பு வலையாக இருக்கும் மென்மையான அப்பம், கேரளா பாணி காலை உணவு." },
    },
    "browntop-millet-44": {
      hi: { title: "कोर्ले उकडीचे मोदक", description: "नारियल, गुड़ और तिल के मीठे भरावन वाले भाप में पके ब्राउनटॉप मिलेट के मोदक, महाराष्ट्र में गणेश चतुर्थी की परंपरागत मिठाई।" },
      ta: { title: "கோர்லே மோதகம்", description: "தேங்காய், வெல்லம், எள் பூரணத்துடன் ஆவியில் வேகவைத்த பிரவுன்டாப் சிறுதானிய மோதகம், மகாராஷ்டிர விநாயகர் சதுர்த்தி பாரம்பரிய இனிப்பு." },
    },
    "browntop-millet-45": {
      hi: { title: "कोर्ले तिलगुल लड्डू", description: "भुने तिल, मूँगफली, ब्राउनटॉप मिलेट के भुने आटे और गुड़ से बने पौष्टिक लड्डू, महाराष्ट्र में फसल के त्योहारों पर बाँटे जाने वाले।" },
      ta: { title: "கோர்லே எள் லட்டு", description: "வறுத்த எள், வேர்க்கடலை, பிரவுன்டாப் சிறுதானிய மாவு, வெல்லத்தில் செய்த சத்தான லட்டு, மகாராஷ்டிர அறுவடை திருவிழா இனிப்பு." },
    },
  },
  plate: {
    "browntop-millet-41": {
      kcal: 260, carbsG: 40, fibreG: 4, gi: 55,
      minerals: ["iron", "magnesium", "manganese"],
      raw: { kind: "raw", name: "Cucumber rounds", how: "Slice one cucumber into thin rounds and sprinkle with a pinch of black salt." },
      sides: [
        { kind: "cooked", name: "Beetroot poriyal", how: "Sauté grated beetroot with mustard seeds, curry leaves and a little grated coconut until tender." },
        { kind: "cooked", name: "Drumstick sambar", how: "Simmer toor dal with drumsticks, tamarind and sambar powder until thick and fragrant." },
      ],
    },
    "browntop-millet-42": {
      kcal: 230, carbsG: 32, fibreG: 5, gi: 55,
      minerals: ["iron", "magnesium", "calcium"],
      raw: { kind: "raw", name: "Sliced cucumber", how: "Slice cucumber into rounds and season with black salt and lemon juice." },
      sides: [
        { kind: "cooked", name: "Beans poriyal", how: "Stir-fry chopped beans with grated coconut, mustard seeds and curry leaves until just tender." },
        { kind: "cooked", name: "Tomato rasam", how: "Simmer tomato with tamarind water, pepper, cumin and garlic, then finish with coriander." },
      ],
    },
    "browntop-millet-43": {
      kcal: 230, carbsG: 38, fibreG: 3, gi: 60,
      minerals: ["iron", "magnesium", "potassium"],
      raw: { kind: "raw", name: "Sliced cucumber", how: "Slice cucumber thinly and sprinkle with a pinch of salt." },
      sides: [
        { kind: "cooked", name: "Vegetable ishtu", how: "Simmer potato, carrot and beans in coconut milk with green chilli and curry leaves until tender." },
        { kind: "cooked", name: "Toor dal tadka", how: "Simmer toor dal until soft and finish with a tempering of mustard seeds and dried chilli." },
      ],
    },
    "browntop-millet-44": {
      kcal: 240, carbsG: 38, fibreG: 4, gi: 62,
      minerals: ["iron", "magnesium", "copper"],
      raw: { kind: "raw", name: "Cucumber slices", how: "Slice cucumber and sprinkle with a pinch of black salt." },
      sides: [
        { kind: "cooked", name: "Beetroot poriyal", how: "Sauté grated beetroot with mustard seeds, curry leaves and a little grated coconut until tender." },
        { kind: "cooked", name: "Radish sambar", how: "Simmer radish and toor dal with tamarind and sambar powder until thick and fragrant." },
      ],
    },
    "browntop-millet-45": {
      kcal: 300, carbsG: 32, fibreG: 4, gi: 60,
      minerals: ["calcium", "iron", "magnesium"],
      raw: { kind: "raw", name: "Cucumber rounds", how: "Slice cucumber into thin rounds and sprinkle with a pinch of black salt." },
      sides: [
        { kind: "cooked", name: "Beetroot poriyal", how: "Sauté grated beetroot with mustard seeds, curry leaves and a little grated coconut until tender." },
        { kind: "cooked", name: "Beans poriyal", how: "Stir-fry chopped beans with grated coconut, mustard seeds and curry leaves until just tender." },
      ],
    },
  },
};
