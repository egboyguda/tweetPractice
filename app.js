
let input =document.querySelectorAll("input")
let htForm = document.querySelector("form")
htForm.addEventListener("submit",(e)=>{
    e.preventDefault() // dd dri mag loload an sayu na page ngadto sa ikaw duwa
    let username = htForm.elements.username.value
    let tweet = htForm.elements.tweet.value
    let bTag = document.createElement('b')
    let li = document.createElement("li")
    ul = document.querySelector("ul")
    bTag.append(username)
    li.append(bTag)
    ul.append(li)
    li.append(`-${tweet}`)
    
})