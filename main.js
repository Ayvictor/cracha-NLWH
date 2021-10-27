const linksSocialMedia = {
  facebook: 'VictorSiFreitas',
  instagram: 'sf_victorrr',
  twitter: 'Sf_sVictor',
  github: 'Ayvictor',
  Youtube: 'Sf Victor'
}

function changeSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMedia()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(Response => Response.json())
    .then(data => {
    
    })
}

getGitHubProfileInfos()
