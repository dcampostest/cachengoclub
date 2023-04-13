export class Categories{
    endpoint = "http://localhost:3000/categories"

    async obtain(){
        const response = await fetch(this.endpoint);
        const result = await response.json();
        return result;
    }
}