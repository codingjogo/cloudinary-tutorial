"use client";

import React from "react";
import ImageUploader from "./image-uploader";

import { TProduct } from "@/lib/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { createProductSchema } from "@/lib/schemas";
import { PRODUCT_COLOR, PRODUCT_SIZE } from "@/lib/enum";

const ProductForm = () => {
	
	const form = useForm<TProduct>({
		resolver: zodResolver(createProductSchema),
		defaultValues: {
			name: "",
            price: 0,
            product_variant_color: [
                {
                    color: PRODUCT_COLOR.blue,
                    images: [],
                    variant_size: [
                        {
                            size: PRODUCT_SIZE.M,
                            stock: 0,
                        }
                    ]
                }
            ]
		},
	});

	function onSubmit(values: TProduct) {
		console.log(values);
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Creating a product</CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8"
					>
                        
						<Button type="submit">Submit</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

export default ProductForm;
