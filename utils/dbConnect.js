import mongoose from "mongoose";

const connection = {};

(async function dbConnect() {
	if (connection.isConnected) {
		return;
	}

	try {
		const db = await mongoose.connect("mongodb+srv://pooja1012:Umw7C3I1VJPt62eo@cluster0.ppwwi.mongodb.net/OpenAuto", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		connection.isConnected = db.connections[0].readyState;

		console.log("MongoDB Connected");
	} catch (error) {
		console.log(error);
	}
})();
