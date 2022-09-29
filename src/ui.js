class UI {
  constructor() {
    this.profileDiv = document.querySelector('#profile')
    this.reposDiv = document.getElementById('repos')
    this.lastUsers = document.getElementById('last-users')
  }
  showUserInfo(user) {
    this.profileDiv.innerHTML = `
    <div class="card card-body mb-3">
    <div class="row">
      <div class="col-md-4">
        <a href="${user.html_url}" target = "_blank">
         <img class="img-fluid mb-2" src="${user.avatar_url}"> </a>
         <hr>
         <div id="fullName"><strong>${user.name}</strong></div>
         <hr>
         <div id="bio">${user.bio}</div>
        </div>
      <div class="col-md-8">
            <button class="btn btn-secondary">
            Followers<span class="badge badge-light">${user.followers}</span>
            </button>
            <button class="btn btn-info">
                 Following  <span class="badge badge-light">${user.following}</span>
              </button>
            <button class="btn btn-danger">
                Repos<span class="badge badge-light">${user.public_repos}</span>
            </button>
            <hr>
            <li class="list-group">
                <li class="list-group-item borderzero">
                    <img src="../images/company.png" width="30px"> <span id="company">${user.company}</span>
                    
                </li>
                <li class="list-group-item borderzero">
                    <img src="../images/location.png" width="30px"> <span id = "location">${user.location}</a>
                    
                </li>
                <li class="list-group-item borderzero">
                    <img src="../images/mail.png" width="30px"> <span id="email">${user.email}</span>
                    
                </li>
                
            </div>
               
            
      </div>
</div>
    `
  }
  clearInput(e1) {
    e1.value = ''
  }
  displayMessages(message, type) {
    const cardBody = document.querySelector('.card-body')
    const div = document.createElement('div')
    div.className = `alert alert-${type}`
    div.textContent = `${message}`
    cardBody.appendChild(div)
    setTimeout(() => {
      div.remove()
    }, 1500)
  }
  showUserRepo(repos) {
    this.reposDiv.innerHTML = ''
    repos.forEach((repo) => {
      this.reposDiv.innerHTML += `
    <div class="mb-2 card-body">
                    <div class="row">
                        <div class="col-md-2">
                        <span></span> 
                        <a href="${repo.html_url}" style="color: white" target = "_blank" id = "repoName">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-warning">
                                Stars  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                            </button>

                            <button class="btn btn-info">
                                Forks  <span class="badge badge-light" id ="repoFork">${repo.forks_count}</span>
                            </button>
                    
                        </div>
                </div>

                </div>`
    })
  }
  addSearchedUsersToUI(username) {
    let users = Storage.getSearchedUsersFromStorage()
    if (users.indexOf(username) === -1) {
      // <!-- <li class="list-group-item">asdfasf</li> -->
      const li = document.createElement('li')
      li.className = 'list-group-item'
      li.textContent = `${username}`
      this.lastUsers.appendChild(li)
    }
  }

  clearAllSearchedUsersFromUI() {
    while (this.lastUsers.firstElementChild !== null) {
      this.lastUsers.firstElementChild.remove()
    }
  }
}
