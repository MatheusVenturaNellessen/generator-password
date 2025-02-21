function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export default function generateChar(min, max) {
    return String.fromCharCode(rand(min, max));     
}