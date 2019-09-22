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
    const repoList = `<ul>${repos
      .map(
        r =>
          '<li>' +
          r.name +
          r.html_url +
          ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a></li>' +
          ' - <a href="#" data-repo="' + r.name + '" onclick="getBranches(this)">Get Branches</a></li>'
      )
      .join('')}</ul>`;
    document.getElementById('repositories').innerHTML = repoList;
  }

    function getCommits(el) {
    const name = el.dataset.repository;
    const username = el.dataset.username;
    const url = 'https://api.github.com/repos/' + userName + '/' + repoName + '/commits';
    const req = new XMLHttpRequest();
    req.addEventListener('load', displayCommits);
    req.open('GET', url);
    req.send();
  }
