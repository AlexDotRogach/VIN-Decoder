import css from './Search.module.css';
import { useState } from 'react';
import { validateVIN } from '../../tools/form/formValidate';
import { NotificationManager } from 'react-notifications';
import fetchData from '../../services/apiDecoder/apiFetch';
import storage from '../../tools/storage';
import Info from '../Info';
import Loader from '../Loader';
import SearchList from '../SearchList';

const infoMessage = {
  change: 'Значение VIN не изменилось!',
  write: 'Введите VIN код автомобиля',
};
let searchStr = '';
const { load, save } = storage;
const STORAGE_KEY = 'searchValues';
const Search = () => {
  const [carInfo, setCarInfo] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const lookForVINInfo = e => {
    e.preventDefault();

    const { change, write } = infoMessage;

    const {
      elements: {
        decoder: { value: decoderValue },
      },
    } = e.currentTarget;

    if (searchStr === decoderValue) {
      NotificationManager.info(change);
      return;
    }

    if (!decoderValue) {
      NotificationManager.info(write);
      return;
    }

    if (!validateVIN(decoderValue)) return;

    setShowLoader(true);
    fetchData({}, '/DecodeVin', `/${decoderValue}`).then(({ Results }) => {
      setCarInfo(
        Results.filter(
          characteristic =>
            characteristic.Value && characteristic.Value !== 'Not Applicable'
        )
      );
      searchStr = decoderValue;
      storageAdd(decoderValue);
      setShowLoader(false);
    });
  };

  const clickList = ({ target: { textContent: VIN } }) => {
    setShowLoader(true);
    fetchData({}, '/DecodeVin', `/${VIN}`).then(({ Results }) => {
      setCarInfo(
        Results.filter(
          characteristic =>
            characteristic.Value && characteristic.Value !== 'Not Applicable'
        )
      );
      searchStr = VIN;
      setShowLoader(false);
    });
  };

  const storageAdd = value => {
    if (!load(STORAGE_KEY)) {
      save(STORAGE_KEY, [value]);
      return;
    }

    const newList = [value, ...load(STORAGE_KEY)];

    save(STORAGE_KEY, newList);
  };

  return (
    <>
      <form className={css.formDecoderSearch} onSubmit={lookForVINInfo}>
        <label className={css.decoderLabel} htmlFor="decoder">
          VIN код автомобиля
        </label>
        <input
          className={css.decoderInput}
          type="text"
          name="decoder"
          id="decoder"
          placeholder="VIN"
        />

        <button className={css.decoderSubmitBtn} type="submit">
          Найти!
        </button>
      </form>
      {showLoader && <Loader></Loader>}
      {carInfo.length ? (
        <Info data={carInfo}></Info>
      ) : (
        <SearchList
          title="Последние поиски"
          type="short"
          clickList={clickList}
        ></SearchList>
      )}
    </>
  );
};

export default Search;
