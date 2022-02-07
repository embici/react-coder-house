// const products = [
//     {
//         id: 1,
//         title: 'Trek 2000',
//         description: 'La mejor bici del condado.',
//         price: 950,
//         pictureURL: 'https://trek.scene7.com/is/image/TrekBicycleProducts/Marlin8_21_34649_A_Portrait?$responsive-pjpg$&cache=on,on&wid=1920&hei=1440'

//     },
//     {
//         id: 2,
//         title: 'Casco Rocket',
//         description: 'El casco es seguridad',
//         price: 35,
//         pictureURL: 'https://www.kask.com/media/spin-objects/bike_protone_3d/9_12_protone_sim_3D_22.jpg'

//     },
//     {
//         id: 3,
//         title: 'Jacket Gris',
//         description: 'Para estar abrigado en invierno',
//         price: 30,
//         pictureURL: 'https://alecycling.com/6046-large_default/19-026.jpg'

//     }
// ]


// const promesa = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(products);
//     },2000);
// });


const getProducts = () => {
    return fetch('http://localhost:3000/products').then(response => {return response.json()});
}

export {
    getProducts,
};