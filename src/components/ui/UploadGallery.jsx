
import UploadOutline1 from '../../assets/imports/outline.png'
import UploadOutline2 from '../../assets/imports/outline2.png'
import UploadOutline3 from '../../assets/imports/outline3.png'
import GalleryIcon from '../../assets/imports/gallery.png'
import React from 'react'

const UploadGallery = ({ savePicture, askFile }) => {
    return (
        <div className="upload__gallery">
                <div className="upload__gallery--outline">
                    <img className="outline1" src={UploadOutline1} alt="" />
                    <img className="outline2" src={UploadOutline2} alt="" />
                    <img className="outline3" src={UploadOutline3} alt="" />
                </div>
                <img
                    onClick={askFile}
                    src={GalleryIcon}
                    alt=""
                    className="gallery__icon"
                />
                <input
                    onChange={(e) => {
                        const file = e.target.files[0]
                        if (file) {
                            const reader = new FileReader()
                            reader.onloadend = function () {
                                savePicture(reader.result)

                            };
                            reader.readAsDataURL(file)
                        }
                    }}
                    type="file"
                    accept="image/png, image/jpeg"
                    id="gallery__input"
                    style={{ display: 'none' }}
                />
                <div className="gallery__title">
                    Allow A.I.<br />To Access Gallery
                </div>
            </div>
    )
}

export default UploadGallery
