import {Course} from './course/course';

export class MockCourseData {
  public static courses: Array<Course> = [
    {
      name: 'Wstęp Do Informatyki',
      etcs: 6,
      semester: 1,
      form: ['wykład', 'ćwiczenia'],
      capacity: 200,
      rating: 4,
      timesRating: 1,
      icon: 'assets/img/wdi.png',
      description: 'Celem wykładu jest: wprowadzenie podstawowych pojęć związanych z informatyką,' +
        ' zapoznanie z programowaniem w języku proceduralnym, przedstawienie budowy i architektury' +
        ' komputera oraz podstawowych informacji o systemie operacyjnym, językach programowania.'
    },
    {
      name: 'Algorytmy i Struktury Danych',
      etcs: 6,
      semester: 2,
      form: ['wykład', 'ćwiczenia'],
      capacity: 100,
      rating: 5,
      timesRating: 1,
      icon: 'assets/img/asd.png',
      description: 'Celem wykładu jest: zapoznanie z podstawowymi strukturami danych, wykonywanymi' +
        ' na nich operacjami oraz ich implementacjami. Przedmiot omawia podstawowe algorytmy i cechy' +
        ' oraz implementacje.  W odniesieniu do poszczególnych rodzajów struktur omawia się ich' +
        ' właściwości statyczne, a następnie operacje proste, operacje złożone wraz z ich algorytmami,' +
        ' problematykę implementacyjną oraz zastosowania. '
    },
    {
      name: 'Programowanie Imperatywne',
      etcs: 3,
      semester: 2,
      form: ['wykład', 'labolatoria'],
      capacity: 200,
      rating: 5,
      timesRating: 1,
      icon: 'assets/img/pi.png',
      description: 'Wykład stanowi kurs programowania w języku C. Jego celem jest nauczenie' +
        ' programowania w tym języku oraz zapoznanie z podstawowymi technikami programowania.' +
        ' Zagadnienia: przesłanki konstrukcji i stosowania języków programowania;\n język C' +
        ' (również jako wstęp do C++ i Java);\n wprowadzenie do języka C++: ewolucja języka,' +
        ' elementarne różnice w stosunku do C (deklaracje, operatory). '
    },
    {
      name: 'Wprowadzenie do Systemu Unix',
      etcs: 1,
      semester: 3,
      form: ['wykład', 'labolatoria'],
      capacity: 200,
      rating: 4,
      timesRating: 1,
      icon: 'assets/img/wdsu.png',
      description: 'Celem wykładu jest zapoznanie z systemem operacyjnym UNIX. Omawiane są' +
        ' poszczególne aspekty i zagadnienia niezbędne do prawidłowego i efektywnego korzystania' +
        ' systemu, jak również zagadnienia związane z pracą systemu w sieciach komputerowych.'
    },
    {
      name: 'Logika Matematyczna',
      etcs: 3,
      semester: 2,
      form: ['wykład', 'ćwiczenia'],
      capacity: 200,
      rating: 3,
      timesRating: 1,
      icon: 'assets/img/lm.png',
      description: 'Zagadnienia: klasyczny rachunek zdań: język formalny, funktory logiczne,' +
        ' wartościowanie formuł złożonych, syntaktyka i semantyka, tautologie, postacie normalne,' +
        ' dowód formalny, wnioskowanie;\n aksjomatyczne systemy dedukcyjne i ich własności:' +
        ' niesprzeczność, niezależność, rozstrzygalność, zupełność, pełność;\n Aksjomatyczne ujęcie' +
        ' rachunku zdań;\n klasyczny rachunek predykatów: język pierwszego rzędu, aksjomatyka' +
        ' rachunku predykatów, teorie pierwszego rzędu, zagadnienia syntaktyczne rachunku,' +
        ' postacie normalne, elementy semantyki: interpretacje, spełnianie, pojęcie prawdy,' +
        ' modele, wynikanie semantyczne.'
    },
    {
      name: 'Wstęp do Aplikacji Internetowych',
      etcs: 3,
      semester: 3,
      form: ['wykład', 'labolatoria'],
      capacity: 100,
      rating: 3,
      timesRating: 1,
      icon: 'assets/img/wdai.png',
      description: 'Celem wykładu jest: wprowadzenie podstawowych pojęć związanych z aplikacjami' +
        ' internetowymi, zapoznanie z wykorzystywanymi technologiami. Zagadnienia: HTML5, CSS3;\n' +
        ' JavaScript;\n Framework Angular'
    },
    {
      name: 'Podstawy Baz Danych',
      etcs: 6,
      semester: 3,
      form: ['wykład', 'labolatoria'],
      capacity: 100,
      rating: 4,
      timesRating: 1,
      icon: 'assets/img/pbd.png',
      description: 'Celem wykładu jest wprowadzenie w problematykę: systemów przetwarzania' +
        ' danych masowych oraz technologię baz danych. Ważnym jest zrozumienie sposobu' +
        ' rozwiązania podstawowych problemów związanych z integracją danych oraz funkcji' +
        ' użytkowych. Istotnym elementem jest zapoznanie się z wielopoziomowymi modelami' +
        ' systemu i sposobami ich realizacji. Po zakończeniu kursu student potrafi budować' +
        ' proste systemy baz danych realizowane w oparciu o model relacyjny.'
    },
    {
      name: 'Inżynieria wymagań i jakości',
      etcs: 3,
      semester: 3,
      form: ['wykład', 'labolatoria'],
      capacity: 100,
      rating: 3,
      timesRating: 1,
      icon: 'assets/img/iwij.png',
      description: 'Systemy informacyjne i informatyczne. Cykl tworzenia systemu informatycznego.' +
        ' Analiza systemowa: opis dziedziny problemu, obszaru modelowania. Analiza potrzeb' +
        ' użytkowników, wymagania projektowe. Rola analityka systemowego i projektanta.' +
        ' Koncepcyjne i techniczne projektowanie systemu, zasady metodyczne. Rezultaty analizy' +
        ' i projektowania i ich dokumentowanie. Realizacja projektu, specyfikacje projektowe,' +
        ' projektowanie interfejsu.'
    },
    {
      name: 'Fizyka 1',
      etcs: 6,
      semester: 2,
      form: ['wykład', 'ćwiczenia'],
      capacity: 200,
      rating: 4,
      timesRating: 1,
      icon: 'assets/img/f1.png',
      description: 'Pierwsza część kursu fizyki'
    },
    {
      name: 'Fizyka 2',
      etcs: 6,
      semester: 3,
      form: ['wykład', 'labolatoria', 'ćwiczenia'],
      capacity: 200,
      rating: 4,
      timesRating: 1,
      icon: 'assets/img/f2.png',
      description: 'Druga część kursu fizyki'
    },
    {
      name: 'Podstawy Elektroniki',
      etcs: 2,
      semester: 2,
      form: ['wykład', 'labolatoria'],
      capacity: 200,
      rating: 2,
      timesRating: 1,
      icon: 'assets/img/pe.png',
      description: 'Program przedmiotu: obwód elektryczny, dioda półprzewodnikowa, tranzystor' +
        'unipolarny MOS, wprowadzanie tranzystora MOS w zakres aktywny, praca tranzystora MOS' +
        'w układzie klucza, bramki cyfrowe CMOS, wzmacniacz operacyjny, detektor progowy,' +
        'generator relaksacyjny, pętla synchronizacji fazy PLL.'
    },
    {
      name: 'Kompetencje Interpersonalne',
      etcs: 1,
      semester: 1,
      form: ['wykład', 'ćwiczenia'],
      capacity: 100,
      rating: 5,
      timesRating: 1,
      icon: 'assets/img/ki.png',
      description: 'Zagadnienia: sztuka autoprezentacji;\n pobieżne omówienie technik zarządzania' +
        ' projektem/zespołem (scrum, extreme programming etc.);\n typy osobowości, prowadzenie debaty'
    },
    {
      name: 'Programowanie Obiektowe',
      etcs: 6,
      semester: 3,
      form: ['wykład', 'labolatoria'],
      capacity: 100,
      rating: 5,
      timesRating: 1,
      icon: 'assets/img/po.png',
      description: 'Celem wykładu jest zdobycie przez studenta umiejętności programowania' +
        ' w języku JAVA oraz zapoznanie się z technikami programowania w tym języku.'
    },
  ];
}
