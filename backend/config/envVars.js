import dotenv from "dotenv";

dotenv.config();

export const ENV_VARS = {
	MONGO_URI:"mongodb+srv://yaumilramkhadani:4cwvYJaUVPnd2J4N@movie-api.qam09.mongodb.net/?retryWrites=true&w=majority&appName=movie-api",
	PORT: process.env.PORT || 5000,
	JWT_SECRET: process.env.JWT_SECRET,
	NODE_ENV: process.env.NODE_ENV,
	TMDB_API_KEY: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWZmNTU5N2MwNGFmZmRlOTI4ZDBiMzYyZGEzMjkxYSIsIm5iZiI6MTY5MjYxMDM0NC4zMDQsInN1YiI6IjY0ZTMyZjI4MzcxMDk3MDBhYzQ2MjJhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7hZFXNuyeOqg4GS5_y0uSEIfpDznqRbNMsrXTc0SlgM",
};
