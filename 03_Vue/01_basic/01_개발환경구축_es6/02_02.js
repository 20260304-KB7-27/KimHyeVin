let msg = "GLOBAL"; // 전역 스코프

function outer() {
    let msg = "OUTER"; // 함수/지역 스코프

    console.log(msg); // 가장 가까운 스코프 가지고 옴 -> OUTER

    if (true) {
        let msg = "BLOCK"; // 가장 가까운 스코프 가지고 옴 -> BLOCK
        console.log(msg);
    }
}

outer();
console.log(msg); // 가장 가까운 스코프 가지고 옴 -> GLOBAL
