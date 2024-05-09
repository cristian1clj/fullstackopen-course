import axios from "axios";

const url = 'http://localhost:3001/persons';

const getAll = () => {
  return axios.get(url)
    .then(response => response.data);
}

const create = (newPerson) => {
	return axios.post(url, newPerson)
		.then(response => response.data);
}

const update = (id, person) => {
	return axios.put(`${url}/${id}`, person)
		.then(response => response.data);
}

const remove = (id) => {
	return axios.delete(`${url}/${id}`)
		.then(response => response.data);
}

export default {
	getAll,
	create,
	update,
	remove
}