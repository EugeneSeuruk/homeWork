const div = document.getElementById('div');
let delBtn = document.createElement('button');

const obj = {
    getFullName() {
        let fullName = document.createElement('p');
        fullName.append(`Hello my name is ${this.firstname} ${this.lastname} `, delBtn);
        div.append(fullName);
        delBtn.innerText = 'Hide data';
        delBtn.onclick =() => {
            div.innerText =''
        };
    },
    getFullJob() {
        let job = document.createElement('p');
        job.append(`I'm work in ${this.job.company} on the positions ${this.job.position}`);
        div.append(job);
    },
    getBySalary() {
        let salary = document.createElement('p');
        salary.append(`My salaru ${this.salary}`);
        div.append(salary);
    }
}
artur = {
    firstname : 'Artur',
    lastname : 'Petrov',
    salary : '1500 byn',
    job :  {
        company : 'BelNeftyHim',
        position : 'Meneger'
    }
}
oksana = {
    firstname : 'Oksana',
    lastname : 'Dorina',
    salary : '900 byn',
    job : {
        company : 'Evroopt',
        position : 'Salesman'
    }
}
