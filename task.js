// import { postRequest, getRequest, deleteRequest } from "./script.js"
const url = "http://192.168.56.1:8191/task"

export function countSmileys(arr) {
    return (!arr.length) ? 0 :
        [...arr].filter((face) =>
            face && typeof face === 'string' && face.match(/^[:;][\-~]?[)D]$/gi)
        ).length
}

function postRequest(url, data) {
    try {
        const response =  fetch(url, {
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            credentials: "same-origin",
            method: "POST",
            body: JSON.stringify(data),
        })
        return  response.json()
    } catch (error) {
        return console.error(error)
    }
}

export function createNewElementDB(input) {
    let data = {
        input,
        result: countSmileys(input.split(", "))
    }

    postRequest(url, data)
        .then(response => { return response.input })

}