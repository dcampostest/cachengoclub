export class Products{
    endpoint = "http://167.172.233.9:3000/productsbycategory"

    async obtainProducts(categoryName){
        const response = await fetch(this.endpoint+'?category='+categoryName);
        const result = await response.json();
        return result;
    }
}