import type { Recipe } from "@/types/recipe";
import type { LineContent } from "@/data/i18n-content/sorghum";
import type { PlateInfo } from "@/types/plate";

/** finger-millet recipes finger-millet-51 to finger-millet-55. */
export const FINGER_MILLET_BATCH_8: {
  recipes: Recipe[];
  content: Record<string, { hi: LineContent; ta: LineContent }>;
  translations: Record<string, { hi: { title: string; description: string }; ta: { title: string; description: string } }>;
  plate: Record<string, PlateInfo>;
} = {
  recipes: [
    {
      id: "finger-millet-51",
      title: "Ragi Coconut Idiyappam",
      milletId: "finger-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Breakfast",
      description: "Delicate steamed string hoppers pressed from a soft ragi and rice flour dough, usually served with coconut milk and a little jaggery.",
      servings: 4,
      prepTimeMinutes: 25,
      cookTimeMinutes: 15,
      difficulty: "Medium",
      ingredients: [
        "1 cup ragi (finger millet) flour",
        "1/2 cup rice flour",
        "1 1/4 cups water",
        "1/2 tsp salt",
        "1 tsp sesame oil",
        "1/2 cup grated fresh coconut",
        "2 tbsp jaggery powder",
        "1/4 tsp cardamom powder",
        "1 tsp ghee for greasing",
      ],
      steps: [
        "Bring the water with the salt and sesame oil to a boil in a heavy pan.",
        "Add the ragi and rice flours slowly, stirring fast until a soft dough forms.",
        "Cover and rest for 5 minutes, then knead the warm dough until smooth and pliable.",
        "Grease an idiyappam press with ghee and fill it with a small portion of dough.",
        "Press the dough into thin strands directly onto a greased idli plate or a banana leaf.",
        "Steam the idiyappam on a steamer for 8 to 10 minutes until the strands are firm and cooked through.",
        "Mix the grated coconut, jaggery and cardamom to make a sweet topping.",
        "Serve the idiyappam warm with the coconut and jaggery mixture.",
      ],
    },
    {
      id: "finger-millet-52",
      title: "Ragi Paniyaram",
      milletId: "finger-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Snack",
      description: "Soft, golden dumplings cooked in a paniyaram pan from a fermented batter of ragi, rice and urad dal, flavoured with onion, mustard and curry leaves.",
      servings: 4,
      prepTimeMinutes: 20,
      cookTimeMinutes: 20,
      difficulty: "Medium",
      ingredients: [
        "1 cup ragi (finger millet) flour",
        "1/4 cup rice flour",
        "1/4 cup urad dal, soaked for 4 hours and ground",
        "1 small onion, finely chopped",
        "1 green chilli, finely chopped",
        "1 tsp mustard seeds",
        "8 curry leaves, chopped",
        "1 tsp salt",
        "Water as needed, plus 2 tbsp oil for the pan",
      ],
      steps: [
        "Mix the ragi flour, rice flour, ground urad dal and salt with water to make a thick batter.",
        "Cover the batter and ferment it in a warm place for 6 to 8 hours until it rises and bubbles.",
        "Heat the oil and add the mustard seeds until they splutter, then pour the tempering into the batter.",
        "Stir in the chopped onion, green chilli and curry leaves.",
        "Heat a paniyaram pan on medium heat and add a few drops of oil into each cup.",
        "Pour a spoonful of batter into each cup and cook for 2 minutes until the base sets.",
        "Turn each paniyaram with a skewer and cook the other side for another 2 minutes until golden.",
        "Serve hot with coconut chutney or sambar.",
      ],
    },
    {
      id: "finger-millet-53",
      title: "Ragi Gur Laddoo",
      milletId: "finger-millet",
      region: "North Indian",
      diet: "Vegetarian",
      course: "Dessert",
      description: "Energy-dense sweet balls of roasted ragi flour, ghee and jaggery with nuts and cardamom, traditionally made in winter for warmth and strength.",
      servings: 10,
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      difficulty: "Easy",
      ingredients: [
        "1 cup ragi (finger millet) flour",
        "1/3 cup ghee",
        "3/4 cup jaggery, grated",
        "1/2 tsp cardamom powder",
        "2 tbsp chopped almonds",
        "2 tbsp chopped cashews",
        "2 tbsp water for the syrup",
        "2 tbsp warm milk, only if needed",
        "1 tbsp poppy seeds",
      ],
      steps: [
        "Dry roast the ragi flour on low heat for 5 minutes until it turns a shade darker and smells nutty.",
        "Heat 2 tbsp ghee in a separate pan and fry the chopped almonds and cashews until golden.",
        "Add the remaining ghee to the roasted ragi flour and mix well.",
        "Melt the grated jaggery in a little water in a pan and cook it to a thick syrup.",
        "Mix the ragi flour, fried nuts, poppy seeds and cardamom powder into the warm jaggery syrup.",
        "Add a little warm milk if the mixture is too dry to hold together.",
        "Shape the mixture into small smooth balls while it is still warm.",
        "Cool completely on a plate and store in an airtight jar for up to two weeks.",
      ],
    },
    {
      id: "finger-millet-54",
      title: "Ragi Lemon Rice",
      milletId: "finger-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Main Course",
      description: "A tangy, aromatic rice dish tempered with mustard, peanuts and curry leaves and mixed with lemon juice and ragi rice grits.",
      servings: 4,
      prepTimeMinutes: 15,
      cookTimeMinutes: 25,
      difficulty: "Easy",
      ingredients: [
        "1 cup ragi (finger millet) grits (ragi rava)",
        "2 1/2 cups water",
        "2 tbsp oil",
        "1 tsp mustard seeds",
        "1 tsp urad dal",
        "2 tbsp peanuts",
        "8 curry leaves",
        "2 tbsp lemon juice",
        "1 tsp turmeric powder",
        "1 tsp salt",
      ],
      steps: [
        "Dry roast the ragi grits in a pan for 2 minutes until they smell nutty.",
        "Cook the grits in the water with a pinch of salt for 15 minutes until soft and fluffy.",
        "Heat the oil in a pan and add the mustard seeds, urad dal and peanuts until they crackle and the peanuts turn golden.",
        "Add the curry leaves and turmeric and fry for 30 seconds.",
        "Add the cooked ragi grits to the pan and mix gently so that every grain is coated.",
        "Sprinkle in the salt and lemon juice and stir to distribute the flavour evenly.",
        "Cook on low heat for 2 more minutes so the flavours blend together.",
        "Serve the lemon rice warm, with a side of papad or curd.",
      ],
    },
    {
      id: "finger-millet-55",
      title: "Ragi Mudde with Chicken Curry",
      milletId: "finger-millet",
      region: "South Indian",
      diet: "Non-Vegetarian",
      course: "Main Course",
      description: "Round, smooth ragi mudde served with a spicy country-style chicken curry of onion, tomato and coconut, a hearty Karnataka meal.",
      servings: 4,
      prepTimeMinutes: 25,
      cookTimeMinutes: 40,
      difficulty: "Hard",
      ingredients: [
        "2 cups ragi (finger millet) flour",
        "3 cups water",
        "1/2 tsp salt",
        "500 g chicken, cut into pieces with bone",
        "3 tbsp coconut oil",
        "2 onions, finely chopped",
        "1 tbsp ginger-garlic paste",
        "2 tomatoes, chopped",
        "1 tbsp red chilli powder",
        "1 tsp garam masala",
      ],
      steps: [
        "Bring the water and salt to a rolling boil in a heavy pot.",
        "Add the ragi flour slowly while stirring constantly to avoid lumps, then cover and cook for 5 minutes.",
        "Stir the mudde vigorously until it becomes a smooth, firm dough, then cover and keep warm.",
        "Heat the coconut oil in a pan and fry the onions until golden, then stir in the ginger-garlic paste.",
        "Add the tomatoes and cook until mushy, then add the chilli powder and chicken pieces and brown them.",
        "Add enough water to cover the chicken, stir in the garam masala, and simmer on low heat for 30 minutes.",
        "Shape the mudde into smooth balls with wet hands, making a small hollow in each one.",
        "Serve each mudde with a ladle of chicken curry and eat by dipping small pieces into the gravy.",
      ],
    },
  ],
  content: {
    "finger-millet-51": {
      hi: {
        ingredients: ["1 कप रागी (मडुआ) का आटा", "1/2 कप चावल का आटा", "1 1/4 कप पानी", "1/2 छोटा चम्मच नमक", "1 छोटा चम्मच तिल का तेल", "1/2 कप ताज़ा कसा नारियल", "2 बड़े चम्मच गुड़ का पाउडर", "1/4 छोटा चम्मच इलायची पाउडर", "1 छोटा चम्मच घी, चिकनाई के लिए"],
        steps: ["पानी, नमक और तिल के तेल को एक भारी पैन में उबाल लें।", "रागी और चावल का आटा धीरे-धीरे डालकर तेज़ी से चलाएँ जब तक नरम आटा न बन जाए।", "ढककर 5 मिनट रखें, फिर गुनगुने आटे को चिकना और लचीला होने तक गूँधें।", "इडियाप्पम प्रेस में घी लगाएँ और उसमें आटे का छोटा हिस्सा भरें।", "आटे को सीधे चिकनाई लगी इडली प्लेट या केले के पत्ते पर पतली धागेदार पट्टियों में दबाएँ।", "इडियाप्पम को भाप में 8 से 10 मिनट पकाएँ जब तक धागे मजबूत और पके न हो जाएँ।", "कसा नारियल, गुड़ और इलायची मिलाकर मीठा ऊपरी मिश्रण बनाएँ।", "गरम इडियाप्पम को नारियल-गुड़ मिश्रण के साथ परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் ராகி (கேழ்வரகு) மாவு", "1/2 கப் அரிசி மாவு", "1 1/4 கப் தண்ணீர்", "1/2 டீஸ்பூன் உப்பு", "1 டீஸ்பூன் எள் எண்ணெய்", "1/2 கப் துருவிய புதிய தேங்காய்", "2 டேபிள்ஸ்பூன் வெல்லத் தூள்", "1/4 டீஸ்பூன் ஏலக்காய்த் தூள்", "1 டீஸ்பூன் நெய், தடவ"],
        steps: ["தண்ணீர், உப்பு, எள் எண்ணெயை கனமான பாத்திரத்தில் கொதிக்க விடவும்.", "ராகி, அரிசி மாவுகளை மெதுவாக சேர்த்து, மென்மையான மாவு உருவாகும் வரை வேகமாக கிளறவும்.", "மூடி 5 நிமிடம் வைத்து, பின் சூடான மாவை மென்மையாகவும் நெகிழ்வாகவும் வரும் வரை பிசையவும்.", "இடியாப்ப அச்சுக்கு நெய் தடவி, சிறிய அளவு மாவை நிரப்பவும்.", "மாவை நேரடியாக நெய் தடவிய இட்லி தட்டு அல்லது வாழையிலையில் மெல்லிய இழைகளாக பிழியவும்.", "இடியாப்பங்களை 8 முதல் 10 நிமிடம் ஆவியில் வேகவிடவும், இழைகள் உறுதியாகவும் வெந்தும் வரும் வரை.", "துருவிய தேங்காய், வெல்லம், ஏலக்காயை கலந்து இனிப்பு தூவலை தயார் செய்யவும்.", "சூடான இடியாப்பத்தை தேங்காய்-வெல்ல கலவையுடன் பரிமாறவும்."],
      },
    },
    "finger-millet-52": {
      hi: {
        ingredients: ["1 कप रागी (मडुआ) का आटा", "1/4 कप चावल का आटा", "1/4 कप उड़द दाल, 4 घंटे भिगोकर पीसी हुई", "1 छोटा प्याज़, बारीक कटा", "1 हरी मिर्च, बारीक कटी", "1 छोटा चम्मच राई", "8 करी पत्ते, कटे हुए", "1 छोटा चम्मच नमक", "ज़रूरत अनुसार पानी और पैन के लिए 2 बड़े चम्मच तेल"],
        steps: ["रागी का आटा, चावल का आटा, पिसी उड़द दाल और नमक को पानी के साथ गाढ़ा घोल बनाएँ।", "घोल को ढककर गुनगुनी जगह पर 6 से 8 घंटे फर्मेंट होने दें, जब तक वह फूलकर बुलबुले न बनाने लगे।", "तेल गरम करें और राई डालें जब तक वह चटकने न लगे, फिर तड़का घोल में डालें।", "कटा प्याज़, हरी मिर्च और करी पत्ते मिलाएँ।", "पनियारम पैन को मध्यम आँच पर गरम करें और हर कप में तेल की कुछ बूँदें डालें।", "हर कप में एक चम्मच घोल डालें और 2 मिनट पकाएँ जब तक नीचे का हिस्सा सेट न हो जाए।", "सींक से हर पनियारम पलटें और दूसरी ओर 2 मिनट और सुनहरा होने तक पकाएँ।", "गरम-गरम नारियल की चटनी या सांभर के साथ परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் ராகி மாவு", "1/4 கப் அரிசி மாவு", "1/4 கப் உளுத்தம் பருப்பு, 4 மணி நேரம் ஊறவைத்து அரைத்தது", "1 சிறிய வெங்காயம், பொடியாக நறுக்கியது", "1 பச்சை மிளகாய், பொடியாக நறுக்கியது", "1 டீஸ்பூன் கடுகு", "8 கறிவேப்பிலை, நறுக்கியது", "1 டீஸ்பூன் உப்பு", "தேவையான அளவு தண்ணீர், பனியாரச் சட்டிக்கு 2 டேபிள்ஸ்பூன் எண்ணெய்"],
        steps: ["ராகி மாவு, அரிசி மாவு, அரைத்த உளுத்தம் பருப்பு, உப்பை தண்ணீருடன் கலந்து கெட்டியான மாவாக்கவும்.", "மாவை மூடி, வெதுவெதுப்பான இடத்தில் 6 முதல் 8 மணி நேரம் புளிக்க விடவும், மாவு பொங்கி குமிழிகள் வரும் வரை.", "எண்ணெயை சூடாக்கி கடுகு வெடிக்கும் வரை சேர்த்து, தாளிப்பை மாவில் ஊற்றவும்.", "நறுக்கிய வெங்காயம், பச்சை மிளகாய், கறிவேப்பிலையை கலக்கவும்.", "பனியாரச் சட்டியை மிதமான தீயில் சூடாக்கி, ஒவ்வொரு குழியிலும் சில சொட்டு எண்ணெய் விடவும்.", "ஒவ்வொரு குழியிலும் ஒரு கரண்டி மாவை ஊற்றி, அடிப்பகுதி கெட்டியாகும் வரை 2 நிமிடம் வேகவிடவும்.", "ஒரு குச்சியால் ஒவ்வொரு பனியாரத்தையும் திருப்பி, பொன்னிறமாகும் வரை மற்றொரு பக்கம் 2 நிமிடம் வேகவிடவும்.", "சூடாக தேங்காய் சட்னி அல்லது சாம்பாருடன் பரிமாறவும்."],
      },
    },
    "finger-millet-53": {
      hi: {
        ingredients: ["1 कप रागी (मडुआ) का आटा", "1/3 कप घी", "3/4 कप गुड़, कसा हुआ", "1/2 छोटा चम्मच इलायची पाउडर", "2 बड़े चम्मच कटे बादाम", "2 बड़े चम्मच कटे काजू", "2 बड़े चम्मच पानी, चाशनी के लिए", "2 बड़े चम्मच गुनगुना दूध, ज़रूरत हो तो", "1 बड़ा चम्मच खसखस"],
        steps: ["रागी के आटे को धीमी आँच पर 5 मिनट भूनें जब तक रंग थोड़ा गहरा और खुशबू सोंधी न हो जाए।", "दूसरे पैन में 2 बड़े चम्मच घी गरम करके कटे बादाम और काजू सुनहरे होने तक तलें।", "भुने रागी के आटे में बचा घी डालकर अच्छी तरह मिलाएँ।", "कसे गुड़ को 2 बड़े चम्मच पानी के साथ पैन में गलाकर गाढ़ी चाशनी बनाएँ।", "भुना आटा, तले मेवे, खसखस और इलायची पाउडर गरम चाशनी में मिलाएँ।", "अगर मिश्रण बंधने में मुश्किल हो तो थोड़ा गुनगुना दूध डालें।", "मिश्रण गरम रहते ही छोटे चिकने गोले बनाएँ।", "प्लेट में पूरी तरह ठंडा होने दें और दो हफ्ते तक हवा-बंद बर्तन में रखें।"],
      },
      ta: {
        ingredients: ["1 கப் ராகி மாவு", "1/3 கப் நெய்", "3/4 கப் வெல்லம், துருவியது", "1/2 டீஸ்பூன் ஏலக்காய்த் தூள்", "2 டேபிள்ஸ்பூன் நறுக்கிய பாதாம்", "2 டேபிள்ஸ்பூன் நறுக்கிய முந்திரி", "2 டேபிள்ஸ்பூன் தண்ணீர், பாகுக்கு", "2 டேபிள்ஸ்பூன் வெதுவெதுப்பான பால், தேவைப்பட்டால்", "1 டேபிள்ஸ்பூன் கசகசா"],
        steps: ["ராகி மாவை மெல்லிய தீயில் 5 நிமிடம் நிறம் சற்று கருமையாகி வாசனை வரும் வரை வறுக்கவும்.", "தனி வாணலியில் 2 டேபிள்ஸ்பூன் நெய்யை சூடாக்கி, பாதாம், முந்திரியை பொன்னிறமாகும் வரை வறுக்கவும்.", "வறுத்த ராகி மாவில் மீதமுள்ள நெய்யைச் சேர்த்து நன்கு கலக்கவும்.", "துருவிய வெல்லத்தை 2 டேபிள்ஸ்பூன் தண்ணீருடன் வாணலியில் உருக்கி கெட்டியான பாகு வரும் வரை காய்ச்சவும்.", "வறுத்த மாவு, வறுத்த நட்ஸ், கசகசா, ஏலக்காய்த் தூளை சூடான பாகில் சேர்க்கவும்.", "கலவை ஒன்றாக சேராமல் கடினமாக இருந்தால் வெதுவெதுப்பான பால் சிறிது சேர்க்கவும்.", "கலவை சூடாக இருக்கும் போதே சிறிய மென்மையான உருண்டைகளாக பிடிக்கவும்.", "தட்டில் முழுவதும் ஆறவிட்டு, இரண்டு வாரம் வரை காற்றுப்புகாத ஜாடியில் வைக்கவும்."],
      },
    },
    "finger-millet-54": {
      hi: {
        ingredients: ["1 कप रागी (मडुआ) के दाने (रागी रवा)", "2 1/2 कप पानी", "2 बड़े चम्मच तेल", "1 छोटा चम्मच राई", "1 छोटा चम्मच उड़द दाल", "2 बड़े चम्मच मूँगफली", "8 करी पत्ते", "2 बड़े चम्मच नींबू का रस", "1 छोटा चम्मच हल्दी पाउडर", "1 छोटा चम्मच नमक"],
        steps: ["रागी के दानों को पैन में 2 मिनट भूनें जब तक सोंधी खुशबू न आने लगे।", "दानों को नमक की चुटकी के साथ पानी में 15 मिनट पकाएँ जब तक वे नरम और फूले हुए न हों।", "पैन में तेल गरम करें और राई, उड़द दाल व मूँगफली डालें जब तक दाने चटकें और मूँगफली सुनहरी हो जाए।", "करी पत्ते और हल्दी डालकर 30 सेकंड भूनें।", "पके रागी के दाने पैन में डालें और धीरे से मिलाएँ ताकि हर दाना लिपट जाए।", "नमक और नींबू का रस छिड़ककर चलाएँ ताकि स्वाद बराबर फैल जाए।", "2 मिनट और धीमी आँच पर पकाएँ ताकि स्वाद आपस में घुल जाए।", "गरम नींबू चावल को पापड़ या दही के साथ परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் ராகி ரவை (ராகி ரவா)", "2 1/2 கப் தண்ணீர்", "2 டேபிள்ஸ்பூன் எண்ணெய்", "1 டீஸ்பூன் கடுகு", "1 டீஸ்பூன் உளுத்தம் பருப்பு", "2 டேபிள்ஸ்பூன் நிலக்கடலை", "8 கறிவேப்பிலை", "2 டேபிள்ஸ்பூன் எலுமிச்சை சாறு", "1 டீஸ்பூன் மஞ்சள் தூள்", "1 டீஸ்பூன் உப்பு"],
        steps: ["ராகி ரவையை வாணலியில் 2 நிமிடம் நட்டு வாசனை வரும் வரை வறுக்கவும்.", "ரவையை ஒரு சிட்டிகை உப்புடன் தண்ணீரில் 15 நிமிடம் மென்மையாகவும் பொலபொலப்பாகவும் வேகவிடவும்.", "வாணலியில் எண்ணெய் சூடாக்கி, கடுகு, உளுத்தம் பருப்பு, நிலக்கடலை சேர்த்து வெடித்து, கடலை பொன்னிறமாகும் வரை வறுக்கவும்.", "கறிவேப்பிலை, மஞ்சள் சேர்த்து 30 வினாடி வதக்கவும்.", "வெந்த ராகி ரவையை வாணலியில் போட்டு மெதுவாக கிளறி, ஒவ்வொரு தானியமும் கலக்கும் வரை கலக்கவும்.", "உப்பும் எலுமிச்சை சாறும் தூவி கிளறி, சுவை சமமாக பரவ விடவும்.", "மேலும் 2 நிமிடம் மெல்லிய தீயில் வேகவிட்டு, சுவைகள் ஒன்றாக சேரவிடவும்.", "சூடான எலுமிச்சை சாதத்தை அப்பளம் அல்லது தயிருடன் பரிமாறவும்."],
      },
    },
    "finger-millet-55": {
      hi: {
        ingredients: ["2 कप रागी (मडुआ) का आटा", "3 कप पानी", "1/2 छोटा चम्मच नमक", "500 ग्राम चिकन, हड्डी वाले टुकड़े", "3 बड़े चम्मच नारियल तेल", "2 प्याज़, बारीक कटे", "1 बड़ा चम्मच अदरक-लहसुन का पेस्ट", "2 टमाटर, कटे हुए", "1 बड़ा चम्मच लाल मिर्च पाउडर", "1 छोटा चम्मच गरम मसाला"],
        steps: ["भारी बर्तन में पानी और नमक तेज़ उबाल पर लाएँ।", "लगातार चलाते हुए धीरे-धीरे रागी का आटा डालें ताकि गुठलियाँ न बनें, फिर ढककर 5 मिनट पकाएँ।", "मुद्दे को ज़ोर से चलाकर चिकना, कड़ा आटा बनाएँ, फिर ढककर गरम रखें।", "नारियल तेल में कटे प्याज़ को सुनहरा तलें, फिर अदरक-लहसुन पेस्ट डालें।", "कटे टमाटर डालकर गलने तक पकाएँ, फिर लाल मिर्च और चिकन के टुकड़े डालकर भूरा होने तक भूनें।", "चिकन ढकने भर पानी डालें, गरम मसाला मिलाएँ और धीमी आँच पर 30 मिनट उबालें।", "गीले हाथों से मुद्दे को चिकनी गोलियों में बनाएँ और हर गोली के बीच थोड़ा गड्ढा करें।", "हर मुद्दे के साथ चिकन करी की एक कड़छी परोसें और छोटे टुकड़े ग्रेवी में डुबोकर खाएँ।"],
      },
      ta: {
        ingredients: ["2 கப் ராகி மாவு", "3 கப் தண்ணீர்", "1/2 டீஸ்பூன் உப்பு", "500 கிராம் கோழி, எலும்புடன் துண்டுகள்", "3 டேபிள்ஸ்பூன் தேங்காய் எண்ணெய்", "2 வெங்காயம், பொடியாக நறுக்கியது", "1 டேபிள்ஸ்பூன் இஞ்சி-பூண்டு விழுது", "2 தக்காளி, நறுக்கியது", "1 டேபிள்ஸ்பூன் மிளகாய்த் தூள்", "1 டீஸ்பூன் கரம் மசாலா"],
        steps: ["கனமான பானையில் தண்ணீர், உப்பை பொங்கும் கொதிநிலைக்கு கொண்டு வரவும்.", "கட்டி சேராமல் தொடர்ந்து கிளறியபடி ராகி மாவை மெதுவாக சேர்த்து, மூடி 5 நிமிடம் வேகவிடவும்.", "முத்தை வலுவாக கிளறி மென்மையான, கெட்டியான மாவாக்கி, மூடி சூடாக வைக்கவும்.", "தேங்காய் எண்ணெயில் நறுக்கிய வெங்காயத்தை பொன்னிறமாக வறுத்து, பிறகு இஞ்சி-பூண்டு விழுது சேர்க்கவும்.", "நறுக்கிய தக்காளியை குழையும் வரை வேகவிடவும், பிறகு மிளகாய்த் தூள், கோழித் துண்டுகள் சேர்த்து பழுப்பாகும் வரை வதக்கவும்.", "கோழி மூழ்கும் அளவு தண்ணீர் சேர்த்து, கரம் மசாலா கலந்து மெல்லிய தீயில் 30 நிமிடம் கொதிக்கவிடவும்.", "ஈரக் கைகளால் முத்தை மென்மையான உருண்டைகளாக்கி, ஒவ்வொன்றிலும் சிறு குழி செய்யவும்.", "ஒவ்வொரு முத்தையுடன் கோழி குழம்பை ஒரு கரண்டி பரிமாறி, சிறு துண்டுகளை குழம்பில் தோய்த்து சாப்பிடவும்."],
      },
    },
  },
  translations: {
    "finger-millet-51": {
      hi: { title: "रागी इडियाप्पम", description: "नरम रागी और चावल के आटे के गूँथे आटे से दबाकर भाप में पकाई गई महीन धागेदार इडियाप्पम, जिसे आमतौर पर नारियल के दूध और थोड़े गुड़ के साथ परोसा जाता है।" },
      ta: { title: "ராகி இடியாப்பம்", description: "மென்மையான ராகி, அரிசி மாவு பிசைந்து ஆவியில் வேகவைத்த நுண்ணிய இழை இடியாப்பம். பொதுவாக தேங்காய்ப்பால் மற்றும் சிறிது வெல்லத்துடன் பரிமாறப்படுகிறது." },
    },
    "finger-millet-52": {
      hi: { title: "रागी पनियारम", description: "रागी, चावल और उड़द दाल के फर्मेंट घोल से पनियारम के साँचे में बनी सुनहरी, नरम गोलियाँ, जिनमें प्याज़, राई और करी पत्ते का स्वाद होता है।" },
      ta: { title: "ராகி பனியாரம்", description: "ராகி, அரிசி, உளுத்தம் பருப்பு புளித்த மாவில் பனியாரச் சட்டியில் சுட்ட பொன்னிற மென்மையான உருண்டைகள். வெங்காயம், கடுகு, கறிவேப்பிலை சுவை சேர்க்கும்." },
    },
    "finger-millet-53": {
      hi: { title: "रागी गुड़ लड्डू", description: "भुने रागी के आटे, घी और गुड़ से बने ऊर्जा से भरपूर मीठे लड्डू, जिनमें मेवे, खसखस और इलायची होते हैं। सर्दियों में गर्माहट और ताकत के लिए बनाए जाते हैं।" },
      ta: { title: "ராகி வெல்ல உருண்டை", description: "வறுத்த ராகி மாவு, நெய், வெல்லத்தில் நட்ஸ், கசகசா, ஏலக்காயுடன் செய்யப்படும் ஆற்றல் நிறைந்த இனிப்பு உருண்டைகள். குளிர்காலத்தில் உடலுக்கு சூடும் வலுவும் தர செய்யப்படுகிறது." },
    },
    "finger-millet-54": {
      hi: { title: "रागी नींबू चावल", description: "राई, मूँगफली और करी पत्ते के छौंक में पकाए गए रागी के दानों को नींबू के रस के साथ मिलाकर बना खट्टा और सुगंधित व्यंजन।" },
      ta: { title: "ராகி எலுமிச்சை சாதம்", description: "கடுகு, நிலக்கடலை, கறிவேப்பிலை தாளிப்பில் ராகி ரவையுடன் எலுமிச்சை சாறு கலந்து செய்யப்படும் புளிப்பும் மணமும் நிறைந்த உணவு." },
    },
    "finger-millet-55": {
      hi: { title: "रागी मुद्दे के साथ चिकन करी", description: "गोल, चिकने रागी मुद्दे, जिन्हें प्याज़, टमाटर और नारियल की तीखी देसी चिकन करी के साथ परोसा जाता है। कर्नाटक का भरपेट भोजन।" },
      ta: { title: "ராகி முத்தையுடன் கோழி குழம்பு", description: "உருண்டையான மென்மையான ராகி முத்தை, வெங்காயம், தக்காளி, தேங்காய் சேர்த்த காரமான நாட்டுக் கோழி குழம்புடன் பரிமாறப்படும் கர்நாடகாவின் நிறைவான உணவு." },
    },
  },
  plate: {
    "finger-millet-51": {
      kcal: 250, carbsG: 46, fibreG: 4, gi: 55, minerals: ["calcium", "iron", "magnesium"],
      raw: { kind: "raw", name: "Cucumber and carrot sticks", how: "Cut cucumber and carrot into thin sticks and serve with a pinch of black salt." },
      sides: [
        { kind: "cooked", name: "Vegetable kurma", how: "Simmer mixed vegetables in a coconut and onion gravy with cumin and turmeric until tender." },
        { kind: "cooked", name: "Sambar", how: "Simmer toor dal with tamarind, vegetables and sambar powder, then temper with mustard and curry leaves." },
      ],
    },
    "finger-millet-52": {
      kcal: 230, carbsG: 34, fibreG: 5, gi: 58, minerals: ["calcium", "iron", "magnesium"],
      raw: { kind: "raw", name: "Tomato and cucumber salad", how: "Dice tomato and cucumber, then season with lemon juice, black pepper and coriander." },
      sides: [
        { kind: "cooked", name: "Coconut chutney", how: "Grind coconut with roasted chana dal, green chilli and tamarind, then temper with mustard and curry leaves." },
        { kind: "cooked", name: "Beans poriyal", how: "Stir fry chopped beans with mustard seeds, grated coconut and curry leaves until tender." },
      ],
    },
    "finger-millet-53": {
      kcal: 310, carbsG: 36, fibreG: 4, gi: 62, minerals: ["calcium", "iron", "magnesium", "zinc"],
      raw: { kind: "raw", name: "Carrot and cucumber sticks", how: "Cut carrot and cucumber into thin sticks and serve with a pinch of black salt." },
      sides: [
        { kind: "cooked", name: "Palak paneer", how: "Blend cooked spinach and simmer with paneer cubes, ginger, garlic and a little cream." },
        { kind: "cooked", name: "Lauki sabzi", how: "Cook bottle gourd cubes with cumin, tomato and turmeric until soft and lightly dry." },
      ],
    },
    "finger-millet-54": {
      kcal: 300, carbsG: 46, fibreG: 5, gi: 56, minerals: ["calcium", "iron", "magnesium", "phosphorus"],
      raw: { kind: "raw", name: "Onion and cucumber salad", how: "Slice onion and cucumber thinly, then toss with lemon juice and a pinch of salt." },
      sides: [
        { kind: "cooked", name: "Rasam", how: "Simmer tomato and tamarind with rasam powder, then temper with mustard, cumin and garlic." },
        { kind: "cooked", name: "Beans poriyal", how: "Stir fry chopped beans with mustard seeds, grated coconut and curry leaves until tender." },
      ],
    },
    "finger-millet-55": {
      kcal: 430, carbsG: 38, fibreG: 5, gi: 60, minerals: ["iron", "zinc", "phosphorus", "selenium"],
      raw: { kind: "raw", name: "Kachumber salad", how: "Dice cucumber, tomato and onion, and season with lemon juice, chaat masala and coriander." },
      sides: [
        { kind: "cooked", name: "Beans thoran", how: "Stir fry chopped beans with coconut, mustard seeds and curry leaves until dry and tender." },
        { kind: "cooked", name: "Rasam", how: "Simmer tomato and tamarind with rasam powder, then temper with mustard, cumin and garlic." },
      ],
    },
  },
};
