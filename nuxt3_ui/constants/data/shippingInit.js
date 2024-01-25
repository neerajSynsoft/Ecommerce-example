module.exports = {
  shippingCourierTypes: ['jne', 'siCepat', 'sap', 'iDexpress', 'jNt'],
  shippingCourierItems: {
    "jne": {
      val: "jne", label: "JNE Express", imageSrc: require("~/assets/img/shipping-couriers/JNE.png")
    },
    "siCepat": {
      val: "siCepat", label: "SiCepat Express", imageSrc: require("~/assets/img/shipping-couriers/Sicepat.svg"),
    },
    "sap": {
      val: "sap", label: "SAP Express", imageSrc: require("~/assets/img/shipping-couriers/SAP.svg")
    },
    "iDexpress": {
      val: "iDexpress", label: "iDexpress", imageSrc: require("~/assets/img/shipping-couriers/iDexpress.png")
    },
    "jNt": {
      val: "jNt", label: "J&T Express", imageSrc: require("~/assets/img/shipping-couriers/JT.png")
    }
  }
}