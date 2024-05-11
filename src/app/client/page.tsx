"use client";

import { createProduct } from "@/actions/products-actions";
import { useRef } from "react";
import { toast } from "sonner";

export default function ClientPage() {
	const formRef = useRef<HTMLFormElement>(null); // create a ref to the form

	return (
		<main className="flex h-screen items-center justify-center p-24">
			<div className="flex justify-center items-center">
				<form
					ref={formRef} // set the ref to the form
					action={async (formData) => {
						const data = await createProduct(formData);
						const productName = data.name;
						const productPrice = data.price;

						if (productName && productPrice) {
							toast.success("", {
								description: `Product ${productName} created with price ${productPrice}`,
								duration: 3000,
								position: "top-center",
								className: "bg-green-500 border-0 text-white",
								icon: "🎉",
							});
							formRef.current?.reset(); // reset the form
						} else {
							toast.error("", {
								description: `${data}`,
								duration: 3000,
								position: "top-center",
								className: "bg-red-500 border-0 text-white",
								icon: "❌",
							});
						}
					}}
					className="flex flex-col gap-4">
					<input
						type="text"
						name="productName"
						id=""
						placeholder="Name"
						className="border border-gray-300 rounded-md p-2 block"
					/>
					<input
						type="text"
						name="ProductPrice"
						id=""
						placeholder="Price"
						className="border border-gray-300 rounded-md p-2 block"
					/>
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-200">Save</button>
				</form>
			</div>
		</main>
	);
}
