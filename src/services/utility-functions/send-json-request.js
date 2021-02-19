/**
 * @param url the url from which the json should be retrieved
 * @returns a Promise with the response of the request
 */
export async function sendJsonRequest (url) {
  const xhr = new XMLHttpRequest()
  xhr.responseType = 'json'
  xhr.open('GET', url)
  const response = new Promise((resolve, reject) => {
    xhr.addEventListener('load', (event) => {
      if (xhr.status !== 200) {
        reject(Error(`HTTP ERROR: ${xhr.status}: ${xhr.responseText}`))
      } else {
        resolve(xhr.response)
      }
    })
  })
  xhr.send()
  return response
}
