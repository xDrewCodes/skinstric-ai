
import { useNavigate } from 'react-router-dom'
import BackButton from '../components/ui/BackButton'
import UploadOutline1 from '../assets/imports/outline.png'
import UploadOutline2 from '../assets/imports/outline2.png'
import UploadOutline3 from '../assets/imports/outline3.png'
import CameraIcon from '../assets/imports/shutter.png'
import GalleryIcon from '../assets/imports/gallery.png'
import React from 'react'
import ProceedButton from '../components/ui/ProceedButton'

const Upload = () => {

    let navigate = useNavigate()

    return (
        <section id="upload">
            <div className="section-subhead">to start analysis</div>
            <div className="upload__camera">
                <div className="upload__camera--outline">
                    <img src={UploadOutline1} alt="" />
                    <img src={UploadOutline2} alt="" />
                    <img src={UploadOutline3} alt="" />
                </div>
                <img src={CameraIcon} alt="" className="camera__icon" />
                <div className="camera__title">
                    Allow A.I.<br />To Scan Your Face
                </div>
            </div>
            <div className="upload__gallery">
                <div className="upload__gallery--outline">
                    <img src={UploadOutline1} alt="" />
                    <img src={UploadOutline2} alt="" />
                    <img src={UploadOutline3} alt="" />
                </div>
                <img src={GalleryIcon} alt="" className="gallery__icon" />
                <div className="gallery__title">
                    Allow A.I.<br />To Access Gallery
                </div>
            </div>

            <BackButton loc="/birthplace" />
            <ProceedButton loc="/preparing" />

        </section>
    )
}

export default Upload
