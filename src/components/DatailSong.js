import React, { useContext } from "react";
import { Songs } from "./context";
export default function DetailSong(){
    const {song} =useContext(Songs)
    return(
        <div className="col-span-1 p-3">
            <h2 className="text-cyan-500 font-bold text-left">Now player</h2>
            <h2 className=" text-neutral-400 text-2xl text-left">{song.name}</h2>
            <div className=" w-[240px] mt-10">
                <img className="w-full" src={song.links.images[0].url} alt=""/>
            </div>
            <div className="flex justify-evenly items-center mt-10 ">
                <img className=" w-[70px] rounded-full" src={song.links.images[1].url} alt=""/>
                <span className="text-xl text-white">{song.author}</span>
            </div>
        </div>
    )
}
