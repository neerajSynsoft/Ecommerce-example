module.exports = {
  id: {
    orderCreated: `
📥 Ada Pesanan Baru! - 🛒 {{product_name}}

Wow, ada pesanan baru! 🥳 Cepat cek detailnya dan siap-siap kirim! 📦

🔢 Order ID: {{order_id}}
👤 Nama Customer: {{name}}
📞 Nomor HP: {{customer_number}}
🏠 Alamat: {{address}}
🛒 Nama Produk: {{product_name}}

✈️ Ekspedisi: {{courier}}
📦 Ongkos Kirim: {{shippingPrice}}
💰 Total: {{total_price}}
`,
orderCreatedSub: `atau kamu juga bisa klik link ini untuk follow up : `,
orderCompleted: `
✅ Pesanan Sudah Selesai

Yay, pesanan sudah komplit! 🥳 Langkah selanjutnya, next order! 🚀

🔢 Order ID: {{order_id}}
👤 Nama Customer: {{name}}
📞 Nomor HP: {{customer_number}} 
🏠 Alamat: {{address}}
🛒 Nama Produk: {{product_name}}

🔖 No Resi: {{cnote_no}}
✈️ Ekspedisi: {{courier}}
📦 Ongkos Kirim: {{shippingPrice}}
💰 Total: {{total_price}}
`,
    orderPaid: `
💳 Pesanan Sudah Terbayar

Kabar gembira! 🎉 Uang sudah masuk, ayo siapkan paketnya! 📦

🔢 Order ID: {{order_id}}
👤 Nama Customer: {{name}}
📞 Nomor HP: {{customer_number}} 
🏠 Alamat: {{address}}
🛒 Nama Produk: {{product_name}}
🔖 No Resi: {{cnote_no}}
✈️ Ekspedisi: {{courier}}
📦 Ongkos Kirim: {{shippingPrice}}
💰 Total: {{total_price}}
` ,
    orderPaidAndCompleted: `
🎉 Pesanan Sudah Selesai dan Terbayar

Double hore! 🥳 Pesanan komplit dan juga sudah dibayar! Keep it up!

🔢 Order ID: {{order_id}}
👤 Nama Customer: {{name}}
📞 Nomor HP: {{customer_number}} 
🏠 Alamat: {{address}}
🛒 Nama Produk: {{product_name}}

🔖 No Resi: {{cnote_no}}
✈️ Ekspedisi: {{courier}}
📦 Ongkos Kirim: {{shippingPrice}}
💰 Total: {{total_price}}
`,
    orderShipment: `
🚚 Nomor Resi Pesanan Berhasil Terbuat 
Pesanan sudah punya nomor resi! 🎉 Siap dikirim via {{courier}}! 🚚

🔢 Order ID: {{order_id}}
👤 Nama Customer: {{name}}
📞 Nomor HP: {{customer_number}} 
🏠 Alamat: {{address}}
🛒 Nama Produk: {{product_name}}

✈️ Ekspedisi: {{courier}}
🔖 No Resi: {{cnote_no}}
💰 COD: {{codFee}}
💰 NON-COD: {{total_price}}
`
  },
  en: {
    orderCreated: `
📥 New Orders Available! - 🛒 {{product_name}}

Wow, there are new orders! 🥳 Quickly check the details and get ready to send! 📦

🔢 Order ID: {{order_id}}
👤 Customer Name: {{name}}
📞 Mobile Number: {{customer_number}}
🏠 Address: {{address}}
🛒 Product Name: {{product_name}}

✈️ Expedition: {{courier}}
📦 Shipping Cost: {{shippingPrice}}
💰 Total: {{total_price}}
`,
orderCreatedSub: `or you can click this link to followup : `,
    orderCompleted: `
✅ Order Completed

Yay, the order is complete! 🥳 Next step, next order! 🚀

🔢 Order ID: {{order_id}}
👤 Customer Name: {{name}}
📞 Mobile Number: {{customer_number}}
🏠 Address: {{address}}
🛒 Product Name: {{product_name}}

🔖 Receipt Number: {{cnote_no}}
✈️ Expedition: {{courier}}
📦 Shipping Costs: {{shippingPrice}}
💰 Total: {{total_price}}
`,
    orderPaid: `
💳 Order has been paid

Good news! 🎉 The money has arrived, lets prepare the package! 📦

🔢 Order ID: {{order_id}}
👤 Customer Name: {{name}}
📞 Mobile Number: {{customer_number}}
🏠 Address: {{address}}
🛒 Product Name: {{product_name}}
🔖 Receipt Number: {{cnote_no}}
✈️ Expedition: {{courier}}
📦 Shipping Costs: {{shippingPrice}}
💰 Total: {{total_price}}
` ,
    orderPaidAndCompleted: `
🎉 Order has been completed and paid

Double hooray! 🥳 Order complete and paid for! Keep it up!

🔢 Order ID: {{order_id}}
👤 Customer Name: {{name}}
📞 Mobile Number: {{customer_number}}
🏠 Address: {{address}}
🛒 Product Name: {{product_name}}

🔖 Receipt Number: {{cnote_no}}
✈️ Expedition: {{courier}}
📦 Shipping Costs: {{shippingPrice}}
💰 Total: {{total_price}}
`,
    orderShipment: `
🚚 Order Receipt Number Successfully Created
Orders already have a tracking number! 🎉 Ready to be sent via {{courier}}! 🚚

🔢 Order ID: {{order_id}}
👤 Customer Name: {{name}}
📞 Mobile Number: {{customer_number}}
🏠 Address: {{address}}
🛒 Product Name: {{product_name}}

✈️ Expedition: {{courier}}
🔖 Receipt Number: {{cnote_no}}
💰 COD: {{codFee}}
💰 NON-COD: {{total_price}}

`
  }
}
