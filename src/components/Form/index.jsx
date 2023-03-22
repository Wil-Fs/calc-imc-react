import { useState } from "react";

import styles from './Form.module.css';

const Form = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    const imc = () => {
        var imc = peso / Math.pow(altura, 2);
        return imc.toFixed(2);
    }

    

    const renderTable = () => {
        return altura >= 1.20 && peso >= 18.5 ? true : false
    }

    return (
        <div className="container">
            <form className={styles.form}>
                <input className={styles.formInputAltura} type="number" placeholder="Informe sua altura" onChange={event => setAltura(event.target.valueAsNumber)} />
                <input className={styles.formInputPeso} type="number" placeholder="Informe seu peso" onChange={event => setPeso(event.target.valueAsNumber)} />
            </form>
            {isNaN(imc()) || imc() <= 18.5 ? <span></span> : <b className={styles.resultIMC}>Seu IMC é : {imc()}</b> }
            {
                !renderTable() ?
                    (<h1 className={styles.titleAviso} >Valores mínimos para cálculo: Altura maior igual a 1.20m! // Peso maior igual a 18.5 Kg!</h1>)
                    :
                    (
                        <table className={styles.table} >
                            <thead className={styles.thead}>
                                <th className={styles.thead}>
                                    Valores do IMC: Pessoas de 20 aos 60 anos
                                </th>
                            </thead>
                            <tbody>
                                <tr className={styles.tbodyLine}>
                                    <td className={styles.tbodyColumn}>
                                        Menor que 18,5
                                    </td>
                                    <td className={styles.tbodyColumn}>
                                        Baixo peso
                                    </td>
                                </tr>
                                <tr className={styles.tbodyLine}>
                                    <td className={styles.tbodyColumn}>
                                        De 18,5 a 24,99
                                    </td>
                                    <td className={styles.tbodyColumn}>
                                        Normal
                                    </td>
                                </tr>
                                <tr className={styles.tbodyLine}>
                                    <td className={styles.tbodyColumn}>
                                        De 25 a 29,99
                                    </td>
                                    <td className={styles.tbodyColumn}>
                                        Sobrepeso
                                    </td>
                                </tr>
                                <tr className={styles.tbodyLine}>
                                    <td className={styles.tbodyColumn}>
                                        Maior que 30
                                    </td>
                                    <td className={styles.tbodyColumn}>
                                        Obesidade
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    )
            }

        </div>


    )
}

export default Form;