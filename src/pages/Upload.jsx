import { useNavigate } from 'react-router-dom'
import BackButton from '../components/ui/BackButton'
import UploadOutline1 from '../assets/imports/outline.png'
import UploadOutline2 from '../assets/imports/outline2.png'
import UploadOutline3 from '../assets/imports/outline3.png'
import CameraIcon from '../assets/imports/shutter.png'
import React from 'react'
import ProceedButton from '../components/ui/ProceedButton'
import axios from 'axios'
import { useOutlineAnim } from '../anim'
import UploadGallery from '../components/ui/UploadGallery'

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
            
            <UploadGallery savePicture={savePicture} askFile={askFile} />

            <BackButton loc="/location" />
            <ProceedButton loc="/preparing" />

        </section>
    )
}

export default Upload
