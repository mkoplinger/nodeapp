import axios from 'axios';

class Service {
    public async getMessage() {
        let response = await axios.get(`/api/say_hello`);

        return response.data;
    }
}

export default new Service();
