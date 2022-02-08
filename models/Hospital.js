const mongoose = require("mongoose");

const HospitalSchema = new mongoose.Schema({
	name: {
		type: String,
		require: [true, "Please add a name"],
		unique: true,
		trim: true,
		maxLength: [50, "Name can not be more than 50 characters"],
	},
	addresses: { type: String, require: [true, "Please add an address"] },
	districts: { type: String, require: [true, "Please add a district"] },
	province: { type: String, require: [true, "Please add a province"] },
	postalcode: {
		type: String,
		require: [true, "Please add a postalcode"],
		maxLength: [5, "Postal code can not be more than 5 digits"],
	},
	tel: { type: String },
	region: { type: String, require: [true, "Please add a region"] },
});

module.exports = mongoose.model("Hospital", HospitalSchema);
