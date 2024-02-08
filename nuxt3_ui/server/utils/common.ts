import User from "~/server/models/userModel.js";
// import moment from 'moment';
// import Order from '../models/mongodb/mengantar/order';
// import Receiver from '../models/mongodb/mengantar/receiver';
// import Batch from '../models/mongodb/mengantar/batch';
// import OrderSi from '../models/mongodb/mengantar/orderSiCepat';
// import ReceiverSi from '../models/mongodb/mengantar/receiverSiCepat';
// import BatchSi from '../models/mongodb/mengantar/batchSiCepat';
// import OrderSap from '../models/mongodb/mengantar-sap/orderSap';
// import ReceiverSap from '../models/mongodb/mengantar-sap/receiverSap';
// import BatchSap from '../models/mongodb/mengantar-sap/batchSap';
// import OrderiDExpress from '../models/mongodb/mengantar-iDexpress/orderiDexpress';
// import ReceiveriDExpress from '../models/mongodb/mengantar-iDexpress/receiveriDExpress';
// import BatchiDExpress from '../models/mongodb/mengantar-iDexpress/batchiDExpress';
// import OrderJT from '../models/mongodb/mengantar-JT/orderJT';
// import ReceiverJT from '../models/mongodb/mengantar-JT/receiverJT';
// import BatchJT from '../models/mongodb/mengantar-JT/batchJT';
// import Authorization from '../models/mongodb/mengantar/authorization';
// import Reconciliation from '../models/mongodb/reconciliation';
// import ReconciliationSi from '../models/mongodb/reconciliationSiCepat';
// import ReconciliationSap from '../models/mongodb/mengantar-sap/reconciliation';
// import ReconciliationiDexpress from '../models/mongodb/mengantar-iDexpress/reconciliation';
// import ReconciliationJT from '../models/mongodb/mengantar-JT/reconciliation';

export default {
    getSelectedDayDateRange(req:any) {
        // ... (unchanged)
    },
    checkAuthorization: async (user_id:any, token:any, admin:any = null) => {
        // ... (unchanged)
    },
    getModel: (courier:any, type:any) => {
        // ... (unchanged)
    },
    getOrderCourierUrl(courier:any) {
        // ... (unchanged)
    },
    allowAccess: async (cookie:any, key:string|string[], callback?:(arg:boolean) => {}) => {
        let allowAccess = true;
       // key= typeof key=="string" ? key : 
       let adminKey="";
       let newKey="";
        if(typeof key =="object" && key && key.length > 1){
            adminKey= key[1];
            newKey=key[0];
        }else if(typeof key === "string"){
            newKey=key;
        }
        const cUser=cookie.user ? JSON.parse(cookie.user) : "";
        let [user]:any= "";        
        if(cUser){
            [user] = await User.get({ _id: cUser.id })           
            if(user){
                user = user.toJSON()
            }
        }       
        // if (cookie.user && JSON.parse(cookie.user) && JSON.parse(cookie.user).formPermissions && !JSON.parse(cookie.user).formPermissions[newKey]) {
        if (user && user.formPermissions && !user.formPermissions[newKey]) {
            allowAccess = false;
        }

        // Check array type permission passed for viewAllProducts and viewAllorders.
        if(user && user.subuserRole=="Admin" && adminKey){
           if (user && user.formPermissions && user.formPermissions[adminKey]) {
                allowAccess = true;                      
            }
        }
        if(callback && typeof callback=="function"){
            callback(allowAccess);
        }else{
            return allowAccess;
        }
        
    },
};
