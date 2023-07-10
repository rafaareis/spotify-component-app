import { useState } from "react";

import Render from "./Render/Render";

import axios from "axios";

const Form = ({ token }) => {
    const [searchKey, setSearchKey] = useState("");
    const [artists, setArtists] = useState([]);

    const searchArtists = async(e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
            Authorization: `Bearer ${token}`
            },
            params: {
            q: searchKey,
            type: "artist",
            limit: 1
            }
        })

        setArtists(data.artists.items);
        console.log(data.artists.items);
    }



    return (
        <>
            <div className="container-nav-form">
                <form onSubmit={searchArtists}>
                    <input type="text" onChange={e => setSearchKey(e.target.value)} />
                    <button type={"submit"}>Search</button>
                </form>
            </div>


            <Render artists={artists}/>
        </>
    )
}

export default Form