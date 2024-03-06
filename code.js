const gridContainer = document.querySelector('.grid-container');
const imgsFolder = './imgs/';
const designers = [
    { name: 'HezinO', website: 'https://ohezin.kr' },
    { name: 'ShiraInbar', website: 'https://shira-inbar.com' },
    { name: 'TaubaAauerbach', website: 'https://taubaauerbach.com/' },
    { name: 'Moniker', website: 'https://monikersf.com/' }, { name: 'PortoRocha', website: 'https://portorocha.com/' },
    { name: 'WolfgangWeingart', website: 'https://blog.shillingtoneducation.com/wolfgang-weingart-tbt/' },
    { name: 'TeamThursday', website: 'https://teamthursday.com/timeline/' },// Add more designers here
    { name: 'RebeccaMendez', website: 'https://rebecamendez.com/' }, { name: 'SulkiMin', website: 'https://www.sulki-min.com/' },
    { name: 'BraulioAmado', website: 'https://badbadbadbad.com/' },
    { name: 'EmoryDouglas', website: 'https://www.artandobject.com/articles/emory-douglas-art-revolution' },
    { name: 'StudioDumbar', website: 'https://studiodumbar.com/' },
    { name: 'GiselleMonzon', website: 'https://www.instagram.com/giselle_monzon_/' },
    { name: 'KarelMartens', website: 'https://martens-martens.com/' },
    { name: 'NaKim', website: 'https://ynkim.com/' },
    { name: 'LizaniaCruz', website: 'https://lizania.com/' },
    { name: 'MoonsickGang', website: 'http://moonsickgang.com/' },
    { name: 'JeromeHarris', website: 'https://designlectur.es/events/jerome-harris/' },
    { name: 'OrdinaryPeople', website: 'https://ordinarypeople.info/' },
    { name: 'TiborKalman', website: 'https://archive.newmuseum.org/exhibitions/346' },


];

designers.forEach(designer => {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    const img = document.createElement('img');
    img.classList.add("hoverImage");
    img.src = `${imgsFolder}${designer.name}.jpg`;
    img.alt = designer.name;

    img.addEventListener('click', () => {
        window.open(`${designer.website}`, '_blank');
    });

    img.addEventListener('mouseover',() =>{
        console.log("hover");
        var elements = Array.from(document.getElementsByClassName('hoverImage'));

        elements.forEach(element => {
            element.classList.add("non-hovering");
            
        });
        elements = Array.from(document.getElementsByClassName('grid-item'));

        elements.forEach(element => {
            element.classList.add("non-hovering");
        });
        img.classList.remove("non-hovering");
        img.classList.add("hovering");    
        gridItem.classList.remove("non-hovering");
        gridItem.classList.add("hovering");
    });

    img.addEventListener('mouseout', () => {
        
       Array.from(document.getElementsByClassName('hoverImage')).forEach(element =>{
           element.classList.remove("non-hovering");
           element.classList.remove("hovering");
        });
        Array.from(document.getElementsByClassName('grid-item')).forEach(element => {
            element.classList.remove("non-hovering");
            element.classList.remove("hovering");
        });
    });

   


    const caption = document.createElement('div');
    caption.classList.add('caption');
    const span = document.createElement('span');
    span.textContent = designer.name;
    caption.appendChild(span);

    const fullScreen = document.createElement('div');
    fullScreen.classList.add('full-screen');

    const fullScreenImg = document.createElement('img');
    fullScreenImg.src = `${imgsFolder}${designer.name}_website.jpg`;
    fullScreenImg.alt = `${designer.name} website`;
    

    fullScreen.appendChild(fullScreenImg);
    gridItem.appendChild(img);
    gridItem.appendChild(caption);
    gridItem.appendChild(fullScreen);
    gridContainer.appendChild(gridItem);
});