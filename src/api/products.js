export class Products{
    endpoint = "http://localhost:3000/productsbycategory"

    async obtainProducts(categoryName){
        const response = await fetch(this.endpoint+'?category='+categoryName);
        const result = await response.json();
        return result;
    }
}