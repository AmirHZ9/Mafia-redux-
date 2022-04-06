const showChracter = (chracters,name) => {
    return{
        type:"SHOW",
        chracters:chracters,
        name:name
    }
}

export {showChracter}