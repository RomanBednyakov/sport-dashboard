class Helpers {
  checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  };
  saveToken = response => {
    localStorage.setItem(
      "access_token",
      JSON.stringify(response.data.access_token)
    );
    localStorage.setItem(
      "refresh_token",
      JSON.stringify(response.data.refresh_token)
    );
    return response;
  };
  removeToken = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  };
}

const helpers = new Helpers();
export default helpers;
