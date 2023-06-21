
import { clearAlerts } from "../redux/slices/alertsSlice";

export const closeAlertAfterDelay = () => (dispatch) => {   
   setTimeout(() => {
     dispatch(clearAlerts());
   }, 1000);
 };
