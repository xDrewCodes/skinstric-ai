import { useNavigate } from 'react-router-dom'
import BackButton from '../components/ui/BackButton'
import ProceedButton from '../components/ui/ProceedButton'
import GoBackButton from '../assets/imports/upload-button.png'
import UploadOutline1 from '../assets/imports/outline.png'
import UploadOutline2 from '../assets/imports/outline2.png'
import UploadOutline3 from '../assets/imports/outline3.png'
import CameraIcon from '../assets/imports/shutter.png'
import GalleryIcon from '../assets/imports/gallery.png'
import VideoCamera from '../assets/imports/video-button.png'
import VideoPointer from '../assets/imports/video-pointer.png'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useOutlineAnim } from '../anim'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Upload = ({ demos, setDemos }) => {

    const [isRecording, setIsRecording] = useState(false)
    const [isSelecting, setIsSelecting] = useState(false)
    const [showProceed, setShowProceed] = useState(!!localStorage.getItem('race'))
    useOutlineAnim()

    const API_URL = process.env.REACT_APP_BACKEND_URL

    async function initCurrents() {
        await axios.get(`${API_URL}/user/${localStorage.getItem('skinstricID')}`)
            .then(res => {
                if (!!res.data.race) {
                    localStorage.setItem('race', res.data.race)
                    localStorage.setItem('age', res.data.age)
                    localStorage.setItem('sex', res.data.gender)
                    setShowProceed(true)
                }
            })
            .catch(err => console.error(err))
    }

    let navigate = useNavigate()

    async function getCameraAccess() {
        setIsRecording(true)
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true })

            // Select the video element
            const videoElement = document.querySelector('#camera__video')
            if (videoElement) {
                videoElement.srcObject = stream
                videoElement.play()
            } else {
                console.error("Camera element not found.")
            }
        } catch (error) {
            if (error.name === 'NotAllowedError') {
                alert("Camera access was denied. Please allow access to use this feature.")
            } else if (error.name === 'NotFoundError') {
                alert("No camera device found. Please connect a camera and try again.")
            } else {
                console.error("Error accessing camera:", error)
                alert("An unexpected error occurred while accessing the camera.")
            }
        }
    }

    function askFile() {
        document.querySelector('#gallery__input').click()
    }

    function captureFrame() {
        const videoElement = document.querySelector('#camera__video')
        const canvas = document.querySelector('#capture__canvas')

        if (videoElement && canvas) {
            const context = canvas.getContext('2d')
            canvas.width = videoElement.videoWidth
            canvas.height = videoElement.videoHeight

            context.drawImage(videoElement, 0, 0, canvas.width, canvas.height)

            videoElement.style.display = 'none'
            canvas.style.display = 'block'
            setIsSelecting(true)
        } else {
            console.error("Video or canvas element not found.")
        }
    }

    function retake() {
        const videoElement = document.querySelector('#camera__video')
        const canvas = document.querySelector('#capture__canvas')

        videoElement.style.display = 'block'
        canvas.style.display = 'none'
        setIsSelecting(false)
    }

    function keep() {
        const canvas = document.querySelector('#capture__canvas')
        if (canvas) {
            const base64String = canvas.toDataURL('image/png')
            savePicture(base64String)
        } else {
            console.error("Canvas element not found.")
        }
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

        const races = Object.entries(result.data.data.race)
            .map(item => [item[0], (item[1] * 100).toFixed(2)])
            .sort((a, b) => b[1] - a[1])

        const ages = Object.entries(result.data.data.age)
            .map(item => [item[0], (item[1] * 100).toFixed(2)])
            .sort((a, b) => b[1] - a[1])

        const genders = Object.entries(result.data.data.gender)
            .map(item => [item[0], (item[1] * 100).toFixed(2)])
            .sort((a, b) => b[1] - a[1])

        const currUser = await axios.get(`${API_URL}/user/${localStorage.getItem('skinstricID')}`).catch(err => console.error(err))

        let currentRace = races[0][0]
        let currentAge = ages[0][0]
        let currentSex = genders[0][0]

        if (currUser.data.race) {
            currentRace = currUser.data.race
            currentAge = currUser.data.age
            currentSex = currUser.data.gender
        }

        await axios.post(`${API_URL}/edit/${localStorage.getItem('skinstricID')}`, {

            race: currentRace,
            age: currentAge,
            gender: currentSex,
            demos: result.data.data
        })
            .catch(err => console.error(err))

        localStorage.setItem('race', currentRace)
        localStorage.setItem('age', currentAge)
        localStorage.setItem('sex', currentSex)

        navigate('/analysis-menu')
    }

    useGSAP(() => {
        gsap.timeline()
            .from('#upload', { opacity: 0, duration: 1 })
    })

    useEffect(() => {
        initCurrents()
    }, [])

    return (
        <section id="upload">
            {!isRecording
                ?
                <>
                    <div className="section-subhead">to start analysis</div>
                    <div className="upload__camera">
                        <div className="upload__camera--outline">
                            <img className="outline1" src={UploadOutline1} alt="" />
                            <img className="outline2" src={UploadOutline2} alt="" />
                            <img className="outline3" src={UploadOutline3} alt="" />
                        </div>
                        <img
                            onClick={getCameraAccess}
                            src={CameraIcon}
                            alt=""
                            className="camera__icon"
                        />
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

                    <BackButton loc="/introduction" />

                    {
                        showProceed &&
                        <ProceedButton loc="/analysis-menu" proceed="true" />
                    }

                </>
                :
                <div className="upload__video">
                    {!isSelecting
                        ?
                        <>
                            <div className='upload__video--nav'>
                                <div className="upload__video--title nav__logo">Skinstric</div>
                                <div className="upload__video--crumb">[ Upload ]</div>
                            </div>
                            <div className="upload__video--button" onClick={captureFrame}>
                                Take Picture
                                <div className="upload__video--button--img">
                                    <img src={VideoCamera} alt="" />
                                </div>
                            </div>
                            <div className="upload__video--info">
                                <h4>To get a better result make sure to have</h4>
                                <div className="upload__video--pointers">
                                    <div className="upload__video--pointer">
                                        <img src={VideoPointer} alt="" />
                                        neutral expression
                                    </div>
                                    <div className="upload__video--pointer">
                                        <img src={VideoPointer} alt="" />
                                        frontal pose
                                    </div>
                                    <div className="upload__video--pointer">
                                        <img src={VideoPointer} alt="" />
                                        adequate lighting
                                    </div>
                                </div>
                            </div>
                            <img
                                onClick={() => setIsRecording(false)}
                                className="upload__video--back"
                                src={GoBackButton}
                                alt="" />
                        </>
                        :
                        <div className="upload__snapshot--buttons">
                            <div className="upload__video--notif">Great Shot!</div>
                            <div
                                onClick={retake}
                                className="upload__snapshot--retake">Retake</div>
                            <div
                                onClick={keep}
                                className="upload__snapshot--confirm">Submit</div>
                        </div>
                    }
                    <video id="camera__video" autoPlay muted></video>
                    <canvas id="capture__canvas" style={{ display: 'none' }}></canvas>
                </div>
            }
        </section>
    )
}

export default Upload
