const cookieExpiration = (timeInHours) => {
    var now = new Date();
    now.setTime(now.getTime() + timeInHours * 3600 * 1000);
    return now.toUTCString()
}

const authenticate = async (url, body, onSuccess, onFailure) => {
    try {
        const promise = await fetch(url, {    // url - http://localhost:9999/api/user/login, или register;   body - data;  
            method: "POST",
            body: JSON.stringify(body),         // body = { username:"Nel1", password:"123" }
            headers: {
                "Content-type": "application/json"
            }
        })
        const authToken = promise.headers.get("Authorization");    // взимаме Аuthorization=cookie хедъра от върнатия промис. 
        // създаваме куки x-auth-token с върнатото куки от бекенда и му задаваме колко да живее:
        document.cookie = `x-auth-token=${authToken}; expires=${cookieExpiration(1)} `;  // max-age=10 [секунди], може да се ползва вместо expires

        const responseJson = await promise.json();
        console.log(`responseJson = `, responseJson);
        if (responseJson.username && authToken) {   // ако имаме юзер и имаме ауттокен
            onSuccess({                             // значи сме лог-иннати и можем да пренасочим към началната страница
                username: responseJson.username,
                id: responseJson._id
            });          
        } else {
            onFailure();    // не ми харесва така, но Валентин така го написа
        }
    } catch (e) {
        console.log(e);
        onFailure();
    }
}

export default authenticate;