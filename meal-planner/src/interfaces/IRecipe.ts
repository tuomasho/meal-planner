import Ingredient from "./IIngredient";
import Instruction from "./IInstruction";

interface Recipe{
    idRecipe: string;
    strName: string;
    strDescription: string;
    strRecipeThumb: string;
    lstIngredients: Ingredient[];
    lstInstructions: Instruction[];
}

export default Recipe;