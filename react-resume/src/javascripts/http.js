const host = 'http://localhost:8080';

export function GET(url) {
    var fetchOptions = {
        methos: 'GET'
    };
    return new Promise((resolve, reject) => {
        fetch(url, fetchOptions).then(response => response.json()).then(response => resolve(response.data)).catch((error) => {
            reject(error);
        })
    });
}

export const URL = {
    fetchProfile: `${host}/portal/fetch_profile.do`
}
