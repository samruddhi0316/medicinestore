import axios from "axios";

const BASE_URL = "http://localhost:8081/order";

class OrderService {

    getAllOrder() {
        return axios.get(BASE_URL + "/all");
    }

    saveOrder(order) {
        return axios.post(BASE_URL + "/save", order);
    }

    updateOrder(order) {
        return axios.put(BASE_URL + "/update", order);
    }

    deleteOrder(id) {
        return axios.delete(BASE_URL + "/delete/" + id);
    }

}

const orderService = new OrderService();
export default orderService;