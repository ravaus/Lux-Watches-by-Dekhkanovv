const watches = [
    {
        id: 1,
        collection: "Calatrava",
        name: "Ref. 5227G-001",
        description: "Ultra-thin mechanical white gold case with Officer's case-back",
        size: "39mm",
        movement: "Automatic",
        price: "$45,200",
        badge: "New",
        image: "https://www.factoryew.com/wp-content/uploads/2023/03/PP-K-5227G-001-1.jpg"
    },
    {
        id: 2,
        collection: "Nautilus",
        name: "Ref. 5711/1A-010",
        description: "Iconic sports luxury watch in stainless steel with blue dial",
        size: "40mm",
        movement: "Automatic",
        price: "$98,750",
        badge: "",
        image: "https://img.chrono24.com/images/uhren/24557659-9sou616tgvqno78stqdbru87-ExtraLarge.jpg"
    },
    {
        id: 3,
        collection: "Complications",
        name: "Ref. 5270G-014",
        description: "Perpetual calendar chronograph in white gold",
        size: "41mm",
        movement: "Manual",
        price: "$185,300",
        badge: "Limited",
        image: "https://i.pinimg.com/originals/cf/83/5a/cf835a5157e351ac4afe2a73ed7a0374.jpg"
    },
    {
        id: 4,
        collection: "Aquanaut",
        name: "Ref. 5167A-001",
        description: "Elegant sport watch with embossed dial and composite strap",
        size: "40mm",
        movement: "Automatic",
        price: "$52,900",
        badge: "",
        image: "https://img.chrono24.com/images/uhren/22609922-3zqm3p1a3fnj27927af75p0v-Large.jpg"
    },
    {
        id: 5,
        collection: "Calatrava",
        name: "Ref. 5196R-001",
        description: "Rose gold case with silvery opaline dial and applied gold hour markers",
        size: "37mm",
        movement: "Manual",
        price: "$38,450",
        badge: "",
        image: "https://avatars.mds.yandex.net/i?id=e43112520f16618978dfa3effd2826a2d7d12488-6946654-images-thumbs&n=13"
    },
    {
        id: 6,
        collection: "Nautilus",
        name: "Ref. 5712/1A-001",
        description: "Moon phase and power reserve indicator in stainless steel",
        size: "40mm",
        movement: "Automatic",
        price: "$125,600",
        badge: "Exclusive",
        image: "https://i.pinimg.com/originals/cc/29/b9/cc29b9234df5b9ed80854afba598032f.jpg"
    },
    {
        id: 7,
        collection: "Complications",
        name: "Ref. 5205G-001",
        description: "Annual calendar with white gold case and moon phase display",
        size: "40mm",
        movement: "Automatic",
        price: "$68,900",
        badge: "",
        image: "https://img.chrono24.com/images/uhren/42700542-uyjyg2m6od9so0dqvi30erww-ExtraLarge.jpg"
    },
    {
        id: 8,
        collection: "Calatrava",
        name: "Ref. 5119G-001",
        description: "Classic elegance in white gold with hobnail bezel",
        size: "36mm",
        movement: "Manual",
        price: "$42,100",
        badge: "",
        image: "https://img.chrono24.com/images/uhren/32711433-o3iuxehq4vidmnoptgmehqgn-ExtraLarge.jpg"
    },
    {
        id: 9,
        collection: "Aquanaut",
        name: "Ref. 5168G-010",
        description: "Jumbo size in white gold with khaki green dial and elegancy",
        size: "42.2mm",
        movement: "Automatic",
        price: "$78,300",
        badge: "New",
        image: "https://images.europeanwatch.com/images-sold/37/37911-1.jpg"
    },
    {
        id: 10,
        collection: "Complications",
        name: "Ref. 5208P-001",
        description: "Minute repeater, tourbillon, and monopusher chronograph",
        size: "42mm",
        movement: "Manual",
        price: "$892,500",
        badge: "",
        image: "https://avatars.mds.yandex.net/i?id=55e8987823e0794a8e27a83293a30950_l-5234636-images-thumbs&n=13"
    },
    {
        id: 11,
        collection: "Nautilus",
        name: "Ref. 5980/1AR-001",
        description: "Chronograph in rose gold and steel with brown dial",
        size: "40.5mm",
        movement: "Automatic",
        price: "$89,400",
        badge: "",
        image: "https://images.europeanwatch.com/images/62/62584-1.jpg"
    },
    {
        id: 12,
        collection: "Calatrava",
        name: "Ref. 6119G-001",
        description: "Contemporary design with blue sunburst dial and white gold case",
        size: "39mm",
        movement: "Automatic",
        price: "$47,850",
        badge: "",
        image: "https://images.europeanwatch.com/images/45/45807-1.jpg"
    },
    {
        id: 13,
        collection: "Aquanaut",
        name: "Ref. 5650G-001",
        description: "Advanced research travel time with white gold bracelet",
        size: "40.8mm",
        movement: "Automatic",
        price: "$95,700",
        badge: "Limited",
        image: "https://watchesbysjx.com/wp-content/uploads/2017/05/Patek-Aquanaut-5650G-Advanced-Research-2.jpg"
    },
    {
        id: 14,
        collection: "Complications",
        name: "Ref. 5396G-011",
        description: "Annual calendar with moon phases in white gold",
        size: "38.5mm",
        movement: "Automatic",
        price: "$72,400",
        badge: "",
        image: "https://cdn.watchcharts.com/listings/6daa9a97-9831-41d5-932b-0068a23affad.jpg"
    },
    {
        id: 15,
        collection: "Nautilus",
        name: "Ref. 5740/1G-001",
        description: "Perpetual calendar with white gold case and blue gradient dial",
        size: "40mm",
        movement: "Automatic",
        price: "$189,900",
        badge: "New",
        image: "https://i.postimg.cc/8cLMrXRD/Fyw0-Rdv-WIAEQhx-N-Darkroom.png"
    },
    {
        id: 16,
        collection: "Calatrava",
        name: "Ref. 5226G-001",
        description: "Automatic with center sweep seconds and white gold case",
        size: "40mm",
        movement: "Automatic",
        price: "$43,890",
        badge: "",
        image: "https://img.chrono24.com/images/uhren/40600480-vzj0awpsuxq2nig04cy20g9g-ExtraLarge.jpg"
    },
    {
        id: 17,
        collection: "Complications",
        name: "Ref. 7234G-001",
        description: "Calatrava Pilot Travel Time in white gold for ladies",
        size: "37.5mm",
        movement: "Automatic",
        price: "$64,120",
        badge: "",
        image: "https://img.chrono24.com/images/uhren/37455371-qmqus2g3ny5547yr76qzyh81-ExtraLarge.jpg"
    },
    {
        id: 18,
        collection: "Aquanaut",
        name: "Ref. 5268/200R-001",
        description: "Ladies model in rose gold with diamond bezel and elegancy",
        size: "35.6mm",
        movement: "Automatic",
        price: "$92,680",
        badge: "Exclusive",
        image: "https://avatars.mds.yandex.net/i?id=d935f8edb8e96e169aefbf8b1d8496a32a237d39-16492246-images-thumbs&n=13"
    },
    {
        id: 19,
        collection: "Nautilus",
        name: "Ref. 5726A-001",
        description: "Annual calendar with stainless steel case and blue dial",
        size: "40.5mm",
        movement: "Automatic",
        price: "$114,300",
        badge: "",
        image: "https://avatars.mds.yandex.net/i?id=2154537ecf7583ff53ab8278ae481dcc_l-8343045-images-thumbs&n=13"
    },
    {
        id: 20,
        collection: "Complications",
        name: "Ref. 5327G-001",
        description: "Perpetual calendar with white gold case and black gradient dial",
        size: "39mm",
        movement: "Automatic",
        price: "$156,780",
        badge: "Limited",
        image: "https://avatars.mds.yandex.net/i?id=ee371b5272fadeb139bd988b56e95110_l-5260587-images-thumbs&n=13"
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
                        <button class="btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        `;
        card.style.cursor = 'pointer';
        card.onclick = (ev) => {
            window.location.href = `single-patek.html?id=${encodeURIComponent(watch.id)}`;
        };

        grid.appendChild(card);
    });
}

