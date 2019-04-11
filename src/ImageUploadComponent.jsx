import React, {Component} from 'react';

class ImageUpload extends Component {
    constructor(props) {
        super(props) 
            this.state = {
                file: '',
                imagePreviewUrl: ''
        }
    }
  
    handleSubmit = e => {
        e.preventDefault();
    }
  
    handleImageChange = e =>{
        e.preventDefault();
  
        let reader = new FileReader();
        let file = e.target.files[0] || e.dataTransfer.files[0];
        reader.onloadend = () => {
            this.setState({ file: file, imagePreviewUrl: reader.result });
        }
        reader.readAsDataURL(file)
    }
  
    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
  
      return (
        <div className="ImageUploadComponent">
            <form onSubmit={this.handleSubmit}>
                <input type="file" onChange={this.handleImageChange} />
            </form><br/>
            {!$imagePreview && <img src={imagePreviewUrl} />}
        </div>
      )
    }
  
}


export default ImageUpload;