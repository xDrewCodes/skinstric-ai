import { useNavigate } from 'react-router-dom'
import BackButton from '../components/ui/BackButton'
import UploadOutline1 from '../assets/imports/outline.png'
import UploadOutline2 from '../assets/imports/outline2.png'
import UploadOutline3 from '../assets/imports/outline3.png'
import CameraIcon from '../assets/imports/shutter.png'
import GalleryIcon from '../assets/imports/gallery.png'
import React from 'react'
import ProceedButton from '../components/ui/ProceedButton'
import axios from 'axios'
import { useOutlineAnim } from '../anim'

const Upload = ({ setDemos }) => {

    useOutlineAnim()

    let navigate = useNavigate()

    function askFile() {
        document.querySelector('#gallery__input').click()
    }

    function savePicture(base64String) {
        navigate('/preparing')
        submitImage(base64String)
    }

    async function submitImage(img) {
        const result = await axios({
            method: 'POST',
            data: {
                image: img
            },
            url: 'https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo'
        })
        setDemos(result.data.data)
        navigate('/analysis-menu')
    }

    return (
        <section id="upload">
            <div className="section-subhead">to start analysis</div>
            <div className="upload__camera">
                <div className="upload__camera--outline">
                    <img className="outline1" src={UploadOutline1} alt="" />
                    <img className="outline2" src={UploadOutline2} alt="" />
                    <img className="outline3" src={UploadOutline3} alt="" />
                </div>
                <img src={CameraIcon} alt="" className="camera__icon" />
                <div className="camera__title">
                    Allow A.I.<br />To Scan Your Face
                </div>
            </div>
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

            <BackButton loc="/location" />
            <ProceedButton loc="/preparing" />

        </section>
    )
}

export default Upload
