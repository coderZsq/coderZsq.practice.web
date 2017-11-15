const host = 'http://localhost:8080';

export function GET(url) {
    var fetchOptions = {
        method: 'GET'
    };
    return new Promise((resolve, reject) => {
        fetch(url, fetchOptions).then(response => response.json()).then(response => resolve(response.data)).catch((error) => {
            reject(error);
        })
    });
}

export const URL = {
    fetchProfile: `${host}/portal/fetch_profile.do`,
    fetchProjects: `${host}/portal/fetch_projects.do`,
    fetchGitHub: `${host}/portal/fetch_github.do`,
    fetchArticles: `${host}/portal/fetch_articles.do`,
    fetchExperience: `${host}/portal/fetch_experience.do`,
    fetchContact: `${host}/portal/fetch_contact.do`
}
