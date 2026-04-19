// debouncing means that the function will be called after a certain amount of time has passed since the last time it was called. This is useful for things like search input, where you don't want to make a request to the server every time the user types a character.

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }
        , delay);
    };
}