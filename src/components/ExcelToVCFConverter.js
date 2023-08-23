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
    const handleDownload = () => {
        // Trigger the download by creating a virtual link and clicking it
        const link = document.createElement('a');
        link.href = URL.createObjectURL(new Blob([vcfData], { type: 'text/vcard' }));
        link.download = 'contacts.vcf';
        link.click();
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

            const blob = new Blob([vcfContent], { type: 'text/vcard' });

            // Create a download link for the Blob
            const url = URL.createObjectURL(blob);

        

            // Clean up the URL
            URL.revokeObjectURL(url);

            setVCFData(vcfContent);
        };

        reader.readAsArrayBuffer(file);
    };

    return (
        <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Excel to VCF Converter</h4>
                        <input type="file" accept=".xlsx" onChange={handleFileUpload} className="form-control mb-3" />
                        <button onClick={handleDownload} className="btn btn-primary mb-3">Download VCF File</button>
                        <textarea
                            rows="10"
                            className="form-control"
                            value={vcfData}
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ExcelToVCFConverter;