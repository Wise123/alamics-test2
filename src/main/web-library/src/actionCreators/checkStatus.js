/**
 * проверка успешности выполненения http-запроса
 * @param {*} response
 * @return {*}
 */
export function checkStatus(response) {
  if (response.status === 200) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.status = response.status;
    error.response = response;
    throw error;
  }
}
