import { createHospedagens } from "./createHospedagens.js";

export const filterByType = (dataHospedagens, type, div) => {
    const hospedagens_casa = dataHospedagens.filter((element) => element.tipo_hos === type);
    createHospedagens(hospedagens_casa, div);
};