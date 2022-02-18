import {createSignal} from "solid-js"

export default  ()=>{
    const [count, setCount] = createSignal(0);

    return(
        <div className="h-auto w-auto p-6 mt-8 rounded-lg bg-green-200 border border-green-300">
            <div>No Of Clicks ={count()}</div>
            <button className="bg-indigo-800 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count() + 1)}>Add One</button>
        </div>
    )
}