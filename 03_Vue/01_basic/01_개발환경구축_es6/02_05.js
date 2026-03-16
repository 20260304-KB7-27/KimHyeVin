function addContact(
    name,
    moblie,
    home = "없음",
    address = "없음",
    email = "없음",
) {
    console.log(
        `name=${name},  moblie=${moblie}, home=${home}, address=${address}, email=${email}`,
    );
}

addContact("홍길동", "010-222-3331");
addContact("이몽룡", "010-222-3331", "02-3422-9900", "서울시");
