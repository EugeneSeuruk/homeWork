const dateNow = new Date;
let divAll = document.getElementById('div1');

class User {
 name;
 surname;
 year;

 constructor( name, surname, year) {
     this.name = name;
     this.surname = surname;
     this.year = year;
 }

  getFullName(){
        let delBtn = document.createElement('button');
        let btnCourse = document.createElement('button');
        let fullName = document.createElement('p');
        delBtn.innerText = 'Убрать данные';
        btnCourse.innerText = 'Показать курс Студента';

        fullName.append(`Name Student: ${this.name} Surname: ${this.surname}`, btnCourse, delBtn )
        divAll.append(fullName);
        btnCourse.onclick = () => {
            this.getCourse()
        };

        delBtn.onclick = () => {
            divAll.innerText = '';
        };
        console.log(`Name Student: ${this.name} Surname: ${this.surname}`);
  }
};

class Student extends User {
    constructor( name, surname, year){
        super(name, surname, year)
        this.name = `${this.name}`;
        this.surname = `${this.surname}`;
        this.year = `${this.year}`;
    }
    getCourse(){
        let btnDel = document.createElement('button');
        let courseYears = document.createElement('p');
        let academicYear = dateNow.getFullYear() - this.year;
        btnDel.innerText = 'Скрыть данные';

        btnDel.onclick = () => {
            divAll.innerText = '';
        }
        courseYears.append(academicYear);
        divAll.append(courseYears, btnDel)
    }
}

const anton = new Student  ('Anton', 'Dliniy', 2020 );
const alexey = new Student  ('Alexey', 'Perevodov', 2021);
const ekaterina = new Student  ('Ekaterina','Petrova', 2018);
const olga = new Student  ('Olga', 'Ivanova', 2017);
const alina = new Student ('Alina', 'Gulieva', 2019);
