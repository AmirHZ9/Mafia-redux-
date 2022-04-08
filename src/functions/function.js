const isInCart = (state,chracter) =>{
    const search = state.find(item => item == chracter)
    return search
}

const quantityCount = (state,char) => {
    const arr =state
    const counts = {}
    
    for (const char of arr){
        counts[char] = counts[char] ? counts[char] + 1 : 1
    }
    return counts[char]
}



export {isInCart , quantityCount}