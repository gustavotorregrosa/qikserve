export const stringLimit = (str: string) => {
    const limit = 100
    return str.length < limit ? str : str.slice(0, limit) + '...'
    
}