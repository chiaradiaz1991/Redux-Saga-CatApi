import { takeLatest, call, put } from "redux-saga/effects";
import axios from 'axios';

//watcher sagas / watches for actions dispatched to the store, starts worker saga

export function* watcherSaga () { //* means that is an Generator /Generators can pause and restart 
  yield takeLatest('REQUEST', workerSaga);
}

// api request / returns a promise as response

function fetchCat() {
  return axios({
    method: 'get',
    url: "https://api.thecatapi.com/v1/images/search"
  });
}


// worker saga / make the api call when the watcher saga see the action 

function* workerSaga () { //* means that is an Generator /Generators can pause and restart 
  try {
    const res = yield call(fetchCat); // yield in a generator represents an asynchronous step
    const cat = res.data[0].url;
    // dispatch success action to the store with the new cat
    console.log({cat})
    yield put({type: 'SUCCESS', cat});
  } catch (error) {
    // dispatch a failure action to the store with err
    console.log({error})
    yield put({type: 'FAILURE', error});
  }
}

