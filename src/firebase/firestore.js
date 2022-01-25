import {db} from './firebaseApp'
import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore"; 


export const getData =  async (col) => {
    const querySnapshot = await getDocs(query(collection(db, col), orderBy("order")));
    let load = []
    querySnapshot.forEach((doc) => {
        load.push(doc.data())
        console.log(load);
    });
    return load
}

export const writeData = async (col, obj) => {
    await setDoc(doc(db, col, obj.url), obj ).then(() => {
        console.log("Document Written")
    })
}