import css from './Loader.module.css';
import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={css.loader}>
      <RotatingLines
        strokeColor="black"
        strokeWidth="3"
        animationDuration="0.75"
        width="46"
        visible={true}
      />
    </div>
  );
};

export default Loader;
