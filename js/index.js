// your code here
function getRepositories() {
    const username = document.getElementById("username").value;
    const req = new XMLHttpRequest();
    req.addEventListener('load', displayRepositories);
    req.open("GET", `https://api.github.com/users/${username}/repos`);
    req.send();
  }

  function displayRepositories() {
    const repos = JSON.parse(this.responseText);
    const repoDisplay =
      '<ul>' +
      repos.map(repo => {
        const dataUsername = 'data-username="' + repo.owner.login + '"';
        const dataRepoName = 'data-repository="' + repo.name + '"';
        return
        <li>
          <h4>${repo.name}</h4>
          <a href="${repo.html_url}">${repo.html_url}</a><br>
          <a href="#" ${dataRepoName} ${dataUsername} onclick="getCommits(this)">Get Commits</a><br>
          <a href="#" ${dataRepoName} ${dataUsername} onclick="getBranches(this)">Get Branches</a></li>
        </li>`;
      })
      .join('')}</ul>`;
    document.getElementById('repositories').innerHTML = repoList;
  }

  
