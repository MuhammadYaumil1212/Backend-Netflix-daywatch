import dotenv from "dotenv";

dotenv.config();

export const ENV_VARS = {
	MONGO_URI:"mongodb+srv://yaumilramkhadani:4cwvYJaUVPnd2J4N@movie-api.qam09.mongodb.net/?retryWrites=true&w=majority&appName=movie-api",
	PORT: process.env.PORT || 5000,
	JWT_SECRET: "7ab40b37c3b4e0bac9aebf0044df6dc81880d91e425d948dbd1e87f167767dc75e76202725c05681868c7854ff4de6b8f878ae86b1ada64743cc914653e133a0d7df1cc4d2b77d95f38b47c7939e6916a6b3e1a663c430d1e1ca41be5a1d4d92025346c0fdbd61293c4427c79bb77adca53a848229118cdcdbf3e1840321a3804078da87ed2478f7e772c159ede21abeb103d704a125a103aa7d1e6d0c94224823217d85c05a9b0c19bf5ad0725e5bbd2db4436ad1ad250048479db727dd65542986cf32c1f958653e98dc671117074fc2851528da01f49d6bb2e63cc29c492827cb51ff23d237e0a43480195d699d20f378a02e3ec4cda69db87e6acfc996c4",
	NODE_ENV: process.env.NODE_ENV,
	TMDB_API_KEY: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWZmNTU5N2MwNGFmZmRlOTI4ZDBiMzYyZGEzMjkxYSIsIm5iZiI6MTY5MjYxMDM0NC4zMDQsInN1YiI6IjY0ZTMyZjI4MzcxMDk3MDBhYzQ2MjJhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7hZFXNuyeOqg4GS5_y0uSEIfpDznqRbNMsrXTc0SlgM",
};
