const watchesRichard = [
    {
        id: 1,
        name: "RM 011 Felipe Massa",
        model: "RM 011-FM",
        price: "$145,000",
        image: "https://img.chrono24.com/images/uhren/32401650-jnhu6ygkk4fxvodznurgpj6o-ExtraLarge.jpg",
        movement: "Automatic Flyback Chronograph",
        case: "Titanium",
        diameter: "50mm",
        category: ["chronograph", "automatic"]
    },
    {
        id: 2,
        name: "RM 055 Bubba Watson",
        model: "RM 055",
        price: "$185,000",
        image: "https://avatars.mds.yandex.net/i?id=c92dceca70073e35fffc81b5431a5ebd_l-10636894-images-thumbs&n=13",
        movement: "Manual Winding",
        case: "Carbon TPT",
        diameter: "49.94mm",
        category: ["manual"]
    },
    {
        id: 3,
        name: "RM 35-02 Rafael Nadal",
        model: "RM 35-02",
        price: "$165,000",
        image: "https://avatars.mds.yandex.net/i?id=bdb90f938eddc8c2610c0a5776e39e0a338986a8-3524127-images-thumbs&n=13",
        movement: "Automatic Winding",
        case: "NTPT Carbon",
        diameter: "49.94mm",
        category: ["automatic"]
    },
    {
        id: 4,
        name: "RM 67-02 Automatic",
        model: "RM 67-02",
        price: "$125,000",
        image: "https://avatars.mds.yandex.net/i?id=777f1ff5e4c78f06db5a9fbc173a80bb2c6b4306-5231626-images-thumbs&n=13",
        movement: "Ultra-Flat Automatic",
        case: "Quartz TPT",
        diameter: "47.52mm",
        category: ["automatic"]
    },
    {
        id: 5,
        name: "RM 030 Americas White",
        model: "RM 030",
        price: "$155,000",
        image: "https://avatars.mds.yandex.net/i?id=aec3999c32a699a0f925d21b6ecd59c7cdbcbdd6-5424921-images-thumbs&n=13",
        movement: "Automatic Winding",
        case: "White ATZ Ceramic",
        diameter: "50mm",
        category: ["automatic"]
    },
    {
        id: 6,
        name: "RM 052 Skull Tourbillon",
        model: "RM 052",
        price: "$475,000",
        image: "https://img.chrono24.com/images/uhren/32469519-95y9opbuudbfkdnbuz3hees0-ExtraLarge.jpg",
        movement: "Manual Tourbillon",
        case: "Titanium Grade 5",
        diameter: "42.70mm",
        category: ["tourbillon", "manual"]
    },
    {
        id: 7,
        name: "RM 27-03 Rafael Nadal",
        model: "RM 27-03",
        price: "$795,000",
        image: "https://img.chrono24.com/images/uhren/39038854-0ldyr41aqsm0wls7iptrhy5l-ExtraLarge.jpg",
        movement: "Tourbillon Manual",
        case: "Quartz TPT",
        diameter: "47.77mm",
        category: ["tourbillon", "manual"]
    },
    {
        id: 8,
        name: "RM 70-01 Alain Prost",
        model: "RM 70-01",
        price: "$245,000",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/RM_70-01_Tourbillon_Alain_Prost_%283%29.jpg",
        movement: "Automatic Winding",
        case: "Carbon TPT",
        diameter: "50mm",
        category: ["automatic"]
    },
    {
        id: 9,
        name: "RM 11-03 McLaren",
        model: "RM 11-03",
        price: "$195,000",
        image: "https://img.chrono24.com/images/uhren/33846061-1izsalb1geipt7i97ovx9o6b-ExtraLarge.jpg",
        movement: "Automatic Flyback",
        case: "Quartz TPT",
        diameter: "49.94mm",
        category: ["automatic", "chronograph"]
    },
    {
        id: 10,
        name: "RM 25-01 Tourbillon Adventure",
        model: "RM 25-01",
        price: "$950,000",
        image: "https://avatars.mds.yandex.net/i?id=a41fbd2a1596f0ac5d151a4ced2b45aac313cfdf-12488046-images-thumbs&n=13",
        movement: "Tourbillon Manual",
        case: "Carbon TPT",
        diameter: "50.70mm",
        category: ["tourbillon", "manual"]
    },
    {
        id: 11,
        name: "RM 056 Sapphire",
        model: "RM 056",
        price: "$1,650,000",
        image: "https://yandex-images.clstorage.net/9UEu8J354/dd1a16cyqFd/5xNdkrJ1bZrarqN8VY_o3fzBDz3U2TzA_T7F0eboZqANXiPqGA1akjgWtXD2zxDUxugDDOk_bZAAIibhmsy0TfLDToMjsrjOyCg2flVOqFqrkct6wlgrhm2p0IFkf-X1zYX4tFCFFc1inLwuaEmRApL_U0q5LuKeROn68IJTJBxmEtiX_-qv1hu-qTofCqNa4sfDvkEVaQT9pJuOvnX0ohOOdb5dCdwCrtvxIeeGncQZepWcOSCv25Jm9_yCG6xSJd9fWzcmpx2bNiR2GE5qGi5DyjFN2KHDfyDfxfw9-S3cR3-wEIjciuiVeS5nypIJ0HKfFfXlIVJdpTk_TBKqEKkU3xqzr-rd2HwlsFbErV2kC4UyTlFjz33v0kkxtfmqkwt0eZMAWs8k0vOnIctVRFt4WFl0qSEb3qj5ucKQatVsnBUSfOht15b-afGYDCKd5sGDfIXdKcsxaB3BOnr065nCu78QRdkNahY8aSFKGghe9dhbPm3lkNRvsnnKFGAToxXb3LAtJFlYd6M1nUQpEu8BS_TN3ufJMiPRzj8wcmcVS7yxVU9cB22TsK4lhpMPWbPc3bku6F3SYfN0TZij2a6blhO34yObFP4rcpQLbVfmiY02Qpfnz_1v30D6eLnhGAH6OZtB38Zmm7ZvpUWYx1a0XJt8JenTmuM2vQKXIhAiHtEa9KTvX1g4rvxUw-pRpgoCukoSqMl-ZRlBsfp-KJQDO7CTR5hIrF82JW5CVcRRP5lTtyejHBgnvj_EEGDZq1rTVvpj5xHTuOF9Vc2jEO0JSrLBluIOui2VTTz6cmKXT3s9lA5bQO0SNGfijt8FUz3W1Pnj5ZAWIbU0jVVjEqud31O2bWURUn_gfd3EJJLqQIs-y5umCX_lkI8wfDGgW8f29FOHlw3kk7PmYIafQhF4kd91JeHaESD_8EUd4NOuHNfa8mfvk1BxZ7oegGsSbICA_ULd6AA-LRVONI",
        movement: "Split-Seconds Chronograph",
        case: "Sapphire Crystal",
        diameter: "50mm",
        category: ["chronograph", "manual"]
    },
    {
        id: 12,
        name: "RM 038 Bubba Watson",
        model: "RM 038",
        price: "$385,000",
        image: "https://yandex-images.clstorage.net/9UEu8J354/dd1a16cyqFd/5xNdkrJ1bZrarqN8VY_o3fzBDz3U2TzA_T7TRGapsyAZnDZpjNhMB7hWoPF12pDUhn5VjTz_eFEUdrPg2hn1DnKD3ILisvtaivy2aUKbP8_61106hFsqw_j61sd3_zIlSMp0OA4ODVL62Tosa4deit90XJN2Le0SFeI1pkucLte3XNSTe-yr3985oH3fQqiWKoECfs4fIcOxrN4D9LJwp9jHPzfUBBwFJNK3JmYLl0UTMxGc-eLh1J5n83DLkmOSYdPZn3ukI5Gc9CexF46gXaoJjzLJW-iDfSjXjPh_uGBaQ3t8lkwRiusbvSgripfNVX2Zk3mu7hlXb_n5B1ftG64QF1y1rSXTED-n8JMH7Z3pQ470h9EvxPdgmI_79npsWIx28FvEEQ2kV7bhqAIRiJk6Exo_rylU3GU-tYYb7VItHdfaOy_lFtW3bfhcQGqXp8HCtUkZoAS1qp7BMHowaBQLuXhQCxxMrp55JytHkkrX_tzUPy5mGNnovrfM3ynZJ9qcGjOr79AaPqM2kIUjGWlICHFMUauLvGpWSXh5_moXQHV3VUGawCIXfiluTRdA0HtQEzvi7x_erroxS5wkFCHU3Re0JywaF7Du-ZdLJNslwYA2RR7vzrXikIv3MP5s2Ax7-ZAJUUYvXTihoEOUgdtzVtK7IeTX0ak6d46XJZppVhje-yit05s1qfDUDOgfaQcFuIXWaMj1YR8H_7WxalsGvfjbi5aPo1_5KKhF0w8Rt9aYcCYp1NYi_79FlW9V65KQXD2v7xoScau82svgUeKHSjmE2CGJvmJXD3Qx-62fTjH0VouaxaATuaWvDBAHUPrU2vzqoxXUILA4C1Ep2eWUm1d06uzREranuZbFYlFjQEs5DNGmC7krloN-PL-qWoY0NloN2QdsmzRsaIXcSll7U1t-4uNSlmX3M4eXLZPildGTvKJvEBc3rzDSz-jTYU7M_s-V6Ys_651A90",
        movement: "Tourbillon Manual",
        case: "White ATZ Ceramic",
        diameter: "48mm",
        category: ["tourbillon", "manual"]
    },
    {
        id: 13,
        name: "RM 033 Extra Flat",
        model: "RM 033",
        price: "$105,000",
        image: "https://yandex-images.clstorage.net/9UEu8J354/dd1a16cyqFd/5xNdkrJ1bZrarqN8VY_o3fzBDz3U2TzA_T7TELMp5yDMXnf9TNuaU_oCY7A2GYQVRugBmKur-0TB9uWgz5k0DmeDzoNiM_qNi2m2flVOqFqrkct6wlgrhm2p0IFkf-X1zYX4tFCFFc1inLwuaEmRApL_U0q5LuKeROn68IJTJBxmEtiX_-qv1hu-qTofCqNa4sfDvkEVaQT9pJuOvnX0ohOOdb5dCdwCrtvxIeeGncQZepWcOSCv25Jm9_yCG6xSJd9fWzcmpx2bNiR2GE5qGi5DyjFN2KHDfyDfxfw9-S3cR3-wEIjciuiVeS5nypIJ0HKfFfXlIVJdpTk_TBKqEKkU3xqzr-rd2HwlsFbErV2kC4UyTlFjz33v0kkxtfmqkwt0eZMAWs8k0vOnIctVRFt4WFl0qSEb3qj5ucKQatVsnBUSfOht15b-afGYDCKd5sGDfIXdKcsxaB3BOnr065nCu78QRdkNahY8aSFKGghe9dhbPm3lkNRvsnnKFGAToxXb3LAtJFlYd6M1nUQpEu8BS_TN3ufJMiPRzj8wcmcVS7yxVU9cB22TsK4lhpMPWbPc3bku6F3SYfN0TZij2a6blhO34yObFP4rcpQLbVfmiY02Qpfnz_1v30D6eLnhGAH6OZtB38Zmm7ZvpUWYx1a0XJt8JenTmuM2vQKXIhAiHtEa9KTvX1g4rvxUw-pRpgoCukoSqMl-ZRlBsfp-KJQDO7CTR5hIrF82JW5CVcRRP5lTtyejHBgnvj_EEGDZq1rTVvpj5xHTuOF9Vc2jEO0JSrLBluIOui2VTTz6cmKXT3s9lA5bQO0SNGfijt8FUz3W1Pnj5ZAWIbU0jVVjEqud31O2bWURUn_gfd3EJJLqQIs-y5umCX_lkI8wfDGgW8f29FOHlw3kk7PmYIafQhF4kd91JeHaESD_8EUd4NOuHNfa8mfvk1BxZ7oegGsSbICA_ULd6AA-LRVONI",
        movement: "Automatic Winding",
        case: "White Gold",
        diameter: "45.66mm",
        category: ["automatic"]
    },
    {
        id: 14,
        name: "RM 19-02 Tourbillon Fleur",
        model: "RM 19-02",
        price: "$745,000",
        image: "https://i.pinimg.com/originals/85/cc/d1/85ccd102c12e41f85c2242b4a2f7039f.jpg",
        movement: "Magnolia Tourbillon",
        case: "White Gold & Diamonds",
        diameter: "42.70mm",
        category: ["tourbillon", "manual"]
    },
    {
        id: 15,
        name: "RM 50-03 McLaren F1",
        model: "RM 50-03",
        price: "$980,000",
        image: "https://backend.lombard-perspectiva.ru/storage/images/clock/assets/fcc7affc4e20c5df1fd357add2a3f87f_xxl.webp",
        movement: "Tourbillon Split-Seconds",
        case: "Graph TPT",
        diameter: "44.50mm",
        category: ["tourbillon", "chronograph", "manual"]
    },
    {
        id: 16,
        name: "RM 029 Automatic",
        model: "RM 029",
        price: "$135,000",
        image: "https://avatars.mds.yandex.net/i?id=02e22029fa4e2f0ffe2835688b505965_l-5480663-images-thumbs&n=13",
        movement: "Automatic Winding",
        case: "Titanium",
        diameter: "48mm",
        category: ["automatic"]
    },
    {
        id: 17,
        name: "RM 69 Erotic Tourbillon",
        model: "RM 69",
        price: "$425,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtyRvLvNbA8rcJ3YSNZqw4VB8AAeLajoi02g&s",
        movement: "Manual Tourbillon",
        case: "White Gold",
        diameter: "39.70mm",
        category: ["tourbillon", "manual"]
    },
    {
        id: 18,
        name: "RM 72-01 Lifestyle",
        model: "RM 72-01",
        price: "$165,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDQTAEPp9S04R9ArOSvTe26OZQnytL5otwgg&s",
        movement: "Automatic Winding",
        case: "Carbon TPT",
        diameter: "50mm",
        category: ["automatic"]
    },
    {
        id: 19,
        name: "RM 07-01 Ladies",
        model: "RM 07-01",
        price: "$95,000",
        image: "https://cdn2.jomashop.com/media/catalog/product/cache/0ee3019724ce73007b606b54ba535a23/r/i/richard-mille-rm-0701-automatic-ladies-watch-rm0701-wgatz-jade_3.jpg?width=546&height=546",
        movement: "Automatic Winding",
        case: "NTPT Carbon",
        diameter: "45.66mm",
        category: ["automatic"]
    },
    {
        id: 20,
        name: "RM 63-02 World Timer",
        model: "RM 63-02",
        price: "$315,000",
        image: "https://mavaniandco.com/cdn/shop/files/richard-mille-automatic-winding-worldtimer-titanium-rm-63-02-richard-mille-40266471244020_800x.jpg?v=1716821281",
        movement: "Automatic World Timer",
        case: "Titanium Grade 5",
        diameter: "50mm",
        category: ["automatic"]
    }
];

