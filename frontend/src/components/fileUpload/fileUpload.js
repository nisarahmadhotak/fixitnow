import React, { Component } from "react";
import axios from "axios";

export default class FileUpload extends Component {
  // state = {
  //   image: null,
  //   imgUrl: ""
  // };
  // handleSubmit = async e => {
  //   e.preventDefault();
  //   console.log("files submiteed");
  //   console.log(this.state.image);

  //   const data = new FormData();
  //   data.append("files", this.state.image);

  //   const upload_res = await axios({
  //     method: "POST",
  //     url: "http://localhost:1337/upload",
  //     data
  //   });
  //   console.log("uploaded imagedata", upload_res.data[0].id);
  //   const id = upload_res.data[0].id;
  //   const get_uploads = await axios({
  //     method: "GET",
  //     url: `http://localhost:1337/upload/files/${id}`,
  //     data
  //   });
  //   console.log("GET UPLOAD FILES : ", get_uploads.data.url);
  //   this.setState({
  //     imgUrl: get_uploads.data.url
  //   });
  // };

  // handleChange = e => {
  //   console.log(e.target.files);
  //   this.setState({
  //     image: e.target.files[0]
  //   });
  // };

  render() {
    return (
      <React.Fragment>
        <form
          className="u-margin-bottom-medium-1"
          onSubmit={this.props.handleProfilePostSubmit}
          encType="multipart/form-data"
        >
          <div>
            <img
              src={process.env.REACT_APP_BACKEND_URL + this.props.imgUrl}
              className="fileUploadImage"
            />
          </div>
          <div>
            <input
              type="file"
              onChange={this.props.handleProfileFileChange}
              id="file"
              className="fileUpload"
            />
            <label htmlFor="file" className="fileUploadLabel">
              Choose a Photo
            </label>
          </div>
          <div>
            <button type="submit" className="fileUploadButton">
              <i class="fas fa-upload"></i>Upload
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
