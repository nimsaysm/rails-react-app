export const POSTS_API_URL =
	// checks if the env is "test"
	process.env.NODE_ENV === "test"
		// if is "test", will use a fake URL
		? "http://mocked-api-url"
		// if is not, will import the URL from .env.development
		: import.meta.env.VITE_POSTS_API_URL;

export const SEARCH_API_URL =
	process.env.NODE_ENV === "test"
		? "http://mocked-api-url"
		: import.meta.env.VITE_SEARCH_API_URL;
