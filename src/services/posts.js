import axios from "axios"

export const getPostServices = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data.slice(0,12);
}

export const createPostServices = (data) => {
    return axios({
        url: ('https://jsonplaceholder.typicode.com/posts'),
        method: "POST",
        data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
};

export const updatePostServices = (id,data) => {
    return axios({
        url: (`https://jsonplaceholder.typicode.com/posts/${id}`),
        method: "PUT",
        data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
};

export const deletePostService = (id) => {
    return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
};