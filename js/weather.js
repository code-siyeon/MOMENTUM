
// OpenWeatherMap API 키
const API_KEY = "e007be45d0078d834fcfcc52f39f9d01"


// 위치 정보를 성공적으로 가져왔을 때 호출되는 함수
function onGeo(position) {
    const lat = position.coords.latitude; // 위도 정보
    const lon = position.coords.longitude; // 경도 정보

    // OpenWeatherMap URL. 위도, 경도, API 키를 사용합니다
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    // fetch API를 사용하여 OpenWeatherMap API를 호출
    fetch(url)
        .then((response) => response.json()) // 응답을 JSON 형태로
        .then((data) => {
            // 1. 날씨 데이터를 가져옵니다.
            const temp = document.querySelector("#temp");
            temp.innerText = `${Math.round(data.main.temp)}°`;

            // 2. 도시 이름을 가져옵니다.
            const city = document.querySelector("#city");
            city.innerText = data.name;

            // 3. 아이콘 코드를 가져옵니다.
            const iconCode = data.weather[0].icon;

            // 4. 아이콘 이미지를 설정합니다.
            const icon = document.querySelector("#icon");
            icon.src = `http://openweathermap.org/img/wn/${iconCode}.png`;
        });
}

// 위치 정보를 가져오는 데 실패했을 때 호출되는 함수
function offGeo() {
    alert("Can't find you. No weather for you.");
}

// 현재 사용자의 위치 정보를 얻어옵니다.
navigator.geolocation.getCurrentPosition(onGeo, offGeo);