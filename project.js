const githubForm = document.getElementById('github-form')
const nameInput = document.querySelector('#githubname')
const clearLastUsers = document.querySelector('#clear-last-users')
const lastUsers = document.querySelector('#last-users')

const github = new Github()

eventListeners()

function eventListeners() {
  githubForm.addEventListener('submit', getData)
  clearLastUsers.addEventListener('click', clearAllSearched)
  document.addEventListener('DOMContentLoaded', getAllSearched)
}
function getData(a) {
  let username = nameInput.value.trim()
  if (username === '') {
    alert('Please do not leave the field blank!')
  } else {
    github
      .getGithubData(username)
      .then((response) => {
        if (response.user.message === 'Not Found') {
          console.log('error')
        } else {
          console.log('response')
        }
      })
      .catch((err) => console.log(err))
  }

  UI.clearInput(nameInput)
  a.preventDefault()
}
function clearAllSearched() {}
function getAllSearched() {}
