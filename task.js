export function countSmileys(arr) {
    return (!arr.length) ? 0 :
        [...arr].filter((face) =>
            face && typeof face === 'string' && face.match(/^[:;][\-~]?[)D]$/gi)
        ).length
}