const oggi = new Date();


const options = [
    {
        year:"numeric",
        month:"long",
        day:"2-digit",
        weekday:"long"
    },
    {
        year:"numeric",
        month:"long",
        day:"2-digit",
        weekday:"long",
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit"
    }

]

console.log(oggi.toLocaleString(undefined, options[0]))

options.forEach(option=>{
    const element = document.createElement('h2');
    const text = document.createTextNode(oggi.toLocaleString(undefined, option));
    element.appendChild(text);
    document.querySelector('body').appendChild(element);
    
})
