export class Products{
    endpoint = "http://localhost:3000/productsbycategory"

    async obtainProducts(categoryName){
        try {
            const response = await fetch(this.endpoint+'?category='+categoryName, {
                method: 'GET',
                headers: {
                accept: 'application/json',
                },
            });
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