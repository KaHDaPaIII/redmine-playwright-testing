export function randomString(n){
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let s = '';
    for(let i = 0; i < n; i++){
        s += chars[Math.floor(Math.random() * chars.length)];
    }
    return s;
}