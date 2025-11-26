const watchesOmega = [
    {
        id: 1,
        collection: "Speedmaster",
        name: "Moonwatch Professional",
        description: "The legendary Moonwatch, first timepiece worn on the Moon during Apollo 11 mission",
        size: "42mm",
        movement: "Manual",
        price: "$6,500",
        badge: "Iconic",
        image: "https://avatars.mds.yandex.net/i?id=85bce5f3621c9a72598e325dc529d048_l-5386437-images-thumbs&n=13"
    },
    {
        id: 2,
        collection: "Seamaster",
        name: "Diver 300M",
        description: "Professional diving instrument with exceptional performance and wave-patterned dial",
        size: "42mm",
        movement: "Automatic",
        price: "$5,400",
        badge: "",
        image: "https://avatars.mds.yandex.net/i?id=5bd37432d5a36560c2480f8f25e981b5_l-16314617-images-thumbs&n=13"
    },
    {
        id: 3,
        collection: "Constellation",
        name: "Co-Axial Master",
        description: "Elegant timepiece featuring the constellation star and iconic claws design",
        size: "38mm",
        movement: "Co-Axial",
        price: "$7,200",
        badge: "",
        image: "https://samiwatches.com/wp-content/uploads/2023/10/304.23.44.52.13.001-scaled.webp"
    },
    {
        id: 4,
        collection: "Speedmaster",
        name: "Racing Chronograph",
        description: "Motorsport-inspired chronograph with distinctive racing aesthetics",
        size: "44.25mm",
        movement: "Automatic",
        price: "$4,800",
        badge: "",
        image: "https://i.pinimg.com/736x/d7/9d/19/d79d19fddaaadc5637e62ffb505a3b23.jpg"
    },
    {
        id: 5,
        collection: "Seamaster",
        name: "Aqua Terra",
        description: "Versatile timepiece combining nautical heritage with refined elegance",
        size: "41mm",
        movement: "Co-Axial",
        price: "$5,900",
        badge: "New",
        image: "https://content.thewosgroup.com/productimage/17331331/17331331_3.jpg"
    },
    {
        id: 6,
        collection: "De Ville",
        name: "Prestige",
        description: "Classic dress watch embodying timeless sophistication and refinement",
        size: "36.8mm",
        movement: "Quartz",
        price: "$4,200",
        badge: "",
        image: "https://samiwatches.com/wp-content/uploads/2023/06/424.13.40.21.01.001-1-scaled.webp"
    },
    {
        id: 7,
        collection: "Speedmaster",
        name: "'57 Edition",
        description: "Contemporary interpretation of the original 1957 Speedmaster",
        size: "40.5mm",
        movement: "Co-Axial",
        price: "$6,800",
        badge: "Limited",
        image: "https://avatars.mds.yandex.net/i?id=c1e621963b4f55ba7f80e1e620ba1ba5_l-4890288-images-thumbs&n=13"
    },
    {
        id: 8,
        collection: "Seamaster",
        name: "Planet Ocean",
        description: "Professional diving instrument engineered for extreme underwater exploration",
        size: "43.5mm",
        movement: "Co-Axial",
        price: "$6,200",
        badge: "",
        image: "https://content1.hourstriker.com/images/dbitems/omega-planet-ocean-chronograph-600m-21523465103001-4-19-2024.jpg"
    },
    {
        id: 9,
        collection: "Constellation",
        name: "Globemaster",
        description: "First timepiece to achieve Master Chronometer certification",
        size: "39mm",
        movement: "Master Chronometer",
        price: "$7,800",
        badge: "",
        image: "https://img.chrono24.com/images/uhren/37578395-5oh8r2usxayf88gpxs9vaeo8-ExtraLarge.jpg"
    },
    {
        id: 10,
        collection: "Speedmaster",
        name: "Reduced",
        description: "Compact alternative to the classic Speedmaster with automatic movement",
        size: "39mm",
        movement: "Automatic",
        price: "$3,800",
        badge: "",
        image: "https://img.chrono24.com/images/uhren/35647621-bioq7abdk4wgfondmw70dmau-ExtraLarge.jpg"
    },
    {
        id: 11,
        collection: "Seamaster",
        name: "300 Heritage",
        description: "Heritage-inspired diving instrument with contemporary technology",
        size: "41mm",
        movement: "Master Chronometer",
        price: "$6,600",
        badge: "",
        image: "https://thewatchobserver.ouest-france.fr/wp-content/uploads/2023/08/montre-de-plongee-omega-seamaster-300-summer-blue-avis.jpg"
    },
    {
        id: 12,
        collection: "De Ville",
        name: "Trésor",
        description: "Refined dress watch celebrating OMEGA's rich horological heritage",
        size: "40mm",
        movement: "Manual",
        price: "$5,500",
        badge: "",
        image: "https://d3m9l0v76dty0.cloudfront.net/system/photos/6812566/original/e27ca6e153312239677d784cbe887349.jpg"
    },
    {
        id: 13,
        collection: "Speedmaster",
        name: "Dark Side of the Moon",
        description: "All-black ceramic chronograph with contemporary avant-garde design",
        size: "44.25mm",
        movement: "Co-Axial",
        price: "$9,200",
        badge: "Limited",
        image: "https://avatars.mds.yandex.net/i?id=66e1d369737c169dd862ef1e4bd76b2dbed7bbab-5257789-images-thumbs&n=13"
    },
    {
        id: 14,
        collection: "Constellation",
        name: "Manhattan",
        description: "Iconic women's timepiece with distinctive integrated bracelet design",
        size: "29mm",
        movement: "Co-Axial",
        price: "$6,400",
        badge: "",
        image: "https://i.etsystatic.com/17114943/r/il/c7c172/4857676665/il_fullxfull.4857676665_64sl.jpg"
    },
    {
        id: 15,
        collection: "Seamaster",
        name: "Professional 300M",
        description: "The timepiece that defined modern professional diving instruments",
        size: "42mm",
        movement: "Automatic",
        price: "$4,900",
        badge: "",
        image: "https://www.watchvaultnyc.com/assets/images/images/websiteimages/inventory/UI911_01.jpg"
    },
    {
        id: 16,
        collection: "Speedmaster",
        name: "Broad Arrow",
        description: "Distinctive chronograph featuring unique broad arrow hand design",
        size: "42mm",
        movement: "Co-Axial",
        price: "$5,200",
        badge: "",
        image: "https://thewatchdealers.com.au/wp-content/uploads/2024/01/Rolex-04.08.23-136-scaled.webp"
    },
    {
        id: 17,
        collection: "De Ville",
        name: "Hour Vision",
        description: "Sophisticated complication timepiece with annual calendar function",
        size: "41mm",
        movement: "Co-Axial",
        price: "$7,500",
        badge: "New",
        image: "https://vip-replika.ru/wa-data/public/shop/products/86/41/14186/images/19476/19476.970.jpg"
    },
    {
        id: 18,
        collection: "Seamaster",
        name: "Bullhead",
        description: "Distinctive vintage-inspired chronograph with top-mounted pushers",
        size: "43mm",
        movement: "Chronograph",
        price: "$5,600",
        badge: "",
        image: "https://img.chrono24.com/images/uhren/18279218-nzo6ag3u6pspauzd3qdomavh-ExtraLarge.jpg"
    },
    {
        id: 19,
        collection: "Constellation",
        name: "Day-Date",
        description: "Elegant complication featuring day and date display functions",
        size: "38mm",
        movement: "Co-Axial",
        price: "$6,900",
        badge: "",
        image: "https://img.chrono24.com/images/uhren/36466734-rgwqvnqgvtnoguhm07eg2obi-ExtraLarge.jpg"
    },
    {
        id: 20,
        collection: "Speedmaster",
        name: "Apollo 11 50th Anniversary",
        description: "Limited edition commemorating fifty years since the Moon landing",
        size: "42mm",
        movement: "Manual",
        price: "$9,650",
        badge: "Limited",
        image: "https://img.chrono24.com/images/uhren/37379361-4rlbtt0c1406j7xsu9ysdbwx-ExtraLarge.jpg"
    }
];

