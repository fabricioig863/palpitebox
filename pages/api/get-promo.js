import { GoogleSpreadsheet } from 'google-spreadsheet';

const doc = new GoogleSpreadsheet(process.env.JWT_SHEET_DOC_ID);

export default async (req, res) => {

  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.JWT_SHEET_CLIENT_EMAIL,
      private_key: process.env.JWT_SHEET_PRIVATE_KEY
    })
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[2];
    await sheet.loadCells('A2:B2');

    const mostrarPromocaoCell = sheet.getCell(1, 0);
    const textoCell = sheet.getCell(1, 1);

    res.end(JSON.stringify({
      showCoupon: mostrarPromocaoCell.value === 'VERDADEIRO',
      message: textoCell.value
    }))

  } catch (err) {
    res.end(JSON.stringify({
      showCoupon: false,
      message: ''
    }))
    console.log(err)
  }
}