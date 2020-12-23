/**
 *TWO DIMENSIONAL ARRAYS
 *Verilen "notes" isimli arrayin her elemani bir array icerir ve bu array sirasiyla ögrenci adini, mathematik, 
 *almanca, ingilizce ve cografya ders notlarini icermektedir. Bu cok boyutlu array kullanilarak;
 *1.Sinifin her dersinin ortalamasi ayri ayri hesaplanacak,
 *2.Herhangi bir dersden 70 puan üstü alanlarin listesi bulunacak,
 *3.Tüm derslerden ortalamanin üstünde olanlarin listesi olusturulacak,
 *4.Sinifin hangi dersde en iyi nota sahip oldugu gosterilecek,
 *5.Sinifin en kötü oldugu ders gosterilecek,
 *6.Tüm derslerin en iyi ögrencileri bulunacaktir.
 */
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
/**
 * Verilen Ders Indexine Göre Not Ortalamasi Bulan Fonksiyon
 * @param {*} pLessonIndex 
 * @param {*} pNoteList 
 */
function findAverageNote(pLessonIndex, pNoteList) {
    let totalNote = null;
    pNoteList.map(student => totalNote += student[pLessonIndex])
    let averageNote = Math.round(totalNote / pNoteList.length);
    return averageNote
}
/**
 * Not Ortalamasini Ekrana Yazdiran Fonksiyon
 * @param {*} pAverageNote 
 * @param {*} pLessonName 
 */
function renderAveregeNote(pAverageNote, pLessonName) {
    console.log(`${pLessonName} Dersinin Not Ortalamasi : ${pAverageNote}`)
}
/**
 * Sinir Notunu Gecen Ögrencilerin Listesi
 * @param {*} pNoteList 
 * @param {*} pLessonIndex 
 * @param {*} pBorderNote 
 */
function findOverBorderStudent(pNoteList, pLessonIndex, pBorderNote) {
    let passedStudentList = [];
    pNoteList.map(student => {
        if (student[pLessonIndex] > pBorderNote) {
            passedStudentList.push(student[0] + " " + student[pLessonIndex]);
        }
    })
    return passedStudentList;
}
/**
 * Sinir Notunu Gecen Ögrencilerin Konsola Yazdirilmasi
 * @param {*} pLessonName 
 * @param {*} pBorderNote 
 * @param {*} pPassedStudentList 
 */
function renderPassedStudents(pLessonName, pBorderNote, pPassedStudentList) {
    console.log(`${pLessonName} Dersinden ${pBorderNote} üzerinde alan ögrenciler : ${pPassedStudentList}`)
}
/**
 * Ortalamanin üzerinde Not alanlarin listesi
 * @param {*} pNoteList 
 * @param {*} pLessonIndex 
 * @param {*} pAverageNote 
 */
function findOverAverageStudentList(pNoteList, pLessonIndex, pAverageNote) {
    let overAverageStudent = [];
    pNoteList.map(student => {
        if (student[pLessonIndex] > pAverageNote) {
            overAverageStudent.push(student[0] + " " + student[pLessonIndex]);
        }
    })
    return overAverageStudent;
}
/**
 * Ortalamanin üzerinde olan ögrencilerin listesinin konsola yazdirilmasi
 * @param {*} pAverageNote 
 * @param {*} pLessonName 
 * @param {*} pOverAverageStudent 
 */
function renderOverAverageStudent(pAverageNote, pLessonName, pOverAverageStudent) {
    console.log(`Ortalamasi ${pAverageNote} olan ${pLessonName} dersinden ortalamanin üzerinde not alan ögrenciler: ${pOverAverageStudent}`)
}
/**
 * Dersin En Yüksek Notunu Alan Ögrenciyi Bulan Fonksiyon
 * @param {*} pNoteList 
 * @param {*} pLessonIndex 
 */
