class contador {

    static cuentaGlobal = 0;

    constructor(responsable) {
        this.responsable = responsable
        this.cuenta = 0
    }

    aumento() {
        this.cuenta++
        contador.cuentaGlobal++
    }

    getResponsable(){
        return this.responsable
    }
    getCuentaGlobal() {
        return contador.cuentaGlobal
    }

    getCuentaIndividual() {
        return this.cuenta
    }
}

const contador1 = new contador('victor')
contador1.aumento()
contador1.aumento()
contador1.aumento()

console.log(contador1.getCuentaIndividual());


const contador2 = new contador('valentina')
contador2.aumento()
contador2.aumento()
contador2.aumento()

console.log(contador2.getCuentaIndividual())

console.log('contador 1: ', contador1.getResponsable(), ' cuenta individual:  ', contador1.getCuentaIndividual())