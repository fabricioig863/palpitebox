import { GoogleSpreadsheet } from 'google-spreadsheet';
import { formBase64 } from '../../utils/base64';

const doc = new GoogleSpreadsheet(process.env.JWT_DOC_ID);

export default async (req, res) => {
  console.log(formBase64(process.env.JWT_PRIVATE_KEY))
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.JWT_CLIENT_EMAIL,
      private_key: formBase64(process.env.JWT_PRIVATE_KEY)
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