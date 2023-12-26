import { ref  , uploadBytes , deleteObject, getDownloadURL } from "firebase/storage";
import { storage } from "./config";


export const uploadFile = async(file,userId) =>{
    let res = null,
    e = null
    try {
        const storageRef = ref(storage , "/images" + `${userId}${file.name}`);
        res = await  uploadBytes(storageRef, file)
    } catch (error) {
        e = error
    }
   
    return {res , e}
}

export const deleteFileFromStorage  =async(filename , userId)=>{
    let res = null,
    e = null
    try {
        const desertRef = ref(storage, "/images" + `${userId}${filename}`);
     res = await deleteObject(desertRef )
    } catch (error) {
        e =error
    }
    return {e , res}

}

export const downloadFile = async(file , userId)=>{
    let u =null,
    e = null
    try {
         u = await getDownloadURL(ref(storage , "/images" + `${userId}${file.name}`))
    } catch (error) {
        e = error
    }
    return u
   
}