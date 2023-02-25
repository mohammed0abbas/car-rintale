//define Global static variable for fakejson
export const fakejson = [
    {
        "id": 1,
        "brand" : {
            "id": 1,
            "name": "BMW"
        },
        "model" : {
            "id": 1,
            "name": "M3"
        },
        "price": 50,
        "maxPassengers": 4,
        "transmission": 1,
        "cylinders": 6,
        "color" : "yellow",
        "image" : "https://platform.cstatic-images.com/in/v2/1c370bca-31d8-5098-b6b4-e466d57f63df/c34dc5c5-45e4-4d3f-be89-94443df9ed1a/v_6MoZFe7YQBADhgES0tZyMoQek.jpg"
    },
    {
        "id": 2,
        "brand" : {
            "id": 2,
            "name": "KIA"
        },
        "model" : {
            "id": 2,
            "name": "Sorento"
        },
        "price": 50,
        "maxPassengers": 4,
        "transmission": 1,
        "cylinders": 4,
        "color" : "blue",
        "image" : "https://carsguide-res.cloudinary.com/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Ct_default/v1/editorial/2023-Kia-Sorento-Hybrid-AWD-1001x565.jpg"
    },
    {
        "id": 3,
        "brand" : {
            "id": 3,
            "name": "Hyunda"
        },
        "model" : {
            "id": 3,
            "name": "Elantra"
        },
        "price": 50,
        "maxPassengers": 4,
        "transmission" : 1,
        "cylinders": 4,
        "color" : "white",
        "image" : "https://file.kelleybluebookimages.com/kbb/base/house/2020/2020-Hyundai-Elantra-FrontSide_HYELYN2001_640x480.jpg"
    },
    {
        "id": 4,
        "brand" : {
            "id": 4,
            "name": "Ford"
        },
        "model" : {
            "id": 4,
            "name": "Mustang"
        },
        "price": 50,
        "maxPassengers": 4,
        "transmission" : 1,
        "cylinders": 4,
        "color" : "red",
        "image" : "https://www.gannett-cdn.com/-mm-/fd55aff88bacbdbb626b2eaaf31f543af44321c0/c=161-0-2839-1513/local/-/media/2017/10/21/DetroitFreeP/DetroitFreePress/636442231826739491-2018-Ford-Mustang-GT-12.jpg"
    },
    {
        "id": 5,
        "brand" : {
            "id": 5,
            "name": "Doge"
        },
        "model" : {
            "id": 5,
            "name": "charger"
        },
        "price": 50,
        "maxPassengers": 4,
        "transmission" : 1,
        "cylinders": 6,
        "color" : "white",
        "image" : "https://www.autotrader.com/wp-content/uploads/2021/09/2022-dodge-charger-hellcat-front.jpg"
    },
    {
        "id": 6,
        "brand" : {
            "id": 6,
            "name": "Toyota"
        },
        "model" : {
            "id": 6,
            "name": "Camry"
        },
        "price": 50,
        "maxPassengers": 4,
        "transmission" : 1,
        "cylinders": 4,
        "color" : "silver",
        "image" : "https://cdn-ds.com/blogs-media/sites/426/2022/02/25205353/XLE-shown-Wind-Chill-Pearl-with-available-Driver-Assist-Package-and-panoramic-glass-roof-with-front-power-tiltslide-moonroof_o.jpg"
    },
    {
        "id": 7,
        "brand" : {
            "id": 5,
            "name": "Doge"
        },
        "model" : {
            "id": 7,
            "name": "RAM"
        },
        "price": 50,
        "maxPassengers": 4,
        "transmission" : 1,
        "cylinders": 8,
        "color" : "black",
        "image" : "https://dealerinspire-image-library-prod.s3.us-east-1.amazonaws.com/images/Ch3RKjWSdmUT69MFhsWzzis84lWpJU7lM3zySSYT.jpg"
    },
    {
        "id": 8,
        "brand" : {
            "id": 8,
            "name": "Chevrolet"
        },
        "model" : {
            "id": 8,
            "name": "Camaro"
        },
        "price": 50,
        "maxPassengers": 4,
        "transmission" : 1,
        "cylinders": 4,
        "color" : "gray",
        "image" : "https://upload.wikimedia.org/wikipedia/commons/2/2f/2019_Chevrolet_Camaro_base%2C_front_11.9.19.jpg"
    }
]


export const brands = ()=>{
    return fakejson.map((item)=>{
        return item.brand;
    });
}

export const models = ()=>{
    return fakejson.map((item)=>{
        return item.model;
    });
}


export const prices = ()=>{
    return fakejson.map((item)=>{

        return item.price;
    });
}

