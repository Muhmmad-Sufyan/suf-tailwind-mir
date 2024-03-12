import axios from "axios";
import { basicUrl } from "../../constant";
import { repairCategoryList } from "./repairCategorySlice";
import { logoutUserAction } from "../../utils/helper";

const repairCategoryListAciton = () => (dispatch) => {
    axios.get(`${basicUrl}repairCategories`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
        .then((res) => {
            dispatch(repairCategoryList(res.data));
        })
        .catch((err) => {
            logoutUserAction(err);

            // if (err?.response?.status === 401) {
            //     localStorage.removeItem("token");
            // }
        })
        .finally(() => {
            // Any cleanup or finalization code can go here
        });
};

export default repairCategoryListAciton