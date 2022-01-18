import { custom, JSONObject, required } from "ts-json-object";
import { User } from "./user.model";

export class Recipe extends JSONObject {
  @required
  @custom((recipe: Recipe, key:string, value: string) => {
    return value.toLowerCase();
  })
  id!: string;
  @required
  user!: User;
  @required
  name!: string;
  @required
  description!: string;
  @required
  categorie!: number;


}
