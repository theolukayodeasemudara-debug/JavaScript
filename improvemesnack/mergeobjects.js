// write a function that takes two objects and merges them into one.

const personal = {
    name: "Kemi",
    age: 27
}

const professional = {
    role: "Designer",
    company: "TechCorp",
}

const merge_users = (objOne, objTwo) => {
   let new_user = {...objOne, ...objTwo}
   return new_user
}

console.log(merge_users(personal, professional))
