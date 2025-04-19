//declare object

const JsObject = {
    namee:"Nikhil",
    age:28,
    email:"nikhil4u44@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Tuesday"]
}

console.log(JsObject.namee)
console.log(JsObject["email"])
console.log(JsObject["age"])
console.log(JsObject["lastLoggedIn"])


JsObject.email="dolly@gmail.com"
console.log(JsObject)
Object.freeze(JsObject)
JsObject.email="dolly@micro.com"
console.log(JsObject)

