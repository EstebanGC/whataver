const readline = require('readline');

function verifyScholarShip() {

    //Cosas de configuracion
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    //Le pedimos sucesivamente datos al user> name, salary, age.
    rl.question("Tell me your full name: ", (name) => {
        rl.question("Tell me how much do you earn per month: ", (salary) => {
            rl.question("Let me know how old you are: ", (age) => {
                let ableScholarship = true;
                
                //establecemos las condiciones para acceder a la beca,
                if (age < 18 || age > 30) {
                    console.error("You are not in the age range allowed to get the scholarship");
                    ableScholarship = false;
                }

                if (salary > 500) {
                    console.error("You do not earn enough money to pay the rest of the cost");
                    ableScholarship = false;
                }

                if (ableScholarship) {
                    console.log(`Congratulations ${name}, you can access to the scholarship!`);
                } else {
                    console.log("We are sorry. It is not possible for you to get the scholarship");
                }

                rl.close();
            });
        });
    });
}

//Ejecutamos la funcion que acabamos de escribir
verifyScholarShip();