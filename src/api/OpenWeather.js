const api = {
    key: "cec29641ee335945055c943f83f89232",
    base: "https://api.openweathermap.org/data/2.5/"
};

const OpenWeather = {

    search(query) {
        return fetch(`${api.base}weather?q=${query}&appid=${api.key}`)
            .then(res => res.json())
            .then(result => {
                return {
                    temp: result.main.temp,
                    condition: result.weather[0].description,
                    name: result.name
                }
            })
    }
}

export default OpenWeather;