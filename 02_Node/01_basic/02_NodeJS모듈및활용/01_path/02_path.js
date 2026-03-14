const path = require('path');
// esm 방식
// 이 경우 json에 아래 수정필요
// "type": "module"
// import path from 'path';

// ESM 방식인 경우 __filename -> 사용 불가
// const __dirname = path.dirname(__filename);
// console.log(__dirname);

console.log(`파일 절대 경로 : ${__filename}`);
/*
 - 절대 경로 : 루트 디렉토리 부터 시작하는 경로
 - 상대 경로 : 현재 작업 디렉토리 기준 경로
*/

const dir = path.dirname(__filename);
console.log(`폴더 까지만 : ${dir}`);

// 현재 작업 디렉토리
console.log(process.cwd());