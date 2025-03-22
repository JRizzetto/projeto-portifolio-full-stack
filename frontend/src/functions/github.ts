export async function obterReadme(repoURL: string) {
	const repositorio = repoURL.split("github.com/")[1]
    const readmeUrl = `https://raw.githubusercontent.com/${repositorio}/main/README.md`
    const resposta = await fetch(readmeUrl)
    return resposta.text()
}
