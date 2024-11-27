const submit=document.querySelector('.submit')
const container=document.querySelector('.container')
const search=document.querySelector('#search')
const ul=document.querySelector('#ul')
submit.addEventListener('click',(e)=>{
    const input=search.value.trim('')
    e.preventDefault()
    fetch('https://api.github.com/users/'+ `${input}` +'/repos').then(res=>res.json()).then(data=>{
        console.log(data)
       const name= data.map(val=>val.name)
       console.log(name)
       const image=data.map(val=>val.owner.avatar_url)
    //    for(let i=0;i<name.length;i++){
       
        let projectURL=data.map(val=>val.git_url)
        console.log(projectURL)
        // let split1=projectURL.split('').splice(0,5)
        for(let i=0;i<name.length;i++){
            let list=document.createElement('li')
            let a = document.createElement('a')
            let correctedURL=projectURL[i].split('').slice(6,projectURL[i].length-1).join('').replace(".gi",".git")
            console.log(correctedURL)
            a.href=`${correctedURL}`
        
        

        list.innerText=name[i]
        
        a.append(list)

        ul.append(a)
       
        console.log(ul)

        }


       let img = document.createElement('img')
       img.src=`${image}`
    container.append(img)

       
})
})