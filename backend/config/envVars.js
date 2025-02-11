import dotenv from "dotenv";

dotenv.config();

export const ENV_VARS = {
	MONGO_URI:"mongodb+srv://yaumilramkhadani:4cwvYJaUVPnd2J4N@movie-api.qam09.mongodb.net/?retryWrites=true&w=majority&appName=movie-api",
	PORT: process.env.PORT || 5000,
	JWT_SECRET: process.env.JWT_SECRET,
	NODE_ENV: process.env.NODE_ENV,
	TMDB_API_KEY: process.env.TMDB_API_KEY,
};
