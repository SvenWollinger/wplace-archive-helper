//Enforce HTTPS (https://stackoverflow.com/a/4723302)
if (location.host !== "127.0.0.1" && location.protocol !== 'https:' && location.protocol !== 'file:') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}

const linkConverterSite = document.getElementById("archive-link-conv-site")
const linkConverterInput = document.getElementById("archive-link-conv-input");
const linkConverterOpen = document.getElementById("archive-link-conv-open");

function getErylonArchiveLink(lat, lng, zoom) {
    return `https://wplace.eralyon.net/?lat=${lat}&lng=${lng}&zoom=${zoom}`;
}

function genLinkSamScheitArchiveLink(lat, lng, zoom) {
    return `https://wplace.samuelscheit.com/#lat=${lat}&lng=${lng}&zoom=${zoom}`;
}

linkConverterOpen.onclick = () => {
    let params = URL.parse(linkConverterInput.value).searchParams;
    let lat = params.get("lat");
    let lng = params.get("lng");
    let zoom = params.get("zoom");

    let url = "";
    switch(linkConverterSite.selectedOptions[0].value) {
        case "samscheit":
            url = genLinkSamScheitArchiveLink(lat, lng, zoom);
            break;
        case "eralyon":
            url = getErylonArchiveLink(lat, lng, zoom);
            break;
    }
    window.open(url, '_blank').focus();
}