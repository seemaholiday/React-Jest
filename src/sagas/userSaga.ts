import { call, put, takeEvery } from 'redux-saga/effects';
import { postUserData, fetchUserList, userDetail } from '../redux/reducers/userReducers';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions

//User Fetch Api Call
const getUserApiDetail = async () => {
  let response = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(async (result) => {
      const res = await result.json()
      return res
    }).catch((e) => {
      console.log('error', e)
    })
  return response
}
function* fetchUserApi(): any {
  try {
    const userDetail: any = yield call(getUserApiDetail)
    yield put(fetchUserList(userDetail))
  } catch (e) {
    console.log("error", e)
  }
}

//User Post Api Call
const postUserApiDetail = async (data: any) => {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data.payload)
    });
  return response.json()
}
function* postUserDetail(data: any): any {
  try {
    const userDetailPost: any = yield call(postUserApiDetail, data)
    yield put(postUserData(userDetailPost))
  }
  catch (e) {
    console.log("error", e)
  }
}

//User Detail Api Call
const userDetailApiCall = async (id: any) => {
  let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id.payload}`)
    .then(async (result) => {
      const res = await result.json()
      return res
    }).catch((e) => {
      console.log('error', e)
    })
  return response
}

function* userDetailApi(data: any): any {
  try {
    const res: any = yield call(userDetailApiCall, data)
    yield put(userDetail(res))
  }
  catch (error) {
    console.log('error', error)
  }
}

function* userListSaga() {
  yield takeEvery('POST_USER_DETAIL', postUserDetail)
  yield takeEvery('FETCH_USER', fetchUserApi)
  yield takeEvery('DETAIL_USER', userDetailApi)
}

export default userListSaga