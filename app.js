/**
 *TWO DIMENSIONAL ARRAYS
 *Verilen "notes" isimli arrayin her elemani bir array icerir ve bu array sirasiyla ögrenci adini, mathematik, 
 *almanca, ingilizce ve cografya ders notlarini icermektedir. Bu cok boyutlu array kullanilarak;
 *1.Her dersin sinif ortalamasi ayri ayri hesaplanacak,
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
const STUDENT_NAME = 0
const MATH_INDEX = 1;
const GERMAN_INDEX = 2;
const ENGLISH_INDEX = 3;
const GEO_INDEX = 4;
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
            passedStudentList.push(student[STUDENT_NAME] + " " + student[pLessonIndex]);
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
            overAverageStudent.push(student[STUDENT_NAME] + " " + student[pLessonIndex]);
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
            maxNoteStudent.push(student[STUDENT_NAME] + " " + maxNote);
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
    console.log(`Sinifin en basarili oldugu ders ${mostSuccessfulLesson}, not ortalamasi ${mostSuccessfulNote}`)
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
    console.log(`Sinifin en basarisiz oldugu ders ${lessSuccessfulLesson}, not ortalamasi ${lessSuccessfulNote} `)

}

//Matematik Not Ortalamasinin Bulunmasi ve Ekrana Yazdirilmasi
let mathAverageNote = findAverageNote(MATH_INDEX, notes);
renderAveregeNote(mathAverageNote, "Matematik");

//Almanca Not Ortalamasinin Bulunmasi ve Ekrana Yazdirilmasi
let germanAverageNote = findAverageNote(GERMAN_INDEX, notes);
renderAveregeNote(germanAverageNote, "Almanca");

//Ingilizce Not Ortalamasinin Bulunmasi ve Konsola Yazdirilmasi
let englishAverageNote = findAverageNote(ENGLISH_INDEX, notes);
renderAveregeNote(englishAverageNote, "Ingilizce")

//Cografya Not Ortalamasinin Bulunmasi ve Konsola Yazdirilmasi
let geoAverageNote = findAverageNote(GEO_INDEX, notes);
renderAveregeNote(geoAverageNote, "Cografya");

//Mathematik Dersinden 70 üzeri alan ögrencilerin listesi
let mathPassedStudentList = findOverBorderStudent(notes, MATH_INDEX, 70);
renderPassedStudents("Matematik", 70, mathPassedStudentList);

//Almanca Dersinden 70 üzeri alan ögrencilerin listesi
let germanPassedStudentList = findOverBorderStudent(notes, GERMAN_INDEX, 70);
renderPassedStudents("Almanca", 70, germanPassedStudentList);

//Ingilizce Dersinden 70 üzeri alan ögrencilerin listesi
let englishPassedStudentList = findOverBorderStudent(notes, ENGLISH_INDEX, 70);
renderPassedStudents("Ingilizce", 70, englishPassedStudentList);

//Cografya Dersinden 70 üzeri alan ögrencilerin listesi
let geoPassedStudentList = findOverBorderStudent(notes, GEO_INDEX, 70);
renderPassedStudents("Cografya", 70, geoPassedStudentList);

//Mathematik Dersinden Ortalamanin Üzerinde Not Alan Ögrencilerin Bulunmasi ve Konsola Yazdirilmasi
let mathOverAverageStudentList = findOverAverageStudentList(notes, MATH_INDEX, mathAverageNote);
renderOverAverageStudent(mathAverageNote, "Mathematik", mathOverAverageStudentList);

//Almanca Dersinden Ortalamanin Üzerinde Not Alan Ögrencilerin Bulunmasi ve Konsola Yazdirilmasi
let germanOverAverageStudentList = findOverAverageStudentList(notes, GERMAN_INDEX, germanAverageNote);
renderOverAverageStudent(germanAverageNote, "Almanca", germanOverAverageStudentList);

//Ingilizce Dersinden Ortalamanin Üzerinde Not Alan Ögrencilerin Bulunmasi ve Konsola Yazdirilmasi
let englishOverAverageStudentList = findOverAverageStudentList(notes, ENGLISH_INDEX, englishAverageNote);
renderOverAverageStudent(englishAverageNote, "Ingilizce", englishOverAverageStudentList);

//Cografya Dersinden Ortalamanin Üzerinde Not Alan Ögrencilerin Bulunmasi ve Konsola Yazdirilmasi
let geoOverAverageStudentList = findOverAverageStudentList(notes, GEO_INDEX, geoAverageNote);
renderOverAverageStudent(geoAverageNote, "Cografya", geoOverAverageStudentList);

//Mathematik Dersinden En Yüksek Notu Alan Ögrencinin Bulunmasi ve Konsola Yazdirilmasi
let mathMaxNoteStudent = findMaxNoteStudent(notes, MATH_INDEX);
renderMaxNoteStudent("Mathematik", mathMaxNoteStudent);

//Almanca Dersinden En Yüksek Notu Alan Ögrencinin Bulunmasi ve Konsola Yazdirilmasi
let germanMaxNoteStudent = findMaxNoteStudent(notes, GERMAN_INDEX);
renderMaxNoteStudent("Almanca", germanMaxNoteStudent);

//Ingilizce Dersinden En Yüksek Notu Alan Ögrencinin Bulunmasi ve Konsola Yazdirilmasi
let englishMaxNoteStudent = findMaxNoteStudent(notes, ENGLISH_INDEX);
renderMaxNoteStudent("Ingilizce", englishMaxNoteStudent);

//Cografya Dersinden En Yüksek Notu Alan Ögrencinin Bulunmasi ve Konsola Yazdirilmasi
let geoMaxNoteStudent = findMaxNoteStudent(notes, GEO_INDEX);
renderMaxNoteStudent("Cografya", geoMaxNoteStudent);

//Sinifin En Basarili Oldugu Dersin Bulunmasi ve Konsola Yazdirilmasi
findMostSuccessfulLesson(mathAverageNote, germanAverageNote, englishAverageNote, geoAverageNote);

//Sinifin En Az Basarili Oldugu Dersin Bulunmasi ve Konsola Yazdirilmasi
findLessSuccessfulLesson(mathAverageNote, germanAverageNote, englishAverageNote, geoAverageNote);