/**
 * 클로저
 *  - 반환된 내부함수가 자신이 선언됐을 때의 환경인 스코프를 기억해,
 *    자신이 선언되었을 때의 환경 밖에서도 스코프에 접근할 수 있는 함수.
 */
function outer() {
    let count = 0;

    function inner() {
        count++; // outer함수의 지역번수 사용.

        console.log(count);
    }

    // 함수자체를 반환
    return inner;
}

// 반환된 함수를 사용하려면 이후 소괄호 사용해야함
// outer()();

// 클로저 사용
// 함수저장함
const counter = outer();

counter();
counter();
counter();
