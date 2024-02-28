import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import RoleSchema from './roleSchema'

const users = new Schema({
    affiliateBalance: { type: Number, default: 0 },
    affiliateWithdraw: { type: Number, default: 0 },
    name: String,
    username: String,
    phone: String, 
    formulirNumber: String, 
    profile_picture: String,
    email: { type: String, unique: true, required: true, dropDups: true },
    password: { type: String, select: false },
    monthly_volume: String,
    sales_chanel: String,
    language: { type: String, default: 'id' },
    theme: { type: String, default: 'light' },
    industry: String,
    is_active: Boolean,
    authorization: {
        id: String,
        name: String
    },
    balance: { type: Number, default: 0 },
    withdrawAmount: Number,
    reconciliationAmount: Number,
    pendingBalance: Number,
    netValue: { type: Number, default: 0 },
    realNetValue: { type: Number, default: 0 },
    rules: [{
        id: String,
        name: String
    }],
    forgot_password: Object,
    discount: { type: Number, default: 15 },
    discountRate: { type: Number, default: 5 },
    last_login: Date,
    whenPickup: Boolean,
    whenDelivered: Boolean,
    whenAttention: Boolean,
    whenAction: Boolean,
    telegramNotification: Boolean,
    whatsAppNotification: { type: Boolean, default: false },
    whatsAppActive: { type: Boolean, default: false },
    whatsAppSession: { type: String, default: "" },
    testWhatsAppFlag: { type: Boolean }, //TEST
    telegramId: String,
    totalParcels: { type: Number, default: 0 },
    totalParcelsDelivered: { type: Number, default: 0 },
    role: { type: String, default: 'user' },
    subuserRole: { type: String, default: 'Customer Service' },
    lastmileRole: { type: String, },
    branch: { type: String, },
    region: { type: String, },
    showMyAddress: { type: Boolean, default: true },
    role_id: { type: Schema.Types.ObjectId, ref: 'Role' },
    changeHistory: Array,
    parentId: String,
    permissions: Object,
    formPermissions: Object,
    schedule: Object,
    clickableNumbers: Boolean,
    showPrintedLabelDate: { type: Boolean, default: false },
    showRemark: { type: Boolean, default: false },
    canDrop: { type: Boolean, default: false },
    lastmile_tickets: { type: Number },
    lastmile_tickets_escalated: { type: Number },
    lastmile_tickets_inprogress: { type: Number },
    lastmile_tickets_done: { type: Number },
    lastmile_tickets_open2: { type: Number },
    lastmile_tickets_open4: { type: Number },
    lastmile_tickets_open6: { type: Number },
    notification: Object,
    requestReturnOption: { type: String, default: '14' },
    returnManagement: { type: Boolean, default: false },
    adminData: Object,
    emails: Array,
    telegram: [{
        notification: Boolean,
        telegramId: String,
        botName: String
    }],
    bankTransferDefault: {
        type: Array, default: [
            {
                label: "BCA",
                id: "bca",
                accountNumber: '',
                accountName: '',
                setting: {
                    description: ''
                },
                active: false
            },
            {
                label: "Mandiri",
                id: "mandiri",
                accountNumber: '',
                accountName: '',
                setting: {
                    description: ''
                },
                active: false
            },
            {
                label: "BNI",
                id: "bni",
                accountNumber: '',
                accountName: '',
                setting: {
                    description: ''
                },
                active: false
            },
            {
                label: "BNI Syariah",
                id: "bni_syariah",
                accountNumber: '',
                accountName: '',
                setting: {
                    description: ''
                },
                active: false
            },
            {
                label: "BRI",
                id: "bri",
                accountNumber: '',
                accountName: '',
                setting: {
                    description: ''
                },
                active: false
            },
            {
                label: "Syariah Mandiri",
                id: "bsm",
                accountNumber: '',
                accountName: '',
                setting: {
                    description: ''
                },
                active: false
            },
            {
                label: "CIMB Niaga",
                id: "cimb",
                accountNumber: '',
                accountName: '',
                setting: {
                    description: ''
                },
                active: false
            },
            {
                label: "CIMB Niaga Syariah",
                id: "cimb_niaga_syariah",
                accountNumber: '',
                accountName: '',
                setting: {
                    description: ''
                },
                active: false
            },
            {
                label: "Muamalat",
                id: "muamalat",
                accountNumber: '',
                accountName: '',
                setting: {
                    description: ''
                },
                active: false
            },
            {
                label: "BTPN",
                id: "tabungan_pensiunan_nasional",
                accountNumber: '',
                accountName: '',
                setting: {
                    description: ''
                },
                active: false
            },
        ]
    },
    orderFields: Object,
    followUpTemplates: {
        type: Array, default: [
            {
                label: 'Welcome',
                key: 'Welcome',
                type: 'order',
                codText: `Selamat datang di Toko kami {{name}} ☺️

            Kami sudah terima pesanan anda dengan rincian sebagai berikut,
            Produk: {{product_name}}
            Harga: {{product_price}}
            Ongkir: {{shipping_cost}}
            Total: {{total_price}}
            
            
            Dikirim ke:
            Nama: {{name}}
            No HP: {{phone}}
            Alamat: {{address}}
            Kota: {{city}}
            Kecamatan: {{district}}
            
            
            Silahkan transfer senilai {{total_price}}, ke salah satu rekening dibawah ini:
            {{bank_accounts}}`,
            nonCodText: `Selamat datang di Toko kami {{name}} ☺️

            Kami sudah terima pesanan anda dengan rincian sebagai berikut,
            Produk: {{product_name}}
            Harga: {{product_price}}
            Ongkir: {{shipping_cost}}
            Total: {{total_price}}
            
            
            Dikirim ke:
            Nama: {{name}}
            No HP: {{phone}}
            Alamat: {{address}}
            Kota: {{city}}
            Kecamatan: {{district}}
            
            
            Silahkan transfer senilai {{total_price}}, ke salah satu rekening dibawah ini:
            {{bank_accounts}}`,
                order: 1,
            },
            {
                label: 'OrderDetail',
                key: 'OrderDetail',
                type: 'order',
                codText: `Pesanan anda:
            Produk: {{product_name}}
            Harga: {{product_price}}
            Ongkir: {{shipping_cost}}
            Total: {{total_price}}
            
            
            Dikirim ke:
            Nama: {{name}}
            No HP: {{phone}}
            Alamat: {{address}}
            Kota: {{city}}
            Kecamatan: {{district}}
            
            
            Silahkan transfer senilai {{total_price}}, ke salah satu rekening dibawah ini:
            {{bank_accounts}}`,
            nonCodText: `Pesanan anda:
            Produk: {{product_name}}
            Harga: {{product_price}}
            Ongkir: {{shipping_cost}}
            Total: {{total_price}}
            
            
            Dikirim ke:
            Nama: {{name}}
            No HP: {{phone}}
            Alamat: {{address}}
            Kota: {{city}}
            Kecamatan: {{district}}
            
            
            Silahkan transfer senilai {{total_price}}, ke salah satu rekening dibawah ini:
            {{bank_accounts}}`,
                order: 1,
            },
            {
                label: 'Follow up 1',
                key: 'FollowUp1',
                type: 'order',
                codText: `Hari ini mau transfer jam berapa {{name}}? Pesanan kami siapkan ya...`,
                nonCodText: `Hari ini mau transfer jam berapa {{name}}? Pesanan kami siapkan ya...`,
                order: 2,
            },
            {
                label: 'Follow up 2',
                key: 'FollowUp2',
                type: 'order',
                codText: `Selamat siang {{name}}... Pesanan {{product_name}} sudah siap kirim ya... ☺🙏🏻`,
                nonCodText: `Selamat siang {{name}}... Pesanan {{product_name}} sudah siap kirim ya... ☺🙏🏻`,
                order: 3,
            },
            {
                label: 'Follow up 3',
                key: 'FollowUp3',
                type: 'order',
                codText: `Selamat siang, promo untuk pembelian {{product_name}} HARI INI Diskon Rp10.000 ya.. ☺🙏🏻`,
                nonCodText: `Selamat siang, promo untuk pembelian {{product_name}} HARI INI Diskon Rp10.000 ya.. ☺🙏🏻`,
                order: 4,
            },
            {
                label: 'Follow up 4',
                key: 'FollowUp4',
                type: 'order',
                codText: `Selamat siang {{name}}, Produk {{product_name}} laris manis nih, stok kami sisa 5 item saja ya... Jangan sampe kehabisan ☺🙏🏻`,
                nonCodText: `Selamat siang {{name}}, Produk {{product_name}} laris manis nih, stok kami sisa 5 item saja ya... Jangan sampe kehabisan ☺🙏🏻`,
                order: 5,
            },
            {
                label: 'Processing',
                key: 'Processing',
                type: 'order',
                codText: `Pembayaran dari {{name}} untuk pembelian {{product_name}} senilai {{total_price}} telah kami terima, pesanan anda kini kami proses.`,
                nonCodText: `Pembayaran dari {{name}} untuk pembelian {{product_name}} senilai {{total_price}} telah kami terima, pesanan anda kini kami proses.`,
                order: 6,
            },
            {
                label: 'Completed',
                key: 'Completed',
                type: 'order',
                codText: `Terima kasih {{name}} sudah belanja di toko kami 🙏🏻`,
                nonCodText: `Terima kasih {{name}} sudah belanja di toko kami 🙏🏻`,
                order: 7,
            },
            {
                label: 'UpSelling',
                key: 'UpSelling',
                type: 'order',
                codText: `Halo, kami lagi ada promo khusus hanya untuk anda {{name}}
            - Produk XYZ, dari Rp180.000 jadi cuma Rp140rb aja ☺
            Stok terbatas ya, pesan sekarang sebelum kehabisan...️`,
                nonCodText: `Halo, kami lagi ada promo khusus hanya untuk anda {{name}}
            - Produk XYZ, dari Rp180.000 jadi cuma Rp140rb aja ☺
            Stok terbatas ya, pesan sekarang sebelum kehabisan...️`,
                order: 8,
            },
            {
                label: 'Redirect',
                key: 'Redirect',
                type: 'order',
                codText: `Halo, saya sudah melakukan pemesanan {{product_name}}, atas nama {{name}}. Mohon segera diproses ya 🙏🏻`,
                nonCodText: `Halo, saya sudah melakukan pemesanan {{product_name}}, atas nama {{name}}. Mohon segera diproses ya 🙏🏻`,
                order: 9,
            },
            {
                label: 'Follow up 1',
                key: 'FollowUp1A',
                type: 'abandon',
                codText: `Hari ini mau transfer jam berapa {{name}}? Pesanan kami siapkan ya...`,
                nonCodText: `Hari ini mau transfer jam berapa {{name}}? Pesanan kami siapkan ya...`,
                order: 10,
            },
            {
                label: 'Unpaid follow up 1',
                key: 'UnpaidfollowUp1',
                type: 'invoice',
                codText: `Hari ini mau transfer jam berapa {{name}}? Pesanan kami siapkan ya...`,
                nonCodText: `Hari ini mau transfer jam berapa {{name}}? Pesanan kami siapkan ya...`,
                order: 11,
            },
            {
                label: 'Unpaid follow up 2',
                key: 'UnpaidfollowUp2',
                type: 'invoice',
                codText: `1Hari ini mau transfer jam berapa {{name}}? Pesanan kami siapkan ya...`,
                nonCodText: `1Hari ini mau transfer jam berapa {{name}}? Pesanan kami siapkan ya...`,
                order: 12,
            },
            {
                label: 'Unpaid follow up 3',
                key: 'UnpaidfollowUp3',
                type: 'invoice',
                codText: `2Hari ini mau transfer jam berapa {{name}}? Pesanan kami siapkan ya...`,
                nonCodText: `2Hari ini mau transfer jam berapa {{name}}? Pesanan kami siapkan ya...`,
                order: 13,
            },
            {
                label: 'Unpaid follow up 4',
                key: 'UnpaidfollowUp4',
                type: 'invoice',
                codText: `3Hari ini mau transfer jam berapa {{name}}? Pesanan kami siapkan ya...`,
                nonCodText: `3Hari ini mau transfer jam berapa {{name}}? Pesanan kami siapkan ya...`,
                order: 14,
            },
            {
                label: 'Thank you follow up',
                key: 'thankyoufollowup',
                type: 'invoice',
                codText: `4Terima kasih {{name}} sudah belanja di toko kami 🙏🏻`,
                nonCodText: `4Terima kasih {{name}} sudah belanja di toko kami 🙏🏻`,
                order: 15,
            },
        ]
    },
    autoWithdraw: { type: Boolean, default: false },
    autoWithdrawAdminDisabled: { type: Boolean, default: false },
    autoWithdrawData: Object,
    isReservedBalance: {type: Boolean},
    isTagged: {type: Boolean},
    isVerifiedEmail: {type: Boolean, default: true},
    isVerifiedPhone: {type: Boolean, default: true},
    documentStatus:  {type: String},
    isEnableFormulir: {type: Boolean, default: false},
    isFormulirUser: {type: Boolean, default: false},
    customAttributeNames: Array,
    attributeValuesList: Object,
    defaultCommission: {type: Number, default: 10},
    commissionType: {type: String, default: 'percentage'},
}, {
    collection: 'users',
    timestamps: true
})


users.index({ username: 1, })
users.index({ role: 1, })
users.index({ role: 1, parentId: 1 })
users.index({ role: 1, parentId: 1, createdAt: 1 })
users.index({  isTagged: 1, isReservedBalance: 1, autoWithdrawAdminDisabled: 1, isVerifiedEmail: 1, isVerifiedPhone: 1 })

export default users