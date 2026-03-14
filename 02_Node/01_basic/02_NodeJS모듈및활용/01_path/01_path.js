// const path = require('path');
// esm 방식
// 이 경우 json에 아래 수정필요
// "type": "module"
import path from 'path';

/*
 path 모듈
 - 파일 경로나 디렉토리 경로를 다루는 모듈
 - OS 간의 경로를 구분하는 구분자가 다른데 통일 가능
 */
const fullPath = path.join('some', 'work', 'ex.txt');

console.log(fullPath);