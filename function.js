function validate(msg, type='danger') {
    return `<p class="alert alert-${type}">${msg}</p>`;
}

function zerotumi(time) {
    return time < 10 ? '0' + time : time;
}