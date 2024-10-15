import { z } from "zod";
import { productSchema } from "./schemas";

export type TProduct = z.infer<typeof productSchema>;