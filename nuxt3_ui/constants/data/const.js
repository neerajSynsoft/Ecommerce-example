export const STATUS_ACTIVE = 'active'
export const STATUS_DRAFT = 'draft'

export const TEMPLATE_SIDEBAR_RIGHT = 'RightSidebar'
export const TEMPLATE_SIDEBAR_LEFT = 'LeftSidebar'
export const TEMPLATE_SIDEBAR_NO = 'NoSidebar'

export const followUpTextDefault = {
  Welcome: {
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
  {{bank_accounts}}`
  }, OrderDetail: {
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
  {{bank_accounts}}`
  },

  FollowUp1: {
    codText: `Hari ini mau transfer jam berapa {{name}}?
  Pesanan kami siapkan ya...`,
    nonCodText: `Hari ini mau transfer jam berapa {{name}}?
  Pesanan kami siapkan ya...`
  },
  FollowUp2: {
    codText: `Selamat siang {{name}}... Pesanan {{product_name}} sudah siap kirim ya... ☺🙏🏻`,
    nonCodText: `Selamat siang {{name}}... Pesanan {{product_name}} sudah siap kirim ya... ☺🙏🏻`,
  },
  FollowUp3: {
    codText: `Selamat siang, promo untuk pembelian {{product_name}} HARI INI
  Diskon Rp10.000 ya.. ☺🙏🏻`,
    nonCodText: `Selamat siang, promo untuk pembelian {{product_name}} HARI INI
  Diskon Rp10.000 ya.. ☺🙏🏻`
  },

  FollowUp4: {
    codText: `Selamat siang {{name}},
  Produk {{product_name}} laris manis nih, stok kami sisa 5 item saja ya...
  Jangan sampe kehabisan ☺🙏🏻`,
    nonCodText: `Selamat siang {{name}},
  Produk {{product_name}} laris manis nih, stok kami sisa 5 item saja ya...
  Jangan sampe kehabisan ☺🙏🏻`
  },
  Processing: {
    codText: `Pembayaran dari {{name}} untuk pembelian {{product_name}} senilai {{total_price}} telah kami terima, pesanan anda kini kami proses.`,
    nonCodText: `Pembayaran dari {{name}} untuk pembelian {{product_name}} senilai {{total_price}} telah kami terima, pesanan anda kini kami proses.`
  },
  Completed: {
    codText: `Terima kasih {{name}} sudah belanja di toko kami 🙏🏻`,
    nonCodText: `Terima kasih {{name}} sudah belanja di toko kami 🙏🏻`
  },
  UpSelling: {
    codText: `Halo, kami lagi ada promo khusus hanya untuk anda {{name}}
  - Produk XYZ, dari Rp180.000 jadi cuma Rp140rb aja ☺
  Stok terbatas ya, pesan sekarang sebelum kehabisan...️`,
    nonCodText: `Halo, kami lagi ada promo khusus hanya untuk anda {{name}}
  - Produk XYZ, dari Rp180.000 jadi cuma Rp140rb aja ☺
  Stok terbatas ya, pesan sekarang sebelum kehabisan...️`,

  },
  Redirect: {
    codText: `Halo, saya sudah melakukan pemesanan {{product_name}}, atas nama {{name}}. Mohon segera diproses ya 🙏🏻`,
    nonCodText: `Halo, saya sudah melakukan pemesanan {{product_name}}, atas nama {{name}}. Mohon segera diproses ya 🙏🏻`
  },
}

export const followUpAbandonTextDefault = {
  FollowUp1A: {
    label: "Follow up 1",
    codText: "Hari ini mau transfer jam berapa {{name}}? Pesanan kami siapkan ya... {{link}}",
    nonCodText: "Hari ini mau transfer jam berapa {{name}}? Pesanan kami siapkan ya... {{link}}",
    type: "abandon"
  }
}