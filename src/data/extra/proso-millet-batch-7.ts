import type { Recipe } from "@/types/recipe";
import type { LineContent } from "@/data/i18n-content/sorghum";
import type { PlateInfo } from "@/types/plate";

/** proso-millet recipes proso-millet-46 to proso-millet-50 with full English, Hindi and Tamil content and plate data. */
export const PROSO_MILLET_BATCH_7: {
  recipes: Recipe[];
  content: Record<string, { hi: LineContent; ta: LineContent }>;
  translations: Record<string, { hi: { title: string; description: string }; ta: { title: string; description: string } }>;
  plate: Record<string, PlateInfo>;
} = {
  recipes: [
    {
      id: "proso-millet-46",
      title: "Panivaragu Bhakri",
      milletId: "proso-millet",
      region: "West Indian",
      diet: "Vegetarian",
      course: "Main Course",
      description: "Thick, hand-pressed millet flatbreads cooked on a hot tawa and finished over a flame, the everyday bread of Maharashtra, served with pithla or vegetables.",
      servings: 4,
      prepTimeMinutes: 15,
      cookTimeMinutes: 15,
      difficulty: "Easy",
      ingredients: [
        "2 cups proso millet flour (panivaragu atta)",
        "1 1/4 cups hot water, plus extra if needed",
        "1/2 tsp salt",
        "1 tbsp ghee, for brushing",
        "1 tsp oil, for greasing the sheet",
        "1 banana leaf or plastic sheet, for pressing",
      ],
      steps: [
        "Mix the flour and salt in a wide bowl and add the hot water a little at a time, stirring with a spoon.",
        "Once cool enough to handle, knead the dough for 3 minutes until soft and smooth, adding water if it is dry.",
        "Divide the dough into 8 equal balls and cover them with a damp cloth.",
        "Pat one ball into a round disc on a greased plastic sheet or banana leaf, about 1/4 inch thick, using wet fingers.",
        "Transfer the disc to a hot tawa and cook for 1 minute until small brown spots appear on the underside.",
        "Flip it, cook for 1 minute more, then press the edges gently with a cloth.",
        "Place the bhakri directly over a low flame for a few seconds to puff, brushing with ghee as you go.",
        "Serve hot with ghee, spicy pithla or a green chutney.",
      ],
    },
    {
      id: "proso-millet-47",
      title: "Panivaragu Fish Curry",
      milletId: "proso-millet",
      region: "South Indian",
      diet: "Non-Vegetarian",
      course: "Main Course",
      description: "A tangy Kerala-style fish curry of coconut and tamarind with green chilli and curry leaves, served with a bowl of warm proso millet.",
      servings: 4,
      prepTimeMinutes: 20,
      cookTimeMinutes: 25,
      difficulty: "Medium",
      ingredients: [
        "500 g fish (seer or pomfret), cut into thick steaks",
        "2 cups cooked proso millet (panivaragu), to serve",
        "1 cup grated fresh coconut",
        "2 tbsp coconut oil",
        "1 tsp mustard seeds, 8 curry leaves",
        "1 onion, sliced, 2 green chillies, slit lengthwise",
        "1 tbsp ginger-garlic paste",
        "1 tsp turmeric powder, 1 tbsp red chilli powder, 1 tsp coriander powder",
        "1 tbsp tamarind paste, dissolved in 1/2 cup water",
        "1 tsp salt",
      ],
      steps: [
        "Grind the grated coconut with 1/2 cup water to a smooth paste and set it aside.",
        "Rub the fish with half the turmeric and a pinch of the salt, and set aside for 10 minutes.",
        "Heat the coconut oil in a clay pot or heavy pan and splutter the mustard seeds with the curry leaves.",
        "Add the sliced onion and green chillies and fry until golden, then stir in the ginger-garlic paste.",
        "Add the remaining turmeric, chilli and coriander powders with 2 tbsp water and cook for 1 minute.",
        "Pour in the tamarind water, bring to a simmer, then stir in the coconut paste and the remaining salt.",
        "Slide in the fish, cover and simmer gently for 8-10 minutes until cooked through.",
        "Serve hot with steamed proso millet.",
      ],
    },
    {
      id: "proso-millet-48",
      title: "Panivaragu Kozhukattai",
      milletId: "proso-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Snack",
      description: "Steamed millet dumplings with a coconut and chana dal filling, a light Tamil festival snack that is easy to digest.",
      servings: 4,
      prepTimeMinutes: 30,
      cookTimeMinutes: 15,
      difficulty: "Medium",
      ingredients: [
        "1 cup proso millet flour (panivaragu atta)",
        "1 cup boiling water",
        "1 tsp ghee, for the dough and greasing the plates",
        "1/2 tsp salt",
        "1/2 cup fresh grated coconut",
        "2 tbsp chana dal, soaked for 30 minutes and boiled until just soft",
        "1 tsp sesame oil, for tempering",
        "1 tsp mustard seeds, 1 tsp urad dal, 2 dried red chillies, 8 curry leaves",
        "1 green chilli, finely chopped",
      ],
      steps: [
        "Bring the water, ghee and salt to a rolling boil, then pour it over the millet flour off the heat and stir.",
        "Cover the pan for 5 minutes, then knead the flour into a smooth, pliable dough while it is still warm.",
        "Heat the sesame oil in a small pan and splutter the mustard seeds, urad dal, dried chillies and curry leaves.",
        "Add the drained chana dal, green chilli and coconut and sauté for 2 minutes to make the filling.",
        "Take a small piece of dough, flatten it in your palm, add a spoonful of filling, and fold it into a pleated dumpling.",
        "Place the dumplings on greased idli plates or a steamer tray.",
        "Steam over boiling water for 12-15 minutes until firm and cooked through.",
        "Serve warm with a few drops of ghee or coconut chutney.",
      ],
    },
    {
      id: "proso-millet-49",
      title: "Panivaragu Mushroom Pulao",
      milletId: "proso-millet",
      region: "North Indian",
      diet: "Vegetarian",
      course: "Main Course",
      description: "A fragrant proso millet pulao cooked with button mushrooms, green peas and whole spices, a light one-pot dish from North Indian homes.",
      servings: 4,
      prepTimeMinutes: 15,
      cookTimeMinutes: 30,
      difficulty: "Medium",
      ingredients: [
        "1 cup proso millet (panivaragu), soaked for 20 minutes and drained",
        "2 tbsp ghee, plus 1 tbsp oil",
        "1 bay leaf, 3 cloves, 2 cardamom pods, 1 small cinnamon stick",
        "1 small onion, sliced",
        "1 tsp ginger-garlic paste",
        "150 g button mushrooms, sliced",
        "1/2 cup green peas, fresh or frozen",
        "1/2 tsp turmeric powder, 1/2 tsp garam masala",
        "1 tsp salt",
        "2 cups water",
        "2 tbsp fresh coriander leaves, chopped",
      ],
      steps: [
        "Drain the soaked millet and set it aside.",
        "Heat the ghee and oil in a heavy pot and add the bay leaf, cloves, cardamom and cinnamon.",
        "Add the sliced onion and fry until golden brown, about 6 minutes.",
        "Stir in the ginger-garlic paste and cook until the raw smell disappears.",
        "Add the mushrooms and peas and cook until the mushrooms release their water and begin to brown.",
        "Add the turmeric, garam masala and drained millet, and stir-fry for 2 minutes.",
        "Pour in the water and salt, bring to a boil, then cover and cook on low heat for 15-18 minutes until the water is absorbed.",
        "Rest the pulao covered for 5 minutes, fluff with a fork and garnish with coriander.",
      ],
    },
    {
      id: "proso-millet-50",
      title: "Panivaragu Idiyappam",
      milletId: "proso-millet",
      region: "South Indian",
      diet: "Vegetarian",
      course: "Breakfast",
      description: "Delicate steamed string hoppers made from roasted proso millet flour, served with sweetened coconut milk for a light South Indian breakfast.",
      servings: 4,
      prepTimeMinutes: 20,
      cookTimeMinutes: 20,
      difficulty: "Medium",
      ingredients: [
        "1 cup proso millet flour (panivaragu atta), dry roasted",
        "3/4 cup boiling water",
        "1/2 tsp salt",
        "1 tsp sesame oil, for greasing the press",
        "1/2 cup fresh grated coconut",
        "1/2 cup thin coconut milk",
        "1 tbsp sugar or jaggery, to serve",
        "a pinch of cardamom powder",
      ],
      steps: [
        "Dry roast the millet flour in a pan over low heat for 3 minutes until it gives off a nutty aroma.",
        "Bring the water and salt to a rolling boil, then pour it over the flour and stir with a spatula.",
        "Cover for 5 minutes, then knead into a smooth dough while it is still warm.",
        "Grease an idiyappam press with the sesame oil and fill it with the dough.",
        "Press the dough in circles onto a greased idli plate or steamer tray.",
        "Steam over boiling water for 8-10 minutes until the strands are firm and cooked through.",
        "Loosen the idiyappams gently with a fork and serve warm with coconut milk, sugar, cardamom and grated coconut.",
      ],
    },
  ],
  content: {
    "proso-millet-46": {
      hi: {
        ingredients: ["2 कप पनिवरागु (प्रोसो मिलेट) का आटा", "1 1/4 कप गरम पानी, ज़रूरत हो तो और", "1/2 छोटा चम्मच नमक", "1 बड़ा चम्मच घी, चुपड़ने के लिए", "1 छोटा चम्मच तेल, शीट को चिकना करने के लिए", "1 केले का पत्ता या प्लास्टिक शीट, थपथपाने के लिए"],
        steps: ["एक चौड़े बर्तन में आटा और नमक मिलाएँ और गरम पानी थोड़ा-थोड़ा डालते हुए चम्मच से चलाएँ।", "जब सह्य हो जाए तो 3 मिनट गूँधें जब तक नरम और चिकना न हो, ज़रूरत हो तो पानी डालें।", "आटे को 8 बराबर गोलों में बाँटें और गीले कपड़े से ढक दें।", "एक गोला लेकर चिकनी प्लास्टिक शीट या केले के पत्ते पर गीली उँगलियों से लगभग 1/4 इंच मोटी गोल टिकिया बनाएँ।", "टिकिया को गरम तवे पर डालें और 1 मिनट सेंकें जब तक नीचे की तरफ हल्के भूरे धब्बे न आ जाएँ।", "पलटें, 1 मिनट और सेंकें, फिर कपड़े से किनारों को हल्के से दबाएँ।", "भाखरी को धीमी आँच पर कुछ सेकंड सीधा रखें ताकि फूले, और घी लगाते रहें।", "गरम परोसें, ऊपर से घी, मसालेदार पिठला या हरी चटनी के साथ।"],
      },
      ta: {
        ingredients: ["2 கப் பனிவரகு மாவு", "1 1/4 கப் சூடான தண்ணீர், தேவைப்பட்டால் கூடுதல்", "1/2 டீஸ்பூன் உப்பு", "1 டேபிள்ஸ்பூன் நெய், தடவ", "1 டீஸ்பூன் எண்ணெய், தட்டைத் தடவ", "1 வாழையிலை அல்லது பிளாஸ்டிக் தாள், தட்ட"],
        steps: ["அகலமான பாத்திரத்தில் மாவு, உப்பை கலந்து சூடான தண்ணீரை சிறிது சிறிதாக சேர்த்து கரண்டியால் கிளறவும்.", "சூடு ஆறியதும் 3 நிமிடம் மென்மையாகவும் வழுவழுப்பாகவும் வரும் வரை பிசையவும்; உலர்ந்திருந்தால் தண்ணீர் சேர்க்கவும்.", "மாவை 8 சம உருண்டைகளாக்கி, ஈரத் துணியால் மூடவும்.", "எண்ணெய் தடவிய பிளாஸ்டிக் தாள் அல்லது வாழையிலையில் ஈரக் விரல்களால் ஒரு உருண்டையை சுமார் 1/4 அங்குல தடிமன் வட்டமாக தட்டவும்.", "தட்டையை சூடான தவாவுக்கு மாற்றி 1 நிமிடம் அடியில் சிறு பழுப்பு புள்ளிகள் வரும் வரை வேகவிடவும்.", "திருப்பி மேலும் 1 நிமிடம் வேகவிட்டு, துணியால் ஓரங்களை மெல்லியதாக அழுத்தவும்.", "பாக்ரியை சிறிது நேரம் மெல்லிய தீயில் நேரடியாக வைத்து உப்ப விடவும், நெய் தடவிக்கொண்டே.", "சூடாக நெய், காரமான பிட்லா அல்லது பச்சை சட்னியுடன் பரிமாறவும்."],
      },
    },
    "proso-millet-47": {
      hi: {
        ingredients: ["500 ग्राम मछली (सीर या पॉम्फ्रेट), मोटे टुकड़ों में कटी", "2 कप पका पनिवरागु (प्रोसो मिलेट), परोसने के लिए", "1 कप कसा हुआ ताज़ा नारियल", "2 बड़े चम्मच नारियल तेल", "1 छोटा चम्मच सरसों, 8 करी पत्ते", "1 प्याज़, स्लाइस की हुई, 2 हरी मिर्च, लंबाई में चीरी हुई", "1 बड़ा चम्मच अदरक-लहसुन पेस्ट", "1 छोटा चम्मच हल्दी, 1 बड़ा चम्मच लाल मिर्च पाउडर, 1 छोटा चम्मच धनिया पाउडर", "1 बड़ा चम्मच इमली का पेस्ट, 1/2 कप पानी में घोला हुआ", "1 छोटा चम्मच नमक"],
        steps: ["नारियल को 1/2 कप पानी के साथ चिकना पेस्ट बनने तक पीसकर अलग रखें।", "मछली पर आधी हल्दी और एक चुटकी नमक लगाकर 10 मिनट अलग रखें।", "मिट्टी के बर्तन या भारी कढ़ाई में नारियल तेल गरम करें और करी पत्ते के साथ सरसों चटकाएँ।", "प्याज़ और हरी मिर्च सुनहरी होने तक तलें, फिर अदरक-लहसुन पेस्ट डालें।", "बची हल्दी, मिर्च और धनिया पाउडर 2 बड़े चम्मच पानी के साथ डालकर 1 मिनट पकाएँ।", "इमली का पानी डालकर उबाल लें, फिर नारियल का पेस्ट और बचा नमक मिलाएँ।", "मछली डालें, ढककर 8-10 मिनट धीमी आँच पर पकाएँ जब तक मछली पक न जाए।", "भाप में पके पनिवरागु के साथ गरम परोसें।"],
      },
      ta: {
        ingredients: ["500 கிராம் மீன் (வஞ்சிரம் அல்லது பாம்ப்ஃப்ரெட்), தடிமனான துண்டுகளாக வெட்டியது", "2 கப் வேகவைத்த பனிவரகு, பரிமாற", "1 கப் துருவிய புதிய தேங்காய்", "2 டேபிள்ஸ்பூன் தேங்காய் எண்ணெய்", "1 டீஸ்பூன் கடுகு, 8 கறிவேப்பிலை", "1 வெங்காயம் மெல்லியதாக நறுக்கியது, 2 பச்சை மிளகாய் நீளவாக்கில் கீறியது", "1 டேபிள்ஸ்பூன் இஞ்சி-பூண்டு விழுது", "1 டீஸ்பூன் மஞ்சள் தூள், 1 டேபிள்ஸ்பூன் மிளகாய்த் தூள், 1 டீஸ்பூன் மல்லித் தூள்", "1 டேபிள்ஸ்பூன் புளி விழுது, 1/2 கப் தண்ணீரில் கரைத்தது", "1 டீஸ்பூன் உப்பு"],
        steps: ["தேங்காயை 1/2 கப் தண்ணீருடன் மென்மையாக அரைத்து தனியாக வைக்கவும்.", "மீனில் பாதி மஞ்சள், ஒரு சிட்டிகை உப்பு தடவி 10 நிமிடம் வைக்கவும்.", "மண் சட்டி அல்லது கனமான பாத்திரத்தில் தேங்காய் எண்ணெயை சூடாக்கி கடுகு, கறிவேப்பிலை தாளிக்கவும்.", "வெங்காயம், பச்சை மிளகாய் பொன்னிறமாக வதக்கி, பின்னர் இஞ்சி-பூண்டு விழுது சேர்க்கவும்.", "மீதி மஞ்சள், மிளகாய், மல்லித் தூள்களை 2 டேபிள்ஸ்பூன் தண்ணீருடன் சேர்த்து 1 நிமிடம் வேகவிடவும்.", "புளித் தண்ணீரை ஊற்றி கொதிக்க விட்டு, தேங்காய் விழுது, மீதி உப்பு சேர்க்கவும்.", "மீனை சேர்த்து மூடி 8-10 நிமிடம் மெல்லிய தீயில் மீன் வேகும் வரை வைக்கவும்.", "ஆவியில் வெந்த பனிவரகுடன் சூடாக பரிமாறவும்."],
      },
    },
    "proso-millet-48": {
      hi: {
        ingredients: ["1 कप पनिवरागु (प्रोसो मिलेट) का आटा", "1 कप उबलता पानी", "1 छोटा चम्मच घी, आटे और थाली चिकनी करने के लिए", "1/2 छोटा चम्मच नमक", "1/2 कप ताज़ा कसा हुआ नारियल", "2 बड़े चम्मच चना दाल, 30 मिनट भिगोकर हल्की नरम उबली हुई", "1 छोटा चम्मच तिल का तेल, तड़के के लिए", "1 छोटा चम्मच सरसों, 1 छोटा चम्मच उड़द दाल, 2 सूखी लाल मिर्च, 8 करी पत्ते", "1 हरी मिर्च, बारीक कटी"],
        steps: ["पानी, घी और नमक को उबाल लें, फिर गैस बंद करके उसमें मिलेट का आटा डालकर चलाएँ।", "बर्तन ढककर 5 मिनट रखें, फिर गरम रहते हुए आटे को चिकना, लचीला गूँधें।", "छोटी कढ़ाई में तिल का तेल गरम करके सरसों, उड़द दाल, सूखी मिर्च और करी पत्ते चटकाएँ।", "निथरी चना दाल, हरी मिर्च और नारियल डालकर 2 मिनट भूनें ताकि भरावन बने।", "आटे का छोटा टुकड़ा हथेली पर चपटा करें, एक चम्मच भरावन रखें और मोड़कर प्लीट वाला मोदक जैसा बनाएँ।", "कोज़ुकट्टई को चिकनी इडली थाली या स्टीमर ट्रे पर रखें।", "उबलते पानी की भाप पर 12-15 मिनट पकाएँ जब तक सख़्त और अच्छी तरह पक न जाएँ।", "गरम परोसें, ऊपर से कुछ बूँदें घी या नारियल चटनी के साथ।"],
      },
      ta: {
        ingredients: ["1 கப் பனிவரகு மாவு", "1 கப் கொதிக்கும் தண்ணீர்", "1 டீஸ்பூன் நெய், மாவுக்கும் தட்டுக்கு தடவவும்", "1/2 டீஸ்பூன் உப்பு", "1/2 கப் துருவிய தேங்காய்", "2 டேபிள்ஸ்பூன் கடலைப் பருப்பு, 30 நிமிடம் ஊறவைத்து லேசாக வேகவைத்தது", "1 டீஸ்பூன் நல்லெண்ணெய், தாளிக்க", "1 டீஸ்பூன் கடுகு, 1 டீஸ்பூன் உளுத்தம் பருப்பு, 2 காய்ந்த சிவப்பு மிளகாய், 8 கறிவேப்பிலை", "1 பச்சை மிளகாய், பொடியாக நறுக்கியது"],
        steps: ["தண்ணீர், நெய், உப்பை கொதிக்க விட்டு, அடுப்பை அணைத்து அதில் பனிவரகு மாவை கொட்டி கிளறவும்.", "பாத்திரத்தை மூடி 5 நிமிடம் வைத்து, சூடாக இருக்கும் போதே மென்மையான, நெகிழ்வான மாவாக பிசையவும்.", "சிறிய வாணலியில் நல்லெண்ணெயை சூடாக்கி கடுகு, உளுத்தம் பருப்பு, மிளகாய், கறிவேப்பிலை தாளிக்கவும்.", "வடிகட்டிய கடலைப் பருப்பு, பச்சை மிளகாய், தேங்காய் சேர்த்து 2 நிமிடம் வதக்கி பூரணம் தயாரிக்கவும்.", "மாவின் சிறு துண்டை உள்ளங்கையில் தட்டி, ஒரு கரண்டி பூரணம் வைத்து மடித்து பிளீட் வைத்த உருண்டையாக்கவும்.", "கொழுக்கட்டைகளை எண்ணெய் தடவிய இட்லி தட்டு அல்லது ஆவிக் கூடையில் வைக்கவும்.", "கொதிக்கும் தண்ணீரின் ஆவியில் 12-15 நிமிடம் கெட்டியாகவும் நன்கு வேகும் வரை அவிக்கவும்.", "சூடாக, சில துளி நெய் அல்லது தேங்காய் சட்னியுடன் பரிமாறவும்."],
      },
    },
    "proso-millet-49": {
      hi: {
        ingredients: ["1 कप पनिवरागु (प्रोसो मिलेट), 20 मिनट भिगोया और निथारा हुआ", "2 बड़े चम्मच घी, और 1 बड़ा चम्मच तेल", "1 तेजपत्ता, 3 लौंग, 2 इलायची, दालचीनी की 1 छोटी डंडी", "1 छोटी प्याज़, स्लाइस की हुई", "1 छोटा चम्मच अदरक-लहसुन पेस्ट", "150 ग्राम बटन मशरूम, स्लाइस किए हुए", "1/2 कप हरे मटर, ताज़े या जमे हुए", "1/2 छोटा चम्मच हल्दी, 1/2 छोटा चम्मच गरम मसाला", "1 छोटा चम्मच नमक", "2 कप पानी", "2 बड़े चम्मच हरा धनिया, कटा"],
        steps: ["भीगे मिलेट को निथारकर एक तरफ रखें।", "भारी बर्तन में घी और तेल गरम करें और तेजपत्ता, लौंग, इलायची, दालचीनी डालें।", "प्याज़ डालकर 6 मिनट सुनहरा होने तक भूनें।", "अदरक-लहसुन पेस्ट डालकर कच्ची गंध जाने तक पकाएँ।", "मशरूम और मटर डालकर तब तक पकाएँ जब तक मशरूम पानी छोड़ें और हल्के भूरे हों।", "हल्दी, गरम मसाला और निथरा मिलेट डालकर 2 मिनट भूनें।", "पानी और नमक डालकर उबाल लें, फिर ढककर धीमी आँच पर 15-18 मिनट पकाएँ जब तक पानी सोख न ले।", "5 मिनट ढककर रखें, फिर काँटे से फुलाएँ और धनिया से सजाएँ।"],
      },
      ta: {
        ingredients: ["1 கப் பனிவரகு, 20 நிமிடம் ஊறவைத்து வடிகட்டியது", "2 டேபிள்ஸ்பூன் நெய், மற்றும் 1 டேபிள்ஸ்பூன் எண்ணெய்", "1 பிரிஞ்சி இலை, 3 கிராம்பு, 2 ஏலக்காய், 1 சிறிய பட்டை குச்சி", "1 சிறிய வெங்காயம், மெல்லியதாக நறுக்கியது", "1 டீஸ்பூன் இஞ்சி-பூண்டு விழுது", "150 கிராம் பட்டன் காளான், துண்டுகளாக நறுக்கியது", "1/2 கப் பச்சை பட்டாணி, புதியது அல்லது உறைந்தது", "1/2 டீஸ்பூன் மஞ்சள் தூள், 1/2 டீஸ்பூன் கரம் மசாலா", "1 டீஸ்பூன் உப்பு", "2 கப் தண்ணீர்", "2 டேபிள்ஸ்பூன் கொத்தமல்லி இலை, நறுக்கியது"],
        steps: ["ஊறிய தானியத்தை வடிகட்டி ஒதுக்கி வைக்கவும்.", "கனமான பாத்திரத்தில் நெய், எண்ணெயை சூடாக்கி பிரிஞ்சி இலை, கிராம்பு, ஏலக்காய், பட்டை சேர்க்கவும்.", "வெங்காயத்தை 6 நிமிடம் பொன்னிறமாக வதக்கவும்.", "இஞ்சி-பூண்டு விழுது சேர்த்து பச்சை வாசனை போகும் வரை வதக்கவும்.", "காளான், பட்டாணி சேர்த்து காளான் தண்ணீர் விட்டு லேசாக பழுப்பாகும் வரை வதக்கவும்.", "மஞ்சள், கரம் மசாலா, வடிகட்டிய தானியம் சேர்த்து 2 நிமிடம் வறுக்கவும்.", "தண்ணீர், உப்பு சேர்த்து கொதிக்க விட்டு, மூடி மெல்லிய தீயில் 15-18 நிமிடம் தண்ணீர் உறிஞ்சும் வரை வேகவிடவும்.", "5 நிமிடம் மூடி வைத்து, முள் கரண்டியால் உதிர்த்து கொத்தமல்லியால் அலங்கரிக்கவும்."],
      },
    },
    "proso-millet-50": {
      hi: {
        ingredients: ["1 कप पनिवरागु (प्रोसो मिलेट) का आटा, सूखा भुना हुआ", "3/4 कप उबलता पानी", "1/2 छोटा चम्मच नमक", "1 छोटा चम्मच तिल का तेल, साँचे को चिकना करने के लिए", "1/2 कप ताज़ा कसा हुआ नारियल", "1/2 कप पतला नारियल का दूध", "1 बड़ा चम्मच चीनी या गुड़, परोसने के लिए", "एक चुटकी इलायची पाउडर"],
        steps: ["आटे को सूखे पैन में धीमी आँच पर 3 मिनट भूनें जब तक उसमें हल्की खुशबू न आ जाए।", "पानी और नमक को तेज़ उबाल पर लाएँ, फिर भुने आटे पर डालकर स्पैचुला से चलाएँ।", "5 मिनट ढककर रखें, फिर गरम रहते हुए चिकना आटा गूँधें।", "इडियापम प्रेस को तिल के तेल से चिकना करें और उसमें आटा भरें।", "आटे को चिकनी इडली थाली या स्टीमर ट्रे पर गोल आकार में दबाकर निचोड़ें।", "उबलते पानी की भाप पर 8-10 मिनट पकाएँ जब तक धागे सख़्त और अच्छी तरह पक न जाएँ।", "इडियापम को काँटे से धीरे से अलग करें और नारियल का दूध, चीनी, इलायची और कसे नारियल के साथ गरम परोसें।"],
      },
      ta: {
        ingredients: ["1 கப் பனிவரகு மாவு, உலர்வாக வறுத்தது", "3/4 கப் கொதிக்கும் தண்ணீர்", "1/2 டீஸ்பூன் உப்பு", "1 டீஸ்பூன் நல்லெண்ணெய், அச்சுக்கு தடவ", "1/2 கப் துருவிய தேங்காய்", "1/2 கப் மெல்லிய தேங்காய்ப் பால்", "1 டேபிள்ஸ்பூன் சர்க்கரை அல்லது வெல்லம், பரிமாற", "ஒரு சிட்டிகை ஏலக்காய் தூள்"],
        steps: ["மாவை உலர்ந்த பேனில் மெல்லிய தீயில் 3 நிமிடம் வறுத்து நறுமணம் வந்ததும் எடுக்கவும்.", "தண்ணீர், உப்பை கொதிக்க வைத்து, வறுத்த மாவின் மீது ஊற்றி கரண்டியால் கிளறவும்.", "5 நிமிடம் மூடி வைத்து, சூடாக இருக்கும் போதே வழுவழுப்பான மாவாக பிசையவும்.", "இடியாப்ப அச்சுக்கு நல்லெண்ணெய் தடவி மாவை நிரப்பவும்.", "மாவை எண்ணெய் தடவிய இட்லி தட்டு அல்லது ஆவிக் தட்டில் வட்டமாக பிழியவும்.", "கொதிக்கும் தண்ணீரின் ஆவியில் 8-10 நிமிடம் இழைகள் கெட்டியாகி நன்கு வேகும் வரை அவிக்கவும்.", "முள் கரண்டியால் மெதுவாக பிரித்து, தேங்காய்ப் பால், சர்க்கரை, ஏலக்காய், துருவிய தேங்காயுடன் சூடாக பரிமாறவும்."],
      },
    },
  },
  translations: {
    "proso-millet-46": {
      hi: { title: "पनिवरागु भाखरी", description: "महाराष्ट्र की रोज़ाना की मोटी, हाथ से थपथपाई हुई रोटी, गरम तवे पर सेंककर आँच पर फुलाई गई, पिठला या सब्ज़ी के साथ।" },
      ta: { title: "பனிவரகு பாக்ரி", description: "மகாராஷ்டிர பாரம்பரிய கையால் தட்டிய தடிமனான பனிவரகு ரொட்டி, தவாவில் சுட்டு தீயில் உப்ப வைத்தது." },
    },
    "proso-millet-47": {
      hi: { title: "पनिवरागु मछली करी", description: "नारियल और इमली की हल्की तीखी ग्रेवी में पकी केरल शैली की मछली, गरम पनिवरागु के साथ परोसी जाने वाली।" },
      ta: { title: "பனிவரகு மீன் குழம்பு", description: "தேங்காய், புளி கலந்த லேசான காரமான குழம்பில் வெந்த மீன், சூடான பனிவரகு சாதத்துடன் பரிமாறப்படும் கடலோர உணவு." },
    },
    "proso-millet-48": {
      hi: { title: "पनिवरागु कोज़ुकट्टई", description: "नारियल और चना दाल के भरावन वाले भाप में पके मिलेट के मोदक, तमिल त्योहारों का हल्का और आसानी से पचने वाला नाश्ता।" },
      ta: { title: "பனிவரகு கொழுக்கட்டை", description: "தேங்காய், கடலைப் பருப்பு பூரணம் வைத்து ஆவியில் வேகவைத்த பனிவரகு கொழுக்கட்டை, பண்டிகை நாட்களின் இலகுவான சிற்றுண்டி." },
    },
    "proso-millet-49": {
      hi: { title: "पनिवरागु मशरूम पुलाव", description: "बटन मशरूम, हरे मटर और साबुत मसालों से महकता हल्का एक-बर्तन वाला पनिवरागु पुलाव, उत्तर भारतीय घरों का सादा भोजन।" },
      ta: { title: "பனிவரகு காளான் புலாவ்", description: "பட்டன் காளான், பச்சை பட்டாணி, முழு மசாலாவுடன் மணக்கும் இலகுவான ஒரு பாத்திர பனிவரகு புலாவ், வட இந்திய வீடுகளின் எளிய உணவு." },
    },
    "proso-millet-50": {
      hi: { title: "पनिवरागु इडियापम", description: "भुने पनिवरागु आटे से बने भाप में पके बारीक धागे, नारियल के दूध और चीनी के साथ परोसे जाने वाले दक्षिण भारतीय नाश्ते।" },
      ta: { title: "பனிவரகு இடியாப்பம்", description: "வறுத்த பனிவரகு மாவில் செய்த ஆவியில் வெந்த இடியாப்பம், தேங்காய்ப் பால், சர்க்கரையுடன் பரிமாறப்படும் இலகுவான காலை உணவு." },
    },
  },
  plate: {
    "proso-millet-46": {
      kcal: 220, carbsG: 40, fibreG: 5, gi: 58,
      minerals: ["iron", "magnesium", "zinc"],
      raw: { kind: "raw", name: "Sliced onion and tomato", how: "Slice one onion and one tomato into rounds and squeeze lemon juice over them." },
      sides: [
        { kind: "cooked", name: "Besan pithla", how: "Cook gram flour with onion, green chilli and turmeric in a little oil until thick and crumbly." },
        { kind: "cooked", name: "Bhindi sabzi", how: "Stir-fry sliced okra with onion, cumin and turmeric until tender and lightly browned." },
      ],
    },
    "proso-millet-47": {
      kcal: 340, carbsG: 26, fibreG: 4, gi: 52,
      minerals: ["iron", "selenium", "phosphorus"],
      raw: { kind: "raw", name: "Cucumber and onion slices", how: "Slice cucumber and onion thinly and toss with lemon juice and a pinch of salt." },
      sides: [
        { kind: "cooked", name: "Cabbage thoran", how: "Stir-fry shredded cabbage with mustard seeds, curry leaves and grated coconut until tender." },
        { kind: "cooked", name: "Beans poriyal", how: "Stir-fry chopped beans with grated coconut, mustard seeds and curry leaves until just tender." },
      ],
    },
    "proso-millet-48": {
      kcal: 210, carbsG: 30, fibreG: 5, gi: 58,
      minerals: ["iron", "magnesium", "manganese"],
      raw: { kind: "raw", name: "Cucumber rounds", how: "Slice cucumber into rounds and sprinkle with black salt." },
      sides: [
        { kind: "cooked", name: "Beans poriyal", how: "Stir-fry chopped beans with grated coconut, mustard seeds and curry leaves until just tender." },
        { kind: "cooked", name: "Carrot kootu", how: "Simmer grated carrot and toor dal with coconut and cumin, then temper with mustard seeds." },
      ],
    },
    "proso-millet-49": {
      kcal: 290, carbsG: 46, fibreG: 5, gi: 60,
      minerals: ["potassium", "iron", "selenium"],
      raw: { kind: "raw", name: "Sliced radish and cucumber", how: "Slice radish and cucumber into thin rounds and season with black salt." },
      sides: [
        { kind: "cooked", name: "Aloo matar", how: "Cook potato and green peas with cumin, tomato and turmeric until tender." },
        { kind: "cooked", name: "Beans poriyal", how: "Stir-fry chopped beans with grated coconut, mustard seeds and curry leaves until just tender." },
      ],
    },
    "proso-millet-50": {
      kcal: 240, carbsG: 42, fibreG: 4, gi: 58,
      minerals: ["iron", "magnesium", "manganese"],
      raw: { kind: "raw", name: "Cucumber half-moons", how: "Slice cucumber into thin half-moons and sprinkle with a pinch of salt." },
      sides: [
        { kind: "cooked", name: "Vegetable ishtu", how: "Simmer potato, carrot and beans in coconut milk with green chilli and curry leaves until tender." },
        { kind: "cooked", name: "Toor dal tadka", how: "Simmer toor dal until soft and finish with a tempering of mustard seeds and dried chilli." },
      ],
    },
  },
};
