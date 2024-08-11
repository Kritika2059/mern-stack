async function processImageUpload(file) {
    let uploadResult = await uploadToCloudStorage(file);
    let thumbnailUrl = await generateThumbnail(uploadResult.imageUrl);
    return { uploadResult, thumbnailUrl };
}
