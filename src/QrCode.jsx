import { useState } from "react";


export const QrC = () => {
    const [ img,setImg]    =   useState("")
    const [loading,setLoading] = useState(false);
    const [qrdata,setQrData]= useState("");
    const [qrsize,setQrSize] = useState("")
    async function generateQr() 
    {   
        setLoading(true);
        try{
            const url =`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrdata)} &size=${qrsize}x${qrsize}`;
            setImg(url);

        }catch(error){
            console.error("Error in Qr",error);
        }finally{
            setLoading(false);
        }
    }   
    
    function downloadQr(){
        fetch(img)
        .then((response)=>response.blob())
        .then((blob)=>{
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "qrcode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild()
        })
        .catch((error)=>{
            console.error("error downloading,",error);
        })
    }
    return ( 
    <div className="app-container">
        <h1>GENERATE QR CODE</h1>
        {loading && <p>please wait...</p>}
        { img && <img src={img} className="imgQr" /> }
    <div>
        <label htmlFor="dataInput"className="input-label">Data for Qrcode:</label>
        <input type="text" value={qrdata} id="dataInput" placeholder="Enter data for Qrcode" onChange={(e)=>setQrData(e.target.value)} />
        <label htmlFor="sizeInput"className="input-label">Image size(e.g., 150):</label>
        <input type="text" id="size-input" placeholder="Enter image size" onChange={(e)=>setQrSize(e.target.value)} />
        <button className="generate-code" onClick={generateQr}>Generate Qr code</button>
        <button className="download-code" onClick={downloadQr}>Download Qr code</button>
        <p className="footer">
            DESIGNED BY <a href="#">SHACHIN</a>
        </p>
    </div>
    
    </div>
    );
};
