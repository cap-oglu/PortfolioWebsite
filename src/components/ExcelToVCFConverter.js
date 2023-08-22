import React, { useState } from 'react';
import * as XLSX from 'xlsx';


function ExcelToVCFConverter() {
    const [vcfData, setVCFData] = useState('');
    const generateVCard = (vcard) => {
        return `BEGIN:VCARD
            VERSION:${vcard.version}
            FN:${vcard.fn}
            TEL;TYPE=${vcard.tel[0].type}:${vcard.tel[0].value}
            END:VCARD`;
    };
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            const data = new Uint8Array(event.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

            const vcfArray = excelData.map((row) => {
                const vcard = {
                    version: '4.0',
                    fn: row[0], // Assuming the name is in the first column
                    tel: [{ type: 'cell', value: row[1] }] // Assuming the phone number is in the second column
                };
                return generateVCard(vcard);
            });

            const vcfContent = vcfArray.join('\n');
            setVCFData(vcfContent);
        };

        reader.readAsArrayBuffer(file);
    };

    return (
        <div>
            <input type="file" accept=".xlsx" onChange={handleFileUpload} />
            <textarea rows="10" cols="50" value={vcfData} readOnly />
        </div>
    );
}

export default ExcelToVCFConverter;