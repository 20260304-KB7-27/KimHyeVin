// 모듈에서 add, multiply 각각을 직접 export 하고 getBase는 디폴트로 바로
//export하도록정의?
let base = 100;
const add = (x) => base + x;
const multiply = (x) => base * x;
const getBase = () => base;
export { add, multiply };
export default getBase;
