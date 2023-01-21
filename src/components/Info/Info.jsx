import { NotificationManager } from 'react-notifications';
import css from './Info.module.css';
import { useEffect, useState } from 'react';
import InfoItems from './InfoItems';
const Info = ({ data }) => {
  const [isRender, setIsRender] = useState(true);
  // Error
  useEffect(() => {
    if (+data[0].Value !== 0) {
      NotificationManager.error(data[1].Value);
      setIsRender(false);
      return;
    }

    setIsRender(true)
  }, [data]);

  return (
    isRender && (
      <section className={css.info}>
        <h2 className={css.title}>Информация по VIN коду</h2>
        <InfoItems data={data}></InfoItems>
      </section>
    )
  );
};

export default Info;
