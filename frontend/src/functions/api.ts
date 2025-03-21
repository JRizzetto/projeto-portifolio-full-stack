const baseURL = process.env.NEXT_PUBLIC_API_URL

export async function httpGet(url: string) {
    if (!baseURL) throw new Error("NEXT_PUBLIC_API_URL não está definido!");

    const fullUrl = new URL(url, baseURL).toString();  
    console.log("Chamando URL:", fullUrl);  // Depuração
    const response = await fetch(fullUrl);

    if (!response.ok) {
        throw new Error(`Erro ao buscar dados: ${response.statusText}`);
    }
    return response.json();
}
