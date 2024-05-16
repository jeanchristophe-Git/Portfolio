

export default function Playpage() {
  return (
    <div  className="mt-8 " >
      <h1>Boutons- style</h1>
      <hr className="  " />
      <div className="flex space-x-5 mt-4 ">
        <button className=" bg-slate-200  border border-gray-400 px-6 py-2 rounded-md " >hello</button>
        <button className=" bg-slate-200 hover:bg-slate-300 border duration-150 border-gray-400 px-3 py-2 rounded-md " >hello</button>
        <button className=" bg-slate-800 hover:bg-slate-700 border duration-150 border-gray-400 px-3 py-2 rounded-md text-slate-200 " >hello</button>
      </div>
      <h1  className="mt-5" >Card- style</h1>
      <hr className="  " />
      <div className=" grid  grid-cols-3 gap-3 " >
        <div className="bg-red-300  " >hello</div>
        <div className="bg-red-300  " >hello</div>
        <div className="bg-red-300" >hello</div>
        <div className="bg-red-300  " >hello</div>
        <div className="bg-red-300 " >hello</div>
      </div>

    </div>
  )
}
