"use client"

import useLocalStorage from "@/hooks/useLocalStoege"

export default function Page() {
    const [num, setNum] = useLocalStorage<number>("nume", 100)
    return (
        <div>
            <span>{num}</span>
            <button onClick={() => setNum(+num +1)}>inc</button>
        </div>
    )
}