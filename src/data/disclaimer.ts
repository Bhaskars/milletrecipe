/**
 * Disclaimer text shown on the site. Plain English, written for general readers.
 * This is not legal advice. Have a qualified lawyer review it before relying on it.
 */
export interface DisclaimerSection {
  heading: string;
  paragraphs: string[];
}

export const DISCLAIMER_SHORT =
  "Recipes and rice information are for general interest only. They are not medical, nutritional or allergy advice. Read the full disclaimer.";

export const DISCLAIMER_SECTIONS: DisclaimerSection[] = [
  {
    heading: "General information only",
    paragraphs: [
      "MilletRecipe publishes traditional recipes, cooking methods and information about rice and millet varieties for general interest and home cooking. The content is provided as is, without warranty of any kind, express or implied.",
    ],
  },
  {
    heading: "Not medical or nutritional advice",
    paragraphs: [
      "Traditional benefits listed for rice varieties and other foods are beliefs or commonly claimed effects. They are not established medical facts and are not a treatment, cure or prevention for any condition.",
      "Nutrition figures, calorie counts, glycemic index values and plate pairings are estimates for a typical serving. They are not laboratory measurements and will vary with ingredients, brands and portion sizes.",
      "If you have diabetes, kidney disease, a digestive condition, a food allergy, or are pregnant or breastfeeding, speak to a qualified doctor or dietitian before changing your diet, and do not rely on this site to manage a health condition.",
    ],
  },
  {
    heading: "Allergies and ingredients",
    paragraphs: [
      "Check every ingredient against your own allergies and intolerances. Common allergens include nuts, sesame, dairy, gluten and shellfish. Recipes may contain these even when the title does not suggest it.",
      "Recipes that are labelled vegetarian or non-vegetarian reflect the ingredients listed. Check packaged products, stocks and spice blends if you follow a strict diet for religious or personal reasons.",
    ],
  },
  {
    heading: "Food safety",
    paragraphs: [
      "Cook food to safe temperatures, handle raw meat, fish and eggs hygienically, and store leftovers promptly. Fermented batters, such as idli and dosa batter, need clean equipment and a suitable temperature to ferment safely.",
      "Use your own judgement. If something looks, smells or tastes wrong, do not eat it.",
    ],
  },
  {
    heading: "Accuracy and translations",
    paragraphs: [
      "We try to keep the content correct, but we do not guarantee that every recipe, quantity, cooking time or name is accurate. Hindi and Tamil translations have not been checked by a native-speaker reviewer, so they may contain errors.",
      "Regional names for rice and millet vary between communities. The names used here are common usage, not an official classification.",
    ],
  },
  {
    heading: "Your responsibility",
    paragraphs: [
      "You are responsible for how you use the recipes and information here, including the cooking, the ingredients you choose and any decision about your health.",
    ],
  },
  {
    heading: "Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by law, MilletRecipe and its contributors are not liable for any loss, injury, illness, allergic reaction or other harm arising from use of this site or reliance on its content.",
      "Nothing in this disclaimer excludes liability that cannot lawfully be excluded.",
    ],
  },
  {
    heading: "Photos and third-party sources",
    paragraphs: [
      "Photos are credited on the photo credits page, with their source, author and licence. Some links and images come from third-party sites, which have their own terms and content. We do not control those sites.",
    ],
  },
];
