const githubForm = document.getElementById('github-form')
const nameInput = document.querySelector('#githubname')
const clearLastUsers = document.querySelector('#clear-last-users')
const lastUsers = document.querySelector('#last-users')

const github = new Github()
const ui = new UI()

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
          ui.displayMessages('User with this name not found!', 'danger')
        } else {
          ui.addSearchedUsersToUI(username)
          Storage.addSearchedUsersToStorage(username)
          ui.showUserInfo(response.user)
          ui.showUserRepo(response.repo)
          ui.displayMessages('Successfully found!', 'success')
        }
      })
      .catch((err) => console.log(err))
  }

  ui.clearInput(nameInput)
  a.preventDefault()
}
function clearAllSearched() {}
function getAllSearched() {
  let users = Storage.getSearchedUsersFromStorage()
  users.forEach((user) => {
    lastUsers.innerHTML += `
    <li class="list-group-item">${user}</li>`
  })
}
