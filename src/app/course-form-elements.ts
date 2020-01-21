export class CourseFormElements {
  public static elements = [
    {
      label: 'Forma', type: '', name: 'form', children: [
        {label: 'WYKŁAD', type: 'checkbox', name: 'lec'},
        {label: 'ĆWICZENIA', type: 'checkbox', name: 'exe'},
        {label: 'LABOLATORIA', type: 'checkbox', name: 'lab'}
      ], edit: true
    },
    {label: 'Nazwa kursu:', type: 'text', name: 'name', edit: false},
    {label: 'Semestr:', type: 'number', name: 'semester', edit: true},
    {label: 'Punkty ETCS:', type: 'number', name: 'etcs', edit: true},
    {label: 'Ikonka kursu:', type: 'text', name: 'icon', edit: true},
    {label: 'Ilość miejsc:', type: 'number', name: 'capacity', edit: true},
    {label: 'Opis:', type: '', name: 'description', edit: true}
  ];

  public static errors = {
    name: '',
    etcs: '',
    semester: '',
    capacity: '',
    description: '',
    icon: '',
    form: '',
  };

  public static validationMessages = {
    name: {
      required: 'podaj nazwę',
      minlength: 'nazwa ma być dłuższa niż 10 znaków',
    },
    etcs: {
      required: 'podaj ilość punktów ETCS',
      min: 'ilość punktów ETCS ma być nieujemna'
    },
    semester: {
      required: 'podaj semestr',
      min: 'numer semestru ma być większy od 0'
    },
    capacity: {
      required: 'podaj ilość miejsc',
      min: 'ilość miejsc musi być większa od 0'
    },
    description: {
      required: 'podaj opis',
      minlength: 'opis ma być dłuższy niż 100 znaków'
    },
    icon: {
      required: 'dodaj ikonę kursu',
    },
    form: {
      requireCheckboxes: 'zaznacz co najmniej jedną opcję'
    }
  };

}
