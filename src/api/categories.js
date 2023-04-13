export class Categories{
    endpoint = "http://167.172.233.9:3000/categories"

    async obtain(){
        const response = await fetch(this.endpoint);
        const result = await response.json();
        return result;
    }
}