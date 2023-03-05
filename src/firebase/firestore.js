import {db} from './firebaseApp'
import { collection, doc, getDocs, onSnapshot, orderBy, query, setDoc } from "firebase/firestore";
import { useStateValue } from '../context/stateProvider';
import { useEffect } from 'react';

const useCollListener = () => {
    const [state, dispatch] = useStateValue()

    useEffect(() => {
        const q = query(collection(db, "routes"), orderBy("order"))

        const listen = onSnapshot(q, (qSnap) => {
                console.log("Collection Listener: RUNNING")
                let arr = []
                qSnap.forEach(doc => {
                    // console.log(doc.data())
                    arr.push(doc.data())
                })
                dispatch({
                    type: "SET-ROUTES",
                    name: "routes",
                    load: arr
                })
                // console.log("Collection Listener: COMPLETE")
            })
            window.addEventListener("listen", listen)

            return () => {
                window.removeEventListener("listen", listen)
            }

    }, [])
}

export default useCollListener

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