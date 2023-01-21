import css from './Home.module.css'
const Home = () => {
  return (
    <section className={css.home}>
      <h1>Информация про проект</h1>
      <p>
        Данный проект есть тестовым заданием "VIN Decoder".
      </p>
    </section>
  );
};

export default Home;
