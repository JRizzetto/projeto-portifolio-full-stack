"use client"
import { useEffect, useState } from "react"

export default function useLocalStorage<T>(chave: string, valorInicial: T) {
	const [valor, setValor] = useState<T>(() => {
		if (typeof window === "undefined") {
			return valorInicial
		}

		try {
			const valorLocal = localStorage.getItem(chave)
			return valorLocal ? JSON.parse(valorLocal) : valorInicial
		} catch (error) {
			console.error("Erro ao acessar localStorage", error)
			return valorInicial
		}
	})

	useEffect(() => {
        if(typeof window !== "undefined") {
            localStorage.setItem(chave, JSON.stringify(valor))
        }
	}, [chave, valor])

	return [valor, setValor] as const
}
