import { z } from "zod";
import { PRODUCT_COLOR, PRODUCT_SIZE } from "./enum";

export const productVariantSize = z.object({
    id: z.string().uuid(),
    size: z.nativeEnum(PRODUCT_SIZE),
    images: z.array(z.string()).min(1, 'At least one image required'),
    stock: z.number().positive().min(1, 'At least one stock required'),
})

export const createProductVariantSize = productVariantSize.omit({ id: true });

export const productVariantColor = z.object({
    id: z.string().uuid(),
    color: z.nativeEnum(PRODUCT_COLOR),
    images: z.array(z.string()).min(1, 'At least one image required'),
    variant_size: z.array(createProductVariantSize),
})

export const createProductVariantColor = productVariantColor.omit({ id: true });

export const productSchema = z.object({
    id: z.string().uuid(),
    name: z.string().nonempty('name required'),
    price: z.number().positive('Price must be postive number'),
    product_variant_color: z.array(createProductVariantColor).min(1, 'At least one color'),
})

export const createProductSchema = productSchema.omit({ id: true });