function findMaxNoteStudent(pNoteList, pLessonIndex) {
    let lessonNotes = pNoteList.map(student => student[pLessonIndex]);
    let maxNote = lessonNotes[0];
    let maxNoteStudent = [];
    lessonNotes.map(note => {
        if (note >= maxNote) {
            maxNote = note
        }
    })
    pNoteList.map(student => {
        if (student[pLessonIndex] === maxNote) {
            maxNoteStudent.push(student[0] + " " + maxNote);
        }
    })
    return maxNoteStudent;
}
/**
 * Secilen dersden en yüksek notu alan ögreciyi konsola yazdiran fonksiyon
 * @param {*} pLessonName 
 * @param {*} pMaxNoteStudent 
 */
function renderMaxNoteStudent(pLessonName, pMaxNoteStudent) {
    console.log(`${pLessonName} dersinden en yüksek notu alan ögrenci: ${pMaxNoteStudent}`)
}
/**
 * Sinifin En Basarili Oldugu Dersi Bulan Fonksiyon
 * @param {*} pMathAverage 
 * @param {*} pGermanAverage 
 * @param {*} pEnglishAverage 
 * @param {*} pGeoAverage 
 */
function findMostSuccessfulLesson(pMathAverage, pGermanAverage, pEnglishAverage, pGeoAverage) {
    let averageList = [pMathAverage, pGermanAverage, pEnglishAverage, pGeoAverage]
    let mostSuccessfulNote = Math.max.apply(null, averageList);
    let mostSuccessfulLesson = null
    if (mostSuccessfulNote === pMathAverage) {
        mostSuccessfulLesson = "Mathematik"
    } else if (mostSuccessfulNote === pGermanAverage) {
        mostSuccessfulLesson = "Almanca"
    } else if (mostSuccessfulNote === pEnglishAverage) {
        mostSuccessfulLesson = "Ingilizce"
    } else if (mostSuccessfulNote === pGeoAverage) {
        mostSuccessfulLesson = "Cografya"
    }
    return mostSuccessfulLesson
}
/**
 * Sinifin en basarili oldugu dersi konsola yazdiran fonksiyon
 * @param {*} pLessonName  
 */
function renderMostSuccessfulLesson(pLessonName) {
    console.log(`Sinifin en basarili oldugu ders ${pLessonName}`)
}
/**
 * Sinifin En Basarili Oldugu Dersi Bulan Fonksiyon
 * @param {*} pMathAverage 
 * @param {*} pGermanAverage 
 * @param {*} pEnglishAverage 
 * @param {*} pGeoAverage 
 */
function findLessSuccessfulLesson(pMathAverage, pGermanAverage, pEnglishAverage, pGeoAverage) {
    let averageList = [pMathAverage, pGermanAverage, pEnglishAverage, pGeoAverage]
    let lessSuccessfulNote = Math.min.apply(null, averageList);
    let lessSuccessfulLesson = null
    if (lessSuccessfulNote === pMathAverage) {
        lessSuccessfulLesson = "Mathematik"
    } else if (lessSuccessfulNote === pGermanAverage) {
        lessSuccessfulLesson = "Almanca"
    } else if (lessSuccessfulNote === pEnglishAverage) {
        lessSuccessfulLesson = "Ingilizce"
    } else if (lessSuccessfulNote === pGeoAverage) {
        lessSuccessfulLesson = "Cografya"
    }
    return lessSuccessfulLesson
}
/**
 * Sinifin en ez basarili oldugu dersi konsola yazdiran fonksiyon
 * @param {*} pLessonName 
 */
function renderLessSuccessfulLesson(pLessonName) {
    console.log(`Sinifin en basarisiz oldugu ders ${pLessonName}`)
}

//Matematik Not Ortalamasinin Bulunmasi ve Ekrana Yazdirilmasi
let mathAverageNote = findAverageNote(1, notes);
renderAveregeNote(mathAverageNote, "Matematik");

//Almanca Not Ortalamasinin Bulunmasi ve Ekrana Yazdirilmasi
let germanAverageNote = findAverageNote(2, notes);
renderAveregeNote(germanAverageNote, "Almanca");

//Ingilizce Not Ortalamasinin Bulunmasi ve Konsola Yazdirilmasi
let englishAverageNote = findAverageNote(3, notes);
renderAveregeNote(englishAverageNote, "Ingilizce")

//Cografya Not Ortalamasinin Bulunmasi ve Konsola Yazdirilmasi
let geoAverageNote = findAverageNote(4, notes);
renderAveregeNote(geoAverageNote, "Cografya");

