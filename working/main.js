const notes = [
    ["Hans", 80, 90, 10, 50],
    ["Ulrich", 94, 36, 76, 74],
    ["Olaf", 30, 60, 34, 78],
    ["Otto", 60, 60, 78, 23],
    ["Tina", 71, 45, 89, 100],
    ["Rosalina", 40, 56, 82, 40],
    ["Urs", 49, 45, 56, 67],
    ["Monika", 49, 42, 16, 62]
];

const STUDENT_NAME = 0
const MATH_INDEX = 1;
const GERMAN_INDEX = 2;
const ENGLISH_INDEX = 3;
const GEO_INDEX = 4;


/**
 * Ortalama Bulan Fonksiyon
 * @param {*} pNotListesi 
 * @param {*} pDersIndex 
 */
function ortalamaBul(pNotListesi, pDersIndex) {
    let ortalama = null;
    let notToplam = null;
    for (let index = 0; index < pNotListesi.length; index++) {
        notToplam += pNotListesi[index][pDersIndex];
        ortalama = notToplam / pNotListesi.length;
    }
    return ortalama;
}
let almancaOrtalama = ortalamaBul(notes, GERMAN_INDEX)
let matematikOrtalama = ortalamaBul(notes, MATH_INDEX)
let ingilizceOrtalama = ortalamaBul(notes, ENGLISH_INDEX)
let cografyaOrtalama = ortalamaBul(notes, GEO_INDEX)

/**
 * Basarili Ögrenci Bulan Fonksiyon
 * @param {*} pNotListesi 
 * @param {*} pDersIndex 
 */
function basariliÖgrenciBul(pNotListesi, pDersIndex) {
    let basariliNot = [];
    for (let index = 0; index < pNotListesi.length; index++) {
        if (pNotListesi[index][pDersIndex] >= 70) {
            basariliNot.push(pNotListesi[index][0] + " " + pNotListesi[index][pDersIndex])
        }
    }
    return basariliNot;
}
console.log(basariliÖgrenciBul(notes, GERMAN_INDEX))

/**
 * Ortalamanin Üstündeki Ögrencileri Bulan Fonksiyon
 * @param {*} pNotListesi 
 * @param {*} pDersIndex 
 */
function ortalamaninUstundekiOgrenciBul(pNotListesi, pDersIndex){
    let basariliNot = [];
    for (let index = 0; index < pNotListesi.length; index++) {
        if (pNotListesi[index][pDersIndex] >= almancaOrtalama) {
            basariliNot.push(pNotListesi[index][0] + " " + pNotListesi[index][pDersIndex])
        }
    }
    return basariliNot;
}
console.log(ortalamaninUstundekiOgrenciBul(notes, GERMAN_INDEX))

/**
 * En Basarili Dersi Bulan Fonksiyon
 * @param {*} pMatOrtalama 
 * @param {*} pAlmancaOrtalama 
 * @param {*} pEngOrtalama 
 * @param {*} pCografyaOrtalama 
 */
function enBasariliDersiBul (pMatOrtalama, pAlmancaOrtalama, pEngOrtalama, pCografyaOrtalama){
let ortalamaListesi = [pMatOrtalama, pAlmancaOrtalama, pEngOrtalama, pCografyaOrtalama]
let basariliNot=null;
let basariliDers=null;
for (let index = 0; index < ortalamaListesi.length; index++) {
    if(ortalamaListesi[index]>=basariliNot){
        basariliNot=ortalamaListesi[index]
    }    
}
if(basariliNot===pMatOrtalama){
    basariliDers=`Matematik ${basariliNot}`
}else if(basariliNot===pAlmancaOrtalama){
    basariliDers=`Almanca ${basariliNot}`
}else if(basariliNot===pEngOrtalama){
    basariliDers=`Ingilizce ${basariliNot}`
}else if(basariliNot===pCografyaOrtalama){
    basariliDers=`Cografya ${basariliNot}`
}
return basariliDers;
}
console.log(enBasariliDersiBul(matematikOrtalama, almancaOrtalama, ingilizceOrtalama, cografyaOrtalama))


function enYuksekNotuBul(pNotListesi, pDersIndex){
let enYuksekNot =null;
for (let index = 0; index < pNotListesi.length; index++) {
    if(pNotListesi[index][pDersIndex]>=enYuksekNot){
        enYuksekNot=pNotListesi[index][pDersIndex];
    }
}
return enYuksekNot
}

console.log(enYuksekNotuBul(notes,GERMAN_INDEX));


//En yüksek notun Map ile Bulunmasi
let onlyNotes = notes.map(student=>{
    student[0]=0;
    return student
})

let max = Math.max(...onlyNotes.map(note=>
    Math.max(...note)))

console.log(max)

// En yüksek Notun ve Hangi Derse Ait Oldugunun FOR ile bulunmasi
let mat = [];
let german = [];
let eng = [];
let geo = [];
let all = [];

for (let i = 0; i < notes.length; i++) {
    for (let index = 1; index < 5; index++) {
        all.push(notes[i][index]);
        if (index === 1) {
            mat.push(notes[i][index])
        } else if (index === 2) {
            german.push(notes[i][index])
        } else if (index === 3) {
            eng.push(notes[i][index])
        } else if (index === 4) {
            geo.push(notes[i][index])
        }

    }
}

function findBestNoteLesson(pMathList, pGermanList, pEnglishList, pGeoList) {
    let max = Math.max.apply(null, all);
    let bestLesson=null;
    if (pMathList.includes(max)) {
        bestLesson = "Matematik"
    }else if(pGermanList.includes(max)) {
        bestLesson = "Almanca"
    }else if(pEnglishList.includes(max)) {
        bestLesson = "Ingilizce"
    }else if(pGeoList.includes(max)) {
        bestLesson = "Cografya"
    }

    console.log(`${bestLesson} dersi ${max} puan ile en yüksek puanin alindigi dersdir. `);
}

findBestNoteLesson(mat,german,eng,geo)