function renderWatches(category = 'all') {
    const grid = document.getElementById('watchesGrid');
    grid.innerHTML = '';

    const filteredWatches = category === 'all'
        ? watchesRichard
        : watchesRichard.filter(watch => watch.category.includes(category));

    filteredWatches.forEach(watch => {
        const card = document.createElement('div');
        card.className = 'watch-card';
        card.style.cursor = 'pointer';
        card.innerHTML = `
            <div class="watch-image-container">
                <img src="${watch.image}" alt="${watch.name}">
                <div class="limited-badge">LIMITED</div>
            </div>
            <div class="watch-model">${watch.model}</div>
            <h3 class="watch-name">${watch.name}</h3>
            <div class="watch-specs">
                <div class="spec-row">
                    <span class="spec-label">Movement</span>
                    <span class="spec-value">${watch.movement}</span>
                </div>
                <div class="spec-row">
                    <span class="spec-label">Case</span>
                    <span class="spec-value">${watch.case}</span>
                </div>
                <div class="spec-row">
                    <span class="spec-label">Diameter</span>
                    <span class="spec-value">${watch.diameter}</span>
                </div>
            </div>
            <div class="watch-footer">
                <div class="watch-price">${watch.price}</div>
                <button class="add-to-cart">
                    <i class="fas fa-shopping-bag"></i>
                </button>
            </div>
        `;
        
        card.addEventListener('click', () => {
            window.location.href = `single-richard-mille.html?id=${watch.id}`;
        });
        
        const button = card.querySelector('.add-to-cart');
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            window.location.href = `single-richard-mille.html?id=${watch.id}`;
        });
        
        grid.appendChild(card);
    });
}

const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const category = button.getAttribute('data-category');
        renderWatches(category);
    });
});

renderWatches();