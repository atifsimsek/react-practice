export const getCountries = () => dispatch => {

    fetch("https://restcountries.com/v2/all")
        .then(response => response.json())
        .then(data => dispatch({ type: "GET_COUNTRIES_SUCCESS", payload: data }))
        .catch(error => dispatch({ type: "GET_COUNTRIES_ERORR", payload: error }))


}