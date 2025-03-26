const { body, query } = require("express-validator");

exports.addSchoolValidation = [
	body("name").notEmpty().withMessage("Name is required"),
	body("address").notEmpty().withMessage("Address is required"),
	body("latitude").notEmpty().withMessage("Latitude is required").isFloat({ min: -90, max: 90 }).withMessage("Latitude must be a valid float between -90 and 90"),
	body("longitude").notEmpty().withMessage("Longitude is required").isFloat({ min: -180, max: 180 }).withMessage("Longitude must be a valid float between -180 and 180 in add school"),
];

exports.listSchoolsValidation = [
	query("name").notEmpty().withMessage("Name is required"),
	query("address").notEmpty().withMessage("Address is required"),
	query("latitude").notEmpty().withMessage("Latitude is required").isFloat({ min: -90, max: 90 }).withMessage("Valid latitude is required"),
	query("longitude").notEmpty().withMessage("Longitude is required").isFloat({ min: -180, max: 180 }).withMessage("Valid longitude is required"),
];
