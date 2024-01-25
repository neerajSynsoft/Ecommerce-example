module.exports = [
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
      nonCodText: `Halo, kami lagi ada promo khusus hanya untuk anda {{name}} - Produk XYZ, dari Rp180.000 jadi cuma Rp140rb aja ☺ Stok terbatas ya, pesan sekarang sebelum kehabisan...️`,
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