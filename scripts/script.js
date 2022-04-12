import { countSmileys } from './task.js'

const url = "http://192.168.56.1:8191/task"
const elemList = document.querySelector('#elem_list')

const init = () => {
    document.getElementById("btn_save").addEventListener('click', createElement)
    document.getElementById("btn_clear").addEventListener('click', deleteRequest)
    loadTasks()
}

export async function postRequest(url, data) {
    try {
        const response = await fetch(url, {
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            credentials: "same-origin",
            method: "POST",
            body: JSON.stringify(data),
        })
        return await response.json()
    } catch (error) {
        return console.error(error)
    }
}

export async function deleteRequest() {
    try {
        await fetch(url, {
            method: "DELETE",
        }).then(() => loadTasks())
    } catch (error) {
        console.log(error)
    }
}


export async function getRequest() {
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        return console.error(error)
    }
}

function loadTasks() {
    getRequest()
        .then((tasksArray) => {
            while (elemList.firstChild) {
                elemList.removeChild(elemList.firstChild);
            }
            tasksArray.forEach(element => {
                addElementOnPage(element)
            })
        })
}

function createElement() {
    let input = document.querySelector("#input_text").value
    let result = countSmileys(input.split(", "))
    let data = { input, result }
    postRequest(url, data)
        .then(response => console.log(response))

}

function addElementOnPage(element) {
    const newElement = document.createElement("li")
    newElement.textContent = generateText(element.input, element.result)
    elemList.appendChild(newElement)
}

const generateText = (text, count) => {
    return `Among faces "${text}" ${count} smiling`
}

init()
