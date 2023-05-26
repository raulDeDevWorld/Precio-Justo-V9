import { supabase } from './config'

const onAuth = (userDB, setUserProfile, setUserData) => {
    supabase.auth.onAuthStateChange((event, session) => {
        setUserProfile(session)
        const rol = session.user.id
        console.log(session.user.id)
        readUserData('Users', rol, userDB, setUserData)
      })
}

const signUpWithEmailAndPassword = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    })
}

const signInWithEmailAndPassword = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })
}

const signOut = async (email, password) => {
    const { error } = await supabase.auth.signOut()
}



const writeUserData = async (rute, object) => {
    const result = await supabase
    .from(rute)
    .insert(object)
}
const readUserData = async (rute, uuid, userDB, setUserData) => {
    const result = await supabase
    .from(rute)
    .select()
    .eq('uuid', uuid)
    setUserData({...userDB, [rute]: result.data[0]})  
}



export { onAuth, signUpWithEmailAndPassword, signInWithEmailAndPassword, signOut, writeUserData, readUserData}