function renderWatches(watchesToRender) {
    const grid = document.getElementById('watchGrid');
    grid.innerHTML = '';

    watchesToRender.forEach(watch => {
        const card = document.createElement('div');
        card.className = 'watch-card';
        card.style.cursor = 'pointer';
        card.innerHTML = `
            <div class="watch-image">
                ${watch.badge ? `<span class="watch-badge">${watch.badge}</span>` : ''}
                <img src="${watch.image}" alt="${watch.name}">
            </div>
            <div class="watch-info">
                <div class="watch-collection">${watch.collection}</div>
                <h3 class="watch-name">${watch.name}</h3>
                <p class="watch-description">${watch.description}</p>
                <div class="watch-specs">
                    <div class="watch-spec">
                        <i class="fas fa-circle"></i>
                        <span>${watch.size}</span>
                    </div>
                    <div class="watch-spec">
                        <i class="fas fa-cog"></i>
                        <span>${watch.movement}</span>
                    </div>
                </div>
                <div class="watch-footer">
                    <div class="watch-price">${watch.price}</div>
                    <div class="watch-cta">
                        <button class="btn-primary" onclick="event.stopPropagation()">View Details</button>
                    </div>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            window.location.href = `single-omega.html?id=${watch.id}`;
        });
        
        const button = card.querySelector('.btn-primary');
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            window.location.href = `single-omega.html?id=${watch.id}`;
        });
        
        grid.appendChild(card);
    });
}

function filterWatches(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'all') {
        renderWatches(watchesOmega);
    } else {
        const filtered = watchesOmega.filter(watch => watch.collection === category);
        renderWatches(filtered);
    }
}
renderWatches(watchesOmega);