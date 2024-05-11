import { createProduct } from "@/actions/products-actions";

export default function Home() {
	return (
		<main className="flex h-screen items-center justify-center p-24">
			<div className="flex justify-center items-center">
				<form action={createProduct} className="flex flex-col gap-4">
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
