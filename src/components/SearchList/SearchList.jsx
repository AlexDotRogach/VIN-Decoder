import css from './SearchList.module.css';
import storage from '../../tools/storage';
import { nanoid } from 'nanoid';
const { load } = storage;
const SearchList = ({ title, type = 'full', clickList }) => {
  const data = load('searchValues');

  if (!data || data.length === 0) return;

  if (type === 'short') {
    if (data.length <= 5) return;

    data.length = 5;
    data.push('...');
  }

  if (type === "full") {

  }

  return (
    <>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.list}>
        {data.map(item => {
          return (
            <li
              className={type === 'short' ? css.item : ''}
              onClick={clickList}
              key={nanoid()}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SearchList;
