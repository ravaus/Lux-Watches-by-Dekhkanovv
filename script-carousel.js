        const watchCollectionsData = {
            velocita: {
                name: 'Velocità',
                description: 'Inspired by the speed and precision of time, this collection embodies the swift elegance of modern watchmaking.',
                image: 'collection-velocita.jpg'
            },
            chronocraft: {
                name: 'Chronocraft',
                description: 'Masterfully crafted timepieces that blend traditional horology with contemporary design, representing the pinnacle of watchmaking artistry.',
                image: 'collection-chronocraft.jpg'
            },
            precision: {
                name: 'Precision',
                description: 'Engineering excellence meets timeless design. Each piece is a testament to accuracy, reliability, and the unwavering pursuit of perfection.',
                image: 'collection-precision.jpg'
            }
        };

        let currentCollectionIndex = 0;
        const collectionKeysArray = Object.keys(watchCollectionsData);

        function updateCarouselCollection(collectionKey) {
            const collectionData = watchCollectionsData[collectionKey];
            document.getElementById('collectionTitleElement').textContent = collectionData.name;
            document.getElementById('collectionDescriptionElement').textContent = collectionData.description;
            document.getElementById('watchProductImageElement').src = collectionData.image;

            document.querySelectorAll('.collection-names-list-wrapper span').forEach(spanElement => {
                spanElement.classList.remove('active-collection-item');
                if (spanElement.dataset.collection === collectionKey) {
                    spanElement.classList.add('active-collection-item');
                }
            });

            currentCollectionIndex = collectionKeysArray.indexOf(collectionKey);
        }

        document.getElementById('nextArrowButton').addEventListener('click', () => {
            currentCollectionIndex = (currentCollectionIndex + 1) % collectionKeysArray.length;
            updateCarouselCollection(collectionKeysArray[currentCollectionIndex]);
        });

        document.getElementById('prevArrowButton').addEventListener('click', () => {
            currentCollectionIndex = (currentCollectionIndex - 1 + collectionKeysArray.length) % collectionKeysArray.length;
            updateCarouselCollection(collectionKeysArray[currentCollectionIndex]);
        });

        document.querySelectorAll('.collection-names-list-wrapper span').forEach(spanElement => {
            spanElement.addEventListener('click', () => {
                updateCarouselCollection(spanElement.dataset.collection);
            });
        });



        document.addEventListener('DOMContentLoaded', function() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };
        
        updateCounter();
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
});