export function createImage(file: File): Promise<any> {
    return new Promise((resolve: any) => {
        const reader = new FileReader();

        reader.onload = (e: any) => {
            resolve(e.target.result)
        }

        reader.readAsDataURL(file)
    })
}
