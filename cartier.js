const watches = [
    {
        id: 1,
        collection: "Tank",
        name: "Tank Louis Cartier",
        description: "Iconic rectangular case in yellow gold with roman numerals",
        size: "33.7mm",
        movement: "Manual",
        price: "$18,500",
        badge: "Iconic",
        image: "https://cdn1.ozone.ru/s3/multimedia-d/c600/6638877409.jpg"
    },
    {
        id: 2,
        collection: "Santos",
        name: "Santos de Cartier",
        description: "Steel and gold with QuickSwitch interchangeable strap system",
        size: "39.8mm",
        movement: "Automatic",
        price: "$13,200",
        badge: "",
        image: "https://avatars.mds.yandex.net/i?id=df31530342a12de64f2252c771e30540_l-5370538-images-thumbs&n=13"
    },
    {
        id: 3,
        collection: "Panthère",
        name: "Panthère de Cartier",
        description: "Yellow gold bracelet watch with precious stones",
        size: "27mm",
        movement: "Quartz",
        price: "$32,400",
        badge: "New",
        image: "https://www.cartier.com/ru-ru/media/catalog/product/cache/12/thumbnail/1000x1000/0dc2d03fe217f8c83829496872af24a0/l/a/la_panth_re_watch_HPI01426.jpg"
    },
    {
        id: 4,
        collection: "Ballon Bleu",
        name: "Ballon Bleu 42mm",
        description: "Steel case with signature blue balloon crown protection",
        size: "42mm",
        movement: "Automatic",
        price: "$7,850",
        badge: "",
        image: "https://www.cartier.com/ru-ru/media/catalog/product/cache/12/thumbnail/1000x1000/0dc2d03fe217f8c83829496872af24a0/W/G/WGBB0041_00G14WBB.jpg"
    },
    {
        id: 5,
        collection: "Tank",
        name: "Tank Must",
        description: "Steel case with champagne dial and blue sword hands",
        size: "33.7mm",
        movement: "Quartz",
        price: "$3,250",
        badge: "",
        image: "https://i.pinimg.com/736x/4a/a4/64/4aa464536b9688e46fbfdb4d08b20e40.jpg"
    },
    {
        id: 6,
        collection: "Santos",
        name: "Santos-Dumont XL",
        description: "Extra-large rose gold case with manual winding",
        size: "43.5mm",
        movement: "Manual",
        price: "$22,700",
        badge: "Limited",
        image: "https://avatars.mds.yandex.net/i?id=b2433db5aa689c4aa04255d8061baecef820f769-8497168-images-thumbs&n=13"
    },
    {
        id: 7,
        collection: "Ballon Bleu",
        name: "Ballon Bleu Diamond",
        description: "Pink gold with diamond-set bezel and guilloche dial",
        size: "36mm",
        movement: "Automatic",
        price: "$28,900",
        badge: "",
        image: "https://avatars.mds.yandex.net/i?id=9c139d9409e98733093b273dac9d1a4922d5a4722e2a926c-12321751-images-thumbs&n=13"
    },
    {
        id: 8,
        collection: "Tank",
        name: "Tank Américaine",
        description: "White gold elongated case with classic Cartier styling",
        size: "41.6mm",
        movement: "Automatic",
        price: "$24,100",
        badge: "",
        image: "https://i.pinimg.com/736x/4a/a4/64/4aa464536b9688e46fbfdb4d08b20e40.jpg"
    },
    {
        id: 9,
        collection: "Panthère",
        name: "Panthère Mini",
        description: "Two-tone yellow gold and steel bracelet design",
        size: "22mm",
        movement: "Quartz",
        price: "$8,950",
        badge: "",
        image: "https://avatars.mds.yandex.net/i?id=7967580fa4e72ca5a9000006eb52df53_sr-4884345-images-thumbs&n=13"
    },
    {
        id: 10,
        collection: "Santos",
        name: "Santos Skeleton",
        description: "Steel case with visible Roman numeral bridge architecture",
        size: "39.8mm",
        movement: "Manual",
        price: "$29,500",
        badge: "Exclusive",
        image: "https://avatars.mds.yandex.net/i?id=c8fc627c2e2e2955610b0306cc134947d6437baa-4502909-images-thumbs&n=13"
    },
    {
        id: 11,
        collection: "Tank",
        name: "Tank Française",
        description: "Integrated steel bracelet with classic Tank aesthetic",
        size: "36.7mm",
        movement: "Automatic",
        price: "$6,800",
        badge: "",
        image: "https://avatars.mds.yandex.net/i?id=56bfd5e1fad3a3b4b069e430bdf0a28b_l-5537386-images-thumbs&n=13"
    },
    {
        id: 12,
        collection: "Ballon Bleu",
        name: "Ballon Bleu Tourbillon",
        description: "White gold with flying tourbillon visible at six o'clock",
        size: "46mm",
        movement: "Manual",
        price: "$168,000",
        badge: "Limited",
        image: "https://i.pinimg.com/736x/11/e6/f3/11e6f3b5ec518cf859d845e022b66940.jpg"
    },
    {
        id: 13,
        collection: "Santos",
        name: "Santos-Dumont Rewind",
        description: "Large model in steel with hand-wound movement",
        size: "46.6mm",
        movement: "Manual",
        price: "$9,700",
        badge: "",
        image: "https://avatars.mds.yandex.net/i?id=dde8b430e04884557e4b42e5d30a670a19bfed5b-4824599-images-thumbs&n=13"
    },
    {
        id: 14,
        collection: "Panthère",
        name: "Panthère Joaillerie",
        description: "White gold fully pavé-set with diamonds",
        size: "22mm",
        movement: "Quartz",
        price: "$115,000",
        badge: "Exclusive",
        image: "https://i.pinimg.com/736x/28/09/ec/2809ece34a4a4b03a34da1af2ea21aaa.jpg"
    },
    {
        id: 15,
        collection: "Tank",
        name: "Tank Asymétrique",
        description: "Platinum case with distinctive tilted case design",
        size: "47mm",
        movement: "Manual",
        price: "$42,500",
        badge: "New",
        image: "https://yandex-images.clstorage.net/9UEu8J354/dd1a16cyqFd/5xNdkrJ1bZrarqN8VY_o3fzBDz3U2TzA_T7Thea8pLXYyvcqTVgOki-WNPD32ocXRivBTCh_ewXA9zx23E91TbFDycMl5K2bn7xh71MM7Nivxl_4hF99wSt9xwq9dDrpFoH79lEH0YDuVXTlZdxVxFwxxVO07uAb0edy8UpYqFQmW5gVuqDn35S8KLlbyG-V7UTP9c9Qp8s6KhkBMH43Zd9ON7EcCF5P4pP_YKMK1coRdBPcueLgU1mpMTzNlGCYLpAYnTfs4Jtd_OQ9UkdjWCWDTXGLG-WDN6XWyDpweuTfxnH_lAfeA-1eNmipgxkPn_3cH3chLlpf6733TdXkEWNQW9c2Kq4RmrtudR1EYNHnj0--hpcoCzcimYQxuflsWYO9uB6OmAIqE71ibs-YQ5-0XxK3p6DYny54f4fdK1bkWhVVemtg2RV7LL8bCqtdrYsDOUkfI8Q6Y5NN_n96KdpB83zRQJiDZV-47-7N0odbP1XV_GeoXJXot_ZJE-eTrdTb3LCvZZEe9CV_04LjXmOJAHKFECaOvO8fxPlxPyNfS_T5XYecT-xYv6nqS1XEVvJT271qL9BWIrp4BNzgXaoWl1U46GzeWrEs9xVAbBdjj88-i57jxndpEo6_-fEt3Ir_8VtGHIznkLCuag2Qz1d8G1l4o2Df1-s2_UPVoxpm0tuTvWasFt23bHSazGSSLIlMNE2fqESwoJ6MfnD5K5sENTXbDNeLKpO3Ja_FW80ds5md8CGmWJUiv7lBma3dbpxQE_LnrRiU9id30sTvFmZOiHzBkyVEvOqdwD79_mJYDHR42U5bR6BStSfgQhUJWz-Xm_sq7x2W6b9-TZzh0-yc0dTz5yURE3QgPhNI5RsiSU20xFEpwv8oUUizNDnrlEF9-V7P2U_gFfdip0mZz191kJqx7idVFSi6_0UVpdlmHtPadCDmVVz0pv4Yi2xdbEAMfEGQLQA0oh9PMI"
    },
    {
        id: 16,
        collection: "Ballon Bleu",
        name: "Ballon Bleu Chronograph",
        description: "Rose gold chronograph with pink sunray dial",
        size: "44mm",
        movement: "Automatic",
        price: "$39,800",
        badge: "",
        image: "https://i.ebayimg.com/images/g/zmUAAOSwDFxjrUIv/s-l1600.jpg"
    },
    {
        id: 17,
        collection: "Santos",
        name: "Santos-Dumont Large Gold",
        description: "Yellow gold case with blue roman numerals",
        size: "43.5mm",
        movement: "Manual",
        price: "$19,900",
        badge: "",
        image: "https://avatars.mds.yandex.net/i?id=75af1e0cde26c8536c5f83245c8d71e4e1aa0436-5398918-images-thumbs&n=13"
    },
    {
        id: 18,
        collection: "Tank",
        name: "Tank Cintrée",
        description: "Platinum elongated curved case - a true collector's piece",
        size: "45.1mm",
        movement: "Manual",
        price: "$38,700",
        badge: "Limited",
        image: "https://i.pinimg.com/736x/78/23/f8/7823f85f5a49331a17e0edc654a9984f.jpg"
    },
    {
        id: 19,
        collection: "Panthère",
        name: "Panthère Ceramic",
        description: "Black ceramic and steel with matching lacquered dial",
        size: "27mm",
        movement: "Quartz",
        price: "$11,200",
        badge: "New",
        image: "https://i.pinimg.com/736x/78/23/f8/7823f85f5a49331a17e0edc654a9984f.jpg"
    },
    {
        id: 20,
        collection: "Ballon Bleu",
        name: "Ballon Bleu Moonphase",
        description: "White gold with diamond bezel and moon phase complication",
        size: "42mm",
        movement: "Automatic",
        price: "$54,300",
        badge: "",
        image: "https://avatars.mds.yandex.net/i?id=dc2fba547a38162342b9149c6b8394998b9a9966-5235603-images-thumbs&n=13"
    }
];

