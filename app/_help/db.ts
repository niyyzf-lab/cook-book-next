import Dexie, { Table } from "dexie";

export type Difficulty = "简单" | "普通" | "困难";

export interface RecipeItem {
  /**
   * 菜名
   */
  name: string;
  /**
   * 链接
   */
  link?: string;
  /**
   * video id
   */
  bv?: string;
  /**
   * 材料
   */
  stuff: string[];
  /**
   * 根据材料生成
   */
  emojis?: string[];
  /**
   * 难度
   */
  difficulty?: Difficulty | "";
  /**
   * 标签
   */
  tags?: string[];
  /**
   * 方式
   */
  methods?: string[];
  /**
   * 工具
   */
  tools: string[];
}

export class recipeClassedDexie extends Dexie {
  Recipes!: Table<RecipeItem>;

  constructor() {
    super("recipeDatabase");
    this.version(1).stores({
      Recipes: "++id, name, link,bv,*stuff,emojis,difficulty,*tags,*methods", // Primary key and indexed props
    });
  }
}

export const db = new recipeClassedDexie();

export const searchRecipesByIngredients = async (ingredients: string[]) => {
  const recipes = await db.Recipes.filter((recipe) =>
    ingredients.some((ingredient) => recipe.stuff.includes(ingredient))
  ).toArray();
  return recipes;
};
