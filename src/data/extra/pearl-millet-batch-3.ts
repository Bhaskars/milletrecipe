import type { Recipe } from "@/types/recipe";
import type { LineContent } from "@/data/i18n-content/sorghum";
import type { PlateInfo } from "@/types/plate";

/** Pearl millet (bajra) recipes 26-30 with English, Hindi and Tamil content and plate data. */
export const PEARL_MILLET_BATCH_3 = {
  recipes: [
    {
      id: "pearl-millet-26",
      title: "Bajra Thalipeeth",
      milletId: "pearl-millet",
      region: "West Indian",
      diet: "Vegetarian",
      course: "Breakfast",
      description: "A savoury Maharashtrian multigrain flatbread of bajra and gram flour with onion, coriander and sesame, cooked on a hot tawa.",
      servings: 4,
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      difficulty: "Easy",
      ingredients: [
        "1 cup bajra (pearl millet) flour",
        "2 tbsp besan (gram flour)",
        "1 small onion, finely chopped",
        "1 green chilli and 2 tbsp coriander, chopped",
        "1 tbsp sesame seeds, 1/2 tsp cumin seeds",
        "1/2 tsp turmeric and 1/2 tsp salt",
        "water to knead, and oil or ghee for cooking",
      ],
      steps: [
        "Mix the bajra flour, besan, onion, green chilli, coriander, sesame, cumin, turmeric and salt in a bowl.",
        "Add water gradually to make a soft dough that holds its shape without sticking.",
        "Place a damp cloth on a flat surface, press a ball of dough into a round and pat it out into a thick disc with your fingers.",
        "Make a small hole in the centre and drizzle a few drops of oil around the edges.",
        "Transfer the thalipeeth to a hot tawa on medium heat, cooking the base for 2-3 minutes until golden.",
        "Drizzle more oil over the top and in the hole, then flip and cook the other side until crisp.",
        "Serve hot with white butter and curd."
      ],
    },
    {
      id: "pearl-millet-27",
      title: "Kambu Kanji with Pickle",
      milletId: "pearl-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Breakfast",
      description: "A warm, comforting pearl millet porridge cooked with salt and water, eaten with a spicy pickle, a traditional Tamil morning meal.",
      servings: 4,
      prepTimeMinutes: 10,
      cookTimeMinutes: 35,
      difficulty: "Easy",
      ingredients: [
        "1 cup kambu (pearl millet) flour or broken grains",
        "5 cups water",
        "1 tsp salt, adjusted to taste",
        "2 tsp shallots or small onions, chopped",
        "1 tsp cumin seeds, lightly crushed",
        "1 tsp ghee or sesame oil",
        "lime pickle or mango pickle, to serve",
      ],
      steps: [
        "Mix the kambu flour with 1 cup of cold water to make a smooth slurry without lumps.",
        "Bring the remaining 4 cups of water to a boil in a heavy pan.",
        "Slowly pour in the slurry, stirring constantly to avoid lumps.",
        "Add the salt and cumin, cover and cook on low heat for 25-30 minutes, stirring now and then.",
        "The porridge should become thick and smooth. Add a little more water if it thickens too much.",
        "Stir in the shallots and ghee just before serving.",
        "Serve hot in bowls with a spoon of pickle on the side."
      ],
    },
    {
      id: "pearl-millet-28",
      title: "Kambu Lemon Rice",
      milletId: "pearl-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Main Course",
      description: "Pearl millet grains tossed with lemon, peanuts and curry leaves, a light and tangy lunch from Tamil Nadu.",
      servings: 4,
      prepTimeMinutes: 15,
      cookTimeMinutes: 25,
      difficulty: "Easy",
      ingredients: [
        "1 cup kambu (pearl millet) grains, soaked for 1 hour",
        "2 1/2 cups water",
        "3 tbsp oil, 1 tsp mustard seeds, 1 tsp urad dal",
        "2 tbsp roasted peanuts",
        "8 curry leaves, 2 green chillies, slit",
        "1/2 tsp turmeric and a pinch of asafoetida",
        "juice of 2 lemons and salt to taste",
      ],
      steps: [
        "Drain the soaked kambu and pressure cook with 2 1/2 cups of water for 4 whistles, until soft but separate.",
        "Spread the cooked grains on a plate to cool so they do not clump.",
        "Heat the oil and splutter the mustard seeds. Add the urad dal and peanuts and fry until golden.",
        "Add the curry leaves, green chillies, asafoetida and turmeric, and stir for 30 seconds.",
        "Add the cooked kambu and salt, and toss gently on low heat for 2 minutes.",
        "Take the pan off the heat and stir in the lemon juice.",
        "Serve warm with a crisp papad or a side of cucumber raita."
      ],
    },
    {
      id: "pearl-millet-29",
      title: "Kambu Roti with Chicken Chettinad",
      milletId: "pearl-millet",
      region: "South Indian",
      diet: "Non-Vegetarian",
      course: "Main Course",
      description: "Soft pearl millet rotis served with a fiery Chettinad chicken curry with roasted spices, coconut and curry leaves.",
      servings: 4,
      prepTimeMinutes: 25,
      cookTimeMinutes: 40,
      difficulty: "Hard",
      ingredients: [
        "2 cups kambu (pearl millet) flour, for rotis",
        "1 cup warm water and 1/2 tsp salt",
        "500 g chicken, bone-in, cut into pieces",
        "2 onions, finely chopped, 2 tomatoes, chopped",
        "1 tbsp ginger-garlic paste",
        "For masala: 1 tsp fennel, 1 tsp coriander seeds, 6 dried red chillies, 1/4 cup grated coconut, roasted and ground",
        "1 tsp red chilli powder, 1/2 tsp turmeric",
        "3 tbsp oil, curry leaves, and salt to taste",
      ],
      steps: [
        "Knead the kambu flour, salt and warm water into a soft dough. Rest for 10 minutes, then shape into 8 rotis.",
        "Dry roast the fennel, coriander seeds and dried chillies, then grind with the roasted coconut into a fine paste.",
        "Heat the oil and fry the onions until golden. Add the ginger-garlic paste and cook for 2 minutes.",
        "Add the tomatoes, turmeric and chilli powder, and cook until they break down.",
        "Add the chicken and brown it for 5 minutes, then add the ground masala and cook for 3 minutes more.",
        "Add 1 cup water and salt, cover and simmer for 20 minutes until the chicken is tender and the gravy thick.",
        "Cook the rotis on a hot tawa, then serve with the chettinad chicken garnished with curry leaves."
      ],
    },
    {
      id: "pearl-millet-30",
      title: "Bajra Gud Pinni",
      milletId: "pearl-millet",
      region: "North Indian",
      diet: "Vegetarian",
      course: "Dessert",
      description: "Rich, crumbly bajra sweets made with ghee, jaggery and nuts, a winter energy treat from Rajasthan and Punjab.",
      servings: 6,
      prepTimeMinutes: 10,
      cookTimeMinutes: 25,
      difficulty: "Easy",
      ingredients: [
        "1 cup bajra (pearl millet) flour",
        "1/3 cup ghee",
        "1/2 cup jaggery, grated",
        "2 tbsp almonds and 2 tbsp cashews, chopped",
        "2 tbsp sesame seeds, lightly toasted",
        "1/4 tsp cardamom powder",
        "1 tbsp poppy seeds or edible gum (optional)",
      ],
      steps: [
        "Dry roast the bajra flour in a heavy pan on low heat for 8-10 minutes until it turns aromatic.",
        "Melt the ghee in a separate pan and stir it into the roasted flour, mixing until crumbly.",
        "Add the chopped nuts, sesame seeds, cardamom and poppy seeds, and mix well.",
        "Cool the mixture for 2 minutes, then stir in the grated jaggery while the mixture is still warm.",
        "Press the mixture firmly, then roll into small smooth balls with your palms.",
        "Let the pinnis set at room temperature for 10 minutes.",
        "Store in an airtight container and enjoy within a week."
      ],
    },
  ] as Recipe[],

  content: {
    "pearl-millet-26": {
      hi: {
        ingredients: ["1 कप बाजरे का आटा", "2 बड़े चम्मच बेसन", "1 छोटा प्याज़, बारीक कटा", "1 हरी मिर्च और 2 बड़े चम्मच धनिया, कटे", "1 बड़ा चम्मच तिल, 1/2 छोटा चम्मच जीरा", "1/2 छोटा चम्मच हल्दी और 1/2 छोटा चम्मच नमक", "गूँधने के लिए पानी, और पकाने के लिए तेल या घी"],
        steps: ["बाजरे का आटा, बेसन, प्याज़, हरी मिर्च, धनिया, तिल, जीरा, हल्दी और नमक एक बर्तन में मिलाएँ।", "धीरे-धीरे पानी डालकर नरम आटा गूँधें जो बिना चिपके आकार बनाए रखे।", "एक गीले कपड़े पर आटे की गोली रखकर उँगलियों से मोटी, गोल टिक्की थपथपाएँ।", "बीच में छोटा छेद करें और किनारों पर तेल की कुछ बूँदें डालें।", "थालीपीठ को मध्यम आँच पर गरम तवे पर डालें और नीचे का हिस्सा 2-3 मिनट सुनहरा होने तक सेंकें।", "ऊपर और छेद में और तेल डालें, फिर पलटकर दूसरी तरफ कुरकुरा होने तक सेंकें।", "सफ़ेद मक्खन और दही के साथ गरम परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் கம்பு மாவு", "2 டேபிள்ஸ்பூன் கடலை மாவு", "1 சிறிய வெங்காயம், பொடியாக நறுக்கியது", "1 பச்சை மிளகாய் மற்றும் 2 டேபிள்ஸ்பூன் கொத்தமல்லி, நறுக்கியது", "1 டேபிள்ஸ்பூன் எள், 1/2 டீஸ்பூன் சீரகம்", "1/2 டீஸ்பூன் மஞ்சள் மற்றும் 1/2 டீஸ்பூன் உப்பு", "பிசைய தண்ணீர், மற்றும் சமைக்க எண்ணெய் அல்லது நெய்"],
        steps: ["கம்பு மாவு, கடலை மாவு, வெங்காயம், பச்சை மிளகாய், கொத்தமல்லி, எள், சீரகம், மஞ்சள், உப்பை ஒரு பாத்திரத்தில் கலக்கவும்.", "படிப்படியாக தண்ணீர் சேர்த்து ஒட்டாமல் வடிவம் பிடிக்கும் மென்மையான மாவாக பிசையவும்.", "ஈரமான துணியின் மீது மாவு உருண்டையை வைத்து விரல்களால் தடித்த வட்டமாக தட்டவும்.", "நடுவில் சிறிய துளையிட்டு ஓரங்களில் சில சொட்டு எண்ணெய் விடவும்.", "தாளிப்பை சூடான தவாவில் மிதமான தீயில் வைத்து அடிப்பகுதி 2-3 நிமிடம் பொன்னிறமாகும் வரை வேகவிடவும்.", "மேலேயும் துளையிலும் மேலும் எண்ணெய் விட்டு திருப்பி மறுபக்கம் மொறுமொறுப்பாகும் வரை வேகவிடவும்.", "வெண்ணெய், தயிருடன் சூடாக பரிமாறவும்."],
      },
    },
    "pearl-millet-27": {
      hi: {
        ingredients: ["1 कप कंबु (बाजरा) का आटा या टूटे दाने", "5 कप पानी", "1 छोटा चम्मच नमक, स्वादानुसार", "2 छोटे चम्मच छोटे प्याज़ या शैलॉट, कटे", "1 छोटा चम्मच जीरा, हल्का कुटा हुआ", "1 छोटा चम्मच घी या तिल का तेल", "नींबू या आम के अचार के साथ परोसने के लिए"],
        steps: ["कंबु के आटे को 1 कप ठंडे पानी में मिलाकर गुठलियों रहित घोल बनाएँ।", "बचे 4 कप पानी को भारी बर्तन में उबालें।", "घोला हुआ आटा धीरे-धीरे डालें और लगातार चलाते रहें ताकि गुठलियाँ न बनें।", "नमक और जीरा डालकर ढककर धीमी आँच पर 25-30 मिनट पकाएँ, बीच-बीच में चलाते हुए।", "कांजी गाढ़ी और चिकनी होनी चाहिए। ज़्यादा गाढ़ी हो तो थोड़ा और पानी डालें।", "परोसने से ठीक पहले शैलॉट और घी मिलाएँ।", "कटोरियों में गरम परोसें, साथ में अचार रखकर।"],
      },
      ta: {
        ingredients: ["1 கப் கம்பு மாவு அல்லது உடைந்த தானியங்கள்", "5 கப் தண்ணீர்", "1 டீஸ்பூன் உப்பு, சுவைக்கேற்ப", "2 டீஸ்பூன் சின்ன வெங்காயம், நறுக்கியது", "1 டீஸ்பூன் சீரகம், லேசாக நசுக்கியது", "1 டீஸ்பூன் நெய் அல்லது நல்லெண்ணெய்", "எலுமிச்சை அல்லது மாங்காய் ஊறுகாயுடன் பரிமாற"],
        steps: ["கம்பு மாவை 1 கப் குளிர்ந்த தண்ணீரில் கட்டி இல்லாமல் கரைக்கவும்.", "மீதமுள்ள 4 கப் தண்ணீரை கனமான பாத்திரத்தில் கொதிக்க வைக்கவும்.", "கரைத்த மாவை மெதுவாக ஊற்றி கட்டி சேராமல் தொடர்ந்து கிளறவும்.", "உப்பு, சீரகம் சேர்த்து மூடி மெல்லிய தீயில் 25-30 நிமிடம் வேகவிடவும், இடையிடையே கிளறி.", "கஞ்சி கெட்டியாகவும் மென்மையாகவும் இருக்க வேண்டும். மிகவும் கெட்டியானால் சிறிது தண்ணீர் சேர்க்கவும்.", "பரிமாறும் முன் சின்ன வெங்காயம், நெய் சேர்க்கவும்.", "கிண்ணங்களில் சூடாக ஊறுகாயுடன் பரிமாறவும்."],
      },
    },
    "pearl-millet-28": {
      hi: {
        ingredients: ["1 कप कंबु (बाजरा) के दाने, 1 घंटा भिगोए हुए", "2 1/2 कप पानी", "3 बड़े चम्मच तेल, 1 छोटा चम्मच सरसों, 1 छोटा चम्मच उड़द दाल", "2 बड़े चम्मच भुनी मूँगफली", "8 करी पत्ते, 2 हरी मिर्च चीरी हुई", "1/2 छोटा चम्मच हल्दी और हींग की चुटकी", "2 नींबू का रस और स्वादानुसार नमक"],
        steps: ["भीगे कंबु को छानकर 2 1/2 कप पानी के साथ प्रेशर कुकर में 4 सीटी तक पकाएँ, जब तक नरम पर अलग-अलग दाने रहें।", "पके दानों को प्लेट में फैलाकर ठंडा होने दें, ताकि वे चिपकें नहीं।", "तेल गरम करके सरसों चटकाएँ। उड़द दाल और मूँगफली डालकर सुनहरा होने तक तलें।", "करी पत्ते, हरी मिर्च, हींग और हल्दी डालकर 30 सेकंड चलाएँ।", "पके कंबु और नमक डालकर धीमी आँच पर 2 मिनट हल्के हाथ से चलाएँ।", "आँच से उतारकर नींबू का रस मिलाएँ।", "कुरकुरे पापड़ या खीरे के रायते के साथ गरम परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் கம்பு மணிகள், 1 மணி நேரம் ஊறவைத்தது", "2 1/2 கப் தண்ணீர்", "3 டேபிள்ஸ்பூன் எண்ணெய், 1 டீஸ்பூன் கடுகு, 1 டீஸ்பூன் உளுத்தம் பருப்பு", "2 டேபிள்ஸ்பூன் வறுத்த வேர்க்கடலை", "8 கறிவேப்பிலை, 2 பச்சை மிளகாய், கீறியது", "1/2 டீஸ்பூன் மஞ்சள் மற்றும் ஒரு சிட்டிகை பெருங்காயம்", "2 எலுமிச்சை சாறு மற்றும் சுவைக்கேற்ப உப்பு"],
        steps: ["ஊறிய கம்பை வடிகட்டி 2 1/2 கப் தண்ணீருடன் பிரஷர் குக்கரில் 4 விசில் வேகவிடவும், மென்மையாக ஆனால் தனித்தனி மணிகளாக இருக்கும் வரை.", "வெந்த மணிகளை ஒரு தட்டில் பரப்பி ஆறவிடவும், ஒட்டிக்கொள்ளாமல் இருக்க.", "எண்ணெயை சூடாக்கி கடுகு தாளிக்கவும். உளுத்தம் பருப்பு, வேர்க்கடலை சேர்த்து பொன்னிறமாக வறுக்கவும்.", "கறிவேப்பிலை, பச்சை மிளகாய், பெருங்காயம், மஞ்சள் சேர்த்து 30 வினாடி கிளறவும்.", "வெந்த கம்பு, உப்பு சேர்த்து மெல்லிய தீயில் 2 நிமிடம் மெதுவாக கிளறவும்.", "தீயிலிருந்து இறக்கி எலுமிச்சை சாறு கலக்கவும்.", "மொறுமொறுப்பான அப்பளம் அல்லது வெள்ளரி பச்சடியுடன் சூடாக பரிமாறவும்."],
      },
    },
    "pearl-millet-29": {
      hi: {
        ingredients: ["2 कप कंबु (बाजरा) का आटा, रोटी के लिए", "1 कप गुनगुना पानी और 1/2 छोटा चम्मच नमक", "500 ग्राम चिकन, हड्डी वाला, टुकड़ों में कटा", "2 प्याज़, बारीक कटे, 2 टमाटर, कटे", "1 बड़ा चम्मच अदरक-लहसुन पेस्ट", "मसाले के लिए: 1 छोटा चम्मच सौंफ, 1 छोटा चम्मच धनिया दाना, 6 सूखी लाल मिर्च, 1/4 कप कसा नारियल, भूनकर पीसा हुआ", "1 छोटा चम्मच लाल मिर्च पाउडर, 1/2 छोटा चम्मच हल्दी", "3 बड़े चम्मच तेल, करी पत्ते और स्वादानुसार नमक"],
        steps: ["कंबु का आटा, नमक और गुनगुने पानी से नरम आटा गूँधें। 10 मिनट रखकर 8 रोटियाँ बेलें।", "सौंफ, धनिया दाना और सूखी मिर्च भूनकर भुने नारियल के साथ बारीक पेस्ट बनाएँ।", "तेल गरम करके प्याज़ सुनहरा होने तक तलें। अदरक-लहसुन पेस्ट डालकर 2 मिनट पकाएँ।", "टमाटर, हल्दी और मिर्च डालें और टमाटर गलने तक पकाएँ।", "चिकन डालकर 5 मिनट भूनें, फिर पिसा मसाला डालकर 3 मिनट और पकाएँ।", "1 कप पानी और नमक डालकर ढककर 20 मिनट उबालें, जब तक चिकन नरम और ग्रेवी गाढ़ी न हो जाए।", "रोटियों को गरम तवे पर सेंकें और करी पत्ते से सजे चेट्टिनाड चिकन के साथ परोसें।"],
      },
      ta: {
        ingredients: ["2 கப் கம்பு மாவு, ரொட்டிக்கு", "1 கப் வெதுவெதுப்பான தண்ணீர் மற்றும் 1/2 டீஸ்பூன் உப்பு", "500 கிராம் கோழி, எலும்புடன், துண்டுகளாக்கியது", "2 வெங்காயம், பொடியாக நறுக்கியது, 2 தக்காளி, நறுக்கியது", "1 டேபிள்ஸ்பூன் இஞ்சி-பூண்டு விழுது", "மசாலாவுக்கு: 1 டீஸ்பூன் சோம்பு, 1 டீஸ்பூன் மல்லி விதை, 6 காய்ந்த மிளகாய், 1/4 கப் துருவிய தேங்காய், வறுத்து அரைத்தது", "1 டீஸ்பூன் மிளகாய்த் தூள், 1/2 டீஸ்பூன் மஞ்சள்", "3 டேபிள்ஸ்பூன் எண்ணெய், கறிவேப்பிலை, சுவைக்கேற்ப உப்பு"],
        steps: ["கம்பு மாவு, உப்பு, வெதுவெதுப்பான தண்ணீரால் மென்மையான மாவு பிசைந்து 10 நிமிடம் வைத்து 8 ரொட்டிகளாக உருட்டவும்.", "சோம்பு, மல்லி விதை, காய்ந்த மிளகாயை வறுத்து, வறுத்த தேங்காயுடன் நைசாக அரைக்கவும்.", "எண்ணெயை சூடாக்கி வெங்காயத்தை பொன்னிறமாக வதக்கவும். இஞ்சி-பூண்டு விழுது சேர்த்து 2 நிமிடம் வேகவிடவும்.", "தக்காளி, மஞ்சள், மிளகாய்த் தூள் சேர்த்து தக்காளி குழையும் வரை வேகவிடவும்.", "கோழியைச் சேர்த்து 5 நிமிடம் வறுக்கவும், பின் அரைத்த மசாலா சேர்த்து மேலும் 3 நிமிடம் வேகவிடவும்.", "1 கப் தண்ணீரும் உப்பும் சேர்த்து மூடி 20 நிமிடம் கொதிக்கவிடவும், கோழி மென்மையாகி குழம்பு கெட்டியாகும் வரை.", "ரொட்டிகளை சூடான தவாவில் சுட்டு, கறிவேப்பிலை தூவிய செட்டிநாடு கோழியுடன் பரிமாறவும்."],
      },
    },
    "pearl-millet-30": {
      hi: {
        ingredients: ["1 कप बाजरे का आटा", "1/3 कप घी", "1/2 कप गुड़, कसा हुआ", "2 बड़े चम्मच बादाम और 2 बड़े चम्मच काजू, कटे", "2 बड़े चम्मच तिल, हल्के भुने हुए", "1/4 छोटा चम्मच इलायची पाउडर", "1 बड़ा चम्मच खसखस या खाने वाला गोंद (वैकल्पिक)"],
        steps: ["बाजरे के आटे को भारी पैन में धीमी आँच पर 8-10 मिनट भूनें, जब तक उसमें सोंधी खुशबू न आए।", "दूसरे पैन में घी पिघलाकर भुने आटे में मिलाएँ, जब तक मिश्रण भुरभुरा न हो जाए।", "कटे मेवे, तिल, इलायची और खसखस डालकर अच्छी तरह मिलाएँ।", "मिश्रण को 2 मिनट ठंडा होने दें, फिर गुनगुने रहते हुए कसा गुड़ मिलाएँ।", "मिश्रण को कसकर दबाएँ, फिर हथेलियों से छोटे चिकने लड्डू बनाएँ।", "पिन्नियों को कमरे के तापमान पर 10 मिनट सेट होने दें।", "हवा बंद डिब्बे में रखें और एक हफ्ते के भीतर खाएँ।"],
      },
      ta: {
        ingredients: ["1 கப் கம்பு மாவு", "1/3 கப் நெய்", "1/2 கப் வெல்லம், துருவியது", "2 டேபிள்ஸ்பூன் பாதாம், 2 டேபிள்ஸ்பூன் முந்திரி, நறுக்கியது", "2 டேபிள்ஸ்பூன் எள், லேசாக வறுத்தது", "1/4 டீஸ்பூன் ஏலக்காய்த் தூள்", "1 டேபிள்ஸ்பூன் கசகசா அல்லது உண்ணக்கூடிய பசை (விருப்பம்)"],
        steps: ["கம்பு மாவை கனமான பாத்திரத்தில் மிதமான தீயில் 8-10 நிமிடம் மணம் வரும் வரை வறுக்கவும்.", "தனி பாத்திரத்தில் நெய்யை உருக்கி, வறுத்த மாவில் கலந்து உதிரியாகும் வரை கிளறவும்.", "நறுக்கிய பருப்புகள், எள், ஏலக்காய், கசகசா சேர்த்து நன்கு கலக்கவும்.", "கலவையை 2 நிமிடம் ஆறவிட்டு, சூடு இருக்கும்போதே துருவிய வெல்லம் சேர்க்கவும்.", "கலவையை கெட்டியாக அழுத்தி, உள்ளங்கையால் சிறிய மென்மையான உருண்டைகளாக உருட்டவும்.", "உருண்டைகளை அறை வெப்பநிலையில் 10 நிமிடம் இறுக வைக்கவும்.", "காற்றுப்புகாத டப்பாவில் வைத்து ஒரு வாரத்திற்குள் சாப்பிடவும்."],
      },
    },
  } as Record<string, { hi: LineContent; ta: LineContent }>,

  translations: {
    "pearl-millet-26": { hi: { title: "बाजरा थालीपीठ", description: "बाजरा और बेसन का प्याज़, धनिया और तिल वाला मसालेदार महाराष्ट्रीयन बहु-अनाज फ्लैटब्रेड, गरम तवे पर सेंका हुआ।" }, ta: { title: "கம்பு தாலிபீட்", description: "வெங்காயம், கொத்தமல்லி, எள் சேர்த்த கம்பு-கடலை மாவு மசாலா மகாராஷ்டிர பல தானிய ரொட்டி, சூடான தவாவில் சுட்டது." } },
    "pearl-millet-27": { hi: { title: "कंबु कांजी अचार के साथ", description: "नमक और पानी में पकाई गई गरम, आरामदायक बाजरे की कांजी, मसालेदार अचार के साथ, तमिल नाडु की पारंपरिक सुबह।" }, ta: { title: "கம்பு கஞ்சி ஊறுகாயுடன்", description: "உப்பு, தண்ணீரில் வேகவைத்த சூடான, இதமான கம்பு கஞ்சி, காரமான ஊறுகாயுடன். தமிழ்நாட்டின் பாரம்பரிய காலை உணவு." } },
    "pearl-millet-28": { hi: { title: "कंबु नींबू चावल", description: "नींबू, मूँगफली और करी पत्ते में मिले बाजरे के दाने, तमिलनाडु का हल्का और खट्टा दोपहर का भोजन।" }, ta: { title: "கம்பு எலுமிச்சை சாதம்", description: "எலுமிச்சை, வேர்க்கடலை, கறிவேப்பிலை சேர்த்து கிளறிய கம்பு மணிகள். தமிழ்நாட்டின் இலகுவான, புளிப்பான மதிய உணவு." } },
    "pearl-millet-29": { hi: { title: "कंबु रोटी चिकन चेट्टिनाड", description: "भुने मसालों, नारियल और करी पत्ते वाले तीखे चेट्टिनाड चिकन के साथ नरम बाजरे की रोटियाँ।" }, ta: { title: "கம்பு ரொட்டி செட்டிநாடு கோழி", description: "வறுத்த மசாலா, தேங்காய், கறிவேப்பிலை சேர்த்த காரமான செட்டிநாடு கோழிக் குழம்புடன் மென்மையான கம்பு ரொட்டிகள்." } },
    "pearl-millet-30": { hi: { title: "बाजरा गुड़ पिन्नी", description: "घी, गुड़ और मेवों से बनी समृद्ध, भुरभुरी बाजरे की मिठाई, राजस्थान और पंजाब की सर्दियों की ऊर्जा देने वाली मिठाई।" }, ta: { title: "கம்பு வெல்ல பின்னி", description: "நெய், வெல்லம், பருப்புகளால் செய்த செழுமையான, உதிரியான கம்பு இனிப்பு. ராஜஸ்தான், பஞ்சாபின் குளிர்கால ஆற்றல் தரும் இனிப்பு." } },
  } as Record<string, { hi: { title: string; description: string }; ta: { title: string; description: string } }>,

  plate: {
    "pearl-millet-26": { kcal: 260, carbsG: 38, fibreG: 7, gi: 55, minerals: ["Iron", "Magnesium", "Calcium", "Zinc"], raw: { kind: "raw", name: "Cucumber and onion salad", how: "Slice thinly with lemon, chilli flakes and salt." }, sides: [{ kind: "cooked", name: "Methi aloo", how: "Sauté potato with fenugreek leaves, turmeric and mustard seeds." }, { kind: "cooked", name: "Coriander chutney", how: "Blend coriander, green chilli, lemon and salt." }] },
    "pearl-millet-27": { kcal: 210, carbsG: 36, fibreG: 5, gi: 62, minerals: ["Magnesium", "Iron", "Phosphorus"], raw: { kind: "raw", name: "Tomato and cucumber slices", how: "Slice and season with lemon, black pepper and salt." }, sides: [{ kind: "cooked", name: "Beans poriyal", how: "Stir-fry beans with mustard seeds, curry leaves and coconut." }, { kind: "cooked", name: "Carrot and peas stir-fry", how: "Sauté with cumin, turmeric and curry leaves." }] },
    "pearl-millet-28": { kcal: 340, carbsG: 54, fibreG: 7, gi: 55, minerals: ["Magnesium", "Iron", "Phosphorus", "Zinc"], raw: { kind: "raw", name: "Onion and cucumber salad", how: "Dice and dress with lemon, black pepper and coriander." }, sides: [{ kind: "cooked", name: "Cabbage thoran", how: "Sauté cabbage with mustard, curry leaves and coconut." }, { kind: "cooked", name: "Tomato rasam", how: "Boil tomato with tamarind, pepper and cumin." }] },
    "pearl-millet-29": { kcal: 470, carbsG: 42, fibreG: 7, gi: 50, minerals: ["Zinc", "Iron", "Phosphorus", "Magnesium"], raw: { kind: "raw", name: "Cucumber and tomato salad", how: "Dice both, season with lemon and black pepper." }, sides: [{ kind: "cooked", name: "Carrot and beans poriyal", how: "Stir-fry with mustard seeds, curry leaves and coconut." }, { kind: "cooked", name: "Dal palak", how: "Cook toor dal with spinach, garlic and a cumin tempering." }] },
    "pearl-millet-30": { kcal: 310, carbsG: 40, fibreG: 5, gi: 65, minerals: ["Iron", "Calcium", "Magnesium", "Zinc"], raw: { kind: "raw", name: "Apple and cucumber slices", how: "Slice thinly with a sprinkle of black salt." }, sides: [{ kind: "cooked", name: "Spinach raita", how: "Blanch spinach, mix with curd, cumin and salt." }, { kind: "cooked", name: "Carrot and peas sabzi", how: "Cook with cardamom and a little ghee." }] },
  } as Record<string, PlateInfo>,
};
