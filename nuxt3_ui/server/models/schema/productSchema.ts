import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const product = new Schema({
    user_id: { type: Schema.Types.ObjectId },
    sub_user_id: { type: Schema.Types.ObjectId },
    user: Object,

    name: String,
    formOption: String,
    // productCode: String,
    url: { type: String},
    images: Array,
    category: String,
    category2: String,
    category3: String,
    status: String,
    committed:{ type: Number, default: 0 },
    in: { type: Number, default: 0 },
    price: Number,
    priceCompare: Number,
    costPerItem: Number,
   
    enableSplitPrice: { type: Boolean, default: false },
    splitPriceData: Array,
    
    chargeTax: { type: Boolean, default: false },
    whosale: { type: Boolean, default: false },
    whosaleData: Array,
    type: { type: String, default: 'simple' },
    multiplyVariations: { type: Boolean, default: false },
    cartOrder: { type: Boolean, default: true },
    addQuantity: { type: Boolean, default: false },
    marketPlaceStyle: { type: Boolean, default: true },
    attributes: Array,
    variablePrices: Array,
    variantImages: Array,
    SKU: String,
    barcode: String,
    trackQuantity: { type: Boolean, default: false },
    continueSelling: { type: Boolean, default: false },
    available: { type: Number, default: 0 },
    stockStatus: String,
    settingRedirect: String,
    settingRedirectUrl: String,
    settingRedirectMessage: String,
    settingRedirectWAnumber: String,
    settingRedirectWAnumbers: Array,
    // stockManagement:{type: Boolean, default: false},
    // stockQuantity:{type: Number, default: 0},
    // backOrders: String,

    weight: Number,
    addShipping: { type: Boolean, default: false },
    shippingType: String,
    courier: String,
    jne: { type: Boolean, default: false },
    siCepat: { type: Boolean, default: false },
    sap: { type: Boolean, default: false },
    iDexpress: { type: Boolean, default: false },
    jNt: { type: Boolean, default: false },
    flatShippingPrice: Number,
    shippingServices: Object,
    shipFrom: String,
    additionalCost: Number,
    shippingHideView: { type: Boolean, default: false },   
    paymentHideView: { type: Boolean, default: false },   

    paymentType: Array,
    bankTransferSettings: {type: Array, default: []},
    CODSettings: Object,
    epaymentSettings: Object,
    isUniqueCode: { type: Boolean, default: false },
    codeType: String,
    codeMin: Number,
    codeMax: Number,
    assignTo: Array,
    assignToRates: Object,
    assignToForms: Object,
    bumpArray: {type: Array, default: []},
    courierType: {type: Array, default: []},
    isBump: { type: Boolean, default: false },
    bumpName: String,
    bumpPrice: Number,
    bumpWeight: Number,
    bumpImage: String,
    bumpText1: String,
    bumpText2: String,
    bumpText3: String,
    bumpBorder: String,
    bumpBackground: String,

    followUpText: Object,
    paidDate: Date,

    tracks: Array,
    trackForms: { type: Number, default: 0 },

    ordersCount: { type: Number, default: 0 },
    paidCount: { type: Number, default: 0 },
    soldCount: { type: Number, default: 0 },
    netRevenue: { type: Number, default: 0 },

    isDeleted: { type: Boolean, default: false },
    notificationData: {
        type: Object,
        default: {
            emails: [],
            telegramIds: [],
        }
    },
    isSaveInfoNextTime: { type: Boolean, default: false },
    showContentBullet: { type: Boolean, default: false },
    showProductImages: { type: Boolean, default: false },
    showBumpProduct: { type: Boolean, default: false },
    orderSummary: { type: Boolean, default: false },
    isPoweredBy: { type: Boolean, default: true },
    bumpOrderCount: { type: Number, default: 0 },
    isCaptchaEnable: { type: Boolean, default: false },
    captchaSettings: { type: Object, default: {} },
    enableProductOptions: { type: Boolean, default: false },
    enableExcludeShipping: { type: Boolean, default: true },
    enableSettingRedirect: { type: Boolean, default: false },
    excludeShipping: {type: String, default: "exclude"},
    excludeShippingLocation: {type: Array, default: []},
    shippingDiscount: { type: Object,        
        default: {
            status:false,
            type: "fixed",
            value: 0,
        }
        },
    saveInfoLabel: String,
    saveInfoWithoutEnable: { type: Boolean, default: false },
    isShowStrikethrough:{ type: Boolean, default: false },
    showRatingItemSold: { type: Boolean, default: true },
    showTestimonials: { type: Boolean, default: true },
    showOrderReview: { type: Boolean, default: true },
    showCreateOrder: { type: Boolean, default: true },
    showBumpProductStep1: { type: Boolean, default: true },
    showOtherContent: { type: Boolean, default: false },
    otherContent: String,
    otherContentTitle: String,

}, {
    collection: 'product',
    timestamps: true
})


product.index({ url: 1, isDeleted: 1, user_id: 1 })
product.index({ category: 1, isDeleted: 1 })
product.index({ category2: 1, isDeleted: 1 })
product.index({ category3: 1, isDeleted: 1 })

export default product