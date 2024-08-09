async function fetchMultiple(urls) {
    let promises = urls.map(url => fetch(url));
    let responses = await Promise.all(promises);
    let data = await Promise.all(responses.map(res => res.json()));
    return data;
}
