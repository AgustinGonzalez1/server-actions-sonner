"use server";

import { randomUUID } from "crypto";

export const createProduct = async (formData: FormData) => {
	"use server";
	const productName = formData.get("productName");
	const productPrice = formData.get("ProductPrice");

	try {
		if (!productName || !productPrice) {
			throw new Error("Product name and price are required");
		}
		const newProduct = {
			name: formData.get("productName"),
			price: formData.get("ProductPrice"),
			id: randomUUID(),
		};

		return newProduct;
	} catch (error: any) {
		return error.message;
	}
};
