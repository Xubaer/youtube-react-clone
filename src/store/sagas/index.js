import { all, call, put } from 'redux-saga/effects';
export default function* (){
    yield all([]);
}

/*
* entity must have a success, request and failure method
* request is a function that returns a promise when called
* */
export function* fetchEntity(request, entity, ...args) {
    try {
      const response = yield call(request);
      // we directly return the result object and throw away the headers and the status text here
      // if status and headers are needed, then instead of returning response.result, we have to return just response.
      yield put(entity.success(response.result, ...args));
    } catch (error) {
      yield put(entity.failure(error, ...args));
    }
  }