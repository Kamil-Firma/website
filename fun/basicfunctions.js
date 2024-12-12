function clamp(value, min_value, max_value){
    return Math.min(Math.max(value, min_value), max_value);
}
function rng(min, max){
    return Math.round(Math.random() * (max - min) + min);
}
function shuffle(array){
    let currentIndex = array.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}
function lerp(a, b, time){
    return ( a + (b - a) * time );
}