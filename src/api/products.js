export class Products{
    endpoint = "https://127.0.0.1:3006/productsbycategory"

    async obtainProducts(){
        try {
            const response = await fetch(this.endpoint);
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            const result = await response.json();
            return result;
        } catch (err) {
            console.log(err);
        }
    }
}