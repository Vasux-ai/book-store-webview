function getImgUrl(imageName){
    if (!imageName) return '';
    return new URL(`../assets/books/${imageName}`, import.meta.url);
}

export default getImgUrl;