// 객체 구조분해할당
const user = {
    name: "Allice",
    age: 25,
    job: "Developer",
    info: {
        address: "Seoul",
        hobbies: ["reading", "coding"],
    },
};

// const { age, name, job } = user;
// console.log(age);
// console.log(name);

// 객체 속성명을 다르게 사용하고 싶다면 별칭 지정가능
// const { age: age1, name: userName } = user;

// 중첩된 객체 구조분해
const {
    name,
    age,
    info: {
        address,
        hobbies: [firstHobby, secondHobby],
    },
} = user;
console.log(info);