//Mathematik Dersinden 70 üzeri alan ögrencilerin listesi
let mathPassedStudentList = findOverBorderStudent(notes, 1, 70);
renderPassedStudents("Matematik", 70, mathPassedStudentList);

//Almanca Dersinden 70 üzeri alan ögrencilerin listesi
let germanPassedStudentList = findOverBorderStudent(notes, 2, 70);
renderPassedStudents("Almanca", 70, germanPassedStudentList);

//Ingilizce Dersinden 70 üzeri alan ögrencilerin listesi
let englishPassedStudentList = findOverBorderStudent(notes, 3, 70);
renderPassedStudents("Ingilizce", 70, englishPassedStudentList);

//Cografya Dersinden 70 üzeri alan ögrencilerin listesi
let geoPassedStudentList = findOverBorderStudent(notes, 4, 70);
renderPassedStudents("Cografya", 70, geoPassedStudentList);

//Mathematik Dersinden Ortalamanin Üzerinde Not Alan Ögrencilerin Bulunmasi ve Konsola Yazdirilmasi
let mathOverAverageStudentList = findOverAverageStudentList(notes, 1, mathAverageNote);
renderOverAverageStudent(mathAverageNote, "Mathematik", mathOverAverageStudentList);

//Almanca Dersinden Ortalamanin Üzerinde Not Alan Ögrencilerin Bulunmasi ve Konsola Yazdirilmasi
let germanOverAverageStudentList = findOverAverageStudentList(notes, 2, germanAverageNote);
renderOverAverageStudent(germanAverageNote, "Almanca", germanOverAverageStudentList);

//Ingilizce Dersinden Ortalamanin Üzerinde Not Alan Ögrencilerin Bulunmasi ve Konsola Yazdirilmasi
let englishOverAverageStudentList = findOverAverageStudentList(notes, 3, englishAverageNote);
renderOverAverageStudent(englishAverageNote, "Ingilizce", englishOverAverageStudentList);

//Cografya Dersinden Ortalamanin Üzerinde Not Alan Ögrencilerin Bulunmasi ve Konsola Yazdirilmasi
let geoOverAverageStudentList = findOverAverageStudentList(notes, 4, geoAverageNote);
renderOverAverageStudent(geoAverageNote, "Cografya", geoOverAverageStudentList);

//Mathematik Dersinden En Yüksek Notu Alan Ögrencinin Bulunmasi ve Konsola Yazdirilmasi
let mathMaxNoteStudent = findMaxNoteStudent(notes, 1);
renderMaxNoteStudent("Mathematik", mathMaxNoteStudent);

//Almanca Dersinden En Yüksek Notu Alan Ögrencinin Bulunmasi ve Konsola Yazdirilmasi
let germanMaxNoteStudent = findMaxNoteStudent(notes, 2);
renderMaxNoteStudent("Almanca", germanMaxNoteStudent);

//Ingilizce Dersinden En Yüksek Notu Alan Ögrencinin Bulunmasi ve Konsola Yazdirilmasi
let englishMaxNoteStudent = findMaxNoteStudent(notes, 3);
renderMaxNoteStudent("Ingilizce", englishMaxNoteStudent);

//Cografya Dersinden En Yüksek Notu Alan Ögrencinin Bulunmasi ve Konsola Yazdirilmasi
let geoMaxNoteStudent = findMaxNoteStudent(notes, 4);
renderMaxNoteStudent("Cografya", geoMaxNoteStudent);

//Sinifin En Basarili Oldugu Dersin Bulunmasi ve Konsola Yazdirilmasi
let mostSuccessfulLesson = findMostSuccessfulLesson(mathAverageNote, germanAverageNote, englishAverageNote, geoAverageNote);
renderMostSuccessfulLesson(mostSuccessfulLesson)

//Sinifin En Az Basarili Oldugu Dersin Bulunmasi ve Konsola Yazdirilmasi
let lessSuccessfulLesson = findLessSuccessfulLesson(mathAverageNote, germanAverageNote, englishAverageNote, geoAverageNote);
renderLessSuccessfulLesson(lessSuccessfulLesson)