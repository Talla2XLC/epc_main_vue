export default {
  state: () => ({
    name: "PlugMe",
    fullName: "PlugMe",
    partnerDescription:
      "Сервис для владельцев электромобилей по управлению зарядными станциями " +
      "всех известных производителей на территории РФ, " +
      "обеспечивающий монетизацию зарядки и сбор статистики. " +
      "Его миссия заключается в том, чтобы показать автолюбителю преимущество использования " +
      "электрокара в повседневной жизни и расширить границы его перемещения внутри города и за его пределами.",
    styles: {
      xl: {
        imagePosition: {
          top: 0,
          right: 0
        }
      },
      l: {
        imagePosition: {
          top: 0,
          right: 0
        }
      },
      m: {
        imagePosition: {
          top: -20,
          right: 0
        }
      },
      s: {
        imagePosition: {
          top: 0,
          right: 0
        },
        imageSrc: require(`@/assets/images/Partners/plugme/plugme_r2.png`)
      }
    }
  })
};