function renderWatches(watchesToRender) {
    const grid = document.getElementById('watchGrid');
    if (!grid) return; // not the index page
    grid.innerHTML = '';

    watchesToRender.forEach(watch => {
        const card = document.createElement('div');
        card.className = 'watch-card';
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
                        <button class="icon-btn"><i class="far fa-heart"></i></button>
                        <button class="btn-primary">Discover</button>
                    </div>
                </div>
            </div>
        `;
        card.style.cursor = 'pointer';
        card.onclick = () => {
            window.location.href = `cartier-single.html?id=${encodeURIComponent(watch.id)}`;
        };
        grid.appendChild(card);
    });
}

function filterWatches(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'all') {
        renderWatches(watches);
    } else {
        const filtered = watches.filter(watch => watch.collection === category);
        renderWatches(filtered);
    }
}

// Render watches on index page
if (document.getElementById('watchGrid')) {
    renderWatches(watches);
}

// Render single watch page
function renderSingleFromQuery() {
    const mainImage = document.getElementById('main-watch-image');
    if (!mainImage) return; // not the single page

    const params = new URLSearchParams(window.location.search);
    const idParam = params.get('id');

    if (!idParam) {
        document.getElementById('watch-name').textContent = 'Watch not found';
        document.getElementById('watch-description').textContent = 'No watch id provided in the URL.';
        document.getElementById('watch-price').textContent = '';
        return;
    }

    const id = parseInt(idParam, 10);
    const watch = watches.find(w => w.id === id);

    if (!watch) {
        document.getElementById('watch-name').textContent = 'Watch not found';
        document.getElementById('watch-description').textContent = `No watch with id=${id} found.`;
        document.getElementById('watch-price').textContent = '';
        return;
    }

    // Update badge
    const badgeEl = document.getElementById('watch-badge');
    if (badgeEl) {
        if (watch.badge) {
            badgeEl.textContent = watch.badge;
            badgeEl.style.display = 'block';
        } else {
            badgeEl.style.display = 'none';
        }
    }

    // Update main image
    mainImage.src = watch.image;
    mainImage.alt = watch.name;

    // Update collection tag
    const collectionTag = document.getElementById('collection-tag');
    if (collectionTag) collectionTag.textContent = watch.collection;

    // Update text content
    document.getElementById('watch-name').textContent = watch.name;
    document.getElementById('watch-description').textContent = watch.description;
    document.getElementById('watch-price').textContent = watch.price;

    // Update specs
    const specSize = document.getElementById('spec-size');
    if (specSize) specSize.textContent = watch.size;

    const specMovement = document.getElementById('spec-movement');
    if (specMovement) specMovement.textContent = `Calibre 1847 MC, ${watch.movement.toLowerCase()} winding`;

    // Update material based on collection
    const specMaterial = document.getElementById('spec-material');
    if (specMaterial) {
        let material = 'Stainless Steel';
        if (watch.collection === 'Tank') material = '18K Yellow Gold';
        else if (watch.collection === 'Santos') material = 'Steel & 18K Gold';
        else if (watch.collection === 'Panthère') material = '18K Yellow Gold';
        specMaterial.textContent = material;
    }

    // Update water resistance
    const specWater = document.getElementById('spec-water');
    if (specWater) {
        specWater.textContent = watch.collection === 'Santos' ? '100m' : '30m';
    }

    const bcCollection = document.getElementById('breadcrumb-collection');
    const bcName = document.getElementById('breadcrumb-name');
    if (bcCollection) bcCollection.textContent = watch.collection;
    if (bcName) bcName.textContent = watch.name;
    const likeBtn = document.getElementById('likeBtn');
    if (likeBtn) {
        likeBtn.onclick = function() {
            this.classList.toggle('liked');
            const icon = this.querySelector('i');
            if (this.classList.contains('liked')) {
                icon.className = 'fas fa-heart';
            } else {
                icon.className = 'far fa-heart';
            }
        };
    }
}

renderSingleFromQuery();