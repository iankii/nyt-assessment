export class Service {
	constructor() { }

	async getArticles() {
		try {
			return await fetch(
				// TODO: move this key and URL to env file
				"https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=HHxqNhT8VG6zafwVTVv44ePmohkducQD"
			).then((res) => res.json());
		} catch (error) {
			console.error("error: ", error);
			throw error;
		}
	}

	async getArticleById(id: string) {
		try {
			return await fetch(
				// TODO: move this key and URL to env file
				`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=HHxqNhT8VG6zafwVTVv44ePmohkducQD&&id=${id}`
			).then((res) => res.json());
		} catch (error) {
			console.error("error: ", error);
			throw error;
		}
	}
}

const service = new Service();
export default service;
