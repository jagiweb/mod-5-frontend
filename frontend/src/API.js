// Define the URLs for our different routes
const baseURL = "http://localhost:3001"
const allWorkURL = `${baseURL}/all_work`
const allNewsURL = `${baseURL}/all_news`
const allAboutURL = `${baseURL}/all_about`
const allAfterCareURL = `${baseURL}/all_care`
const signInURL = `${baseURL}/admin/signin`
const validateURL = `${baseURL}/validate`
const workPostURL = `${baseURL}/post_work`
const newsPostURL = `${baseURL}/post_news`
const AfterCareURL = `${baseURL}/post_news`
const AboutPostURL = `${baseURL}/post_about`

// // Make a post request to a given URL with a given data object as the body and return the Promise
const post = (url, object) => {
  const configurationObject = {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(object)
  }
  return fetch(url, configurationObject)
}

 /// Post request to send pictures plus other things /// 

const postWithPicture = (url, object) => {
  const configurationObject = {
    method: "POST",
    headers: {},
    body: object
  }
  return fetch(url, configurationObject)
}

// const patch = (url, id, object) => {
//     const configurationObject = {
//       method: "PATCH",
//       headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(object)
//     }
//     return fetch(`${url}/${id}`, configurationObject)
//   }

// Make a get request to a given URL and return the Promise. If a token has been provided, include it as a header called Authorization
const get = (url, token) => {
  return token ? fetch(url, { headers: { AUTHORIZATION: token } }) : fetch(url)
}

// // Use the get function to make a request to the validate route and parse the response into JSON
const validate = token => {
  return get(validateURL, token).then(response => response.json())
}

// // Use the post function to make a request to the validate route and parse the response into JSON
const signIn = data => {
    return post(signInURL, data).then(response => response.json())
}

const workPost = data => {
  return postWithPicture(workPostURL, data).then(resp => resp.json())
}

const newsPost = data => {
  return postWithPicture(newsPostURL, data).then(resp => resp.json())
}

const aboutPost = data => {
  return postWithPicture(AboutPostURL, data).then(resp => resp.json())
}

const afterCarePost = data => {
  return post(AfterCareURL, data).then(response => response.json())
}
// const signUp = data => {
//     return post(signUpURL, data).then(response => response.json())
// }

// const EditProfile = (data, id) => {
//   return patch(editURL, id, data).then(response => response.json())
// }
// Use the get function to make a request to the items route and parse the response into JSON
const getWorks = () => {
  return get(allWorkURL).then(response => response.json())
}

const getNews = () => {
  return get(allNewsURL).then(response => response.json())
}

const getAbout = () => {
  return get(allAboutURL).then(response => response.json())
}

const getAfterCare = () => {
  return get(allAfterCareURL).then(response => response.json())
}
// const getMorePictures = (num, token) => {
//   return get(`https://pixabay.com/api/?key=15410961-50b6ae9ee64c3859d407a7eaa&q=nature&image_type=photo&pretty=true&per_page=${num}`, token).then(response => response.json())
// }

// Export the necessary functions as part of one object which we will import elsewhere
// export default { signIn, validate, getPictures }
export default {
  signIn, 
  validate, 
  workPost, 
  newsPost, 
  afterCarePost, 
  aboutPost, 
  getWorks, 
  getNews, 
  getAbout, 
  getAfterCare
}