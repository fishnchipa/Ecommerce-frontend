import axios from "axios"

export function getCart(id: string) {
	axios.post("http://localhost:8080/cart", {
		id: id
	})
	.then(response => {
		return response.data;
	})
}

export function deleteCart(id: string) {
	axios.post("http://localhost:8080/cart/delete", {
		id: id
	})
	.then(response => {
		return response.data;
	})
}

export function addToCart(userId: string, itemId: string) {

	axios.post("http://localhost:8080/cart/add", {
		id: {
			user: userId,
			item: itemId
		}
	})
}