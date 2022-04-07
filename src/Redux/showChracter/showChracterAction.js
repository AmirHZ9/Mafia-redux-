const showChracter = (chracters,name) => {
    return{
        type:"SHOW",
        chracters:chracters,
        name:name
    }
}
const showRole = (chracters,name) => {
    return{
        type:"SHOW_ROLE",
        chracters:chracters,
        name:name
    }
}

export {showChracter,showRole}