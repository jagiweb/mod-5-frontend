// BASE URL //
const baseURL = "http://localhost:3001"
// WORKS URLS //
const allWorkURL = `${baseURL}/all_work`
const workPostURL = `${baseURL}/post_work`
const workPatchURL = `${baseURL}/admin/edit-works/`
const workDestroyURL = `${baseURL}/admin/delete-works/`
const showFourMoreURL = `${baseURL}/all_works/showFourMore`
const allWorksForAdmin = `${baseURL}/all_works_admin`
// NEWS URLS //
const allNewsURL = `${baseURL}/all_news`
const newsPostURL = `${baseURL}/post_news`
const newsPatchURL = `${baseURL}/admin/edit-news/`
const newsDestroyURL = `${baseURL}/admin/delete-news/`
const showFourNewsURL = `${baseURL}/all_news/showFour`
const allNewsForAdmin = `${baseURL}/all_news_admin`
// ABOUT URLS //
const allAboutURL = `${baseURL}/all_about`
const AboutPostURL = `${baseURL}/post_about`
const aboutPatchURL = `${baseURL}/admin/edit-about/`
const aboutDestroyURL = `${baseURL}/admin/delete-about/`
// AFTER CARE URLS //
const allAfterCareURL = `${baseURL}/all_care`
const AfterCareURL = `${baseURL}/post_care`
const afterCarePatchURL = `${baseURL}/admin/edit-aftercare/`
const afterCareDestroyURL = `${baseURL}/admin/delete-aftercare/`
// CONTACTS URLS //
const allContactsURL = `${baseURL}/all_contacts`
const ContactsPostURL = `${baseURL}/post_contacts`
const ContactsDestroyURL = `${baseURL}/admin/delete-contacts/`
// SIGN IN AND VALIDATION URLS //
const signInURL = `${baseURL}/admin/signin`
const validateURL = `${baseURL}/validate`

//////// DELETE REQUEST //////

const destroy = (url, id) => {
  const configurationObject={
    method: "DELETE"
  }
  return fetch(`${url}/${id}`, configurationObject)
}

 //////  JSON POST    ///////
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

/////// POST WITH PICTURE ///////

const postWithPicture = (url, object) => {
  const configurationObject = {
    method: "POST",
    headers: {},
    body: object
  }
  return fetch(url, configurationObject)
}

///// PATCH WITH PICTURE /////////

const patch = (url, id, object) => {
    const configurationObject = {
      method: "PATCH",
      headers: {},
      body: object
    }
    return fetch(`${url}/${id}`, configurationObject)
  }

/////// GET REQUEST WITH TOKEN /////
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

////////////////// WORKS //////////////////
const getWorks = () => {
  return get(allWorkURL).then(response => response.json())
}
const getAllWorks = () => {
  return get(allWorksForAdmin).then(resp => resp.json())
}
const showFourMore = () => {
  return get(showFourMoreURL).then(response => response.json())
}
const workPost = data => {
  return postWithPicture(workPostURL, data).then(resp => resp.json())
}
const workPatch = (data, id) => {
  return patch(workPatchURL, id, data).then(response => response.json())
}
const workDelete = id => {
  return destroy(workDestroyURL, id).then(resp => resp.json())
}

////////////////// NEWS ///////////////////
const getNews = () => {
  return get(allNewsURL).then(response => response.json())
}
const getTwoNews = () => {
  return get(showFourNewsURL).then(resp => resp.json())
}
const getAllNews = () => {
  return get(allNewsForAdmin).then(resp => resp.json())
}
const newsPost = data => {
  return postWithPicture(newsPostURL, data).then(resp => resp.json())
}
const newsPatch = (data, id) => {
  return patch(newsPatchURL, id, data).then(response => response.json())
}
const newsDelete = id => {
  return destroy(newsDestroyURL, id).then(resp => resp.json())
}

/////////////////// ABOUT /////////////////
const getAbout = () => {
  return get(allAboutURL).then(response => response.json())
}
const aboutPost = data => {
  return postWithPicture(AboutPostURL, data).then(resp => resp.json())
}
const aboutPatch = (data, id) => {
  return patch(aboutPatchURL, id, data).then(response => response.json())
}
const aboutDelete = id => {
  return destroy(aboutDestroyURL, id).then(resp => resp.json())
}

////////////////// AFTER CARE ////////////////
const getAfterCare = () => {
  return get(allAfterCareURL).then(response => response.json())
}
const afterCarePost = data => {
  return post(AfterCareURL, data).then(response => response.json())
}
const afterCarePatch = (data, id) => {
  return patch(afterCarePatchURL, id, data).then(response => response.json())
}
const afterCareDelete = id => {
  return destroy(afterCareDestroyURL, id).then(resp => resp.json())
}

////////////////// CONTACTS  ////////////////
const getContacts = () => {
  return get(allContactsURL).then(response => response.json())
}
const contactsPost = data => {
  return post(ContactsPostURL, data).then(response => response.json())
}
const contactsDelete = id => {
  return destroy(ContactsDestroyURL, id).then(resp => resp.json())
}

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
  getAfterCare,
  workPatch,
  workDelete,
  newsPatch,
  newsDelete,
  aboutPatch,
  aboutDelete,
  afterCarePatch,
  afterCareDelete,
  getContacts,
  contactsPost,
  contactsDelete,
  showFourMore,
  getAllWorks,
  getTwoNews,
  getAllNews
}