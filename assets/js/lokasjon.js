// Initialize and add the map
function initMap() {
   
    // Kart
    let mapOptions = {
        center: new google.maps.LatLng(60.16281110183014, 10.259187499539573),
        zoom: 8
    }
    let map = new google.maps.Map(document.getElementById("map"), mapOptions)

    // Hønefoss
    var contentHonefoss =
    '<div style="position: relative;">' +
        '<img src="./assets/img/Lokasjon/honefoss.jpg" style="width: 100%; height: 200px; object-fit: cover;">' +
        '<button onclick="lukkSideLokasjon()" style="position: absolute; top: 10px; right: 15px; border: none; background-color: transparent;"><i class="fa-solid fa-xmark fa-2x text-white lokasjonLukk"></i></button>' +
    '</div>' +
    '<div class="test123 d-flex justify-content-center" style="border-bottom: 1px solid rgba(0, 0, 0, 0.2)">' +
        '<a href="./utstyr.html" class="btn btn-lg btn-primary py-2 my-2" style="width: 80%; font-size: 16px;">Finn utstyr</a>' +
    '</div>' +
    '<div class="text-center">' +
        '<h2>Hønefoss</h2>' +
    '</div>' +
    '<div style="border-bottom: 1px solid rgba(0, 0, 0, 0.1)">' +
        '<p class="fw-bold ms-3">Om ordningen</p>' +
        '<p class="ms-3">Naturkollektivet er som et bibliotek med sport og fritidsutstyr. Vi er for alle som ønsker å prøve noe nytt, for alle som ønsker å kjøpe litt mindre og leke litt mer, for alle som vil bidra til å redusere verdens forbruk og ta klimavennlige valg i hverdagen.</p>' +
    '</div>' +

    '<div style="border-bottom: 1px solid rgba(0, 0, 0, 0.1)">' +
        '<p class="fw-bold ms-3 mt-2">Åpningstider</p>' +
        '<p style="margin: 0;" class="ms-3">Mandag: 08:00 - 16:00</p>' +
        '<p style="margin: 0;" class="ms-3">Tirsdag: 08:00 - 16:00</p>' +
        '<p style="margin: 0;" class="ms-3">Onsdag: 08:00 - 16:00</p>' + 
        '<p style="margin: 0;" class="ms-3">Torsdag: 08:00 - 16:00</p>' + 
        '<p style="margin: 0;" class="ms-3">Fredag: 08:00 - 16:00</p>' +
        '<p class="ms-3 mt-3">Husk å levere lånt utstyr tilbake til avtalt tid, ellers kan det påløpe dagbøter og du vil miste retten til å låne utstyr for en periode. Utstyr som ikke leveres tilbake etter 10 dager, vil anses som tapt og må erstattes. Se oversikt over satser her: satser for dagbøter og erstatning ved brudd på låneavtalen. Blir du forhindret fra å levere utstyr til avtalt tid, gi beskjed på e-post eller SMS for å unngå dagbøter og karantene. Utstyret må leveres ved første mulighet.</p>' + 
    '</div>'

    let markerHonefoss = new google.maps.Marker({
        position: new google.maps.LatLng(60.16281110183014, 10.259187499539573),
        map: map
    })

    const infoHonefossInnhold = {
        position: new google.maps.LatLng(60.16281110183014, 10.259187499539573),
        content: contentHonefoss
    }
    const infoHonefoss = new google.maps.InfoWindow(infoHonefossInnhold)
    const infoHonefossVis = {
        map: map,
        anchor: markerHonefoss
    }

    google.maps.event.addListener(markerHonefoss, 'click', function() {
        map.panTo(markerHonefoss.getPosition()),
        map.setZoom(10)
        document.getElementById("lokasjon").innerHTML = contentHonefoss
        
        let viseSideMeny = document.getElementById("lokasjon");
        viseSideMeny.style.transform = 'translateX(0)';
    })

    
    // Oslo
    var contentOslo =
    '<div style="position: relative;">' +
        '<img src="./assets/img/Lokasjon/oslo.jpeg" style="width: 100%; height: 200px; object-fit: cover;">' +
        '<button onclick="lukkSideLokasjon()" style="position: absolute; top: 10px; right: 15px; border: none; background-color: transparent;"><i class="fa-solid fa-xmark fa-2x text-white lokasjonLukk"></i></button>' +
    '</div>' +
    '<div class="test123 d-flex justify-content-center" style="border-bottom: 1px solid rgba(0, 0, 0, 0.2)">' +
        '<a href="./utstyr.html" class="btn btn-lg btn-primary py-2 my-2" style="width: 80%; font-size: 16px;">Finn utstyr</a>' +
    '</div>' +
    '<div class="text-center">' +
        '<h2>Oslo</h2>' +
    '</div>' +
    '<div style="border-bottom: 1px solid rgba(0, 0, 0, 0.1)">' +
        '<p class="fw-bold ms-3">Om ordningen</p>' +
        '<p class="ms-3">Naturkollektivet er som et bibliotek med sport og fritidsutstyr. Vi er for alle som ønsker å prøve noe nytt, for alle som ønsker å kjøpe litt mindre og leke litt mer, for alle som vil bidra til å redusere verdens forbruk og ta klimavennlige valg i hverdagen.</p>' +
    '</div>' +

    '<div style="border-bottom: 1px solid rgba(0, 0, 0, 0.1)">' +
        '<p class="fw-bold ms-3 mt-2">Åpningstider</p>' +
        '<p style="margin: 0;" class="ms-3">Mandag: 08:00 - 16:00</p>' +
        '<p style="margin: 0;" class="ms-3">Tirsdag: 08:00 - 16:00</p>' +
        '<p style="margin: 0;" class="ms-3">Onsdag: 08:00 - 16:00</p>' + 
        '<p style="margin: 0;" class="ms-3">Torsdag: 08:00 - 16:00</p>' + 
        '<p style="margin: 0;" class="ms-3">Fredag: 08:00 - 16:00</p>' +
        '<p class="ms-3 mt-3">Husk å levere lånt utstyr tilbake til avtalt tid, ellers kan det påløpe dagbøter og du vil miste retten til å låne utstyr for en periode. Utstyr som ikke leveres tilbake etter 10 dager, vil anses som tapt og må erstattes. Se oversikt over satser her: satser for dagbøter og erstatning ved brudd på låneavtalen. Blir du forhindret fra å levere utstyr til avtalt tid, gi beskjed på e-post eller SMS for å unngå dagbøter og karantene. Utstyret må leveres ved første mulighet.</p>' + 
    '</div>'

    let posOslo = {
        position: new google.maps.LatLng(59.916713694693264, 10.74927701269529),
        map: map
    }
    let markerOslo = new google.maps.Marker(posOslo)

    const infoOsloInnhold = {
        content: contentOslo,
        position: new google.maps.LatLng(59.916713694693264, 10.74927701269529)
    }
    const infoOslo = new google.maps.InfoWindow(infoOsloInnhold)
    const infoOsloVis = {
        map: map,
        anchor: markerOslo
    }

    google.maps.event.addListener(markerOslo, 'click', function() {
        map.panTo(markerOslo.getPosition()),
        map.setZoom(10)
        document.getElementById("lokasjon").innerHTML = contentOslo

        let viseSideMeny = document.getElementById("lokasjon");
        viseSideMeny.style.transform = 'translateX(0)';
    })


    //Drammen
    var contentDrammen =
    '<div style="position: relative;">' +
        '<img src="./assets/img/Lokasjon/drammen.jpeg" style="width: 100%; height: 200px; object-fit: cover;">' +
        '<button onclick="lukkSideLokasjon()" style="position: absolute; top: 10px; right: 15px; border: none; background-color: transparent;"><i class="fa-solid fa-xmark fa-2x text-white lokasjonLukk"></i></button>' +
    '</div>' +
    '<div class="test123 d-flex justify-content-center" style="border-bottom: 1px solid rgba(0, 0, 0, 0.2)">' +
        '<a href="./utstyr.html" class="btn btn-lg btn-primary py-2 my-2" style="width: 80%; font-size: 16px;">Finn utstyr</a>' +
    '</div>' +
    '<div class="text-center">' +
        '<h2>Drammen</h2>' +
    '</div>' +
    '<div style="border-bottom: 1px solid rgba(0, 0, 0, 0.1)">' +
        '<p class="fw-bold ms-3">Om ordningen</p>' +
        '<p class="ms-3">Naturkollektivet er som et bibliotek med sport og fritidsutstyr. Vi er for alle som ønsker å prøve noe nytt, for alle som ønsker å kjøpe litt mindre og leke litt mer, for alle som vil bidra til å redusere verdens forbruk og ta klimavennlige valg i hverdagen.</p>' +
    '</div>' +

    '<div style="border-bottom: 1px solid rgba(0, 0, 0, 0.1)">' +
        '<p class="fw-bold ms-3 mt-2">Åpningstider</p>' +
        '<p style="margin: 0;" class="ms-3">Mandag: 08:00 - 16:00</p>' +
        '<p style="margin: 0;" class="ms-3">Tirsdag: 08:00 - 16:00</p>' +
        '<p style="margin: 0;" class="ms-3">Onsdag: 08:00 - 16:00</p>' + 
        '<p style="margin: 0;" class="ms-3">Torsdag: 08:00 - 16:00</p>' + 
        '<p style="margin: 0;" class="ms-3">Fredag: 08:00 - 16:00</p>' +
        '<p class="ms-3 mt-3">Husk å levere lånt utstyr tilbake til avtalt tid, ellers kan det påløpe dagbøter og du vil miste retten til å låne utstyr for en periode. Utstyr som ikke leveres tilbake etter 10 dager, vil anses som tapt og må erstattes. Se oversikt over satser her: satser for dagbøter og erstatning ved brudd på låneavtalen. Blir du forhindret fra å levere utstyr til avtalt tid, gi beskjed på e-post eller SMS for å unngå dagbøter og karantene. Utstyret må leveres ved første mulighet.</p>' + 
    '</div>'

    let posDrammen = {
        position: new google.maps.LatLng(59.73948434705658, 10.193659703320899),
        map: map
    }
    let markerDrammen = new google.maps.Marker(posDrammen)


    const infoDrammenInnhold = {
    content: contentDrammen,
    position: new google.maps.LatLng(59.73948434705658, 10.193659703320899)
    }

    const infoDrammen = new google.maps.InfoWindow(infoDrammenInnhold)
    const infoDrammenVis = {
    map: map,
    anchor: markerDrammen
    }
    
    google.maps.event.addListener(markerDrammen, 'click', function() {
        map.panTo(markerDrammen.getPosition()),
        map.setZoom(10)
        document.getElementById("lokasjon").innerHTML = contentDrammen

        let viseSideMeny = document.getElementById("lokasjon");
        viseSideMeny.style.transform = 'translateX(0)';
    })



    //Bergen
    var contentBergen =
    '<div style="position: relative;">' +
        '<img src="./assets/img/Lokasjon/bergen.jpeg" style="width: 100%; height: 200px; object-fit: cover;">' +
        '<button onclick="lukkSideLokasjon()" style="position: absolute; top: 10px; right: 15px; border: none; background-color: transparent;"><i class="fa-solid fa-xmark fa-2x text-white lokasjonLukk"></i></button>' +
    '</div>' +
    '<div class="test123 d-flex justify-content-center" style="border-bottom: 1px solid rgba(0, 0, 0, 0.2)">' +
        '<a href="./utstyr.html" class="btn btn-lg btn-primary py-2 my-2" style="width: 80%; font-size: 16px;">Finn utstyr</a>' +
    '</div>' +
    '<div class="text-center">' +
        '<h2>Bergen</h2>' +
    '</div>' +
    '<div style="border-bottom: 1px solid rgba(0, 0, 0, 0.1)">' +
        '<p class="fw-bold ms-3">Om ordningen</p>' +
        '<p class="ms-3">Naturkollektivet er som et bibliotek med sport og fritidsutstyr. Vi er for alle som ønsker å prøve noe nytt, for alle som ønsker å kjøpe litt mindre og leke litt mer, for alle som vil bidra til å redusere verdens forbruk og ta klimavennlige valg i hverdagen.</p>' +
    '</div>' +

    '<div style="border-bottom: 1px solid rgba(0, 0, 0, 0.1)">' +
        '<p class="fw-bold ms-3 mt-2">Åpningstider</p>' +
        '<p style="margin: 0;" class="ms-3">Mandag: 08:00 - 16:00</p>' +
        '<p style="margin: 0;" class="ms-3">Tirsdag: 08:00 - 16:00</p>' +
        '<p style="margin: 0;" class="ms-3">Onsdag: 08:00 - 16:00</p>' + 
        '<p style="margin: 0;" class="ms-3">Torsdag: 08:00 - 16:00</p>' + 
        '<p style="margin: 0;" class="ms-3">Fredag: 08:00 - 16:00</p>' +
        '<p class="ms-3 mt-3">Husk å levere lånt utstyr tilbake til avtalt tid, ellers kan det påløpe dagbøter og du vil miste retten til å låne utstyr for en periode. Utstyr som ikke leveres tilbake etter 10 dager, vil anses som tapt og må erstattes. Se oversikt over satser her: satser for dagbøter og erstatning ved brudd på låneavtalen. Blir du forhindret fra å levere utstyr til avtalt tid, gi beskjed på e-post eller SMS for å unngå dagbøter og karantene. Utstyret må leveres ved første mulighet.</p>' + 
    '</div>'

    let posBergen = {
        position: new google.maps.LatLng(60.30556055838644, 5.27253167187132),
        map: map
    }
    let markerBergen = new google.maps.Marker(posBergen)

    const infoBergenInnhold = {
    content: contentBergen,
    position: new google.maps.LatLng(59.916713694693264, 10.74927701269529)
    }

    const infoBergen = new google.maps.InfoWindow(infoBergenInnhold)
    const infoBergenVis = {
    map: map,
    anchor: markerBergen
    }
    
    google.maps.event.addListener(markerBergen, 'click', function() {
        map.panTo(markerBergen.getPosition()),
        map.setZoom(10)
        document.getElementById("lokasjon").innerHTML = contentBergen

        let viseSideMeny = document.getElementById("lokasjon");
        viseSideMeny.style.transform = 'translateX(0)';
    })


    //Trondheim
    var contentTrondheim =
    '<div style="position: relative;">' +
        '<img src="./assets/img/Lokasjon/trondheim.jpeg" style="width: 100%; height: 200px; object-fit: cover;">' +
        '<button onclick="lukkSideLokasjon()" style="position: absolute; top: 10px; right: 15px; border: none; background-color: transparent;"><i class="fa-solid fa-xmark fa-2x text-white lokasjonLukk"></i></button>' +
    '</div>' +
    '<div class="test123 d-flex justify-content-center" style="border-bottom: 1px solid rgba(0, 0, 0, 0.2)">' +
        '<a href="./utstyr.html" class="btn btn-lg btn-primary py-2 my-2" style="width: 80%; font-size: 16px;">Finn utstyr</a>' +
    '</div>' +
    '<div class="text-center">' +
        '<h2>Trondheim</h2>' +
    '</div>' +
    '<div style="border-bottom: 1px solid rgba(0, 0, 0, 0.1)">' +
        '<p class="fw-bold ms-3">Om ordningen</p>' +
        '<p class="ms-3">Naturkollektivet er som et bibliotek med sport og fritidsutstyr. Vi er for alle som ønsker å prøve noe nytt, for alle som ønsker å kjøpe litt mindre og leke litt mer, for alle som vil bidra til å redusere verdens forbruk og ta klimavennlige valg i hverdagen.</p>' +
    '</div>' +

    '<div style="border-bottom: 1px solid rgba(0, 0, 0, 0.1)">' +
        '<p class="fw-bold ms-3 mt-2">Åpningstider</p>' +
        '<p style="margin: 0;" class="ms-3">Mandag: 08:00 - 16:00</p>' +
        '<p style="margin: 0;" class="ms-3">Tirsdag: 08:00 - 16:00</p>' +
        '<p style="margin: 0;" class="ms-3">Onsdag: 08:00 - 16:00</p>' + 
        '<p style="margin: 0;" class="ms-3">Torsdag: 08:00 - 16:00</p>' + 
        '<p style="margin: 0;" class="ms-3">Fredag: 08:00 - 16:00</p>' +
        '<p class="ms-3 mt-3">Husk å levere lånt utstyr tilbake til avtalt tid, ellers kan det påløpe dagbøter og du vil miste retten til å låne utstyr for en periode. Utstyr som ikke leveres tilbake etter 10 dager, vil anses som tapt og må erstattes. Se oversikt over satser her: satser for dagbøter og erstatning ved brudd på låneavtalen. Blir du forhindret fra å levere utstyr til avtalt tid, gi beskjed på e-post eller SMS for å unngå dagbøter og karantene. Utstyret må leveres ved første mulighet.</p>' + 
    '</div>'

    let posTrondheim = {
        position: new google.maps.LatLng(63.418968896012906, 10.410172144254053),
        map: map
    }
    let markerTrondheim = new google.maps.Marker(posTrondheim)

    const infoTrondheimInnhold = {
    content: contentTrondheim,
    position: new google.maps.LatLng(59.916713694693264, 10.74927701269529)
    }

    const infoTrondheim = new google.maps.InfoWindow(infoTrondheimInnhold)
    const infoTrondheimVis = {
    map: map,
    anchor: markerTrondheim
    }
    
    google.maps.event.addListener(markerTrondheim, 'click', function() {
        map.panTo(markerTrondheim.getPosition()),
        map.setZoom(10)
        document.getElementById("lokasjon").innerHTML = contentTrondheim

        let viseSideMeny = document.getElementById("lokasjon");
        viseSideMeny.style.transform = 'translateX(0)';
    })


    
    //Tromsø
    var contentTromso =
    '<div style="position: relative;">' +
        '<img src="./assets/img/Lokasjon/tromso.jpeg" style="width: 100%; height: 200px; object-fit: cover;">' +
        '<button onclick="lukkSideLokasjon()" style="position: absolute; top: 10px; right: 15px; border: none; background-color: transparent;"><i class="fa-solid fa-xmark fa-2x text-white lokasjonLukk"></i></button>' +
    '</div>' +
    '<div class="test123 d-flex justify-content-center" style="border-bottom: 1px solid rgba(0, 0, 0, 0.2)">' +
        '<a href="./utstyr.html" class="btn btn-lg btn-primary py-2 my-2" style="width: 80%; font-size: 16px;">Finn utstyr</a>' +
    '</div>' +
    '<div class="text-center">' +
        '<h2>Tromsø</h2>' +
    '</div>' +
    '<div style="border-bottom: 1px solid rgba(0, 0, 0, 0.1)">' +
        '<p class="fw-bold ms-3">Om ordningen</p>' +
        '<p class="ms-3">Naturkollektivet er som et bibliotek med sport og fritidsutstyr. Vi er for alle som ønsker å prøve noe nytt, for alle som ønsker å kjøpe litt mindre og leke litt mer, for alle som vil bidra til å redusere verdens forbruk og ta klimavennlige valg i hverdagen.</p>' +
    '</div>' +

    '<div style="border-bottom: 1px solid rgba(0, 0, 0, 0.1)">' +
        '<p class="fw-bold ms-3 mt-2">Åpningstider</p>' +
        '<p style="margin: 0;" class="ms-3">Mandag: 08:00 - 16:00</p>' +
        '<p style="margin: 0;" class="ms-3">Tirsdag: 08:00 - 16:00</p>' +
        '<p style="margin: 0;" class="ms-3">Onsdag: 08:00 - 16:00</p>' + 
        '<p style="margin: 0;" class="ms-3">Torsdag: 08:00 - 16:00</p>' + 
        '<p style="margin: 0;" class="ms-3">Fredag: 08:00 - 16:00</p>' +
        '<p class="ms-3 mt-3">Husk å levere lånt utstyr tilbake til avtalt tid, ellers kan det påløpe dagbøter og du vil miste retten til å låne utstyr for en periode. Utstyr som ikke leveres tilbake etter 10 dager, vil anses som tapt og må erstattes. Se oversikt over satser her: satser for dagbøter og erstatning ved brudd på låneavtalen. Blir du forhindret fra å levere utstyr til avtalt tid, gi beskjed på e-post eller SMS for å unngå dagbøter og karantene. Utstyret må leveres ved første mulighet.</p>' + 
    '</div>'

    let posTromso = {
        position: new google.maps.LatLng(69.661208060391, 18.93585987846789),
        map: map
    }
    let markerTromso = new google.maps.Marker(posTromso)

    const infoTromsoInnhold = {
    content: contentTromso,
    position: new google.maps.LatLng(59.916713694693264, 10.74927701269529)
    }

    const infoTromso = new google.maps.InfoWindow(infoTromsoInnhold)
    const infoTromsoVis = {
    map: map,
    anchor: markerTromso
    }
    
    google.maps.event.addListener(markerTromso, 'click', function() {
        map.panTo(markerTromso.getPosition()),
        map.setZoom(10)
        document.getElementById("lokasjon").innerHTML = contentTromso

        let viseSideMeny = document.getElementById("lokasjon");
        viseSideMeny.style.transform = 'translateX(0)';
    })


    
  }
  
  window.initMap = initMap;

function lukkSideLokasjon(){
    lokasjonMarker = document.getElementsByClassName('.lokasjonLukk');

    let lukkeSideMeny = document.getElementById("lokasjon");
    lukkeSideMeny.style.transform = 'translateX(-100%)';
}