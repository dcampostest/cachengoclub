export class Categories{
    endpoint = "http://localhost:8080/categories"

    async obtain(){
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