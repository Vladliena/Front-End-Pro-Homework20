const mainButton = document.querySelector('button')
mainButton.addEventListener('click', buttonLinkCheck)

let siteLink = document.getElementById("url").value
siteLink.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        return buttonLinkCheck()
    }
});

function buttonLinkCheck(event) {
    event.preventDefault()
    siteLink = document.getElementById("url").value.trim()
    let redirectLink = siteLink.indexOf('://') === -1 ? 'https://' + siteLink : siteLink
    return window.location.assign(redirectLink)
}