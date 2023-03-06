export const getImage = (image) =>
  fetch(
    `https://pixabay.com/api/?key=30209832-20b550a2bc120ee2a75c47205&q=${image}&image_type=photo&pretty=true`
  )
    .then((res) => res.json())
    .catch((e) => console.error(e));
