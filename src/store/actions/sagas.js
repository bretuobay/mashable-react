import { all } from 'redux-saga/effects';
import { currencySaga } from './currencyActions';
import { newsSaga } from './newsActions';
import { weatherSaga } from './weatherActions';

export default function* sagas() {
    yield all([
     currencySaga(),
     newsSaga(),
     weatherSaga()
    ]);
}