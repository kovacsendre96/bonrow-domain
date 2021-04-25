const albums = [{
    title: ' Albumcím / dátum / Város',
    pictures: [
        {
            id: 1,
            src: "images/Gin Tonic album/gintonic_1.jpg",
        },
        {
            id: 2,
            src: `images/Gin Tonic album/gintonic_2.jpg`,
        },
        {
            id: 3,
            src: `images/Gin Tonic album/gintonic_3.jpg`,
        },
        {
            id: 4,
            src: `images/Gin Tonic album/gintonic_4.jpg`,
        },
        {
            id: 5,
            src: `images/Gin Tonic album/gintonic_5.jpg`,
        },
        {
            id: 6,
            src: `images/Gin Tonic album/gintonic_6.jpg`,
        },
        {
            id: 7,
            src: `images/Gin Tonic album/gintonic_7.jpg`,
        },
        {
            id: 8,
            src: `images/Gin Tonic album/gintonic_8.jpg`,
        },
        {
            id: 9,
            src: `images/Gin Tonic album/gintonic_9.jpg`,
        },
        {
            id: 10,
            src: `images/Gin Tonic album/gintonic_10.jpg`,
        },
        {
            id: 11,
            src: `images/Gin Tonic album/gintonic_11.jpg`,
        },
        {
            id: 12,
            src: `images/Gin Tonic album/gintonic_12.jpg`,
        },
        {
            id: 13,
            src: `images/Gin Tonic album/gintonic_13.jpg`,
        },
    ]
},
{
    title: "Gin Tonic / 2020 / Szeged",
    pictures: [
        {
            id: 1,
            src: "images/Gin Tonic album/gintonic_1.jpg",
        },
        {
            id: 2,
            src: `images/Gin Tonic album/gintonic_2.jpg`,
        },
        {
            id: 3,
            src: `images/Gin Tonic album/gintonic_3.jpg`,
        },
        {
            id: 4,
            src: `images/Gin Tonic album/gintonic_4.jpg`,
        },
        {
            id: 5,
            src: `images/Gin Tonic album/gintonic_5.jpg`,
        },
        {
            id: 6,
            src: `images/Gin Tonic album/gintonic_6.jpg`,
        },
        {
            id: 7,
            src: `images/Gin Tonic album/gintonic_7.jpg`,
        },
        {
            id: 8,
            src: `images/Gin Tonic album/gintonic_8.jpg`,
        },
        {
            id: 9,
            src: `images/Gin Tonic album/gintonic_9.jpg`,
        },
        {
            id: 10,
            src: `images/Gin Tonic album/gintonic_10.jpg`,
        },
        {
            id: 11,
            src: `images/Gin Tonic album/gintonic_11.jpg`,
        },
        {
            id: 12,
            src: `images/Gin Tonic album/gintonic_12.jpg`,
        },
        {
            id: 13,
            src: `images/Gin Tonic album/gintonic_13.jpg`,
        },
        
    ],
},
]

const imageWrapper = document.querySelector('.image-wrapper');
const albumSelect = document.querySelector('.album-select');









const wholeGallery = albums.map(album =>
    `<p class="album-title">${album.title}</p>
        
        ${album.pictures.map(pic => `<a href="${pic.src}" data-lightbox="mygallery"> <img src="${pic.src}" alt="${pic.src}"></a>`)}
        `
        
        )

    

albumSelect.addEventListener('change', (e) => {
    if (e.target.value === 'Gin Tonic') {

        imageWrapper.innerHTML = wholeGallery[1];
    }

    if (e.target.value === 'All') {

        imageWrapper.innerHTML = wholeGallery;
    }
})
imageWrapper.innerHTML = wholeGallery;

console.log(wholeGallery)


