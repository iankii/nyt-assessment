export class Service {
	constructor() {}

	async getArticles() {
		try {
			return await fetch(
				// TODO: move this key to env file
				"https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=HHxqNhT8VG6zafwVTVv44ePmohkducQD"
			).then((res) => res.json());
		} catch (error) {
			console.log("error: ", error);
		}
	}

	async getArticleById(id) {
		try {
			return await fetch(
				// TODO: move this key to env file
				`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=HHxqNhT8VG6zafwVTVv44ePmohkducQD&&id=${id}`
			).then((res) => res.json());
		} catch (error) {
			console.log("error: ", error);
		}
	}
}

const service = new Service();
export default service;
