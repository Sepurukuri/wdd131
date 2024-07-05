document.addEventListener('DOMContentLoaded', function() {
    var currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    var lastModifiedParagraph = document.getElementById('lastModified');
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = 'Last modified: ' + document.lastModified;
    }

    const hamburgerButton = document.getElementById("hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburgerButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        if (navMenu.classList.contains("show")) {
            hamburgerButton.innerHTML = 'X';
        } else {
            hamburgerButton.innerHTML = '&#9776;';
        }
    });
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Salt Lake",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 253015,
      imageUrl: "https://www.churchofjesuschrist.org/imgs/92c33bcbf9cf85483e008d6871f8ced5f6d7b661/full/320%2C/0/default"
    },
    {
      templeName: "Paris France",
      location: "Paris, France",
      dedicated: "2017, May, 21",
      area: 44000,
      imageUrl: "https://www.churchofjesuschrist.org/imgs/5ec026c4efeaaa19a98e40f0f1b4c6069ae63517/full/320%2C/0/default"
    },
    {
      templeName: "Tokyo Japan",
      location: "Tokyo, Japan",
      dedicated: "1980, October, 27",
      area: 52990,
      imageUrl: "https://churchofjesuschrist.org/imgs/df6b96801c9f11ec99eeeeeeac1ea2207e7c517b/full/250%2C/0/default"
    }
  ];
  
  const templeContainer = document.getElementById('temple-container');
  
  const displayTemples = (filteredTemples) => {
    templeContainer.innerHTML = '';
    filteredTemples.forEach(temple => {
      const templeCard = document.createElement('div');
      templeCard.className = 'temple-card';
  
      templeCard.innerHTML = `
        <h2>${temple.templeName}</h2>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      `;
  
      templeContainer.appendChild(templeCard);
    });
  };
  
  document.getElementById('home').addEventListener('click', () => displayTemples(temples));
  document.getElementById('old').addEventListener('click', () => {
    const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
    displayTemples(oldTemples);
  });
  document.getElementById('new').addEventListener('click', () => {
    const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    displayTemples(newTemples);
  });
  document.getElementById('large').addEventListener('click', () => {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(largeTemples);
  });
  document.getElementById('small').addEventListener('click', () => {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(smallTemples);
  });
  
  window.onload = () => displayTemples(temples);