export function html({url, text}){
    return `
    <div>
        You're almost there to activate your account! 
        <a href=${url}>${text}</a>
    </div>
    `
}