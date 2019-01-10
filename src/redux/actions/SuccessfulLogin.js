export function PostData(type, userData) {
    let BaseURL = `https://ah-backend-poseidon-staging.herokuapp.com/api/users/`;
    return new Promise((resolve, reject) => {
        fetch(BaseURL + type + "/", {
            method: 'POST',
            body: JSON.stringify(userData)
        })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });

    });
}