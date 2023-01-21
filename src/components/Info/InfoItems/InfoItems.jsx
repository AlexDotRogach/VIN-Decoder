import css from './InfoItems.module.css';

const InfoItems = ({ data }) => {
  return (
    <ul className={css.list}>
      {data.slice(2).map(({ Value, ValueId, Variable, VariableId }) => {
        return (
          <li data-id={ValueId} key={VariableId} className={css.item}>
            <span className={css.name}>{Variable}:</span>
            <span className={css.value}>{Value}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default InfoItems;
