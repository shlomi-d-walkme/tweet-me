export function getStorage(key:string) {
    const item = localStorage.getItem(key);
    if(!item) return null;
    return JSON.parse(item);
}

export function setStorage(key:string, data:any) {
    localStorage.setItem(key, JSON.stringify(data));
}