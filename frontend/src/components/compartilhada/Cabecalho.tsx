import Container from "./Container"
import Image from "next/image"
import Link from "next/link"
import Menu from "./Menu"

export default function Cabecalho() {
	return (
		<header className="w-full flex items-center h-16 bg-black/50">
			<Container className="flex-1 flex justify-center sm:justify-between items-center">
				<div className="flex gap-10 items-center">
					<Link href="/" className="hidden sm:block">
						<Image src="/logo.svg" alt="Logo" width={80} height={80} />
					</Link>
                    <Menu />
				</div>

                <div className="hidden sm:flex items-center">
				<Link
					href="https://www.linkedin.com/in/jefferson-rizzetto/"
					target="_blank"
					className="bg-red-500 rounded-full px-7 py-1 text-sm font"
				>
					Perfil
				</Link>
                </div>
			</Container>
		</header>
	)
}
