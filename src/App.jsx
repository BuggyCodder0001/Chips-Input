import { useState } from "react"


export default function App() {

    const [input , setInput] = useState("");
    const [tags , setTags] = useState([]);

    
    function handelTag(e){
        if(e.key === "Enter" && input.trim() !== ""){
            setTags((prev) => [...prev , input]);
            setInput("");
        }
    }

    function handelDelete(index) {
        const copyTags = [...tags];
        copyTags.splice(index,1);
        setTags(copyTags);
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <div>
                <h2 className="text-xl font-bold text-center mt-7 mb-6">Tags Input</h2>
                <input 
                    type="text" 
                    placeholder="Enter the Tags.."
                    className="border px-5 py-2 outline-none rounded-xl"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => handelTag(e)}
                />
            </div>
                
            <div className="flex gap-5">
                {
                    tags.map((tag,index) => <div className="w-30 mt-6 bg-gray-300 font-medium px-3 py-2 rounded-lg  flex justify-between">
                        {tag}

                        <button onClick={() => handelDelete(index)} className="text-red-700 font-bold">X</button>
                    </div> )
                }
            </div>
        </div>
    )
}