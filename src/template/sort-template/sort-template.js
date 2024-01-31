export const createSortTemplate = (title, isChecked) => {
  const isActive = isChecked ? 'sort__button--active' : '';

  return (
    `<li>
      <a href="#" class="sort__button ${isActive}">
        ${title}
      </a>
    </li>`
  );
};
