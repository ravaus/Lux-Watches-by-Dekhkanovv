const rolexWatches = [
    {
        id: 1,
        collection: "Submariner",
        name: "Oyster Perpetual Submariner Date",
        specs: "Oystersteel, 41 mm case, Black dial",
        price: "$9,550",
        image: "https://frezerhouse.ru/upload/r/2100/upload/iblock/955/7wciw86tqjf14lk14mraon81pfklglk4/rolex-submariner-no-date-41mm-2024-year-124060-new.jpeg",
        limited: false
    },
    {
        id: 2,
        collection: "Submariner",
        name: "Oyster Perpetual Submariner Date",
        specs: "Yellow Rolesor, 41 mm, Blue dial",
        price: "$15,350",
        image: "https://img.chrono24.com/images/uhren/29351680-q5a5w2fotj0jsk0fzcw8gtfd-ExtraLarge.jpg",
        limited: false
    },
    {
        id: 3,
        collection: "GMT-Master II",
        name: "Oyster Perpetual GMT-Master II",
        specs: "Everose Rolesor, 40 mm, Black & Brown",
        price: "$18,800",
        image: "https://www.bedetti.it/rolex-certified-pre-owned/wp-content/uploads/2023/10/F090932_00-1.jpg",
        limited: true
    },
    {
        id: 4,
        collection: "Daytona",
        name: "Oyster Perpetual Cosmograph Daytona",
        specs: "Oystersteel, 40 mm, White dial",
        price: "$14,550",
        image: "https://www.phigora.com/cdn/shop/files/rolex-oyster-perpetual-date-gmt-master-ii-126715chnr-mens-watch-box-papers-370858_1024x1024.jpg",
        limited: true
    },
    {
        id: 5,
        collection: "Datejust",
        name: "Oyster Perpetual Datejust 41",
        specs: "Oystersteel & White Gold, Blue dial",
        price: "$10,350",
        image: "https://avatars.mds.yandex.net/i?id=496d26e08f2474cb1fc9daf032afb4a9f2eed0ad-5233919-images-thumbs&n=13",
        limited: false
    },
    {
        id: 6,
        collection: "Day-Date",
        name: "Oyster Perpetual Day-Date 40",
        specs: "18k Everose Gold, Chocolate dial",
        price: "$38,650",
        image: "https://img.chrono24.com/images/uhren/31583367-g4kevg0xlw8rg9dofhx8thaz-ExtraLarge.jpg",
        limited: true
    },
    {
        id: 7,
        collection: "Explorer",
        name: "Oyster Perpetual Explorer II",
        specs: "Oystersteel, 42 mm, White dial",
        price: "$9,650",
        image: "https://avatars.mds.yandex.net/i?id=0813d8f9f53d4571831bfc79c12c5e48e5150216-5235867-images-thumbs&n=13",
        limited: false
    },
    {
        id: 8,
        collection: "Sea-Dweller",
        name: "Oyster Perpetual Sea-Dweller",
        specs: "Oystersteel, 43 mm, Black dial",
        price: "$12,550",
        image: "https://images.squarespace-cdn.com/content/v1/59249a1ec6fc08d043656eb4/1627351818968-CEWKYFOU65BQ476FOKVT/IMG_20210727_115658.jpg",
        limited: false
    },
    {
        id: 9,
        collection: "Yacht-Master",
        name: "Oyster Perpetual Yacht-Master 40",
        specs: "18k Everose Gold, Chocolate dial",
        price: "$28,400",
        image: "https://cdn2.chrono24.com/images/uhren/22846035-dt6dtbo0sxuq4ewl8sgi0jb6-ExtraLarge.jpg",
        limited: false
    },
    {
        id: 10,
        collection: "Oyster Perpetual",
        name: "Oyster Perpetual 41",
        specs: "Oystersteel, Turquoise blue dial",
        price: "$6,150",
        image: "https://i.ebayimg.com/images/g/bnsAAOSw7Ahfyp0~/s-l1600.jpg",
        limited: false
    },
    {
        id: 11,
        collection: "Sky-Dweller",
        name: "Oyster Perpetual Sky-Dweller",
        specs: "18k Yellow Gold, 42 mm, Champagne",
        price: "$44,400",
        image: "https://img.chrono24.com/images/uhren/22945553-xr0nm0izli2wuxglfftp16xx-ExtraLarge.jpg",
        limited: true
    },
    {
        id: 12,
        collection: "Air-King",
        name: "Oyster Perpetual Air-King",
        specs: "Oystersteel, 40 mm, Black dial",
        price: "$7,150",
        image: "https://i.pinimg.com/originals/43/c3/1a/43c31a7c887633ade81c6045df488e21.jpg",
        limited: false
    },
    {
        id: 13,
        collection: "Submariner",
        name: "Oyster Perpetual Submariner",
        specs: "Oystersteel, 41 mm, No Date, Black",
        price: "$8,550",
        image: "https://sutorhouse.s3.us-east-2.amazonaws.com/wp-content/uploads/2020/10/07134727/A77508FA-4EA3-4CD9-B7FA-6919BC8EC6F0-scaled.jpeg",
        limited: false
    },
    {
        id: 14,
        collection: "Daytona",
        name: "Oyster Perpetual Cosmograph Daytona",
        specs: "18k White Gold, 40 mm, Ice Blue dial",
        price: "$37,850",
        image: "https://avatars.dzeninfra.ru/get-zen_doc/9400491/pub_6421749c0f941d091448b797_642174e07eb49d4e1823b92b/scale_1200",
        limited: true
    },
    {
        id: 15,
        collection: "GMT-Master II",
        name: "Oyster Perpetual GMT-Master II",
        specs: "Oystersteel, 40 mm, Pepsi Bezel",
        price: "$10,450",
        image: "https://www.watchandjewelryexchange.com/cdn/shop/collections/9bee1f34d45031fc73c264c0ec9d3bf6_800x800.jpg",
        limited: true
    },
    {
        id: 16,
        collection: "Datejust",
        name: "Oyster Perpetual Lady-Datejust",
        specs: "Everose Gold & Diamonds, 28 mm",
        price: "$24,350",
        image: "https://avatars.mds.yandex.net/i?id=c18656d2b90a8b5378e5ab1394f78a3fc1f29b0b-10231830-images-thumbs&n=13",
        limited: false
    },
    {
        id: 17,
        collection: "Yacht-Master",
        name: "Oyster Perpetual Yacht-Master 42",
        specs: "18k White Gold, Black dial",
        price: "$32,650",
        image: "https://watchesmaster.ru/uploads/cache/CatalogProducts/images_52534/e426c0_h508.jpeg",
        limited: false
    },
    {
        id: 18,
        collection: "Explorer",
        name: "Oyster Perpetual Explorer",
        specs: "Oystersteel, 36 mm, Black dial",
        price: "$7,350",
        image: "https://avatars.mds.yandex.net/i?id=ba216eb2b4e59dd1128beb65e0d08558a98e0ea7-16482013-images-thumbs&n=13",
        limited: false
    },
    {
        id: 19,
        collection: "Day-Date",
        name: "Oyster Perpetual Day-Date 36",
        specs: "18k Yellow Gold, Champagne dial",
        price: "$35,850",
        image: "https://avatars.mds.yandex.net/i?id=f1a968db85a59babcc4900ea1a9bdde9f7761703-9100075-images-thumbs&n=13",
        limited: true
    },
    {
        id: 20,
        collection: "Sea-Dweller",
        name: "Oyster Perpetual Rolex Deepsea",
        specs: "Oystersteel, 44 mm, D-Blue dial",
        price: "$13,650",
        image: "https://img.chrono24.com/images/uhren/28270277-72hrrk6dqskpi9hztonjxmoc-ExtraLarge.jpg",
        limited: false
    }
];

function renderWatches() {
    const grid = document.getElementById('watchesGrid');

    rolexWatches.forEach(watch => {
        const card = document.createElement('div');
        card.className = 'watch-card';
        card.style.cursor = 'pointer';

        card.innerHTML = `
            ${watch.limited ? '<div class="limited-badge">Limited Edition</div>' : ''}
            <div class="watch-image-container">
                <img src="${watch.image}" alt="${watch.name}" loading="lazy">
            </div>
            <div class="watch-info">
                <div class="watch-collection">${watch.collection}</div>
                <h3 class="watch-name">${watch.name}</h3>
                <p class="watch-specs">${watch.specs}</p>
                <div class="watch-footer">
                    <div class="watch-price">${watch.price}</div>
                    <button class="add-to-cart-btn" data-id="${watch.id}">View Model</button>
                </div>
            </div>
        `;
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('add-to-cart-btn')) {
                window.location.href = `single-rolex.html?id=${watch.id}`;
            }
        });

        const button = card.querySelector('.add-to-cart-btn');
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            window.location.href = `single-rolex.html?id=${watch.id}`;
        });

        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderWatches);