
export const currentPostAction = (id)=>{
    return{
        type: "SET_CURRENT_POST",
        id,
    }
}