function filterWatches(category, el) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    if (el && el.classList) {
        el.classList.add('active');
    } else {
        const fallback = Array.from(buttons).find(b => {
            const onclick = b.getAttribute('onclick') || '';
            const text = b.textContent || '';
            return onclick.includes(`'${category}'`) ||
                text.trim().toLowerCase().includes(category.toLowerCase()) ||
                (category === 'all' && text.trim().toLowerCase().includes('all'));
        });
        if (fallback) fallback.classList.add('active');
    }

    if (category === 'all') {
        renderWatches(watches);
    } else {
        const filtered = watches.filter(watch => watch.collection === category);
        renderWatches(filtered);
    }
}

if (document.getElementById('watchGrid')) {
    renderWatches(watches);
}

function renderSingleFromQuery() {
    const mainImage = document.getElementById('main-watch-image');
    if (!mainImage) return;

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

    const badgeEl = document.getElementById('watch-badge');
    if (badgeEl) badgeEl.textContent = watch.badge || '';

    mainImage.src = watch.image;
    mainImage.alt = watch.name;

    const collectionTag = document.getElementById('collection-tag');
    if (collectionTag) collectionTag.textContent = watch.collection;

    document.getElementById('watch-name').textContent = watch.name;
    document.getElementById('watch-description').textContent = watch.description;
    document.getElementById('watch-price').textContent = watch.price;

    const specSize = document.getElementById('spec-size');
    if (specSize) specSize.textContent = watch.size;

    const specMovement = document.getElementById('spec-movement');
    if (specMovement) specMovement.textContent = watch.movement;

    const bcCollection = document.getElementById('breadcrumb-collection');
    const bcName = document.getElementById('breadcrumb-name');
    if (bcCollection) bcCollection.textContent = watch.collection;
    if (bcName) bcName.textContent = watch.name;
}

renderSingleFromQuery();
