import Image from "next/image"

export default function MiniCV() {
	return (
		<div className="flex-1 flex flex-col-reverse gap-6 md:flex-row lg:flex-col-reverse xl:flex-row items-center md:items-start lg:items-center xl:items-start bg-black border border-zinc-800 rounded-2xl px-6 pt-6">
			<div className="relative min-w-72 h-64 xl:self-end ">
				<Image src="/minha-foto.png" alt="Foto do Perfil" fill />
			</div>

			<div className="flex flex-col gap-5 self-center py-6 items-center md:items-start lg:items-center xl:items-start">
				<div className="flex flex-col items-start md:items-start lg:items-center xl:items-start">
					<span className="bg-gradient-to-r from-red-500 via-white to-white text-transparent bg-clip-text text-2xl font-bold">
						Jefferson Rizzzetto
					</span>
					<span>Desenvolvedor web Front_end</span>
				</div>
				<p className="text-sm text-center md:text-left lg:text-center xl:text-left">
					Engenheiro Eletricista/Eletrônico, pós-graduando em Inteligência Artificial e
					Ciência de Dados. Estudante de Desenvolvimento Web Front-End, com conhecimentos
					em HTML, CSS, JavaScript, React, Bootstrap e Tailwind. Busco aprimorar minhas
					habilidades em tecnologias modernas para criar interfaces dinâmicas e
					responsivas.
				</p>
			</div>
		</div>
	)
}
