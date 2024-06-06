function renderImage({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="cards">
      <a href="${webformatURL}">
        <img src="${largeImageURL}" alt="${tags}">
      </a>
      <div>
        <ul class="cards-info">
          <li>
            <p class="cards-info-title">likes:</p>
            <p class="cards-info-count">${likes}</p>
          </li>
          <li>
            <p class="cards-info-title">views</p>
            <p class="cards-info-count">${views}</p>
          </li>
          <li>
            <p class="cards-info-title">comments</p>
            <p class="cards-info-count">${comments}</p>
          </li>
          <li>
            <p class="cards-info-title">downloads</p>
            <p class="cards-info-count">${downloads}</p>
          </li>
        </ul>
      </div>

    </li>`;
}

export function renderImgs(array) {
  return array.map(renderImage).join('');
}
