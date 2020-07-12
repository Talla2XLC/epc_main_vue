export default {
  state: () => ({
    name: "Nupi",
    fullName: "Пластиковый трубопровод Nupi",
    imagePosition: {
      l: {
        top: 0,
        right: 0
      },
      m: {
        top: -48,
        right: 210
      },
      s: {
        top: 30,
        right: 120
      }
    },
    products: [
      {
        name: "SingleWall",
        fullName: "Одностенный трубопровод для АЗС"
      },
      {
        name: "DoubleWall",
        fullName: "Двустенный трубопровод для АЗС"
      },
      {
        name: "LPG",
        fullName: "Трубопровод для транспортировки газа"
      }
    ]
  })
};
