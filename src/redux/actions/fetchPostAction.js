import Axios from "axios"

export const fetchPosts = () =>{

    return async (dispatch, getState) => {
        const response = await Axios.get("http://localhost:5000/posts")

        dispatch({
            type: "FETCH_POSTS",
            payload: response.data
        })

    }


}