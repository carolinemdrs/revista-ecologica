const initialState = [
        {
            id: "01",
            cardImage: "https://s2.glbimg.com/XWng__XqLsGtJlCjl0PF0m2bQtk=/0x0:1700x1065/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/q/M/xq2KEPRYua3FCXERzAhQ/guepardo6.jpg",
            cardTitle: "Guepardo",
            cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            fullText: " Guepardo Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
            categoria: "",
        },   

        {
            id: "02",
            cardImage: "https://aventurasnahistoria.uol.com.br/media/_versions/capaamaz34we_widelg.jpg",
            cardTitle: "Amazônia",
            cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            fullText: " Amazônia Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
            categoria: "",
        },  

        {
            id: "03",
            cardImage: "https://ipoema.org.br/wp-content/uploads/2018/08/agrofloresta.png",
            cardTitle: "Agrofloresta",
            cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            fullText: " Agrofloresta Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
            categoria: "",
        },
        {
            id: "04",
            cardImage: "https://i0.wp.com/www.marluvas.com.br/wp-content/uploads/2019/06/turismo-de-aventura-1080x675.jpg",
            cardTitle: "Ecoturismo",
            cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            fullText: " Agrofloresta Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
            categoria: "",
        },

        {
            id: "05",
            cardImage: "https://www.estudopratico.com.br/wp-content/uploads/2018/12/camadas-terra.jpg",
            cardTitle: "Geociencia",
            cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            fullText: " Agrofloresta Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
            categoria: "",
        },

        {
            id: "06",
            cardImage: "https://www.nasa.gov/sites/default/files/thumbnails/image/ngc6357_0.jpg",
            cardTitle: "Galáxias",
            cardText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            fullText: " Agrofloresta Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
            categoria: "",
        },

    
];
  
  const cardList = (state = initialState, action) => {
    switch (action.type) {
        case " ":
            return [ ...state, action.payload];
        default:
            return state;
    }
  };
  
  export default cardList;