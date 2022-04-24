console.log("process.env.REACT_APP_APIURL -----> " + process.env.REACT_APP_APIURL);

export const environment = {
    production: false,
    apiUrl: process.env.REACT_APP_APIURL
};
