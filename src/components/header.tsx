import Image from "next/image";


export function Header() {
  return (
    <header className="flex justify-between p-4 bg-slate-100">
      <div className="flex gap-2 w-1/2 ">
        <input 
          type="text" 
          name="" 
          id="" 
          placeholder="O que você procura?"
          className="border border-black w-full px-2 rounded-xl"

        />
        <button 
          className="bg-green-400 text-black px-4 rounded-xl"
        >
          Pesquisar
        </button>
      </div>

      <Image 
        src="/perfil.png" 
        alt="Avatar" 
        width={50} 
        height={50} 
      />
    </header>
  )
}