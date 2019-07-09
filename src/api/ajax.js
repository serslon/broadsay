export default (url, options = {}) =>
  fetch(url, options).then(async response => {
    if (response.ok) {
      //TODO need to check the header response if it, not JSON need to generate the error
      return await response.json();
    } else {
      throw new Error("Wrong response");
    }
  });
