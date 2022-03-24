function countSmileys(arr) {
    return (!arr.length) ? 0 :
        [...arr].filter((face) =>
            face.match(/^[:;][\-~]?[)D]$/gi)
        ).length
}

module.exports = countSmileys;