export default  {
    customAttributeNames: [],
    enableProductOptions: false,
    name: '',
    // productCode: '',
    url: '',
    images: [],
    category: 'Tanpa Kategori',
    category2: '',
    category3: '',
    status: 'active',
    price: '0',
    priceCompare: '',
    costPerItem: '',
    chargeTax: false,
    enableSplitPrice: false,
    splitPriceData: [
    ],
    whosale: false,
    whosaleData: [
        { count: '', price: '' },
    ],

    type: 'simple',
    formOption: 'single',
    multiplyVariations: false,
    cartOrder: false,
    addQuantity: false,
    marketPlaceStyle: true,
    attributes: [],
    variablePrices: [],
    variantImages: [],
    SKU: '',
    barcode: '',
    trackQuantity: false,
    continueSelling: true,
    available: '',
    stockStatus: 'In Stock',
    //   stockManagement: false,
    //   stockQuantity: '',
    //   backOrders:'Allow',

    weight: 1000,
    addShipping: false,
    shippingType: 'automated',
    jne: true,
    siCepat: true,
    sap: true,
    iDexpress: true,
    jNt: true,
    shippingServices: {
        Regular: true,
        NextDay: false,
        Economical: false,
        Trucking: false,
    },
    shipFrom: '',
    additionalCost: '',
    flatShippingPrice: '',
    paymentType: [
        {
            type: 'bankTransfer',
            name: 'Bank Transfer',
            active: false,
        },
        {
            type: 'COD',
            name: 'COD',
            active: false,
        },
        {
            type: 'E-Payment',
            name: 'E-Payment',
            active: false,
        },
    ],
    bankTransfer: true,
    bankTransferSettings: [],
    COD: false,
    CODSettings: {
        description: '',
        percent: 3,
        feeType: 'productShipping',
        courierFeeMin: 0,
        courierFeeMax: '',
        shipping: true,
        smartMode: false,
        couriers: { JNE: true, SiCepat: false }
    },
    epaymentSettings: [
        {
            label: "BCA Virtual Account",
            id: "bca_va",
            setting: {
                description: ''
            },
            active: false
        },
        // {
        //     label: "Credit Card",
        //     id: "credit_card",
        //     setting: {
        //         description: ''
        //     },
        //     active: false
        // },
        {
            label: "GoPay",
            id: "gopay",
            setting: {
                description: ''
            },
            info: "Jika dibuka di Desktop akan memunculkan QR Code dan jika dibuka di Mobile, akan membuka aplikasi Gojek",
            active: false
        },
        // {
        //     label: "Dana",
        //     id: "danamon_online",
        //     setting: {
        //         description: ''
        //     },
        //     info: "Akan memunculkan QR Code di Desktop / Mobile",
        //     active: false
        // },
        // {
        //     label: "Alfamart",
        //     id: "alfamart",
        //     setting: {
        //         description: ''
        //     },
        //     active: false
        // },
        {
            label: "Mandiri Bill",
            id: "echannel",
            setting: {
                description: ''
            },
            active: false
        },
        {
            label: "BNI Virtual Account",
            id: "bni_va",
            setting: {
                description: ''
            },
            active: false
        },
    ],
    isUniqueCode: false,
    codeType: 'Decrease',
    codeMin: 0,
    codeMax: 999,
    assignTo: [],
    assignToRates: {
        users: [],
        ordersDistribution: 'equal',
    },
    isBump: false,
    showBumpProduct: false,    
    bumpName: '',
    bumpPrice: '',
    bumpWeight: '',
    bumpImage: '',
    bumpText1: 'Nama Produk Bump Anda + Harga',
    bumpText2: 'Penjelasan Tentang Produk Bump Anda Disini',
    bumpText3: 'Centang untuk memesan juga',
    bumpBorder: '#F09126',
    bumpBackground: '#FFFFFF',
    isSaveInfoNextTime: false,
    showContentBullet: false,
    isPoweredBy: true,
    bumpArray: [],
    isCaptchaEnable: false, 
    captchaSettings: {
        "setting1": {
            isEnable: true,
            orderCount: 5,
            hours: 24,
            type:"setting1"
        },
        "setting2": {
            isEnable: true,
            orderCount: 10,
            hours: 24,
            type:"setting2"
        },
        "setting3": {
            isEnable: true,
            orderCount: 10,
            hours: 24,
            type:"setting3"
        }
    },
    settingRedirect: ""
}