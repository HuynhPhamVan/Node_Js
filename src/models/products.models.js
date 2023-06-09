import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		categoryId: {
			type: mongoose.Types.ObjectId,
			ref: 'Category',
		},
	},
	{ timestamps: true, versionKey: false }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
