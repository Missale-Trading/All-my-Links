const tileShareButtons = document.querySelectorAll('.tile-share-button')

async function copyText(e) {
    e.preventDefault()
    const link = this.getAttribute('link')
    try {
        await navigator.clipboard.writeText(link)
        alert("Link copied: " + link)
    } catch (err) {
        console.error(err)
    }
}

tileShareButtons.forEach(tileShareButton => tileShareButton.addEventListener('click', copyText))

const shareButtons = document.querySelectorAll('.share-button')

async function copyText(e) {
    e.preventDefault()
    const link = this.getAttribute('link')
    try {
        await navigator.clipboard.writeText(link)
        alert("Link copied: " + link)
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText))