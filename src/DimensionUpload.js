import FileUpload from "./FileUpload";
import './DimensionUpload.css';


function DimensionUpload() {
    return(
        <div className="container">
            <p style={{ fontSize: '2rem',width:'fit-content', borderColor: '#2969e0', borderStyle: 'groove', padding: '1rem'}}>Dimensional  Data  Upload   </p>
        <div className="dimensions">
        
        <FileUpload uploadPath='Product'/>
        <FileUpload uploadPath='Employee'/>
        <FileUpload uploadPath='Customer'/>
        <FileUpload uploadPath='Payment'/>
        </div>

        </div>
    
    );


}

export default DimensionUpload;
