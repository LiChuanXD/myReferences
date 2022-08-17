import axios from "axios";

const dataAPI = {
	fetchPosts: async () => await axios.get("https://jsonplaceholder.typicode.com/posts"),
	postPost: async data => await axios.post("https://jsonplaceholder.typicode.com/posts", data)
};

export default dataAPI;
