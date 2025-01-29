const cardsData = [
    {
        icon: 'fa-heart',
        title: 'Story',
        content: 'Our story began with a passion for adventure and a desire to explore the unknown. We believe in pushing boundaries and creating unforgettable experiences for everyone who joins us on this journey.'
    },
    {
        icon: 'fa-eye',
        title: 'Vision',
        content: 'Our story began with a passion for adventure and a desire to explore the unknown. We believe in pushing boundaries and creating unforgettable experiences for everyone who joins us on this journey.'
    },
    {
        icon: 'fa-bullseye',
        title: 'Goal',
        content: 'Our goal is to provide unique and memorable experiences that challenge and excite our participants. We are dedicated to ensuring that each adventure is safe, fun, and truly one-of-a-kind.'
    }
];

const cartoona= document.getElementById('cards-container');

cardsData.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.className = 'bg-stone-50 rounded-3xl border-2 border-stone-300 p-3 h-auto md:h-64p-1 relative';
    
    cardElement.innerHTML = `
        <div class="flex flex-row items-center mb-3">
            <i class="fa-solid ${card.icon} text-rose-300 mr-2"></i>
            <h3 class="text-red-900 uppercase font-semibold">${card.title}</h3>
        </div>
        <p class="text-zinc-800 text-sm md:text-base mb-6">
            ${card.content}
        </p>
        <button class="absolute right-3 bottom-3 px-4 py-2 text-sm font-semibold rounded-lg text-rose-700 bg-red-300 hover:bg-rose-200 transition-colors duration-200">
            More
        </button>
    `;
    
    cartoona.appendChild(cardElement);
});
