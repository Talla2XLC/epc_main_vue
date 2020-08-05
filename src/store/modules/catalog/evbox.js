export default {
  state: () => ({
    name: "EVBox",
    fullName: "Станции зарядки электромобилей EVBox",
    imagePosition: {
      l: {
        top: 0,
        right: 150
      },
      m: {
        top: 0,
        right: 150
      },
      s: {
        top: 70,
        right: 593
      }
    },
    products: [
      {
        name: "Elvi",
        fullName: "Станция зарядки для дома Elvi"
      },
      {
        name: "BusinessLine",
        fullName: "Станция зарядки для бизнеса BusinessLine"
      },
      {
        name: "Iqon",
        fullName: "Станция зарядки для бизнеса Iqon"
      },
      {
        name: "PublicLine",
        fullName: "Станция зарядки для города PublicLine"
      },
      {
        name: "Troniq",
        fullName: "Станция быстрой зарядки Troniq DC"
      }
    ]
  })
};
