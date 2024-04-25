import Cryptr from 'cryptr';

const cryptr = new Cryptr('wlSETo4Q');

export const encryption = async(param) =>{
    try {
        const encrypted = cryptr.encrypt(param);
        return encrypted;
    } catch (error) {
        return {error: "SomeThing Went Wrong"}
    }
}

export const decryption = async(param) =>{
    try {
        const decrypted = cryptr.decrypt(param);
        return decrypted;
    } catch (error) {
        return {error: "SomeThing went wrong"}
    }
}