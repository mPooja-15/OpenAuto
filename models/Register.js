import mongoose from "mongoose";

const RegisterSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required!"],
		trim: true,
	},
	email: {
		type: String,
		required: [true, "Email is required!"],
		trim: true,
	},
	
	createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Register ||
	mongoose.model("Register", RegisterSchema);
