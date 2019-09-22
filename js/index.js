// your code here
function getRepositories() {
    const username = document.getElementById("username").value;
    const req = new XMLHttpRequest();
    req.addEventListener('load', displayRepositories);
    req.open("GET", `https://api.github.com/users/${username}/repos`);
    req.send();
  }

  function displayRepositories() {
    var repos = JSON.parse(this.responseText);
    console.log(repos);
    const repoList = `<ul>${repos
      .map(repo => {
        const dataUsername = 'data-username="' + repo.owner.login + '"';
        const dataRepoName = 'data-repository="' + repo.name + '"';
        return 
      })
      .join('')}</ul>`;
    document.getElementById('repositories').innerHTML = repoList;
  }
