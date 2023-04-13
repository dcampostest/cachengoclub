export class Categories{
    endpoint = "167.172.233.9:8080/categories"

    async obtain(){
        try {
            const response = await fetch(this.endpoint, {
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